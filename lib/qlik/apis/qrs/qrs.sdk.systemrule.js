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
        systemrule: {
            /**
             * @namespace
             * @memberOf systemrule
             */
            category: function(category) {
                return {
                    /**
                     * @namespace
                     * @memberOf systemrule.category
                     */
                    associatedrules: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/{category}/associatedrules?resourcetype={resourcetype}&resourcefilter={resourcefilter}&privileges={appendprivileges}
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.category.associatedrules
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.category(category).associatedrules.get(resourcetype, resourcefilter, appendprivileges).then(function(Array.<SystemRule>) {
                         *     console.log(Array.<SystemRule>)
                         * })
                         * ```
                         *
                         * @param {string=} resourcetype the resourcetype parameter
                         * @param {string=} resourcefilter the resourcefilter parameter
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
                         */
                        get: function(resourcetype, resourcefilter, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/' + category + '/associatedrules' + (core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '') +
                                    core.ifNotUndef(resourcefilter, '&resourcefilter=' + resourcefilter, '') +
                                    core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                                method: 'GET'
                            }));
                        }
                    }
                };
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf systemrule.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf systemrule.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.id(id).get(appendprivileges).then(function(SystemRule) {
                     *     console.log(SystemRule)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf systemrule.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.id(id).put(postParams, appendprivileges).then(function(SystemRule) {
                     *     console.log(SystemRule)
                     * })
                     * ```
                     *
                     * @param {SystemRule} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/systemrule/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf systemrule.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.systemrule.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/systemrule/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/systemrule/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf systemrule.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.systemrule.full.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
                 *     console.log(Array.<SystemRule>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/systemrule/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            license: {
                /**
                 * @namespace
                 * @memberOf systemrule.license
                 */
                audit: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/license/audit
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.license.audit
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.license.audit.post(postParams).then(function(AuditResult) {
                     *     console.log(AuditResult)
                     * })
                     * ```
                     *
                     * @param {AuditParameters} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<AuditResult>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/license/audit',
                            method: 'POST'
                        }), postParams);
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.license.audit
                     */
                    matrix: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/license/audit/matrix
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.license.audit.matrix
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.license.audit.matrix.post(postParams).then(function(AuditMatrixResult) {
                         *     console.log(AuditMatrixResult)
                         * })
                         * ```
                         *
                         * @param {AuditMatrixParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<AuditMatrixResult>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/license/audit/matrix',
                                method: 'POST'
                            }), postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.license.audit
                     */
                    preview: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/license/audit/preview
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.license.audit.preview
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.license.audit.preview.post(postParams).then(function(AuditPreviewResult) {
                         *     console.log(AuditPreviewResult)
                         * })
                         * ```
                         *
                         * @param {AuditPreviewParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<AuditPreviewResult>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/license/audit/preview',
                                method: 'POST'
                            }), postParams);
                        }
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.license
                 */
                useractions: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/license/useractions?privileges={appendprivileges}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.license.useractions
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.license.useractions.post(postParams, appendprivileges).then(function(Array.<UserLicenseActions>) {
                     *     console.log(Array.<UserLicenseActions>)
                     * })
                     * ```
                     *
                     * @param {UserInput} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<UserLicenseActions>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/license/useractions' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/systemrule/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf systemrule.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.systemrule.many.post(postParams, appendprivileges).then(function(Array.<SystemRule>) {
                 *     console.log(Array.<SystemRule>)
                 * })
                 * ```
                 *
                 * @param {List<SystemRule>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/systemrule/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/systemrule/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf systemrule.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.systemrule.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {SystemRule} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/systemrule/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            security: {
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                accessibleattributes: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/accessibleattributes?resourcetype={resourcetype}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.accessibleattributes
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.accessibleattributes.get(resourcetype).then(function(Array.<String>) {
                     *     console.log(Array.<String>)
                     * })
                     * ```
                     *
                     * @param {string=} resourcetype the resourcetype parameter
                     * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
                     */
                    get: function(resourcetype) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/accessibleattributes' + core.ifNotUndef(resourcetype, '?resourcetype=' + resourcetype, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                attributevalues: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/attributevalues?resourcetype={resourcetype}&attribute={attribute}&filter={filter}&limit={limit}&selection={selection}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.attributevalues
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.attributevalues.get(resourcetype, attribute, filter, limit, selection).then(function(Array.<String>) {
                     *     console.log(Array.<String>)
                     * })
                     * ```
                     *
                     * @param {string=} resourcetype the resourcetype parameter
                     * @param {string=} attribute the attribute parameter
                     * @param {string=} filter the filter parameter
                     * @param {string=} limit the limit parameter
                     * @param {string=} selection the selection parameter
                     * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
                     */
                    get: function(resourcetype, attribute, filter, limit, selection) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/attributevalues' + (core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '') +
                                core.ifNotUndef(attribute, '&attribute=' + attribute, '') +
                                core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(limit, '&limit=' + limit, '') +
                                core.ifNotUndef(selection, '&selection=' + selection, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                audit: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/audit
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.audit
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.audit.post(postParams).then(function(AuditResult) {
                     *     console.log(AuditResult)
                     * })
                     * ```
                     *
                     * @param {AuditParameters} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<AuditResult>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/audit',
                            method: 'POST'
                        }), postParams);
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.security.audit
                     */
                    accessibleobjects: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/security/audit/accessibleobjects
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.security.audit.accessibleobjects
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.security.audit.accessibleobjects.post(postParams).then(function(Array.<IRepositoryObject>) {
                         *     console.log(Array.<IRepositoryObject>)
                         * })
                         * ```
                         *
                         * @param {AccessibleObjectParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<Array.<IRepositoryObject>>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/security/audit/accessibleobjects',
                                method: 'POST'
                            }), postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.security.audit
                     */
                    countresources: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/security/audit/countresources
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.security.audit.countresources
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.security.audit.countresources.post(postParams).then(function(int) {
                         *     console.log(int)
                         * })
                         * ```
                         *
                         * @param {AuditCountParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<int>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/security/audit/countresources',
                                method: 'POST'
                            }), postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.security.audit
                     */
                    export: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/security/audit/export
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.security.audit.export
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.security.audit.export.get().then(function(Array.<String>) {
                         *     console.log(Array.<String>)
                         * })
                         * ```
                         *
                         * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
                         */
                        get: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/security/audit/export',
                                method: 'GET'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.security.audit
                     */
                    matrix: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/security/audit/matrix
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.security.audit.matrix
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.security.audit.matrix.post(postParams).then(function(AuditMatrixResult) {
                         *     console.log(AuditMatrixResult)
                         * })
                         * ```
                         *
                         * @param {AuditMatrixParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<AuditMatrixResult>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/security/audit/matrix',
                                method: 'POST'
                            }), postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.security.audit
                     */
                    preview: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/security/audit/preview
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.security.audit.preview
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.security.audit.preview.post(postParams).then(function(AuditPreviewResult) {
                         *     console.log(AuditPreviewResult)
                         * })
                         * ```
                         *
                         * @param {AuditPreviewParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<AuditPreviewResult>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/security/audit/preview',
                                method: 'POST'
                            }), postParams);
                        }
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                evaluatetransientresources: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/evaluatetransientresources
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.evaluatetransientresources
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.evaluatetransientresources.post(postParams).then(function(Object) {
                     *     console.log(Object)
                     * })
                     * ```
                     *
                     * @param {String[]} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/evaluatetransientresources',
                            method: 'POST'
                        }), postParams);
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                parsetree: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/parsetree?rule={rule}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.parsetree
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.parsetree.get(rule).then(function(BacktrackedRule) {
                     *     console.log(BacktrackedRule)
                     * })
                     * ```
                     *
                     * @param {string=} rule the rule parameter
                     * @returns {Promise.<BacktrackedRule>} a promise resolving to the response to the request
                     */
                    get: function(rule) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/parsetree' + core.ifNotUndef(rule, '?rule=' + rule, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                referenceduserroles: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/referenceduserroles
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.referenceduserroles
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.referenceduserroles.get().then(function(Array.<String>) {
                     *     console.log(Array.<String>)
                     * })
                     * ```
                     *
                     * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
                     */
                    get: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/referenceduserroles',
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.security
                 */
                useractions: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/security/useractions?privileges={appendprivileges}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.security.useractions
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.security.useractions.post(postParams, appendprivileges).then(function(Array.<UserActions>) {
                     *     console.log(Array.<UserActions>)
                     * })
                     * ```
                     *
                     * @param {UserInput} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<UserActions>>} a promise resolving to the response to the request
                     */
                    post: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/security/useractions' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'POST'
                        }), postParams);
                    }
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            sync: {
                /**
                 * @namespace
                 * @memberOf systemrule.sync
                 */
                audit: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/sync/audit
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.sync.audit
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.sync.audit.post(postParams).then(function(SyncAuditResult) {
                     *     console.log(SyncAuditResult)
                     * })
                     * ```
                     *
                     * @param {SyncAuditParameters} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise.<SyncAuditResult>} a promise resolving to the response to the request
                     */
                    post: function(postParams) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/sync/audit',
                            method: 'POST'
                        }), postParams);
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.sync.audit
                     */
                    matrix: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/sync/audit/matrix
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.sync.audit.matrix
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.sync.audit.matrix.post(postParams).then(function(AuditMatrixResult) {
                         *     console.log(AuditMatrixResult)
                         * })
                         * ```
                         *
                         * @param {AuditMatrixParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<AuditMatrixResult>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/sync/audit/matrix',
                                method: 'POST'
                            }), postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf systemrule.sync.audit
                     */
                    preview: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/systemrule/sync/audit/preview
                         *
                         * This method is manual
                         *
                         * @memberOf systemrule.sync.audit.preview
                         *
                         * @example
                         * ```javascript
                         * qrsApi.systemrule.sync.audit.preview.post(postParams).then(function(SyncPreviewResult) {
                         *     console.log(SyncPreviewResult)
                         * })
                         * ```
                         *
                         * @param {SyncAuditPreviewParameters} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<SyncPreviewResult>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/systemrule/sync/audit/preview',
                                method: 'POST'
                            }), postParams);
                        }
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.sync
                 */
                linkednodes: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/sync/linkednodes?resourcetype={resourcetype}&resourceid={resourceid}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.sync.linkednodes
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.sync.linkednodes.get(resourcetype, resourceid).then(function(Array.<Guid>) {
                     *     console.log(Array.<Guid>)
                     * })
                     * ```
                     *
                     * @param {string=} resourcetype the resourcetype parameter
                     * @param {string=} resourceid the resourceid parameter
                     * @returns {Promise.<Array.<Guid>>} a promise resolving to the response to the request
                     */
                    get: function(resourcetype, resourceid) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/sync/linkednodes' + (core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '') +
                                core.ifNotUndef(resourceid, '&resourceid=' + resourceid, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf systemrule.sync
                 */
                linkedobjects: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/systemrule/sync/linkedobjects?node={servernodeconfiguration}&resourcetype={resourcetype}
                     *
                     * This method is manual
                     *
                     * @memberOf systemrule.sync.linkedobjects
                     *
                     * @example
                     * ```javascript
                     * qrsApi.systemrule.sync.linkedobjects.get(servernodeconfiguration, resourcetype).then(function(Array.<Guid>) {
                     *     console.log(Array.<Guid>)
                     * })
                     * ```
                     *
                     * @param {string=} servernodeconfiguration the servernodeconfiguration parameter
                     * @param {string=} resourcetype the resourcetype parameter
                     * @returns {Promise.<Array.<Guid>>} a promise resolving to the response to the request
                     */
                    get: function(servernodeconfiguration, resourcetype) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/systemrule/sync/linkedobjects' + (core.ifNotUndef(servernodeconfiguration, '&node=' + servernodeconfiguration, '') +
                                core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                }
            },
            /**
             * @namespace
             * @memberOf systemrule
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/systemrule/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf systemrule.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.systemrule.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/systemrule/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/systemrule?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf systemrule
             *
             * @example
             * ```javascript
             * qrsApi.systemrule.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
             *     console.log(Array.<SystemRule>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/systemrule' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/systemrule?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf systemrule
             *
             * @example
             * ```javascript
             * qrsApi.systemrule.post(postParams, appendprivileges).then(function(SystemRule) {
             *     console.log(SystemRule)
             * })
             * ```
             *
             * @param {SystemRule} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/systemrule' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
