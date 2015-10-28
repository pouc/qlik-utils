var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
/**
 * @namespace
 */
download: {
/**
 * @namespace
 * @memberof download
 */
app: {
/**
 * @namespace
 * @memberof download.app
 */
id: function(id) {
return {
/**
 * @namespace
 * @memberof download.app.id
 */
exportticketid: function(exportticketid) {
return {
/**
 * @namespace
 * @memberof download.app.id.exportticketid
 */
localfilename: function(localfilename) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/download/app/{id}/{exportticketid}/{localfilename}
 * This method is manual
 *
 * @memberof download.app.id.exportticketid.localfilename
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
/**
 * @namespace
 * @memberof download
 */
reloadtask: {
/**
 * @namespace
 * @memberof download.reloadtask
 */
downloadticketid: function(downloadticketid) {
return {
/**
 * @namespace
 * @memberof download.reloadtask.downloadticketid
 */
localfilename: function(localfilename) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/download/reloadtask/{downloadticketid}/{localfilename}
 * This method is manual
 *
 * @memberof download.reloadtask.downloadticketid.localfilename
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
/**
 * @namespace
 * @memberof download
 */
samlmetadata: {
/**
 * @namespace
 * @memberof download.samlmetadata
 */
exportticketid: function(exportticketid) {
return {
/**
 * @namespace
 * @memberof download.samlmetadata.exportticketid
 */
localfilename: function(localfilename) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/download/samlmetadata/{exportticketid}/{localfilename}
 * This method is manual
 *
 * @memberof download.samlmetadata.exportticketid.localfilename
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
