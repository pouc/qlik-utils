var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
/**
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
 * /qrs/systemrule/{category}/associatedrules?resourcetype={resourcetype}&resourcefilter={resourcefilter}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof systemrule.category.associatedrules
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
 * /qrs/systemrule/{id}
 * This method is generated
 *
 * @memberof systemrule.id
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/' + id + '',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/systemrule/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof systemrule.id
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
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/systemrule/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof systemrule.id
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
 * /qrs/systemrule/count?filter={filter}
 * This method is generated
 *
 * @memberof systemrule.count
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
 * /qrs/systemrule/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof systemrule.full
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
 * /qrs/systemrule/license/audit
 * This method is manual
 *
 * @memberof systemrule.license.audit
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
 * /qrs/systemrule/license/audit/preview
 * This method is manual
 *
 * @memberof systemrule.license.audit.preview
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
 * /qrs/systemrule/license/useractions?privileges={appendprivileges}
 * This method is manual
 *
 * @memberof systemrule.license.useractions
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
 * /qrs/systemrule/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof systemrule.many
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
 * /qrs/systemrule/previewcreateprivilege
 * This method is generated
 *
 * @memberof systemrule.previewcreateprivilege
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
 * /qrs/systemrule/security/accessibleattributes?resourcetype={resourcetype}
 * This method is manual
 *
 * @memberof systemrule.security.accessibleattributes
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
 * /qrs/systemrule/security/attributevalues?resourcetype={resourcetype}&attribute={attribute}&filter={filter}&limit={limit}&selection={selection}
 * This method is manual
 *
 * @memberof systemrule.security.attributevalues
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
 * /qrs/systemrule/security/audit
 * This method is manual
 *
 * @memberof systemrule.security.audit
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
 * /qrs/systemrule/security/audit/accessibleobjects
 * This method is manual
 *
 * @memberof systemrule.security.audit.accessibleobjects
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
 * /qrs/systemrule/security/audit/countresources
 * This method is manual
 *
 * @memberof systemrule.security.audit.countresources
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
 * /qrs/systemrule/security/audit/export
 * This method is manual
 *
 * @memberof systemrule.security.audit.export
 *
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/audit/export',
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
 * @memberof systemrule.security.audit
 */
preview: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/systemrule/security/audit/preview
 * This method is manual
 *
 * @memberof systemrule.security.audit.preview
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
 * /qrs/systemrule/security/evaluatetransientresources
 * This method is manual
 *
 * @memberof systemrule.security.evaluatetransientresources
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
 * /qrs/systemrule/security/parsetree?rule={rule}
 * This method is manual
 *
 * @memberof systemrule.security.parsetree
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
 * /qrs/systemrule/security/referenceduserroles
 * This method is manual
 *
 * @memberof systemrule.security.referenceduserroles
 *
 * @returns {Promise.<Array.<String>>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/systemrule/security/referenceduserroles',
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
 * @memberof systemrule.security
 */
useractions: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/systemrule/security/useractions?privileges={appendprivileges}
 * This method is manual
 *
 * @memberof systemrule.security.useractions
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
 * /qrs/systemrule/sync/audit
 * This method is manual
 *
 * @memberof systemrule.sync.audit
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
 * /qrs/systemrule/sync/audit/preview
 * This method is manual
 *
 * @memberof systemrule.sync.audit.preview
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
 * /qrs/systemrule/sync/linkednodes?resourcetype={resourcetype}&resourceid={resourceid}
 * This method is manual
 *
 * @memberof systemrule.sync.linkednodes
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
 * /qrs/systemrule/sync/linkedobjects?node={servernodeconfiguration}&resourcetype={resourcetype}
 * This method is manual
 *
 * @memberof systemrule.sync.linkedobjects
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
 * /qrs/systemrule/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof systemrule.table
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
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/systemrule?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof systemrule
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
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/systemrule?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof systemrule
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
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
}
}
