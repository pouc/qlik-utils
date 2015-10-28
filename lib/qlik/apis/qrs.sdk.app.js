var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function (options) {
    return {
        /**
         * @namespace
         */
        app: {
            /**
             * @namespace
             * @memberof app
             */
            id: function (id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/{id}
                     * This method is manual
                     *
                     * @memberof app.id
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function () {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '',
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'DELETE'
                        });
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    copy: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/copy?name={name}
                         * This method is manual
                         *
                         * @memberof app.id.copy
                         *
                         * @param {string=} name the name parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        post: function (name) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/copy' + core.ifNotUndef(name, '?name=' + name, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'POST'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    export: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/export
                         * This method is manual
                         *
                         * @memberof app.id.export
                         *
                         * @returns {Promise.<Guid>} a promise resolving to the response to the request
                         */
                        get: function () {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/export',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    migrate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/migrate
                         * This method is manual
                         *
                         * @memberof app.id.migrate
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        put: function () {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/migrate',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'PUT'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    migrationcompleted: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/migrationcompleted
                         * This method is manual
                         *
                         * @memberof app.id.migrationcompleted
                         *
                         * @param {AppMigrationStatus} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function (postParams) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/migrationcompleted',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'POST'
                            }, postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    privileges: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/privileges
                         * This method is manual
                         *
                         * @memberof app.id.privileges
                         *
                         * @returns {Promise.<Object>} a promise resolving to the response to the request
                         */
                        get: function () {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/privileges',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    publish: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/publish?stream={streamid}&name={name}
                         * This method is manual
                         *
                         * @memberof app.id.publish
                         *
                         * @param {string=} streamid the streamid parameter
                         * @param {string=} name the name parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        put: function (streamid, name) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/publish' + (core.ifNotUndef(streamid, '&stream=' + streamid, '') + core.ifNotUndef(name, '&name=' + name, '')).replace(/^&/, '?'),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'PUT'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    reload: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/reload
                         * This method is manual
                         *
                         * @memberof app.id.reload
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function () {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/reload',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'POST'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    replace: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/replace?app={appid}
                         * This method is manual
                         *
                         * @memberof app.id.replace
                         *
                         * @param {string=} appid the appid parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        put: function (appid) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/replace' + core.ifNotUndef(appid, '?app=' + appid, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'PUT'
                            });
                        }
                    },
                    /**
                     * @namespace
                     * @memberof app.id
                     */
                    state: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/{id}/state
                         * This method is manual
                         *
                         * @memberof app.id.state
                         *
                         * @returns {Promise.<AppState>} a promise resolving to the response to the request
                         */
                        get: function () {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '/state',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        }
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/{id}?privileges={appendprivileges}
                     * This method is generated
                     *
                     * @memberof app.id
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<App>} a promise resolving to the response to the request
                     */
                    get: function (appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/{id}?privileges={appendprivileges}
                     * This method is generated
                     *
                     * @memberof app.id
                     *
                     * @param {App} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<App>} a promise resolving to the response to the request
                     */
                    put: function (postParams, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
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
             * @memberof app
             */
            content: {
                /**
                 * @namespace
                 * @memberof app.content
                 */
                id: function (id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/content/{id}?privileges={appendprivileges}
                         * This method is manual
                         *
                         * @memberof app.content.id
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppContent>} a promise resolving to the response to the request
                         */
                        get: function (appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/content/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberof app.content
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/content/count?filter={filter}
                     * This method is generated
                     *
                     * @memberof app.content.count
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function (filter) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/content/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.content
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/content/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     * This method is manual
                     *
                     * @memberof app.content.full
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppContent>>} a promise resolving to the response to the request
                     */
                    get: function (filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/content/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.content
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/content/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     * This method is manual
                     *
                     * @memberof app.content.table
                     *
                     * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} filter the filter parameter
                     * @param {string=} skip the skip parameter
                     * @param {string=} take the take parameter
                     * @param {string=} sortcolumn the sortcolumn parameter
                     * @param {string=} orderascending the orderascending parameter
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/content/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/content?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 * This method is manual
                 *
                 * @memberof app.content
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppContent>>} a promise resolving to the response to the request
                 */
                get: function (filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/content' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/count?filter={filter}
                 * This method is generated
                 *
                 * @memberof app.count
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function (filter) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            datasegment: {
                /**
                 * @namespace
                 * @memberof app.datasegment
                 */
                id: function (id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/datasegment/{id}?privileges={appendprivileges}
                         * This method is generated
                         *
                         * @memberof app.datasegment.id
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppDataSegment>} a promise resolving to the response to the request
                         */
                        get: function (appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/datasegment/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberof app.datasegment
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/datasegment/count?filter={filter}
                     * This method is generated
                     *
                     * @memberof app.datasegment.count
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function (filter) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/datasegment/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.datasegment
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/datasegment/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     * This method is generated
                     *
                     * @memberof app.datasegment.full
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppDataSegment>>} a promise resolving to the response to the request
                     */
                    get: function (filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/datasegment/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.datasegment
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/datasegment/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     * This method is generated
                     *
                     * @memberof app.datasegment.table
                     *
                     * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} filter the filter parameter
                     * @param {string=} skip the skip parameter
                     * @param {string=} take the take parameter
                     * @param {string=} sortcolumn the sortcolumn parameter
                     * @param {string=} orderascending the orderascending parameter
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/datasegment/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/datasegment?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 * This method is generated
                 *
                 * @memberof app.datasegment
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppDataSegment>>} a promise resolving to the response to the request
                 */
                get: function (filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/datasegment' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 * This method is generated
                 *
                 * @memberof app.full
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<App>>} a promise resolving to the response to the request
                 */
                get: function (filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            import: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/import?name={name}&keepdata={keepdata}&replace={replace}&privileges={appendprivileges}&excludeconnections={excludeconnections}
                 * This method is manual
                 *
                 * @memberof app.import
                 *
                 * @param {String} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} name the name parameter
                 * @param {string=} keepdata the keepdata parameter
                 * @param {string=} replace the replace parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @param {string=} excludeconnections the excludeconnections parameter
                 * @returns {Promise.<App>} a promise resolving to the response to the request
                 */
                post: function (postParams, name, keepdata, replace, appendprivileges, excludeconnections) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/import' + (core.ifNotUndef(name, '&name=' + name, '') + core.ifNotUndef(keepdata, '&keepdata=' + keepdata, '') + core.ifNotUndef(replace, '&replace=' + replace, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '') + core.ifNotUndef(excludeconnections, '&excludeconnections=' + excludeconnections, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            internal: {
                /**
                 * @namespace
                 * @memberof app.internal
                 */
                id: function (id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/internal/{id}?privileges={appendprivileges}
                         * This method is generated
                         *
                         * @memberof app.internal.id
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppInternal>} a promise resolving to the response to the request
                         */
                        get: function (appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/internal/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberof app.internal
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/internal/count?filter={filter}
                     * This method is generated
                     *
                     * @memberof app.internal.count
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function (filter) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/internal/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.internal
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/internal/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     * This method is generated
                     *
                     * @memberof app.internal.full
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppInternal>>} a promise resolving to the response to the request
                     */
                    get: function (filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/internal/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.internal
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/internal/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     * This method is generated
                     *
                     * @memberof app.internal.table
                     *
                     * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} filter the filter parameter
                     * @param {string=} skip the skip parameter
                     * @param {string=} take the take parameter
                     * @param {string=} sortcolumn the sortcolumn parameter
                     * @param {string=} orderascending the orderascending parameter
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/internal/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/internal?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 * This method is generated
                 *
                 * @memberof app.internal
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppInternal>>} a promise resolving to the response to the request
                 */
                get: function (filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/internal' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            object: {
                /**
                 * @namespace
                 * @memberof app.object
                 */
                id: function (id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/object/{id}
                         * This method is generated
                         *
                         * @memberof app.object.id
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function () {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/' + id + '',
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'DELETE'
                            });
                        },
                        /**
                         * @namespace
                         * @memberof app.object.id
                         */
                        publish: {
                            /**
                             * Makes a request on the Qlik Sense QRS API:
                             * /qrs/app/object/{id}/publish
                             * This method is manual
                             *
                             * @memberof app.object.id.publish
                             *
                             * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                             */
                            put: function () {
                                var restUri = url.parse(options.restUri);
                                return base.request({
                                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/' + id + '/publish',
                                    pfx: options.pfx,
                                    passPhrase: options.passPhrase,
                                    UserId: options.UserId,
                                    UserDirectory: options.UserDirectory,
                                    timeout: core.ifNotUndef(options.timeout, 60000),
                                    method: 'PUT'
                                });
                            }
                        },
                        /**
                         * @namespace
                         * @memberof app.object.id
                         */
                        unpublish: {
                            /**
                             * Makes a request on the Qlik Sense QRS API:
                             * /qrs/app/object/{id}/unpublish
                             * This method is manual
                             *
                             * @memberof app.object.id.unpublish
                             *
                             * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                             */
                            put: function () {
                                var restUri = url.parse(options.restUri);
                                return base.request({
                                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/' + id + '/unpublish',
                                    pfx: options.pfx,
                                    passPhrase: options.passPhrase,
                                    UserId: options.UserId,
                                    UserDirectory: options.UserDirectory,
                                    timeout: core.ifNotUndef(options.timeout, 60000),
                                    method: 'PUT'
                                });
                            }
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/object/{id}?privileges={appendprivileges}
                         * This method is generated
                         *
                         * @memberof app.object.id
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                         */
                        get: function (appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: core.ifNotUndef(options.timeout, 60000),
                                method: 'GET'
                            });
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         * /qrs/app/object/{id}?privileges={appendprivileges}
                         * This method is generated
                         *
                         * @memberof app.object.id
                         *
                         * @param {AppObject} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                         */
                        put: function (postParams, appendprivileges) {
                            var restUri = url.parse(options.restUri);
                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                pfx: options.pfx,
                                passPhrase: options.passPhrase,
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
                 * @memberof app.object
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/object/count?filter={filter}
                     * This method is generated
                     *
                     * @memberof app.object.count
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function (filter) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.object
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/object/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     * This method is generated
                     *
                     * @memberof app.object.full
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppObject>>} a promise resolving to the response to the request
                     */
                    get: function (filter, orderby, appendprivileges) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'GET'
                        });
                    }
                },
                /**
                 * @namespace
                 * @memberof app.object
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     * /qrs/app/object/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     * This method is generated
                     *
                     * @memberof app.object.table
                     *
                     * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} filter the filter parameter
                     * @param {string=} skip the skip parameter
                     * @param {string=} take the take parameter
                     * @param {string=} sortcolumn the sortcolumn parameter
                     * @param {string=} orderascending the orderascending parameter
                     * @returns {Promise.<Object>} a promise resolving to the response to the request
                     */
                    post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
                        var restUri = url.parse(options.restUri);
                        return base.request({
                            restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                            pfx: options.pfx,
                            passPhrase: options.passPhrase,
                            UserId: options.UserId,
                            UserDirectory: options.UserDirectory,
                            timeout: core.ifNotUndef(options.timeout, 60000),
                            method: 'POST'
                        }, postParams);
                    }
                },
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/object?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 * This method is generated
                 *
                 * @memberof app.object
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppObject>>} a promise resolving to the response to the request
                 */
                get: function (filter, orderby, appendprivileges) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/object' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'GET'
                    });
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/previewcreateprivilege
                 * This method is manual
                 *
                 * @memberof app.previewcreateprivilege
                 *
                 * @param {App} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function (postParams) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/previewcreateprivilege',
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 * This method is generated
                 *
                 * @memberof app.table
                 *
                 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} filter the filter parameter
                 * @param {string=} skip the skip parameter
                 * @param {string=} take the take parameter
                 * @param {string=} sortcolumn the sortcolumn parameter
                 * @param {string=} orderascending the orderascending parameter
                 * @returns {Promise.<Object>} a promise resolving to the response to the request
                 */
                post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
                }
            },
            /**
             * @namespace
             * @memberof app
             */
            upload: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 * /qrs/app/upload?name={name}&keepdata={keepdata}&replace={replace}&privileges={appendprivileges}&excludeconnections={excludeconnections}
                 * This method is manual
                 *
                 * @memberof app.upload
                 *
                 * @param {String} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} name the name parameter
                 * @param {string=} keepdata the keepdata parameter
                 * @param {string=} replace the replace parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @param {string=} excludeconnections the excludeconnections parameter
                 * @returns {Promise.<App>} a promise resolving to the response to the request
                 */
                post: function (postParams, name, keepdata, replace, appendprivileges, excludeconnections) {
                    var restUri = url.parse(options.restUri);
                    return base.request({
                        restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app/upload' + (core.ifNotUndef(name, '&name=' + name, '') + core.ifNotUndef(keepdata, '&keepdata=' + keepdata, '') + core.ifNotUndef(replace, '&replace=' + replace, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '') + core.ifNotUndef(excludeconnections, '&excludeconnections=' + excludeconnections, '')).replace(/^&/, '?'),
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    }, postParams);
                }
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             * /qrs/app?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             * This method is generated
             *
             * @memberof app
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<App>>} a promise resolving to the response to the request
             */
            get: function (filter, orderby, appendprivileges) {
                var restUri = url.parse(options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/app' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'GET'
                });
            }
        }
    }
}
