var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
/**
 * @namespace
 */
loadbalancing: {
/**
 * @namespace
 * @memberof loadbalancing
 */
validengines: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/loadbalancing/validengines
 * This method is manual
 *
 * @memberof loadbalancing.validengines
 *
 * @param {LoadBalancingRequest} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<LoadBalancingResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/loadbalancing/validengines',
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
