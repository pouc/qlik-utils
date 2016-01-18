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
        appcontent: {
            /**
             * @namespace
             * @memberOf appcontent
             */
            appid: function(appid) {
                return {
                    /**
                     * @namespace
                     * @memberOf appcontent.appid
                     */
                    deletecontent: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/appcontent/{appid}/deletecontent?externalpath={externalpath}
                         *
                         * This method is manual
                         *
                         * @memberOf appcontent.appid.deletecontent
                         *
                         * @example
                         * ```javascript
                         * qrsApi.appcontent.appid(appid).deletecontent.delete(externalpath).then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @param {string=} externalpath the externalpath parameter
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function(externalpath) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/appcontent/' + appid + '/deletecontent' + core.ifNotUndef(externalpath, '?externalpath=' + externalpath, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'DELETE'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf appcontent.appid
                     */
                    uploadfile: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/appcontent/{appid}/uploadfile?externalpath={externalpath}&overwrite={overwrite}
                         *
                         * This method is manual
                         *
                         * @memberOf appcontent.appid.uploadfile
                         *
                         * @example
                         * ```javascript
                         * qrsApi.appcontent.appid(appid).uploadfile.post(postParams, externalpath, overwrite).then(function(String) {
                         *     console.log(String)
                         * })
                         * ```
                         *
                         * @param {String} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} externalpath the externalpath parameter
                         * @param {string=} overwrite the overwrite parameter
                         * @returns {Promise.<String>} a promise resolving to the response to the request
                         */
                        post: function(postParams, externalpath, overwrite) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/appcontent/' + appid + '/uploadfile' + (core.ifNotUndef(externalpath, '&externalpath=' + externalpath, '') +
                                    core.ifNotUndef(overwrite, '&overwrite=' + overwrite, '')).replace(/^&/, '?'),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'POST'
                            }, postParams);
                        }
                    }
                };
            }
        }
    };
};
