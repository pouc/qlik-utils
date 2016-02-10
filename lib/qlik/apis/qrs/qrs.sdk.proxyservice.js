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
        proxyservice: {
            /**
             * @namespace
             * @memberOf proxyservice
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.id(id).get(appendprivileges).then(function(ProxyService) {
                     *     console.log(ProxyService)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ProxyService>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/proxyservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.id(id).put(postParams, appendprivileges).then(function(ProxyService) {
                     *     console.log(ProxyService)
                     * })
                     * ```
                     *
                     * @param {ProxyService} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ProxyService>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/proxyservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf proxyservice
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservice/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservice.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservice.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf proxyservice
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservice.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservice.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
                 *     console.log(Array.<ProxyService>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ProxyService>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf proxyservice
             */
            local: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservice/local
                 *
                 * This method is manual
                 *
                 * @memberOf proxyservice.local
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservice.local.get().then(function(ProxyService) {
                 *     console.log(ProxyService)
                 * })
                 * ```
                 *
                 * @returns {Promise.<ProxyService>} a promise resolving to the response to the request
                 */
                get: function() {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservice/local',
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf proxyservice
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservice.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
                 *     console.log(Object)
                 * })
                 * ```
                 *
                 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} filter the filter parameter
                 * @param {string=} skip the skip parameter
                 * @param {string=} take the take parameter
                 * @param {string=} sortcolumn the sortcolumn parameter
                 * @param {string=} orderascending the orderascending parameter
                 * @returns {Promise.<Object>} a promise resolving to the response to the request
                 */
                post: function(postParams, filter, skip, take, sortcolumn, orderascending) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(skip, '&skip=' + skip, '') +
                            core.ifNotUndef(take, '&take=' + take, '') +
                            core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') +
                            core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/proxyservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf proxyservice
             *
             * @example
             * ```javascript
             * qrsApi.proxyservice.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
             *     console.log(Array.<ProxyService>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ProxyService>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/proxyservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
