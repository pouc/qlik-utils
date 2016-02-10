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
        usersynctaskoperational: {
            /**
             * @namespace
             * @memberOf usersynctaskoperational
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/usersynctaskoperational/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf usersynctaskoperational.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.usersynctaskoperational.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/usersynctaskoperational/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf usersynctaskoperational.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.usersynctaskoperational.id(id).get(appendprivileges).then(function(UserSyncTaskOperational) {
                     *     console.log(UserSyncTaskOperational)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<UserSyncTaskOperational>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/usersynctaskoperational/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf usersynctaskoperational.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.usersynctaskoperational.id(id).put(postParams, appendprivileges).then(function(UserSyncTaskOperational) {
                     *     console.log(UserSyncTaskOperational)
                     * })
                     * ```
                     *
                     * @param {UserSyncTaskOperational} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<UserSyncTaskOperational>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf usersynctaskoperational
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctaskoperational/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctaskoperational.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctaskoperational.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf usersynctaskoperational
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctaskoperational.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
                 *     console.log(Array.<UserSyncTaskOperational>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserSyncTaskOperational>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf usersynctaskoperational
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctaskoperational/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctaskoperational.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctaskoperational.many.post(postParams, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
                 *     console.log(Array.<UserSyncTaskOperational>)
                 * })
                 * ```
                 *
                 * @param {List<UserSyncTaskOperational>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserSyncTaskOperational>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf usersynctaskoperational
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctaskoperational/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctaskoperational.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctaskoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {UserSyncTaskOperational} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf usersynctaskoperational
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctaskoperational.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/usersynctaskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/usersynctaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf usersynctaskoperational
             *
             * @example
             * ```javascript
             * qrsApi.usersynctaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
             *     console.log(Array.<UserSyncTaskOperational>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<UserSyncTaskOperational>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/usersynctaskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/usersynctaskoperational?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf usersynctaskoperational
             *
             * @example
             * ```javascript
             * qrsApi.usersynctaskoperational.post(postParams, appendprivileges).then(function(UserSyncTaskOperational) {
             *     console.log(UserSyncTaskOperational)
             * })
             * ```
             *
             * @param {UserSyncTaskOperational} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<UserSyncTaskOperational>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/usersynctaskoperational' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
