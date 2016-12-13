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
        proxyservicecertificate: {
            /**
             * @namespace
             * @memberOf proxyservicecertificate
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservicecertificate/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservicecertificate.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservicecertificate.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservicecertificate/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservicecertificate.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservicecertificate.id(id).get(appendprivileges).then(function(ProxyServiceCertificate) {
                     *     console.log(ProxyServiceCertificate)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ProxyServiceCertificate>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservicecertificate/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservicecertificate.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservicecertificate.id(id).put(postParams, appendprivileges).then(function(ProxyServiceCertificate) {
                     *     console.log(ProxyServiceCertificate)
                     * })
                     * ```
                     *
                     * @param {ProxyServiceCertificate} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ProxyServiceCertificate>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf proxyservicecertificate
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservicecertificate/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservicecertificate.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservicecertificate.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf proxyservicecertificate
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservicecertificate/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservicecertificate.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservicecertificate.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceCertificate>) {
                 *     console.log(Array.<ProxyServiceCertificate>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ProxyServiceCertificate>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf proxyservicecertificate
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservicecertificate/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservicecertificate.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservicecertificate.many.post(postParams, appendprivileges).then(function(Array.<ProxyServiceCertificate>) {
                 *     console.log(Array.<ProxyServiceCertificate>)
                 * })
                 * ```
                 *
                 * @param {List<ProxyServiceCertificate>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ProxyServiceCertificate>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf proxyservicecertificate
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservicecertificate/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservicecertificate.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservicecertificate.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ProxyServiceCertificate} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf proxyservicecertificate
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/proxyservicecertificate/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservicecertificate.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservicecertificate.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/proxyservicecertificate/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/proxyservicecertificate?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf proxyservicecertificate
             *
             * @example
             * ```javascript
             * qrsApi.proxyservicecertificate.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceCertificate>) {
             *     console.log(Array.<ProxyServiceCertificate>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ProxyServiceCertificate>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/proxyservicecertificate' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/proxyservicecertificate?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf proxyservicecertificate
             *
             * @example
             * ```javascript
             * qrsApi.proxyservicecertificate.post(postParams, appendprivileges).then(function(ProxyServiceCertificate) {
             *     console.log(ProxyServiceCertificate)
             * })
             * ```
             *
             * @param {ProxyServiceCertificate} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<ProxyServiceCertificate>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/proxyservicecertificate' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
