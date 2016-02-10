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
        app: {
            /**
             * @namespace
             * @memberOf app
             */
            id: function(id) {
                return {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/{id}
                     *
                     * This method is manual
                     *
                     * @memberOf app.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.id(id).delete().then(function() {
                     *     console.log('done')
                     * })
                     * ```
                     *
                     * @returns {Promise} a promise resolving without a return value when the request is finished
                     */
                    delete: function() {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/' + id + '',
                            method: 'DELETE'
                        }));
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    copy: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/copy?name={name}
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.copy
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).copy.post(name).then(function(App) {
                         *     console.log(App)
                         * })
                         * ```
                         *
                         * @param {string=} name the name parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        post: function(name) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/copy' + core.ifNotUndef(name, '?name=' + name, ''),
                                method: 'POST'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    export: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/export
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.export
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).export.get().then(function(Guid) {
                         *     console.log(Guid)
                         * })
                         * ```
                         *
                         * @returns {Promise.<Guid>} a promise resolving to the response to the request
                         */
                        get: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/export',
                                method: 'GET'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    migrate: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/migrate
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.migrate
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).migrate.put().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        put: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/migrate',
                                method: 'PUT'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    migrationcompleted: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/migrationcompleted
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.migrationcompleted
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).migrationcompleted.post(postParams).then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @param {AppMigrationStatus} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function(postParams) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/migrationcompleted',
                                method: 'POST'
                            }), postParams);
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    privileges: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/privileges
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.privileges
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).privileges.get().then(function(Object) {
                         *     console.log(Object)
                         * })
                         * ```
                         *
                         * @returns {Promise.<Object>} a promise resolving to the response to the request
                         */
                        get: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/privileges',
                                method: 'GET'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    publish: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/publish?stream={streamid}&name={name}
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.publish
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).publish.put(streamid, name).then(function(App) {
                         *     console.log(App)
                         * })
                         * ```
                         *
                         * @param {string=} streamid the streamid parameter
                         * @param {string=} name the name parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        put: function(streamid, name) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/publish' + (core.ifNotUndef(streamid, '&stream=' + streamid, '') +
                                    core.ifNotUndef(name, '&name=' + name, '')).replace(/^&/, '?'),
                                method: 'PUT'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    reload: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/reload
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.reload
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).reload.post().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/reload',
                                method: 'POST'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    replace: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/replace?app={appid}
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.replace
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).replace.put(appid).then(function(App) {
                         *     console.log(App)
                         * })
                         * ```
                         *
                         * @param {string=} appid the appid parameter
                         * @returns {Promise.<App>} a promise resolving to the response to the request
                         */
                        put: function(appid) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/replace' + core.ifNotUndef(appid, '?app=' + appid, ''),
                                method: 'PUT'
                            }));
                        }
                    },
                    /**
                     * @namespace
                     * @memberOf app.id
                     */
                    state: {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/{id}/state
                         *
                         * This method is manual
                         *
                         * @memberOf app.id.state
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.id(id).state.get().then(function(AppState) {
                         *     console.log(AppState)
                         * })
                         * ```
                         *
                         * @returns {Promise.<AppState>} a promise resolving to the response to the request
                         */
                        get: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/' + id + '/state',
                                method: 'GET'
                            }));
                        }
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf app.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.id(id).get(appendprivileges).then(function(App) {
                     *     console.log(App)
                     * })
                     * ```
                     *
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<App>} a promise resolving to the response to the request
                     */
                    get: function(appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'GET'
                        }));
                    },
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/{id}?privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf app.id
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.id(id).put(postParams, appendprivileges).then(function(App) {
                     *     console.log(App)
                     * })
                     * ```
                     *
                     * @param {App} postParams the parameters to send as request body to the API endpoint
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<App>} a promise resolving to the response to the request
                     */
                    put: function(postParams, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                            method: 'PUT'
                        }), postParams);
                    }
                };
            },
            /**
             * @namespace
             * @memberOf app
             */
            content: {
                /**
                 * @namespace
                 * @memberOf app.content
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/content/{id}?privileges={appendprivileges}
                         *
                         * This method is manual
                         *
                         * @memberOf app.content.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.content.id(id).get(appendprivileges).then(function(AppContent) {
                         *     console.log(AppContent)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppContent>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/content/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf app.content
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/content/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf app.content.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.content.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/content/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.content
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/content/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is manual
                     *
                     * @memberOf app.content.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.content.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
                     *     console.log(Array.<AppContent>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppContent>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/content/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.content
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/content/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is manual
                     *
                     * @memberOf app.content.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.content.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/app/content/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/app/content?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is manual
                 *
                 * @memberOf app.content
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.content.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
                 *     console.log(Array.<AppContent>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppContent>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/content' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            count: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/app/count?filter={filter}
                 *
                 * This method is generated
                 *
                 * @memberOf app.count
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.count.get(filter).then(function(int) {
                 *     console.log(int)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @returns {Promise.<int>} a promise resolving to the response to the request
                 */
                get: function(filter) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            datasegment: {
                /**
                 * @namespace
                 * @memberOf app.datasegment
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/datasegment/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf app.datasegment.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.datasegment.id(id).get(appendprivileges).then(function(AppDataSegment) {
                         *     console.log(AppDataSegment)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppDataSegment>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/datasegment/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf app.datasegment
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/datasegment/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf app.datasegment.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.datasegment.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/datasegment/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.datasegment
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/datasegment/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf app.datasegment.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.datasegment.full.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
                     *     console.log(Array.<AppDataSegment>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppDataSegment>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/datasegment/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.datasegment
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/datasegment/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf app.datasegment.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.datasegment.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/app/datasegment/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/app/datasegment?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf app.datasegment
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.datasegment.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
                 *     console.log(Array.<AppDataSegment>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppDataSegment>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/datasegment' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            full: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/app/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf app.full
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.full.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
                 *     console.log(Array.<App>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<App>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            import: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/app/import?name={name}&keepdata={keepdata}&privileges={appendprivileges}&excludeconnections={excludeconnections}
                 *
                 * This method is manual
                 *
                 * @memberOf app.import
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.import.post(postParams, name, keepdata, appendprivileges, excludeconnections).then(function(App) {
                 *     console.log(App)
                 * })
                 * ```
                 *
                 * @param {String} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} name the name parameter
                 * @param {string=} keepdata the keepdata parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @param {string=} excludeconnections the excludeconnections parameter
                 * @returns {Promise.<App>} a promise resolving to the response to the request
                 */
                post: function(postParams, name, keepdata, appendprivileges, excludeconnections) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/import' + (core.ifNotUndef(name, '&name=' + name, '') +
                            core.ifNotUndef(keepdata, '&keepdata=' + keepdata, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '') +
                            core.ifNotUndef(excludeconnections, '&excludeconnections=' + excludeconnections, '')).replace(/^&/, '?'),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            internal: {
                /**
                 * @namespace
                 * @memberOf app.internal
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/internal/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf app.internal.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.internal.id(id).get(appendprivileges).then(function(AppInternal) {
                         *     console.log(AppInternal)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppInternal>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/internal/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf app.internal
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/internal/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf app.internal.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.internal.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/internal/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.internal
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/internal/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf app.internal.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.internal.full.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
                     *     console.log(Array.<AppInternal>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppInternal>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/internal/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.internal
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/internal/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf app.internal.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.internal.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/app/internal/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/app/internal?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf app.internal
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.internal.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
                 *     console.log(Array.<AppInternal>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppInternal>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/internal' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            object: {
                /**
                 * @namespace
                 * @memberOf app.object
                 */
                id: function(id) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/object/{id}
                         *
                         * This method is generated
                         *
                         * @memberOf app.object.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.object.id(id).delete().then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        delete: function() {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/object/' + id + '',
                                method: 'DELETE'
                            }));
                        },
                        /**
                         * @namespace
                         * @memberOf app.object.id
                         */
                        publish: {
                            /**
                             * Makes a request on the Qlik Sense QRS API:
                             *
                             * /qrs/app/object/{id}/publish
                             *
                             * This method is manual
                             *
                             * @memberOf app.object.id.publish
                             *
                             * @example
                             * ```javascript
                             * qrsApi.app.object.id(id).publish.put().then(function(AppObject) {
                             *     console.log(AppObject)
                             * })
                             * ```
                             *
                             * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                             */
                            put: function() {
                                return base.request(extend(true, {}, options, {
                                    restUri: options.qrsRestUri + '/qrs/app/object/' + id + '/publish',
                                    method: 'PUT'
                                }));
                            }
                        },
                        /**
                         * @namespace
                         * @memberOf app.object.id
                         */
                        unpublish: {
                            /**
                             * Makes a request on the Qlik Sense QRS API:
                             *
                             * /qrs/app/object/{id}/unpublish
                             *
                             * This method is manual
                             *
                             * @memberOf app.object.id.unpublish
                             *
                             * @example
                             * ```javascript
                             * qrsApi.app.object.id(id).unpublish.put().then(function(AppObject) {
                             *     console.log(AppObject)
                             * })
                             * ```
                             *
                             * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                             */
                            put: function() {
                                return base.request(extend(true, {}, options, {
                                    restUri: options.qrsRestUri + '/qrs/app/object/' + id + '/unpublish',
                                    method: 'PUT'
                                }));
                            }
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/object/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf app.object.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.object.id(id).get(appendprivileges).then(function(AppObject) {
                         *     console.log(AppObject)
                         * })
                         * ```
                         *
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                         */
                        get: function(appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/object/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'GET'
                            }));
                        },
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/app/object/{id}?privileges={appendprivileges}
                         *
                         * This method is generated
                         *
                         * @memberOf app.object.id
                         *
                         * @example
                         * ```javascript
                         * qrsApi.app.object.id(id).put(postParams, appendprivileges).then(function(AppObject) {
                         *     console.log(AppObject)
                         * })
                         * ```
                         *
                         * @param {AppObject} postParams the parameters to send as request body to the API endpoint
                         * @param {string=} appendprivileges the appendprivileges parameter
                         * @returns {Promise.<AppObject>} a promise resolving to the response to the request
                         */
                        put: function(postParams, appendprivileges) {
                            return base.request(extend(true, {}, options, {
                                restUri: options.qrsRestUri + '/qrs/app/object/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
                                method: 'PUT'
                            }), postParams);
                        }
                    };
                },
                /**
                 * @namespace
                 * @memberOf app.object
                 */
                count: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/object/count?filter={filter}
                     *
                     * This method is generated
                     *
                     * @memberOf app.object.count
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.object.count.get(filter).then(function(int) {
                     *     console.log(int)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @returns {Promise.<int>} a promise resolving to the response to the request
                     */
                    get: function(filter) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/object/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.object
                 */
                full: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/object/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                     *
                     * This method is generated
                     *
                     * @memberOf app.object.full
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.object.full.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
                     *     console.log(Array.<AppObject>)
                     * })
                     * ```
                     *
                     * @param {string=} filter the filter parameter
                     * @param {string=} orderby the orderby parameter
                     * @param {string=} appendprivileges the appendprivileges parameter
                     * @returns {Promise.<Array.<AppObject>>} a promise resolving to the response to the request
                     */
                    get: function(filter, orderby, appendprivileges) {
                        return base.request(extend(true, {}, options, {
                            restUri: options.qrsRestUri + '/qrs/app/object/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                                core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                                core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                            method: 'GET'
                        }));
                    }
                },
                /**
                 * @namespace
                 * @memberOf app.object
                 */
                table: {
                    /**
                     * Makes a request on the Qlik Sense QRS API:
                     *
                     * /qrs/app/object/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                     *
                     * This method is generated
                     *
                     * @memberOf app.object.table
                     *
                     * @example
                     * ```javascript
                     * qrsApi.app.object.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                            restUri: options.qrsRestUri + '/qrs/app/object/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
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
                 * /qrs/app/object?filter={filter}&orderby={orderby}&privileges={appendprivileges}
                 *
                 * This method is generated
                 *
                 * @memberOf app.object
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.object.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
                 *     console.log(Array.<AppObject>)
                 * })
                 * ```
                 *
                 * @param {string=} filter the filter parameter
                 * @param {string=} orderby the orderby parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @returns {Promise.<Array.<AppObject>>} a promise resolving to the response to the request
                 */
                get: function(filter, orderby, appendprivileges) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/object' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            previewcreateprivilege: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/app/previewcreateprivilege
                 *
                 * This method is manual
                 *
                 * @memberOf app.previewcreateprivilege
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.previewcreateprivilege.post(postParams).then(function(Boolean) {
                 *     console.log(Boolean)
                 * })
                 * ```
                 *
                 * @param {App} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
                 */
                post: function(postParams) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/previewcreateprivilege',
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            table: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/app/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
                 *
                 * This method is generated
                 *
                 * @memberOf app.table
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
                        restUri: options.qrsRestUri + '/qrs/app/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                            core.ifNotUndef(skip, '&skip=' + skip, '') +
                            core.ifNotUndef(take, '&take=' + take, '') +
                            core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') +
                            core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * @namespace
             * @memberOf app
             */
            upload: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/app/upload?name={name}&keepdata={keepdata}&privileges={appendprivileges}&excludeconnections={excludeconnections}
                 *
                 * This method is manual
                 *
                 * @memberOf app.upload
                 *
                 * @example
                 * ```javascript
                 * qrsApi.app.upload.post(postParams, name, keepdata, appendprivileges, excludeconnections).then(function(App) {
                 *     console.log(App)
                 * })
                 * ```
                 *
                 * @param {String} postParams the parameters to send as request body to the API endpoint
                 * @param {string=} name the name parameter
                 * @param {string=} keepdata the keepdata parameter
                 * @param {string=} appendprivileges the appendprivileges parameter
                 * @param {string=} excludeconnections the excludeconnections parameter
                 * @returns {Promise.<App>} a promise resolving to the response to the request
                 */
                post: function(postParams, name, keepdata, appendprivileges, excludeconnections) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/app/upload' + (core.ifNotUndef(name, '&name=' + name, '') +
                            core.ifNotUndef(keepdata, '&keepdata=' + keepdata, '') +
                            core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '') +
                            core.ifNotUndef(excludeconnections, '&excludeconnections=' + excludeconnections, '')).replace(/^&/, '?'),
                        method: 'POST'
                    }), postParams);
                }
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/app?filter={filter}&orderby={orderby}&privileges={appendprivileges}
             *
             * This method is generated
             *
             * @memberOf app
             *
             * @example
             * ```javascript
             * qrsApi.app.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
             *     console.log(Array.<App>)
             * })
             * ```
             *
             * @param {string=} filter the filter parameter
             * @param {string=} orderby the orderby parameter
             * @param {string=} appendprivileges the appendprivileges parameter
             * @returns {Promise.<Array.<App>>} a promise resolving to the response to the request
             */
            get: function(filter, orderby, appendprivileges) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/app' + (core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(orderby, '&orderby=' + orderby, '') +
                        core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
                    method: 'GET'
                }));
            }
        }
    };
};
