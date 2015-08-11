var chai = require('chai');
var sinon = require("sinon");

chai.use(require('chai-as-promised'));
chai.use(require("sinon-chai"));
chai.use(require('chai-things'));

var expect = chai.expect;
var should = chai.should();

var utils = require('../index.js');
var util = require('util');
var Q = require('Q');
var fs = require('fs');
var promise = require('promise');


var testQlikSenseIp = '10.76.224.68';
var testQlikSensePfx = __dirname + '/client.pfx';


function check( done, f ) {
    try {
        f()
        done()
    } catch(e) {
        done(e)
    }
}

describe('ifnotundef...', function() {

    it('should be defined', function() {
        expect(utils.ifnotundef).to.not.be.undefined;
    });

    it('should work with 2 params', function() {
        expect(utils.ifnotundef(1, 2)).to.equal(1);
        expect(utils.ifnotundef('undefined', 2)).to.equal('undefined');

        expect(utils.ifnotundef(null, 2)).to.equal(2);
        expect(utils.ifnotundef(undefined, 2)).to.equal(2);
        expect(utils.ifnotundef(utils.toto, 2)).to.equal(2);
    });

    it('should work with 3 params', function() {
        expect(utils.ifnotundef(1, 2, 3)).to.equal(2);
        expect(utils.ifnotundef('undefined', 2, 3)).to.equal(2);

        expect(utils.ifnotundef(null, 2, 3)).to.equal(3);
        expect(utils.ifnotundef(undefined, 2, 3)).to.equal(3);
        expect(utils.ifnotundef(utils.toto, 2, 3)).to.equal(3);

        expect(utils.ifnotundef(null, 2, undefined)).to.be.undefined;
        expect(utils.ifnotundef(undefined, 2, undefined)).to.be.undefined;
        expect(utils.ifnotundef(utils.toto, 2, undefined)).to.be.undefined;
    });

});

describe('generateXrfkey...', function() {

    it('should be defined', function() {
        expect(utils.generateXrfkey).to.not.be.undefined;
    });

    it('should work without params', function() {

        var key_0p_1 = utils.generateXrfkey();
        var key_0p_2 = utils.generateXrfkey();
        var key_0p_3 = utils.generateXrfkey();

        expect(key_0p_1).to.be.a('string');
        expect(key_0p_1).to.have.length(16);
        expect(key_0p_1).to.match(/^[a-z0-9A-Z]*$/)

        expect(key_0p_2).to.be.a('string');
        expect(key_0p_2).to.have.length(16);
        expect(key_0p_2).to.match(/^[a-z0-9A-Z]*$/)

        expect(key_0p_3).to.be.a('string');
        expect(key_0p_3).to.have.length(16);
        expect(key_0p_3).to.match(/^[a-z0-9A-Z]*$/)

        expect(key_0p_1).to.not.equal(key_0p_2);
        expect(key_0p_1).to.not.equal(key_0p_3);
        expect(key_0p_2).to.not.equal(key_0p_3);

    });

    it('should work with 1 param', function() {

        var key_1p_1 = utils.generateXrfkey(8);
        var key_1p_2 = utils.generateXrfkey(8);
        var key_1p_3 = utils.generateXrfkey(12);

        expect(key_1p_1).to.be.a('string');
        expect(key_1p_1).to.have.length(8);
        expect(key_1p_1).to.match(/^[a-z0-9A-Z]*$/)

        expect(key_1p_2).to.be.a('string');
        expect(key_1p_2).to.have.length(8);
        expect(key_1p_2).to.match(/^[a-z0-9A-Z]*$/)

        expect(key_1p_3).to.be.a('string');
        expect(key_1p_3).to.have.length(12);
        expect(key_1p_3).to.match(/^[a-z0-9A-Z]*$/)

        expect(key_1p_1).to.not.equal(key_1p_2);

    });

    it('should work with 2 params', function() {

        var key_2p_1 = utils.generateXrfkey(8, 'abcdef');
        var key_2p_2 = utils.generateXrfkey(8, 'abcdef');
        var key_2p_3 = utils.generateXrfkey(12, 'abcdefGHIJKL');

        expect(key_2p_1).to.be.a('string');
        expect(key_2p_1).to.have.length(8);
        expect(key_2p_1).to.match(/^[a-f]*$/)

        expect(key_2p_2).to.be.a('string');
        expect(key_2p_2).to.have.length(8);
        expect(key_2p_2).to.match(/^[a-f]*$/)

        expect(key_2p_3).to.be.a('string');
        expect(key_2p_3).to.have.length(12);
        expect(key_2p_3).to.match(/^[a-fG-L]*$/)

        expect(key_2p_1).to.not.equal(key_2p_2);

    });

});

var readFile = promise.denodeify(fs.readFile);

describe('request...', function() {

    it('should be defined', function() {
        expect(utils.request).to.not.be.undefined;
    });

    it('should reject fake endpoints', function(done) {
        Q.all([
            utils.request({ restUri: 'ftp://localhost/qmc' }).should.be.rejectedWith('http/https is needed to make API call'),
            utils.request({ restUri: 'https://localhost/qmc', timeout: 1000 }).should.be.rejectedWith('Error: socket hang up')
        ]).should.notify(done)
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should accept real endpoints', function(done) {

        Q.all([
            utils.request({
                restUri: 'http://' + testQlikSenseIp + ':4444/status/servicestate',
                method: 'GET',
                'UserId': 'qlikservice',
                'UserDirectory': '2008R2-0'
            }).should.eventually.have.property("value").to.be.within(1, 3),
            pfx.then(function(pfx) {
                return utils.request({
                    restUri: 'https://' + testQlikSenseIp + ':4242/qrs/proxyservice/local',
                    method: 'GET',
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0',
                    pfx: pfx,
                    passPhrase: ''
                })
            }).should.eventually.have.property("id").to.match(/^[a-f\-0-9]*$/)
        ]).should.notify(done)
    });

});

describe('getTicket...', function() {

    it('should be defined', function() {
        expect(utils.getTicket).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should get ticket', function(done) {

        Q.all([
            pfx.then(function(pfx) {
                return utils.getTicket({
                    restUri: 'https://' + testQlikSenseIp + ':4243',
                    pfx: pfx,
                    passPhrase: ''
                }, {
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0',
                    'Attributes': []
                });
            }).should.eventually.have.property("Ticket").to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16)
        ]).should.notify(done)
    });

});

describe('openSession...', function() {

    it('should be defined', function() {
        expect(utils.openSession).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should open session', function(done) {

        Q.all([
            pfx.then(function(pfx) {
                return utils.getTicket({
                    restUri: 'https://' + testQlikSenseIp + ':4243',
                    pfx: pfx,
                    passPhrase: ''
                }, {
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0',
                    'Attributes': []
                });
            }).then(function(ticket) {
                return utils.openSession(ticket, 'https://' + testQlikSenseIp + '/qmc/')
            }).should.eventually.match(/X-Qlik-Session=[a-f0-9\-]{36};/)
        ]).should.notify(done);

    });

});


describe('Task...', function() {

    it('should be defined', function() {
        expect(utils.task).to.not.be.undefined;
    });

    var task = new utils.task();

    it('should be created', function() {
        expect(task).to.not.be.undefined;
        expect(task.status).to.equal('waiting');

        task.start();

        expect(task.status).to.equal('running');
    });

    it('should alert once', function(done) {

        var cb = sinon.spy();

        task.once(cb);
        task.once(cb);

        Q.all([
            task.running('a'),
            task.running('b')
        ]).then(function() {
            check(done, function() {
                expect(cb).to.have.been.calledOnce;
            })
        });

    });

    it('should alert thrice', function(done) {

        var cb = sinon.spy();

        task.bind(cb);
        task.bind(cb);

        Q.all([
            task.running('a'),
            task.running('b'),
            task.running('c')
        ]).then(function() {
            check(done, function() {
                expect(cb).to.have.been.calledThrice;
                task.unbind(cb);
            })
        });

    });

    it('should not alert', function(done) {

        var cb = sinon.spy();

        task.bind(cb);
        task.unbind(cb);

        Q.all([
            task.running()
        ]).then(function() {
            check(done, function() {
                expect(cb).to.not.have.been.called;
            })
        });

    });

    it('should store status', function() {

        task.running('aze', 'rty');

        expect(task.val).to.equal('aze');
        expect(task.detail).to.equal('rty');

    });

    it('should be done', function() {

        var cb = sinon.spy();

        task.done('yeah');

        expect(task.status).to.equal('done');
        expect(task.val).to.equal('yeah');
        expect(task.detail).to.be.undefined;

        task.once(cb);

        expect(cb).to.have.been.calledOnce;

        task.unbind(cb);

        task.bind(cb);

        expect(cb).to.have.been.calledTwice;

    });

    it('should be failed', function() {

        task.failed('yeah');

        expect(task.status).to.equal('failed');
        expect(task.val).to.equal('yeah');
        expect(task.detail).to.be.undefined;

    });

});

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

describe('addToWhiteList...', function() {

    it('should be defined', function() {
        expect(utils.addToWhiteList).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should add to whitelist', function(done) {
        this.timeout(15000);

        var randomIp = util.format('10.0.%s.%s', randomInt(0, 254), randomInt(0, 254));

        Q.all([
            pfx.then(function(pfx) {
                return utils.addToWhiteList(randomIp, {
                    restUri: 'https://' + testQlikSenseIp + ':4242',
                    pfx: pfx,
                    passPhrase: '',
                    UserId: 'qlikservice',
                    UserDirectory: '2008R2-0'
                });
            }).should.eventually.have.property("websocketCrossOriginWhiteList").to.include(randomIp)
        ]).then(function() {
            return utils.setTimeout2Promise(5000);
        }).should.notify(done)

    });

});

describe('loop...', function() {

    it('should be defined', function() {
        expect(utils.loop).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    function fake(status) {
        if(status.success) return Q.resolve();
        else return Q.reject();
    }

    var randomLoop = randomInt(3, 10);
    it(util.format('should loop %s times on failing function', randomLoop), function(done) {
        this.timeout(randomLoop * 2 * 1000);

        var task = new utils.task();
        task.start();

        var cb = sinon.spy();
        task.bind(cb);

        pfx.then(function(pfx) {
            utils.loop(fake, [ { success: false } ], randomLoop, 1000, task)
        });

        task.bind(function() {
            if(task.status == 'failed') {
                check(done, function() {
                    expect(cb).to.have.been.callCount(randomLoop);
                })
            }
        });

    });

    it('should loop only once on succeding function', function(done) {

        var task = new utils.task();
        task.start();

        var cb = sinon.spy();
        task.bind(cb);

        pfx.then(function(pfx) {
            utils.loop(fake, [ { success: true } ], 10, 1000, task)
        });

        task.bind(function() {
            if(task.status == 'done') {
                check(done, function() {
                    expect(cb).to.have.been.calledOnce;
                })
            }
        });
    });

    randomLoop = randomInt(3, 10);
    it(util.format('should loop %s times and resolve', randomLoop), function(done) {
        this.timeout(10 * 2 * 1000);

        var task = new utils.task();
        task.start();

        var randomLoopTarget = randomLoop;

        var status = { success: false };

        var cb = sinon.spy();
        task.bind(function() {
            if(randomLoop-- <= 0) status.success = true;
            cb();
        });

        pfx.then(function(pfx) {
            utils.loop(fake, [ status ], 15, 1000, task)
        });

        task.bind(function() {
            if(task.status == 'done') {
                check(done, function() {
                    expect(cb).to.have.been.callCount(randomLoopTarget + 2);
                })
            }
        });
    });

});

describe('dynamicAppClone...', function() {

    it('should be defined', function() {
        expect(utils.dynamicAppClone).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    var randomLoop = randomInt(3, 10);
    it('should clone app', function(done) {
        this.timeout(10000);

        var cb = sinon.spy();
        var cbr = sinon.spy();

        var task = new utils.task();
        task.start();

        task.bind(cb);

        task.bind(function(task) {
            if(task.val == 'redirect') {
                cbr(task.detail)
            }
        });

        pfx.then(function(pfx) {

            return utils.dynamicAppClone(
                {
                    restUri: testQlikSenseIp,
                    pfx: pfx,
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0'
                },
                {
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0',
                    'Attributes': []
                },
                '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
                '%Replace me!%',
                randomLoop,
                /Text << fields ([0-9,]+) Lines fetched/g,
                'aaec8d41-5201-43ab-809f-3063750dfafd',
                task
            );

        }).then(function() {
            check(done, function() {
                expect(cb).to.have.been.callCount(15);
                expect(cbr).to.have.been.calledOnce.calledWithMatch(/^[a-f0-9\-]{36}$/);
            })
        })
    });


});