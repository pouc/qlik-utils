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
        executionresult: {
            /**
             * @namespace
             * @memberOf executionresult
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/executionresult/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/' + id + '',
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
                     * /qrs/executionresult/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.id(id).get(appendprivileges).then(function(ExecutionResult) {
                     *     console.log(ExecutionResult)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ExecutionResult>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/executionresult/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.id(id).put(postParams, appendprivileges).then(function(ExecutionResult) {
                     *     console.log(ExecutionResult)
                     * })
                     * ```
                     *
                     * @param {ExecutionResult} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ExecutionResult>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf executionresult
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/executionresult/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.count.get(filter).then(function(int) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf executionresult
             */
            detail: {
                /**
                 * @namespace
                 * @memberOf executionresult.detail
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/executionresult/detail/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf executionresult.detail.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.executionresult.detail.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/' + id + '',
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
                         * /qrs/executionresult/detail/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf executionresult.detail.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.executionresult.detail.id(id).get(appendprivileges).then(function(ExecutionResultDetail) {
                         *     console.log(ExecutionResultDetail)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<ExecutionResultDetail>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                         * /qrs/executionresult/detail/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf executionresult.detail.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.executionresult.detail.id(id).put(postParams, appendprivileges).then(function(ExecutionResultDetail) {
                         *     console.log(ExecutionResultDetail)
                         * })
                         * ```
                         *
                         * @param {ExecutionResultDetail} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<ExecutionResultDetail>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf executionresult.detail
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/executionresult/detail/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.detail.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.detail.count.get(filter).then(function(int) {
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
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
                 * @memberOf executionresult.detail
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/executionresult/detail/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.detail.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.detail.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
                     *     console.log(Array.<ExecutionResultDetail>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<ExecutionResultDetail>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * @memberOf executionresult.detail
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/executionresult/detail/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.detail.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.detail.many.post(postParams, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
                     *     console.log(Array.<ExecutionResultDetail>)
                     * })
                     * ```
                     *
                     * @param {List<ExecutionResultDetail>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<ExecutionResultDetail>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf executionresult.detail
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/executionresult/detail/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.detail.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.detail.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {ExecutionResultDetail} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/previewcreateprivilege',
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
                 * @memberOf executionresult.detail
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/executionresult/detail/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf executionresult.detail.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.executionresult.detail.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/executionresult/detail?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.detail
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.detail.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
                 *     console.log(Array.<ExecutionResultDetail>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExecutionResultDetail>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/executionresult/detail?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.detail
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.detail.post(postParams, appendprivileges).then(function(ExecutionResultDetail) {
                 *     console.log(ExecutionResultDetail)
                 * })
                 * ```
                 *
                 * @param {ExecutionResultDetail} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<ExecutionResultDetail>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/detail' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf executionresult
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/executionresult/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
                 *     console.log(Array.<ExecutionResult>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExecutionResult>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf executionresult
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/executionresult/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.many.post(postParams, appendprivileges).then(function(Array.<ExecutionResult>) {
                 *     console.log(Array.<ExecutionResult>)
                 * })
                 * ```
                 *
                 * @param {List<ExecutionResult>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExecutionResult>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf executionresult
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/executionresult/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ExecutionResult} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/previewcreateprivilege',
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
             * @memberOf executionresult
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/executionresult/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf executionresult.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.executionresult.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/executionresult?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf executionresult
             *
             * @example
             * ```javascript
             * qrsApi.executionresult.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
             *     console.log(Array.<ExecutionResult>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ExecutionResult>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/executionresult?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf executionresult
             *
             * @example
             * ```javascript
             * qrsApi.executionresult.post(postParams, appendprivileges).then(function(ExecutionResult) {
             *     console.log(ExecutionResult)
             * })
             * ```
             *
             * @param {ExecutionResult} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<ExecutionResult>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/executionresult' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
