var https = require('https');
var crypto = require('crypto');
var url = require('url');
var fs = require('fs');

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
 * @param {Object} params
 * @param {Object} options
 * @returns {Promise}
 */
function request(params, options) {

    var xrfkey = generateXrfkey();
    var restUri = url.parse(options.restUri);

    var settings = {
        protocol: restUri.protocol,
        host: restUri.hostname,
        port: restUri.port,
        path: restUri.pathname + '?' + ifnotundef(restUri.query, restUri.query + '&', '') + 'xrfkey=' + xrfkey,
        method: ifnotundef(options.method, 'POST'),
        headers: {
            'X-Qlik-Xrfkey': xrfkey,
            'Content-Type': 'application/json'
        },
        pfx: ifnotundef(options.pfx, null),
        passphrase: ifnotundef(options.passPhrase, null),
        rejectUnauthorized: false,
        agent: false
    };

    return new Promise(function(resolve, reject) {

        if(settings.protocol != 'https:') reject('https is needed to make API call');
        else {

            var apireq = https.request(settings, function (apires) {

                apires.on('data', function (d) {

                    resolve(JSON.parse(d.toString()));

                });

            });

            apireq.write(JSON.stringify(params));
            apireq.end();

            apireq.on('error', function (e) {
                reject(e);
            });

        }

    });

};

/**
 * Generates a ticket on Qlik Sense QRS Api
 * @param {Object} params
 * @param {Object} options
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

module.exports = {
    request: request,
    getTicket: getTicket
}
