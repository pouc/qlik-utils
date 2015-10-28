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
systemrule: {
/**
 * @namespace
 * @memberof systemrule
 */
category: function(category) {
return {
/**
 * @namespace
 * @memberof systemrule.category
 */
associatedrules: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/{category}/associatedrules?resourcetype={resourcetype}&resourcefilter={resourcefilter}&privileges={appendprivileges}
 *
 * This method is manual
 *
 * @memberof systemrule.category.associatedrules
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.category(category).associatedrules.get(resourcetype, resourcefilter, appendprivileges).then(function(Array.<SystemRule>) {
 * 	console.log(Array.<SystemRule>)
 * })
 * ```
 *
 * @param {string=} resourcetype the resourcetype parameter
 * @param {string=} resourcefilter the resourcefilter parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
 */
get: function (resourcetype, resourcefilter, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/' + category + '/associatedrules' + (core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '') + core.ifNotUndef(resourcefilter, '&resourcefilter=' + resourcefilter, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
}
};
},
/**
 * @namespace
 * @memberof systemrule
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/{id}
 *
 * This method is generated
 *
 * @memberof systemrule.id
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/' + id + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof systemrule.id
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.id(id).get(appendprivileges).then(function(SystemRule) {
 * 	console.log(SystemRule)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof systemrule.id
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.id(id).put(postParams, appendprivileges).then(function(SystemRule) {
 * 	console.log(SystemRule)
 * })
 * ```
 *
 * @param {SystemRule} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
}
};
},
/**
 * @namespace
 * @memberof systemrule
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/count?filter={filter}
 *
 * This method is generated
 *
 * @memberof systemrule.count
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.count.get(filter).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof systemrule.full
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.full.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
 * 	console.log(Array.<SystemRule>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule
 */
license: {
/**
 * @namespace
 * @memberof systemrule.license
 */
audit: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/license/audit
 *
 * This method is manual
 *
 * @memberof systemrule.license.audit
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.license.audit.post(postParams).then(function(AuditResult) {
 * 	console.log(AuditResult)
 * })
 * ```
 *
 * @param {AuditParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<AuditResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/license/audit',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
},
/**
 * @namespace
 * @memberof systemrule.license.audit
 */
preview: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/license/audit/preview
 *
 * This method is manual
 *
 * @memberof systemrule.license.audit.preview
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.license.audit.preview.post(postParams).then(function(AuditPreviewResult) {
 * 	console.log(AuditPreviewResult)
 * })
 * ```
 *
 * @param {AuditPreviewParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<AuditPreviewResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/license/audit/preview',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof systemrule.license
 */
useractions: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/license/useractions?privileges={appendprivileges}
 *
 * This method is manual
 *
 * @memberof systemrule.license.useractions
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.license.useractions.post(postParams, appendprivileges).then(function(Array.<UserLicenseActions>) {
 * 	console.log(Array.<UserLicenseActions>)
 * })
 * ```
 *
 * @param {UserInput} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserLicenseActions>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/license/useractions' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof systemrule
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/many?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof systemrule.many
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.many.post(postParams, appendprivileges).then(function(Array.<SystemRule>) {
 * 	console.log(Array.<SystemRule>)
 * })
 * ```
 *
 * @param {List<SystemRule>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof systemrule
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/previewcreateprivilege
 *
 * This method is generated
 *
 * @memberof systemrule.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {SystemRule} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/previewcreateprivilege',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof systemrule
 */
security: {
/**
 * @namespace
 * @memberof systemrule.security
 */
accessibleattributes: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/accessibleattributes?resourcetype={resourcetype}
 *
 * This method is manual
 *
 * @memberof systemrule.security.accessibleattributes
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.accessibleattributes.get(resourcetype).then(function(Array.<String>) {
 * 	console.log(Array.<String>)
 * })
 * ```
 *
 * @param {string=} resourcetype the resourcetype parameter
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function (resourcetype) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/accessibleattributes' + core.ifNotUndef(resourcetype, '?resourcetype=' + resourcetype, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule.security
 */
attributevalues: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/attributevalues?resourcetype={resourcetype}&attribute={attribute}&filter={filter}&limit={limit}&selection={selection}
 *
 * This method is manual
 *
 * @memberof systemrule.security.attributevalues
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.attributevalues.get(resourcetype, attribute, filter, limit, selection).then(function(Array.<String>) {
 * 	console.log(Array.<String>)
 * })
 * ```
 *
 * @param {string=} resourcetype the resourcetype parameter
 * @param {string=} attribute the attribute parameter
 * @param {string=} filter the filter parameter
 * @param {string=} limit the limit parameter
 * @param {string=} selection the selection parameter
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function (resourcetype, attribute, filter, limit, selection) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/attributevalues' + (core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '') + core.ifNotUndef(attribute, '&attribute=' + attribute, '') + core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(limit, '&limit=' + limit, '') + core.ifNotUndef(selection, '&selection=' + selection, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule.security
 */
audit: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/audit
 *
 * This method is manual
 *
 * @memberof systemrule.security.audit
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.audit.post(postParams).then(function(AuditResult) {
 * 	console.log(AuditResult)
 * })
 * ```
 *
 * @param {AuditParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<AuditResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/audit',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
},
/**
 * @namespace
 * @memberof systemrule.security.audit
 */
accessibleobjects: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/audit/accessibleobjects
 *
 * This method is manual
 *
 * @memberof systemrule.security.audit.accessibleobjects
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.audit.accessibleobjects.post(postParams).then(function(Array.<IRepositoryObject>) {
 * 	console.log(Array.<IRepositoryObject>)
 * })
 * ```
 *
 * @param {AccessibleObjectParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Array.<IRepositoryObject>>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/audit/accessibleobjects',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof systemrule.security.audit
 */
countresources: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/audit/countresources
 *
 * This method is manual
 *
 * @memberof systemrule.security.audit.countresources
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.audit.countresources.post(postParams).then(function(int) {
 * 	console.log(int)
 * })
 * ```
 *
 * @param {AuditCountParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/audit/countresources',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof systemrule.security.audit
 */
export: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/audit/export
 *
 * This method is manual
 *
 * @memberof systemrule.security.audit.export
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.audit.export.get().then(function(Array.<String>) {
 * 	console.log(Array.<String>)
 * })
 * ```
 *
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/audit/export',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule.security.audit
 */
preview: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/audit/preview
 *
 * This method is manual
 *
 * @memberof systemrule.security.audit.preview
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.audit.preview.post(postParams).then(function(AuditPreviewResult) {
 * 	console.log(AuditPreviewResult)
 * })
 * ```
 *
 * @param {AuditPreviewParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<AuditPreviewResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/audit/preview',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof systemrule.security
 */
evaluatetransientresources: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/evaluatetransientresources
 *
 * This method is manual
 *
 * @memberof systemrule.security.evaluatetransientresources
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.evaluatetransientresources.post(postParams).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {String[]} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/evaluatetransientresources',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * @namespace
 * @memberof systemrule.security
 */
parsetree: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/parsetree?rule={rule}
 *
 * This method is manual
 *
 * @memberof systemrule.security.parsetree
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.parsetree.get(rule).then(function(BacktrackedRule) {
 * 	console.log(BacktrackedRule)
 * })
 * ```
 *
 * @param {string=} rule the rule parameter
 * @returns {Promise.<BacktrackedRule>} a promise resolving to the response to the request
 */
get: function (rule) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/parsetree' + core.ifNotUndef(rule, '?rule=' + rule, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule.security
 */
referenceduserroles: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/referenceduserroles
 *
 * This method is manual
 *
 * @memberof systemrule.security.referenceduserroles
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.referenceduserroles.get().then(function(Array.<String>) {
 * 	console.log(Array.<String>)
 * })
 * ```
 *
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/referenceduserroles',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule.security
 */
useractions: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/security/useractions?privileges={appendprivileges}
 *
 * This method is manual
 *
 * @memberof systemrule.security.useractions
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.security.useractions.post(postParams, appendprivileges).then(function(Array.<UserActions>) {
 * 	console.log(Array.<UserActions>)
 * })
 * ```
 *
 * @param {UserInput} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserActions>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/useractions' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof systemrule
 */
sync: {
/**
 * @namespace
 * @memberof systemrule.sync
 */
audit: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/sync/audit
 *
 * This method is manual
 *
 * @memberof systemrule.sync.audit
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.sync.audit.post(postParams).then(function(SyncAuditResult) {
 * 	console.log(SyncAuditResult)
 * })
 * ```
 *
 * @param {SyncAuditParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<SyncAuditResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/sync/audit',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
},
/**
 * @namespace
 * @memberof systemrule.sync.audit
 */
preview: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/sync/audit/preview
 *
 * This method is manual
 *
 * @memberof systemrule.sync.audit.preview
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.sync.audit.preview.post(postParams).then(function(SyncPreviewResult) {
 * 	console.log(SyncPreviewResult)
 * })
 * ```
 *
 * @param {SyncAuditPreviewParameters} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<SyncPreviewResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/sync/audit/preview',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
},
/**
 * @namespace
 * @memberof systemrule.sync
 */
linkednodes: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/sync/linkednodes?resourcetype={resourcetype}&resourceid={resourceid}
 *
 * This method is manual
 *
 * @memberof systemrule.sync.linkednodes
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.sync.linkednodes.get(resourcetype, resourceid).then(function(Array.<Guid>) {
 * 	console.log(Array.<Guid>)
 * })
 * ```
 *
 * @param {string=} resourcetype the resourcetype parameter
 * @param {string=} resourceid the resourceid parameter
 * @returns {Promise.<Array.<Guid>>} a promise resolving to the response to the request
 */
get: function (resourcetype, resourceid) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/sync/linkednodes' + (core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '') + core.ifNotUndef(resourceid, '&resourceid=' + resourceid, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
/**
 * @namespace
 * @memberof systemrule.sync
 */
linkedobjects: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/sync/linkedobjects?node={servernodeconfiguration}&resourcetype={resourcetype}
 *
 * This method is manual
 *
 * @memberof systemrule.sync.linkedobjects
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.sync.linkedobjects.get(servernodeconfiguration, resourcetype).then(function(Array.<Guid>) {
 * 	console.log(Array.<Guid>)
 * })
 * ```
 *
 * @param {string=} servernodeconfiguration the servernodeconfiguration parameter
 * @param {string=} resourcetype the resourcetype parameter
 * @returns {Promise.<Array.<Guid>>} a promise resolving to the response to the request
 */
get: function (servernodeconfiguration, resourcetype) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/sync/linkedobjects' + (core.ifNotUndef(servernodeconfiguration, '&node=' + servernodeconfiguration, '') + core.ifNotUndef(resourcetype, '&resourcetype=' + resourcetype, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
}
},
/**
 * @namespace
 * @memberof systemrule
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 *
 * This method is generated
 *
 * @memberof systemrule.table
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
 * 	console.log(Object)
 * })
 * ```
 *
 * @param {TableDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} filter the filter parameter
 * @param {string=} skip the skip parameter
 * @param {string=} take the take parameter
 * @param {string=} sortcolumn the sortcolumn parameter
 * @param {string=} orderascending the orderascending parameter
 * @returns {Promise.<Object>} a promise resolving to the response to the request
 */
post: function (postParams, filter, skip, take, sortcolumn, orderascending) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof systemrule
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
 * 	console.log(Array.<SystemRule>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<SystemRule>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/systemrule?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof systemrule
 *
 * @example
 * ```javascript
 * qrsApi.systemrule.post(postParams, appendprivileges).then(function(SystemRule) {
 * 	console.log(SystemRule)
 * })
 * ```
 *
 * @param {SystemRule} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<SystemRule>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		key: options.key,
		cert: options.cert,
		ca: options.ca,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
}
}
