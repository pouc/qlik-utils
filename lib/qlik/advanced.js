var url = require('url');
var Q = require('q');
var http = require('http');
var https = require('https');
var extend = require('extend');
var qsocks = require('qsocks');
var sprintf = require("sprintf-js").sprintf;
var vsprintf = require("sprintf-js").vsprintf;

var core = require('../core').Core;
var base = require('./base').Base;
var array = require('../array').Array;

var exports = {};
module.exports = exports;

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
     * }, {
     *      'UserId': 'qlikservice',
     *      'UserDirectory': '2008R2-0',
     *      'Attributes': []
     * }).then(function(retVal) {
     *      console.log(retVal);
     * });
     * ```
     *
     * @memberOf Qlik
     *
     * @param {ticketParams} params the ticket parameters
     * @param {options} options the options to connect to the ticket API endpoint
     * @returns {Promise.<ticket>} resolving to the generated ticket
     */
    getTicket: function(options, params) {

        var restUri = url.parse(options.restUri);

        var ticketOptions = extend(true, {}, options, {
            restUri: restUri.protocol + '//' + restUri.host + '/qps/ticket',
            method: 'POST'
        });

        ticketOptions.pfx = options.pfx;

        // Send ticket
        // Also if there was a problem with the target Id, try to generate another ticket
        // by reseting target Id

        return base.request(ticketOptions, params).fail(function(err) {
            if(err.body.match(/^Specified targetId .* was unknown$/)) {
                params.TargetId = undefined;
                return exports.Advanced.getTicket(options, params);
            } else {
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
     *      return utils.Qlik.addToWhiteList('10.76.224.72', {
     *          restUri: 'https://10.76.224.72:4242',
     *          pfx: certif,
     *          passPhrase: '',
     *          UserId: 'qlikservice',
     *          UserDirectory: '2008R2-0'
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
     * @param  {string} ip the ip to add
     * @param  {options} options the endpoint to add the ip to
     * @returns {Promise.<Object>} a promise resolving to the virtual proxy configuration when successfull
     */
    addToWhiteList: function(ip, options) {

        var restUri = url.parse(options.restUri);

        return Q().then(function() {

            // Get proxy configuration

            var options2 = extend(true, {}, options, {
                restUri: restUri.protocol + '//' + restUri.host + '/qrs/proxyservice/local',
                method: 'GET'
            });

            options2.pfx = options.pfx;

            return base.request(options2)

        }).then(function(settings) {

            // Get virtual proxy configuration

            var vpsettings = settings.settings.virtualProxies[0];

            var options2 = extend(true, {}, options, {
                restUri: restUri.protocol + '//' + restUri.host + '/qrs/virtualproxyconfig/' + vpsettings.id,
                method: 'GET'
            });

            options2.pfx = options.pfx;

            return base.request(options2);

        }).then(function(settings) {

            // If IP not already in whitelist

            if(settings.websocketCrossOriginWhiteList.indexOf(ip) == -1) {

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

                var options2 = extend(true, {}, options, {
                    restUri: restUri.protocol + '//' + restUri.host + '/qrs/virtualproxyconfig/' + settings.id,
                    method: 'PUT'
                });

                options2.pfx = options.pfx;

                return base.request(options2, settings);

            } else {

                // Else just return the VP config

                return settings;
            }

        })

    },

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
     *          templateAppId: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
     *          templateMaxParDup: 5,
     *          scriptMarker: '%Replace me!%',
     *          scriptReplaces: [ 'Employees.qvd' ],
     *          scriptRegex: /(.*) << (.*) ([0-9,]+) Lines fetched/g,
     *          publishStreamId: 'aaec8d41-5201-43ab-809f-3063750dfafd',
     *          publishReplace: true,
     *          task: task
     *      });
     *
     * });
     * ```
     *
     * @memberOf Qlik
     *
     * @param {options} options Uri to the Qlik Sense endpoint
     * @param {string} options.templateAppId id of the template application
     * @param {int} [options.templateMaxParDup=5] maximum number of // operations (opened sockets & QRS API queries)
     * @param {string} [options.scriptMarker=] marker to be found in the script and replaced during the duplication. If this parameter is null, the script is not updated.
     * @param {Array.<string>} options.scriptReplaces replace value of the marker above for each array value
     * @param {RegExp} [options.scriptRegex=] regex to track in the script trace. If this parameter is null (or scriptMarker parameter above is null), then the app is not reloaded
     * @param {string} [options.publishStreamId=] id of the stream to publish into. If this parameter is null, then the app is not published
     * @param {boolean} options.publishReplace boolean telling wether to replace the app if an app with the same name was already published in the same stream
     * @param {Task} options.task task that will trace the cloning progress
     * @returns {Promise} a promise that resolves when the process is finished
     */
    dynamicAppClone: function(options) {

        var selfArguments = arguments;

        var restUri = url.parse(options.restUri);
        var templateAppId = options.templateAppId;
        var templateMaxParDup = core.ifNotUndef(options.templateMaxParDup, 5);
        var scriptMarker = options.scriptMarker;
        var scriptReplaces = options.scriptReplaces;
        var scriptRegex = options.scriptRegex;
        var publishStreamId = options.publishStreamId;
        var publishReplace = core.ifNotUndef(options.publishReplace, false);
        var task = options.task;

        restUri.port = core.ifNotUndef(restUri.port, (restUri.protocol === 'https:') ? "443" : "80");
        if (!Array.isArray(scriptReplaces)) scriptReplaces = [ { replace: scriptReplaces, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s %(replace)s' }];

        scriptReplaces = scriptReplaces.map(function(item) {
            if(item === null || typeof item !== 'object') {
                return  { replace: item, oldAppName: '%(newAppName)s', newAppName: '%(templateName)s %(replace)s' };
            } else return item;
        });

        task.running('info', 'Starting!');

        return Q().then(function () {

            // Generate a ticket

            return exports.Advanced.getTicket({
                restUri: 'https://' + restUri.hostname + ':4243',
                pfx: options.pfx,
                passPhrase: ''
            }, {
                UserId: options.UserId,
                UserDirectory: options.UserDirectory,
                Attributes: []
            });

        }).then(function (ticket) {

            // Connect the web socket using the ticket

            task.running('info', 'Session opened');

            var wsConfig = {
                host: restUri.hostname,
                port: restUri.port,
                isSecure: restUri.protocol === 'https:',
                origin: 'http://localhost',
                rejectUnauthorized: false,
                ticket: ticket.Ticket
            };

            return Q.all([
                qsocks.Connect(wsConfig)
            ])

        }).then(function (reply) {

            // Connected

            var wsGlobal = reply[0];

            task.running('info', 'Socket connected');

            return Q.all([
                wsGlobal,
                wsGlobal.getDocList()
            ]);

        }).then(function (reply) {

            // Find template within the list

            var wsGlobal = reply[0];
            var docList = reply[1];

            task.running('info', 'Got document List');

            var arrayFound = docList.filter(function (item) {
                return item.qDocId == templateAppId;
            });

            if (arrayFound[0].qDocId == templateAppId)

                return Q.all([
                    wsGlobal,
                    arrayFound[0].qDocId,
                    arrayFound[0].qDocName
                ]);

            else
                Q.reject('Template not found');

        }).then(function (reply) {

            // Clone app

            var wsGlobal = reply[0];
            var templateId = reply[1];
            var templateName = reply[2];

            task.running('info', 'Template found');

            var newAppsStep = Q.resolve([]);
            var newApps = [];
            array.chunk(scriptReplaces, templateMaxParDup).forEach(function (scriptReplacesChunk) {
                var newAppsChunk = [];

                scriptReplacesChunk.forEach(function(scriptReplace) {
                    newAppsChunk.push(
                        function() {

                            task.running('info', "Generating clone named '" + sprintf(scriptReplace.newAppName, {
                                    templateName: templateName,
                                    replace: scriptReplace.replace
                                }) + "'");

                            return base.request({
                                restUri: 'https://' + restUri.hostname + ':4242/qrs/app/' + templateId + '/copy?name=' + sprintf(scriptReplace.newAppName, {
                                    templateName: templateName,
                                    replace: scriptReplace.replace
                                }),
                                pfx: options.pfx,
                                passPhrase: '',
                                UserId: options.UserId,
                                UserDirectory: options.UserDirectory,
                                timeout: 600000
                            }).then(function (clonedApp) {
                                return {
                                    scriptReplace: scriptReplace,
                                    clonedApp: clonedApp
                                }
                            })
                        }
                    )
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

        }).then(function (reply) {

            // Replace app script

            var wsGlobal = reply[0];
            var newApps = reply[1];

            task.running('info', 'App cloned ' + newApps.length + ' time(s)');

            // Replace script marker and reload in //
            // Only if marker is not null!

            var newAppsScriptReplacedStep = Q.resolve([]);
            var newAppsScriptReplaced = [];
            array.chunk(newApps, templateMaxParDup).forEach(function (newAppsChunk) {

                var newAppsScriptReplacedChunk = [];
                newAppsChunk.forEach(function (newApp) {

                    newAppsScriptReplacedChunk.push(
                        function() {

                            var step = Q();

                            if (typeof scriptMarker !== 'undefined' || typeof scriptRegex !== 'undefined' || typeof publishStreamId !== 'undefined') {

                                // Open socket only if there is something to do on the app

                                step = step.then(function () {

                                    // Generate a ticket for app specific web socket

                                    return Q.all([

                                        exports.Advanced.getTicket({
                                            restUri: 'https://' + restUri.hostname + ':4243',
                                            pfx: options.pfx,
                                            passPhrase: ''
                                        }, {
                                            UserId: options.UserId,
                                            UserDirectory: options.UserDirectory,
                                            Attributes: []
                                        })

                                    ])


                                }).then(function (reply) {

                                    // Connect the web socket using the ticket

                                    var ticket = reply[0];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Got ticket'});

                                    var wsCloneConfig = {
                                        host: restUri.hostname,
                                        port: restUri.port,
                                        isSecure: restUri.protocol === 'https:',
                                        origin: 'http://localhost',
                                        rejectUnauthorized: false,
                                        ticket: ticket.Ticket,
                                        appname: newApp.clonedApp.id
                                    };

                                    return Q.all([
                                        qsocks.Connect(wsCloneConfig)
                                    ]);

                                }).then(function (reply) {

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

                                step = step.then(function (reply) {

                                    // Replace the script marker by the replace value

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application opened'});

                                    return Q.all([
                                        wsCloneGlobal,
                                        Q().then(function () {
                                            return clonedApp.getScript();
                                        }).then(function (result) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application script extracted'});
                                            return clonedApp.setScript(result.replace(scriptMarker, newApp.scriptReplace.replace));
                                        }).then(function (result) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application script replaced'});
                                            return clonedApp.doSave();
                                        }).then(function (result) {
                                            task.running('info', {id: newApp.clonedApp.id, msg: 'Application saved'});
                                            return clonedApp;
                                        })
                                    ]);

                                })

                            }

                            if (typeof scriptRegex !== 'undefined') {

                                Q().then(function (reply) {

                                    // Reload and monitor reload progress

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    var timer = setInterval(function () {
                                        wsCloneGlobal.getProgress(0).then(function (result) {
                                            if (result.qPersistentProgress) {
                                                var rePattern = new RegExp(scriptRegex);
                                                var match = rePattern.exec(result.qPersistentProgress);
                                                while (match != null) {
                                                    task.running('reload', {id: newApp.clonedApp.id, msg: match});
                                                    match = rePattern.exec(result.qPersistentProgress);
                                                }
                                            }
                                        })
                                    }, 1000);

                                    return Q.all([
                                        wsCloneGlobal,
                                        clonedApp.doReload().then(function (result) {
                                            if (result) {
                                                clearInterval(timer);
                                                task.running('info', {id: newApp.clonedApp.id, msg: 'Application reloaded'});
                                                return clonedApp.doSave().then(function (result) {
                                                    return clonedApp;
                                                });
                                            } else {
                                                return Q.reject({id: newApp.clonedApp.id, msg: 'Application not reloaded'});
                                            }
                                        })
                                    ]);

                                });

                            }

                            if (typeof publishStreamId !== 'undefined') {

                                step = step.then(function (reply) {

                                    // Publish app in the given stream

                                    var wsCloneGlobal = reply[0];
                                    var clonedApp = reply[1];

                                    task.running('info', {id: newApp.clonedApp.id, msg: 'Application saved'});

                                    if (typeof publishStreamId !== 'undefined') {

                                        if (publishReplace) {

                                            return wsGlobal.getDocList().then(function (reply) {

                                                // Find previous app with the same name

                                                return reply.filter(function (item) {
                                                    return item.qMeta.stream && item.qMeta.stream.id == publishStreamId && item.qDocName == sprintf(newApp.scriptReplace.oldAppName, { newAppName: newApp.clonedApp.name });
                                                })

                                            }).then(function (reply) {

                                                // If there was no previous app with the same name
                                                // Just publish the app

                                                if (reply.length == 0) {

                                                    return Q.all([
                                                        wsCloneGlobal,
                                                        clonedApp.publish(publishStreamId).then(function (result) {
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

                                                    return base.request({

                                                        restUri: 'https://' + restUri.hostname + ':4242/qrs/app/' + newApp.clonedApp.id + '/replace?app=' + reply[0].qDocId,
                                                        pfx: options.pfx,
                                                        passPhrase: '',
                                                        UserId: options.UserId,
                                                        UserDirectory: options.UserDirectory,
                                                        method: 'PUT',
                                                        timeout: 600000

                                                    }).then(function (reply) {

                                                        task.running('info', {
                                                            id: newApp.clonedApp.id,
                                                            msg: 'Application published (replaced)'
                                                        });

                                                        return base.request({

                                                            restUri: 'https://' + restUri.hostname + ':4242/qrs/app/' + newApp.clonedApp.id,
                                                            pfx: options.pfx,
                                                            passPhrase: '',
                                                            UserId: options.UserId,
                                                            UserDirectory: options.UserDirectory,
                                                            method: 'DELETE',
                                                            timeout: 600000

                                                        })

                                                    }).then(function (reply) {

                                                        task.running('info', {
                                                            id: newApp.clonedApp.id,
                                                            msg: 'Removed unpublished app'
                                                        });

                                                        return Q.all([
                                                            wsCloneGlobal
                                                        ]);

                                                    })


                                                }

                                            })

                                        } else {

                                            return Q.all([
                                                wsCloneGlobal,
                                                clonedApp.publish(publishStreamId).then(function (result) {
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

                                })

                            }

                            if (typeof scriptMarker !== 'undefined' || typeof scriptRegex !== 'undefined' || typeof publishStreamId !== 'undefined') {

                                // Close socket only if there was something to do on the app

                                step = step.then(function (reply) {

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
                                return task.running('redirect', newApp.clonedApp.id);
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
                    return newAppsScriptReplaced.concat(reply);;
                })
            ]);

        }).then(function (reply) {

            // Close master web socket

            reply[0].connection.close();

        }).fail(function (err) {

            task.failed('error', err);
            return Q.reject(err);

        })

    }

};