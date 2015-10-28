var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
/**
 * @namespace
 */
about: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about
 * This method is manual
 *
 * @returns {Promise.<About>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about',
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
 */
api: {
/**
 * @namespace
 */
default: {
/**
 * @namespace
 */
app: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/app?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<App>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/app' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
appavailability: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appavailability?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppAvailability>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appavailability' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
appcontentquota: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appcontentquota?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppContentQuota>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appcontentquota' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
appseedinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appseedinfo?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppSeedInfo>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appseedinfo' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
appstatus: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appstatus?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppStatus>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/appstatus' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
binarydelete: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/binarydelete?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<BinaryDelete>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/binarydelete' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
binarydownload: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/binarydownload?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<BinaryDownload>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/binarydownload' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
binarysyncruleevaluation: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/binarysyncruleevaluation?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<BinarySyncRuleEvaluation>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/binarysyncruleevaluation' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
compositeevent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/compositeevent?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<CompositeEvent>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/compositeevent' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
compositeeventoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/compositeeventoperational?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<CompositeEventOperational>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/compositeeventoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
compositeeventruleoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/compositeeventruleoperational?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<CompositeEventRuleOperational>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/compositeeventruleoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
content: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/content?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppContent>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/content' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
contentlibrary: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/contentlibrary?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/contentlibrary' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
custompropertydefinition: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/custompropertydefinition?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<CustomPropertyDefinition>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/custompropertydefinition' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
dataconnection: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/dataconnection?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<DataConnection>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/dataconnection' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
datasegment: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/datasegment?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppDataSegment>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/datasegment' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
detail: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/detail?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ExecutionResultDetail>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/detail' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
engineservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/engineservice?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<EngineService>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/engineservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
engineservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/engineservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<EngineServiceTemplate>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/engineservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
executionresult: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/executionresult?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ExecutionResult>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/executionresult' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
executionsession: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/executionsession?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ExecutionSession>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/executionsession' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
extension: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/extension?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<Extension>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/extension' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
externalchangeinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/externalchangeinfo?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ExternalChangeInfo>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/externalchangeinfo' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
externalprogramtask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/externalprogramtask?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ExternalProgramTask>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/externalprogramtask' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
externalprogramtaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/externalprogramtaskoperational?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ExternalProgramTaskOperational>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/externalprogramtaskoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
filereference: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/filereference?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<FileReference>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/filereference' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
followingapp: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/followingapp?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<UserFollowingApp>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/followingapp' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
internal: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/internal?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppInternal>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/internal' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
license: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/license?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/license' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
localconfig: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/localconfig?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<LocalConfig>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/localconfig' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
loginaccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/loginaccesstype?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/loginaccesstype' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
loginaccessusage: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/loginaccessusage?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<LicenseLoginAccessUsage>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/loginaccessusage' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
mimetype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/mimetype?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<MimeType>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/mimetype' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
object: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/object?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<AppObject>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/object' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
printingservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/printingservice?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<PrintingService>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/printingservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
printingservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/printingservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<PrintingServiceTemplate>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/printingservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
proxyservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/proxyservice?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ProxyService>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/proxyservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
proxyservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/proxyservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ProxyServiceTemplate>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/proxyservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
recentapp: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/recentapp?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<UserRecentApp>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/recentapp' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
reloadtask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/reloadtask?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ReloadTask>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/reloadtask' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
reloadtaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/reloadtaskoperational?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ReloadTaskOperational>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/reloadtaskoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
removedsystemrule: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/removedsystemrule?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<RemovedSystemRule>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/removedsystemrule' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
repositoryservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/repositoryservice?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<RepositoryService>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/repositoryservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
repositoryservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/repositoryservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<RepositoryServiceTemplate>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/repositoryservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
schedulerservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schedulerservice?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SchedulerService>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schedulerservice' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
schedulerservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schedulerservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SchedulerServiceTemplate>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schedulerservicetemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
schemaevent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schemaevent?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SchemaEvent>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schemaevent' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
schemaeventoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schemaeventoperational?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SchemaEventOperational>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/schemaeventoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
selection: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/selection?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<Selection>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/selection' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
servernodeconfiguration: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/servernodeconfiguration?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ServerNodeConfiguration>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/servernodeconfiguration' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
servicestatus: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/servicestatus?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<ServiceStatus>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/servicestatus' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
staticcontentreference: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/staticcontentreference?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<StaticContentReference>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/staticcontentreference' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
stream: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/stream?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<Stream>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/stream' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
syncsession: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/syncsession?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SyncSession>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/syncsession' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
systeminfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/systeminfo?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SystemInfo>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/systeminfo' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
systemrule: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/systemrule?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/systemrule' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
tabledefinition: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/tabledefinition?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<TableDefinition>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/tabledefinition' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
tag: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/tag?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<Tag>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/tag' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
tempcontent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/tempcontent?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<TempContent>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/tempcontent' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
termsacceptance: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/termsacceptance?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<TermsAcceptance>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/termsacceptance' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
user: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/user?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<User>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/user' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
useraccessgroup: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/useraccessgroup?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/useraccessgroup' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
useraccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/useraccesstype?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/useraccesstype' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
useraccessusage: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/useraccessusage?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<LicenseUserAccessUsage>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/useraccessusage' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
userdirectory: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/userdirectory?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/userdirectory' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
userdirectorytemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/userdirectorytemplate?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<UserDirectoryTemplate>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/userdirectorytemplate' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
usersynctask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/usersynctask?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<UserSyncTask>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/usersynctask' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
usersynctaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/usersynctaskoperational?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<UserSyncTaskOperational>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/usersynctaskoperational' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
virtualproxyconfig: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/virtualproxyconfig?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<VirtualProxyConfig>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default/virtualproxyconfig' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default?listentries={listentries}
 * This method is manual
 *
 * @param {string=} listentries the listentries parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
get: function (listentries) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/default' + core.ifNotUndef(listentries, '?listentries=' + listentries, ''),
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
 */
description: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/description?extended={extended}&method={method}&format={format}
 * This method is manual
 *
 * @param {string=} extended the extended parameter
 * @param {string=} method the method parameter
 * @param {string=} format the format parameter
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function (extended, method, format) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/description' + (core.ifNotUndef(extended, '&extended=' + extended, '') + core.ifNotUndef(method, '&method=' + method, '') + core.ifNotUndef(format, '&format=' + format, '')).replace(/^&/, '?'),
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
 */
enums: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/enums
 * This method is manual
 *
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/enums',
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
 */
relations: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/relations
 * This method is manual
 *
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/about/api/relations',
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
}
