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
        reloadtaskoperational: {
            /**
             * @namespace
             * @memberOf reloadtaskoperational
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/reloadtaskoperational/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf reloadtaskoperational.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.reloadtaskoperational.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/' + id + '',
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
                     * /qrs/reloadtaskoperational/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf reloadtaskoperational.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.reloadtaskoperational.id(id).get(appendprivileges).then(function(ReloadTaskOperational) {
                     *     console.log(ReloadTaskOperational)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ReloadTaskOperational>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/reloadtaskoperational/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf reloadtaskoperational.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.reloadtaskoperational.id(id).put(postParams, appendprivileges).then(function(ReloadTaskOperational) {
                     *     console.log(ReloadTaskOperational)
                     * })
                     * ```
                     *
                     * @param {ReloadTaskOperational} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ReloadTaskOperational>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf reloadtaskoperational
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/reloadtaskoperational/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf reloadtaskoperational.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.reloadtaskoperational.count.get(filter).then(function(int) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf reloadtaskoperational
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/reloadtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf reloadtaskoperational.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.reloadtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
                 *     console.log(Array.<ReloadTaskOperational>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ReloadTaskOperational>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf reloadtaskoperational
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/reloadtaskoperational/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf reloadtaskoperational.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.reloadtaskoperational.many.post(postParams, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
                 *     console.log(Array.<ReloadTaskOperational>)
                 * })
                 * ```
                 *
                 * @param {List<ReloadTaskOperational>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ReloadTaskOperational>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf reloadtaskoperational
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/reloadtaskoperational/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf reloadtaskoperational.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.reloadtaskoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ReloadTaskOperational} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/previewcreateprivilege',
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
             * @memberOf reloadtaskoperational
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/reloadtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf reloadtaskoperational.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.reloadtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/reloadtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf reloadtaskoperational
             *
             * @example
             * ```javascript
             * qrsApi.reloadtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
             *     console.log(Array.<ReloadTaskOperational>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ReloadTaskOperational>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/reloadtaskoperational?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf reloadtaskoperational
             *
             * @example
             * ```javascript
             * qrsApi.reloadtaskoperational.post(postParams, appendprivileges).then(function(ReloadTaskOperational) {
             *     console.log(ReloadTaskOperational)
             * })
             * ```
             *
             * @param {ReloadTaskOperational} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<ReloadTaskOperational>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/reloadtaskoperational' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
