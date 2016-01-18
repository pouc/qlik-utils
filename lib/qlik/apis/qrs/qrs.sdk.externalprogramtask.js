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
        externalprogramtask: {
            /**
             * @namespace
             * @memberOf externalprogramtask
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/externalprogramtask/{id}
                     *
                     * This method is generated
                     *
                     * @memberOf externalprogramtask.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.externalprogramtask.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/externalprogramtask/' + id + '',
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
                     * /qrs/externalprogramtask/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf externalprogramtask.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.externalprogramtask.id(id).get(appendprivileges).then(function(ExternalProgramTask) {
                     *     console.log(ExternalProgramTask)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ExternalProgramTask>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/externalprogramtask/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
                     * /qrs/externalprogramtask/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf externalprogramtask.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.externalprogramtask.id(id).put(postParams, appendprivileges).then(function(ExternalProgramTask) {
                     *     console.log(ExternalProgramTask)
                     * })
                     * ```
                     *
                     * @param {ExternalProgramTask} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<ExternalProgramTask>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/externalprogramtask/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf externalprogramtask
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalprogramtask/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf externalprogramtask.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalprogramtask.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/externalprogramtask/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
             * @memberOf externalprogramtask
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalprogramtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf externalprogramtask.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalprogramtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
                 *     console.log(Array.<ExternalProgramTask>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExternalProgramTask>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/externalprogramtask/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf externalprogramtask
             */
            many: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalprogramtask/many?privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf externalprogramtask.many
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalprogramtask.many.post(postParams, appendprivileges).then(function(Array.<ExternalProgramTask>) {
                 *     console.log(Array.<ExternalProgramTask>)
                 * })
                 * ```
                 *
                 * @param {List<ExternalProgramTask>} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ExternalProgramTask>>} a promise resolving to the response to the request
                 */
                post: function(postParams, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/externalprogramtask/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
             * @memberOf externalprogramtask
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalprogramtask/previewcreateprivilege
                 *
                 * This method is generated
                 *
                 * @memberOf externalprogramtask.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalprogramtask.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {ExternalProgramTask} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/externalprogramtask/previewcreateprivilege',
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
             * @memberOf externalprogramtask
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/externalprogramtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf externalprogramtask.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.externalprogramtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/externalprogramtask/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/externalprogramtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf externalprogramtask
             *
             * @example
             * ```javascript
             * qrsApi.externalprogramtask.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
             *     console.log(Array.<ExternalProgramTask>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ExternalProgramTask>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/externalprogramtask' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/externalprogramtask?privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf externalprogramtask
             *
             * @example
             * ```javascript
             * qrsApi.externalprogramtask.post(postParams, appendprivileges).then(function(ExternalProgramTask) {
             *     console.log(ExternalProgramTask)
             * })
             * ```
             *
             * @param {ExternalProgramTask} postParams the parameters to send as request body to the API endpoint
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<ExternalProgramTask>} a promise resolving to the response to the request
             */
            post: function(postParams, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/externalprogramtask' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
