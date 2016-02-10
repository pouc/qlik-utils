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
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/cache',
                    method: 'DELETE'
                }));
            }
        }
    };
};
