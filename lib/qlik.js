var extend = require('extend');

var base = require('./qlik/base').Base;
var advanced = require('./qlik/advanced').Advanced;
var qrs = require('./qlik/apis/qrs');

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
 * @namespace
 */
exports.Qlik = extend(true, {}, base, advanced, qrs);