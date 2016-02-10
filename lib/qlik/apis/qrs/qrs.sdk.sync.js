var url = require('url');
var XRegExp = require('xregexp');
var extend = require('extend');

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
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/sync/snapshot',
                        method: 'POST'
                    }));
                }
            }
        }
    };
};
