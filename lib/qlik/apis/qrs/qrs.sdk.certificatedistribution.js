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
 * @example
 * ```javascript
 * qrsApi.certificatedistribution.distributecertificate.servernodeconfigurationid(servernodeconfigurationid).get().then(function(String) {
 * 	console.log(String)
 * })
 * ```
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
 * @example
 * ```javascript
 * qrsApi.certificatedistribution.exportcertificates.post(postParams).then(function(String) {
 * 	console.log(String)
 * })
 * ```
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
 * @example
 * ```javascript
 * qrsApi.certificatedistribution.exportcertificatespath.get().then(function(String) {
 * 	console.log(String)
 * })
 * ```
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
 * @example
 * ```javascript
 * qrsApi.certificatedistribution.redistributecertificate.servernodeconfigurationid(servernodeconfigurationid).head().then(function() {
 * 	console.log('done')
 * })
 * ```
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
