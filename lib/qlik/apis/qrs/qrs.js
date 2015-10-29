var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../../core').Core;
var base = require('../../base').Base;

var exports = {};
module.exports = exports;

function addTo(tree, key, value) {
    if (key.length == 1) {
        tree[key[0]] = value;
    } else {
        if (Object.keys(tree).indexOf(key[0]) == -1) {
            tree[key[0]] = {};
        }
        addTo(tree[key[0]], key.slice(1), value);
    }
}

function createTo(node, parent, indentationLevel) {
    var retVal = [];
    Object.keys(node).forEach(function(key) {
        var str = '';
        if (key.match(/{([^{]+)}/g)) {
            str += '/**' + '\n';
            if (typeof parent === 'undefined') {
                str += ' * {@link %parentDoc%|See parent documentation}'  + '\n';
            }
            str += ' * @namespace' + '\n';
            if (typeof parent !== 'undefined') {
                str += ' * @memberOf ' + parent + '\n';
            }
            str += ' */' + '\n';
            str += key.replace(/{([^{]+)}/g, '$1') + ': function(' + key.replace(/{([^{]+)}/g, '$1') + ') {' + '\n';
            str += '    return {' + '\n';
            str += createTo(node[key], ((typeof parent !== 'undefined') ? parent + '.' : '') + key.replace(/{([^{]+)}/g, '$1'), 2).map(function(item) { return item.str; }).join(',\n') + '\n';
            str += '    };\n';
            str += '}';
        } else {
            if (typeof node[key].function !== 'undefined') {
                str += node[key].comment.replace(/%path%/g, parent) + '\n';
                str += key + ': ' + node[key].function;
            } else {
                str += '/**' + '\n';
                if (typeof parent === 'undefined') {
                    str += ' * {@link %parentDoc%|See parent documentation}'  + '\n';
                }
                str += ' * @namespace' + '\n';
                if (typeof parent !== 'undefined') {
                    str += ' * @memberOf ' + parent + '\n';
                }
                str += ' */' + '\n';
                str += key + ': {' + '\n';
                str += createTo(node[key], ((typeof parent !== 'undefined') ? parent + '.' : '') + key, 1).map(function(item) { return item.str; }).join(',\n') + '\n';
                str += '}';
            }
        }
        retVal.push({
            key: key,
            str: str.split('\n').map(function(item) {
                return core.repeat('    ', indentationLevel) + item;
            }).join('\n')
        });
    });
    return retVal;
}

function parseAPI(apiString) {

    var result = {
        api: undefined,
        httpMethod: undefined,
        path: [],
        pathParam: [],
        method: [],
        methodParam: [],
        queryString: []
    };

    /**
     * @type {Object}
     * @property {string} extended
     * @property {string} extended.bodytype
     * @property {string} extended.resource
     * @property {string} extended.returntype
     */
    var api = JSON.parse(apiString);

    /**
     * @type {Object}
     * @property {string} path
     * @property {string} method
     * @property {string} queryString
     * @property {string} queryStringLast
     */
    var firstPass = XRegExp.exec(
        api.path,
        XRegExp(
            '^' +
            '/qrs/' +
            '(?<path>([^/]+/)+)?' +
            '(?<method>[^?]+)?' +
            '(' +
            '\\?' +
            '(?<queryString>([^?=&]+=[^?=&]+&)+)?' +
            '(?<queryStringLast>[^?=&]+=[^?=&]+)' +
            ')?'
        )
    );

    result.api = api;

    result.api.extended = XRegExp.exec(
        api.extended,
        XRegExp(
            '^\\[(.*)\\]$'
        )
    )[1].split(',').map(function(item) {
            return item.trim().split('=');
        }).reduce(function(p, c) {
            p[c[0]] = c[1];
            return p;
        }, {});

    result.httpMethod = api.method;

    if (typeof firstPass.path !== 'undefined') {
        result.path = firstPass.path.replace(/\/$/, '').split('/');
        result.pathParam = core.ifNotUndef(firstPass.path.match(/{([^{]+)}/g), []).map(function(match) { return match.replace(/{([^{]+)}/g, '$1'); }).map(function(item) {
            return {key: item, value: item};
        });
    } else {
        result.path = [];
        result.pathParam = [];
    }

    if (typeof firstPass.method !== 'undefined') {
        result.method = [firstPass.method];
        result.methodParam = core.ifNotUndef(firstPass.method.match(/{([^{]+)}/g), [firstPass.method.replace(/{([^{]+)}/g, '$1')], []).map(function(item) {
            return {key: item, value: item};
        });
    } else {
        result.method = [];
        result.methodParam = [];
    }

    if (typeof firstPass.queryStringLast !== 'undefined') {
        result.queryString = core.ifNotUndef(firstPass.queryString, core.ifNotUndef(firstPass.queryString, '').replace(/&$/, '').split('&'), []).concat([firstPass.queryStringLast]).map(function(item) {
            var match = item.match(/^([^=]+)={([^=]+)}$/);
            if (match) {
                return {key: match[1], value: match[2]};
            }
        });
    } else {
        result.queryString = [];
    }

    var method = {};

    var defaultParams = [ ];
    if (result.api.extended.bodytype && result.api.extended.bodytype !== 'Void') {
        defaultParams = defaultParams.concat([{value: 'postParams'}]);
    }

    method.key = result.path.concat(result.method).concat(result.httpMethod.toLowerCase());

    result.api.extended.bodytype = result.api.extended.bodytype.replace(/^IEnumerable(.*)$/, 'Object');

    result.api.extended.returntype = result.api.extended.returntype.replace(/^IDictionary<(.*?)(>)?$/, 'Object');
    result.api.extended.returntype = result.api.extended.returntype.replace(/^Dictionary<(.*?)(>)?$/, 'Object');
    result.api.extended.returntype = result.api.extended.returntype.replace(/^IEnumerable(.*)$/, 'Object');
    result.api.extended.returntype = result.api.extended.returntype.replace(/^IList<(.*?)(>)?$/, 'Array.<$1>');
    result.api.extended.returntype = result.api.extended.returntype.replace(/^List<(.*?)(>)?$/, 'Array.<$1>');
    result.api.extended.returntype = result.api.extended.returntype.replace(/^Int(32|64)$/, 'int');
    result.api.extended.returntype = result.api.extended.returntype.replace(/^ITable$/, 'Object');

    method.comment = '/**' + '\n' +
        ' * Makes a request on the Qlik Sense QRS API:' + '\n' +
        ' *' + '\n' +
        ' * ' + api.path + '\n' +
        ' *' + '\n' +
        ' * This method is ' + result.api.extended.resource + '\n' +
        ' *' + '\n' +
        ' * @memberOf %path%' + '\n' +
        ' *' + '\n' +
        ' * @example' + '\n' +
        ' * ```javascript' + '\n' +
        ' * qrsApi.' + method.key.map(function(item) { return item.replace(/{([^{]+)}/g, '$1($1)'); }).join('.') +
            '(' + defaultParams.concat(result.queryString).map(function(item) { return item.value; }).join(', ') +
            ').then(function(' +
            ((result.api.extended.returntype && result.api.extended.returntype !== 'Void') ? result.api.extended.returntype : '') + ') {' + '\n' +
        ' *     console.log(' + ((result.api.extended.returntype && result.api.extended.returntype !== 'Void') ? result.api.extended.returntype : '\'done\'') + ')' + '\n' +
        ' * })' + '\n' +
        ' * ```' + '\n' +
        ' *' + '\n' +
        (
            (result.api.extended.bodytype && result.api.extended.bodytype !== 'Void') ?
            ' * @param {' + result.api.extended.bodytype + '} postParams the parameters to send as request body to the API endpoint' + '\n' :
            ''
        ) +
        result.queryString.map(function(item) {
            return ' * @param {string=} ' + item.value + ' the ' + item.value + ' parameter' + '\n';
        }).join('') +
        (
            (result.api.extended.returntype && result.api.extended.returntype !== 'Void') ?
            ' * @returns {Promise.<' + result.api.extended.returntype + '>} a promise resolving to the response to the request' :
            ' * @returns {Promise} a promise resolving without a return value when the request is finished'
        ) + '\n' +
        ' */';

    method.function = 'function(' + defaultParams.concat(result.queryString).map(function(item) { return item.value; }).join(', ') + ') {' + '\n' +
        '    var restUri = url.parse(options.restUri);' + '\n' +
        '    return base.request({' + '\n' +
        '        restUri: \'https://\' + restUri.hostname + \':\' + restUri.port + \'/qrs/' + result.path.concat(result.method).map(function(item) {
            return item.replace(/{([^{]+)}/g, '\' + $1 + \'');
        }).join('/') + (
            (result.queryString.length > 1) ?
            '\' + (' + result.queryString.map(function(item) { return 'core.ifNotUndef(' + item.value + ', \'&' + item.key + '=\' + ' + item.value + ', \'\')'; }).join(' +\n            ') + ').replace(/^&/, \'?\')' :
            ((result.queryString.length == 1) ? '\' + ' + result.queryString.map(function(item) { return 'core.ifNotUndef(' + item.value + ', \'?' + item.key + '=\' + ' + item.value + ', \'\')'; }).join(' +\n            ') : '\'')
        ) + ',' + '\n' +
        '        pfx: options.pfx,' + '\n' +
        '        passPhrase: options.passPhrase,' + '\n' +
        '        key: options.key,' + '\n' +
        '        cert: options.cert,' + '\n' +
        '        ca: options.ca,' + '\n' +
        '        UserId: options.UserId,' + '\n' +
        '        UserDirectory: options.UserDirectory,' + '\n' +
        '        timeout: core.ifNotUndef(options.timeout, 60000),' + '\n' +
        '        method: \'' + result.httpMethod + '\'' + '\n' +
        '    }' + ((result.api.extended.bodytype && result.api.extended.bodytype !== 'Void') ? ', postParams' : '') + ');' + '\n' +
        '}';

    return method;
}

exports.createQrsApiSdk = function(options) {

    var restUri = url.parse(options.restUri);

    return base.request({
        restUri: restUri.protocol + '//' + restUri.host + '/qrs/about/api/description?extended=true&format=JSON',
        pfx: options.pfx,
        passPhrase: options.passPhrase,
        key: options.key,
        cert: options.cert,
        ca: options.ca,
        UserId: options.UserId,
        UserDirectory: options.UserDirectory,
        timeout: 600000,
        method: 'GET'
    }).then(function(apis) {
        var methods = [];
        apis.forEach(function(api) {
            methods.push(parseAPI(api));
        });
        return methods;
    }).then(function(methods) {
        var methodTree = {};
        methods.forEach(function(method) {
            addTo(methodTree, method.key, method);
        });
        return methodTree;
    }).then(function(methodTree) {
        return {
            header: 'function(options) {\n    return {\n' ,
            objects: createTo(methodTree, undefined, 1).map(function(item) {
                return {
                    key: item.key,
                    str: item.str.split('\n').map(function(item) {
                        return core.repeat('    ', 1) + item;
                    }).join('\n')
                };
            }),
            footer: '\n    };\n};\n'
        };
    }).fail(function(reply) {
        console.log(reply);
    });

};

/**
 * {@link qlik/apis/qrs/qrs.md|See documentation}
 * @namespace qrs
 * @memberOf Qlik.apis
 *
 * @example
 * ```javascript
 * var qrsApi = utils.Qlik.apis.qrs({
 *     restUri: 'https://localhost:4242',
 *     pfx: pfx,
 *     UserId: 'qlikservice',
 *     UserDirectory: '2008R2-0'
 * });
 * ```
 */
exports.qrs = require('./qrs.sdk');
