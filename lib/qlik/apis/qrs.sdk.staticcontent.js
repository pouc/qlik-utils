var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
/**
 * @namespace
 */
staticcontent: {
/**
 * @namespace
 * @memberof staticcontent
 */
enumeratefiles: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/staticcontent/enumeratefiles?path={path}
 * This method is manual
 *
 * @memberof staticcontent.enumeratefiles
 *
 * @param {string=} path the path parameter
 * @returns {Promise.<Array.<EnumerateFilesResult>>} a promise resolving to the response to the request
 */
get: function (path) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/staticcontent/enumeratefiles' + core.ifNotUndef(path, '?path=' + path, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
}
}
}
}
