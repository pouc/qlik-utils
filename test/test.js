var fs = require('fs');
var promise = require('q');
var chai = require('chai');
var sinon = require('sinon');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
chai.use(require('chai-things'));
chai.use(require('chai-string'));

var expect = chai.expect;
var should = chai.should();

var exports = require('../index.js');

var Task = require('rxjs-task-subject');
var proxy = require('qlik-fake-proxy');

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
                        UserDirectory: 'qlik',
                        UserId: 'lft',
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
                        UserDirectory: 'DESKTOP-GRJ2NM5',
                        UserId: 'QLIKADMIN',
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

var hooksConfig = 'real';

describe('default conf...', () => {
    
    var utils = exports;
    
    describe('getTicket...', () => {

        it('should be defined', function() {
            expect(utils.getTicket).to.not.be.undefined;
        });
    
        beforeEach(hooks[hooksConfig].before);
        afterEach(hooks[hooksConfig].after);

        it('should get ticket', function() {
            return utils.getTicket(hooks.params.options, {
                UserId: hooks.params.options.UserId,
                UserDirectory: hooks.params.options.UserDirectory,
                Attributes: []
            }).should.eventually.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
        });

        it('should get ticket with fake targetId', function() {
            return utils.getTicket(hooks.params.options, {
                UserId: hooks.params.options.UserId,
                UserDirectory: hooks.params.options.UserDirectory,
                TargetId: 'this is fake',
                Attributes: []
            }).should.eventually.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
        });
        
        it('should not get ticket if no UserId', function() {
            return utils.getTicket(hooks.params.options, {
                UserDirectory: hooks.params.options.UserDirectory,
                Attributes: []
            }).should.eventually.be.rejectedWith('Required property &#39;UserId&#39; not found in JSON');
        });
        
        it('should not get ticket if no UserDirectory', function() {
            return utils.getTicket(hooks.params.options, {
                UserId: hooks.params.options.UserId,
                Attributes: []
            }).should.eventually.be.rejectedWith('Required property &#39;UserDirectory&#39; not found in JSON');
        });

    });
    
});

describe('Observable...', () => {
    
    var utils = exports.create({returnObservable: true});
    
    describe('getTicket...', () => {

        it('should be defined', function() {
            expect(utils.getTicket).to.not.be.undefined;
        });

        beforeEach(hooks[hooksConfig].before);
        afterEach(hooks[hooksConfig].after);

        it('should get ticket', function(done) {
            var cb = sinon.spy();
            
            var ticket = utils.getTicket(hooks.params.options, {
                UserId: hooks.params.options.UserId,
                UserDirectory: hooks.params.options.UserDirectory,
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
                UserId: hooks.params.options.UserId,
                UserDirectory: hooks.params.options.UserDirectory,
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
                        
                        expect(cb.getCall(1).args[0]).to.have.property('val').to.have.property('UserId').to.equalIgnoreCase(hooks.params.options.UserId);
                        expect(cb.getCall(1).args[0]).to.have.property('val').to.have.property('UserDirectory').to.equalIgnoreCase(hooks.params.options.UserDirectory);
                        expect(cb.getCall(1).args[0]).to.have.property('val').to.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);

                        expect(ticket.info.val).to.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16);
                    });
                }
            );
        });
        
        it('should not get ticket if no UserId', function(done) {

            var cb = sinon.spy();
            
            var ticket = utils.getTicket(hooks.params.options, {
                UserDirectory: hooks.params.options.UserDirectory,
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
                UserId: hooks.params.options.UserId,
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
    
})





