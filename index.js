'use strict';

var Rx = require('rxjs/Rx');
var promise = require('q');
var mapObj = require('map-obj');
var values = require('object.values');
var extend = require('extend');
var sprintf = require('sprintf-js').sprintf;
var arrayDivide = require('array-divide');

var undef = require('ifnotundef');

var qps = require('qlik-api-qps');
var qrs = require('qlik-api-qrs');

var Task = require('rxjs-task-subject');

/**
 *
 * [![GitHub version](https://badge.fury.io/gh/pouc%2Fqlik-utils.svg)](https://badge.fury.io/gh/pouc%2Fqlik-utils)
 * [![npm version](https://badge.fury.io/js/qlik-utils.svg)](https://badge.fury.io/js/qlik-utils)
 * [![NPM monthly downloads](https://img.shields.io/npm/dm/qlik-utils.svg?style=flat)](https://npmjs.org/package/qlik-utils)
 * [![Build Status](https://travis-ci.org/pouc/qlik-utils.svg?branch=master)](https://travis-ci.org/pouc/qlik-utils)
 * [![Dependency Status](https://gemnasium.com/badges/github.com/pouc/qlik-utils.svg)](https://gemnasium.com/github.com/pouc/qlik-utils)
 * [![Coverage Status](https://coveralls.io/repos/github/pouc/qlik-utils/badge.svg?branch=master)](https://coveralls.io/github/pouc/qlik-utils?branch=master)
 * [![Known Vulnerabilities](https://snyk.io/test/github/pouc/qlik-utils/badge.svg)](https://snyk.io/test/github/pouc/qlik-utils)
 *
 * A set of utility functions for simplifying the call to Qlik Sense APIs
 *
 * @module qlik-utils
 * @typicalname utils
 * @author Loic Formont
 *
 * @copyright Copyright (C) 2017 Loic Formont
 * @license MIT Licensed
 *
 * @example
 * ```javascript
 * var utils = require("qlik-utils");
 * ```
 */
module.exports = createUtils({});
module.exports.create = createUtils;

function createUtils(utilsOptions) {
    undef.try(utilsOptions);
    
    var extPromise = undef.if(utilsOptions.promise, promise.promise);
    var returnObservable = undef.if(utilsOptions.returnObservable, false);
    
    var retVal = {
        
        /**
         * Generates a ticket on Qlik Sense QRS Api. If the targetId is not correct
         * then the ticket will redirect to the hub
         *
         * @example
         * ```javascript
         * utils.getTicket({
         *          restUri: 'https://10.76.224.72',
         *          pfx: pfx,
         *          passPhrase: ''
         *      },
         *      {
         *          UserId: 'qlikservice',
         *          UserDirectory: '2008R2-0',
         *          Attributes: []
         *      }
         * }).then(function(retVal) {
         *      console.log(retVal);
         * });
         * ```
         *
         * @memberOf Qlik
         *
         * @param {options}             options     Qlik Sense connection options
         * @param {ticketParams}        params      the ticket parameters
         * @returns {Task.<ticket>}                 a Task resolving to the generated ticket
         */
        getTicket: function(options, params) {

            // Create connection to qps
            var qpsApi = qps(options);

            // Returned object
            var task = new Task();

            // Ticket flow
            Rx.Observable
                .from(qpsApi.ticket.post(params)) 
                .catch((err) => {
                    if (err.match(/^Specified targetId .* was unknown$/)) {
                        
                        // if there was a problem with the target Id, try to generate another ticket by reseting target Id
                        task.running('warning', `Wrong targetId: '${params.TargetId}', generating a ticket to default location`);
                        delete params.TargetId;

                        return Rx.Observable.from(module.exports.getTicket(options, params));
                    } else {
                        return Rx.Observable.throw(new Error(err));
                    }
                })
                .subscribe(task);
                
            if (returnObservable) {
                return task;
            } else {
                return task.toPromise(extPromise);
            }
        },
        
        /**
         * Adds the given ip address to the websocket whitelist of the given virtual proxy.
         * Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent API
         * calls within this restart will fail miserably with various random & useless error messages.
         *
         * @example
         * ```javascript
         * readFile('./client.pfx').then(function(certif) {
         *
         *      return utils.Qlik.addToWhiteList({
         *          restUri: 'https://10.76.224.72:4242',
         *          pfx: certif,
         *          passPhrase: '',
         *          UserId: 'qlikservice',
         *          UserDirectory: '2008R2-0',
         *          params: {
         *              ip: '10.76.224.72'
         *          }
         *      });
         *
         * }).then(function(ret) {
         *      console.log(ret);
         * }, function(ret) {
         *      console.log(ret);
         * });
         * ```
         *
         * @memberOf Qlik
         *
         * @param {options}             options         Qlik Sense connection options
         * @param {string}              params          parameters to add to the whitelist
         * @param {string}              params.ip       the ip to add
         * @param {string|int}          [params.vp]     the prefix or id of the virtual proxy to update. If null or false, this function will update all vps
         * @returns {Promise.<Object>}                  a promise resolving to the virtual proxy configuration when successfull
         */
        addToWhiteList: function(options, params) {

            // create connection to qrs
            var qrsApi = qrs(options);

            var ip = params.ip;
            var vp = params.vp;
            
            // Returned object
            var task = new Task();

            // Promise chain
            // TODO: Convert this to a rx based logic
            var vpConfig = promise().then(function() {

                // Get proxy configuration
                return qrsApi.proxyservice.local.get();

            }).then(function(settings) {

                // Get virtual proxy configuration

                var vpsettings = undef.child(settings, 'settings.virtualProxies', []).filter(function(elem, index) {
                    if (undef.is(vp)) return true;
                    else if (parseInt(vp) === vp) return index == vp;
                    else return elem.prefix == vp;
                });

                return promise.all(vpsettings.map(function(vp) {
                    return qrsApi.virtualproxyconfig.id(vp.id).get();
                }));

            }).then(function(vpSettings) {

                return promise.all(vpSettings.map(function(settings) {

                    // If IP not already in whitelist

                    if (settings.websocketCrossOriginWhiteList.indexOf(ip) == -1) {

                        // Add it and push new config
                        // The mechanism with dates below makes sure that there is no desync between
                        // the client and the Qlik Sense server

                        settings.websocketCrossOriginWhiteList.push(ip);

                        var currDate = new Date();
                        var oldDate = new Date(settings.modifiedDate);
                        var newDate;

                        if (currDate > oldDate) {
                            newDate = currDate;
                        } else {
                            newDate = oldDate;
                            newDate.setSeconds(newDate.getSeconds() + 1);
                        }

                        settings.modifiedDate = newDate.toISOString();

                        return qrsApi.virtualproxyconfig.id(settings.id).put(settings);

                    } else {

                        // Else just return the VP config

                        return settings;
                    }
                }));

            });
            
            // Convert the promise chain to an observable and register our task object
            Rx.Observable.from(vpConfig).subscribe(task);
            
            if (returnObservable) {
                return task;
            } else {
                return task.toPromise(extPromise);
            }

        },
        
        /**
         * Mixins to be used with enigma.js
         */
        mixins: {
            Global: {
                types: ['Global'],
                init: function(args) {},
                extend: {

                    odag: odagMixin

                }
            },

            Doc: {
                types: ['Doc'],
                init: function(args) {
                    return args.api.getAppLayout().then((layout) => {
                        args.api.layout = layout
                    });
                },
                extend: {

                    getDimensions: getDimensionsMixin,
                    getMeasures: getMeasuresMixin,
                    getSheets: getSheetsMixin,
                    qrs: qrsMixin,
                    exportCube: exportCubeMixin,
                    createListBox: createListBoxMixin,
                    export: exportMixin

                }
            }
        }

    }
    
    function getDimensionsMixin() {
        return this.createSessionObject({
            qDimensionListDef: {
                qType: 'dimension',
                qData: {
                    title: '/qMetaDef/title',
                    tags: '/qMetaDef/tags',
                    grouping: '/qDim/qGrouping',
                    info: '/qDimInfos'
                }
            }, qInfo: {
                qId: "DimensionList",
                qType: "DimensionList"
            }
        }).then((list) => {
            return list.getLayout();
        }).then((listLayout) => {
            return listLayout.qDimensionList.qItems;
        });
    }

    function getMeasuresMixin() {
        return this.createSessionObject({
            qMeasureListDef: {
                qType: 'measure',
                qData: {
                    title: '/qMetaDef/title',
                    tags: '/qMetaDef/tags'
                }
            },
            qInfo: {
                qId: 'MeasureList',
                qType: 'MeasureList'
            }
        }).then((list) => {
            return list.getLayout();
        }).then((listLayout) => {
            return listLayout.qMeasureList.qItems;
        });
    }

    function getSheetsMixin() {
        return this.createSessionObject({
            "qInfo": {
                "qType": "SheetList"
            },
            "qAppObjectListDef": {
                "qType": "sheet",
                "qData": {
                    "title": "/qMetaDef/title",
                    "description": "/qMetaDef/description",
                    "thumbnail": "/thumbnail",
                    "cells": "/cells",
                    "rank": "/rank",
                    "columns": "/columns",
                    "rows": "/rows"
                }
                }
        }).then((list) => {
            return list.getLayout();
        }).then((listLayout) => {
            return listLayout.qAppObjectList.qItems;
        });
    }

    /**
     * Exposes qrs on the opened app
     *
     * @param options the connections infos to the QRS API
     * @returns {QRS} a QRS api object
     */
    function qrsMixin(options) {
        return qrs(options).app.id(this.layout.qFileName);
    }

    /**
     * Exports a cube
     *
     * @param cubeDef the cube definition
     * @returns {Task.<Array.<Page>>} a task resolving to the cube pages
     */
    function exportCubeMixin(cubeDef) {
        
        var app = this;
        var task = new Task();

        promise().then(function() {

            // Start

            task.running('info', 'Starting!');

        }).then(function(reply) {

            // Create cube

            return app.createSessionObject({
                qHyperCubeDef: cubeDef,
                qInfo: {
                    qType: 'mashup'
                }
            }).then(function(reply) {
                task.running('info', 'Cube generated');
                return reply;
            })

        }).then(function(sessionObject) {

            // Get cube layout

            return promise.all([
                sessionObject,
                sessionObject.getLayout().then(function(reply) {
                    task.running('info', 'Got cube layout');
                    return reply;
                })
            ])

        }).then(function([sessionObject, cubeLayout]) {

            // Get cube pages

            var columns = cubeLayout.qHyperCube.qSize.qcx;
            var totalheight = cubeLayout.qHyperCube.qSize.qcy;
            var pageheight = Math.floor(10000 / columns);
            var numberOfPages = Math.ceil(totalheight / pageheight);

            var pages = Array.apply(null, new Array(numberOfPages)).map(function(data, index) {

                return sessionObject.getHyperCubeData(
                    '/qHyperCubeDef',
                    [{
                        qTop: (pageheight * index),
                        qLeft: 0,
                        qWidth: columns,
                        qHeight: pageheight
                    }]
                ).then((page) => {
                    task.running('page', page);
                    return page;
                });

            }, this);

            return promise.all(pages).then(function(pages) {
                return promise.all([
                    sessionObject,
                    cubeLayout,
                    pages
                ]);
            });

        }).then(function([sessionObject, cubeLayout, pages]) {

            pages = [].concat.apply([], pages.map(function(item) {
                return item[0].qMatrix;
            }));

            task.done(pages);
            return pages;

        }).fail(function(err) {

            task.failed(err);
            return promise.reject(err);

        });
        
        if (returnObservable) {
            return task;
        } else {
            return task.toPromise(extPromise);
        }

    }

    /**
     * Creates a list box on a field or on a dimension
     */
    function createListBoxMixin({ id, field }) {
        return this.createObject({
            qInfo: {
                qType: 'ListObject'
            },
            qListObjectDef: {
                qStateName: '$',
                qLibraryId: undef.if(id, ''),
                qDef: {
                    qFieldDefs: undef.if(field, [field], [])
                },
                qInitialDataFetch: [{
                    qTop: 0,
                    qLeft: 0,
                    qHeight: 5,
                    qWidth: 1
                }]
            }
        }).then((object) => {
            return object.getLayout();
        })
    }
    
    /**
     * Exports a set of dimensions and measures + applies filters
     *
     * @param options
     * @param params
     * @param task
     * @returns {Task.<Array.<Row>>} a task resolving to the cube rows
     */
    function exportMixin(dimensions, measures, filters) {
        
        var app = this;
        var task = new Task();

        promise().then(function() {

            // Start

            task.running('info', 'Starting export!');

        }).then(function() {

            // Get app dimension & measure list

            return promise.all([
                app.getDimensions().then(function(dims) {
                    var dimensionMap = values(mapObj(undef.if(dimensions, {}), function(dimCode, dim) {
                        return [dimCode, {
                            dimensionCode: dimCode,
                            dimensionName: dim.name,
                            dimension: dim,
                            qlikDimension: ((dim.dimensionType == 'MASTER' || dim.dimensionType == 'AUTO') ?
                                dims.filter(function(masterDim) {
                                    return masterDim.qMeta.title == dim.name;
                                }).map(function(item) {
                                    return {
                                        qLabel: dim.name,
                                        qLibraryId: item.qInfo.qId,
                                        qNullSuppression: true
                                    };
                                }) : []).concat((dim.dimensionType == 'FIELD' || dim.dimensionType == 'AUTO') ? [{
                                qDef: {
                                    qFieldDefs: [dim.name]
                                },
                                qNullSuppression: true
                            }] : []).concat((dim.dimensionType == 'IGNORE') ? [{
                                qDef: {
                                    qFieldDefs: ['=null()']
                                },
                                qNullSuppression: false
                            }] : [])
                        }];
                    }));

                    dimensionMap = undef.if(dimensionMap, []);

                    var dimensionNotFound = dimensionMap.filter(function(item) {
                        return item.qlikDimension.length == 0;
                    });

                    if (dimensionNotFound.length != 0) {
                        task.running('dim-not-found', dimensionNotFound);
                        return promise.reject('Dimension(s) not found!');
                    } else {
                        return dimensionMap;
                    }

                }),
                app.getMeasures().then(function(meas) {
                    var measureMap = values(mapObj(undef.if(measures, {}), function(meaCode, mea) {
                        return [meaCode, {
                            measureCode: meaCode,
                            measureName: mea.name,
                            measure: mea,
                            qlikMeasure: ((mea.measureType == 'MASTER' || mea.measureType == 'AUTO') ?
                                meas.filter(function(masterMea) {
                                    return masterMea.qMeta.title == mea.name;
                                }).map(function(item) {
                                    return {
                                        qLabel: mea.name,
                                        qLibraryId: item.qInfo.qId
                                    };
                                }) : []).concat((mea.measureType == 'FIELD' || mea.measureType == 'AUTO') ? [{
                                qDef: {
                                    qDef: mea.formula,
                                    qLabel: mea.name
                                }
                            }] : []).concat((mea.measureType == 'IGNORE') ? [{
                                qDef: {
                                    qDef: '=null()'
                                }
                            }] : [])
                        }];
                    }));

                    measureMap = undef.if(measureMap, []);

                    var measureNotFound = measureMap.filter(function(item) {
                        return item.qlikMeasure.length == 0;
                    });

                    if (measureNotFound.length != 0) {
                        task.running('mea-not-found', measureNotFound);
                        return promise.reject('Measure(s) not found!');
                    } else {
                        return measureMap;
                    }

                })
            ]);

        }).then(function([dimensionMap, measureMap]) {

            // Create cube

            task.running('info', 'Got measures & dimensions from app');

            var cubeDef = {
                qInitialDataFetch: [{qHeight: 0, qWidth: 0}]
            };

            if (dimensionMap.length > 0) {
                cubeDef.qDimensions = dimensionMap.map(function(item) {
                    return item.qlikDimension[0];
                });
            }

            if (measureMap.length > 0) {
                cubeDef.qMeasures = measureMap.map(function(item) {
                    return item.qlikMeasure[0];
                });
            }

            var next = promise();
            if (typeof filters !== 'undefined') {

                next = next.then(function() {
                    return app.clearAll();
                }).then(function() {
                    var step = promise.resolve([]);
                    filters.filter(function(item) {
                        return item.filters.length != 0;
                    }).map(function(filter, index) {
                        
                        function promiseFactory() {
                            return promise().then(function() {
                                return app.getField(filter.field);
                            }).then(function(field) {
                                return field.selectValues(
                                    filter.filters.map(function(item) {
                                        return {qText: item};
                                    }),
                                    false,
                                    false
                                );
                            }).then(function() {
                                return app.createListBox({field: filter.field});
                            });
                        }

                        step = step.then(function(layouts) {
                            return promiseFactory().then(function(layout) {
                                layouts.push(layout);
                                return layouts;
                            });
                        });
                    });

                    return step.then(function(layouts) {
                        var states = layouts.map(function(layout) {
                            return layout.qListObject.qDimensionInfo.qStateCounts.qSelected != 0;
                        });
                        
                        if (!states.every(function(state) { return state; })) {
                            return promise.reject('Not possible to apply desired filters');
                        } else {
                            return promise.resolve('Filtering done');
                        }
                    }).fail(function(err) {
                        task.running('warning', err);
                    });
                });
            }

            return next.then(function() {
                return Rx.Observable.from(app.exportCube(cubeDef)).toPromise(promise.promise);
            });

        }).then(function(reply) {

            // Call callback function

            var pages = reply.map(function(row) {
                return row.map(function(cell) {
                    return cell.qNum !== 'NaN' ? Math.round(cell.qNum, 5) : (cell.qIsNull ? null : cell.qText);
                });
            });

            task.done(pages);
            return pages;

        }).fail(function(err) {

            task.failed(err);
            return promise.reject(err);

        });
        
        if (returnObservable) {
            return task;
        } else {
            return task.toPromise(extPromise);
        }
    }
    
    /**
     * @typedef {Object} replaceDef
     * @param {string} marker to be found in the script and replaced during the duplication.
     * @param {string} value the value to replace in the script
     */

    /**
     * @typedef {Object} cloneDef
     * @param {Array.<replaceDef>|replaceDef} replaces the list of values to be replaced. If this parameter is null or false, the script is not updated
     * @param {boolean} [duplicateApp=true] duplicates the template app. Overrides parent duplicateApp if defined
     * @param {boolean} [reloadApp=parent value] reload the app. Overrides parent reloadApp if defined
     * @param {boolean} [keepApp=parent value] keep the app when the operation finished. If false, app will be deleted. Overrides parent keepApp if defined
     * @param {boolean} [overwriteApp=parent value] Overwrite the replace app if it exists. If false, and if replace app exists, nothing will happen. Overrides parent replaceApp if defined
     * @param {boolean|string} [replaceApp=parent value] name or id of the app to replace. Can also be boolean (when false, don't replace the app, when true, replace the app which name == targetApp). Overrides parent replaceApp if defined
     * @param {string} [targetApp=parent value] name of the new app. Overrides parent targetApp if defined
     * @param {string} [publishStream] name or id of the stream to publish the new app in. If this parameter is null or false, then the app is not published. Overrides parent publishStreamId if defined
     * @param {boolean|Qlik.reloadTask} [createReloadTask=true]  create a reload task associated to the generated app. If true, create a task with a daily trigger @ 4AM. If a reload task already exists it will be overwritten. If null or false, do nothing. Overrides parent createReloadTask if defined
     * @param {Object} [customProperties] custom properties to add to the newly created app. If this parameter is null or false, then the custom properties are not changed. Overrides parent customProperties if defined
     */

    /**
     * Duplicates a template app, updates its script, reloads it and publishes it
     *
     * @example Simple mode 1 : duplicate a template app, replace a marker in the script, reload and publish (overwrites if target app exists in stream)
     * ```javascript
     * var task = new utils.Core.Task();
     * task.start();
     *
     * task.bind(function(task) {
     *      console.log(task.val, task.detail);
     * });
     *
     * readFile(testQlikSensePfx).then(function(pfx) {
     *
     *      task.running('info', 'certificate loaded...');
     *
     *      return utils.Qlik.dynamicAppClone({
     *              restUri: 'http://10.20.30.40',
     *              pfx: pfx,
     *              UserId: 'qlikservice',
     *              UserDirectory: '2008R2-0'
     *          },
     *          {
     *              templateApp: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
     *              replacesDef: { marker: '%Replace me!%', value: 'Employees.qvd' },
     *              publishStream: 'aaec8d41-5201-43ab-809f-3063750dfafd'
     *          },
     *          task: task
     *      });
     *
     * });
     * ```
     *
     * @example Simple mode 2 : duplicate a template app, replace 3 markers in the script, reload and don't publish
     * ```javascript
     * var task = new utils.Core.Task();
     * task.start();
     *
     * task.bind(function(task) {
     *      console.log(task.val, task.detail);
     * });
     *
     * readFile(testQlikSensePfx).then(function(pfx) {
     *
     *      task.running('info', 'certificate loaded...');
     *
     *      return utils.Qlik.dynamicAppClone({
     *              restUri: 'http://10.20.30.40',
     *              pfx: pfx,
     *              UserId: 'qlikservice',
     *              UserDirectory: '2008R2-0'
     *          },
     *          {
     *              templateApp: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
     *              replacesDef: [
     *                  { marker: '%Replace me1!%', value: 'Employees1.qvd' },
     *                  { marker: '%Replace me2!%', value: 'Employees2.qvd' },
     *                  { marker: '%Replace me3!%', value: 'Employees3.qvd' }
     *              ]
     *          },
     *          task: task
     *      });
     *
     * });
     * ```
     *
     * @example Advanced mode 1: clone a template app twice:
     *  - first app will be called 'White App' and will have the markers replaced to 1 & 2 qvds. Don't reload it but save it. When publishing it, replace the app with name 'White App' already existing in the stream.
     *  - second app will be called 'Black App' and will have the markers replaced to 3 & 4 qvds. Reload it. Don't save it (delete the copy). Don't publish it.
     *
     * ```javascript
     * var task = new utils.Core.Task();
     * task.start();
     *
     * task.bind(function(task) {
     *      console.log(task.val, task.detail);
     * });
     *
     * readFile(testQlikSensePfx).then(function(pfx) {
     *
     *      task.running('info', 'certificate loaded...');
     *
     *      return utils.Qlik.dynamicAppClone({
     *              restUri: 'http://10.20.30.40',
     *              pfx: pfx,
     *              UserId: 'qlikservice',
     *              UserDirectory: '2008R2-0'
     *          },
     *          {
     *              templateApp: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
     *              replacesDef: [
     *                  {
     *                      replaces: [
     *                          { marker: '%Replace me1!%', value: 'Employees1.qvd' }
     *                          { marker: '%Replace me2!%', value: 'Employees2.qvd' }
     *                      ],
     *                      replaceApp: 'White App',
     *                      reloadApp = false,
     *                      targetApp: 'White App'
     *                  },
     *                  {
     *                      replaces: [
     *                          { marker: '%Replace me1!%', value: 'Employees3.qvd' }
     *                          { marker: '%Replace me2!%', value: 'Employees4.qvd' }
     *                      ],
     *                      keepApp = false,
     *                      targetApp: 'Black App'
     *                      publishStream: false
     *                  }
     *              ],
     *              reloadApp = true,
     *              replaceApp = false,
     *              publishStream: 'aaec8d41-5201-43ab-809f-3063750dfafd'
     *          },
     *          task: task
     *      });
     *
     * });
     * ```
     *
     * @memberOf Qlik
     *
     * @param {options}                                             options                         Qlik Sense connection options
     * @param {string}                                              params                          parameters for the cloning
     * @param {string}                                              params.templateApp              name or id of the template application
     * @param {int}                                                 [params.maxParDup=1]            maximum number of // operations (opened sockets & QRS API queries)
     * @param {Array.<replaceDef|cloneDef>|replaceDef|cloneDef}     [params.replacesDef]            definition of script replacement(s) to perform and parameters of the app to generate. If this parameter is null or false, the script is not updated
     * @param {boolean}                                             [params.duplicateApp=true]      duplicates the template app
     * @param {boolean}                                             [params.reloadApp=true]         reload the app
     * @param {boolean}                                             [params.keepApp=true]           keep the app when the operation finished. If false, app will be deleted
     * @param {boolean}                                             [params.overwriteApp=true]      Overwrite the replace app if it exists. If false, and if replace app exists, nothing will happen
     * @param {RegExp}                                              [params.reloadRegex=/(.*)/]     regex to track in the script reload trace. If this parameter is null or false, uses default regex that captures everything
     * @param {boolean|string}                                      [params.replaceApp=true]        name or id of the app to replace. Can also be boolean (when false, don't replace the app, when true, replace the app with name == targetApp)
     * @param {string}                                              [params.targetApp=default]      name of the new app. Defaults to %(templateAppName)s %(replace.value)s
     * @param {string}                                              [params.publishStream]          name or id of a stream to publish the new app in. If this parameter is null or false, then the app is not published
     * @param {boolean|Qlik.reloadTask}                             [params.createReloadTask=true]  create a reload task associated to the generated app. If true, create a task with a daily trigger @ 4AM. If a reload task already exists it will be overwritten. If null or false, do nothing.
     * @param {Object}                                              [params.customProperties]       custom properties to add to the newly created app. If this parameter is null or false, then the custom properties are not changed.
     * @param {Task}                                                task                            task that will trace the cloning progress
     * @returns {Promise}                                                                           a promise that resolves when the process is finished
     */
    function odagMixin(options, params) {

        var qrsApi = qrs(options);
        
        var global = this;
        var task = new Task();
        
        var templateApp = params.templateApp;

        if (typeof templateApp == 'undefined') {
            return promise.reject('Please provide the templateApp parameter');
        }

        var maxParDup = undef.if(params.maxParDup, 1);

        // Handles parameters default values

        var defaultReplaceApp = '%(targetAppName)s';
        var defaultTargetApp = '%(templateAppName)s %(replaceValue)s';
        var defaultCreateReloadTask = {
            task: {
                name: 'Reload for %(targetAppName)s',
                taskType: 0,
                enabled: true,
                taskSessionTimeout: 1440,
                maxRetries: 0,
                tags: [],
                app: {},
                isManuallyTriggered: false,
                customProperties: []
            },
            compositeEvents: [],
            schemaEvents: [{
                name: 'Hourly',
                enabled: true,
                eventType: 0,
                startDate: '2016-01-01T00:00:00.000Z',
                expirationDate: '9999-12-30T23:00:00.000Z',
                schemaFilterDescription: ['* * - * * * * *'],
                incrementDescription: '0 1 0 0',
                incrementOption: '1',
                privileges: ['read','update','create','delete']
            }]
        };

        var replacesDef = undef.if(params.replacesDef, false);
        var duplicateApp = undef.if(params.duplicateApp, true);
        var reloadApp = undef.if(params.reloadApp, true);
        var keepApp = undef.if(params.keepApp, true);
        var overwriteApp = undef.if(params.overwriteApp, true);
        var replaceFullRow = undef.if(params.replaceFullRow, false);
        var reloadRegex = undef.if(params.reloadRegex, /(.*)/);
        var replaceApp = undef.if(params.replaceApp, defaultReplaceApp);
        var targetApp = undef.if(params.targetApp, defaultTargetApp);
        var publishStream = undef.if(params.publishStream, false);
        var createReloadTask = undef.if(params.createReloadTask, false);
        var customProperties = undef.if(params.customProperties, false);

        // Convert simplified syntax to advanced syntax

        if (replacesDef && !Array.isArray(replacesDef)) {
            replacesDef = [replacesDef];
        }

        replacesDef = replacesDef.map(function(item) {
            var retVal = {};

            if (typeof item.replaces === 'undefined' && typeof item.marker !== 'undefined' && typeof item.value !== 'undefined') {
                var newReplace = {marker: item.marker, value: item.value};
                if (typeof item.fullRow !== 'undefined') newReplace.fullRow = item.fullRow;
                retVal.replaces = [newReplace];
            } else if (typeof item.replaces === 'undefined' && typeof item.marker === 'undefined' && typeof item.value === 'undefined') {
                retVal.replaces = false;
            } else if (typeof item.replaces !== 'undefined' && !Array.isArray(item.replaces)) {
                retVal.replaces = [item.replaces];
            } else if (typeof item.replaces !== 'undefined' && Array.isArray(item.replaces)) {
                retVal.replaces = item.replaces;
            } else {
                task.running('warning', 'Unhandled replace parameter: %s', item);
                return undefined;
            }

            retVal.replaces.forEach(function(replace) {
                if (!Array.isArray(replace.value))
                    replace.value = [replace.value];
            });

            retVal.duplicateApp = undef.if(item.duplicateApp, duplicateApp);
            retVal.reloadApp = undef.if(item.reloadApp, reloadApp);
            retVal.keepApp = undef.if(item.keepApp, keepApp);
            retVal.overwriteApp = undef.if(item.overwriteApp, overwriteApp);
            retVal.replaceApp = undef.if(item.replaceApp, replaceApp);
            retVal.targetApp = undef.if(item.targetApp, targetApp);
            retVal.publishStream = undef.if(item.publishStream, publishStream);
            retVal.createReloadTask = undef.if(item.createReloadTask, createReloadTask);
            retVal.customProperties = undef.if(item.customProperties, customProperties);

            if (retVal.replaceApp == true) {
                retVal.replaceApp = defaultReplaceApp;
            }

            if (retVal.targetApp == true) {
                retVal.targetApp = defaultTargetApp;
            }

            if (retVal.createReloadTask == true) {
                retVal.createReloadTask = defaultCreateReloadTask;
            }

            if (retVal.customProperties && !Array.isArray(retVal.customProperties)) {
                retVal.customProperties = [retVal.customProperties];
            }

            if (retVal.customProperties) {
                retVal.customProperties.forEach(function(customProperty) {
                    if (customProperty.values && !Array.isArray(customProperty.values)) {
                        customProperty.values = [customProperty.values];
                    }
                });
            }

            return retVal;
        }).filter(function(item) {
            return typeof item !== 'undefined';
        });

        replacesDef = replacesDef.map(function(item) {
            return item.replaces.map(function(replace) {
                return replace.value.map(function(val) {
                    return {marker: replace.marker, value: val, fullRow: ((typeof replace.fullRow !== 'undefined') ? replace.fullRow : false)};
                });
            }).reduce(function(pv, cv) {
                var retVal = [];
                cv.forEach(function(cvitem) {
                    pv.forEach(function(pvitem) {
                        retVal.push(pvitem.concat([cvitem]));
                    });
                });

                return retVal;
            }, [[]]).map(function(replace) {
                return {
                    replace: replace,
                    duplicateApp: item.duplicateApp,
                    reloadApp: item.reloadApp,
                    keepApp: item.keepApp,
                    overwriteApp: item.overwriteApp,
                    replaceApp: item.replaceApp,
                    targetApp: item.targetApp,
                    publishStream: item.publishStream,
                    createReloadTask: (item.createReloadTask) ? extend(true, {}, item.createReloadTask) : false,
                    customProperties: (item.customProperties) ? extend(true, [], item.customProperties) : false
                };
            });
        }).reduce(function(pv, cv) {
            return pv.concat(cv);
        });

        // If no clone task was provided, just return an empty array

        if (replacesDef.length == 0) {
            task.done([]);
        } else {

            // Else start the cloning process

            promise().then(function() {

                // Start

                task.running('info', 'Starting!');

            }).then(function(reply) {

                // Connected

                return promise.all([
                    global.getDocList().then(function(reply) {
                        task.running('info', 'Got document List');
                        return reply;
                    }),
                    global.getStreamList().then(function(reply) {
                        task.running('info', 'Got Stream List');
                        return reply;
                    }),
                    qrsApi.custompropertydefinition.get()
                ]);

            }).then(function([docList, streamList, cpList]) {

                // Replace stream & app names by ids

                // Looping on replace definition

                var pendingActions = [];
                var missingCpValues = {};
                var templateFound;
                replacesDef.forEach(function(replaceDef) {

                    //<editor-fold desc="Make sure the publish stream is an id and not a name">

                    if (replaceDef.publishStream && !replaceDef.publishStream.match(/^[a-f0-9\-]{36}$/)) {

                        task.running('info', 'Stream to publish into is an stream name (%s), trying to find the associated id', replaceDef.publishStream);

                        var arrayStreamFound = streamList.filter(function(item) {
                            return (item.qName == replaceDef.publishStream);
                        });

                        if (arrayStreamFound.length > 1) {
                            task.running('warning', 'Several streams found : %s, using first one (%s)', arrayStreamFound.map(function(app) {
                                return app.qId;
                            }), arrayStreamFound[0].qId);
                        } else if (arrayStreamFound.length == 0) {
                            pendingActions.push(promise.reject('Stream not found: ' + replaceDef.publishStream));
                            return;
                        } else {
                            task.running('info', 'Stream found');
                        }

                        replaceDef.publishStream = arrayStreamFound[0].qId;

                    } else if (replaceDef.publishStream) {

                        task.running('info', 'Stream to publish into is an id (%s), checking if it exists', replaceDef.publishStream);

                        var arrayStreamFound = streamList.filter(function(item) {
                            return (item.qId == replaceDef.publishStream);
                        });

                        if (arrayStreamFound.length == 0) {
                            pendingActions.push(promise.reject('No :( Stream not found: ' + replaceDef.publishStream));
                            return;
                        } else {
                            task.running('info', 'Yes! Stream found');
                        }

                    }

                    //</editor-fold>

                    //<editor-fold desc="Make sure the template app is an id and not a name">

                    var arrayTemplateFound = docList.filter(function(item) {
                        return (templateApp.match(/^[a-f0-9\-]{36}$/) && item.qDocId == templateApp) ||
                            (!templateApp.match(/^[a-f0-9\-]{36}$/) && item.qDocName == templateApp);
                    });

                    if (arrayTemplateFound.length > 1) {
                        task.running('warning', 'Several apps found : %s, using first one (%s)', arrayTemplateFound.map(function(app) {
                            return app.qDocId;
                        }), arrayTemplateFound[0].qDocId);
                    } else if (arrayTemplateFound.length == 0) {
                        pendingActions.push(promise.reject('Template not found: ' + templateApp));
                        return;
                    } else {
                        task.running('info', 'Template found');
                    }

                    templateFound = arrayTemplateFound[0];

                    //</editor-fold>

                    //<editor-fold desc="Replace sprintf values">

                    var replaceDic = docList.map(function(doc) {
                        return {key: doc.qDocId, value: doc.qDocName};
                    }).reduce(function(pv, cv) {
                        pv[cv.key] = cv.value;
                        return pv;
                    }, {});

                    var replaceValue = replaceDef.replace.map(function(item) {
                        return item.value;
                    }).reduce(function(pv, cv) {
                        return sprintf('%s %s', pv, cv);
                    });

                    if (replaceDef.targetApp)
                        replaceDef.targetApp = sprintf(replaceDef.targetApp, {templateAppId: arrayTemplateFound[0].qDocId, templateAppName: replaceDic[arrayTemplateFound[0].qDocId], replaceValue: replaceValue, replace: replaceDef.replace});

                    if (replaceDef.replaceApp)
                        replaceDef.replaceApp = sprintf(replaceDef.replaceApp, {templateAppId: arrayTemplateFound[0].qDocId, templateAppName: replaceDic[arrayTemplateFound[0].qDocId], replaceValue: replaceValue, replace: replaceDef.replace, targetAppName: replaceDef.targetApp});

                    if (replaceDef.createReloadTask && replaceDef.createReloadTask.task && replaceDef.createReloadTask.task.name)
                        replaceDef.createReloadTask.task.name = sprintf(replaceDef.createReloadTask.task.name, {templateAppId: arrayTemplateFound[0].qDocId, templateAppName: replaceDic[arrayTemplateFound[0].qDocId], replaceValue: replaceValue, replace: replaceDef.replace, targetAppName: replaceDef.targetApp});

                    if (replaceDef.customProperties)
                        replaceDef.customProperties.forEach(function(customProperty) {
                            if (customProperty.values) {
                                customProperty.values = customProperty.values.map(function(value) {
                                    return sprintf(value, {templateAppId: arrayTemplateFound[0].qDocId, templateAppName: replaceDic[arrayTemplateFound[0].qDocId], replaceValue: replaceValue, replace: replaceDef.replace, targetAppName: replaceDef.targetApp});
                                });
                            }
                        });

                    //</editor-fold>

                    //<editor-fold desc="Make sure the replace apps are ids and not names">

                    if (replaceDef.replaceApp && !replaceDef.replaceApp.match(/^[a-f0-9\-]{36}$/)) {

                        task.running('info', 'App to replace is an app name (%s), trying to find the associated id', replaceDef.replaceApp);

                        var arrayAppFound = docList.filter(function(item) {
                            return (
                                item.qDocName == replaceDef.replaceApp &&
                                (
                                    (replaceDef.publishStream && item.qMeta.stream && item.qMeta.stream.id == replaceDef.publishStream) ||
                                    (!replaceDef.publishStream && !item.published)
                                )
                            );
                        });

                        if (arrayAppFound.length > 1) {
                            task.running('warning', 'Several apps found : %s, using first one (%s)', arrayAppFound.map(function(app) {
                                return app.qDocId;
                            }), arrayAppFound[0].qDocId);
                            replaceDef.replaceApp = arrayAppFound[0].qDocId;
                        } else if (arrayAppFound.length == 0) {
                            task.running('warning', 'App not found (%s)', replaceDef.replaceApp);
                            replaceDef.replaceApp = false;
                        } else {
                            task.running('info', 'App found');
                            replaceDef.replaceApp = arrayAppFound[0].qDocId;
                        }

                    } else if (replaceDef.replaceApp) {

                        task.running('info', 'App to replace is an id (%s), checking if it exists', replaceDef.replaceApp);

                        var arrayAppFound = docList.filter(function(item) {
                            return (item.qDocId == replaceDef.replaceApp && item.qMeta.stream && item.qMeta.stream.id == replaceDef.publishStream);
                        });

                        if (arrayAppFound.length == 0) {
                            task.running('warning', 'App not found (%s)', replaceDef.replaceApp);
                            replaceDef.replaceApp = false;
                        } else {
                            task.running('info', 'App found');
                        }

                    }

                    //</editor-fold>

                    //<editor-fold desc="Make sure custom properties are ids and that values exist">

                    if (replaceDef.customProperties) {

                        replaceDef.customProperties.forEach(function(customProperty) {

                            var arrayCpFound = cpList.filter(function(item) {
                                return (item.name == customProperty.name && !customProperty.name.match(/^[a-f0-9\-]{36}$/)) ||
                                    (item.id == customProperty.name && customProperty.name.match(/^[a-f0-9\-]{36}$/));
                            });

                            if (arrayCpFound.length > 1) {
                                task.running('warning', 'Several matching custom properties found : %s, using first one (%s)', arrayCpFound.map(function(cp) {
                                    return cp.id;
                                }), arrayCpFound[0].id);
                            } else if (arrayCpFound.length == 0) {
                                pendingActions.push(promise.reject('Custom property not found: ' + customProperty.name));
                                return;
                            } else {
                                task.running('info', 'Custom property found');
                            }

                            customProperty.name = arrayCpFound[0].id;

                            if (typeof missingCpValues[arrayCpFound[0].id] === 'undefined') {
                                missingCpValues[arrayCpFound[0].id] = [];
                            }

                            var missingValues = missingCpValues[arrayCpFound[0].id];
                            customProperty.values.forEach(function(value) {
                                if (arrayCpFound[0].choiceValues.indexOf(value) < 0 && missingValues.indexOf(value) < 0) {
                                    missingValues.push(value);
                                }
                            });
                        });

                    }

                    //</editor-fold>

                });

                Object.keys(missingCpValues).forEach(function(cpkey) {
                    var missingValues = missingCpValues[cpkey];

                    var addToCp = qrsApi.custompropertydefinition.id(cpkey).get().then(function(cp) {

                        if (cp.objectTypes.indexOf('App') < 0) {
                            return promise.reject('Custom property is not applicable to Apps...');
                        }

                        if (missingValues.length > 0) {
                            task.running('warning', 'Adding missing values in custom property: %s', missingValues);
                            cp.choiceValues = cp.choiceValues.concat(missingValues);
                            return qrsApi.custompropertydefinition.id(cpkey).put(cp);
                        }

                    });

                    pendingActions.push(addToCp);
                });

                return promise.all(pendingActions).then(function() {
                    return promise.all([
                        templateFound.qDocId,
                        templateFound.qDocName
                    ]);
                });

            }).then(function([templateId, templateName]) {

                // Clone app

                var newAppsStep = promise.resolve([]);
                var newApps = [];
                arrayDivide(replacesDef, maxParDup).forEach(function(scriptReplacesChunk) {
                    var newAppsChunk = [];

                    scriptReplacesChunk.forEach(function(scriptReplace) {
                        newAppsChunk.push(
                            function() {

                                if (!scriptReplace.duplicateApp) {

                                    task.running('warning', 'Working directly on template app (%s)!', templateId);

                                    return qrsApi.app.id(templateId).get().then(function(reply) {
                                        scriptReplace.publishStream = (reply.published ? false : scriptReplace.publishStream);
                                        scriptReplace.replaceApp = false;

                                        return {
                                            scriptReplace: scriptReplace,
                                            clonedApp: reply
                                        };
                                    });

                                } else if (scriptReplace.replaceApp && !scriptReplace.overwriteApp) {

                                    task.running('info', 'App already exists! Working on existing app (%s)', scriptReplace.replaceApp);

                                    return qrsApi.app.id(scriptReplace.replaceApp).get().then(function(reply) {
                                        scriptReplace.publishStream = (reply.published ? false : scriptReplace.publishStream);
                                        scriptReplace.replaceApp = false;

                                        return {
                                            scriptReplace: scriptReplace,
                                            clonedApp: reply
                                        };
                                    });

                                } else {

                                    var targetAppName = scriptReplace.targetApp;
                                    task.running('info', 'Generating clone named \'%s\'', targetAppName);

                                    return qrsApi.app.id(templateId).copy.post(undefined, {name: targetAppName}).then(function(clonedApp) {
                                        task.running('info', 'Clone named \'%s\' created successfully with id: %s', targetAppName, clonedApp.id);
                                        return {
                                            scriptReplace: scriptReplace,
                                            clonedApp: clonedApp
                                        };
                                    });
                                }
                            }
                        );
                    });

                    newAppsStep = newAppsStep.then(function(reply) {
                        newApps = newApps.concat(reply);
                        return promise.all(newAppsChunk.map(function(promiseFactory) {
                            return promiseFactory();
                        }));
                    });

                });

                return newAppsStep.then(function(reply) {
                    return newApps.concat(reply);
                });

            }).then(function(newApps) {

                // Perform modifications on clone

                // Replace script marker and reload in //
                // Only if marker is not null!

                var newAppsScriptReplacedStep = promise.resolve([]);
                var newAppsScriptReplaced = [];
                arrayDivide(newApps, maxParDup).forEach(function(newAppsChunk) {

                    var newAppsScriptReplacedChunk = [];
                    newAppsChunk.forEach(function(newApp) {

                        newAppsScriptReplacedChunk.push(
                            function() {

                                var step = promise();

                                // If nothing to do just return

                                if (!(newApp.scriptReplace.replace || newApp.scriptReplace.reloadApp || newApp.scriptReplace.publishStream)) return promise.resolve([]);

                                // If anything to do, open socket

                                if (newApp.scriptReplace.replace || newApp.scriptReplace.reloadApp) {

                                    step = step.then(function() {

                                        return global.openDoc(newApp.clonedApp.id).then(function(reply) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Doc opened'});
                                            return reply;
                                        })

                                    });

                                }

                                // If a replace is required, do it!

                                if (newApp.scriptReplace.replace) {

                                    step = step.then(function(clonedApp) {

                                        // Replace the script marker by the replace value

                                        task.running('info', {id: newApp.clonedApp.id, msg: 'Application opened'});

                                        return promise().then(function() {
                                            return clonedApp.getScript();
                                        }).then(function(result) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application script extracted'});

                                            var newScript = result;
                                            newApp.scriptReplace.replace.forEach(function(replace) {
                                                if (replace.fullRow) {
                                                    var re = new RegExp(sprintf('^.*%s.*$', replace.marker), 'm');
                                                    newScript = newScript.replace(re, sprintf('%s // %s', replace.value, replace.marker));
                                                } else {
                                                    newScript = newScript.replace(replace.marker, replace.value);
                                                }
                                            });

                                            return clonedApp.setScript(newScript);
                                        }).then(function() {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application script replaced'});
                                            return clonedApp.doSave();
                                        }).then(function() {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application saved'});
                                            return clonedApp;
                                        })

                                    });

                                }

                                // If a reload is required, do it!

                                if (newApp.scriptReplace.reloadApp) {

                                    step = step.then(function(clonedApp) {

                                        // Reload and monitor reload progress

                                        var timer = setInterval(function() {
                                            global.getProgress(0).then(function(result) {
                                                if (result.qPersistentProgress) {
                                                    var rePattern = new RegExp(reloadRegex);
                                                    var match = rePattern.exec(result.qPersistentProgress);
                                                    while (match != null) {
                                                        task.running('reload', {id: newApp.clonedApp.id, msg: match[1]});
                                                        match = rePattern.exec(result.qPersistentProgress);
                                                    }
                                                }
                                            });
                                        }, 1000);

                                        return clonedApp.doReload().then(function(result) {
                                            if (result) {
                                                clearInterval(timer);

                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Application reloaded'});

                                                if (newApp.clonedApp.published) {

                                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Save not needed!'});
                                                    return clonedApp;

                                                } else {

                                                    return clonedApp.doSave().then(function() {

                                                        task.running('info', {id: newApp.clonedApp.id, msg: 'Application saved'});
                                                        return clonedApp;

                                                    });

                                                }
                                            } else {
                                                
                                                return clonedApp.doSave().then(function() {

                                                    return promise.reject({id: newApp.clonedApp.id, msg: 'Application not reloaded'});

                                                });
                                                
                                                
                                            }
                                        });

                                    });
                                }

                                // If a publish is required, do it!

                                if (newApp.scriptReplace.publishStream) {

                                    step = step.then(function(clonedApp) {

                                        // Publish app in the given stream

                                        if (!newApp.scriptReplace.replaceApp) {

                                            // No app to replace

                                            return clonedApp.publish(newApp.scriptReplace.publishStream).then(function() {
                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Application published'});
                                                return clonedApp;
                                            })

                                        } else {

                                            // There was an app to replace. We need to use QRS API to publish it

                                            return qrsApi.app.id(newApp.clonedApp.id).replace.put(undefined, {app: newApp.scriptReplace.replaceApp}).then(function(repApp) {

                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Application published (replaced)'});

                                                return qrsApi.app.id(newApp.clonedApp.id).delete().then(function() {
                                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Removed unpublished app'});

                                                    newApp.clonedApp = repApp;

                                                    return;
                                                });
                                            });
                                        }
                                    });

                                } else {

                                    // Don't publish app. Let's check if we need to replace an unpublished app

                                    if (newApp.scriptReplace.replaceApp && !newApp.clonedApp.published) {

                                        step = step.then(function() {

                                            return qrsApi.app.id(newApp.scriptReplace.replaceApp).delete().then(function() {
                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Removed unpublished app'});
                                                return;
                                            });

                                        });

                                    }

                                }

                                // If it is not required to keep the app after all this process (who knows...), just delete it!

                                if (!newApp.scriptReplace.keepApp) {

                                    step = step.then(function() {

                                        // Delete app

                                        return qrsApi.app.id(newApp.clonedApp.id).delete().then(function() {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Removed cloned app'});
                                            return;
                                        });

                                    });

                                } else {

                                    // Else we can check the reload task

                                    if (newApp.scriptReplace.createReloadTask) {

                                        step = step.then(function() {

                                            return qrsApi.reloadtask.full.get().then(function(tasks) {
                                                return tasks.filter(function(task) {
                                                    return task.app.id == newApp.clonedApp.id;
                                                });
                                            }).then(function(reply) {

                                                if (reply.length > 0) {
                                                    task.running('warning', {id: newApp.clonedApp.id, msg: 'Reload task already exists on this app. Ignoring reload task creation...'});
                                                } else {
                                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Creating new reload task'});

                                                    newApp.scriptReplace.createReloadTask.task.app.id = newApp.clonedApp.id;

                                                    return qrsApi.reloadtask.create.post(newApp.scriptReplace.createReloadTask).then(function(reloadTask) {
                                                        task.running('info', {id: newApp.clonedApp.id, msg: 'Reload task created'});
                                                    });

                                                }

                                            });

                                        });

                                    }

                                    // And the custom properties

                                    if (newApp.scriptReplace.customProperties) {

                                        step = step.then(function() {

                                            return qrsApi.app.id(newApp.clonedApp.id).get()

                                        }).then(function(appDef) {

                                            appDef.customProperties = newApp.scriptReplace.customProperties.map(function(customProperty) {
                                                return customProperty.values.map(function(value) {
                                                    return {
                                                        value: value,
                                                        definition: {
                                                            id: customProperty.name
                                                        }
                                                    };
                                                });
                                            }).reduce(function(pv, cv) {
                                                return pv.concat(cv);
                                            });

                                            return qrsApi.app.id(newApp.clonedApp.id).put(appDef);

                                        });

                                    }
                                }

                                step = step.then(function() {
                                    task.running('odag', newApp.clonedApp.id);
                                    return newApp.clonedApp.id;
                                });

                                return step;

                            }
                        );

                    });

                    newAppsScriptReplacedStep = newAppsScriptReplacedStep.then(function(reply) {
                        newAppsScriptReplaced = newAppsScriptReplaced.concat(reply);
                        return promise.all(newAppsScriptReplacedChunk.map(function(promiseFactory) {
                            return promiseFactory();
                        }));
                    });

                });

                return newAppsScriptReplacedStep.then(function(reply) {
                        return newAppsScriptReplaced.concat(reply);
                });
                
            }).then(function(val) {
                
                task.done(val);

            }).fail(function(err) {

                task.failed(err);
                return promise.reject(err);

            });
            
        }
        
        if (returnObservable) {
            return task;
        } else {
            return task.toPromise(extPromise);
        }

    }
    
    function loopAndReloadMixin(options, params) {
        
        var global = this;
        var task = new Task();

        var loopColumn = params.loop.loopColumn;
        var reduceColumn = params.loop.reduceColumn;
        var nameColumn = params.loop.nameColumn;
        var publishColumn = params.loop.publishColumn;

        var dimensions = {
            loopColumn: {name: loopColumn, dimensionType: undef.if(loopColumn, 'AUTO', 'IGNORE')},
            reduceColumn: {name: reduceColumn, dimensionType: undef.if(reduceColumn, 'AUTO', 'IGNORE')},
            nameColumn: {name: nameColumn, dimensionType: undef.if(nameColumn, 'AUTO', 'IGNORE')},
            publishColumn: {name: publishColumn, dimensionType: undef.if(publishColumn, 'AUTO', 'IGNORE')}
        };

        var retVal = global.openDoc(params.loop.appId).then((app) => {
            task.running('Doc opened');
            return Rx.Observable.from(app.export(dimensions)).toPromise(promise.promise);
            
        }).then(function(reply) {
            task.running('Export done');
            
            var dynamicCloneParams = extend(true, {}, params.reload, {
                maxParDup: undef.child(params, ['reload', 'maxParDup'], 5),
                replacesDef: reply.map(function(item) {
                    return {
                        replaces: undef.child(params, ['loopReload', 'addReplaces'], []).concat(
                            [{
                                marker: undef.child(params, ['loopReload', 'loopMarker'], '%Replace me!%'),
                                value: undef.if(reduceColumn, item[1], undefined)
                            }]
                        ),
                        targetApp: undef.if(nameColumn, item[2], undefined),
                        publishStream: undef.if(publishColumn, item[3], undefined)
                    };
                }),
                overwriteApp: undef.child(params, ['reload', 'overwriteApp'], false)
            });

        });
        
        return Rx.Observable.from(global.odag(options, dynamicCloneParams)).toPromise(promise.promise);

    }
    
    return retVal;
}



                