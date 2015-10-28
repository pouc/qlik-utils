var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
/**
 * @namespace
 */
certificatedistribution: {
/**
 * @namespace
 * @memberof certificatedistribution
 */
distributecertificate: {
/**
 * @namespace
 * @memberof certificatedistribution.distributecertificate
 */
servernodeconfigurationid: function(servernodeconfigurationid) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/certificatedistribution/distributecertificate/{servernodeconfigurationid}
 * This method is manual
 *
 * @memberof certificatedistribution.distributecertificate.servernodeconfigurationid
 *
 * @returns {Promise.<String>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/certificatedistribution/distributecertificate/' + servernodeconfigurationid + '',
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
},
/**
 * @namespace
 * @memberof certificatedistribution
 */
exportcertificates: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/certificatedistribution/exportcertificates
 * This method is manual
 *
 * @memberof certificatedistribution.exportcertificates
 *
 * @param {ExportParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<String>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/certificatedistribution/exportcertificates',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof certificatedistribution
 */
exportcertificatespath: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/certificatedistribution/exportcertificatespath
 * This method is manual
 *
 * @memberof certificatedistribution.exportcertificatespath
 *
 * @returns {Promise.<String>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/certificatedistribution/exportcertificatespath',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof certificatedistribution
 */
redistributecertificate: {
/**
 * @namespace
 * @memberof certificatedistribution.redistributecertificate
 */
servernodeconfigurationid: function(servernodeconfigurationid) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/certificatedistribution/redistributecertificate/{servernodeconfigurationid}
 * This method is manual
 *
 * @memberof certificatedistribution.redistributecertificate.servernodeconfigurationid
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
head: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/certificatedistribution/redistributecertificate/' + servernodeconfigurationid + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'HEAD'
	});
}
};
}
}
}
}
}
