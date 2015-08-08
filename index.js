var https = require('https');
var crypto = require('crypto');
var url = require('url');
var fs = require('fs');
var basic = require('basic-auth');
var uuid = require('node-uuid');
var Q = require('q');
var extend = require('cloneextend');

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
    return (typeof c == 'undefined') ? ((typeof a != 'undefined' && a != null) ? a : b) : ((typeof a != 'undefined' && a != null) ? b : c);
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
 *      'UserId': 'qlikservice',
 *      'UserDirectory': '2008R2-0',
 *      'Attributes': []
 * }, {
 *      restUri: 'https://10.76.224.72:4243/qps/ticket',
 *      pfx: pfx,
 *      passPhrase: ''
 * }).then(function(retVal) {
 *      console.log(retVal);
 * });
 *
 * @param {Object=} [params] the parameters to post to the API endpoint
 * @param {options} options the options to connect to the API endpoint
 * @returns {Promise<*>} a promise resolving to the response to the request
 */
exports.request = function(params, options) {

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

    var settings = {
        protocol: restUri.protocol,
        host: restUri.hostname,
        port: restUri.port,
        path: restUri.pathname + '?' + exports.ifnotundef(restUri.query, restUri.query + '&', '') + 'xrfkey=' + xrfkey,
        method: exports.ifnotundef(options.method, 'POST'),
        headers: headers,
        pfx: exports.ifnotundef(options.pfx, null),
        passphrase: exports.ifnotundef(options.passPhrase, null),
        rejectUnauthorized: false,
        agent: false
    };

    var requestDef = Q.defer();

    if(settings.protocol != 'https:') requestDef.reject('https is needed to make API call');
    else {

        var apireq = https.request(settings, function (apires) {

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

        if(typeof options.timeout != 'undefined')
            apireq.on('socket', function (socket) {
                socket.setTimeout(parseInt(options.timeout));
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
 *      'UserId': 'qlikservice',
 *      'UserDirectory': '2008R2-0',
 *      'Attributes': []
 * }, {
 *      restUri: 'https://10.76.224.72:4243',
 *      pfx: pfx,
 *      passPhrase: ''
 * }).then(function(retVal) {
 *      console.log(retVal);
 * });
 *
 * @param {ticketParams} params the ticket parameters
 * @param {options} options the options to connect to the ticket API endpoint
 * @returns {Promise<ticket>} resolving to the generated ticket
 */
exports.getTicket = function(params, options) {

    var restUri = url.parse(options.restUri);

    var ticketOptions = extend.cloneextend(options, {
        restUri: restUri.protocol + '//' + restUri.host + '/qps/ticket',
        method: 'POST'
    });

    return exports.request(params, ticketOptions);

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
        response.on('data', function (d) {
            var cookies = response.headers['set-cookie'];
            requestDef.resolve(cookies[0]);
        });
    });

    req.on('error', function(e) {
        requestDef.reject(e);
    });

    req.end();

    return requestDef.promise;

}


/**
 * Adds the given ip address to the websocket whitelist of the given virtual proxy
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

        return exports.request(null, options2)

    }).then(function(settings) {

        var vpsettings = settings.settings.virtualProxies[0];

        var options2 = extend.cloneextend(options, {
            restUri: restUri.protocol + '//' + restUri.host + '/qrs/virtualproxyconfig/' + vpsettings.id,
            method: 'GET'
        });

        options2.pfx = options.pfx;

        return exports.request(null, options2);

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

            return exports.request(settings, options2);

        } else {
            return 'already in whitelist!'
        }

    })

}


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
 * Creates a new task.
 * @class Task
 * @classdesc This class enables you to handle tasks asynchronously. It relies on Q promises.
 */
exports.task = function() {

    var _this = this;
    var listenDef;

    // Private methods

    var changeStatus = function(status, val) {

        _this.status = status;
        _this.modifiedDate = new Date();
        _this.val = val;

        var oldListenDef = listenDef;

        if(_this.status == 'waiting' || _this.status == 'running') {
            listenDef = Q.defer();
            _this.listen = listenDef.promise;
        }

        if(typeof oldListenDef != 'undefined') {
            oldListenDef.resolve(_this);
        }

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
        this.running();
    };

    /**
     * Changes the task to the 'running' status.
     * This method can also be called to update the 'running' status with a new value
     *
     * @member Task#running
     * @function
     *
     * @param {*} val the progress value
     */
    this.running = function(val) {
        changeStatus('running', val);
    };

    /**
     * Ends the task with the 'done' status.
     *
     * @member Task#done
     * @function
     *
     * @param {*} val the progress value
     */
    this.done = function(val) {
        changeStatus('done', val);
    };

    /**
     * ends the task with the 'failed' status.
     *
     * @member Task#failed
     * @function
     *
     * @param {*} val the progress value
     */
    this.failed = function(val) {
        changeStatus('failed', val);
    };

}

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
        })
        return retVal;
    });
}


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

}
