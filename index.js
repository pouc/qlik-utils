'use strict';

var Rx = require('rxjs/Rx');
var promise = require('q');
var mapObj = require('map-obj');
var values = require('object.values');

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
            Doc: {
                types: ['Doc'],
                init: (args) => {},
                extend: {

                    getDimensions: function() {
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
                    },

                    getMeasures: function() {
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
                    },

                    getSheets: function() {
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
                    },
                    
                    /**
                     * Exports a cube
                     *
                     * @param cubeDef the cube definition
                     * @returns {Task.<Array.<Page>>} a task resolving to the cube pages
                     */
                    exportCube: function(cubeDef) {
                        
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

                    },

                    /**
                     * Exports a set of dimensions and measures + applies filters
                     *
                     * @param options
                     * @param params
                     * @param task
                     * @returns {Task.<Array.<Row>>} a task resolving to the cube rows
                     */
                    export: function(dimensions, measures, filters) {
                        
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
                                                return app.createObject({
                                                    qInfo: {
                                                        qId: 'LB' + index,
                                                        qType: 'ListObject'
                                                    },
                                                    qListObjectDef: {
                                                        qStateName: '$',
                                                        qLibraryId: '',
                                                        qDef: {
                                                            qFieldDefs: [
                                                                filter.field
                                                            ],
                                                            qSortCriterias: [
                                                                {
                                                                    qSortByLoadOrder: 1
                                                                }
                                                            ]
                                                        },
                                                        qInitialDataFetch: [
                                                            {
                                                                qTop: 0,
                                                                qLeft: 0,
                                                                qHeight: 5,
                                                                qWidth: 1
                                                            }
                                                        ]
                                                    }
                                                });
                                            }).then(function(object) {
                                                return promise.all([
                                                    object,
                                                    object.getLayout()
                                                ]);
                                            });
                                        }

                                        step = step.then(function(objects) {
                                            return promiseFactory().then(function(reply) {
                                                objects.push(reply[0]);
                                                return objects;
                                            });
                                        });
                                    });

                                    return step.then(function(objects) {
                                        return promise.all(objects.map(function(object) {
                                            return object.getLayout().then(function(layout) {
                                                return layout.qListObject.qDimensionInfo.qStateCounts.qSelected != 0;
                                            });
                                        })).then(function(states) {
                                            if (!states.every(function(state) { return state; })) {
                                                return promise.reject('Not possible to apply desired filters');
                                            }
                                        });
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
                }
            }
        }

    }
    
    return retVal;
}

