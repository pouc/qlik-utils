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
        tempcontent: {
            /**
             * @namespace
             * @memberOf tempcontent
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/tempcontent/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf tempcontent.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.tempcontent.id(id).get(appendprivileges).then(function(TempContent) {
                     *     console.log(TempContent)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<TempContent>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/tempcontent/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    }
                };
            },
            /**
             * @namespace
             * @memberOf tempcontent
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/tempcontent/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf tempcontent.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.tempcontent.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/tempcontent/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf tempcontent
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/tempcontent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf tempcontent.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.tempcontent.full.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
                 *     console.log(Array.<TempContent>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<TempContent>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/tempcontent/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf tempcontent
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/tempcontent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf tempcontent.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.tempcontent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/tempcontent/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/tempcontent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf tempcontent
             *
             * @example
             * ```javascript
             * qrsApi.tempcontent.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
             *     console.log(Array.<TempContent>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<TempContent>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/tempcontent' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
