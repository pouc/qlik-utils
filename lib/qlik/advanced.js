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

exports.Advanced = {

    /**
     * Generates a ticket on Qlik Sense QRS Api. If the targetId is not correct
     * then the ticket will redirect to the hub
     *
     * @example
     * ```javascript
     * utils.Qlik.getTicket({
     *      restUri: 'https://10.76.224.72:4243',
     *      pfx: pfx,
     *      passPhrase: ''
     *      params: {
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
     * @param {options} options the options to connect to the ticket API endpoint
     * @param {ticketParams} options.params the ticket parameters
     * @returns {Promise.<ticket>} resolving to the generated ticket
     */
    getTicket: function(options) {

        // create connection to qps

        var qpsApi = qps(options);

        var params = options.params;

        // Send ticket
        // Also if there was a problem with the target Id, try to generate another ticket
        // by reseting target Id

        return qpsApi.ticket.post(params).fail(function(err) {
            if (err.body.match(/^Specified targetId .* was unknown$/)) {
                params.TargetId = null;
                return exports.Advanced.getTicket(options, params);
            } else {
                return Q.reject(err);
            }
        });

    },

    openWebSocket: function(options) {

        var restUri = url.parse(options.restUri);
        restUri.port = core.ifNotUndef(options.wsPort, (restUri.protocol === 'https:') ? '443' : '80');

        var step = Q();

        if (typeof options.session === 'undefined') {

            step = step.then(function() {

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

            });

        }

        return step.then(function(ticket) {

            var wsConfig = {
                host: restUri.hostname,
                port: restUri.port,
                prefix: options.prefix,
                isSecure: restUri.protocol === 'https:',
                origin: 'http://localhost',
                rejectUnauthorized: false
            };

            if (typeof options.session === 'undefined') {

                // Connect the web socket using the ticket

                wsConfig.ticket = ticket.Ticket;

            } else {

                // Connect the web socket using the session

                wsConfig.headers = {
                    Cookie: options.session
                };

            }

            return qsocks.Connect(wsConfig);

        }).fail(function(err) {

            return Q.reject(err);

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
     * @param  {options} options the endpoint to add the ip to
     * @param  {string} options.params.ip the ip to add
     * @param {Task} task
     * @returns {Promise.<Object>} a promise resolving to the virtual proxy configuration when successfull
     */
    addToWhiteList: function(options, task) {

        // create connection to qrs

        var qrsApi = qrs(options);

        var ip = options.params.ip;

        return Q().then(function() {

            // Get proxy configuration
            return qrsApi.proxyservice.local.get();

        }).then(function(settings) {

            // Get virtual proxy configuration

            var vpsettings = settings.settings.virtualProxies[0];

            return qrsApi.virtualproxyconfig.id(vpsettings.id).get();

        }).then(function(settings) {

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

        });

    },

    /**
     * @typedef {Object} replaceDef
     * @param {string} replace the value to replace in the script
     * @param {string} oldAppName an existing app name to replace
     * @param {string} newAppName the new app name
     * @param {string} [publishStreamId] a stream to publish the new app in
     */

    /**
     * Duplicates a template app, updates its script, reloads it and publishes it
     *
     * @example
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
     *          restUri: 'http://10.20.30.40',
     *          pfx: pfx,
     *          UserId: 'qlikservice',
     *          UserDirectory: '2008R2-0',
     *          params: {
     *              templateAppId: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
     *              templateMaxParDup: 5,
     *              scriptMarker: '%Replace me!%',
     *              scriptReplaces: [ 'Employees.qvd' ],
     *              scriptRegex: /(.*) << (.*) ([0-9,]+) Lines fetched/g,
     *              publishStreamId: 'aaec8d41-5201-43ab-809f-3063750dfafd',
     *              publishReplace: true,
     *              task: task
     *          }
     *      });
     *
     * });
     * ```
     *
     * @memberOf Qlik
     *
     * @param {options} options Uri to the Qlik Sense endpoint
     * @param {string} options.params.templateAppId id of the template application
     * @param {int} [options.params.templateMaxParDup=5] maximum number of // operations (opened sockets & QRS API queries)
     * @param {string} [options.params.scriptMarker=] marker to be found in the script and replaced during the duplication. If this parameter is null, the script is not updated.
     * @param {Array.<string|replaceDef>} options.params.scriptReplaces replace value of the marker above for each array value
     * @param {RegExp} [options.params.scriptRegex=] regex to track in the script trace. If this parameter is null (or scriptMarker parameter above is null), then the app is not reloaded
     * @param {string} [options.params.publishStreamId=] id of the stream to publish into. If this parameter is null, then the app is not published
     * @param {boolean} options.params.publishReplace boolean telling wether to replace the app if an app with the same name was already published in the same stream
     * @param {Task} task task that will trace the cloning progress
     * @returns {Promise} a promise that resolves when the process is finished
     */
    dynamicAppClone: function(options, task) {

        var qrsApi = qrs(options);

        var restUri = url.parse(options.restUri);
        restUri.port = core.ifNotUndef(options.wsPort, (restUri.protocol === 'https:') ? '443' : '80');

        var templateAppId = options.params.templateAppId;
        var templateMaxParDup = core.ifNotUndef(options.params.templateMaxParDup, 5);
        var scriptMarker = options.params.scriptMarker;
        var scriptReplaces = options.params.scriptReplaces;
        var scriptRegex = options.params.scriptRegex;
        var publishStreamId = options.params.publishStreamId;
        var publishReplace = core.ifNotUndef(options.params.publishReplace, false);

        if (!Array.isArray(scriptReplaces)) {
            scriptReplaces = [{replace: scriptReplaces, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s %(replace)s'}];
        }

        scriptReplaces = scriptReplaces.map(function(item) {
            if (item === null || typeof item !== 'object') {
                return {replace: item, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s %(replace)s', publishStreamId: publishStreamId};
            } else {
                item.publishStreamId = core.ifNotUndef(item.publishStreamId, publishStreamId);
                return item;
            }
        });

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
                ticket: ticket.Ticket
            };

            return Q.all([
                qsocks.Connect(wsConfig)
            ]);

        }).then(function(reply) {

            // Connected

            var wsGlobal = reply[0];

            task.running('info', 'Socket connected');

            return Q.all([
                wsGlobal,
                wsGlobal.getDocList()
            ]);

        }).then(function(reply) {

            // Find template within the list

            var wsGlobal = reply[0];
            var docList = reply[1];

            task.running('info', 'Got document List');

            var arrayFound = docList.filter(function(item) {
                return item.qDocId == templateAppId;
            });

            if (arrayFound[0].qDocId == templateAppId) {
                return Q.all([
                    wsGlobal,
                    arrayFound[0].qDocId,
                    arrayFound[0].qDocName
                ]);
            } else {
                Q.reject('Template not found');
            }

        }).then(function(reply) {

            // Clone app

            var wsGlobal = reply[0];
            var templateId = reply[1];
            var templateName = reply[2];

            task.running('info', 'Template found');

            var newAppsStep = Q.resolve([]);
            var newApps = [];
            array.chunk(scriptReplaces, templateMaxParDup).forEach(function(scriptReplacesChunk) {
                var newAppsChunk = [];

                scriptReplacesChunk.forEach(function(scriptReplace) {
                    newAppsChunk.push(
                        function() {

                            var newName = sprintf(scriptReplace.newAppName, {
                                templateName: templateName,
                                replace: scriptReplace.replace
                            });

                            task.running('info', 'Generating clone named \'' + newName + '\'');

                            return qrsApi.app.id(templateId).copy.post(newName).then(function(clonedApp) {
                                return {
                                    scriptReplace: scriptReplace,
                                    clonedApp: clonedApp
                                };
                            });
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

            task.running('info', 'App cloned ' + newApps.length + ' time(s)');

            // Replace script marker and reload in //
            // Only if marker is not null!

            var newAppsScriptReplacedStep = Q.resolve([]);
            var newAppsScriptReplaced = [];
            array.chunk(newApps, templateMaxParDup).forEach(function(newAppsChunk) {

                var newAppsScriptReplacedChunk = [];
                newAppsChunk.forEach(function(newApp) {

                    newAppsScriptReplacedChunk.push(
                        function() {

                            var step = Q();

                            if (typeof scriptMarker !== 'undefined' || typeof scriptRegex !== 'undefined' || typeof newApp.scriptReplace.publishStreamId !== 'undefined') {

                                // Open socket only if there is something to do on the app

                                step = step.then(function() {

                                    // Generate a ticket for app specific web socket

                                    return Q.all([

                                        exports.Advanced.getTicket({
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
                                        })

                                    ]);

                                }).then(function(reply) {

                                    // Connect the web socket using the ticket

                                    var ticket = reply[0];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Got ticket'});

                                    var wsCloneConfig = {
                                        host: restUri.hostname,
                                        port: restUri.port,
                                        prefix: options.prefix,
                                        isSecure: restUri.protocol === 'https:',
                                        origin: 'http://localhost',
                                        rejectUnauthorized: false,
                                        ticket: ticket.Ticket,
                                        appname: newApp.clonedApp.id
                                    };

                                    return Q.all([
                                        qsocks.Connect(wsCloneConfig)
                                    ]);

                                }).then(function(reply) {

                                    // Open cloned app

                                    var wsCloneGlobal = reply[0];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application cloned from template'});

                                    return Q.all([
                                        wsCloneGlobal,
                                        wsCloneGlobal.openDoc(newApp.clonedApp.id)
                                    ]);

                                });

                            }

                            if (typeof scriptMarker !== 'undefined') {

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
                                            return clonedApp.setScript(result.replace(scriptMarker, newApp.scriptReplace.replace));
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

                            if (typeof scriptRegex !== 'undefined') {

                                step = step.then(function(reply) {

                                    // Reload and monitor reload progress

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    var timer = setInterval(function() {
                                        wsCloneGlobal.getProgress(0).then(function(result) {
                                            if (result.qPersistentProgress) {
                                                var rePattern = new RegExp(scriptRegex);
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
                                                return clonedApp.doSave().then(function() {
                                                    return clonedApp;
                                                });
                                            } else {
                                                return Q.reject({id: newApp.clonedApp.id, msg: 'Application not reloaded'});
                                            }
                                        })
                                    ]);

                                });

                            }

                            if (typeof newApp.scriptReplace.publishStreamId !== 'undefined') {

                                step = step.then(function(reply) {

                                    // Publish app in the given stream

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application saved'});

                                    if (typeof newApp.scriptReplace.publishStreamId !== 'undefined') {

                                        if (publishReplace) {

                                            return wsGlobal.getDocList().then(function(reply) {

                                                // Find previous app with the same name

                                                return reply.filter(function(item) {
                                                    return item.qMeta.stream && item.qMeta.stream.id == newApp.scriptReplace.publishStreamId && item.qDocName == sprintf(newApp.scriptReplace.oldAppName, {newAppName: newApp.clonedApp.name});
                                                });

                                            }).then(function(reply) {

                                                // If there was no previous app with the same name
                                                // Just publish the app

                                                if (reply.length == 0) {

                                                    return Q.all([
                                                        wsCloneGlobal,
                                                        clonedApp.publish(newApp.scriptReplace.publishStreamId).then(function() {
                                                            task.running('info', {
                                                                id: newApp.clonedApp.id,
                                                                msg: 'Application published'
                                                            });
                                                            return clonedApp;
                                                        })
                                                    ]);

                                                    // There was an app with the same name
                                                    // We need to use QRS API to publish it

                                                } else {

                                                    if (reply.length > 1) {
                                                        task.running('warn', {
                                                            id: newApp.clonedApp.id,
                                                            msg: 'You have multiple apps with name ' + newApp.clonedApp.name
                                                        });
                                                    }

                                                    return qrsApi.app.id(newApp.clonedApp.id).replace.put(reply[0].qDocId).then(function() {

                                                        task.running('info', {
                                                            id: newApp.clonedApp.id,
                                                            msg: 'Application published (replaced)'
                                                        });

                                                        return qrsApi.app.id(newApp.clonedApp.id).delete();

                                                    }).then(function() {

                                                        task.running('info', {
                                                            id: newApp.clonedApp.id,
                                                            msg: 'Removed unpublished app'
                                                        });

                                                        return Q.all([
                                                            wsCloneGlobal
                                                        ]);

                                                    });
                                                }
                                            });

                                        } else {

                                            return Q.all([
                                                wsCloneGlobal,
                                                clonedApp.publish(newApp.scriptReplace.publishStreamId).then(function() {
                                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application published'});
                                                    return clonedApp;
                                                })
                                            ]);

                                        }

                                    } else {

                                        return Q.all([
                                            wsCloneGlobal,
                                            clonedApp
                                        ]);

                                    }
                                });
                            }

                            if (typeof scriptMarker !== 'undefined' || typeof scriptRegex !== 'undefined' || typeof newApp.scriptReplace.publishStreamId !== 'undefined') {

                                // Close socket only if there was something to do on the app

                                step = step.then(function(reply) {

                                    // Close app specific web socket

                                    try {
                                        reply[0].connection.close();
                                    } catch (e) {
                                    } finally {
                                        task.running('info', {id: newApp.clonedApp.id, msg: 'Application socket closed'});
                                    }

                                });

                            }

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
    exportCube: function(options, task) {

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

    export: function(options, task) {

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

    loopAndReduce: function(options, task) {

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

    createMultiCube: function(options, task) {

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
