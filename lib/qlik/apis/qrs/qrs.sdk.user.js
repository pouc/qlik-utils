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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/' + id + '',
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'DELETE'
                        });
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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'PUT'
                        }, postParams);
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            followingapp: {
                /**
                 * @namespace
                 * @memberOf user.followingapp
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/user/followingapp/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf user.followingapp.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.user.followingapp.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/' + id + '',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'DELETE'
                            });
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/user/followingapp/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf user.followingapp.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.user.followingapp.id(id).get(appendprivileges).then(function(UserFollowingApp) {
                         *     console.log(UserFollowingApp)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<UserFollowingApp>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/user/followingapp/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf user.followingapp.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.user.followingapp.id(id).put(postParams, appendprivileges).then(function(UserFollowingApp) {
                         *     console.log(UserFollowingApp)
                         * })
                         * ```
                         *
                         * @param {UserFollowingApp} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<UserFollowingApp>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'PUT'
                            }, postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf user.followingapp
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/followingapp/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf user.followingapp.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.followingapp.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.followingapp
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/followingapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf user.followingapp.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.followingapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
                     *     console.log(Array.<UserFollowingApp>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<UserFollowingApp>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.followingapp
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/followingapp/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf user.followingapp.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.followingapp.many.post(postParams, appendprivileges).then(function(Array.<UserFollowingApp>) {
                     *     console.log(Array.<UserFollowingApp>)
                     * })
                     * ```
                     *
                     * @param {List<UserFollowingApp>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<UserFollowingApp>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.followingapp
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/followingapp/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf user.followingapp.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.followingapp.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {UserFollowingApp} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/previewcreateprivilege',
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.followingapp
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/followingapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf user.followingapp.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.followingapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(skip, '&skip=' + skip, '') +
                                core.ifNotUndef(take, '&take=' + take, '') +
                                core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') +
                                core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/followingapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf user.followingapp
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.followingapp.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
                 *     console.log(Array.<UserFollowingApp>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserFollowingApp>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/followingapp?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf user.followingapp
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.followingapp.post(postParams, appendprivileges).then(function(UserFollowingApp) {
                 *     console.log(UserFollowingApp)
                 * })
                 * ```
                 *
                 * @param {UserFollowingApp} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<UserFollowingApp>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/followingapp' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/ownedresources' + (core.ifNotUndef(selectionid, '&userselection=' + selectionid, '') +
                            core.ifNotUndef(limit, '&limit=' + limit, '') +
                            core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/previewcreateprivilege',
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
                }
            },
            /**
             * @namespace
             * @memberOf user
             */
            recentapp: {
                /**
                 * @namespace
                 * @memberOf user.recentapp
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/user/recentapp/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf user.recentapp.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.user.recentapp.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/' + id + '',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'DELETE'
                            });
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/user/recentapp/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf user.recentapp.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.user.recentapp.id(id).get(appendprivileges).then(function(UserRecentApp) {
                         *     console.log(UserRecentApp)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<UserRecentApp>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/user/recentapp/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf user.recentapp.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.user.recentapp.id(id).put(postParams, appendprivileges).then(function(UserRecentApp) {
                         *     console.log(UserRecentApp)
                         * })
                         * ```
                         *
                         * @param {UserRecentApp} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<UserRecentApp>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'PUT'
                            }, postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf user.recentapp
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/recentapp/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf user.recentapp.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.recentapp.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.recentapp
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/recentapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf user.recentapp.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.recentapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
                     *     console.log(Array.<UserRecentApp>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<UserRecentApp>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.recentapp
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/recentapp/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf user.recentapp.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.recentapp.many.post(postParams, appendprivileges).then(function(Array.<UserRecentApp>) {
                     *     console.log(Array.<UserRecentApp>)
                     * })
                     * ```
                     *
                     * @param {List<UserRecentApp>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<UserRecentApp>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.recentapp
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/recentapp/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf user.recentapp.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.recentapp.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {UserRecentApp} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/previewcreateprivilege',
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf user.recentapp
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/user/recentapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf user.recentapp.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.user.recentapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(skip, '&skip=' + skip, '') +
                                core.ifNotUndef(take, '&take=' + take, '') +
                                core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') +
                                core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/recentapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf user.recentapp
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.recentapp.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
                 *     console.log(Array.<UserRecentApp>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserRecentApp>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/user/recentapp?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf user.recentapp
                 *
                 * @example
                 * ```javascript
                 * qrsApi.user.recentapp.post(postParams, appendprivileges).then(function(UserRecentApp) {
                 *     console.log(UserRecentApp)
                 * })
                 * ```
                 *
                 * @param {UserRecentApp} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<UserRecentApp>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/recentapp' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
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
                                    var restUri = url.parse(options.restUri);
                                    return base.request({
                                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/sync/' + userdirectory + '/' + userid + '',
                                        pfx: options.pfx,
                                        passPhrase: options.passPhrase,
                                        key: options.key,
                                        cert: options.cert,
                                        ca: options.ca,
                                        UserId: options.UserId,
                                        UserDirectory: options.UserDirectory,
                                        timeout: core.ifNotUndef(options.timeout, 60000),
                                        method: 'GET'
                                    });
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(skip, '&skip=' + skip, '') +
                            core.ifNotUndef(take, '&take=' + take, '') +
                            core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') +
                            core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
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
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'GET'
                });
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
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/user' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'POST'
                }, postParams);
            }
        }
    };
};
