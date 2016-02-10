var url = require('url');
var Q = require('q');
var utils = require('./../../../../index');
var XRegExp = require('xregexp');

var core = utils.Core;

var fs = require('fs');
var readFile = Q.denodeify(fs.readFile);

var task = new utils.Core.Task();
task.start();

task.bind(function(task) {
    console.log(task.val, task.detail);
});

readFile(__dirname + '/../../../../test/2.2.1/client.pfx').then(function(pfx) {

    return utils.Qlik.apis.createQrsApiSdk({
        restUri: 'https://localhost:4242',
        pfx: pfx,
        UserId: 'qlikservice',
        UserDirectory: '2008R2-0'
    }).then(function(apis) {
        console.log('apis', apis);
        apis.objects.forEach(function(item) {
            console.log('/**');
            console.log(' * ' + item.key + ' endpoint');
            console.log(' * {@link qrs.sdk.' + item.key + '.md|See documentation}');
            console.log(' * @namespace ' + item.key);
            console.log(' * @memberOf qrs');
            console.log(' * ');
            console.log(' * @example');
            console.log(' * ```javascript');
            console.log(' * var ' + item.key + ' = qrsApi.' + item.key + ';');
            console.log(' * ```');
            console.log(' */');
            console.log(item.key + ': require(\'' + './qrs.sdk.' + item.key + '\')(options).' + item.key + ',');

            var fileHeader = 'var url = require(\'url\');' + '\n';
            fileHeader += 'var XRegExp = require(\'xregexp\');' + '\n';
            fileHeader += 'var extend = require(\'extend\');' + '\n';
            fileHeader += '' + '\n';
            fileHeader += 'var core = require(\'../../../core\').Core;' + '\n';
            fileHeader += 'var base = require(\'../../base\').Base;' + '\n';
            fileHeader += '' + '\n';
            fileHeader += 'module.exports = ';

            fs.writeFile(__dirname + '/qrs.sdk.' + item.key + '.js',
                fileHeader +
                apis.header +
                item.str.replace(/%parentDoc%/g, 'qrs.md') +
                apis.footer,
                function(err) {
                    if (err) {
                        return console.log(err);
                    }
                }
            );
        });

        console.log('');
        console.log('');

        apis.objects.forEach(function(item) {
            console.log('{src: \'lib/qlik/apis/qrs/qrs.sdk.' + item.key + '.js\', dest: \'lib/qlik/apis/qrs/qrs.sdk.' + item.key + '.md\'},');
        });
    }, console.log);

}, console.log);
