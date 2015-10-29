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
        schemaevent: {
            /**
             * @namespace
             * @memberOf schemaevent
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/schemaevent/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf schemaevent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.schemaevent.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/' + id + '',
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
                     * /qrs/schemaevent/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf schemaevent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.schemaevent.id(id).get(appendprivileges).then(function(SchemaEvent) {
                     *     console.log(SchemaEvent)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<SchemaEvent>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/schemaevent/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf schemaevent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.schemaevent.id(id).put(postParams, appendprivileges).then(function(SchemaEvent) {
                     *     console.log(SchemaEvent)
                     * })
                     * ```
                     *
                     * @param {SchemaEvent} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<SchemaEvent>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf schemaevent
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schemaevent/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf schemaevent.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schemaevent.count.get(filter).then(function(int) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf schemaevent
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schemaevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf schemaevent.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schemaevent.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
                 *     console.log(Array.<SchemaEvent>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<SchemaEvent>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf schemaevent
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schemaevent/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf schemaevent.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schemaevent.many.post(postParams, appendprivileges).then(function(Array.<SchemaEvent>) {
                 *     console.log(Array.<SchemaEvent>)
                 * })
                 * ```
                 *
                 * @param {List<SchemaEvent>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<SchemaEvent>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf schemaevent
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schemaevent/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf schemaevent.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schemaevent.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {SchemaEvent} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/previewcreateprivilege',
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
             * @memberOf schemaevent
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schemaevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf schemaevent.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schemaevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/schemaevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf schemaevent
             *
             * @example
             * ```javascript
             * qrsApi.schemaevent.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
             *     console.log(Array.<SchemaEvent>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<SchemaEvent>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/schemaevent?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf schemaevent
             *
             * @example
             * ```javascript
             * qrsApi.schemaevent.post(postParams, appendprivileges).then(function(SchemaEvent) {
             *     console.log(SchemaEvent)
             * })
             * ```
             *
             * @param {SchemaEvent} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<SchemaEvent>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/schemaevent' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
