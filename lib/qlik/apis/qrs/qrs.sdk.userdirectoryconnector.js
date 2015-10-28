var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../../core').Core;
var base = require('../../base').Base;

module.exports = function(options) { 
return {
/**
 * {@link qrs.md|See parent documentation}
 * @namespace
 */
userdirectoryconnector: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/userdirectoryconnector
 * This method is manual
 *
 * @memberof userdirectoryconnector
 *
 * @example
 * ```javascript
 * qrsApi.userdirectoryconnector.get().then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectoryconnector',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * @namespace
 * @memberof userdirectoryconnector
 */
deleteudandusers: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/userdirectoryconnector/deleteudandusers?userdirectoryid={userdirectoryid}
 * This method is manual
 *
 * @memberof userdirectoryconnector.deleteudandusers
 *
 * @example
 * ```javascript
 * qrsApi.userdirectoryconnector.deleteudandusers.delete(userdirectoryid).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {string=} userdirectoryid the userdirectoryid parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (userdirectoryid) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectoryconnector/deleteudandusers' + core.ifNotUndef(userdirectoryid, '?userdirectoryid=' + userdirectoryid, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
}
},
/**
 * @namespace
 * @memberof userdirectoryconnector
 */
refreshudctypes: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/userdirectoryconnector/refreshudctypes
 * This method is manual
 *
 * @memberof userdirectoryconnector.refreshudctypes
 *
 * @example
 * ```javascript
 * qrsApi.userdirectoryconnector.refreshudctypes.post().then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectoryconnector/refreshudctypes',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
},
/**
 * @namespace
 * @memberof userdirectoryconnector
 */
syncuserdirectories: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/userdirectoryconnector/syncuserdirectories
 * This method is manual
 *
 * @memberof userdirectoryconnector.syncuserdirectories
 *
 * @example
 * ```javascript
 * qrsApi.userdirectoryconnector.syncuserdirectories.post(postParams).then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @param {Guid[]} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectoryconnector/syncuserdirectories',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
}
}
}
