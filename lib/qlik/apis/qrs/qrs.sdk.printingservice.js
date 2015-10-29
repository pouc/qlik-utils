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
        printingservice: {
            /**
             * @namespace
             * @memberOf printingservice
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/printingservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.id(id).get(appendprivileges).then(function(PrintingService) {
                     *     console.log(PrintingService)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<PrintingService>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/printingservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.id(id).put(postParams, appendprivileges).then(function(PrintingService) {
                     *     console.log(PrintingService)
                     * })
                     * ```
                     *
                     * @param {PrintingService} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<PrintingService>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf printingservice
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/printingservice/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf printingservice.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.printingservice.count.get(filter).then(function(int) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf printingservice
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/printingservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf printingservice.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.printingservice.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
                 *     console.log(Array.<PrintingService>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<PrintingService>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf printingservice
             */
            local: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/printingservice/local
                 *
                 * This method is manual
                 *
                 * @memberOf printingservice.local
                 *
                 * @example
                 * ```javascript
                 * qrsApi.printingservice.local.get().then(function(PrintingService) {
                 *     console.log(PrintingService)
                 * })
                 * ```
                 *
                 * @returns {Promise.<PrintingService>} a promise resolving to the response to the request
                 */
                get: function() {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/local',
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
             * @memberOf printingservice
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/printingservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf printingservice.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.printingservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf printingservice
             */
            template: {
                /**
                 * @namespace
                 * @memberOf printingservice.template
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/printingservice/template/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf printingservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.printingservice.template.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/' + id + '',
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
                         * /qrs/printingservice/template/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf printingservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.printingservice.template.id(id).get(appendprivileges).then(function(PrintingServiceTemplate) {
                         *     console.log(PrintingServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<PrintingServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                         * /qrs/printingservice/template/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf printingservice.template.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.printingservice.template.id(id).put(postParams, appendprivileges).then(function(PrintingServiceTemplate) {
                         *     console.log(PrintingServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {PrintingServiceTemplate} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<PrintingServiceTemplate>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf printingservice.template
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/printingservice/template/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.template.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.template.count.get(filter).then(function(int) {
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
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
                 * @memberOf printingservice.template
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/printingservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.template.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
                     *     console.log(Array.<PrintingServiceTemplate>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<PrintingServiceTemplate>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * @memberOf printingservice.template
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/printingservice/template/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.template.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.template.many.post(postParams, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
                     *     console.log(Array.<PrintingServiceTemplate>)
                     * })
                     * ```
                     *
                     * @param {List<PrintingServiceTemplate>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<PrintingServiceTemplate>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                 * @memberOf printingservice.template
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/printingservice/template/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.template.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {PrintingServiceTemplate} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/previewcreateprivilege',
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
                 * @memberOf printingservice.template
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/printingservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf printingservice.template.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.printingservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/printingservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf printingservice.template
                 *
                 * @example
                 * ```javascript
                 * qrsApi.printingservice.template.get(filter, orderby, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
                 *     console.log(Array.<PrintingServiceTemplate>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<PrintingServiceTemplate>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/printingservice/template?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf printingservice.template
                 *
                 * @example
                 * ```javascript
                 * qrsApi.printingservice.template.post(postParams, appendprivileges).then(function(PrintingServiceTemplate) {
                 *     console.log(PrintingServiceTemplate)
                 * })
                 * ```
                 *
                 * @param {PrintingServiceTemplate} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<PrintingServiceTemplate>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice/template' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * /qrs/printingservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf printingservice
             *
             * @example
             * ```javascript
             * qrsApi.printingservice.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
             *     console.log(Array.<PrintingService>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<PrintingService>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/printingservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
