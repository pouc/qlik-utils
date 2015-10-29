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
        compositeevent: {
            /**
             * @namespace
             * @memberOf compositeevent
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/compositeevent/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf compositeevent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.compositeevent.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/' + id + '',
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
                     * /qrs/compositeevent/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf compositeevent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.compositeevent.id(id).get(appendprivileges).then(function(CompositeEvent) {
                     *     console.log(CompositeEvent)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<CompositeEvent>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/compositeevent/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf compositeevent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.compositeevent.id(id).put(postParams, appendprivileges).then(function(CompositeEvent) {
                     *     console.log(CompositeEvent)
                     * })
                     * ```
                     *
                     * @param {CompositeEvent} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<CompositeEvent>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf compositeevent
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/compositeevent/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf compositeevent.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.compositeevent.count.get(filter).then(function(int) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf compositeevent
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/compositeevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf compositeevent.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.compositeevent.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
                 *     console.log(Array.<CompositeEvent>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<CompositeEvent>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf compositeevent
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/compositeevent/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf compositeevent.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.compositeevent.many.post(postParams, appendprivileges).then(function(Array.<CompositeEvent>) {
                 *     console.log(Array.<CompositeEvent>)
                 * })
                 * ```
                 *
                 * @param {List<CompositeEvent>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<CompositeEvent>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf compositeevent
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/compositeevent/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf compositeevent.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.compositeevent.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {CompositeEvent} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/previewcreateprivilege',
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
             * @memberOf compositeevent
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/compositeevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf compositeevent.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.compositeevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/compositeevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf compositeevent
             *
             * @example
             * ```javascript
             * qrsApi.compositeevent.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
             *     console.log(Array.<CompositeEvent>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<CompositeEvent>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/compositeevent?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf compositeevent
             *
             * @example
             * ```javascript
             * qrsApi.compositeevent.post(postParams, appendprivileges).then(function(CompositeEvent) {
             *     console.log(CompositeEvent)
             * })
             * ```
             *
             * @param {CompositeEvent} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<CompositeEvent>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeevent' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
