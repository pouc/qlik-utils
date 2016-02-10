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
        appstatus: {
            /**
             * @namespace
             * @memberOf appstatus
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/appstatus/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf appstatus.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.appstatus.id(id).get(appendprivileges).then(function(AppStatus) {
                     *     console.log(AppStatus)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<AppStatus>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/appstatus/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    }
                };
            },
            /**
             * @namespace
             * @memberOf appstatus
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/appstatus/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf appstatus.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.appstatus.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/appstatus/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf appstatus
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/appstatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf appstatus.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.appstatus.full.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
                 *     console.log(Array.<AppStatus>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppStatus>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/appstatus/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf appstatus
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/appstatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf appstatus.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.appstatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/appstatus/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/appstatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf appstatus
             *
             * @example
             * ```javascript
             * qrsApi.appstatus.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
             *     console.log(Array.<AppStatus>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<AppStatus>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/appstatus' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
