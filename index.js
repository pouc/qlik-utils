var https = require('https');
var crypto = require('crypto');
var url = require('url');
var fs = require('fs');
var basic = require('basic-auth');

/**
 * Two parameters mode
 *  If a is undefined, return b else a
 * Three parameters mode
 *  If a is undefined, return c else b
 * @param {*} a
 * @param {*} b
 * @param {*=} c
 * @returns {*}
 */
function ifnotundef(a, b, c) {
    return (typeof c == 'undefined') ? ((typeof a != 'undefined' && a != null) ? a : b) : ((typeof a != 'undefined' && a != null) ? b : c);
}

/**
 * Generates a random Xrf key of a given size within a set of given chars
 * @param {integer=} [size=16]
 * @param {string=} [chars=abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789]
 * @returns {string}
 */
function generateXrfkey(size, chars) {
    size = size || 16;
    chars = chars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';

    var rnd = crypto.randomBytes(size), value = new Array(size), len = chars.length;

    for (var i = 0; i < size; i++) {
        value[i] = chars[rnd[i] % len]
    }

    return value.join('');
}

/**
 * Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object
 * @param {Object} params the parameters to post to the API endpoint
 * @param {Object} options the options to connect to the API endpoint
 * @returns {Promise}
 */
function request(params, options) {

    var xrfkey = generateXrfkey();
    var restUri = url.parse(options.restUri);

    var headers = {
        'X-Qlik-Xrfkey': xrfkey,
        'Content-Type': 'application/json'
    };

    if(typeof options.directory != 'undefined' || typeof options.user != 'undefined')
        headers['X-Qlik-User'] = 'UserDirectory= ' + ifnotundef(options.directory, '.') + '; UserId= ' + ifnotundef(options.user, 'qlikservice');

    if(typeof options.session != 'undefined')
        headers['Cookie'] = options.session;

    var settings = {
        protocol: restUri.protocol,
        host: restUri.hostname,
        port: restUri.port,
        path: restUri.pathname + '?' + ifnotundef(restUri.query, restUri.query + '&', '') + 'xrfkey=' + xrfkey,
        method: ifnotundef(options.method, 'POST'),
        headers: headers,
        pfx: ifnotundef(options.pfx, null),
        passphrase: ifnotundef(options.passPhrase, null),
        rejectUnauthorized: false,
        agent: false
    };

    return new Promise(function(resolve, reject) {

        if(settings.protocol != 'https:') reject('https is needed to make API call');
        else {

            var apireq = https.request(settings, function (apires) {

                var body = "";
                apires.on('data', function (d) {
                    body += d.toString()
                });

                apires.on('end', function (d) {
                    resolve(JSON.parse(body));
                });

            });

            if(params) {
                apireq.write(JSON.stringify(params));
            }

            apireq.end();

            apireq.on('error', function (e) {
                reject(e);
            });

        }

    });

};

/**
 * Generates a ticket on Qlik Sense QRS Api
 * @param {Object} params the ticket parameters 
 * @param {Object} options the options to connect to the ticket API endpoint
 * @returns {Promise}
 */
function getTicket(params, options) {

    var hostUri = url.parse(options.hostUri);

    var ticketOptions = {
        restUri: hostUri.protocol + '//' + hostUri.host + '/qps/ticket',
        method: 'POST',
        pfx: options.pfx,
        passPhrase: options.passPhrase
    };

    return request(params, ticketOptions);

}

/**
 * Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie
 * @param {Object} ticket the generated ticket
 * @param {Object} options parsed url of the Qlik Sense Hub
 * @returns {Promise}
 */
function openSession(ticket, options) {

    var p = new Promise(function(resolve, reject) {

        var settings = {
            host: options.hostname,
            port: options.port,
            path: options.pathname + '?' + ifnotundef(options.query, options.query + '&', '') + 'qlikTicket=' + ticket.Ticket,
            method: 'GET',
            rejectUnauthorized: false,
            agent: false
        };

        var prot = (options.protocol == 'https:') ? https : http;

        var req = prot.request(settings, function (response) {
            response.on('data', function (d) {
                var cookies = response.headers['set-cookie'];
                resolve(cookies[0]);
            });
        });
        req.on('error', function(e) {
            reject(e);
        });
        req.end();
    });

    return p;
}

/**
 * Simple basic auth middleware for use with Express 4.x.
 *
 * @example
 * app.use('/api-requiring-auth', utils.basicAuth([{user: 'username', pass: 'password'}]));
 *
 * @param   {Object}   username list of usernames & passwords
 * @returns {function} Express 4 middleware requiring the given credentials
 */
function basicAuth(users) {
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

module.exports = {
    request: request,
    getTicket: getTicket,
    openSession: openSession,
    basicAuth: basicAuth
}
