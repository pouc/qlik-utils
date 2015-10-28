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
 * @memberof about
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
 * @memberof about
 */
api: {
/**
 * @namespace
 * @memberof about.api
 */
default: {
/**
 * @namespace
 * @memberof about.api.default
 */
app: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/app?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.app
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
 * @memberof about.api.default
 */
appavailability: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appavailability?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.appavailability
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
 * @memberof about.api.default
 */
appcontentquota: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appcontentquota?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.appcontentquota
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
 * @memberof about.api.default
 */
appseedinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appseedinfo?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.appseedinfo
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
 * @memberof about.api.default
 */
appstatus: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/appstatus?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.appstatus
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
 * @memberof about.api.default
 */
binarydelete: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/binarydelete?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.binarydelete
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
 * @memberof about.api.default
 */
binarydownload: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/binarydownload?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.binarydownload
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
 * @memberof about.api.default
 */
binarysyncruleevaluation: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/binarysyncruleevaluation?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.binarysyncruleevaluation
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
 * @memberof about.api.default
 */
compositeevent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/compositeevent?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.compositeevent
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
 * @memberof about.api.default
 */
compositeeventoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/compositeeventoperational?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.compositeeventoperational
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
 * @memberof about.api.default
 */
compositeeventruleoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/compositeeventruleoperational?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.compositeeventruleoperational
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
 * @memberof about.api.default
 */
content: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/content?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.content
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
 * @memberof about.api.default
 */
contentlibrary: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/contentlibrary?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.contentlibrary
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
 * @memberof about.api.default
 */
custompropertydefinition: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/custompropertydefinition?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.custompropertydefinition
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
 * @memberof about.api.default
 */
dataconnection: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/dataconnection?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.dataconnection
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
 * @memberof about.api.default
 */
datasegment: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/datasegment?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.datasegment
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
 * @memberof about.api.default
 */
detail: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/detail?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.detail
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
 * @memberof about.api.default
 */
engineservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/engineservice?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.engineservice
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
 * @memberof about.api.default
 */
engineservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/engineservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.engineservicetemplate
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
 * @memberof about.api.default
 */
executionresult: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/executionresult?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.executionresult
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
 * @memberof about.api.default
 */
executionsession: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/executionsession?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.executionsession
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
 * @memberof about.api.default
 */
extension: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/extension?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.extension
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
 * @memberof about.api.default
 */
externalchangeinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/externalchangeinfo?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.externalchangeinfo
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
 * @memberof about.api.default
 */
externalprogramtask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/externalprogramtask?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.externalprogramtask
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
 * @memberof about.api.default
 */
externalprogramtaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/externalprogramtaskoperational?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.externalprogramtaskoperational
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
 * @memberof about.api.default
 */
filereference: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/filereference?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.filereference
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
 * @memberof about.api.default
 */
followingapp: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/followingapp?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.followingapp
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
 * @memberof about.api.default
 */
internal: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/internal?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.internal
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
 * @memberof about.api.default
 */
license: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/license?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.license
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
 * @memberof about.api.default
 */
localconfig: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/localconfig?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.localconfig
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
 * @memberof about.api.default
 */
loginaccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/loginaccesstype?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.loginaccesstype
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
 * @memberof about.api.default
 */
loginaccessusage: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/loginaccessusage?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.loginaccessusage
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
 * @memberof about.api.default
 */
mimetype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/mimetype?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.mimetype
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
 * @memberof about.api.default
 */
object: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/object?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.object
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
 * @memberof about.api.default
 */
printingservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/printingservice?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.printingservice
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
 * @memberof about.api.default
 */
printingservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/printingservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.printingservicetemplate
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
 * @memberof about.api.default
 */
proxyservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/proxyservice?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.proxyservice
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
 * @memberof about.api.default
 */
proxyservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/proxyservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.proxyservicetemplate
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
 * @memberof about.api.default
 */
recentapp: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/recentapp?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.recentapp
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
 * @memberof about.api.default
 */
reloadtask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/reloadtask?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.reloadtask
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
 * @memberof about.api.default
 */
reloadtaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/reloadtaskoperational?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.reloadtaskoperational
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
 * @memberof about.api.default
 */
removedsystemrule: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/removedsystemrule?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.removedsystemrule
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
 * @memberof about.api.default
 */
repositoryservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/repositoryservice?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.repositoryservice
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
 * @memberof about.api.default
 */
repositoryservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/repositoryservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.repositoryservicetemplate
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
 * @memberof about.api.default
 */
schedulerservice: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schedulerservice?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.schedulerservice
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
 * @memberof about.api.default
 */
schedulerservicetemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schedulerservicetemplate?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.schedulerservicetemplate
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
 * @memberof about.api.default
 */
schemaevent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schemaevent?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.schemaevent
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
 * @memberof about.api.default
 */
schemaeventoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/schemaeventoperational?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.schemaeventoperational
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
 * @memberof about.api.default
 */
selection: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/selection?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.selection
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
 * @memberof about.api.default
 */
servernodeconfiguration: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/servernodeconfiguration?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.servernodeconfiguration
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
 * @memberof about.api.default
 */
servicestatus: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/servicestatus?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.servicestatus
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
 * @memberof about.api.default
 */
staticcontentreference: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/staticcontentreference?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.staticcontentreference
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
 * @memberof about.api.default
 */
stream: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/stream?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.stream
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
 * @memberof about.api.default
 */
syncsession: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/syncsession?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.syncsession
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
 * @memberof about.api.default
 */
systeminfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/systeminfo?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.systeminfo
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
 * @memberof about.api.default
 */
systemrule: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/systemrule?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.systemrule
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
 * @memberof about.api.default
 */
tabledefinition: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/tabledefinition?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.tabledefinition
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
 * @memberof about.api.default
 */
tag: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/tag?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.tag
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
 * @memberof about.api.default
 */
tempcontent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/tempcontent?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.tempcontent
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
 * @memberof about.api.default
 */
termsacceptance: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/termsacceptance?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.termsacceptance
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
 * @memberof about.api.default
 */
user: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/user?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.user
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
 * @memberof about.api.default
 */
useraccessgroup: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/useraccessgroup?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.useraccessgroup
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
 * @memberof about.api.default
 */
useraccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/useraccesstype?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.useraccesstype
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
 * @memberof about.api.default
 */
useraccessusage: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/useraccessusage?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.useraccessusage
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
 * @memberof about.api.default
 */
userdirectory: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/userdirectory?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.userdirectory
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
 * @memberof about.api.default
 */
userdirectorytemplate: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/userdirectorytemplate?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.userdirectorytemplate
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
 * @memberof about.api.default
 */
usersynctask: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/usersynctask?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.usersynctask
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
 * @memberof about.api.default
 */
usersynctaskoperational: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/usersynctaskoperational?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.usersynctaskoperational
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
 * @memberof about.api.default
 */
virtualproxyconfig: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/default/virtualproxyconfig?listentries={listentries}
 * This method is manual
 *
 * @memberof about.api.default.virtualproxyconfig
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
 * @memberof about.api.default
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
 * @memberof about.api
 */
description: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/description?extended={extended}&method={method}&format={format}
 * This method is manual
 *
 * @memberof about.api.description
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
 * @memberof about.api
 */
enums: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/enums
 * This method is manual
 *
 * @memberof about.api.enums
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
 * @memberof about.api
 */
relations: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/about/api/relations
 * This method is manual
 *
 * @memberof about.api.relations
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
