var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
download: {
app: {
id: function(id) {
return {
exportticketid: function(exportticketid) {
return {
localfilename: function(localfilename) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/download/app/{id}/{exportticketid}/{localfilename}
 * This method is manual
 *
 * @returns {Promise.<FileDownloadInfo>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/download/app/' + id + '/' + exportticketid + '/' + localfilename + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
};
}
};
}
};
}
},
reloadtask: {
downloadticketid: function(downloadticketid) {
return {
localfilename: function(localfilename) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/download/reloadtask/{downloadticketid}/{localfilename}
 * This method is manual
 *
 * @returns {Promise.<FileDownloadInfo>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/download/reloadtask/' + downloadticketid + '/' + localfilename + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
};
}
};
}
},
samlmetadata: {
exportticketid: function(exportticketid) {
return {
localfilename: function(localfilename) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/download/samlmetadata/{exportticketid}/{localfilename}
 * This method is manual
 *
 * @returns {Promise.<FileDownloadInfo>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/download/samlmetadata/' + exportticketid + '/' + localfilename + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
};
}
};
}
}
}
}
}
