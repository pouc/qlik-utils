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
        sync: {
            /**
             * @namespace
             * @memberOf sync
             */
            snapshot: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/sync/snapshot
                 *
                 * This method is manual
                 *
                 * @memberOf sync.snapshot
                 *
                 * @example
                 * ```javascript
                 * qrsApi.sync.snapshot.post().then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function() {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/sync/snapshot',
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    });
                }
            }
        }
    };
};
