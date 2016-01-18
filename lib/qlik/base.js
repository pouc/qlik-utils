var crypto = require('crypto');
var url = require('url');
var Q = require('q');
var http = require('http');
var https = require('https');

var core = require('../core').Core;

var exports = {};
module.exports = exports;

exports.Base = {

    /**
     * Generates a random Xrf key of a given size within a set of given chars
     *
     * @example
     * ```javascript
     * var xrf = utils.Qlik.generateXrfkey(8);
     * ```
     *
     * @memberOf Qlik
     *
     * @param {int=} [size=16] the number of characters of the xrf key
     * @param {string=} [chars=abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789] the characters from which to construct the key
     * @returns {string} the xrf key
     */
    generateXrfKey: function(size, chars) {
        size = size || 16;
        chars = chars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';

        var rnd = crypto.randomBytes(size);
        var value = new Array(size);
        var len = chars.length;

        for (var i = 0; i < size; i++) {
            value[i] = chars[rnd[i] % len];
        }

        return value.join('');
    },

    /**
     * Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object
     *
     * @example
     * ```javascript
     * utils.Qlik.request({
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
     * ```
     *
     * @memberOf Qlik
     *
     * @param {options} options the options to connect to the API endpoint
     * @param {Object=} [params] the parameters to post to the API endpoint
     * @returns {Promise} a promise resolving to the response to the request
     */
    request: function(options, params) {

        var xrfkey = exports.Base.generateXrfKey();
        var restUri = url.parse(options.restUri);

        var headers = {
            'X-Qlik-Xrfkey': xrfkey,
            'Content-Type': 'application/json'
        };

        if (typeof options.UserDirectory != 'undefined' || typeof options.UserId != 'undefined') {
            headers['X-Qlik-User'] = 'UserDirectory= ' + core.ifNotUndef(options.UserDirectory, '.') +
                '; UserId= ' + core.ifNotUndef(options.UserId, 'qlikservice');
        }

        if (typeof options.session != 'undefined') {
            headers.Cookie = options.session;
        }

        var timeout = core.ifNotUndef(options.timeout, 10000);

        var settings = {
            protocol: restUri.protocol,
            host: restUri.hostname,
            port: restUri.port,
            path: restUri.pathname + '?' + core.ifNotUndef(restUri.query, restUri.query + '&', '') + 'xrfkey=' + xrfkey,
            method: core.ifNotUndef(options.method, 'POST'),
            headers: headers,
            rejectUnauthorized: false,
            agent: false
        };

        if (typeof options.pfx != 'undefined') {
            settings.pfx = options.pfx;
        }
        if (typeof options.passPhrase != 'undefined') {
            settings.passPhrase = options.passPhrase;
        }

        if (typeof options.key != 'undefined') {
            settings.key = options.key;
        }
        if (typeof options.cert != 'undefined') {
            settings.cert = options.cert;
        }
        if (typeof options.ca != 'undefined') {
            settings.ca = options.ca;
        }

        var requestDef = Q.defer();

        if (settings.protocol == 'http:' && typeof options.pfx != 'undefined') {
            requestDef.reject('https is needed to make API call with certificate');
        } else if (settings.protocol != 'https:' && settings.protocol != 'http:') {
            requestDef.reject('http/https is needed to make API call');
        } else if (settings.protocol == 'https:' &&
            !(
                (typeof options.pfx !== 'undefined') ||
                (typeof options.key !== 'undefined' && typeof options.cert !== 'undefined' && typeof options.ca !== 'undefined')
            )
        ) {
            requestDef.reject('https requires a pfx/pem certificate');
        } else {

            var prot = (settings.protocol == 'https:') ? https : http;

            var apireq = prot.request(settings, function(apires) {

                var body = '';
                apires.on('data', function(d) {
                    body += d.toString();
                });

                apires.on('end', function(d) {
                    if (Math.floor(apires.statusCode / 100) <= 3) {
                        try {
                            requestDef.resolve(JSON.parse(body));
                        } catch (err) {
                            requestDef.resolve({uri: options.restUri, statusCode: apires.statusCode, statusMessage: apires.statusMessage, body: body});
                        }

                    } else {

                        try {
                            requestDef.reject(JSON.parse(body));
                        } catch (err) {
                            requestDef.reject({uri: options.restUri, statusCode: apires.statusCode, statusMessage: apires.statusMessage, body: body});
                        }

                    }
                });
            });

            // Event for timeout handling
            apireq.on('socket', function(socket) {
                socket.setTimeout(parseInt(timeout));
                socket.on('timeout', function() {
                    apireq.abort();
                });
            });

            if (params) {
                apireq.write(JSON.stringify(params));
            }

            apireq.end();

            apireq.on('error', function(e) {
                requestDef.reject(e);
            });

        }

        return requestDef.promise;

    },

    /**
     * Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie
     *
     * @example
     * ```javascript
     * utils.Qlik.openSession({
     *      UserDirectory: '2008R2-0',
     *      UserId: 'qlikservice',
     *      Attributes: [],
     *      Ticket: 'QzSPXzBmJKjhucPF',
     *      TargetUri: null
     * }, 'https://localhost/hub').then(function(retVal) {
     *      console.log(retVal);
     * });
     * ```
     *
     * @memberOf Qlik
     *
     * @param {ticket} ticket the generated ticket
     * @param {string} hostUri the URI of the Qlik Sense host (Hub or preferably QMC) to open a session on
     * @returns {Promise.<string>} a promise resolving to the session cookie
     */
    openSession: function(ticket, hostUri) {

        var requestDef = Q.defer();
        var restUri = url.parse(hostUri);

        var settings = {
            host: restUri.hostname,
            port: restUri.port,
            path: restUri.pathname + '?' + core.ifNotUndef(restUri.query, restUri.query + '&', '') + 'qlikTicket=' + ticket.Ticket,
            method: 'GET',
            rejectUnauthorized: false,
            agent: false
        };

        var prot = (restUri.protocol == 'https:') ? https : http;

        var req = prot.request(settings, function(response) {

            var body = '';
            response.on('data', function(d) {
                body += d.toString();
            });

            response.on('end', function(d) {

            });

            response.on('data', function(d) {
                var cookies = response.headers['set-cookie'];
                requestDef.resolve(cookies[0]);
            });
        });

        req.on('socket', function(socket) {
            socket.setTimeout(10000);
            socket.on('timeout', function() {
                req.abort();
            });
        });

        req.on('error', function(e) {
            requestDef.reject(e);
        });

        req.end();

        return requestDef.promise;

    }

};
