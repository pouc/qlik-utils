var url = require('url');
var Q = require('q');
var http = require('http');
var https = require('https');
var extend = require('extend');
var qsocks = require('qsocks');
var sprintf = require('sprintf-js').sprintf;

var qps = require('./apis/qps/qps').qps;
var qrs = require('./apis/qrs/qrs').qrs;

var core = require('../core').Core;
var base = require('./base').Base;
var array = require('../array').Array;
var object = require('../object').Object;

var exports = {};
module.exports = exports;

var mId = 1;
var sockets = {};

exports.Advanced = {

    /**
     * Generates a ticket on Qlik Sense QRS Api. If the targetId is not correct
     * then the ticket will redirect to the hub
     *
     * @example
     * ```javascript
     * utils.Qlik.getTicket({
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
     * @param {Task}                [task]      a task that will trace the ticket generation progress
     * @returns {Promise.<ticket>}              a promise resolving to the generated ticket
     */
    getTicket: function(options, params, task) {

        // create connection to qps

        var qpsApi = qps(options);

        // Send ticket
        // Also if there was a problem with the target Id, try to generate another ticket
        // by reseting target Id

        return qpsApi.ticket.post(params).fail(function(err) {
            if (typeof err.body !== 'undefined' && err.body.match(/^Specified targetId .* was unknown$/)) {
                if (task) task.running('warning', 'Wrong targetId: %s, generating a ticket to default location', params.TargetId);
                params.TargetId = null;
                return exports.Advanced.getTicket(options, params, task);
            } else {
                if (task) task.running('error', 'Impossible to generate ticket because of the following error: %s', err);
                return Q.reject(err);
            }
        }).then(function(ticket) {
            if (task) task.running('info', 'Ticket generated: %s', ticket);
            return ticket;
        });

    },

    /**
     * Safe function to open a ws session on a Qlik Sense server. This function can reuse the cookie of a previously opened session
     *
     * @example Classical mode:
     * ```javascript
     * utils.Qlik.openWebSocket({
     *          restUri: 'https://10.76.224.72',
     *          pfx: pfx,
     *          passPhrase: ''
     *      },
     *      {
     *          UserId: 'qlikservice',
     *          UserDirectory: '2008R2-0',
     *          Attributes: []
     *      }
     * }).then(function(ws) {
     *
     * });
     * ```
     *
     * @example Reuse mode:
     * ```javascript
     * utils.Qlik.openWebSocket({
     *          restUri: 'https://10.76.224.72',
     *          pfx: pfx,
     *          passPhrase: '',
     *          cookie: 'X-Qlik-Session=12345678-1234-1234-1234-123456789012; Path=/; HttpOnly; Secure'
     *      }
     * }).then(function(ws) {
     *
     * });
     * ```
     *
     * @memberOf Qlik
     *
     * @param {options}             options     Qlik Sense connection options
     * @param {ticketParams}        [params]    the ticket parameters to generate if no cookie is provided
     * @param {Task}                [task]      a task that will trace the session opening progress
     * @returns {Promise.<ticket>}              a promise resolving to the generated ticket
     */
    openWebSocket: function(options, params, task) {

        var parsedWsUri = url.parse(core.ifNotUndef(options.wsUri, options.restUri));

        if (typeof options.wsUri === 'undefined') {
            parsedWsUri.protocol = (parsedWsUri == 'https:') ? 'wss:' : 'ws:';
            parsedWsUri.host = undefined;
            parsedWsUri.port =  core.ifNotUndef(parsedWsUri.port, (parsedWsUri == 'https:') ? 443 : 80);
        } else {
            parsedWsUri.host = undefined;
            parsedWsUri.port = core.ifNotUndef(parsedWsUri.port, (parsedWsUri == 'https:') ? 443 : 80);
        }

        var prefix =  parsedWsUri.pathname;
        var appname =  options.appname;

        if (params instanceof core.Task) {
            task = params;
            params = undefined;
        }

        if (typeof params === 'undefined') {
            params = {
                UserId: options.UserId,
                UserDirectory: options.UserDirectory,
                Attributes: []
            };
        }

        var step = Q();

        if (typeof options.cookie === 'undefined') {

            step = step.then(function() {

                // Generate a ticket

                if (task) task.running('info', 'No cookie was provided, generating ticket...');

                return exports.Advanced.getTicket(options, params, task);

            });

        }

        return step.then(function(ticket) {

            var wsConfig = {
                host: parsedWsUri.hostname,
                port: parsedWsUri.port,
                prefix: prefix,
                appname: appname,
                isSecure: parsedWsUri.protocol == 'https:',
                origin: 'http://localhost',
                rejectUnauthorized: false
            };

            if (typeof options.cookie === 'undefined') {

                // Connect the web socket using the ticket

                wsConfig.ticket = ticket.Ticket;

            } else {

                // Check if a ws connection on this app already exists using this session

                if (typeof sockets[options.cookie] !== 'undefined' && typeof sockets[options.cookie][appname || 'default'] !== 'undefined') {
                    if (task) task.running('info', 'Trying to reuse connection...');

                    return sockets[options.cookie][appname || 'default'];
                } else {

                    // Connect the web socket using the session

                    if (task) task.running('info', 'Trying to reuse session...');

                    wsConfig.headers = {
                        Cookie: options.cookie
                    };
                }

            }

            if (task) task.running('info', 'Opening session...');

            return qsocks.Connect(wsConfig);

        }).then(function(sock) {

            if (task) task.running('info', 'Connected! Testing session...');

            return Q.all([
                sock,
                sock.productVersion()
            ]).then(function(reply) {
                return reply[0];
            });

        }).then(function(sock) {

            if (task) task.running('info', 'Tested OK! Saving cookie: %s', sock.connection.cookie);

            if (typeof sockets[sock.connection.cookie] === 'undefined') sockets[sock.connection.cookie] = {};
            sockets[sock.connection.cookie][appname || 'default'] = sock;

            options.cookie = sock.connection.cookie;
            return sock;

        }).fail(function(err) {

            if (typeof options.cookie !== 'undefined' && typeof sockets[options.cookie] !== 'undefined' && typeof sockets[options.cookie][appname || 'default'] !== 'undefined') {

                if (task) task.running('warning', 'Invalid previous session, let\'s try again by opening a new session with the provided cookie...');

                sockets[options.cookie][appname || 'default'] = undefined;

                return exports.Advanced.openWebSocket(options, params, task);

            } else if (typeof options.cookie !== 'undefined' && typeof params != 'undefined') {

                if (task) task.running('warning', 'Invalid cookie, let\'s try again by generating a new ticket...');

                options.cookie = undefined;

                return exports.Advanced.openWebSocket(options, params, task);

            } else {

                if (task) task.running('error', 'Impossible to open a new ws because of the following error: %s', err);

                return Q.reject(err);

            }

        });

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
     * @param {Task}                task
     * @returns {Promise.<Object>}                  a promise resolving to the virtual proxy configuration when successfull
     */
    addToWhiteList: function(options, params, task) {

        // create connection to qrs

        var qrsApi = qrs(options);

        var ip = params.ip;
        var vp = params.vp;

        return Q().then(function() {

            // Get proxy configuration
            return qrsApi.proxyservice.local.get();

        }).then(function(settings) {

            // Get virtual proxy configuration

            var vpsettings = settings.settings.virtualProxies.filter(function(elem, index) {
                if (!vp || typeof vp === 'undefined') return true;
                else if (parseInt(vp) === vp) return index == vp;
                else return elem.prefix == vp;
            });

            return Q.all(vpsettings.map(function(vp) {
                return qrsApi.virtualproxyconfig.id(vp.id).get();
            }));

        }).then(function(vpSettings) {

            return Q.all(vpSettings.map(function(settings) {

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

    },

    /**
     * @typedef {Object} replaceDef
     * @param {string} marker to be found in the script and replaced during the duplication.
     * @param {string} value the value to replace in the script
     */

    /**
     * @typedef {Object} cloneDef
     * @param {Array.<replaceDef>|replaceDef} replaces the list of values to be replaced. If this parameter is null or false, the script is not updated
     * @param {boolean} [reloadApp=parent value] reload the app. Overrides parent reloadApp if defined
     * @param {boolean} [keepApp=parent value] keep the app when the operation finished. If false, app will be deleted. Overrides parent keepApp if defined
     * @param {boolean} [overwriteApp=parent value] Overwrite the replace app if it exists. If false, and if replace app exists, nothing will happen. Overrides parent replaceApp if defined
     * @param {boolean|string} [replaceApp=parent value] name or id of the app to replace. Can also be boolean (when false, don't replace the app, when true, replace the app which name == targetApp). Overrides parent replaceApp if defined
     * @param {string} [targetApp=parent value] name of the new app. Overrides parent targetApp if defined
     * @param {string} [publishStream] name or id of the stream to publish the new app in. If this parameter is null or false, then the app is not published. Overrides parent publishStreamId if defined
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
     * @param {boolean}                                             [params.reloadApp=true]         reload the app
     * @param {boolean}                                             [params.keepApp=true]           keep the app when the operation finished. If false, app will be deleted
     * @param {boolean}                                             [params.overwriteApp=true]      Overwrite the replace app if it exists. If false, and if replace app exists, nothing will happen
     * @param {RegExp}                                              [params.reloadRegex=/(.*)/]     regex to track in the script reload trace. If this parameter is null or false, uses default regex that captures everything
     * @param {boolean|string}                                      [params.replaceApp=true]        name or id of the app to replace. Can also be boolean (when false, don't replace the app, when true, replace the app with name == targetApp)
     * @param {string}                                              [params.targetApp=default]      name of the new app. Defaults to %(templateAppName)s %(replace.value)s
     * @param {string}                                              [params.publishStream]          name or id of a stream to publish the new app in. If this parameter is null or false, then the app is not published
     * @param {boolean|Qlik.reloadTask}                             [params.createReloadTask=true]  create a reload task associated to the generated app. If true, create a task with a daily trigger @ 4AM. If a reload task already exists it will be overwritten. If null or false, do nothing.
     * @param {Task}                                                task                            task that will trace the cloning progress
     * @returns {Promise}                                                                           a promise that resolves when the process is finished
     */
    dynamicAppClone: function(options, params, task) {

        var qrsApi = qrs(options);

        var templateApp = params.templateApp;
        var maxParDup = core.ifNotUndef(params.maxParDup, 1);

        // Handles parameters default values

        var replacesDef = core.ifNotUndef(params.replacesDef, false);
        var reloadApp = core.ifNotUndef(params.reloadApp, true);
        var keepApp = core.ifNotUndef(params.keepApp, true);
        var overwriteApp = core.ifNotUndef(params.overwriteApp, true);
        var reloadRegex = core.ifNotUndef(params.keepApp, /(.*)/);
        var replaceApp = core.ifNotUndef(params.replaceApp, '%(targetAppName)s');
        var targetApp = core.ifNotUndef(params.targetApp, '%(templateAppName)s %(replace.value)s');
        var publishStream = core.ifNotUndef(params.publishStream, false);

        // create no trigger
        var aze = {"task":{"name":"aze","taskType":0,"enabled":true,"taskSessionTimeout":1440,"maxRetries":0,"tags":[],"app":{"id":"4bfd343b-759b-4931-a9f0-32205f1cf663","name":"test de loic"},"isManuallyTriggered":false,"customProperties":[]},"compositeEvents":[],"schemaEvents":[]};

        // Update task add trigger
        var aze = {
            "task":null,
            "compositeEventsToDelete":[],
            "schemaEventsToDelete":[],
            "compositeEvents":[],
            "schemaEvents":[{
                "name":"Hourly",
                "enabled":true,
                "eventType":0,
                "startDate":"2016-01-18T13:11:01.000Z",
                "expirationDate":"9999-12-30T23:00:00.000Z",
                "schemaFilterDescription":["* * - * * * * *"],
                "incrementDescription":"0 1 0 0",
                "incrementOption":"1",
                "privileges":["read","update","create","delete"],
                "reloadTask":{"id":"1c1210a8-4a8e-4e7b-bce4-e0ce834c8a21"}
            }]
        };

        // Update task remove trigger
        var aze = {"task":null,"compositeEventsToDelete":[],"schemaEventsToDelete":["cc853b48-43c0-4da1-b429-55767fb41e4f"],"compositeEvents":[],"schemaEvents":[]}


        // Create task with trigger
        var aze = {
            "task":{"name":"poipoi","taskType":0,"enabled":true,"taskSessionTimeout":1440,"maxRetries":0,"tags":[],"app":{"id":"65fa4d75-d4a9-4a5d-90d7-2eeb175c1dc2","name":"test ventes"},"isManuallyTriggered":false,"customProperties":[]},
            "compositeEvents":[],
            "schemaEvents":[{
                "name":"Hourly",
                "enabled":true,
                "eventType":0,"startDate":"2016-01-18T14:30:02.000Z","expirationDate":"9999-12-30T23:00:00.000Z","schemaFilterDescription":["* * - * * * * *"],"incrementDescription":"0 1 0 0","incrementOption":"1","privileges":["read","update","create","delete"]
            }]
        }

        // Convert simplified syntax to advanced syntax

        if (replacesDef && !Array.isArray(replacesDef)) {
            replacesDef = [replacesDef];
        }

        replacesDef = replacesDef.map(function(item) {
            var retVal = {};

            if (typeof item.replaces === 'undefined' && typeof item.marker !== 'undefined' && typeof item.value !== 'undefined') {
                retVal.replaces = [{marker: item.marker, value: item.value}];
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

            retVal.reloadApp = core.ifNotUndef(item.reloadApp, reloadApp);
            retVal.keepApp = core.ifNotUndef(item.keepApp, keepApp);
            retVal.overwriteApp = core.ifNotUndef(item.overwriteApp, overwriteApp);
            retVal.replaceApp = core.ifNotUndef(item.replaceApp, replaceApp);
            retVal.targetApp = core.ifNotUndef(item.targetApp, targetApp);
            retVal.publishStream = core.ifNotUndef(item.publishStream, publishStream);

            if (retVal.replaceApp == true) {
                retVal.replaceApp = replaceApp;
            }

            if (retVal.targetApp == true) {
                retVal.targetApp = targetApp;
            }

            return retVal;
        }).filter(function(item) {
            return typeof item !== 'undefined';
        });

        replacesDef = replacesDef.map(function(item) {
            return item.replaces.map(function(replace) {
                return {
                    replace: replace,
                    reloadApp: item.reloadApp,
                    keepApp: item.keepApp,
                    overwriteApp: item.overwriteApp,
                    replaceApp: item.replaceApp,
                    targetApp: item.targetApp,
                    publishStream: item.publishStream
                };
            });
        }).reduce(function(pv, cv) {
            return pv.concat(cv);
        });

        // If no clone task was provided, just return an empty array

        if (replacesDef.length == 0) {
            return Q.resolve([]);
        }

        // Else start the cloning process

        return Q().then(function() {

            // Start

            task.running('info', 'Starting!');

        }).then(function() {

            // Connect the web socket

            return Q.all([
                exports.Advanced.openWebSocket(options, task).then(function(reply) {
                    task.running('info', 'Socket connected');
                    return reply;
                })
            ]);

        }).then(function(reply) {

            // Connected

            var wsGlobal = reply[0];

            return Q.all([
                wsGlobal,
                wsGlobal.getDocList().then(function(reply) {
                    task.running('info', 'Got document List');
                    return reply;
                }),
                wsGlobal.getStreamList().then(function(reply) {
                    task.running('info', 'Got Stream List');
                    return reply;
                })
            ]);

        }).then(function(reply) {

            // Replace stream & app names by ids

            var wsGlobal = reply[0];
            var docList = reply[1];
            var streamList = reply[2];

            // Looping on replace definition

            var errors = [];
            var templateFound;
            replacesDef.forEach(function(replaceDef) {

                // Make sure the publish stream is an id and not a name

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
                        errors.push('Stream not found: ' + replaceDef.publishStream);
                        return;
                    } else {
                        task.running('info', 'Stream found');
                    }

                    replaceDef.publishStream = arrayStreamFound[0].qId;

                } else if (replaceDef.publishStream) {

                    task.running('info', 'Stream to replace is an id (%s), checking if it exists', replaceDef.publishStream);

                    var arrayStreamFound = streamList.filter(function(item) {
                        return (item.qId == replaceDef.publishStream);
                    });

                    if (arrayStreamFound.length == 0) {
                        errors.push('Stream not found: ' + replaceDef.publishStream);
                        return;
                    } else {
                        task.running('info', 'Stream found');
                    }

                }

                // Make sure the template app is an id and not a name

                var arrayTemplateFound = docList.filter(function(item) {
                    return (templateApp.match(/^[a-f0-9\-]{36}$/) && item.qDocId == templateApp) ||
                        (!templateApp.match(/^[a-f0-9\-]{36}$/) && item.qDocName == templateApp);
                });

                if (arrayTemplateFound.length > 1) {
                    task.running('warning', 'Several apps found : %s, using first one (%s)', arrayTemplateFound.map(function(app) {
                        return app.qDocId;
                    }), arrayTemplateFound[0].qDocId);
                } else if (arrayTemplateFound.length == 0) {
                    errors.push('Template not found: ' + templateApp);
                    return;
                } else {
                    task.running('info', 'Template found');
                }

                templateFound = arrayTemplateFound[0];

                // Replace sprintf values

                var replaceDic = docList.map(function(doc) {
                    return {key: doc.qDocId, value: doc.qDocName};
                }).reduce(function(pv, cv) {
                    pv[cv.key] = cv.value;
                    return pv;
                }, {});

                replacesDef.forEach(function(replaceDef) {
                    replaceDef.targetApp = sprintf(replaceDef.targetApp, {templateAppName: replaceDic[arrayTemplateFound[0].qDocId], replace: replaceDef.replace});
                    replaceDef.replaceApp = sprintf(replaceDef.replaceApp, {templateAppName: replaceDic[arrayTemplateFound[0].qDocId], replace: replaceDef.replace, targetAppName: replaceDef.targetApp});
                });

                // Make sure the replace apps are ids and not a names

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

            });

            if (errors.length > 0) return Q.reject(errors);

            return Q.all([
                wsGlobal,
                templateFound.qDocId,
                templateFound.qDocName
            ]);

        }).then(function(reply) {

            // Clone app

            var wsGlobal = reply[0];
            var templateId = reply[1];
            var templateName = reply[2];

            var newAppsStep = Q.resolve([]);
            var newApps = [];
            array.chunk(replacesDef, maxParDup).forEach(function(scriptReplacesChunk) {
                var newAppsChunk = [];

                scriptReplacesChunk.forEach(function(scriptReplace) {
                    newAppsChunk.push(
                        function() {

                            if (scriptReplace.replaceApp && !scriptReplace.overwriteApp) {

                                task.running('info', 'Clone already exists! Working on existing clone (%s)', scriptReplace.replaceApp);

                                return qrsApi.app.id(scriptReplace.replaceApp).get().then(function(reply) {
                                    scriptReplace.replace = false;
                                    scriptReplace.publishStream = (reply.published ? false : scriptReplace.publishStream);

                                    return {
                                        scriptReplace: scriptReplace,
                                        clonedApp: reply
                                    };
                                });

                            } else {

                                var targetAppName = scriptReplace.targetApp;
                                task.running('info', 'Generating clone named \'' + targetAppName + '\'');

                                return qrsApi.app.id(templateId).copy.post(targetAppName).then(function(clonedApp) {
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
                    return Q.all(newAppsChunk.map(function(promiseFactory) {
                        return promiseFactory();
                    }));
                });

            });

            return Q.all([
                wsGlobal,
                newAppsStep.then(function(reply) {
                    return newApps.concat(reply);
                })
            ]);

        }).then(function(reply) {

            // Replace app script

            var wsGlobal = reply[0];
            var newApps = reply[1];

            // Replace script marker and reload in //
            // Only if marker is not null!

            var newAppsScriptReplacedStep = Q.resolve([]);
            var newAppsScriptReplaced = [];
            array.chunk(newApps, maxParDup).forEach(function(newAppsChunk) {

                var newAppsScriptReplacedChunk = [];
                newAppsChunk.forEach(function(newApp) {

                    newAppsScriptReplacedChunk.push(
                        function() {

                            var step = Q();

                            // If nothing to do just return

                            if (!(newApp.scriptReplace.replace || newApp.scriptReplace.reloadApp || newApp.scriptReplace.publishStream)) return Q.resolve([]);

                            // If anything to do, open socket

                            if (newApp.scriptReplace.replace || newApp.scriptReplace.reloadApp) {

                                step = step.then(function() {

                                    var appOptions = extend(true, {}, options, {appname: newApp.clonedApp.id});

                                    return exports.Advanced.openWebSocket(appOptions, task).then(function(reply) {
                                        task.running('info', {id: newApp.clonedApp.id, msg: 'Socket connected'});
                                        return reply;
                                    });

                                }).then(function(wsCloneGlobal) {

                                    return Q.all([
                                        wsCloneGlobal,
                                        wsCloneGlobal.openDoc(newApp.clonedApp.id).then(function(reply) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Doc opened'});
                                            return reply;
                                        })
                                    ]);

                                });

                            }

                            // If a replace is required, do it!

                            if (newApp.scriptReplace.replace) {

                                step = step.then(function(reply) {

                                    // Replace the script marker by the replace value

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application opened'});

                                    return Q.all([
                                        wsCloneGlobal,
                                        Q().then(function() {
                                            return clonedApp.getScript();
                                        }).then(function(result) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application script extracted'});
                                            return clonedApp.setScript(result.replace(newApp.scriptReplace.replace.marker, newApp.scriptReplace.replace.value));
                                        }).then(function() {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application script replaced'});
                                            return clonedApp.doSave();
                                        }).then(function() {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application saved'});
                                            return clonedApp;
                                        })
                                    ]);

                                });

                            }

                            // If a reload is required, do it!

                            if (newApp.scriptReplace.reloadApp) {

                                step = step.then(function(reply) {

                                    // Reload and monitor reload progress

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    var timer = setInterval(function() {
                                        wsCloneGlobal.getProgress(0).then(function(result) {
                                            if (result.qPersistentProgress) {
                                                var rePattern = new RegExp(reloadRegex);
                                                var match = rePattern.exec(result.qPersistentProgress);
                                                while (match != null) {
                                                    task.running('reload', {id: newApp.clonedApp.id, msg: match});
                                                    match = rePattern.exec(result.qPersistentProgress);
                                                }
                                            }
                                        });
                                    }, 1000);

                                    return Q.all([
                                        wsCloneGlobal,
                                        clonedApp.doReload().then(function(result) {
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
                                                return Q.reject({id: newApp.clonedApp.id, msg: 'Application not reloaded'});
                                            }
                                        })
                                    ]);

                                });
                            }

                            // If a publish is required, do it!

                            if (newApp.scriptReplace.publishStream) {

                                step = step.then(function(reply) {

                                    // Publish app in the given stream

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    if (!newApp.scriptReplace.replaceApp) {

                                        // No app with the same name

                                        return Q.all([
                                            wsCloneGlobal,
                                            clonedApp.publish(newApp.scriptReplace.publishStream).then(function() {
                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Application published'});
                                                return clonedApp;
                                            })
                                        ]);

                                    } else {

                                        // There was an app with the same name. We need to use QRS API to publish it

                                        return qrsApi.app.id(newApp.clonedApp.id).replace.put(newApp.scriptReplace.replaceApp).then(function(repApp) {

                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application published (replaced)'});

                                            return qrsApi.app.id(newApp.clonedApp.id).delete().then(function() {
                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Removed unpublished app'});

                                                newApp.clonedApp = repApp;

                                                return Q.all([
                                                    wsCloneGlobal
                                                ]);
                                            });
                                        });
                                    }
                                });

                            } else {

                                // Don't publish app. Let's check if we need to replace an unpublished app

                                if (newApp.scriptReplace.replaceApp && ! newApp.clonedApp.published) {

                                    step = step.then(function(reply) {

                                        var wsCloneGlobal = reply[0];

                                        return qrsApi.app.id(newApp.scriptReplace.replaceApp).delete().then(function() {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Removed unpublished app'});

                                            return Q.all([
                                                wsCloneGlobal
                                            ]);
                                        });

                                    });

                                }

                            }

                            // If it is not required to keep the app after all this process (who knows...), just delete it!

                            if (!newApp.scriptReplace.keepApp) {

                                step = step.then(function(reply) {

                                    // Delete app

                                    var wsCloneGlobal = reply[0];

                                    return qrsApi.app.id(newApp.clonedApp.id).delete().then(function() {
                                        task.running('info', {id: newApp.clonedApp.id, msg: 'Removed cloned app'});

                                        return Q.all([
                                            wsCloneGlobal
                                        ]);
                                    });

                                });

                            }

                            // Close socket

                            step = step.then(function(reply) {

                                // Close app specific web socket

                                var wsCloneGlobal = reply[0];

                                try {
                                    wsCloneGlobal.connection.close();
                                } catch (e) {
                                } finally {
                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application socket closed'});
                                }

                            });

                            step = step.then(function() {
                                task.running('redirect', newApp.clonedApp.id);
                                return newApp.clonedApp.id;
                            });

                            return step;

                        }
                    );

                });

                newAppsScriptReplacedStep = newAppsScriptReplacedStep.then(function(reply) {
                    newAppsScriptReplaced = newAppsScriptReplaced.concat(reply);
                    return Q.all(newAppsScriptReplacedChunk.map(function(promiseFactory) {
                        return promiseFactory();
                    }));
                });

            });

            return Q.all([
                wsGlobal,
                newAppsScriptReplacedStep.then(function(reply) {
                    return newAppsScriptReplaced.concat(reply);
                })
            ]);

        }).then(function(reply) {

            // Close master web socket

            reply[0].connection.close();
            return reply[1];

        }).fail(function(err) {

            task.failed('error', err);
            return Q.reject(err);

        });

    },

    /**
     * Exports a cube from a given app to a callback function
     *
     * @param options
     * @param task
     * @returns {*}
     */
    exportCube: function(options, params, task) {

        var qrsApi = qrs(options);

        var restUri = url.parse(options.restUri);
        restUri.port = core.ifNotUndef(options.wsPort, (restUri.protocol === 'https:') ? '443' : '80');

        var appId = options.params.appId;
        var cubeDef = options.params.cubeDef;

        return Q().then(function() {

            // Generate a ticket

            return exports.Advanced.getTicket({
                restUri: 'https://' + restUri.hostname + ':4243',
                prefix: options.prefix,
                pfx: options.pfx,
                passPhrase: options.passPhrase,
                key: options.key,
                cert: options.cert,
                ca: options.ca,
                params: {
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    Attributes: []
                }
            });

        }).then(function(ticket) {

            // Connect the web socket using the ticket

            task.running('info', 'Session opened');

            var wsConfig = {
                host: restUri.hostname,
                port: restUri.port,
                prefix: options.prefix,
                isSecure: restUri.protocol === 'https:',
                origin: 'http://localhost',
                rejectUnauthorized: false,
                ticket: ticket.Ticket,
                appname: appId
            };

            return Q.all([
                qsocks.Connect(wsConfig)
            ]);

        }).then(function(reply) {

            // Connected

            var wsGlobal = reply[0];

            // Open doc

            task.running('info', 'Socket connected');

            return Q.all([
                wsGlobal,
                wsGlobal.openDoc(appId)
            ]);

        }).then(function(reply) {

            // Create cube

            var wsGlobal = reply[0];
            var app = reply[1];

            task.running('info', 'Got measures & dimensions from app');

            return Q.all([
                wsGlobal,
                app,
                app.createSessionObject({
                    qHyperCubeDef: cubeDef,
                    qInfo: {
                        qType: 'mashup',
                        qId: 'MULFT' + mId++
                    }
                })
            ]);

        }).then(function(reply) {

            // Get cube layout

            var wsGlobal = reply[0];
            var app = reply[1];
            var sessionObject = reply[2];

            task.running('info', 'Cube generated');

            return Q.all([
                wsGlobal,
                app,
                sessionObject,
                wsGlobal.connection.ask(sessionObject.handle, 'GetLayout', [])
            ]);

        }).then(function(reply) {

            // Get cube pages

            var wsGlobal = reply[0];
            var app = reply[1];
            var sessionObject = reply[2];
            var cubeLayout = reply[3];

            task.running('info', 'Got cube layout');

            var columns = cubeLayout.qLayout.qHyperCube.qSize.qcx;
            var totalheight = cubeLayout.qLayout.qHyperCube.qSize.qcy;
            var pageheight = Math.floor(10000 / columns);
            var numberOfPages = Math.ceil(totalheight / pageheight);

            var pages = Array.apply(null, Array(numberOfPages)).map(function(data, index) {

                return wsGlobal.connection.ask(sessionObject.handle, 'GetHyperCubeData', [
                    '/qHyperCubeDef',
                    [{
                        qTop: (pageheight * index),
                        qLeft: 0,
                        qWidth: columns,
                        qHeight: pageheight
                    }]
                ]);

            }, this);

            return Q.all(pages).then(function(pages) {
                return Q.all([
                    wsGlobal,
                    app,
                    sessionObject,
                    cubeLayout,
                    pages
                ]);
            });

        }).then(function(reply) {

            // Disconnect and call callback function

            var wsGlobal = reply[0];
            var app = reply[1];
            var sessionObject = reply[2];
            var cubeLayout = reply[3];
            var pages = reply[4];

            task.running('info', 'disconnecting');

            reply[0].connection.close();

            var pages = [].concat.apply([], pages.map(function(item) {
                return item.qDataPages[0].qMatrix;
            }));

            task.running('exportCube', pages);

            return pages;

        }).fail(function(err) {

            task.failed('error', err);
            return Q.reject(err);

        });

    },

    export: function(options, params, task) {

        var qrsApi = qrs(options);

        var restUri = url.parse(options.restUri);
        restUri.port = core.ifNotUndef(options.wsPort, (restUri.protocol === 'https:') ? '443' : '80');

        var appId = options.params.appId;
        var dimensions = options.params.dimensions;
        var measures = options.params.measures;

        task.running('info', 'Starting!');

        return Q().then(function() {

            // Generate a ticket

            return exports.Advanced.getTicket({
                restUri: 'https://' + restUri.hostname + ':4243',
                prefix: options.prefix,
                pfx: options.pfx,
                passPhrase: options.passPhrase,
                key: options.key,
                cert: options.cert,
                ca: options.ca,
                params: {
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    Attributes: []
                }
            });

        }).then(function(ticket) {

            // Connect the web socket using the ticket

            task.running('info', 'Session opened');

            var wsConfig = {
                host: restUri.hostname,
                port: restUri.port,
                prefix: options.prefix,
                isSecure: restUri.protocol === 'https:',
                origin: 'http://localhost',
                rejectUnauthorized: false,
                ticket: ticket.Ticket,
                appname: appId
            };

            return Q.all([
                qsocks.Connect(wsConfig)
            ]);

        }).then(function(reply) {

            // Connected

            var wsGlobal = reply[0];

            // Open doc

            task.running('info', 'Socket connected');

            return Q.all([
                wsGlobal,
                wsGlobal.openDoc(appId)
            ]);

        }).then(function(reply) {

            // Get app dimension & measure list

            var wsGlobal = reply[0];
            var app = reply[1];

            task.running('info', 'App opened');

            return Q.all([
                wsGlobal,
                app,
                app.createSessionObject({
                    qDimensionListDef: {
                        qType: 'dimension',
                        qData: {
                            title: '/qMetaDef/title',
                            tags: '/qMetaDef/tags',
                            grouping: '/qDim/qGrouping',
                            info: '/qDimInfos'
                        }
                    },
                    qInfo: {
                        qId: 'DimensionList',
                        qType: 'DimensionList'
                    }
                }).then(function(reply) {
                    return wsGlobal.connection.ask(reply.handle, 'GetLayout', []);
                }).then(function(reply) {
                    return reply.qLayout.qDimensionList;
                }).then(function(reply) {

                    var dimensionMap = object.values(object.map(dimensions, function(dim, dimCode) {
                        return {
                            dimensionCode: dimCode,
                            dimensionName: dim.name,
                            dimension: dim,
                            qlikDimension: ((dim.dimensionType == 'MASTER' || dim.dimensionType == 'AUTO') ?
                                reply.qItems.filter(function(masterDim) {
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
                        };
                    }));

                    dimensionMap = core.ifNotUndef(dimensionMap, []);

                    var dimensionNotFound = dimensionMap.filter(function(item) {
                        return item.qlikDimension.length == 0;
                    });

                    if (dimensionNotFound.length != 0) {
                        return Q.reject('Dimension(s) ' + dimensionNotFound.map(function(item) { return item.dimensionName; }).join(', ') + ' not found in master items!');
                    } else {
                        return dimensionMap;
                    }

                }),
                app.createSessionObject({
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
                }).then(function(reply) {
                    return wsGlobal.connection.ask(reply.handle, 'GetLayout', []);
                }).then(function(reply) {
                    return reply.qLayout.qMeasureList;
                }).then(function(reply) {

                    var measureMap = object.values(object.map(measures, function(mea, meaCode) {
                        return {
                            measureCode: meaCode,
                            measureName: mea.name,
                            measure: mea,
                            qlikMeasure: ((mea.measureType == 'MASTER' || mea.measureType == 'AUTO') ?
                                reply.qItems.filter(function(masterMea) {
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
                        };
                    }));

                    measureMap = core.ifNotUndef(measureMap, []);

                    var measureNotFound = measureMap.filter(function(item) {
                        return item.qlikMeasure.length == 0;
                    });

                    if (measureNotFound.length != 0) {
                        return Q.reject('Measure(s) ' + measureNotFound.map(function(item) { return item.measureName; }).join(', ') + ' not found in master items!');
                    } else {
                        return measureMap;
                    }

                })
            ]);

        }).then(function(reply) {

            // Disconnect

            var wsGlobal = reply[0];
            var app = reply[1];
            var dimensionMap = reply[2];
            var measureMap = reply[3];

            task.running('info', 'disconnecting');

            reply[0].connection.close();

            return Q.all([
                dimensionMap,
                measureMap
            ]);

        }).then(function(reply) {

            // Create cube

            var dimensionMap = reply[0];
            var measureMap = reply[1];

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

            var exportCubeOptions = extend(true, {}, options);
            exportCubeOptions.params = {
                appId: appId,
                cubeDef: cubeDef
            };

            return exports.Advanced.exportCube(exportCubeOptions, task);

        }).then(function(reply) {

            // Call callback function

            var pages = reply.map(function(row) {
                    return row.map(function(cell) {
                        return cell.qText;
                    });
                });

            task.running('export', pages);

            return pages;

        }).fail(function(err) {

            task.failed('error', err);
            return Q.reject(err);

        });
    },

    loopAndReduce: function(options, params, task) {

        var appId = options.params.appId;

        var loopReduceAppId = options.params.loopReduceAppId;
        var loopColumn = options.params.loopColumn;
        var reduceColumn = options.params.reduceColumn;
        var nameColumn = options.params.nameColumn;
        var publishColumn = options.params.publishColumn;

        var exportOptions = extend(true, {}, options);
        exportOptions.params = {
            appId: appId,
            dimensions: {
                loopColumn: {name: loopColumn, dimensionType: core.ifNotUndef(loopColumn, 'AUTO', 'IGNORE')},
                reduceColumn: {name: reduceColumn, dimensionType: core.ifNotUndef(reduceColumn, 'AUTO', 'IGNORE')},
                nameColumn: {name: nameColumn, dimensionType: core.ifNotUndef(nameColumn, 'AUTO', 'IGNORE')},
                publishColumn: {name: publishColumn, dimensionType: core.ifNotUndef(publishColumn, 'AUTO', 'IGNORE')}
            }
        };

        return exports.Advanced.export(exportOptions, task).then(function(reply) {
            var dynamicCloneOptions = extend(true, {}, options);
            dynamicCloneOptions.params = {
                templateAppId: loopReduceAppId,
                templateMaxParDup: 5,
                scriptMarker: '%Replace me!%',
                scriptReplaces: reply.map(function(item) {
                    return {
                        replace: core.ifNotUndef(reduceColumn, item[1], undefined),
                        oldAppName: '%(newAppName)s',
                        newAppName: core.ifNotUndef(nameColumn, item[2], core.ifNotUndef(reduceColumn, '%(templateName)s %(replace)s', '%(templateName)s')),
                        publishStreamId: core.ifNotUndef(publishColumn, item[3], undefined)
                    };
                }),
                scriptRegex: /(.*) << (.*) ([0-9,]+) Lines fetched/g,
                publishReplace: true
            };
            return exports.Advanced.dynamicAppClone(dynamicCloneOptions, task);
        });

    },

    createMultiCube: function(options, params, task) {

        var appIds = options.params.appIds;
        var cubeDef = options.params.cubeDef;

        Q.all(
            appIds.map(function(item) {

                var exportCubeOptions = extend(true, {}, options);
                exportCubeOptions.params = {
                    appId: item,
                    cubeDef: cubeDef
                };

                return exports.Advanced.exportCube(exportCubeOptions, task);

            })
        ).then(function(reply) {
            console.log(reply);
        });

    }

};
