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
        virtualproxyconfig: {
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/virtualproxyconfig/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf virtualproxyconfig.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.virtualproxyconfig.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/virtualproxyconfig/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf virtualproxyconfig.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.virtualproxyconfig.id(id).get(appendprivileges).then(function(VirtualProxyConfig) {
                     *     console.log(VirtualProxyConfig)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<VirtualProxyConfig>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/virtualproxyconfig/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf virtualproxyconfig.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.virtualproxyconfig.id(id).put(postParams, appendprivileges).then(function(VirtualProxyConfig) {
                     *     console.log(VirtualProxyConfig)
                     * })
                     * ```
                     *
                     * @param {VirtualProxyConfig} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<VirtualProxyConfig>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            vpid: function(vpid) {
                return {
                    /**
                     * @namespace
                     * @memberOf virtualproxyconfig.vpid
                     */
                    generate: {
                        /**
                         * @namespace
                         * @memberOf virtualproxyconfig.vpid.generate
                         */
                        samlmetadata: {
                            /**
                             * Makes a request on the Qlik Sense QRS API:
                             *
                             * /qrs/virtualproxyconfig/{vpid}/generate/samlmetadata
                             *
                             * This method is manual
                             *
                             * @memberOf virtualproxyconfig.vpid.generate.samlmetadata
                             *
                             * @example
                             * ```javascript
                             * qrsApi.virtualproxyconfig.vpid(vpid).generate.samlmetadata.get().then(function(Guid) {
                             *     console.log(Guid)
                             * })
                             * ```
                             *
                             * @returns {Promise.<Guid>} a promise resolving to the response to the request
                             */
                            get: function() {
                                return base.request(extend(true, {}, options, {
                                    restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/' + vpid + '/generate/samlmetadata',
                                    method: 'GET'
                                }));
                            }
                        }
                    }
                };
            },
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/virtualproxyconfig/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf virtualproxyconfig.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.virtualproxyconfig.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/virtualproxyconfig/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf virtualproxyconfig.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.virtualproxyconfig.full.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
                 *     console.log(Array.<VirtualProxyConfig>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<VirtualProxyConfig>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/virtualproxyconfig/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf virtualproxyconfig.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.virtualproxyconfig.many.post(postParams, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
                 *     console.log(Array.<VirtualProxyConfig>)
                 * })
                 * ```
                 *
                 * @param {List<VirtualProxyConfig>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<VirtualProxyConfig>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/virtualproxyconfig/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf virtualproxyconfig.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.virtualproxyconfig.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {VirtualProxyConfig} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf virtualproxyconfig
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/virtualproxyconfig/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf virtualproxyconfig.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.virtualproxyconfig.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/virtualproxyconfig/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/virtualproxyconfig?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf virtualproxyconfig
             *
             * @example
             * ```javascript
             * qrsApi.virtualproxyconfig.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
             *     console.log(Array.<VirtualProxyConfig>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<VirtualProxyConfig>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/virtualproxyconfig' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/virtualproxyconfig?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf virtualproxyconfig
             *
             * @example
             * ```javascript
             * qrsApi.virtualproxyconfig.post(postParams, appendprivileges).then(function(VirtualProxyConfig) {
             *     console.log(VirtualProxyConfig)
             * })
             * ```
             *
             * @param {VirtualProxyConfig} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<VirtualProxyConfig>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/virtualproxyconfig' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
