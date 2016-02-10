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
        loadbalancing: {
            /**
             * @namespace
             * @memberOf loadbalancing
             */
            validengines: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/loadbalancing/validengines
                 *
                 * This method is manual
                 *
                 * @memberOf loadbalancing.validengines
                 *
                 * @example
                 * ```javascript
                 * qrsApi.loadbalancing.validengines.post(postParams).then(function(LoadBalancingResult) {
                 *     console.log(LoadBalancingResult)
                 * })
                 * ```
                 *
                 * @param {LoadBalancingRequest} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<LoadBalancingResult>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/loadbalancing/validengines',
                        method: 'POST'
                    }), postParams);
                }
            }
        }
    };
};
