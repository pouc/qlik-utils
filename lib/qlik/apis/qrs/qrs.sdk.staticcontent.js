var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../../core').Core;
var base = require('../../base').Base;

module.exports = function(options) {
    return {
        /**
         * {@link qrs.md|See parent documentation}
         * @namespace
         */
        staticcontent: {
            /**
             * @namespace
             * @memberOf staticcontent
             */
            enumeratefiles: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/staticcontent/enumeratefiles?path={path}
                 *
                 * This method is manual
                 *
                 * @memberOf staticcontent.enumeratefiles
                 *
                 * @example
                 * ```javascript
                 * qrsApi.staticcontent.enumeratefiles.get(path).then(function(Array.<EnumerateFilesResult>) {
                 *     console.log(Array.<EnumerateFilesResult>)
                 * })
                 * ```
                 *
                 * @param {string=} path the path parameter
                 * @returns {Promise.<Array.<EnumerateFilesResult>>} a promise resolving to the response to the request
                 */
                get: function(path) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/staticcontent/enumeratefiles' + core.ifNotUndef(path, '?path=' + path, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            }
        }
    };
};
