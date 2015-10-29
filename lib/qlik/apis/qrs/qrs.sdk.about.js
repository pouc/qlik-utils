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
        about: {
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/about
             *
             * This method is manual
             *
             * @memberOf about
             *
             * @example
             * ```javascript
             * qrsApi.about.get().then(function(About) {
             *     console.log(About)
             * })
             * ```
             *
             * @returns {Promise.<About>} a promise resolving to the response to the request
             */
            get: function() {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about',
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
             * @namespace
             * @memberOf about
             */
            api: {
                /**
                 * @namespace
                 * @memberOf about.api
                 */
                default: {
                    /**
                     * @namespace
                     * @memberOf about.api.default
                     */
                    app: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/app?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.app
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.app.get(listentries).then(function(App) {
                         *     console.log(App)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/app' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    appavailability: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/appavailability?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.appavailability
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.appavailability.get(listentries).then(function(AppAvailability) {
                         *     console.log(AppAvailability)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppAvailability>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appavailability' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    appcontentquota: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/appcontentquota?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.appcontentquota
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.appcontentquota.get(listentries).then(function(AppContentQuota) {
                         *     console.log(AppContentQuota)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppContentQuota>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appcontentquota' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    appseedinfo: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/appseedinfo?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.appseedinfo
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.appseedinfo.get(listentries).then(function(AppSeedInfo) {
                         *     console.log(AppSeedInfo)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppSeedInfo>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appseedinfo' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    appstatus: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/appstatus?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.appstatus
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.appstatus.get(listentries).then(function(AppStatus) {
                         *     console.log(AppStatus)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppStatus>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appstatus' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    binarydelete: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/binarydelete?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.binarydelete
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.binarydelete.get(listentries).then(function(BinaryDelete) {
                         *     console.log(BinaryDelete)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<BinaryDelete>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/binarydelete' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    binarydownload: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/binarydownload?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.binarydownload
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.binarydownload.get(listentries).then(function(BinaryDownload) {
                         *     console.log(BinaryDownload)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<BinaryDownload>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/binarydownload' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    binarysyncruleevaluation: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/binarysyncruleevaluation?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.binarysyncruleevaluation
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.binarysyncruleevaluation.get(listentries).then(function(BinarySyncRuleEvaluation) {
                         *     console.log(BinarySyncRuleEvaluation)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<BinarySyncRuleEvaluation>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/binarysyncruleevaluation' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    compositeevent: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/compositeevent?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.compositeevent
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.compositeevent.get(listentries).then(function(CompositeEvent) {
                         *     console.log(CompositeEvent)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<CompositeEvent>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/compositeevent' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    compositeeventoperational: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/compositeeventoperational?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.compositeeventoperational
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.compositeeventoperational.get(listentries).then(function(CompositeEventOperational) {
                         *     console.log(CompositeEventOperational)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<CompositeEventOperational>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/compositeeventoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    compositeeventruleoperational: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/compositeeventruleoperational?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.compositeeventruleoperational
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.compositeeventruleoperational.get(listentries).then(function(CompositeEventRuleOperational) {
                         *     console.log(CompositeEventRuleOperational)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<CompositeEventRuleOperational>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/compositeeventruleoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    content: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/content?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.content
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.content.get(listentries).then(function(AppContent) {
                         *     console.log(AppContent)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppContent>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/content' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    contentlibrary: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/contentlibrary?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.contentlibrary
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.contentlibrary.get(listentries).then(function(ContentLibrary) {
                         *     console.log(ContentLibrary)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/contentlibrary' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    custompropertydefinition: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/custompropertydefinition?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.custompropertydefinition
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.custompropertydefinition.get(listentries).then(function(CustomPropertyDefinition) {
                         *     console.log(CustomPropertyDefinition)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<CustomPropertyDefinition>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/custompropertydefinition' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    dataconnection: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/dataconnection?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.dataconnection
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.dataconnection.get(listentries).then(function(DataConnection) {
                         *     console.log(DataConnection)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<DataConnection>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/dataconnection' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    datasegment: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/datasegment?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.datasegment
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.datasegment.get(listentries).then(function(AppDataSegment) {
                         *     console.log(AppDataSegment)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppDataSegment>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/datasegment' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    detail: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/detail?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.detail
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.detail.get(listentries).then(function(ExecutionResultDetail) {
                         *     console.log(ExecutionResultDetail)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ExecutionResultDetail>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/detail' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    engineservice: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/engineservice?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.engineservice
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.engineservice.get(listentries).then(function(EngineService) {
                         *     console.log(EngineService)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<EngineService>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/engineservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    engineservicetemplate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/engineservicetemplate?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.engineservicetemplate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.engineservicetemplate.get(listentries).then(function(EngineServiceTemplate) {
                         *     console.log(EngineServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<EngineServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/engineservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    executionresult: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/executionresult?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.executionresult
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.executionresult.get(listentries).then(function(ExecutionResult) {
                         *     console.log(ExecutionResult)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ExecutionResult>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/executionresult' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    executionsession: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/executionsession?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.executionsession
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.executionsession.get(listentries).then(function(ExecutionSession) {
                         *     console.log(ExecutionSession)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ExecutionSession>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/executionsession' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    extension: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/extension?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.extension
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.extension.get(listentries).then(function(Extension) {
                         *     console.log(Extension)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<Extension>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/extension' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    externalchangeinfo: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/externalchangeinfo?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.externalchangeinfo
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.externalchangeinfo.get(listentries).then(function(ExternalChangeInfo) {
                         *     console.log(ExternalChangeInfo)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ExternalChangeInfo>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/externalchangeinfo' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    externalprogramtask: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/externalprogramtask?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.externalprogramtask
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.externalprogramtask.get(listentries).then(function(ExternalProgramTask) {
                         *     console.log(ExternalProgramTask)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ExternalProgramTask>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/externalprogramtask' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    externalprogramtaskoperational: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/externalprogramtaskoperational?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.externalprogramtaskoperational
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.externalprogramtaskoperational.get(listentries).then(function(ExternalProgramTaskOperational) {
                         *     console.log(ExternalProgramTaskOperational)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ExternalProgramTaskOperational>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/externalprogramtaskoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    filereference: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/filereference?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.filereference
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.filereference.get(listentries).then(function(FileReference) {
                         *     console.log(FileReference)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<FileReference>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/filereference' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    followingapp: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/followingapp?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.followingapp
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.followingapp.get(listentries).then(function(UserFollowingApp) {
                         *     console.log(UserFollowingApp)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<UserFollowingApp>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/followingapp' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    internal: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/internal?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.internal
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.internal.get(listentries).then(function(AppInternal) {
                         *     console.log(AppInternal)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppInternal>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/internal' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    license: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/license?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.license
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.license.get(listentries).then(function(License) {
                         *     console.log(License)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<License>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/license' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    localconfig: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/localconfig?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.localconfig
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.localconfig.get(listentries).then(function(LocalConfig) {
                         *     console.log(LocalConfig)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<LocalConfig>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/localconfig' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    loginaccesstype: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/loginaccesstype?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.loginaccesstype
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.loginaccesstype.get(listentries).then(function(LicenseLoginAccessType) {
                         *     console.log(LicenseLoginAccessType)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/loginaccesstype' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    loginaccessusage: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/loginaccessusage?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.loginaccessusage
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.loginaccessusage.get(listentries).then(function(LicenseLoginAccessUsage) {
                         *     console.log(LicenseLoginAccessUsage)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<LicenseLoginAccessUsage>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/loginaccessusage' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    mimetype: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/mimetype?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.mimetype
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.mimetype.get(listentries).then(function(MimeType) {
                         *     console.log(MimeType)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<MimeType>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/mimetype' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    object: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/object?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.object
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.object.get(listentries).then(function(AppObject) {
                         *     console.log(AppObject)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/object' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    printingservice: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/printingservice?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.printingservice
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.printingservice.get(listentries).then(function(PrintingService) {
                         *     console.log(PrintingService)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<PrintingService>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/printingservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    printingservicetemplate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/printingservicetemplate?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.printingservicetemplate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.printingservicetemplate.get(listentries).then(function(PrintingServiceTemplate) {
                         *     console.log(PrintingServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<PrintingServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/printingservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    proxyservice: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/proxyservice?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.proxyservice
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.proxyservice.get(listentries).then(function(ProxyService) {
                         *     console.log(ProxyService)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ProxyService>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/proxyservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    proxyservicetemplate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/proxyservicetemplate?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.proxyservicetemplate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.proxyservicetemplate.get(listentries).then(function(ProxyServiceTemplate) {
                         *     console.log(ProxyServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ProxyServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/proxyservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    recentapp: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/recentapp?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.recentapp
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.recentapp.get(listentries).then(function(UserRecentApp) {
                         *     console.log(UserRecentApp)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<UserRecentApp>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/recentapp' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    reloadtask: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/reloadtask?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.reloadtask
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.reloadtask.get(listentries).then(function(ReloadTask) {
                         *     console.log(ReloadTask)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/reloadtask' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    reloadtaskoperational: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/reloadtaskoperational?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.reloadtaskoperational
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.reloadtaskoperational.get(listentries).then(function(ReloadTaskOperational) {
                         *     console.log(ReloadTaskOperational)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ReloadTaskOperational>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/reloadtaskoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    removedsystemrule: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/removedsystemrule?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.removedsystemrule
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.removedsystemrule.get(listentries).then(function(RemovedSystemRule) {
                         *     console.log(RemovedSystemRule)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<RemovedSystemRule>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/removedsystemrule' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    repositoryservice: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/repositoryservice?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.repositoryservice
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.repositoryservice.get(listentries).then(function(RepositoryService) {
                         *     console.log(RepositoryService)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<RepositoryService>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/repositoryservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    repositoryservicetemplate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/repositoryservicetemplate?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.repositoryservicetemplate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.repositoryservicetemplate.get(listentries).then(function(RepositoryServiceTemplate) {
                         *     console.log(RepositoryServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<RepositoryServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/repositoryservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    schedulerservice: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/schedulerservice?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.schedulerservice
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.schedulerservice.get(listentries).then(function(SchedulerService) {
                         *     console.log(SchedulerService)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SchedulerService>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schedulerservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    schedulerservicetemplate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/schedulerservicetemplate?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.schedulerservicetemplate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.schedulerservicetemplate.get(listentries).then(function(SchedulerServiceTemplate) {
                         *     console.log(SchedulerServiceTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SchedulerServiceTemplate>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schedulerservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    schemaevent: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/schemaevent?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.schemaevent
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.schemaevent.get(listentries).then(function(SchemaEvent) {
                         *     console.log(SchemaEvent)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SchemaEvent>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schemaevent' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    schemaeventoperational: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/schemaeventoperational?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.schemaeventoperational
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.schemaeventoperational.get(listentries).then(function(SchemaEventOperational) {
                         *     console.log(SchemaEventOperational)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SchemaEventOperational>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schemaeventoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    selection: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/selection?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.selection
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.selection.get(listentries).then(function(Selection) {
                         *     console.log(Selection)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<Selection>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/selection' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    servernodeconfiguration: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/servernodeconfiguration?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.servernodeconfiguration
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.servernodeconfiguration.get(listentries).then(function(ServerNodeConfiguration) {
                         *     console.log(ServerNodeConfiguration)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ServerNodeConfiguration>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/servernodeconfiguration' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    servicestatus: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/servicestatus?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.servicestatus
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.servicestatus.get(listentries).then(function(ServiceStatus) {
                         *     console.log(ServiceStatus)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<ServiceStatus>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/servicestatus' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    staticcontentreference: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/staticcontentreference?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.staticcontentreference
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.staticcontentreference.get(listentries).then(function(StaticContentReference) {
                         *     console.log(StaticContentReference)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<StaticContentReference>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/staticcontentreference' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    stream: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/stream?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.stream
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.stream.get(listentries).then(function(Stream) {
                         *     console.log(Stream)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<Stream>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/stream' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    syncsession: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/syncsession?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.syncsession
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.syncsession.get(listentries).then(function(SyncSession) {
                         *     console.log(SyncSession)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SyncSession>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/syncsession' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    systeminfo: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/systeminfo?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.systeminfo
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.systeminfo.get(listentries).then(function(SystemInfo) {
                         *     console.log(SystemInfo)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SystemInfo>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/systeminfo' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    systemrule: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/systemrule?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.systemrule
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.systemrule.get(listentries).then(function(SystemRule) {
                         *     console.log(SystemRule)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/systemrule' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    tabledefinition: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/tabledefinition?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.tabledefinition
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.tabledefinition.get(listentries).then(function(TableDefinition) {
                         *     console.log(TableDefinition)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<TableDefinition>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/tabledefinition' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    tag: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/tag?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.tag
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.tag.get(listentries).then(function(Tag) {
                         *     console.log(Tag)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<Tag>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/tag' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    tempcontent: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/tempcontent?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.tempcontent
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.tempcontent.get(listentries).then(function(TempContent) {
                         *     console.log(TempContent)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<TempContent>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/tempcontent' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    termsacceptance: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/termsacceptance?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.termsacceptance
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.termsacceptance.get(listentries).then(function(TermsAcceptance) {
                         *     console.log(TermsAcceptance)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<TermsAcceptance>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/termsacceptance' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    user: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/user?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.user
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.user.get(listentries).then(function(User) {
                         *     console.log(User)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<User>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/user' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    useraccessgroup: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/useraccessgroup?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.useraccessgroup
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.useraccessgroup.get(listentries).then(function(LicenseUserAccessGroup) {
                         *     console.log(LicenseUserAccessGroup)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/useraccessgroup' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    useraccesstype: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/useraccesstype?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.useraccesstype
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.useraccesstype.get(listentries).then(function(LicenseUserAccessType) {
                         *     console.log(LicenseUserAccessType)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/useraccesstype' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    useraccessusage: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/useraccessusage?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.useraccessusage
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.useraccessusage.get(listentries).then(function(LicenseUserAccessUsage) {
                         *     console.log(LicenseUserAccessUsage)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<LicenseUserAccessUsage>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/useraccessusage' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    userdirectory: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/userdirectory?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.userdirectory
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.userdirectory.get(listentries).then(function(UserDirectory) {
                         *     console.log(UserDirectory)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/userdirectory' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    userdirectorytemplate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/userdirectorytemplate?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.userdirectorytemplate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.userdirectorytemplate.get(listentries).then(function(UserDirectoryTemplate) {
                         *     console.log(UserDirectoryTemplate)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<UserDirectoryTemplate>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/userdirectorytemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    usersynctask: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/usersynctask?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.usersynctask
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.usersynctask.get(listentries).then(function(UserSyncTask) {
                         *     console.log(UserSyncTask)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<UserSyncTask>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/usersynctask' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    usersynctaskoperational: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/usersynctaskoperational?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.usersynctaskoperational
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.usersynctaskoperational.get(listentries).then(function(UserSyncTaskOperational) {
                         *     console.log(UserSyncTaskOperational)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<UserSyncTaskOperational>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/usersynctaskoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * @memberOf about.api.default
                     */
                    virtualproxyconfig: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/about/api/default/virtualproxyconfig?listentries={listentries}
                         *
                         * This method is manual
                         *
                         * @memberOf about.api.default.virtualproxyconfig
                         *
                         * @example
                         * ```javascript
                         * qrsApi.about.api.default.virtualproxyconfig.get(listentries).then(function(VirtualProxyConfig) {
                         *     console.log(VirtualProxyConfig)
                         * })
                         * ```
                         *
                         * @param {string=} listentries the listentries parameter
                         * @returns {Promise.<VirtualProxyConfig>} a promise resolving to the response to the request
                         */
                        get: function(listentries) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/virtualproxyconfig' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/about/api/default?listentries={listentries}
                     *
                     * This method is manual
                     *
                     * @memberOf about.api.default
                     *
                     * @example
                     * ```javascript
                     * qrsApi.about.api.default.get(listentries).then(function(Object) {
                     *     console.log(Object)
                     * })
                     * ```
                     *
                     * @param {string=} listentries the listentries parameter
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    get: function(listentries) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
                 * @memberOf about.api
                 */
                description: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/about/api/description?extended={extended}&method={method}&format={format}
                     *
                     * This method is manual
                     *
                     * @memberOf about.api.description
                     *
                     * @example
                     * ```javascript
                     * qrsApi.about.api.description.get(extended, method, format).then(function(Array.<String>) {
                     *     console.log(Array.<String>)
                     * })
                     * ```
                     *
                     * @param {string=} extended the extended parameter
                     * @param {string=} method the method parameter
                     * @param {string=} format the format parameter
                     * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
                     */
                    get: function(extended, method, format) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/description' + (core.ifNotUndef(extended, '&extended=' + extended, '') +
                                core.ifNotUndef(method, '&method=' + method, '') +
                                core.ifNotUndef(format, '&format=' + format, '')).replace(/^&/, '?'),
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
                 * @memberOf about.api
                 */
                enums: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/about/api/enums
                     *
                     * This method is manual
                     *
                     * @memberOf about.api.enums
                     *
                     * @example
                     * ```javascript
                     * qrsApi.about.api.enums.get().then(function(Object) {
                     *     console.log(Object)
                     * })
                     * ```
                     *
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    get: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/enums',
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
                 * @memberOf about.api
                 */
                relations: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/about/api/relations
                     *
                     * This method is manual
                     *
                     * @memberOf about.api.relations
                     *
                     * @example
                     * ```javascript
                     * qrsApi.about.api.relations.get().then(function(Array.<String>) {
                     *     console.log(Array.<String>)
                     * })
                     * ```
                     *
                     * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
                     */
                    get: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/relations',
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
            }
        }
    };
};
