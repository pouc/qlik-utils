var fs = require('fs');
var promise = require('q');
var chai = require('chai');
var sinon = require('sinon');
var ws = require('ws');

var util = require('util');
var delay = require('delay');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
chai.use(require('chai-things'));
chai.use(require('chai-string'));

var expect = chai.expect;
var should = chai.should();

var exports = require('../index.js');

var Task = require('rxjs-task-subject');
var proxy = require('qlik-fake-proxy');
var qrs = require('qlik-api-qrs');

var enigma = require('enigma.js');
var qixSchema = require('../node_modules/enigma.js/schemas/qix/3.1/schema.json');

var readFile = promise.denodeify(fs.readFile);

function check(done, f) {

	return promise().then(() => {
		try {
			return f();
		} catch (e) {
			return promise.reject(e);
		}
	}).then(() => {
		done();
	}).fail((err) => {
		done(err);
	}); 

}

var hooks = {
    params: {},
    none: {
        before: () => {},
        after: () => {}
    },
    fake: {
        before: (done) => {
            promise.all([
                proxy.createProxy({ port: 1337, secure: true }),
                readFile('./node_modules/qlik-fake-proxy/certs/client_key.pem'),
                readFile('./node_modules/qlik-fake-proxy/certs/client.pem'),
                readFile('./node_modules/qlik-fake-proxy/certs/root.pem'),
            ]).then((reply) => {
                check(done, function() {
                    hooks.params.server = reply[0];
                    hooks.params.options = {
                        qpsRestUri: `https://localhost:${reply[0].address().port}/qps`,
                        qrsRestUri: `https://localhost:${reply[0].address().port}/qrs`,
                        headers: {
                            'X-Qlik-User': `UserDirectory=qlik;UserId=lft`,
                        },
                        wsPort: reply[0].address().port,
                        key: reply[1],
                        cert: reply[2],
                        ca: reply[3]
                    };
                });
            }).fail((err) => {
                done(err);
            });
        },
        after: (done) => {
            check(done, function() {
                hooks.params.server.close();
            });
        }
    },
    real: {
        before: (done) => {
            promise.all([
                readFile('./test/certs/client_key.pem'),
                readFile('./test/certs/client.pem'),
                readFile('./test/certs/root.pem'),
            ]).then((reply) => {
                check(done, function() {
                    hooks.params.options = {
                        qpsRestUri: 'https://localhost:4243/qps',
                        qrsRestUri: 'https://localhost:4242/qrs',
                        headers: {
                            'X-Qlik-User': `UserDirectory=DESKTOP-GRJ2NM5;UserId=qlikadmin`,
                        },
                        wsPort: 4747,
                        key: reply[0],
                        cert: reply[1],
                        ca: reply[2]
                    };
                });
            }).fail((err) => {
                done(err);
            });
        },
        after: () => {}
    }
}

var hooksConfig = 'fake';

describe('default conf...', () => {
    
    var utils = exports;
    
    beforeEach(hooks[hooksConfig].before);
    afterEach(hooks[hooksConfig].after);
    
    describe('getTicket...', () => {

        it('should be defined', function() {
            expect(utils.getTicket).to.not.be.undefined;
        });

        it('should get ticket', function() {
            return utils.getTicket(hooks.params.options, {
                UserId: 'lft',
                UserDirectory: 'qlik',
                Attributes: []
            }).should.eventually.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
        });

        it('should get ticket with fake targetId', function() {
            return utils.getTicket(hooks.params.options, {
                UserId: 'lft',
                UserDirectory: 'qlik',
                TargetId: 'this is fake',
                Attributes: []
            }).should.eventually.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
        });
        
        it('should not get ticket if no UserId', function() {
            return utils.getTicket(hooks.params.options, {
                UserDirectory: 'qlik',
                Attributes: []
            }).should.eventually.be.rejectedWith('Required property &#39;UserId&#39; not found in JSON');
        });
        
        it('should not get ticket if no UserDirectory', function() {
            return utils.getTicket(hooks.params.options, {
                UserId: 'lft',
                Attributes: []
            }).should.eventually.be.rejectedWith('Required property &#39;UserDirectory&#39; not found in JSON');
        });

    });
    
    describe('addToWhiteList...', () => {
        
        function randomInt(low, high) {
            return Math.floor(Math.random() * (high - low) + low);
        }

        it('should be defined', () => {
            expect(utils.addToWhiteList).to.not.be.undefined;
        });
        
        

        it('should add to whitelist', function(done) {

            var qrsApi = qrs(hooks.params.options);

            var randomIp = util.format('10.0.%s.%s', randomInt(0, 254), randomInt(0, 254));

            utils.addToWhiteList(hooks.params.options, {
                ip: randomIp
            }).then(function(reply) {

                reply.should.all.have.property('websocketCrossOriginWhiteList');
                reply.forEach(function(item) {
                    if (typeof item.websocketCrossOriginWhiteList !== 'undefined') {
                        item.websocketCrossOriginWhiteList.should.include(randomIp);
                    }
                });

            }).should.notify(done);
        });
        
        it('should add to whitelist with index filter', function(done) {
            var randomIp = util.format('10.0.%s.%s', randomInt(0, 254), randomInt(0, 254));

            utils.addToWhiteList(hooks.params.options, {
                ip: randomIp,
                vp: 0
            }).then(function(reply) {

                reply.should.all.have.property('websocketCrossOriginWhiteList');
                reply.forEach(function(item) {
                    if (typeof item.websocketCrossOriginWhiteList !== 'undefined') {
                        item.websocketCrossOriginWhiteList.should.include(randomIp);
                    }
                });

            }).should.notify(done);
        });
        
        it('should add to whitelist with prefix filter', function(done) {
            var randomIp = util.format('10.0.%s.%s', randomInt(0, 254), randomInt(0, 254));

            utils.addToWhiteList(hooks.params.options, {
                ip: randomIp,
                vp: '/'
            }).then(function(reply) {

                reply.should.all.have.property('websocketCrossOriginWhiteList');
                reply.forEach(function(item) {
                    if (typeof item.websocketCrossOriginWhiteList !== 'undefined') {
                        item.websocketCrossOriginWhiteList.should.include(randomIp);
                    }
                });

            }).should.notify(done);
        });
        
        it('should delay 5s', function() {
            this.timeout(10000);
            return delay(5000);
        });

    });
    
    describe('mixins...', () => {
        
        it('should be defined', function() {
            expect(utils.mixins).to.not.be.undefined;
        });

        it('enigma should accept mixin', function() {
            
            var config = {
                schema: qixSchema,
                host: 'https://localhost',
                session: {
                    route: 'app/engineData',
                    host: 'localhost',
                    port: hooks.params.options.wsPort,
                    unsecure: false,
                    disableCache: true
                },
                mixins: [utils.mixins.Doc],
                listeners: {
                    "notification:OnAuthenticationInformation": ( authInfo ) => {
                        console.log( authInfo );
                }},
                createSocket(url) {
                    var sock = new ws(url, {
                        ca: [hooks.params.options.ca],
                        key: hooks.params.options.key,
                        cert: hooks.params.options.cert,
                        headers: hooks.params.options.headers,
                        rejectUnauthorized: false
                    });
                    return sock;
                },
            };

            return enigma.getService('qix', config).then((qix) => {
                return qix.global.getDocList().then((docList) => {
                    return promise.all(
                        docList.slice(0, 5).map((doc) => {
                            return qix.global.openDoc(doc.qDocId).then(app => {
                                return app.getSheets();
                            });
                        })
                    );
                });

            }).then((sh) => {
                return promise.all(
                    expect(sh).to.be.a('array'),
                    expect(sh[0]).to.be.a('array'),
                    expect(sh[0][0]).to.have.deep.property('qInfo.qType').to.equal('sheet')
                )
            })

        });

    })

});

describe('Observable...', () => {
    
    var utils = exports.create({returnObservable: true});
    
    beforeEach(hooks[hooksConfig].before);
    afterEach(hooks[hooksConfig].after);
    
    describe('getTicket...', () => {

        it('should be defined', function() {
            expect(utils.getTicket).to.not.be.undefined;
        });

        it('should get ticket', function(done) {
            var cb = sinon.spy();
            
            var ticket = utils.getTicket(hooks.params.options, {
                UserId: 'lft',
                UserDirectory: 'qlik',
                Attributes: []
            });
            
            ticket.subscribe(
                (val) => cb(val),
                (err) => done(err),
                () => {
                    check(done, () => {
                        expect(cb).to.have.been.calledOnce;
                        expect(ticket.info.val).to.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
                    });
                }
            );

        });

        it('should get ticket with fake targetId', function(done) {

            var cb = sinon.spy();
            
            var ticket = utils.getTicket(hooks.params.options, {
                UserId: 'lft',
                UserDirectory: 'qlik',
                TargetId: 'this is fake',
                Attributes: []
            });
            
            ticket.subscribe(
                (val) => cb(val),
                (err) => done(err),
                () => {
                    check(done, () => {
                        expect(cb).to.have.been.calledTwice;

                        expect(cb.getCall(0).args[0]).to.be.an.instanceof(Task.TaskSubjectInfo);
                        expect(cb.getCall(0).args[0]).to.have.property('status').to.equal('running');
                        expect(cb.getCall(0).args[0]).to.have.property('val').to.equal('warning');
                        expect(cb.getCall(0).args[0]).to.have.property('detail').to.equal('Wrong targetId: \'this is fake\', generating a ticket to default location');
                        
                        expect(cb.getCall(1).args[0]).to.be.an.instanceof(Task.TaskSubjectInfo);
                        expect(cb.getCall(1).args[0]).to.have.property('status').to.equal('running');
                        
                        expect(cb.getCall(1).args[0]).to.have.property('val').to.have.property('UserId').to.equalIgnoreCase('lft');
                        expect(cb.getCall(1).args[0]).to.have.property('val').to.have.property('UserDirectory').to.equalIgnoreCase('qlik');
                        expect(cb.getCall(1).args[0]).to.have.property('val').to.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);

                        expect(ticket.info.val).to.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
                    });
                }
            );
        });
        
        it('should not get ticket if no UserId', function(done) {

            var cb = sinon.spy();
            
            var ticket = utils.getTicket(hooks.params.options, {
                UserDirectory: 'qlik',
                Attributes: []
            });
            
            ticket.subscribe(
                (val) => done(val),
                (err) => {
                    check(done, () => {
                        expect(cb).to.not.have.been.called;
                        
                        expect(err).to.be.an.instanceof(Task.TaskSubjectInfo);
                        
                        expect(err).to.have.property('status').to.equal('failed');
                        expect(err).to.have.property('val').to.be.an.instanceof(Error);
                        expect(err).to.have.property('val').to.have.property('message').to.startWith('Required property &#39;UserId&#39; not found in JSON');
                    });
                },
                () => done('Error')
            );
            
        });
        
        it('should not get ticket if no UserDirectory', function(done) {

            var cb = sinon.spy();
            
            var ticket = utils.getTicket(hooks.params.options, {
                UserId: 'lft',
                Attributes: []
            });
            
            ticket.subscribe(
                (val) => done(val),
                (err) => {
                    check(done, () => {
                        expect(cb).to.not.have.been.called;
                        
                        expect(err).to.be.an.instanceof(Task.TaskSubjectInfo);
                        
                        expect(err).to.have.property('status').to.equal('failed');
                        expect(err).to.have.property('val').to.be.an.instanceof(Error);
                        expect(err).to.have.property('val').to.have.property('message').to.startWith('Required property &#39;UserDirectory&#39; not found in JSON');
                    });
                },
                () => done('Error')
            );
            
        });

    });
    
    describe('mixins...', () => {
        
        it('should be defined', function() {
            expect(utils.mixins).to.not.be.undefined;
        });
        
        it('exportCube', function() {
            
            var config = {
                schema: qixSchema,
                host: 'https://localhost',
                session: {
                    route: 'app/engineData',
                    host: 'localhost',
                    port: hooks.params.options.wsPort,
                    unsecure: false,
                    disableCache: true
                },
                mixins: [utils.mixins.Doc],
                listeners: {
                    "notification:OnAuthenticationInformation": ( authInfo ) => {
                        console.log( authInfo );
                }},
                createSocket(url) {
                    var sock = new ws(url, {
                        ca: [hooks.params.options.ca],
                        key: hooks.params.options.key,
                        cert: hooks.params.options.cert,
                        headers: hooks.params.options.headers,
                        rejectUnauthorized: false
                    });
                    return sock;
                },
            };

            return enigma.getService('qix', config).then((qix) => {
                return qix.global.getDocList().then((docList) => {
                    return promise.all(
                        docList.slice(0, 5).map((doc) => {
                            return qix.global.openDoc(doc.qDocId).then(app => {
                                return app.exportCube({
                                    "qStateName":"$",
                                    "qDimensions":[{
                                        "qLibraryId":"",
                                        "qNullSuppression":false,
                                        "qDef":{
                                            "qGrouping":"N",
                                            "qFieldDefs":["$Table"],
                                            "qFieldLabels":[""]
                                        }
                                    }],
                                    "qMeasures":[{
                                        "qLibraryId":"",
                                        "qDef":{
                                            "qLabel":"",
                                            "qDescription":"",
                                            "qTags":["tags"],
                                            "qGrouping":"N",
                                            "qDef":"=Count($Field)"
                                        }
                                    }],
                                    "qInitialDataFetch":[{
                                        "qTop":0,
                                        "qLeft":0,
                                        "qHeight":0,
                                        "qWidth":0
                                    }]
                                }).toPromise();
                            });
                        })
                    );
                });

            }).then((counts) => {
                return promise.all([
                    expect(counts).to.be.a('array'),
                    expect(counts[0]).to.be.a('array'),
                    expect(counts[0][0]).to.be.a('array'),
                    expect(counts[0][0][0]).to.be.a('object'),
                    expect(counts[0][0][0]).to.have.property('qText'),
                    expect(counts[0][0][0]).to.have.property('qNum'),
                    expect(counts[0][0][0]).to.have.property('qElemNumber'),
                    expect(counts[0][0][0]).to.have.property('qState')
                ])
            })

        });
        
        it('export', function() {
            
            var config = {
                schema: qixSchema,
                host: 'https://localhost',
                session: {
                    route: 'app/engineData',
                    host: 'localhost',
                    port: hooks.params.options.wsPort,
                    unsecure: false,
                    disableCache: true
                },
                mixins: [utils.mixins.Doc],
                listeners: {
                    "notification:OnAuthenticationInformation": ( authInfo ) => {
                        console.log( authInfo );
                }},
                createSocket(url) {
                    var sock = new ws(url, {
                        ca: [hooks.params.options.ca],
                        key: hooks.params.options.key,
                        cert: hooks.params.options.cert,
                        headers: hooks.params.options.headers,
                        rejectUnauthorized: false
                    });
                    return sock;
                },
            };

            return enigma.getService('qix', config).then((qix) => {
                return qix.global.getDocList().then((docList) => {
                    return promise.all(
                        docList.slice(0, 5).map((doc) => {
                            return qix.global.openDoc(doc.qDocId).then(app => {
                                return app.export({
                                    d1: {name: '$Table', dimensionType: 'FIELD'},
                                    d2: {name: '$Field', dimensionType: 'AUTO'},
                                    d3: {name: 'Mouarf', dimensionType: 'IGNORE'}
                                }, {
                                    m1: {name: 'M1', measureType: 'FIELD', formula: '=COUNT(DISTINCT $Field)'},
                                    m2: {name: 'M2', measureType: 'AUTO', formula: '=COUNT($Field)'},
                                    m3: {name: 'M3', measureType: 'IGNORE', formula: '=1'}
                                }, [{
                                    field: '$Table',
                                    filters: ['Calendar']
                                }]).toPromise();
                            });
                        })
                    );
                });

            }).then((fields) => {
                return promise.all([
                    expect(fields).to.be.a('array'),
                    expect(fields[0]).to.be.a('array'),
                    expect(fields[0][0]).to.be.a('array').to.have.lengthOf(6)
                ])
            })

        });
        
    });
})





