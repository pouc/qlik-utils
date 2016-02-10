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
        applicationlog: {
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/applicationlog
             *
             * This method is manual
             *
             * @memberOf applicationlog
             *
             * @example
             * ```javascript
             * qrsApi.applicationlog.post(postParams).then(function() {
             *     console.log('done')
             * })
             * ```
             *
             * @param {ApplicationLogInfo} postParams the parameters to send as request body to the API endpoint
             * @returns {Promise} a promise resolving without a return value when the request is finished
             */
            post: function(postParams) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/applicationlog',
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
