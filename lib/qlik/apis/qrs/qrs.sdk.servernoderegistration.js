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
        servernoderegistration: {
            /**
             * @namespace
             * @memberOf servernoderegistration
             */
            start: {
                /**
                 * @namespace
                 * @memberOf servernoderegistration.start
                 */
                servernodeconfigurationid: function(servernodeconfigurationid) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/servernoderegistration/start/{servernodeconfigurationid}
                         *
                         * This method is manual
                         *
                         * @memberOf servernoderegistration.start.servernodeconfigurationid
                         *
                         * @example
                         * ```javascript
                         * qrsApi.servernoderegistration.start.servernodeconfigurationid(servernodeconfigurationid).get().then(function(String) {
                         *     console.log(String)
                         * })
                         * ```
                         *
                         * @returns {Promise.<String>} a promise resolving to the response to the request
                         */
                        get: function() {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/servernoderegistration/start/' + servernodeconfigurationid + '',
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
                    };
                }
            }
        }
    };
};
