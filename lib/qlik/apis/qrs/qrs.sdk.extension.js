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
        extension: {
            /**
             * @namespace
             * @memberOf extension
             */
            extension: function(extension) {
                return {
                    /**
                     * @namespace
                     * @memberOf extension.extension
                     */
                    deletecontent: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/extension/{extension}/deletecontent?externalpath={externalpath}
                         *
                         * This method is manual
                         *
                         * @memberOf extension.extension.deletecontent
                         *
                         * @example
                         * ```javascript
                         * qrsApi.extension.extension(extension).deletecontent.delete(externalpath).then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @param {string=} externalpath the externalpath parameter
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function(externalpath) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/extension/' + extension + '/deletecontent' + core.ifNotUndef(externalpath, '?externalpath=' + externalpath, ''),
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
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf extension.extension
                     */
                    uploadfile: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/extension/{extension}/uploadfile?externalpath={externalpath}&overwrite={overwrite}
                         *
                         * This method is manual
                         *
                         * @memberOf extension.extension.uploadfile
                         *
                         * @example
                         * ```javascript
                         * qrsApi.extension.extension(extension).uploadfile.post(postParams, externalpath, overwrite).then(function(String) {
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

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/extension/' + extension + '/uploadfile' + (core.ifNotUndef(externalpath, '&externalpath=' + externalpath, '') +
                                    core.ifNotUndef(overwrite, '&overwrite=' + overwrite, '')).replace(/^&/, '?'),
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
            },
            /**
             * @namespace
             * @memberOf extension
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/extension/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf extension.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.extension.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/extension/' + id + '',
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
                     * /qrs/extension/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf extension.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.extension.id(id).get(appendprivileges).then(function(Extension) {
                     *     console.log(Extension)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Extension>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/extension/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/extension/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf extension.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.extension.id(id).put(postParams, appendprivileges).then(function(Extension) {
                     *     console.log(Extension)
                     * })
                     * ```
                     *
                     * @param {Extension} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Extension>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/extension/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf extension
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf extension.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/extension/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf extension
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf extension.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.full.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
                 *     console.log(Array.<Extension>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<Extension>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/extension/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf extension
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf extension.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.many.post(postParams, appendprivileges).then(function(Array.<Extension>) {
                 *     console.log(Array.<Extension>)
                 * })
                 * ```
                 *
                 * @param {List<Extension>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<Extension>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/extension/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf extension
             */
            name: {
                /**
                 * @namespace
                 * @memberOf extension.name
                 */
                extension: function(extension) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/extension/name/{extension}
                         *
                         * This method is manual
                         *
                         * @memberOf extension.name.extension
                         *
                         * @example
                         * ```javascript
                         * qrsApi.extension.name.extension(extension).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/extension/name/' + extension + '',
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
                         * /qrs/extension/name/{extension}?privileges={appendprivileges}
                         *
                         * This method is manual
                         *
                         * @memberOf extension.name.extension
                         *
                         * @example
                         * ```javascript
                         * qrsApi.extension.name.extension(extension).post(postParams, appendprivileges).then(function(Extension) {
                         *     console.log(Extension)
                         * })
                         * ```
                         *
                         * @param {String} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<Extension>} a promise resolving to the response to the request
                         */
                        post: function(postParams, appendprivileges) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/extension/name/' + extension + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                    };
                }
            },
            /**
             * @namespace
             * @memberOf extension
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf extension.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {Extension} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/extension/previewcreateprivilege',
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
             * @memberOf extension
             */
            schema: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/schema
                 *
                 * This method is manual
                 *
                 * @memberOf extension.schema
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.schema.get().then(function(Object) {
                 *     console.log(Object)
                 * })
                 * ```
                 *
                 * @returns {Promise.<Object>} a promise resolving to the response to the request
                 */
                get: function() {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/extension/schema',
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
             * @memberOf extension
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf extension.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/extension/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf extension
             */
            upload: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/extension/upload?pwd={password}&privileges={appendprivileges}
                 *
                 * This method is manual
                 *
                 * @memberOf extension.upload
                 *
                 * @example
                 * ```javascript
                 * qrsApi.extension.upload.post(postParams, password, appendprivileges).then(function(Array.<Extension>) {
                 *     console.log(Array.<Extension>)
                 * })
                 * ```
                 *
                 * @param {String} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} password the password parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<Extension>>} a promise resolving to the response to the request
                 */
                post: function(postParams, password, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/extension/upload' + (core.ifNotUndef(password, '&pwd=' + password, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
             * /qrs/extension?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf extension
             *
             * @example
             * ```javascript
             * qrsApi.extension.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
             *     console.log(Array.<Extension>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<Extension>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/extension' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/extension?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf extension
             *
             * @example
             * ```javascript
             * qrsApi.extension.post(postParams, appendprivileges).then(function(Extension) {
             *     console.log(Extension)
             * })
             * ```
             *
             * @param {Extension} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Extension>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/extension' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
