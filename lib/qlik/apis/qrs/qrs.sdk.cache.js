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
        cache: {
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/cache
             *
             * This method is manual
             *
             * @memberOf cache
             *
             * @example
             * ```javascript
             * qrsApi.cache.delete().then(function() {
             *     console.log('done')
             * })
             * ```
             *
             * @returns {Promise} a promise resolving without a return value when the request is finished
             */
            delete: function() {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/cache',
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
        }
    };
};
