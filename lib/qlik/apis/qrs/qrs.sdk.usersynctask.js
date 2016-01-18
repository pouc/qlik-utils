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
        usersynctask: {
            /**
             * @namespace
             * @memberOf usersynctask
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/usersynctask/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf usersynctask.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.usersynctask.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/usersynctask/' + id + '',
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
                     * /qrs/usersynctask/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf usersynctask.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.usersynctask.id(id).get(appendprivileges).then(function(UserSyncTask) {
                     *     console.log(UserSyncTask)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<UserSyncTask>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/usersynctask/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/usersynctask/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf usersynctask.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.usersynctask.id(id).put(postParams, appendprivileges).then(function(UserSyncTask) {
                     *     console.log(UserSyncTask)
                     * })
                     * ```
                     *
                     * @param {UserSyncTask} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<UserSyncTask>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/usersynctask/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf usersynctask
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctask/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctask.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctask.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/usersynctask/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf usersynctask
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctask.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctask.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
                 *     console.log(Array.<UserSyncTask>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserSyncTask>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/usersynctask/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf usersynctask
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctask/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctask.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctask.many.post(postParams, appendprivileges).then(function(Array.<UserSyncTask>) {
                 *     console.log(Array.<UserSyncTask>)
                 * })
                 * ```
                 *
                 * @param {List<UserSyncTask>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<UserSyncTask>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/usersynctask/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf usersynctask
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctask/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctask.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctask.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {UserSyncTask} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/usersynctask/previewcreateprivilege',
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
             * @memberOf usersynctask
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/usersynctask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf usersynctask.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.usersynctask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/usersynctask/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/usersynctask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf usersynctask
             *
             * @example
             * ```javascript
             * qrsApi.usersynctask.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
             *     console.log(Array.<UserSyncTask>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<UserSyncTask>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/usersynctask' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/usersynctask?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf usersynctask
             *
             * @example
             * ```javascript
             * qrsApi.usersynctask.post(postParams, appendprivileges).then(function(UserSyncTask) {
             *     console.log(UserSyncTask)
             * })
             * ```
             *
             * @param {UserSyncTask} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<UserSyncTask>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/usersynctask' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
