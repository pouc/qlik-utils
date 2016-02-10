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
        externalchangeinfo: {
            /**
             * @namespace
             * @memberOf externalchangeinfo
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/externalchangeinfo/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf externalchangeinfo.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.externalchangeinfo.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/externalchangeinfo/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/externalchangeinfo/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf externalchangeinfo.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.externalchangeinfo.id(id).get(appendprivileges).then(function(ExternalChangeInfo) {
                     *     console.log(ExternalChangeInfo)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ExternalChangeInfo>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/externalchangeinfo/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/externalchangeinfo/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf externalchangeinfo.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.externalchangeinfo.id(id).put(postParams, appendprivileges).then(function(ExternalChangeInfo) {
                     *     console.log(ExternalChangeInfo)
                     * })
                     * ```
                     *
                     * @param {ExternalChangeInfo} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ExternalChangeInfo>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/externalchangeinfo/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf externalchangeinfo
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalchangeinfo/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf externalchangeinfo.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalchangeinfo.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/externalchangeinfo/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf externalchangeinfo
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalchangeinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf externalchangeinfo.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalchangeinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
                 *     console.log(Array.<ExternalChangeInfo>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExternalChangeInfo>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/externalchangeinfo/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf externalchangeinfo
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalchangeinfo/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf externalchangeinfo.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalchangeinfo.many.post(postParams, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
                 *     console.log(Array.<ExternalChangeInfo>)
                 * })
                 * ```
                 *
                 * @param {List<ExternalChangeInfo>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExternalChangeInfo>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/externalchangeinfo/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf externalchangeinfo
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalchangeinfo/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf externalchangeinfo.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalchangeinfo.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ExternalChangeInfo} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/externalchangeinfo/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf externalchangeinfo
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalchangeinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf externalchangeinfo.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalchangeinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/externalchangeinfo/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/externalchangeinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf externalchangeinfo
             *
             * @example
             * ```javascript
             * qrsApi.externalchangeinfo.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
             *     console.log(Array.<ExternalChangeInfo>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ExternalChangeInfo>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/externalchangeinfo' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/externalchangeinfo?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf externalchangeinfo
             *
             * @example
             * ```javascript
             * qrsApi.externalchangeinfo.post(postParams, appendprivileges).then(function(ExternalChangeInfo) {
             *     console.log(ExternalChangeInfo)
             * })
             * ```
             *
             * @param {ExternalChangeInfo} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<ExternalChangeInfo>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/externalchangeinfo' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
