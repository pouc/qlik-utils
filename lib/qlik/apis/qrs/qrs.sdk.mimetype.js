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
        mimetype: {
            /**
             * @namespace
             * @memberOf mimetype
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/mimetype/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf mimetype.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.mimetype.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/' + id + '',
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
                     * /qrs/mimetype/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf mimetype.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.mimetype.id(id).get(appendprivileges).then(function(MimeType) {
                     *     console.log(MimeType)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<MimeType>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/mimetype/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf mimetype.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.mimetype.id(id).put(postParams, appendprivileges).then(function(MimeType) {
                     *     console.log(MimeType)
                     * })
                     * ```
                     *
                     * @param {MimeType} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<MimeType>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf mimetype
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/mimetype/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf mimetype.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.mimetype.count.get(filter).then(function(int) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf mimetype
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/mimetype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf mimetype.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.mimetype.full.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
                 *     console.log(Array.<MimeType>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<MimeType>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf mimetype
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/mimetype/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf mimetype.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.mimetype.many.post(postParams, appendprivileges).then(function(Array.<MimeType>) {
                 *     console.log(Array.<MimeType>)
                 * })
                 * ```
                 *
                 * @param {List<MimeType>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<MimeType>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf mimetype
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/mimetype/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf mimetype.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.mimetype.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {MimeType} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/previewcreateprivilege',
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
             * @memberOf mimetype
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/mimetype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf mimetype.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.mimetype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/mimetype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf mimetype
             *
             * @example
             * ```javascript
             * qrsApi.mimetype.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
             *     console.log(Array.<MimeType>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<MimeType>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/mimetype?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf mimetype
             *
             * @example
             * ```javascript
             * qrsApi.mimetype.post(postParams, appendprivileges).then(function(MimeType) {
             *     console.log(MimeType)
             * })
             * ```
             *
             * @param {MimeType} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<MimeType>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/mimetype' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
