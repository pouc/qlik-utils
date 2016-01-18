var extend = require('extend');

var base = require('./qlik/base').Base;
var advanced = require('./qlik/advanced').Advanced;
var qrs = require('./qlik/apis/qrs/qrs');
var qps = require('./qlik/apis/qps/qps');

var exports = {};
module.exports = exports;

/**
 * @typedef {Object} ticketParams
 * @type {Object}
 * @property {string} UserId the user id to generate a ticket for
 * @property {string} UserDirectory the user directory of the user to generate a ticket for
 * @property {Array.<string>} Attributes the user attributes
 * @property {string} [TargetId] a target id
 */

/**
 * @typedef {Object} options
 * @type {Object}
 * @property {string} [UserDirectory=.] the user directory of the Qlik Sense user that will make the API call (not required if a valid cookie is set)
 * @property {string} [UserId=qlikservice] the user id of the Qlik Sense user that will make the API call (not required if a valid cookie is set)
 * @property {string} [cookie] the cookie of a valid Qlik Sense session
 * @property {string} restUri an URI to a valid Qlik Sense endpoint
 * @property {string} [qpsRestUri=https://restUri.hostname:4243/qps/restUri.pathname] an URI to a valid Qlik Sense QPS endpoint
 * @property {string} [qrsRestUri=https://restUri.hostname:4244/qrs] an URI to a valid Qlik Sense QRS endpoint
 * @property {string} [wsUri=wss://restUri.hostname:443] an URI to a valid Qlik Sense WebSocket endpoint
 * @property {string} [appname] the application name if required by the websocket
 * @property {string} [method=POST] the method of the HTTP request (GET/PUT/POST/DELETE)
 * @property {buffer} [pfx] the Qlik Sense pfx certificate (not required if a valid cookie is set)
 * @property {string} [passphrase] the Qlik Sense certificate's passphrase (not required if a valid cookie is set)
 * @property {string} [key] the Qlik Sense certificate's key (not required if a valid cookie is set)
 * @property {string} [cert] the Qlik Sense certificate (not required if a valid cookie is set)
 * @property {string} [ca] the Qlik Sense certificate's certification authority (not required if a valid cookie is set)
 * @property {int} [timeout] the timeout of the HTTP request
 */

/**
 * @typedef {Object} ticket
 * @type {Object}
 * @property {string} UserId the user id of the generated ticket
 * @property {string} UserDirectory the user directory of generated ticket
 * @property {string[]} Attributes the user attributes
 * @property {string} Ticket the ticket
 * @property {string} TargetUri the target uri
 */

/**
 * Wrapper for helper functions for Qlik Sense APIs.
 * @namespace Qlik
 */
exports.Qlik = extend(true, {}, base, advanced, {apis: extend(true, {}, qrs, qps)});

/**
 * @namespace apis
 * @memberOf Qlik
 */
