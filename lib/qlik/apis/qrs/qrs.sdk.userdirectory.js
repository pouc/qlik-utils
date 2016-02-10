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
        userdirectory: {
            /**
             * @namespace
             * @memberOf userdirectory
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/userdirectory/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf userdirectory.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.userdirectory.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/userdirectory/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/userdirectory/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf userdirectory.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.userdirectory.id(id).get(appendprivileges).then(function(UserDirectory) {
                     *     console.log(UserDirectory)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/userdirectory/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/userdirectory/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf userdirectory.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.userdirectory.id(id).put(postParams, appendprivileges).then(function(UserDirectory) {
                     *     console.log(UserDirectory)
                     * })
                     * ```
                     *
                     * @param {UserDirectory} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/userdirectory/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf userdirectory
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectory/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf userdirectory.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectory.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/userdirectory/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf userdirectory
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectory/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf userdirectory.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectory.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
                 *     console.log(Array.<UserDirectory>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/userdirectory/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf userdirectory
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectory/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf userdirectory.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectory.many.post(postParams, appendprivileges).then(function(Array.<UserDirectory>) {
                 *     console.log(Array.<UserDirectory>)
                 * })
                 * ```
                 *
                 * @param {List<UserDirectory>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/userdirectory/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf userdirectory
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectory/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf userdirectory.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectory.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {UserDirectory} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/userdirectory/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf userdirectory
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectory/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf userdirectory.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectory.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/userdirectory/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/userdirectory?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf userdirectory
             *
             * @example
             * ```javascript
             * qrsApi.userdirectory.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
             *     console.log(Array.<UserDirectory>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/userdirectory' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/userdirectory?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf userdirectory
             *
             * @example
             * ```javascript
             * qrsApi.userdirectory.post(postParams, appendprivileges).then(function(UserDirectory) {
             *     console.log(UserDirectory)
             * })
             * ```
             *
             * @param {UserDirectory} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/userdirectory' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
