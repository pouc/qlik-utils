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
        contentlibrary: {
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/contentlibrary/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf contentlibrary.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.contentlibrary.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/contentlibrary/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/contentlibrary/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf contentlibrary.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.contentlibrary.id(id).get(appendprivileges).then(function(ContentLibrary) {
                     *     console.log(ContentLibrary)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/contentlibrary/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/contentlibrary/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf contentlibrary.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.contentlibrary.id(id).put(postParams, appendprivileges).then(function(ContentLibrary) {
                     *     console.log(ContentLibrary)
                     * })
                     * ```
                     *
                     * @param {ContentLibrary} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/contentlibrary/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            libname: function(libname) {
                return {
                    /**
                     * @namespace
                     * @memberOf contentlibrary.libname
                     */
                    deletecontent: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/contentlibrary/{libname}/deletecontent?externalpath={externalpath}
                         *
                         * This method is manual
                         *
                         * @memberOf contentlibrary.libname.deletecontent
                         *
                         * @example
                         * ```javascript
                         * qrsApi.contentlibrary.libname(libname).deletecontent.delete(externalpath).then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @param {string=} externalpath the externalpath parameter
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function(externalpath) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/contentlibrary/' + libname + '/deletecontent' + core.ifNotUndef(externalpath, '?externalpath=' + externalpath, ''),
                                method: 'DELETE'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf contentlibrary.libname
                     */
                    uploadfile: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/contentlibrary/{libname}/uploadfile?externalpath={externalpath}&overwrite={overwrite}
                         *
                         * This method is manual
                         *
                         * @memberOf contentlibrary.libname.uploadfile
                         *
                         * @example
                         * ```javascript
                         * qrsApi.contentlibrary.libname(libname).uploadfile.post(postParams, externalpath, overwrite).then(function(String) {
                         *     console.log(String)
                         * })
                         * ```
                         *
                         * @param {String} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} externalpath the externalpath parameter
                         * @param {string=} overwrite the overwrite parameter
                         * @returns {Promise.<String>} a promise resolving to the response to the request
                         */
                        post: function(postParams, externalpath, overwrite) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/contentlibrary/' + libname + '/uploadfile' + (core.ifNotUndef(externalpath, '&externalpath=' + externalpath, '') +
                                    core.ifNotUndef(overwrite, '&overwrite=' + overwrite, '')).replace(/^&/, '?'),
                                method: 'POST'
                            }), postParams);
                        }
                    }
                };
            },
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/contentlibrary/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf contentlibrary.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.contentlibrary.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/contentlibrary/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/contentlibrary/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf contentlibrary.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.contentlibrary.full.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
                 *     console.log(Array.<ContentLibrary>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/contentlibrary/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/contentlibrary/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf contentlibrary.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.contentlibrary.many.post(postParams, appendprivileges).then(function(Array.<ContentLibrary>) {
                 *     console.log(Array.<ContentLibrary>)
                 * })
                 * ```
                 *
                 * @param {List<ContentLibrary>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/contentlibrary/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/contentlibrary/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf contentlibrary.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.contentlibrary.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ContentLibrary} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/contentlibrary/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf contentlibrary
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/contentlibrary/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf contentlibrary.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.contentlibrary.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/contentlibrary/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/contentlibrary?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf contentlibrary
             *
             * @example
             * ```javascript
             * qrsApi.contentlibrary.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
             *     console.log(Array.<ContentLibrary>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/contentlibrary' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/contentlibrary?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf contentlibrary
             *
             * @example
             * ```javascript
             * qrsApi.contentlibrary.post(postParams, appendprivileges).then(function(ContentLibrary) {
             *     console.log(ContentLibrary)
             * })
             * ```
             *
             * @param {ContentLibrary} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/contentlibrary' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                    method: 'POST'
                }), postParams);
            }
        }
    };
};
