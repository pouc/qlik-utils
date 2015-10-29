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
 *     restUri: 'https://localhost:4242',
 *     prefix: 'test',
 *     pfx: pfx,
 *     UserId: 'qlikservice',
 *     UserDirectory: '2008R2-0'
 * });
 * ```
 */
exports.qps = function(options) {
    var _options = extend(true, {}, options);

    var restUri = url.parse(_options.restUri);
    restUri.host = null;
    restUri.port = core.ifNotUndef(restUri.port, 4243);
    _options.restUri = url.format(restUri);

    return {
        /**
         * @namespace
         * @memberOf Qlik.apis.qps
         */
        ticket: {
            /**
             * This returns a JSON object containing the same UserId and an authentication ticket (Ticket):
             *
             * /qrs/{virtual proxy/}ticket
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
                var restUri = url.parse(_options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qps' + core.ifNotUndef(_options.prefix, '/' + _options.prefix, '') + '/ticket',
                    pfx: _options.pfx,
                    passPhrase: _options.passPhrase,
                    key: _options.key,
                    cert: _options.cert,
                    ca: _options.ca,
                    UserId: _options.UserId,
                    UserDirectory: _options.UserDirectory,
                    timeout: core.ifNotUndef(_options.timeout, 60000),
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
             * /qrs/{virtual proxy/}user/{directory}/{id}
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
                var restUri = url.parse(_options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qps' + core.ifNotUndef(_options.prefix, '/' + _options.prefix, '') + '/user/' + directory + '/' + id,
                    pfx: _options.pfx,
                    passPhrase: _options.passPhrase,
                    key: _options.key,
                    cert: _options.cert,
                    ca: _options.ca,
                    UserId: _options.UserId,
                    UserDirectory: _options.UserDirectory,
                    timeout: core.ifNotUndef(_options.timeout, 60000),
                    method: 'GET'
                });
            },
            /**
             * This is part of the Logout API. The directory and ID are the same UserDirectory and UserId as those that were sent in POST /qps/{virtual proxy/}ticket.
             *
             * A list of all proxy sessions that were connected to the deleted user is returned.
             *
             * /qrs/{virtual proxy/}user/{directory}/{id}
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
                var restUri = url.parse(_options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qps' + core.ifNotUndef(_options.prefix, '/' + _options.prefix, '') + '/user/' + directory + '/' + id,
                    pfx: _options.pfx,
                    passPhrase: _options.passPhrase,
                    key: _options.key,
                    cert: _options.cert,
                    ca: _options.ca,
                    UserId: _options.UserId,
                    UserDirectory: _options.UserDirectory,
                    timeout: core.ifNotUndef(_options.timeout, 60000),
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
                var restUri = url.parse(_options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qps' + core.ifNotUndef(_options.prefix, '/' + _options.prefix, '') + '/session/' + id,
                    pfx: _options.pfx,
                    passPhrase: _options.passPhrase,
                    key: _options.key,
                    cert: _options.cert,
                    ca: _options.ca,
                    UserId: _options.UserId,
                    UserDirectory: _options.UserDirectory,
                    timeout: core.ifNotUndef(_options.timeout, 60000),
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
                var restUri = url.parse(_options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qps' + core.ifNotUndef(_options.prefix, '/' + _options.prefix, '') + '/session',
                    pfx: _options.pfx,
                    passPhrase: _options.passPhrase,
                    key: _options.key,
                    cert: _options.cert,
                    ca: _options.ca,
                    UserId: _options.UserId,
                    UserDirectory: _options.UserDirectory,
                    timeout: core.ifNotUndef(_options.timeout, 60000),
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
                var restUri = url.parse(_options.restUri);
                return base.request({
                    restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qps' + core.ifNotUndef(_options.prefix, '/' + _options.prefix, '') + '/session/' + id,
                    pfx: _options.pfx,
                    passPhrase: _options.passPhrase,
                    key: _options.key,
                    cert: _options.cert,
                    ca: _options.ca,
                    UserId: _options.UserId,
                    UserDirectory: _options.UserDirectory,
                    timeout: core.ifNotUndef(_options.timeout, 60000),
                    method: 'DELETE'
                });
            }
        }
    };
};
