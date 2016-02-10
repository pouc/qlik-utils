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
        user: {
            /**
             * @namespace
             * @memberOf user
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf user.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/user/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf user.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.id(id).get(appendprivileges).then(function(User) {
                     *     console.log(User)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<User>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/user/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf user.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.id(id).put(postParams, appendprivileges).then(function(User) {
                     *     console.log(User)
                     * })
                     * ```
                     *
                     * @param {User} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<User>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/user/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf user
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf user.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/user/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf user.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.full.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
                 *     console.log(Array.<User>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<User>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/user/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf user.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.many.post(postParams, appendprivileges).then(function(Array.<User>) {
                 *     console.log(Array.<User>)
                 * })
                 * ```
                 *
                 * @param {List<User>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<User>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/user/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            ownedresources: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/ownedresources?userselection={selectionid}&limit={limit}&filter={filter}&privileges={appendprivileges}
                 *
                 * This method is manual
                 *
                 * @memberOf user.ownedresources
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.ownedresources.get(selectionid, limit, filter, appendprivileges).then(function(Array.<OwnedResourceResult>) {
                 *     console.log(Array.<OwnedResourceResult>)
                 * })
                 * ```
                 *
                 * @param {string=} selectionid the selectionid parameter
                 * @param {string=} limit the limit parameter
                 * @param {string=} filter the filter parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<OwnedResourceResult>>} a promise resolving to the response to the request
                 */
                get: function(selectionid, limit, filter, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/user/ownedresources' + (core.ifNotUndef(selectionid, '&userselection=' + selectionid, '') +
                            core.ifNotUndef(limit, '&limit=' + limit, '') +
                            core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf user.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {User} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/user/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            sync: {
                /**
                 * @namespace
                 * @memberOf user.sync
                 */
                userdirectory: function(userdirectory) {
                    return {
                        /**
                         * @namespace
                         * @memberOf user.sync.userdirectory
                         */
                        userid: function(userid) {
                            return {
                                /**
                                 * Makes a request on the Qlik Sense QRS API:
                                 *
                                 * /qrs/user/sync/{userdirectory}/{userid}
                                 *
                                 * This method is manual
                                 *
                                 * @memberOf user.sync.userdirectory.userid
                                 *
                                 * @example
                                 * ```javascript
                                 * qrsApi.user.sync.userdirectory(userdirectory).userid(userid).get().then(function(Boolean) {
                                 *     console.log(Boolean)
                                 * })
                                 * ```
                                 *
                                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                                 */
                                get: function() {
                                    return base.request(extend(true, {}, options, {
                                        restUri: options.qrsRestUri + '/qrs/user/sync/' + userdirectory + '/' + userid + '',
                                        method: 'GET'
                                    }));
                                }
                            };
                        }
                    };
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf user.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/user/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/user?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf user
             *
             * @example
             * ```javascript
             * qrsApi.user.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
             *     console.log(Array.<User>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<User>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/user' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/user?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf user
             *
             * @example
             * ```javascript
             * qrsApi.user.post(postParams, appendprivileges).then(function(User) {
             *     console.log(User)
             * })
             * ```
             *
             * @param {User} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<User>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/user' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
