var http = require('http');
var https = require('https');
var crypto = require('crypto');
var url = require('url');
var fs = require('fs');
var basic = require('basic-auth');
var uuid = require('node-uuid');
var Q = require('q');
var extend = require('cloneextend');
var qsocks = require('qsocks');

var exports = {};

/**
 * A set of utility functions / classes for simplifying the call to Qlik Sense APIs
 * @module qlik-utils
 * @typicalname utils
 * @author Loic Formont
 * @copyright Copyright (C) 2015 Loic Formont
 * @license MIT Licensed
 *
 * @example
 * var utils = require("qlik-utils");
 *
 */
module.exports = exports;

/**
 * Two parameters mode
 *  If a is undefined, return b else a
 * Three parameters mode
 *  If a is undefined, return c else b
 *
 * @example
 * var myHost = utils.ifnotundef(options.host, options.hostname);
 *
 * @example
 * var myHost = utils.ifnotundef(options.host, options.hostname, 'localhost');
 *
 * @param {*} a
 * @param {*} b
 * @param {*=} c
 * @returns {*}
 */
exports.ifnotundef = function(a, b, c) {
    return (arguments.length <= 2) ?
        ((typeof a != 'undefined' && a != null) ? a : b) :
        ((typeof a != 'undefined' && a != null) ? b : c);
}

/**
 * Generates a random Xrf key of a given size within a set of given chars
 *
 * @example
 * var xrf = utils.generateXrfkey(8);
 *
 * @param {int=} [size=16]
 * @param {string=} [chars=abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789]
 * @returns {string}
 */
exports.generateXrfkey = function(size, chars) {
    size = size || 16;
    chars = chars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';

    var rnd = crypto.randomBytes(size), value = new Array(size), len = chars.length;

    for (var i = 0; i < size; i++) {
        value[i] = chars[rnd[i] % len]
    }

    return value.join('');
};

/**
 * @typedef options
 * @type {Object}
 * @property {string} [UserDirectory=.] the user directory of the Qlik Sense user that will make the API call
 * @property {string} [UserId=qlikservice] the user id of the Qlik Sense user that will make the API call
 * @property {string} [session] the cookie of a valid Qlik Sense session
 * @property {string} restUri an URI to a valid Qlik Sense endpoint
 * @property {string} [method=POST] the method of the HTTP request (GET/PUT/POST/DELETE)
 * @property {buffer} [pfx] the Qlik Sense pfx certificate (not required if a session is set)
 * @property {string} [passphrase] the Qlik Sense certificate's passphrase (not required if a session is set)
 * @property {int} [timeout] the timeout of the HTTP request
 */

/**
 * @typedef ticketParams
 * @type {Object}
 * @property {string} UserId the user id to generate a ticket for
 * @property {string} UserDirectory the user directory of the user to generate a ticket for
 * @property {string[]} Attributes the user attributes
 */

/**
 * @typedef ticket
 * @type {Object}
 * @property {string} UserId the user id of the generated ticket
 * @property {string} UserDirectory the user directory of generated ticket
 * @property {string[]} Attributes the user attributes
 * @property {string} Ticket the ticket
 * @property {string} TargetUri the target uri
 *
 */

/**
 * Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object
 *
 * @example
 * utils.request({
 *      restUri: 'https://10.76.224.72:4243/qps/ticket',
 *      pfx: pfx,
 *      passPhrase: ''
 * }, {
 *      'UserId': 'qlikservice',
 *      'UserDirectory': '2008R2-0',
 *      'Attributes': []
 * }).then(function(retVal) {
 *      console.log(retVal);
 * });
 *
 * @param {options} options the options to connect to the API endpoint
 * @param {Object=} [params] the parameters to post to the API endpoint
 * @returns {Promise<*>} a promise resolving to the response to the request
 */
exports.request = function(options, params) {

    var xrfkey = exports.generateXrfkey();
    var restUri = url.parse(options.restUri);

    var headers = {
        'X-Qlik-Xrfkey': xrfkey,
        'Content-Type': 'application/json'
    };

    if(typeof options.UserDirectory != 'undefined' || typeof options.UserId != 'undefined')
        headers['X-Qlik-User'] = 'UserDirectory= ' + exports.ifnotundef(options.UserDirectory, '.') + '; UserId= ' + exports.ifnotundef(options.UserId, 'qlikservice');

    if(typeof options.session != 'undefined')
        headers['Cookie'] = options.session;

    var timeout = exports.ifnotundef(options.timeout, 10000);

    var settings = {
        protocol: restUri.protocol,
        host: restUri.hostname,
        port: restUri.port,
        path: restUri.pathname + '?' + exports.ifnotundef(restUri.query, restUri.query + '&', '') + 'xrfkey=' + xrfkey,
        method: exports.ifnotundef(options.method, 'POST'),
        headers: headers,
        rejectUnauthorized: false,
        agent: false
    };

    if(typeof options.pfx != 'undefined') settings.pfx = options.pfx;
    if(typeof options.passPhrase != 'undefined') settings.passPhrase = options.passPhrase;

    var requestDef = Q.defer();

    if(settings.protocol == 'http:' && typeof options.pfx != 'undefined') requestDef.reject('https is needed to make API call with certificate');
    else if(settings.protocol != 'https:' && settings.protocol != 'http:') requestDef.reject('http/https is needed to make API call');
    else {

        var prot = (settings.protocol == 'https:') ? https : http;

        var apireq = prot.request(settings, function (apires) {

            var body = "";
            apires.on('data', function (d) {
                body += d.toString()
            });

            apires.on('end', function (d) {
                try {
                    requestDef.resolve(JSON.parse(body));
                } catch(err) {
                    requestDef.reject({err: err, body: body});
                }
            });

        });

        apireq.on('socket', function (socket) {
            socket.setTimeout(parseInt(timeout));
            socket.on('timeout', function() {
                apireq.abort();
            });
        });

        if(params) {
            apireq.write(JSON.stringify(params));
        }

        apireq.end();

        apireq.on('error', function (e) {
            requestDef.reject(e);
        });

    }

    return requestDef.promise;

};

/**
 * Generates a ticket on Qlik Sense QRS Api
 *
 * @example
 * utils.getTicket({
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
 *
 * @param {ticketParams} params the ticket parameters
 * @param {options} options the options to connect to the ticket API endpoint
 * @returns {Promise<ticket>} resolving to the generated ticket
 */
exports.getTicket = function(options, params) {

    var restUri = url.parse(options.restUri);

    var ticketOptions = extend.cloneextend(options, {
        restUri: restUri.protocol + '//' + restUri.host + '/qps/ticket',
        method: 'POST'
    });

    ticketOptions.pfx = options.pfx;

    return exports.request(ticketOptions, params);

};

exports.disconnectUser = function(options, params) {

    var restUri = url.parse(options.restUri);

    var ticketOptions = extend.cloneextend(options, {
        restUri: restUri.protocol + '//' + restUri.host + '/qps/ticket',
        method: 'POST'
    });

    return exports.request(ticketOptions, params);

};

/**
 * Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie
 *
 * @example
 * utils.openSession({
 *      UserDirectory: '2008R2-0',
 *      UserId: 'qlikservice',
 *      Attributes: [],
 *      Ticket: 'QzSPXzBmJKjhucPF',
 *      TargetUri: null
 * }, 'https://localhost/hub').then(function(retVal) {
 *      console.log(retVal);
 * });
 *
 * @param {ticket} ticket the generated ticket
 * @param {string} hostUri the URI of the Qlik Sense host (Hub or preferably QMC) to open a session on
 * @returns {Promise<string>} a promise resolving to the session cookie
 */
exports.openSession = function(ticket, hostUri) {

    var requestDef = Q.defer();
    var restUri = url.parse(hostUri);

    var settings = {
        host: restUri.hostname,
        port: restUri.port,
        path: restUri.pathname + '?' + exports.ifnotundef(restUri.query, restUri.query + '&', '') + 'qlikTicket=' + ticket.Ticket,
        method: 'GET',
        rejectUnauthorized: false,
        agent: false
    };

    var prot = (restUri.protocol == 'https:') ? https : http;

    var req = prot.request(settings, function (response) {

        var body = "";
        response.on('data', function (d) {
            body += d.toString()
        });

        response.on('end', function (d) {

        });

        response.on('data', function (d) {
            var cookies = response.headers['set-cookie'];
            requestDef.resolve(cookies[0]);
        });
    });

    req.on('socket', function (socket) {
        socket.setTimeout(10000);
        socket.on('timeout', function() {
            req.abort();
        });
    });

    req.on('error', function(e) {
        console.log('ERROR!!', e)
        requestDef.reject(e);
    });

    req.end();

    return requestDef.promise;

}


/**
 * Adds the given ip address to the websocket whitelist of the given virtual proxy.
 * Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent API
 * calls within this restart will fail miserably with various random & useless error messages.
 *
 * @example
 * readFile('./client.pfx').then(function(certif) {
 *
 *      return utils.addToWhiteList('10.76.224.72', {
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
 *
 * @param  {string} ip the ip to add
 * @param  {options} options the endpoint to add the ip to
 * @returns {Promise<Object>} a promise resolving to the virtual proxy configuration when successfull
 */
exports.addToWhiteList = function(ip, options) {

    var restUri = url.parse(options.restUri);

    return Q().then(function() {

        var options2 = extend.cloneextend(options, {
            restUri: restUri.protocol + '//' + restUri.host + '/qrs/proxyservice/local',
            method: 'GET'
        });

        options2.pfx = options.pfx;

        return exports.request(options2)

    }).then(function(settings) {

        var vpsettings = settings.settings.virtualProxies[0];

        var options2 = extend.cloneextend(options, {
            restUri: restUri.protocol + '//' + restUri.host + '/qrs/virtualproxyconfig/' + vpsettings.id,
            method: 'GET'
        });

        options2.pfx = options.pfx;

        return exports.request(options2);

    }).then(function(settings) {

        if(settings.websocketCrossOriginWhiteList.indexOf(ip) == -1) {

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

            var options2 = extend.cloneextend(options, {
                restUri: restUri.protocol + '//' + restUri.host + '/qrs/virtualproxyconfig/' + settings.id,
                method: 'PUT'
            });

            options2.pfx = options.pfx;

            return exports.request(options2, settings);

        } else {
            return settings;
        }

    })

};


/**
 * Loops until func finishes successfully
 *
 * @example
 * utils.loop(
 *      utils.addToWhiteList,
 *      [
 *          '10.76.224.72',
 *          {
 *              restUri: 'https://10.76.224.72:4242',
 *              pfx: certif,
 *              passPhrase: '',
 *              UserId: 'qlikservice',
 *              UserDirectory: '2008R2-0'
 *          }
 *      ],
 *      30,
 *      2000,
 *      task
 * );
 *
 * @param {Function} func the function to start (must return a promise)
 * @param {*} param the parameters to pass to the function (as an array)
 * @param {int} retry the number of times to retry
 * @param {int} retryTimeout the delay to wait before restarting the function after a failure
 * @param {Task} task the task object to update when required
 */
exports.loop = function(func, param, retry, retryTimeout, task) {

    func
        .apply(this, param)
        .then(task.done)
        .fail(function (ret) {

            if(retry == 1) {

                task.failed(ret);
                return Q.reject(ret);

            } else {

                return exports.setTimeout2Promise(retryTimeout).then(function () {

                    task.running(ret);
                    exports.loop(func, param, retry - 1, retryTimeout, task);

                });
            }

        });

};


/**
 * Simple basic auth middleware for use with Express 4.x.
 *
 * @example
 * app.use('/api-requiring-auth', utils.basicAuth([{user: 'username', pass: 'password'}]));
 *
 * @param   {Object}   users list of usernames & passwords
 * @returns {function} Express 4 middleware requiring the given credentials
 */
exports.basicAuth = function(users) {
    return function(req, res, next) {
        var user = basic(req);

        if(
            !user || users.filter(function(item) {
                return item.user == user.name && item.pass == user.pass;
            }).length == 0
        ) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            return res.send(401);
        }

        req.authUser = user.name;
        next();
    };
};


/**
 * Remove object from an array on condition
 * @param array
 * @param callback
 */
exports.removeIf = function(array, callback) {
    var i = 0;
    while (i < array.length) {
        if (callback(array[i], i)) {
            array.splice(i, 1);
        }
        else {
            ++i;
        }
    }
};


/**
 * Creates a new task.
 * @class Task
 * @classdesc This class enables you to handle tasks asynchronously.
 */
exports.task = function() {

    var _this = this;
    var listenDef, listen;
    var bound = [];

    // Private methods

    var notifyBound = function() {
        listen.then(function(task) {
            var retVal = [];
            bound.forEach(function(item) {
                retVal.push(item.func(_this));
            });
            return Q.all(retVal);
        });
    }
;
    var changeStatus = function(status, val, detail) {

        _this.status = status;
        _this.modifiedDate = new Date();
        _this.val = val;
        _this.detail = detail;

        var retVal = [];
        bound.forEach(function(item) {
            retVal.push(item.func(_this));
        });

        exports.removeIf(bound, function(item) { return item.mode == 'once'; });

        return Q.all(retVal);

    };

    // constructor

    _this.guid = uuid.v1();
    changeStatus('waiting');

    // Public methods

    /**
     * Starts the task.
     *
     * @member Task#start
     * @function
     */
    this.start = function() {
        _this.startedDate = new Date();
        return this.running();
    };

    /**
     * Changes the task to the 'running' status.
     * This method can also be called to update the 'running' status with a new value
     *
     * @member Task#running
     * @function
     *
     * @param {*} val the progress value
     * @param {*=} detail additional details to push into the progress value
     */
    this.running = function(val, detail) {
        return changeStatus('running', val, detail);
    };

    /**
     *
     * @param func
     */
    this.once = function(func) {
        if(bound.filter(function(item) { return item.func == func }).length == 0) {
            bound.push({ func: func, mode: 'once' });
        }

        if(_this.status == 'done' || _this.status == 'failed') func(_this);
    };

    /**
     *
     * @param func
     */
    this.bind = function(func) {
        if(bound.filter(function(item) { return item.func == func }).length == 0) {
            bound.push({ func: func, mode: 'bind' });
        }

        if(_this.status == 'done' || _this.status == 'failed') func(_this);
    };

    /**
     *
     * @param func
     */
    this.unbind = function(func) {
        exports.removeIf(bound, function(item) { return item.func == func; });
    };

    /**
     * Ends the task with the 'done' status.
     *
     * @member Task#done
     * @function
     *
     * @param {*} val the progress value
     * @param {*=} detail additional details to push into the progress value
     */
    this.done = function(val, detail) {
        return changeStatus('done', val, detail);
    };

    /**
     * ends the task with the 'failed' status.
     *
     * @member Task#failed
     * @function
     *
     * @param {*} val the progress value
     * @param {*=} detail additional details to push into the progress value
     */
    this.failed = function(val, detail) {
        return changeStatus('failed', val, detail);
    };

};

/**
 * Similar to the promise.all function but with tasks
 *
 * @memberof Task
 * @param {Object.<string, Task>} tasks An object listing tasks with their name
 * @returns {Promise} A promise that resolves when all the tasks are resolved
 */
exports.task.all = function(tasks) {

    var tasksListeners = [], keys = [];
    for (var key in tasks) {
        if (tasks.hasOwnProperty(key)) {
            keys.push(key);
            tasksListeners.push(tasks[key].listen);
        }
    }

    return Q.all(tasksListeners).then(function(ret) {
        var retVal = {};
        ret.forEach(function(item, index) {
            retVal[keys[index]] = item;
        });
        return retVal;
    });
};


/**
 * Equivalent to setTimeout but returns a promise instead
 *
 * @example
 * utils.setTimeout2Promise(1000).then(function() {
 *      console.log('hi');
 * });
 *
 * @param timeout the timeout in ms
 * @returns {Promise}
 */
exports.setTimeout2Promise = function(timeout) {

    var timeoutDef = Q.defer();

    setTimeout(function() {
        timeoutDef.resolve();
    }, timeout);

    return timeoutDef.promise;

};


/**
 * Duplicates a template app, updates its script, reloads it and publishes it
 *
 * @example
 * readFile(testQlikSensePfx).then(function(pfx) {
 *
 *      return utils.dynamicAppClone({
 *              restUri: testQlikSenseIp,
 *              pfx: pfx,
 *              'UserId': 'qlikservice',
 *              'UserDirectory': '2008R2-0'
 *          }, {
 *              'UserId': 'qlikservice',
 *              'UserDirectory': '2008R2-0',
 *              'Attributes': []
 *          },
 *          '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',
 *          '%Replace me!%',
 *          randomLoop,
 *          /Text << fields ([0-9,]+) Lines fetched/g,
 *          'aaec8d41-5201-43ab-809f-3063750dfafd',
 *          task
 *      );
 *
 * });
 *
 * @param {options} options Uri to the Qlik Sense endpoint
 * @param {ticketParams} ticketParam parameters of the ticket to generate
 * @param {string} templateAppId id of the template application
 * @param {string} scriptMarker marker to be found in the script and replaced during the duplication
 * @param {string} scriptReplace replace value of the marker above
 * @param {RegExp} scriptRegex regex to track in the script trace
 * @param {string} publishStreamId id of the stream to publish into
 * @param {Task} task task that will trace the cloning progress
 * @returns {*}
 */
exports.dynamicAppClone = function(options, ticketParam, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task) {

    task.running('info', 'Starting!');

    return Q().then(function() {

        return exports.getTicket({
            restUri: 'https://' + options.restUri + ':4243',
            pfx: options.pfx,
            passPhrase: ''
        }, ticketParam);

    }).then(function(ticket) {

        task.running('info', 'Ticket generated');

        return exports.openSession(ticket, 'https://' + options.restUri + '/qmc/').fail(console.log);

    }).then(function(session) {

        task.running('info', 'Session opened');

        var wsConfig = {
            host: options.restUri,
            isSecure: true,
            origin: 'http://localhost',
            rejectUnauthorized: false,
            headers: {
                "Content-Type": "application/json",
                "Cookie": session
            }
        };

        return qsocks.Connect(wsConfig);

    }).then(function (wsGlobal) {

        task.running('info', 'Socket connected');

        return Q.all([
            wsGlobal,
            wsGlobal.getDocList().then(function(item) {return item;}, console.log)
        ]);

    }).then(function(reply) {

        var wsGlobal = reply[0];
        var docList = reply[1];

        task.running('info', 'Got document List');

        var arrayFound = docList.filter(function(item) {
            return item.qDocId == templateAppId;
        });

        if(arrayFound[0].qDocId == templateAppId)

            return Q.all([
                wsGlobal,
                arrayFound[0].qDocId,
                arrayFound[0].qDocName
            ]);

        else
            Q.reject('Template not found');

    }).then(function(reply) {

        var wsGlobal = reply[0];
        var templateId = reply[1];
        var templateName = reply[2];

        task.running('info', 'Template found');

        return Q.all([
            wsGlobal,
            exports.request({
                restUri: 'https://' + options.restUri + ':4242/qrs/app/' + templateId + '/copy?name=' + templateName + ' ' + scriptReplace,
                pfx: options.pfx,
                passPhrase: '',
                UserId: options.UserId,
                UserDirectory: options.UserDirectory
            })
        ]);

    }).then(function (reply) {

        var wsGlobal = reply[0];
        var clonedApp = reply[1];

        task.running('info', 'Application cloned from template');

        return Q.all([
            wsGlobal,
            clonedApp.id,
            wsGlobal.openDoc(clonedApp.id)
        ]);

    }).then(function(reply) {

        var wsGlobal = reply[0];
        var clonedAppId = reply[1];
        var clonedApp = reply[2];

        task.running('info', 'Application opened');

        return Q.all([
            wsGlobal,
            clonedAppId,
            Q().then(function() {
                return clonedApp.getScript();
            }).then(function (result) {
                task.running('info', 'Application script extracted');
                return clonedApp.setScript(result.replace(scriptMarker, scriptReplace));
            }).then(function (result) {
                task.running('info', 'Application script replaced');
                return clonedApp.doSave();
            }).then(function (result) {
                return clonedApp;
            })
        ]);

    }).then(function(reply) {

        var wsGlobal = reply[0];
        var clonedAppId = reply[1];
        var clonedApp = reply[2];

        task.running('info', 'Application saved');

        var timer = setInterval (function () {
            wsGlobal.getProgress(0).then(function(result) {
                if(result.qPersistentProgress) {
                    var rePattern = new RegExp(scriptRegex);
                    var match = rePattern.exec(result.qPersistentProgress);
                    while (match != null) {
                        task.running('reload', match[1] + ' rows fetched...');
                        match = rePattern.exec(result.qPersistentProgress);
                    }
                }
            })
        }, 1000);

        return Q.all([
            wsGlobal,
            clonedAppId,
            clonedApp.doReload().then(function(result) {
                if (result) {
                    clearInterval(timer);
                    task.running('info', 'Application reloaded');
                    return clonedApp.doSave().then(function (result) {
                        return clonedApp;
                    });
                } else {
                    return Q.reject('Application not reloaded');
                }
            })
        ]);

    }).then(function(reply) {

        var wsGlobal = reply[0];
        var clonedAppId = reply[1];
        var clonedApp = reply[2];

        task.running('info', 'Application saved');

        return Q.all([
            wsGlobal,
            clonedAppId,
            clonedApp.publish(publishStreamId).then(function(result) {
                return clonedApp;
            })
        ]);

    }).then(function(reply) {

        var wsGlobal = reply[0];
        var clonedAppId = reply[1];
        var clonedApp = reply[2];

        task.running('info', 'Application published');
        task.running('redirect', clonedAppId);

    }, function(err) {
        task.failed(err);
    });

};


