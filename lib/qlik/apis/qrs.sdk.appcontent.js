var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
appcontent: {
appid: function(appid) {
return {
deletecontent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/appcontent/{appid}/deletecontent?externalpath={externalpath}
 * This method is manual
 *
 * @param {string=} externalpath the externalpath parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (externalpath) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/appcontent/' + appid + '/deletecontent' + core.ifNotUndef(externalpath, '?externalpath=' + externalpath, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
}
},
uploadfile: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/appcontent/{appid}/uploadfile?externalpath={externalpath}&overwrite={overwrite}
 * This method is manual
 *
 * @param {String} postParams the parameters to send as request body to the API endpoint
 * @param {string=} externalpath the externalpath parameter
 * @param {string=} overwrite the overwrite parameter
 * @returns {Promise.<String>} a promise resolving to the response to the request
 */
post: function (postParams, externalpath, overwrite) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/appcontent/' + appid + '/uploadfile' + (core.ifNotUndef(externalpath, '&externalpath=' + externalpath, '') + core.ifNotUndef(overwrite, '&overwrite=' + overwrite, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
};
}
}
}
}