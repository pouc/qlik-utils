var chai = require('chai');
var sinon = require('sinon');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
chai.use(require('chai-things'));

var expect = chai.expect;
var should = chai.should();

var utils = require('../index');
var util = require('util');
var Q = require('Q');
var fs = require('fs');
var promise = require('promise');
var mkdirp = promise.denodeify(require('mkdirp'));
var rmdir = promise.denodeify(require('rimraf'));

var testQlikSenseIp = 'localhost';
var testQlikSenseVp = null;
//var testQlikSenseVp = 'testvirtualproxy';

var testQlikSensePfx = __dirname + '/2.2.1/client.pfx';
var testQlikSensePemDir = __dirname + '/2.2.1';

var templateApp = '88d34732-a563-4df8-9484-2e84c171aed2';
var exportApp = 'dc18f7e6-d0f7-4ac2-ba6a-129648fa0ec7';
var loopReduceApp = '3ddf7160-e8b1-428d-b53e-81aea543a998';

var sourceStream = '546dc5af-6561-40c2-9f1a-6c90105cd649';
var publishStream = '2b9bfc5e-44a8-48ff-9ff2-f9a848375189';

var readFile = promise.denodeify(fs.readFile);
var readdir = promise.denodeify(fs.readdir);

var qrs = utils.Qlik.apis.qrs;

var options = {
    restUri: 'https://' + testQlikSenseIp,
    prefix: testQlikSenseVp,
    pfx: fs.readFileSync(testQlikSensePfx),
    passPhrase: '',
    UserId: 'qlikservice',
    UserDirectory: 'WIN-OP0IIK2CDFA'
};

var qrsApi = qrs(options);

function check(done, f) {
    try {
        f();
        done();
    } catch (e) {
        done(e);
    }
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

describe('Core', function() {

    it('should be defined', function() {
        expect(utils.Core).to.not.be.undefined;
    });

    describe('ifnotundef...', function() {

        it('should be defined', function() {
            expect(utils.Core.ifNotUndef).to.not.be.undefined;
        });

        it('should work with 2 params', function() {
            expect(utils.Core.ifNotUndef(1, 2)).to.equal(1);
            expect(utils.Core.ifNotUndef('undefined', 2)).to.equal('undefined');

            expect(utils.Core.ifNotUndef(null, 2)).to.equal(2);
            expect(utils.Core.ifNotUndef(undefined, 2)).to.equal(2);
            expect(utils.Core.ifNotUndef(utils.toto, 2)).to.equal(2);
        });

        it('should work with 3 params', function() {
            expect(utils.Core.ifNotUndef(1, 2, 3)).to.equal(2);
            expect(utils.Core.ifNotUndef('undefined', 2, 3)).to.equal(2);

            expect(utils.Core.ifNotUndef(null, 2, 3)).to.equal(3);
            expect(utils.Core.ifNotUndef(undefined, 2, 3)).to.equal(3);
            expect(utils.Core.ifNotUndef(utils.toto, 2, 3)).to.equal(3);

            expect(utils.Core.ifNotUndef(null, 2, undefined)).to.be.undefined;
            expect(utils.Core.ifNotUndef(undefined, 2, undefined)).to.be.undefined;
            expect(utils.Core.ifNotUndef(utils.toto, 2, undefined)).to.be.undefined;
        });

    });

    describe('ifChildNotUndef...', function() {

        it('should be defined', function() {
            expect(utils.Core.ifChildNotUndef).to.not.be.undefined;
        });

        var bla0 = {
            bla1: {
                bla2: {
                    bla3: '^^'
                }
            }
        };

        it('should work with 3 params', function() {
            expect(utils.Core.ifChildNotUndef(bla0, ['bla1', 'bla2', 'bla3'], 2)).to.equal('^^');
            expect(utils.Core.ifChildNotUndef(bla0, ['bla1', 'bla3', 'bla4'], 2)).to.equal(2);

            expect(utils.Core.ifChildNotUndef(null, undefined, 2)).to.equal(2);
            expect(utils.Core.ifChildNotUndef(undefined, ['bla'], 2)).to.equal(2);
            expect(utils.Core.ifChildNotUndef(utils.toto, 'bli', 2)).to.equal(2);
        });

        it('should work with 4 params', function() {
            expect(utils.Core.ifChildNotUndef(bla0, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(2);
            expect(utils.Core.ifChildNotUndef(bla0, undefined, 2, 3)).to.equal(2);

            expect(utils.Core.ifChildNotUndef(null, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(3);
            expect(utils.Core.ifChildNotUndef(undefined, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(3);
            expect(utils.Core.ifChildNotUndef(utils.toto, ['bla1', 'bla2', 'bla3'], 2, 3)).to.equal(3);
            expect(utils.Core.ifChildNotUndef(bla0, ['bla1', 'bla2', 'bla4'], 2, 3)).to.equal(3);
            expect(utils.Core.ifChildNotUndef(bla0, ['bla1', 'bla4', 'bla3'], 2, 3)).to.equal(3);
            expect(utils.Core.ifChildNotUndef(bla0, ['bla4', 'bla2', 'bla3'], 2, 3)).to.equal(3);

            expect(utils.Core.ifChildNotUndef(null, ['bla1', 'bla2', 'bla3'], 2, undefined)).to.be.undefined;
            expect(utils.Core.ifChildNotUndef(undefined, ['bla1', 'bla2', 'bla3'], 2, undefined)).to.be.undefined;
            expect(utils.Core.ifChildNotUndef(utils.toto, ['bla1', 'bla2', 'bla3'], 2, undefined)).to.be.undefined;
            expect(utils.Core.ifChildNotUndef(bla0, ['bla1', 'bla2', 'bla4'], 2, undefined)).to.be.undefined;
        });

    });

    describe('generateXrfkey...', function() {

        it('should be defined', function() {
            expect(utils.Qlik.generateXrfKey()).to.not.be.undefined;
        });

        it('should work without params', function() {

            var key_0p_1 = utils.Qlik.generateXrfKey();
            var key_0p_2 = utils.Qlik.generateXrfKey();
            var key_0p_3 = utils.Qlik.generateXrfKey();

            expect(key_0p_1).to.be.a('string');
            expect(key_0p_1).to.have.length(16);
            expect(key_0p_1).to.match(/^[a-z0-9A-Z]*$/);

            expect(key_0p_2).to.be.a('string');
            expect(key_0p_2).to.have.length(16);
            expect(key_0p_2).to.match(/^[a-z0-9A-Z]*$/);

            expect(key_0p_3).to.be.a('string');
            expect(key_0p_3).to.have.length(16);
            expect(key_0p_3).to.match(/^[a-z0-9A-Z]*$/);

            expect(key_0p_1).to.not.equal(key_0p_2);
            expect(key_0p_1).to.not.equal(key_0p_3);
            expect(key_0p_2).to.not.equal(key_0p_3);

        });

        it('should work with 1 param', function() {

            var key_1p_1 = utils.Qlik.generateXrfKey(8);
            var key_1p_2 = utils.Qlik.generateXrfKey(8);
            var key_1p_3 = utils.Qlik.generateXrfKey(12);

            expect(key_1p_1).to.be.a('string');
            expect(key_1p_1).to.have.length(8);
            expect(key_1p_1).to.match(/^[a-z0-9A-Z]*$/);

            expect(key_1p_2).to.be.a('string');
            expect(key_1p_2).to.have.length(8);
            expect(key_1p_2).to.match(/^[a-z0-9A-Z]*$/);

            expect(key_1p_3).to.be.a('string');
            expect(key_1p_3).to.have.length(12);
            expect(key_1p_3).to.match(/^[a-z0-9A-Z]*$/);

            expect(key_1p_1).to.not.equal(key_1p_2);

        });

        it('should work with 2 params', function() {

            var key_2p_1 = utils.Qlik.generateXrfKey(8, 'abcdef');
            var key_2p_2 = utils.Qlik.generateXrfKey(8, 'abcdef');
            var key_2p_3 = utils.Qlik.generateXrfKey(12, 'abcdefGHIJKL');

            expect(key_2p_1).to.be.a('string');
            expect(key_2p_1).to.have.length(8);
            expect(key_2p_1).to.match(/^[a-f]*$/);

            expect(key_2p_2).to.be.a('string');
            expect(key_2p_2).to.have.length(8);
            expect(key_2p_2).to.match(/^[a-f]*$/);

            expect(key_2p_3).to.be.a('string');
            expect(key_2p_3).to.have.length(12);
            expect(key_2p_3).to.match(/^[a-fG-L]*$/);

            expect(key_2p_1).to.not.equal(key_2p_2);

        });

    });

    describe('Task...', function() {

        it('should be defined', function() {
            expect(utils.Core.Task).to.not.be.undefined;
        });

        var task = new utils.Core.Task();

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

        it('should store printf status', function() {

            task.running('aze', 'rty %s', 'toto');

            expect(task.val).to.equal('aze');
            expect(task.detail).to.equal('rty toto');

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

    describe('loop...', function() {

        it('should be defined', function() {
            expect(utils.Core.loop).to.not.be.undefined;
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

            var task = new utils.Core.Task();
            task.start();

            var cb = sinon.spy();
            task.bind(cb);

            pfx.then(function(pfx) {
                utils.Core.loop(fake, [ { success: false } ], randomLoop, 1000, task)
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

            var task = new utils.Core.Task();
            task.start();

            var cb = sinon.spy();
            task.bind(cb);

            pfx.then(function(pfx) {
                utils.Core.loop(fake, [ { success: true } ], 10, 1000, task)
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

            var task = new utils.Core.Task();
            task.start();

            var randomLoopTarget = randomLoop;

            var status = { success: false };

            var cb = sinon.spy();
            task.bind(function() {
                if(randomLoop-- <= 0) status.success = true;
                cb();
            });

            pfx.then(function(pfx) {
                utils.Core.loop(fake, [ status ], 15, 1000, task)
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

    var testConfig;

    describe('Config object...', function() {

        testConfig = new utils.Core.Json('test', __dirname + '/../storage/');

        it('should have a name', function() {
            expect(testConfig.name).to.not.be.undefined;
            expect(testConfig.name).to.equal('test');
        });

        it('should have an empty config', function() {
            expect(testConfig.config).to.not.be.null;
            expect(typeof testConfig.config).to.equal('object');
            expect(Object.keys(testConfig.config).length).to.equal(0);
        });

        it('should have an empty old config', function() {
            expect(testConfig.oldConfig).to.not.be.null;
            expect(typeof testConfig.oldConfig).to.equal('object');
            expect(Object.keys(testConfig.oldConfig).length).to.equal(0);
        });

        it('should have a not null load function', function() {
            expect(testConfig.load).to.not.be.null;
            expect(typeof testConfig.load).to.equal('function');
        });

        it('should have a not null loadOld function', function() {
            expect(testConfig.loadOld).to.not.be.null;
            expect(typeof testConfig.loadOld).to.equal('function');
        });

        it('should have a not null store function', function() {
            expect(testConfig.store).to.not.be.null;
            expect(typeof testConfig.store).to.equal('function');
        });

        it('should have a not null storeOld function', function() {
            expect(testConfig.storeOld).to.not.be.null;
            expect(typeof testConfig.storeOld).to.equal('function');
        });

        it('should have a not null get function', function() {
            expect(testConfig.get).to.not.be.null;
            expect(typeof testConfig.get).to.equal('function');
        });

        it('should have a not null set function', function() {
            expect(testConfig.set).to.not.be.null;
            expect(typeof testConfig.set).to.equal('function');
        });

        it('should have a not null init function', function() {
            expect(testConfig.init).to.not.be.null;
            expect(typeof testConfig.init).to.equal('function');
        });

        it('should have a not null clean function', function() {
            expect(testConfig.clean).to.not.be.null;
            expect(typeof testConfig.clean).to.equal('function');
        });

    });

    describe('Config \'test\' directory', function() {

        var step;

        it('should be empty', function(done) {

            step = readdir(__dirname + '/../storage/test');
            expect(step).to.be.rejected.notify(done);

        });

        describe('init', function() {

            it('should end', function(done) {

                step = step.then(done, function() {

                    return testConfig.init();
                });

                expect(step).to.be.fulfilled.notify(done);

            });

            it('should have created the default test directory', function(done) {

                step = step.then(function() {
                    return readdir(__dirname + '/../storage/test');
                }).then(function(files) {
                    check(done, function() {
                        expect(Array.isArray(files)).to.be.true;
                        expect(files.length).to.equal(2);
                        expect(files).to.include('config.json');
                        expect(files).to.include('config.old.json');
                    })
                }, function(err) {
                    done(err);
                });

            });

            it('should remove created directories & files', function(done) {

                step = step.then(function() {
                    return rmdir(__dirname + '/../storage');
                }).then(done, function(err) {
                    done(err);
                });

            })

        });

    });

});

describe('Array', function() {

    it('should be defined', function() {
        expect(utils.Array).to.not.be.undefined;
    });

    describe('chunk...', function() {

        it('should be defined', function() {
            expect(utils.Array.chunk).to.not.be.undefined;
        });

        it('should fail with wrong chunk size param', function() {
            expect(utils.Array.chunk([1, 2, 3], -1)).to.be.undefined;
            expect(utils.Array.chunk([1, 2, 3], 0)).to.be.undefined;
            expect(utils.Array.chunk([1, 2, 3])).to.be.undefined;
            expect(utils.Array.chunk([1, 2, 3], 'aze')).to.be.undefined;
            expect(utils.Array.chunk([1, 2, 3], function() { return 1; })).to.be.undefined;
        });

        it('should work with an empty array', function() {
            expect(utils.Array.chunk([], 5)).to.deep.equal([]);
            expect(utils.Array.chunk([], 5)).to.deep.equal([]);
        });

        it('should cut arrays in chunks', function() {
            expect(utils.Array.chunk([1, 2, 3], 1)).to.deep.equal([[1], [2], [3]]);
            expect(utils.Array.chunk([1, 2, 3], 2)).to.deep.equal([[1, 2], [3]]);
            expect(utils.Array.chunk([1, 2, 3], 3)).to.deep.equal([[1, 2, 3]]);
            expect(utils.Array.chunk([1, 2, 3], 4)).to.deep.equal([[1, 2, 3]]);

            expect(utils.Array.chunk([1, 2, 3, 4, 5, 6, 7], 2)).to.deep.equal([[1, 2], [3, 4], [5, 6], [7]]);
            expect(utils.Array.chunk([1, 2, 3, 4, 5, 6, 7], 4)).to.deep.equal([[1, 2, 3, 4], [5, 6, 7]]);
        });

    });

});

describe('Object', function() {

    it('should be defined', function() {
        expect(utils.Object).to.not.be.undefined;
    });

    describe('map', function() {

        it('should be defined', function() {
            expect(utils.Object.map).to.not.be.undefined;
        });

        it('should fail with wrong params', function() {
            expect(utils.Object.map(undefined, undefined)).to.be.undefined;
            expect(utils.Object.map('toto', undefined)).to.be.undefined;
            expect(utils.Object.map(undefined, 'toto')).to.be.undefined;
            expect(utils.Object.map(function() { return 1; }, undefined)).to.be.undefined;
            expect(utils.Object.map('toto', function() { return 1; })).to.be.undefined;
        });

        it('should map params', function() {

            var obj = {a: '1', b: '2', c: {c1: '3'}, d: [1, 2, 3]};

            expect(utils.Object.map(obj, function(item, key) {
                return {key: key, value: item};
            })).to.deep.equal({
                a: {
                    key: 'a',
                    value: '1'
                },
                b: {
                    key: 'b',
                    value: '2'
                },
                c: {
                    key: 'c',
                    value: {
                        c1: '3'
                    }
                },
                d: {
                    key: 'd',
                    value: [
                        1,
                        2,
                        3
                    ]
                }
            });
        });

    });

    describe('getPropCI', function() {

        it('should be defined', function() {
            expect(utils.Object.getPropCI).to.not.be.undefined;
        });

        it('should fail with wrong params', function() {
            expect(utils.Object.getPropCI(undefined, undefined)).to.be.undefined;
            expect(utils.Object.getPropCI('toto', undefined)).to.be.undefined;
            expect(utils.Object.getPropCI(undefined, 'toto')).to.be.undefined;
            expect(utils.Object.getPropCI(function() { return 1; }, undefined)).to.be.undefined;
            expect(utils.Object.getPropCI('toto', function() { return 1; })).to.be.undefined;
            expect(utils.Object.getPropCI('toto', 'titi')).to.be.undefined;
        });

        it('should get property by reference', function() {

            var obj = {a: '1', b: '2', c: {c1: '3'}, d: [1, 2, 3]};

            expect(utils.Object.getPropCI(obj, 'A')).to.equal('1');
            expect(utils.Object.getPropCI(obj, 'C')).to.equal(obj.c);
            expect(utils.Object.getPropCI(obj, 'd')).to.deep.equal([1, 2, 3]);

        });

    });

    describe('getParamNames', function() {

        it('should be defined', function() {
            expect(utils.Object.getParamNames).to.not.be.undefined;
        });

        it('should fail with wrong params', function() {
            expect(utils.Object.getParamNames(undefined)).to.be.undefined;
            expect(utils.Object.getParamNames('toto')).to.be.undefined;
            expect(utils.Object.getParamNames(2)).to.be.undefined;
        });

        it('should return parameter names', function() {
            expect(utils.Object.getParamNames(function() {})).to.deep.equal([]);
            expect(utils.Object.getParamNames(utils.Object.getParamNames)).to.deep.equal(['func']);
            expect(utils.Object.getParamNames(function(a, b, c) {})).to.deep.equal(['a', 'b', 'c']);
            expect(utils.Object.getParamNames(function(a, /* b,*/ c) {})).to.deep.equal(['a', 'c']);
        });

    });

});

describe('Qlik', function() {

    it('should be defined', function() {
        expect(utils.Qlik).to.not.be.undefined;
    });

    describe('Qlik.Base', function() {

        describe('request...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.request).to.not.be.undefined;
            });

            it('should reject fake endpoints', function(done) {
                Q.all([
                    utils.Qlik.request({restUri: 'ftp://localhost/qmc'}).should.be.rejectedWith('http/https is needed to make API call'),
                    utils.Qlik.request({restUri: 'https://192.168.123.123/qmc', timeout: 1000}).should.be.rejected
                ]).should.notify(done);
            });

            it('should accept real endpoints', function(done) {
                this.timeout(15000);

                Q.all([
                    utils.Qlik.request({
                        restUri: 'http://' + testQlikSenseIp + ':4444/status/servicestate',
                        method: 'GET',
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory
                    }).should.eventually.have.property('value').to.be.within(1, 3),
                    utils.Qlik.request({
                        restUri: 'https://' + testQlikSenseIp + ':4242/qrs/proxyservice/local',
                        method: 'GET',
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        pfx: options.pfx,
                        passPhrase: ''
                    }).should.eventually.have.property('id').to.match(/^[a-f\-0-9]*$/)
                ]).then(function() {
                    done();
                }, function(err) {
                    done(err);
                });
            });

            var key = readFile(testQlikSensePemDir + '/client_key.pem');
            var cert = readFile(testQlikSensePemDir + '/client.pem');
            var ca = readFile(testQlikSensePemDir + '/root.pem');

            it('should find certificate pem files', function(done) {
                expect(Q.all([
                    key,
                    cert,
                    ca
                ])).to.be.fulfilled.notify(done);
            });

            it('should accept real endpoints using pems', function(done) {
                this.timeout(15000);

                Q.all([
                    key,
                    cert,
                    ca
                ]).then(function(reply) {
                    return utils.Qlik.request({
                        restUri: 'https://' + testQlikSenseIp + ':4242/qrs/proxyservice/local',
                        method: 'GET',
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        key: reply[0],
                        cert: reply[1],
                        ca: reply[2]
                    })
                }).should.eventually.have.property('id').to.match(/^[a-f\-0-9]*$/).should.notify(done)

            });

        });

        describe('openSession...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.openSession).to.not.be.undefined;
            });

            it('should open session', function(done) {
                return utils.Qlik.getTicket(options, {
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    Attributes: []
                }).then(function(ticket) {
                    return utils.Qlik.openSession(ticket, 'https://' + testQlikSenseIp + utils.Core.ifNotUndef(testQlikSenseVp, '/' + testQlikSenseVp, '') + '/qmc/');
                }).should.eventually.match(/X-Qlik-Session[^=]*=[a-f0-9\-]{36};/).should.notify(done);
            });
        });

    });

    describe('Qlik.Advanced', function() {

        describe('getTicket...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.getTicket).to.not.be.undefined;
            });

            it('should get ticket', function(done) {
                utils.Qlik.getTicket(options, {
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    Attributes: []
                }).should.eventually.have.property('Ticket').to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16).should.notify(done);
            });

        });

        describe('openWebSocket...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.openWebSocket).to.not.be.undefined;
            });

            var task = new utils.Core.Task();
            task.start();

            task.bind(function(task) {
                //console.log(task.val, task.detail);
            });

            it('should open web socket', function(done) {
                options.cookie = undefined;
                utils.Qlik.openWebSocket(options, task).then(function(reply) {
                    check(done, function() {
                        expect(reply).to.have.deep.property('connection.cookie').to.match(/X-Qlik-Session[^=]*=[a-f0-9\-]{36};/);
                    });
                });

            });

            it('should open web socket using same cookie', function(done) {
                utils.Qlik.openWebSocket(options, task).then(function(reply) {
                    check(done, function() {
                        expect(reply).to.have.deep.property('connection.cookie').to.match(/X-Qlik-Session[^=]*=[a-f0-9\-]{36};/);
                        expect(options).to.have.deep.property('cookie').to.equal(reply.connection.cookie);
                    });
                });

            });

            it('should open web socket regenerating a ticket if cookie expired', function(done) {
                var cookie = options.cookie;
                options.cookie = 'X-Qlik-Session=12345678-1234-1234-1234-123456789012; Path=/; HttpOnly; Secure'
                return utils.Qlik.openWebSocket(options, task).then(function(reply) {
                    check(done, function() {
                        expect(reply).to.have.deep.property('connection.cookie').to.match(/X-Qlik-Session[^=]*=[a-f0-9\-]{36};/).to.not.equal(cookie);
                    });
                });

            });

        });

        describe('addToWhiteList...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.addToWhiteList).to.not.be.undefined;
            });

            it('should add to whitelist', function(done) {
                this.timeout(15000);

                var randomIp = util.format('10.0.%s.%s', randomInt(0, 254), randomInt(0, 254));

                utils.Qlik.addToWhiteList(options, {
                    ip: randomIp
                }).then(function(reply) {
                    reply.should.all.have.property('websocketCrossOriginWhiteList');
                    reply.forEach(function(item) {
                        if (typeof item.websocketCrossOriginWhiteList !== 'undefined') {
                            item.websocketCrossOriginWhiteList.should.include(randomIp);
                        }
                    });

                    // Wait for proxy to restart before continuing tests ...
                    return utils.Core.setTimeout2Promise(5000);
                }).should.notify(done);
            });

        });

        describe('dynamicAppClone...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.dynamicAppClone).to.not.be.undefined;
            });

            var randomLoop = 3; //randomInt(3, 10);
            it('should clone app', function(done) {
                this.timeout(100000);

                var cb = sinon.spy();
                var cbr = sinon.spy();

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    //console.log(task.detail)
                    if (task.val == 'redirect') {
                        cbr(task.detail);
                    }
                });

                utils.Qlik.dynamicAppClone(options, {
                        templateApp: templateApp,
                        maxParDup: 1,
                        replacesDef: [{
                            replaces: [
                                {marker: '%Replace me!%', value: [1, 2]},
                                {marker: '%Replace me2!%', value: [4, 5]}
                            ]
                        }, {
                            replaces: [
                                {marker: '%Replace me!%', value: 6},
                                {marker: '%Replace me2!%', value: 7}
                            ]
                        }],
                        publishStream: publishStream,
                        overwriteApp: true,
                        keepApp: true,
                        createReloadTask: true,
                        customProperties: [{name: 'Test', values: ['test %(replaceValue)s']}]
                    },
                    task
                ).then(function(reply) {
                    return Q.all(reply.map(function(newApp) {
                        return qrsApi.app.id(newApp).delete();
                    })).then(function() {
                        return reply;
                    });
                }).then(function() {
                    check(done, function() {
                        expect(cbr).to.have.been.callCount(5).calledWithMatch(/^[a-f0-9\-]{36}$/);
                    });
                }, function(err) {
                    done(err);
                });
            });

        });

        describe('export...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.export).to.not.be.undefined;
            });

            var sortArray = function(a, b) {
                if (a[0] === b[0] && a[1] === b[1] && a[2] === b[2]) {
                    return 0;
                } else if (a[0] === b[0] && a[1] === b[1] && a[2] < b[2]) {
                    return -1;
                } else if (a[0] === b[0] && a[1] === b[1] && a[2] > b[2]) {
                    return 1;
                } else if (a[0] === b[0] && a[1] < b[1]) {
                    return -1;
                } else if (a[0] === b[0] && a[1] > b[1]) {
                    return 1;
                } else if (a[0] < b[0]) {
                    return -1;
                } else if (a[0] > b[0]) {
                    return 1;
                }
            };

            var arr1 = [
                ['B', 'd', 'X'],
                ['B', 'd', 'Y'],
                ['B', 'd', 'Z'],
                ['B', 'c', 'X'],
                ['B', 'c', 'Y'],
                ['B', 'c', 'Z'],
                ['C', 'e', 'X'],
                ['C', 'e', 'Y'],
                ['C', 'e', 'Z'],
                ['C', 'f', 'X'],
                ['C', 'f', 'Y'],
                ['C', 'f', 'Z'],
                ['A', 'b', 'X'],
                ['A', 'b', 'Y'],
                ['A', 'b', 'Z'],
                ['A', 'a', 'X'],
                ['A', 'a', 'Y'],
                ['A', 'a', 'Z']
            ].sort(sortArray);

            var dimensions1 = {
                d1: {name: 'Dim1', dimensionType: 'FIELD'},
                d2: {name: 'Dim2', dimensionType: 'FIELD'},
                d3: {name: 'Dim3', dimensionType: 'FIELD'}
            };

            it('should export a cube using only fields', function(done) {
                this.timeout(100000);

                var cb = sinon.spy();
                var cbr = sinon.spy();

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    if (task.val == 'export') {
                        cbr(task.detail.sort(sortArray));
                    }
                });

                Q().then(function(pfx) {

                    return utils.Qlik.export(options, {
                        appId: exportApp,
                        dimensions: dimensions1
                    },
                    task);

                }).then(function() {
                    check(done, function() {
                        expect(cbr).to.have.been.callCount(1).calledWith(arr1);
                    });
                }, function(err) {
                    done(err);
                });
            });

            var arr2 = [
                ['A', 'a', 'X', 2325206, 13466, 4645.59551],
                ['A', 'a', 'Y', 2321714, 13503, 4634.60176],
                ['A', 'a', 'Z', 2318576, 13523, 4642.16457],
                ['A', 'b', 'X', 6997390, 63627, 13908.37812],
                ['A', 'b', 'Y', 6931246, 62885, 13808.15937],
                ['A', 'b', 'Z', 6945431, 63380, 13872.42418],
                ['B', 'c', 'X', 11582103, 111134, 23128.82882],
                ['B', 'c', 'Y', 11578814, 111219, 23211.16164],
                ['B', 'c', 'Z', 11628780, 112259, 23206.20282],
                ['B', 'd', 'X', 16174016, 158831, 32337.2693],
                ['B', 'd', 'Y', 16213261, 157979, 32235.85601],
                ['B', 'd', 'Z', 16294624, 159030, 32447.24854],
                ['C', 'e', 'X', 20898858, 204819, 41651.82124],
                ['C', 'e', 'Y', 20702060, 205612, 41484.60753],
                ['C', 'e', 'Z', 20816009, 206011, 41729.54181],
                ['C', 'f', 'X', 25677934, 251476, 50933.14668],
                ['C', 'f', 'Y', 25666302, 253664, 51146.68189],
                ['C', 'f', 'Z', 25450612, 251072, 50844.5615]
            ].sort(sortArray);

            var dimensions2 = dimensions1;

            var measures2 = {
                m1: {name: 'M1', measureType: 'FIELD', formula: '=SUM(Expression1)'},
                m2: {name: 'M2', measureType: 'FIELD', formula: '=SUM(Expression2)'},
                m3: {name: 'M3', measureType: 'FIELD', formula: '=SUM(Expression3)'}
            };

            it('should export a cube using only fields & formulas', function(done) {
                this.timeout(100000);

                var cb = sinon.spy();
                var cbr = sinon.spy();

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    if (task.val == 'export') {
                        cbr(task.detail.sort(sortArray));
                    }
                });

                Q().then(function(pfx) {

                    return utils.Qlik.export(options, {
                        appId: exportApp,
                        dimensions: dimensions2,
                        measures: measures2
                    },
                    task);

                }).then(function() {
                    check(done, function() {
                        expect(cbr).to.have.been.callCount(1).calledWith(arr2);
                    });
                }, function(err) {
                    done(err);
                });
            });

            var arr3 = arr1;

            var dimensions3 = {
                d1: {name: 'Dimension 1', dimensionType: 'MASTER'},
                d2: {name: 'Dim2', dimensionType: 'FIELD'},
                d3: {name: 'Dim3', dimensionType: 'FIELD'}
            };

            it('should export a cube using 1 master item & fields', function(done) {
                this.timeout(100000);

                var cb = sinon.spy();
                var cbr = sinon.spy();

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    if (task.val == 'info') {
                        cb(task.val, task.detail);
                    }
                });

                task.bind(function(task) {
                    if (task.val == 'export') {
                        cbr(task.detail.sort(sortArray));
                    }
                });

                Q().then(function(pfx) {

                    return utils.Qlik.export(options, {
                        appId: exportApp,
                        dimensions: dimensions3
                    },
                    task);

                }).then(function() {
                    check(done, function() {
                        expect(cbr).to.have.been.callCount(1).calledWith(arr3);
                    });
                }, function(err) {
                    done(err);
                });
            });

            var arr4 = arr2;
            var dimensions4 = dimensions3;

            var measures4 = {
                m1: {name: 'exp1', measureType: 'MASTER'},
                m2: {name: 'M2', measureType: 'FIELD', formula: '=SUM(Expression2)'},
                m3: {name: 'M3', measureType: 'FIELD', formula: '=SUM(Expression3)'}
            };

            it('should export a cube using 1 master item, fields, 1 measure master item & formulas', function(done) {
                this.timeout(100000);

                var cb = sinon.spy();
                var cbr = sinon.spy();

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    if (task.val == 'info') {
                        cb(task.val, task.detail);
                    }
                });

                task.bind(function(task) {
                    if (task.val == 'export') {
                        cbr(task.detail.sort(sortArray));
                    }
                });

                Q().then(function(pfx) {

                    return utils.Qlik.export(options, {
                        appId: exportApp,
                        dimensions: dimensions4,
                        measures: measures4
                    },
                    task);

                }).then(function() {
                    check(done, function() {
                        expect(cbr).to.have.been.callCount(1).calledWith(arr4);
                    });
                }, function(err) {
                    done(err);
                });
            });

            var arr5 = [
                ['A', null, 'X', null, 77093, 18553.97363],
                ['A', null, 'Y', null, 76388, 18442.76113],
                ['A', null, 'Z', null, 76903, 18514.58875],
                ['B', null, 'X', null, 269965, 55466.09812],
                ['B', null, 'Y', null, 269198, 55447.01765],
                ['B', null, 'Z', null, 271289, 55653.45136],
                ['C', null, 'X', null, 456295, 92584.96792],
                ['C', null, 'Y', null, 459276, 92631.28942],
                ['C', null, 'Z', null, 457083, 92574.10331]
            ].sort(sortArray);

            var dimensions5 = {
                d1: {name: 'Dimension 1', dimensionType: 'MASTER'},
                d2: {name: 'Dim2', dimensionType: 'IGNORE'},
                d3: {name: 'Dim3', dimensionType: 'FIELD'}
            };

            var measures5 = {
                m1: {name: 'exp1', measureType: 'IGNORE'},
                m2: {name: 'M2', measureType: 'FIELD', formula: '=SUM(Expression2)'},
                m3: {name: 'M3', measureType: 'FIELD', formula: '=SUM(Expression3)'}
            };

            it('should export a cube using ignoring a dimension and a measure', function(done) {
                this.timeout(100000);

                var cb = sinon.spy();
                var cbr = sinon.spy();

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    if (task.val == 'info') {
                        cb(task.val, task.detail);
                    }
                });

                task.bind(function(task) {
                    if (task.val == 'export') {
                        cbr(task.detail.sort(sortArray));
                    }
                });

                Q().then(function(pfx) {

                    return utils.Qlik.export(options, {
                            appId: exportApp,
                            dimensions: dimensions5,
                            measures: measures5
                        },
                        task);

                }).then(function() {
                    check(done, function() {
                        expect(cbr).to.have.been.callCount(1).calledWith(arr5);
                    });
                }, function(err) {
                    done(err);
                });
            });

        });

        describe('loopAndReload...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.loopAndReload).to.not.be.undefined;
            });

            it('should loop and reload using default name and without publishing', function(done) {
                this.timeout(1000000);

                var task = new utils.Core.Task();
                task.start();

                task.bind(function(task) {
                    //console.log(task.val, task.detail);
                });

                Q().then(function(pfx) {

                    return utils.Qlik.loopAndReload(options, {
                            loop: {
                                appId: loopReduceApp,
                                loopColum: 'Client',
                                reduceColumn: 'Client',
                                nameColumn: 'AppName',
                                publishColumn: 'Stream'
                            },
                            loopReload: {
                                loopMarker: '%Replace me!%'
                            },
                            reload: {
                                templateApp: templateApp,
                                maxParDup: 5,
                                overwriteApp: true,
                                keepApp: true
                            }
                        },
                        task);

                }).then(function(reply) {
                    return Q.all(reply.map(function(newApp) {
                        return qrsApi.app.id(newApp).delete();
                    })).then(function() {
                        return reply;
                    }, function() {
                        return reply;
                    });
                }).then(function(reply) {
                    check(done, function() {
                        reply.forEach(function(item) {
                            expect(item).to.match(/^[a-f0-9\-]{36}$/);
                        });
                    });
                }, function(err) {
                    done(err);
                });
            });

        });

    });

    describe('Qlik.qrs', function() {

        describe('createQrsApiSdk...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.apis.createQrsApiSdk).to.not.be.undefined;
            });

            var pfx = readFile(testQlikSensePfx);

            it('should find certificate pfx file', function(done) {
                expect(pfx).to.be.fulfilled.notify(done);
            });

            var parsedSdk;

            it('should generate QRS API SDK', function(done) {

                this.timeout(30000);

                Q.all([
                    pfx.then(function(pfx) {
                        return sdk = utils.Qlik.apis.createQrsApiSdk({
                            restUri: 'https://' + testQlikSenseIp + ':4242',
                            pfx: pfx,
                            passPhrase: '',
                            UserId: 'qlikservice',
                            UserDirectory: '2008R2-0'
                        });
                    }).then(function(sdk) {
                        return sdk.objects.map(function(item) { return item.key; });
                    }).then(function(qrs) {
                        var refQrs = [
                            "proxyservicecertificate",
                            "systeminfo",
                            "about",
                            "app",
                            "appavailability",
                            "appcomponent",
                            "appcontent",
                            "appcontentquota",
                            "applicationlog",
                            "appseedinfo",
                            "appstatus",
                            "binarydelete",
                            "binarydownload",
                            "binarysyncruleevaluation",
                            "cache",
                            "certificatedistribution",
                            "compositeevent",
                            "compositeeventoperational",
                            "compositeeventruleoperational",
                            "contentlibrary",
                            "custompropertydefinition",
                            "dataconnection",
                            "download",
                            "engineservice",
                            "event",
                            "eventoperational",
                            "executionresult",
                            "executionsession",
                            "extension",
                            "externalchangeinfo",
                            "externalprogramtask",
                            "externalprogramtaskoperational",
                            "filereference",
                            "license",
                            "licenseaccessusage",
                            "loadbalancing",
                            "log",
                            "managementconsolelog",
                            "mimetype",
                            "notification",
                            "printingservice",
                            "proxyservice",
                            "reloadtask",
                            "reloadtaskoperational",
                            "repositoryservice",
                            "schedulerservice",
                            "schemaevent",
                            "schemaeventoperational",
                            "selection",
                            "servernodeconfiguration",
                            "servernoderegistration",
                            "servicestatus",
                            "staticcontent",
                            "staticcontentreference",
                            "staticcontentreferencebase",
                            "stream",
                            "sync",
                            "syncsession",
                            "systemrule",
                            "tag",
                            "task",
                            "taskoperational",
                            "tempcontent",
                            "user",
                            "userdirectory",
                            "userdirectoryconnector",
                            "loadbalancing",
                            "usersynctask",
                            "usersynctaskoperational",
                            "virtualproxyconfig"
                        ];
                        expect(qrs.filter(function(i) {return refQrs.indexOf(i) < 0;})).to.deep.equal([]);
                        expect(refQrs.filter(function(i) {return qrs.indexOf(i) < 0;})).to.deep.equal([]);
                    })
                ]).then(function() {
                    done();
                }, function(err) {
                    done(err);
                });

            });

        });

        describe('QRS SDK...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.apis.qrs).to.not.be.undefined;
            });

            var pfx = readFile(testQlikSensePfx);

            it('should find certificate pfx file', function(done) {
                expect(pfx).to.be.fulfilled.notify(done);
            });

            it('should implement QRS API', function(done) {

                this.timeout(30000);

                var qrs = pfx.then(function(pfx) {
                    return Q.all([
                        utils.Qlik.apis.qrs({
                            restUri: 'https://' + testQlikSenseIp + ':4242',
                            pfx: pfx,
                            passPhrase: '',
                            UserId: 'qlikservice',
                            UserDirectory: '2008R2-0'
                        }),
                        utils.Qlik.apis.createQrsApiSdk({
                            restUri: 'https://' + testQlikSenseIp + ':4242',
                            pfx: pfx,
                            passPhrase: '',
                            UserId: 'qlikservice',
                            UserDirectory: '2008R2-0'
                        }).then(function(sdk) {
                            return sdk.objects.map(function(item) { return item.key; });
                        })
                    ]);
                }).then(function(reply) {
                    var qrs = reply[0];
                    var qrsRef = reply[1];

                    var qrsEP = Object.keys(qrs);
                    var qrsRefEp = qrsRef;

                    expect(qrsEP.filter(function(i) {return qrsRefEp.indexOf(i) < 0;})).to.deep.equal([]);
                    expect(qrsRefEp.filter(function(i) {return qrsEP.indexOf(i) < 0;})).to.deep.equal([]);

                }).should.notify(done);
            });

            it('about API description should work', function(done) {
                this.timeout(30000);

                pfx.then(function(pfx) {
                    return utils.Qlik.apis.qrs({
                        restUri: 'https://' + testQlikSenseIp + ':4242',
                        pfx: pfx,
                        passPhrase: '',
                        UserId: 'qlikservice',
                        UserDirectory: '2008R2-0'
                    });
                }).then(function(qrsApi) {
                    return qrsApi.about.api.description.get(true, undefined, 'JSON');
                }).should.notify(done);

            });

        });

    });

    describe('Qlik.qps', function() {

        describe('QPS SDK...', function() {

            it('should be defined', function() {
                expect(utils.Qlik.apis.qps).to.not.be.undefined;
            });

            var pfx = readFile(testQlikSensePfx);

            it('should find certificate pfx file', function(done) {
                expect(pfx).to.be.fulfilled.notify(done);
            });

            it('get ticket should work', function(done) {
                this.timeout(30000);

                pfx.then(function(pfx) {
                    return utils.Qlik.apis.qps({
                        restUri: 'https://' + testQlikSenseIp + ':4243',
                        pfx: pfx,
                        passPhrase: '',
                        UserId: 'qlikservice',
                        UserDirectory: '2008R2-0'
                    });
                }).then(function(qpsApi) {
                    return qpsApi.ticket.post({
                        'UserId': 'qlikservice',
                        'UserDirectory': '2008R2-0',
                        'Attributes': []
                    });
                }).should.eventually.have.property("Ticket").to.match(/^[\-_\.a-zA-Z0-9]*$/).to.have.length(16).notify(done);


            });


        });

    });

});
