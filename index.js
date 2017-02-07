'use strict';

var Rx = require('rxjs/Rx');
var promise = require('q');

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
    
    return {
        
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
         * @returns {Promise.<ticket>}              a promise resolving to the generated ticket
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
                init: (args) => {

                },
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
                    }
                }
            }
        }

    }
}

