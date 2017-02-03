'use strict';

var Rx = require('rxjs/Rx');

var undef = require('ifnotundef');
var qps = require('qlik-api-qps');
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
module.exports = createUtils();
module.exports.create = createUtils;

function createUtils(options) {
    var promise = undef.child(options, 'promise', global.Promise);
    var returnObservable = undef.child(options, 'returnObservable', false);
    
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
                return task.toPromise(promise);
            }
        }
    }
}

