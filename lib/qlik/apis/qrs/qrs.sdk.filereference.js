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
        filereference: {
            /**
             * @namespace
             * @memberOf filereference
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/filereference/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf filereference.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.filereference.id(id).get(appendprivileges).then(function(FileReference) {
                     *     console.log(FileReference)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<FileReference>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/filereference/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    }
                };
            },
            /**
             * @namespace
             * @memberOf filereference
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/filereference/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf filereference.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.filereference.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/filereference/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf filereference
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/filereference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf filereference.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.filereference.full.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
                 *     console.log(Array.<FileReference>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<FileReference>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/filereference/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf filereference
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/filereference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf filereference.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.filereference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/filereference/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/filereference?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf filereference
             *
             * @example
             * ```javascript
             * qrsApi.filereference.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
             *     console.log(Array.<FileReference>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<FileReference>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/filereference' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
