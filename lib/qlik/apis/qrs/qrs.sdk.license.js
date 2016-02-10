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
        license: {
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/license/?control={control}&privileges={appendprivileges}
             *
             * This method is manual
             *
             * @memberOf license
             *
             * @example
             * ```javascript
             * qrsApi.license.post(postParams, control, appendprivileges).then(function(License) {
             *     console.log(License)
             * })
             * ```
             *
             * @param {License} postParams the parameters to send as request body to the API endpoint
             * @param {string=} control the control parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<License>} a promise resolving to the response to the request
             */
            post: function(postParams, control, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/license' + (core.ifNotUndef(control, '&control=' + control, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'POST'
                }), postParams);
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/license/?privileges={appendprivileges}
             *
             * This method is manual
             *
             * @memberOf license
             *
             * @example
             * ```javascript
             * qrsApi.license.get(appendprivileges).then(function(License) {
             *     console.log(License)
             * })
             * ```
             *
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<License>} a promise resolving to the response to the request
             */
            get: function(appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/license' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'GET'
                }));
            },
            /**
             * @namespace
             * @memberOf license
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf license.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/{id}?control={control}&privileges={appendprivileges}
                     *
                     * This method is manual
                     *
                     * @memberOf license.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.id(id).put(postParams, control, appendprivileges).then(function(License) {
                     *     console.log(License)
                     * })
                     * ```
                     *
                     * @param {License} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} control the control parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<License>} a promise resolving to the response to the request
                     */
                    put: function(postParams, control, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/' + id + '' + (core.ifNotUndef(control, '&control=' + control, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf license
             */
            accesstypeinfo: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/accesstypeinfo
                 *
                 * This method is manual
                 *
                 * @memberOf license.accesstypeinfo
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.accesstypeinfo.get().then(function(AccessTypesInfo) {
                 *     console.log(AccessTypesInfo)
                 * })
                 * ```
                 *
                 * @returns {Promise.<AccessTypesInfo>} a promise resolving to the response to the request
                 */
                get: function() {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/accesstypeinfo',
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            applicationaccessgroup: {
                /**
                 * @namespace
                 * @memberOf license.applicationaccessgroup
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccessgroup/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccessgroup.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccessgroup.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/' + id + '',
                                method: 'DELETE'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccessgroup/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccessgroup.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccessgroup.id(id).get(appendprivileges).then(function(LicenseApplicationAccessGroup) {
                         *     console.log(LicenseApplicationAccessGroup)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseApplicationAccessGroup>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccessgroup/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccessgroup.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccessgroup.id(id).put(postParams, appendprivileges).then(function(LicenseApplicationAccessGroup) {
                         *     console.log(LicenseApplicationAccessGroup)
                         * })
                         * ```
                         *
                         * @param {LicenseApplicationAccessGroup} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseApplicationAccessGroup>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessgroup
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessgroup/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessgroup.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessgroup.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessgroup
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessgroup.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessGroup>) {
                     *     console.log(Array.<LicenseApplicationAccessGroup>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseApplicationAccessGroup>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessgroup
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessgroup/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessgroup.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessgroup.many.post(postParams, appendprivileges).then(function(Array.<LicenseApplicationAccessGroup>) {
                     *     console.log(Array.<LicenseApplicationAccessGroup>)
                     * })
                     * ```
                     *
                     * @param {List<LicenseApplicationAccessGroup>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseApplicationAccessGroup>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessgroup
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessgroup/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessgroup.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessgroup.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {LicenseApplicationAccessGroup} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/previewcreateprivilege',
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessgroup
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessgroup.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/applicationaccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.applicationaccessgroup
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.applicationaccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessGroup>) {
                 *     console.log(Array.<LicenseApplicationAccessGroup>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseApplicationAccessGroup>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/applicationaccessgroup?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.applicationaccessgroup
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.applicationaccessgroup.post(postParams, appendprivileges).then(function(LicenseApplicationAccessGroup) {
                 *     console.log(LicenseApplicationAccessGroup)
                 * })
                 * ```
                 *
                 * @param {LicenseApplicationAccessGroup} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<LicenseApplicationAccessGroup>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/applicationaccessgroup' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            applicationaccesstype: {
                /**
                 * @namespace
                 * @memberOf license.applicationaccesstype
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccesstype/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccesstype.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/' + id + '',
                                method: 'DELETE'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccesstype/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccesstype.id(id).get(appendprivileges).then(function(LicenseApplicationAccessType) {
                         *     console.log(LicenseApplicationAccessType)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseApplicationAccessType>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccesstype/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseApplicationAccessType) {
                         *     console.log(LicenseApplicationAccessType)
                         * })
                         * ```
                         *
                         * @param {LicenseApplicationAccessType} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseApplicationAccessType>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccesstype
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccesstype/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccesstype.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccesstype.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccesstype
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccesstype.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessType>) {
                     *     console.log(Array.<LicenseApplicationAccessType>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseApplicationAccessType>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccesstype
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccesstype/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccesstype.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseApplicationAccessType>) {
                     *     console.log(Array.<LicenseApplicationAccessType>)
                     * })
                     * ```
                     *
                     * @param {List<LicenseApplicationAccessType>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseApplicationAccessType>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccesstype
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccesstype/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccesstype.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {LicenseApplicationAccessType} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/previewcreateprivilege',
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccesstype
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccesstype.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/applicationaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.applicationaccesstype
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.applicationaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessType>) {
                 *     console.log(Array.<LicenseApplicationAccessType>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseApplicationAccessType>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/applicationaccesstype?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.applicationaccesstype
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.applicationaccesstype.post(postParams, appendprivileges).then(function(LicenseApplicationAccessType) {
                 *     console.log(LicenseApplicationAccessType)
                 * })
                 * ```
                 *
                 * @param {LicenseApplicationAccessType} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<LicenseApplicationAccessType>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/applicationaccesstype' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            applicationaccessusage: {
                /**
                 * @namespace
                 * @memberOf license.applicationaccessusage
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/applicationaccessusage/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.applicationaccessusage.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.applicationaccessusage.id(id).get(appendprivileges).then(function(LicenseApplicationAccessUsage) {
                         *     console.log(LicenseApplicationAccessUsage)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseApplicationAccessUsage>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/applicationaccessusage/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessusage
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessusage/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessusage.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessusage.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessusage
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessusage.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessUsage>) {
                     *     console.log(Array.<LicenseApplicationAccessUsage>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseApplicationAccessUsage>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.applicationaccessusage
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/applicationaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.applicationaccessusage.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.applicationaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/applicationaccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/applicationaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.applicationaccessusage
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.applicationaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessUsage>) {
                 *     console.log(Array.<LicenseApplicationAccessUsage>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseApplicationAccessUsage>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/applicationaccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            datamarket: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/datamarket/?control={control}&privileges={appendprivileges}
                 *
                 * This method is manual
                 *
                 * @memberOf license.datamarket
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.datamarket.post(postParams, control, appendprivileges).then(function(License) {
                 *     console.log(License)
                 * })
                 * ```
                 *
                 * @param {License} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} control the control parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<License>} a promise resolving to the response to the request
                 */
                post: function(postParams, control, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/datamarket' + (core.ifNotUndef(control, '&control=' + control, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'POST'
                    }), postParams);
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/datamarket/?privileges={appendprivileges}
                 *
                 * This method is manual
                 *
                 * @memberOf license.datamarket
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.datamarket.get(appendprivileges).then(function(License) {
                 *     console.log(License)
                 * })
                 * ```
                 *
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<License>} a promise resolving to the response to the request
                 */
                get: function(appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/datamarket' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'GET'
                    }));
                },
                /**
                 * @namespace
                 * @memberOf license.datamarket
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/datamarket/{id}?control={control}&privileges={appendprivileges}
                         *
                         * This method is manual
                         *
                         * @memberOf license.datamarket.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.datamarket.id(id).put(postParams, control, appendprivileges).then(function(License) {
                         *     console.log(License)
                         * })
                         * ```
                         *
                         * @param {License} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} control the control parameter
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<License>} a promise resolving to the response to the request
                         */
                        put: function(postParams, control, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/datamarket/' + id + '' + (core.ifNotUndef(control, '&control=' + control, '') +
                                    core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            download: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/download?serial={serial}&control={control}&user={user}&org={org}
                 *
                 * This method is manual
                 *
                 * @memberOf license.download
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.download.get(serial, control, user, org).then(function(String) {
                 *     console.log(String)
                 * })
                 * ```
                 *
                 * @param {string=} serial the serial parameter
                 * @param {string=} control the control parameter
                 * @param {string=} user the user parameter
                 * @param {string=} org the org parameter
                 * @returns {Promise.<String>} a promise resolving to the response to the request
                 */
                get: function(serial, control, user, org) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/download' + (core.ifNotUndef(serial, '&serial=' + serial, '') +
                            core.ifNotUndef(control, '&control=' + control, '') +
                            core.ifNotUndef(user, '&user=' + user, '') +
                            core.ifNotUndef(org, '&org=' + org, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            loginaccesstype: {
                /**
                 * @namespace
                 * @memberOf license.loginaccesstype
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/loginaccesstype/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf license.loginaccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.loginaccesstype.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/' + id + '',
                                method: 'DELETE'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.loginaccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.loginaccesstype.id(id).get(appendprivileges).then(function(LicenseLoginAccessType) {
                         *     console.log(LicenseLoginAccessType)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.loginaccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.loginaccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseLoginAccessType) {
                         *     console.log(LicenseLoginAccessType)
                         * })
                         * ```
                         *
                         * @param {LicenseLoginAccessType} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccesstype
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccesstype/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccesstype.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccesstype.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccesstype
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccesstype.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
                     *     console.log(Array.<LicenseLoginAccessType>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccesstype
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccesstype/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccesstype.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
                     *     console.log(Array.<LicenseLoginAccessType>)
                     * })
                     * ```
                     *
                     * @param {List<LicenseLoginAccessType>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccesstype
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccesstype/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccesstype.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {LicenseLoginAccessType} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/previewcreateprivilege',
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccesstype
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccesstype.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/loginaccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/loginaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.loginaccesstype
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.loginaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
                 *     console.log(Array.<LicenseLoginAccessType>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/loginaccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/loginaccesstype?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.loginaccesstype
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.loginaccesstype.post(postParams, appendprivileges).then(function(LicenseLoginAccessType) {
                 *     console.log(LicenseLoginAccessType)
                 * })
                 * ```
                 *
                 * @param {LicenseLoginAccessType} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/loginaccesstype' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            loginaccessusage: {
                /**
                 * @namespace
                 * @memberOf license.loginaccessusage
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/loginaccessusage/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.loginaccessusage.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.loginaccessusage.id(id).get(appendprivileges).then(function(LicenseLoginAccessUsage) {
                         *     console.log(LicenseLoginAccessUsage)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseLoginAccessUsage>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/loginaccessusage/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccessusage
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccessusage/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccessusage.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccessusage.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/loginaccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccessusage
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccessusage.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
                     *     console.log(Array.<LicenseLoginAccessUsage>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseLoginAccessUsage>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/loginaccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.loginaccessusage
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/loginaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.loginaccessusage.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.loginaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/loginaccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/loginaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.loginaccessusage
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.loginaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
                 *     console.log(Array.<LicenseLoginAccessUsage>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseLoginAccessUsage>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/loginaccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            useraccessgroup: {
                /**
                 * @namespace
                 * @memberOf license.useraccessgroup
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccessgroup/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccessgroup.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccessgroup.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/' + id + '',
                                method: 'DELETE'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccessgroup.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccessgroup.id(id).get(appendprivileges).then(function(LicenseUserAccessGroup) {
                         *     console.log(LicenseUserAccessGroup)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccessgroup.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccessgroup.id(id).put(postParams, appendprivileges).then(function(LicenseUserAccessGroup) {
                         *     console.log(LicenseUserAccessGroup)
                         * })
                         * ```
                         *
                         * @param {LicenseUserAccessGroup} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessgroup
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessgroup/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessgroup.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessgroup.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessgroup
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessgroup.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
                     *     console.log(Array.<LicenseUserAccessGroup>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessgroup
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessgroup/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessgroup.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessgroup.many.post(postParams, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
                     *     console.log(Array.<LicenseUserAccessGroup>)
                     * })
                     * ```
                     *
                     * @param {List<LicenseUserAccessGroup>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessgroup
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessgroup/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessgroup.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessgroup.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {LicenseUserAccessGroup} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/previewcreateprivilege',
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessgroup
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessgroup.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/useraccessgroup/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/useraccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.useraccessgroup
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.useraccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
                 *     console.log(Array.<LicenseUserAccessGroup>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/useraccessgroup' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/useraccessgroup?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.useraccessgroup
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.useraccessgroup.post(postParams, appendprivileges).then(function(LicenseUserAccessGroup) {
                 *     console.log(LicenseUserAccessGroup)
                 * })
                 * ```
                 *
                 * @param {LicenseUserAccessGroup} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/useraccessgroup' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            useraccesstype: {
                /**
                 * @namespace
                 * @memberOf license.useraccesstype
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccesstype/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccesstype.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccesstype/' + id + '',
                                method: 'DELETE'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccesstype/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccesstype.id(id).get(appendprivileges).then(function(LicenseUserAccessType) {
                         *     console.log(LicenseUserAccessType)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccesstype/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccesstype.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseUserAccessType) {
                         *     console.log(LicenseUserAccessType)
                         * })
                         * ```
                         *
                         * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.useraccesstype
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccesstype/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccesstype.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccesstype.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccesstype
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccesstype.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
                     *     console.log(Array.<LicenseUserAccessType>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccesstype
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccesstype/many?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccesstype.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
                     *     console.log(Array.<LicenseUserAccessType>)
                     * })
                     * ```
                     *
                     * @param {List<LicenseUserAccessType>} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccesstype/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccesstype
                 */
                previewcreateprivilege: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccesstype/previewcreateprivilege
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccesstype.previewcreateprivilege
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
                     *     console.log(Boolean)
                     * })
                     * ```
                     *
                     * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccesstype/previewcreateprivilege',
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccesstype
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccesstype.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/useraccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/useraccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.useraccesstype
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.useraccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
                 *     console.log(Array.<LicenseUserAccessType>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/useraccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/license/useraccesstype?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.useraccesstype
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.useraccesstype.post(postParams, appendprivileges).then(function(LicenseUserAccessType) {
                 *     console.log(LicenseUserAccessType)
                 * })
                 * ```
                 *
                 * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/useraccesstype' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf license
             */
            useraccessusage: {
                /**
                 * @namespace
                 * @memberOf license.useraccessusage
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/license/useraccessusage/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf license.useraccessusage.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.license.useraccessusage.id(id).get(appendprivileges).then(function(LicenseUserAccessUsage) {
                         *     console.log(LicenseUserAccessUsage)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<LicenseUserAccessUsage>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/license/useraccessusage/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessusage
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessusage/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessusage.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessusage.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessusage
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessusage.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
                     *     console.log(Array.<LicenseUserAccessUsage>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<LicenseUserAccessUsage>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/license/useraccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf license.useraccessusage
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/license/useraccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf license.useraccessusage.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.license.useraccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/license/useraccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/license/useraccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf license.useraccessusage
                 *
                 * @example
                 * ```javascript
                 * qrsApi.license.useraccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
                 *     console.log(Array.<LicenseUserAccessUsage>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<LicenseUserAccessUsage>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/license/useraccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            }
        }
    };
};
