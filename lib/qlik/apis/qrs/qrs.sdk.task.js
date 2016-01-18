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
        task: {
            /**
             * @namespace
             * @memberOf task
             */
            id: function(id) {
                return {
                    /**
                     * @namespace
                     * @memberOf task.id
                     */
                    start: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/task/{id}/start
                         *
                         * This method is manual
                         *
                         * @memberOf task.id.start
                         *
                         * @example
                         * ```javascript
                         * qrsApi.task.id(id).start.post().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function() {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/task/' + id + '/start',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'POST'
                            });
                        },
                        /**
                         * @namespace
                         * @memberOf task.id.start
                         */
                        synchronous: {
                            /**
                             * Makes a request on the Qlik Sense QRS API:
                             *
                             * /qrs/task/{id}/start/synchronous
                             *
                             * This method is manual
                             *
                             * @memberOf task.id.start.synchronous
                             *
                             * @example
                             * ```javascript
                             * qrsApi.task.id(id).start.synchronous.post().then(function(Guid) {
                             *     console.log(Guid)
                             * })
                             * ```
                             *
                             * @returns {Promise.<Guid>} a promise resolving to the response to the request
                             */
                            post: function() {

                                return base.request({
                                    restUri: options.qrsRestUri + '/qrs/task/' + id + '/start/synchronous',
                                    pfx: options.pfx,
                                    passPhrase: options.passPhrase,
                                    key: options.key,
                                    cert: options.cert,
                                    ca: options.ca,
                                    UserId: options.UserId,
                                    UserDirectory: options.UserDirectory,
                                    timeout: core.ifNotUndef(options.timeout, 60000),
                                    method: 'POST'
                                });
                            }
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf task.id
                     */
                    stop: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/task/{id}/stop
                         *
                         * This method is manual
                         *
                         * @memberOf task.id.stop
                         *
                         * @example
                         * ```javascript
                         * qrsApi.task.id(id).stop.post().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function() {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/task/' + id + '/stop',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                key: options.key,
                                cert: options.cert,
                                ca: options.ca,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'POST'
                            });
                        }
                    }
                };
            },
            /**
             * @namespace
             * @memberOf task
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/task/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf task.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.task.full.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
                 *     console.log(Array.<ITask>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<ITask>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/task/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * @memberOf task
             */
            start: {
                /**
                 * @namespace
                 * @memberOf task.start
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/task/start/many
                     *
                     * This method is manual
                     *
                     * @memberOf task.start.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.task.start.many.post(postParams).then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @param {Guid[]} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    post: function(postParams) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/task/start/many',
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
                 * @memberOf task.start
                 */
                synchronous: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/task/start/synchronous?name={name}
                     *
                     * This method is manual
                     *
                     * @memberOf task.start.synchronous
                     *
                     * @example
                     * ```javascript
                     * qrsApi.task.start.synchronous.post(name).then(function(Guid) {
                     *     console.log(Guid)
                     * })
                     * ```
                     *
                     * @param {string=} name the name parameter
                     * @returns {Promise.<Guid>} a promise resolving to the response to the request
                     */
                    post: function(name) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/task/start/synchronous' + core.ifNotUndef(name, '?name=' + name, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            key: options.key,
                            cert: options.cert,
                            ca: options.ca,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        });
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/task/start?name={name}
                 *
                 * This method is manual
                 *
                 * @memberOf task.start
                 *
                 * @example
                 * ```javascript
                 * qrsApi.task.start.post(name).then(function() {
                 *     console.log('done')
                 * })
                 * ```
                 *
                 * @param {string=} name the name parameter
                 * @returns {Promise} a promise resolving without a return value when the request is finished
                 */
                post: function(name) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/task/start' + core.ifNotUndef(name, '?name=' + name, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    });
                }
            },
            /**
             * @namespace
             * @memberOf task
             */
            stop: {
                /**
                 * @namespace
                 * @memberOf task.stop
                 */
                many: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/task/stop/many
                     *
                     * This method is manual
                     *
                     * @memberOf task.stop.many
                     *
                     * @example
                     * ```javascript
                     * qrsApi.task.stop.many.post(postParams).then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @param {Guid[]} postParams the parameters to send as request body to the API endpoint
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    post: function(postParams) {

                        return base.request({
                            restUri: options.qrsRestUri + '/qrs/task/stop/many',
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
            },
            /**
             * @namespace
             * @memberOf task
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/task/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf task.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.task.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/task/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
             * /qrs/task?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf task
             *
             * @example
             * ```javascript
             * qrsApi.task.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
             *     console.log(Array.<ITask>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<ITask>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/task' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
        }
    };
};
