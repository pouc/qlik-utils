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
sync: {
/**
 * @namespace
 * @memberof sync
 */
snapshot: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/sync/snapshot
 *
 * This method is manual
 *
 * @memberof sync.snapshot
 *
 * @example
 * ```javascript
 * qrsApi.sync.snapshot.post().then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/sync/snapshot',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	});
}
}
}
}
}
