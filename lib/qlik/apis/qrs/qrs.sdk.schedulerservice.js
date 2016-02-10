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
        schedulerservice: {
            /**
             * @namespace
             * @memberOf schedulerservice
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/schedulerservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf schedulerservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.schedulerservice.id(id).get(appendprivileges).then(function(SchedulerService) {
                     *     console.log(SchedulerService)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<SchedulerService>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/schedulerservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/schedulerservice/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf schedulerservice.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.schedulerservice.id(id).put(postParams, appendprivileges).then(function(SchedulerService) {
                     *     console.log(SchedulerService)
                     * })
                     * ```
                     *
                     * @param {SchedulerService} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<SchedulerService>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/schedulerservice/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf schedulerservice
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schedulerservice/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf schedulerservice.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schedulerservice.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/schedulerservice/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf schedulerservice
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schedulerservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf schedulerservice.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schedulerservice.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
                 *     console.log(Array.<SchedulerService>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<SchedulerService>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/schedulerservice/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf schedulerservice
             */
            local: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schedulerservice/local
                 *
                 * This method is manual
                 *
                 * @memberOf schedulerservice.local
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schedulerservice.local.get().then(function(SchedulerService) {
                 *     console.log(SchedulerService)
                 * })
                 * ```
                 *
                 * @returns {Promise.<SchedulerService>} a promise resolving to the response to the request
                 */
                get: function() {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/schedulerservice/local',
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf schedulerservice
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/schedulerservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf schedulerservice.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.schedulerservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/schedulerservice/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/schedulerservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf schedulerservice
             *
             * @example
             * ```javascript
             * qrsApi.schedulerservice.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
             *     console.log(Array.<SchedulerService>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<SchedulerService>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/schedulerservice' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
