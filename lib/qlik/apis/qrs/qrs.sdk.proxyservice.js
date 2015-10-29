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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/local',
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
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @namespace
             * @memberOf proxyservice
             */
            template: {
                /**
                 * @namespace
                 * @memberOf proxyservice.template
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/proxyservice/template/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf proxyservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.proxyservice.template.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/' + id + '',
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
                         * /qrs/proxyservice/template/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf proxyservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.proxyservice.template.id(id).get(appendprivileges).then(function(ProxyServiceTemplate) {
                         *     console.log(ProxyServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<ProxyServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                         * /qrs/proxyservice/template/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf proxyservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.proxyservice.template.id(id).put(postParams, appendprivileges).then(function(ProxyServiceTemplate) {
                         *     console.log(ProxyServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {ProxyServiceTemplate} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<ProxyServiceTemplate>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf proxyservice.template
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/template/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.template.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.template.count.get(filter).then(function(int) {
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
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
                 * @memberOf proxyservice.template
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.template.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
                     *     console.log(Array.<ProxyServiceTemplate>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<ProxyServiceTemplate>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * @memberOf proxyservice.template
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/template/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.template.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.template.many.post(postParams, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
                     *     console.log(Array.<ProxyServiceTemplate>)
                     * })
                     * ```
                     *
                     * @param {List<ProxyServiceTemplate>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<ProxyServiceTemplate>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf proxyservice.template
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/template/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.template.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {ProxyServiceTemplate} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/previewcreateprivilege',
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
                 * @memberOf proxyservice.template
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/proxyservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf proxyservice.template.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.proxyservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/proxyservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservice.template
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservice.template.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
                 *     console.log(Array.<ProxyServiceTemplate>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ProxyServiceTemplate>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/proxyservice/template?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf proxyservice.template
                 *
                 * @example
                 * ```javascript
                 * qrsApi.proxyservice.template.post(postParams, appendprivileges).then(function(ProxyServiceTemplate) {
                 *     console.log(ProxyServiceTemplate)
                 * })
                 * ```
                 *
                 * @param {ProxyServiceTemplate} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<ProxyServiceTemplate>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice/template' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/proxyservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
        }
    };
};
