var url = require('url');
var XRegExp = require('xregexp');
var extend = require('extend');

var core = require('../../../core').Core;
var base = require('../../base').Base;

var exports = {};
module.exports = exports;

/**
 * @namespace qps
 * @memberOf Qlik.apis
 *
 * @example
 * ```javascript
 * var qpsApi = utils.Qlik.apis.qps({
 *     restUri: 'https://localhost',
 *     prefix: 'test',
 *     pfx: pfx,
 *     UserId: 'qlikservice',
 *     UserDirectory: '2008R2-0'
 * });
 * ```
 */
exports.qps = function(options) {

    var parsedQpsRestUri = url.parse(core.ifNotUndef(options.qpsRestUri, options.restUri));

    if (typeof options.qpsRestUri === 'undefined') {
        parsedQpsRestUri.protocol = 'https:';
        parsedQpsRestUri.pathname = ('/qps' + parsedQpsRestUri.pathname + '/').replace(/\/{2}$/, '/');
        parsedQpsRestUri.host = undefined;
        parsedQpsRestUri.port = 4243;
    } else {
        parsedQpsRestUri.host = undefined;
        parsedQpsRestUri.port = core.ifNotUndef(parsedQpsRestUri.port, 4243);
    }

    options.qpsRestUri = url.format(parsedQpsRestUri);

    return {
        /**
         * @namespace
         * @memberOf Qlik.apis.qps
         */
        ticket: {
            /**
             * This returns a JSON object containing the same UserId and an authentication ticket (Ticket):
             *
             * /qps/{virtual proxy/}ticket
             *
             * @memberOf Qlik.apis.qps.ticket
             *
             * @example
             * ```javascript
             * qpsApi.ticket.post(postParams).then(function(Ticket) {
             * 	console.log(Ticket)
             * })
             * ```
             *
             * @param {Object} postParams the ticket definition to post
             * @returns {Promise.<Ticket>} a promise resolving to the ticket
             */
            post: function(postParams) {
                return base.request({
                    restUri: options.qpsRestUri + '/ticket',
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'POST'
                }, postParams);
            }
        },
        /**
         * @namespace
         * @memberOf Qlik.apis.qps
         */
        user: {
            /**
             * This returns all proxy sessions that a user (identified by {directory} and {id}) has.
             *
             * /qps/{virtual proxy/}user/{directory}/{id}
             *
             * @memberOf Qlik.apis.qps.user
             *
             * @example
             * ```javascript
             * qpsApi.user.get(directory, id).then(function(Sessions) {
             * 	console.log(Sessions)
             * })
             * ```
             *
             * @param {string} directory the user directory
             * @param {string} id the user id
             * @returns {Promise.<Array.<Session>>} a promise resolving to a list of sessions
             */
            get: function(directory, id) {
                return base.request({
                    restUri: options.qpsRestUri + '/user/' + directory + '/' + id,
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'GET'
                });
            },
            /**
             * This is part of the Logout API. The directory and ID are the same UserDirectory and UserId as those that were sent in POST /qps/{virtual proxy/}ticket.
             *
             * A list of all proxy sessions that were connected to the deleted user is returned.
             *
             * /qps/{virtual proxy/}user/{directory}/{id}
             *
             * @memberOf Qlik.apis.qps.user
             *
             * @example
             * ```javascript
             * qpsApi.user.delete(directory, id).then(function(Sessions) {
             * 	console.log(Sessions)
             * })
             * ```
             *
             * @param {string} directory the user directory
             * @param {string} id the user id
             * @returns {Promise.<Array.<Session>>} a promise resolving to a list of disconnected sessions
             */
            delete: function(directory, id) {
                return base.request({
                    restUri: options.qpsRestUri + '/user/' + directory + '/' + id,
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'DELETE'
                });
            }
        },
        /**
         * @namespace
         * @memberOf Qlik.apis.qps
         */
        session: {
            /**
             * This returns the proxy session identified by {id}.
             *
             * /qps/{virtual proxy/}session/{id}
             *
             * @memberOf Qlik.apis.qps.session
             *
             * @example
             * ```javascript
             * qpsApi.session.get(id).then(function(Session) {
             * 	console.log(Session)
             * })
             * ```
             *
             * @param {string} id the session id
             * @returns {Promise.<Session>} a promise resolving to a session
             */
            get: function(id) {
                return base.request({
                    restUri: options.qpsRestUri + '/session/' + id,
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'GET'
                });
            },
            /**
             * This adds a new proxy session.
             *
             * /qps/{virtual proxy/}session
             *
             * @memberOf Qlik.apis.qps.session
             *
             * @example
             * ```javascript
             * qpsApi.session.post(postParams).then(function(Session) {
             * 	console.log(Session)
             * })
             * ```
             *
             * @param {Object} postParams the session to create
             * @returns {Promise.<Session>} a promise resolving to a session
             */
            post: function(postParams) {
                return base.request({
                    restUri: options.qpsRestUri + '/session',
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'POST'
                }, postParams);
            },
            /**
             * This deletes the proxy session identified by {id} and returns it as a session struct.
             *
             * /qps/{virtual proxy/}session/{id}
             *
             * @memberOf Qlik.apis.qps.session
             *
             * @example
             * ```javascript
             * qpsApi.session.delete(id).then(function(Session) {
             * 	console.log(Session)
             * })
             * ```
             *
             * @param {string} id the session id
             * @returns {Promise.<Session>} a promise resolving to the session that was deleted
             */
            delete: function(id) {
                return base.request({
                    restUri: options.qpsRestUri + '/session/' + id,
                    pfx: options.pfx,
                    passPhrase: options.passPhrase,
                    key: options.key,
                    cert: options.cert,
                    ca: options.ca,
                    UserId: options.UserId,
                    UserDirectory: options.UserDirectory,
                    timeout: core.ifNotUndef(options.timeout, 60000),
                    method: 'DELETE'
                });
            }
        }
    };
};
