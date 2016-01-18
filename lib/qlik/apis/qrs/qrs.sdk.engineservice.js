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
        engineservice: {
            /**
             * @namespace
             * @memberOf engineservice
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/engineservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.id(id).get(appendprivileges).then(function(EngineService) {
                     *     console.log(EngineService)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<EngineService>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/engineservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/engineservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.id(id).put(postParams, appendprivileges).then(function(EngineService) {
                     *     console.log(EngineService)
                     * })
                     * ```
                     *
                     * @param {EngineService} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<EngineService>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/engineservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf engineservice
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/engineservice/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf engineservice.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.engineservice.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/engineservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf engineservice
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/engineservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf engineservice.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.engineservice.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
                 *     console.log(Array.<EngineService>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<EngineService>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/engineservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf engineservice
             */
            local: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/engineservice/local
                 *
                 * This method is manual
                 *
                 * @memberOf engineservice.local
                 *
                 * @example
                 * ```javascript
                 * qrsApi.engineservice.local.get().then(function(EngineService) {
                 *     console.log(EngineService)
                 * })
                 * ```
                 *
                 * @returns {Promise.<EngineService>} a promise resolving to the response to the request
                 */
                get: function() {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/engineservice/local',
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
             * @memberOf engineservice
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/engineservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf engineservice.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.engineservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/engineservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf engineservice
             */
            template: {
                /**
                 * @namespace
                 * @memberOf engineservice.template
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/engineservice/template/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf engineservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.engineservice.template.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/engineservice/template/' + id + '',
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
                         * /qrs/engineservice/template/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf engineservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.engineservice.template.id(id).get(appendprivileges).then(function(EngineServiceTemplate) {
                         *     console.log(EngineServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<EngineServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/engineservice/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                         * /qrs/engineservice/template/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf engineservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.engineservice.template.id(id).put(postParams, appendprivileges).then(function(EngineServiceTemplate) {
                         *     console.log(EngineServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {EngineServiceTemplate} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<EngineServiceTemplate>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/engineservice/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf engineservice.template
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/engineservice/template/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.template.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.template.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/engineservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
                 * @memberOf engineservice.template
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/engineservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.template.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
                     *     console.log(Array.<EngineServiceTemplate>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<EngineServiceTemplate>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/engineservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * @memberOf engineservice.template
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/engineservice/template/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.template.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.template.many.post(postParams, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
                     *     console.log(Array.<EngineServiceTemplate>)
                     * })
                     * ```
                     *
                     * @param {List<EngineServiceTemplate>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<EngineServiceTemplate>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/engineservice/template/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf engineservice.template
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/engineservice/template/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.template.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {EngineServiceTemplate} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/engineservice/template/previewcreateprivilege',
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
                 * @memberOf engineservice.template
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/engineservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf engineservice.template.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.engineservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/engineservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/engineservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf engineservice.template
                 *
                 * @example
                 * ```javascript
                 * qrsApi.engineservice.template.get(filter, orderby, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
                 *     console.log(Array.<EngineServiceTemplate>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<EngineServiceTemplate>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/engineservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/engineservice/template?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf engineservice.template
                 *
                 * @example
                 * ```javascript
                 * qrsApi.engineservice.template.post(postParams, appendprivileges).then(function(EngineServiceTemplate) {
                 *     console.log(EngineServiceTemplate)
                 * })
                 * ```
                 *
                 * @param {EngineServiceTemplate} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<EngineServiceTemplate>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/engineservice/template' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * /qrs/engineservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf engineservice
             *
             * @example
             * ```javascript
             * qrsApi.engineservice.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
             *     console.log(Array.<EngineService>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<EngineService>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/engineservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
