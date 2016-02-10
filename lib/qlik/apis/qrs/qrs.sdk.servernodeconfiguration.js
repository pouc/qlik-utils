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
        servernodeconfiguration: {
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/servernodeconfiguration/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf servernodeconfiguration.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.servernodeconfiguration.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/servernodeconfiguration/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf servernodeconfiguration.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.servernodeconfiguration.id(id).get(appendprivileges).then(function(ServerNodeConfiguration) {
                     *     console.log(ServerNodeConfiguration)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ServerNodeConfiguration>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/servernodeconfiguration/{id}?privileges={appendprivileges}
                     *
                     * This method is manual
                     *
                     * @memberOf servernodeconfiguration.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.servernodeconfiguration.id(id).put(postParams, appendprivileges).then(function(ServerNodeConfiguration) {
                     *     console.log(ServerNodeConfiguration)
                     * })
                     * ```
                     *
                     * @param {ServerNodeConfiguration} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ServerNodeConfiguration>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            container: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/container
                 *
                 * This method is manual
                 *
                 * @memberOf servernodeconfiguration.container
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.container.get().then(function(ServerNodeCreationContainer) {
                 *     console.log(ServerNodeCreationContainer)
                 * })
                 * ```
                 *
                 * @returns {Promise.<ServerNodeCreationContainer>} a promise resolving to the response to the request
                 */
                get: function() {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/container',
                        method: 'GET'
                    }));
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/container?privileges={appendprivileges}
                 *
                 * This method is manual
                 *
                 * @memberOf servernodeconfiguration.container
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.container.post(postParams, appendprivileges).then(function(ServerNodeResultContainer) {
                 *     console.log(ServerNodeResultContainer)
                 * })
                 * ```
                 *
                 * @param {ServerNodeCreationContainer} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<ServerNodeResultContainer>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/container' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf servernodeconfiguration.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf servernodeconfiguration.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.full.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
                 *     console.log(Array.<ServerNodeConfiguration>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ServerNodeConfiguration>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            local: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/local
                 *
                 * This method is manual
                 *
                 * @memberOf servernodeconfiguration.local
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.local.get().then(function(ServerNodeConfiguration) {
                 *     console.log(ServerNodeConfiguration)
                 * })
                 * ```
                 *
                 * @returns {Promise.<ServerNodeConfiguration>} a promise resolving to the response to the request
                 */
                get: function() {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/local',
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/previewcreateprivilege
                 *
                 * This method is manual
                 *
                 * @memberOf servernodeconfiguration.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ServerNodeConfiguration} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf servernodeconfiguration
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/servernodeconfiguration/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf servernodeconfiguration.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.servernodeconfiguration.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/servernodeconfiguration/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/servernodeconfiguration?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf servernodeconfiguration
             *
             * @example
             * ```javascript
             * qrsApi.servernodeconfiguration.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
             *     console.log(Array.<ServerNodeConfiguration>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ServerNodeConfiguration>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/servernodeconfiguration' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
