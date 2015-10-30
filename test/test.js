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

var testQlikSensePfx = __dirname + '/client.pfx';
var testQlikSensePemDir = __dirname;

var readFile = promise.denodeify(fs.readFile);
var readdir = promise.denodeify(fs.readdir);

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

require('mocha-jscs')(['index.js', 'lib']);

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

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should accept real endpoints', function(done) {

        Q.all([
            utils.Qlik.request({
                restUri: 'http://' + testQlikSenseIp + ':4444/status/servicestate',
                method: 'GET',
                'UserId': 'qlikservice',
                'UserDirectory': '2008R2-0'
            }).should.eventually.have.property('value').to.be.within(1, 3),
            pfx.then(function(pfx) {
                return utils.Qlik.request({
                    restUri: 'https://' + testQlikSenseIp + ':4242/qrs/proxyservice/local',
                    method: 'GET',
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0',
                    pfx: pfx,
                    passPhrase: ''
                })
            }).should.eventually.have.property('id').to.match(/^[a-f\-0-9]*$/)
        ]).should.notify(done);
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

        Q.all([
            key,
            cert,
            ca
        ]).then(function(reply) {
            return utils.Qlik.request({
                restUri: 'https://' + testQlikSenseIp + ':4242/qrs/proxyservice/local',
                method: 'GET',
                'UserId': 'qlikservice',
                'UserDirectory': '2008R2-0',
                key: reply[0],
                cert: reply[1],
                ca: reply[2]
            })
        }).should.eventually.have.property("id").to.match(/^[a-f\-0-9]*$/).should.notify(done)

    });

});

describe('getTicket...', function() {

    it('should be defined', function() {
        expect(utils.Qlik.getTicket).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should get ticket', function(done) {

        Q.all([
            pfx.then(function(pfx) {
                return utils.Qlik.getTicket({
                    restUri: 'https://' + testQlikSenseIp + ':4243',
                    prefix: testQlikSenseVp,
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
        expect(utils.Qlik.openSession).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('should open session', function(done) {
        Q.all([
            pfx.then(function(pfx) {
                return utils.Qlik.getTicket({
                    restUri: 'https://' + testQlikSenseIp + ':4243',
                    prefix: testQlikSenseVp,
                    pfx: pfx,
                    passPhrase: ''
                }, {
                    'UserId': 'qlikservice',
                    'UserDirectory': '2008R2-0',
                    'Attributes': []
                });
            }).then(function(ticket) {
                return utils.Qlik.openSession(ticket, 'https://' + testQlikSenseIp + utils.Core.ifNotUndef(testQlikSenseVp, '/' + testQlikSenseVp, '') + '/qmc/')
            }).should.eventually.match(/X-Qlik-Session[^=]*=[a-f0-9\-]{36};/)
        ]).should.notify(done);
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

describe('addToWhiteList...', function() {

    it('should be defined', function() {
        expect(utils.Qlik.addToWhiteList).to.not.be.undefined;
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
                return utils.Qlik.addToWhiteList(randomIp, {
                    restUri: 'https://' + testQlikSenseIp + ':4242',
                    pfx: pfx,
                    passPhrase: '',
                    UserId: 'qlikservice',
                    UserDirectory: '2008R2-0'
                });
            }).should.eventually.have.property("websocketCrossOriginWhiteList").to.include(randomIp)
        ]).then(function(pfx) {
            // Wait for proxy to restart before continuing tests ...
            return utils.Core.setTimeout2Promise(5000);
        }).should.notify(done)

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

describe('dynamicAppClone...', function() {

    it('should be defined', function() {
        expect(utils.Qlik.dynamicAppClone).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    var randomLoop = randomInt(3, 10);
    it('should clone app', function(done) {
        this.timeout(100000);

        var cb = sinon.spy();
        var cbr = sinon.spy();

        var task = new utils.Core.Task();
        task.start();

        task.bind(function(task) {
            if(task.val == 'info') {
                cb(task.val, task.detail);
            }
        });

        task.bind(function(task) {
            if(task.val == 'redirect') {
                cbr(task.detail)
            }
        });

        pfx.then(function(pfx) {

            return utils.Qlik.dynamicAppClone({
                restUri: 'https://' + testQlikSenseIp,
                prefix: testQlikSenseVp,
                pfx: pfx,
                UserId: 'qlikservice',
                UserDirectory: '2008R2-0',
                templateAppId: '4bfd343b-759b-4931-a9f0-32205f1cf663',
                templateMaxParDup: 2,
                scriptMarker: '%Replace me!%',
                scriptReplaces: [
                    randomLoop, { replace: randomLoop, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s [%(replace)s]', publishStreamId: '140c11bd-4c63-4ef1-8d95-458f7b8f2644' },
//                    randomLoop + 1, { replace: randomLoop + 1, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s [%(replace)s]' },
//                    randomLoop + 2, { replace: randomLoop + 2, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s [%(replace)s]' },
//                    randomLoop + 3, { replace: randomLoop + 3, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s [%(replace)s]' },
//                    randomLoop + 4, { replace: randomLoop + 4, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s [%(replace)s]' }
                ],
                scriptRegex: /(.*) << (.*) ([0-9,]+) Lines fetched/g,
//                publishStreamId: '140c11bd-4c63-4ef1-8d95-458f7b8f2644',
                publishReplace: true,
                task: task
            });

        }).then(function() {
            check(done, function() {
                expect(cbr).to.have.been.callCount(2).calledWithMatch(/^[a-f0-9\-]{36}$/);
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

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
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
            if (task.val == 'info') {
                cb(task.val, task.detail);
            }
        });

        task.bind(function(task) {
            if (task.val == 'export') {
                cbr(task.detail.sort(sortArray));
            }
        });

        pfx.then(function(pfx) {

            return utils.Qlik.export({
                restUri: 'https://' + testQlikSenseIp,
                prefix: testQlikSenseVp,
                pfx: pfx,
                UserId: 'demoqlik',
                UserDirectory: 'WIN-OP0IIK2CDFA',
                appId: 'a4fe6c7d-a535-438a-b56f-8e0c105271b6',
                dimensions: dimensions1,
                task: task
            });

        }).then(function() {
            check(done, function() {
                expect(cbr).to.have.been.callCount(1).calledWith(arr1);
            });
        }, function(err) {
            done(err);
        });
    });

    var arr2 = [
        ['A', 'a', 'X', '2325206', '13466', '4645,59551'],
        ['A', 'a', 'Y', '2321714', '13503', '4634,60176'],
        ['A', 'a', 'Z', '2318576', '13523', '4642,16457'],
        ['A', 'b', 'X', '6997390', '63627', '13908,37812'],
        ['A', 'b', 'Y', '6931246', '62885', '13808,15937'],
        ['A', 'b', 'Z', '6945431', '63380', '13872,42418'],
        ['B', 'c', 'X', '11582103', '111134', '23128,82882'],
        ['B', 'c', 'Y', '11578814', '111219', '23211,16164'],
        ['B', 'c', 'Z', '11628780', '112259', '23206,20282'],
        ['B', 'd', 'X', '16174016', '158831', '32337,26930'],
        ['B', 'd', 'Y', '16213261', '157979', '32235,85601'],
        ['B', 'd', 'Z', '16294624', '159030', '32447,24854'],
        ['C', 'e', 'X', '20898858', '204819', '41651,82124'],
        ['C', 'e', 'Y', '20702060', '205612', '41484,60753'],
        ['C', 'e', 'Z', '20816009', '206011', '41729,54181'],
        ['C', 'f', 'X', '25677934', '251476', '50933,14668'],
        ['C', 'f', 'Y', '25666302', '253664', '51146,68189'],
        ['C', 'f', 'Z', '25450612', '251072', '50844,56150']
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
            if (task.val == 'info') {
                cb(task.val, task.detail);
            }
        });

        task.bind(function(task) {
            if (task.val == 'export') {
                cbr(task.detail.sort(sortArray));
            }
        });

        pfx.then(function(pfx) {

            return utils.Qlik.export({
                restUri: 'https://' + testQlikSenseIp,
                prefix: testQlikSenseVp,
                pfx: pfx,
                UserId: 'demoqlik',
                UserDirectory: 'WIN-OP0IIK2CDFA',
                appId: 'a4fe6c7d-a535-438a-b56f-8e0c105271b6',
                dimensions: dimensions2,
                measures: measures2,
                task: task
            });

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

        pfx.then(function(pfx) {

            return utils.Qlik.export({
                restUri: 'https://' + testQlikSenseIp,
                prefix: testQlikSenseVp,
                pfx: pfx,
                UserId: 'demoqlik',
                UserDirectory: 'WIN-OP0IIK2CDFA',
                appId: 'a4fe6c7d-a535-438a-b56f-8e0c105271b6',
                dimensions: dimensions3,
                task: task
            });

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

        pfx.then(function(pfx) {

            return utils.Qlik.export({
                restUri: 'https://' + testQlikSenseIp,
                prefix: testQlikSenseVp,
                pfx: pfx,
                UserId: 'demoqlik',
                UserDirectory: 'WIN-OP0IIK2CDFA',
                appId: 'a4fe6c7d-a535-438a-b56f-8e0c105271b6',
                dimensions: dimensions4,
                measures: measures4,
                task: task
            });

        }).then(function() {
            check(done, function() {
                expect(cbr).to.have.been.callCount(1).calledWith(arr4);
            });
        }, function(err) {
            done(err);
        });
    });

});

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

        this.timeout(10000);

        Q.all([
            pfx.then(function(pfx) {
                return sdk = utils.Qlik.apis.createQrsApiSdk({
                    restUri: 'https://' + testQlikSenseIp + ':4242',
                    pfx: pfx,
                    passPhrase: '',
                    UserId: 'qlikservice',
                    UserDirectory: '2008R2-0'
                })
            }).then(function(sdk) {
                return sdk.objects.map(function(item) { return item.key; });
            }).then(function(qrs) {
                var refQrs = [
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
                expect(qrs.filter(function(i) {return refQrs.indexOf(i) < 0;}).length).to.equal(0);
                expect(refQrs.filter(function(i) {return qrs.indexOf(i) < 0;}).length).to.equal(0);
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

        this.timeout(10000);

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
            ])
        }).then(function(reply) {
            var qrs = reply[0];
            var qrsRef = reply[1];

            var qrsEP = Object.keys(qrs);
            var qrsRefEp = qrsRef;

            expect(qrsEP.filter(function(i) {return qrsRefEp.indexOf(i) < 0;}).length).to.equal(0);
            expect(qrsRefEp.filter(function(i) {return qrsEP.indexOf(i) < 0;}).length).to.equal(0);

        }).should.notify(done);
    });

    it('about API description should work', function(done) {

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
        }).should.notify(done)


    });


});

describe('QPS SDK...', function() {

    it('should be defined', function() {
        expect(utils.Qlik.apis.qps).to.not.be.undefined;
    });

    var pfx = readFile(testQlikSensePfx);

    it('should find certificate pfx file', function(done) {
        expect(pfx).to.be.fulfilled.notify(done);
    });

    it('get ticket should work', function(done) {

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