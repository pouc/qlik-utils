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
license: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/?control={control}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof license
 *
 * @example
 * ```javascript
 * qrsApi.license.post(postParams, control, appendprivileges).then(function(License) {
 * 	console.log(License)
 * })
 * ```
 *
 * @param {License} postParams the parameters to send as request body to the API endpoint
 * @param {string=} control the control parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
post: function (postParams, control, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license' + (core.ifNotUndef(control, '&control=' + control, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/?privileges={appendprivileges}
 * This method is manual
 *
 * @memberof license
 *
 * @example
 * ```javascript
 * qrsApi.license.get(appendprivileges).then(function(License) {
 * 	console.log(License)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/{id}
 * This method is generated
 *
 * @memberof license.id
 *
 * @example
 * ```javascript
 * qrsApi.license.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/' + id + '',
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
 * /qrs/license/{id}?control={control}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof license.id
 *
 * @example
 * ```javascript
 * qrsApi.license.id(id).put(postParams, control, appendprivileges).then(function(License) {
 * 	console.log(License)
 * })
 * ```
 *
 * @param {License} postParams the parameters to send as request body to the API endpoint
 * @param {string=} control the control parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
put: function (postParams, control, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/' + id + '' + (core.ifNotUndef(control, '&control=' + control, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license
 */
accesstypeinfo: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/accesstypeinfo
 * This method is manual
 *
 * @memberof license.accesstypeinfo
 *
 * @example
 * ```javascript
 * qrsApi.license.accesstypeinfo.get().then(function(AccessTypesInfo) {
 * 	console.log(AccessTypesInfo)
 * })
 * ```
 *
 * @returns {Promise.<AccessTypesInfo>} a promise resolving to the response to the request
 */
get: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/accesstypeinfo',
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
 * @memberof license
 */
datamarket: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/datamarket/?control={control}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof license.datamarket
 *
 * @example
 * ```javascript
 * qrsApi.license.datamarket.post(postParams, control, appendprivileges).then(function(License) {
 * 	console.log(License)
 * })
 * ```
 *
 * @param {License} postParams the parameters to send as request body to the API endpoint
 * @param {string=} control the control parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
post: function (postParams, control, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/datamarket' + (core.ifNotUndef(control, '&control=' + control, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
},
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/datamarket/?privileges={appendprivileges}
 * This method is manual
 *
 * @memberof license.datamarket
 *
 * @example
 * ```javascript
 * qrsApi.license.datamarket.get(appendprivileges).then(function(License) {
 * 	console.log(License)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/datamarket' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.datamarket
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/datamarket/{id}?control={control}&privileges={appendprivileges}
 * This method is manual
 *
 * @memberof license.datamarket.id
 *
 * @example
 * ```javascript
 * qrsApi.license.datamarket.id(id).put(postParams, control, appendprivileges).then(function(License) {
 * 	console.log(License)
 * })
 * ```
 *
 * @param {License} postParams the parameters to send as request body to the API endpoint
 * @param {string=} control the control parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<License>} a promise resolving to the response to the request
 */
put: function (postParams, control, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/datamarket/' + id + '' + (core.ifNotUndef(control, '&control=' + control, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'PUT'
	}, postParams);
}
};
}
},
/**
 * @namespace
 * @memberof license
 */
download: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/download?serial={serial}&control={control}&user={user}&org={org}
 * This method is manual
 *
 * @memberof license.download
 *
 * @example
 * ```javascript
 * qrsApi.license.download.get(serial, control, user, org).then(function(String) {
 * 	console.log(String)
 * })
 * ```
 *
 * @param {string=} serial the serial parameter
 * @param {string=} control the control parameter
 * @param {string=} user the user parameter
 * @param {string=} org the org parameter
 * @returns {Promise.<String>} a promise resolving to the response to the request
 */
get: function (serial, control, user, org) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/download' + (core.ifNotUndef(serial, '&serial=' + serial, '') + core.ifNotUndef(control, '&control=' + control, '') + core.ifNotUndef(user, '&user=' + user, '') + core.ifNotUndef(org, '&org=' + org, '')).replace(/^&/, '?'),
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
 * @memberof license
 */
loginaccesstype: {
/**
 * @namespace
 * @memberof license.loginaccesstype
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccesstype/{id}
 * This method is generated
 *
 * @memberof license.loginaccesstype.id
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/' + id + '',
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
 * /qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccesstype.id
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.id(id).get(appendprivileges).then(function(LicenseLoginAccessType) {
 * 	console.log(LicenseLoginAccessType)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccesstype.id
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseLoginAccessType) {
 * 	console.log(LicenseLoginAccessType)
 * })
 * ```
 *
 * @param {LicenseLoginAccessType} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.loginaccesstype
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccesstype/count?filter={filter}
 * This method is generated
 *
 * @memberof license.loginaccesstype.count
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof license.loginaccesstype
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccesstype.full
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
 * 	console.log(Array.<LicenseLoginAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license.loginaccesstype
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccesstype/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccesstype.many
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
 * 	console.log(Array.<LicenseLoginAccessType>)
 * })
 * ```
 *
 * @param {List<LicenseLoginAccessType>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.loginaccesstype
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccesstype/previewcreateprivilege
 * This method is generated
 *
 * @memberof license.loginaccesstype.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {LicenseLoginAccessType} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/previewcreateprivilege',
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
 * @memberof license.loginaccesstype
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof license.loginaccesstype.table
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/license/loginaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccesstype
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
 * 	console.log(Array.<LicenseLoginAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/license/loginaccesstype?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccesstype
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccesstype.post(postParams, appendprivileges).then(function(LicenseLoginAccessType) {
 * 	console.log(LicenseLoginAccessType)
 * })
 * ```
 *
 * @param {LicenseLoginAccessType} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseLoginAccessType>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccesstype' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license
 */
loginaccessusage: {
/**
 * @namespace
 * @memberof license.loginaccessusage
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccessusage/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccessusage.id
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccessusage.id(id).get(appendprivileges).then(function(LicenseLoginAccessUsage) {
 * 	console.log(LicenseLoginAccessUsage)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseLoginAccessUsage>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccessusage/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
};
},
/**
 * @namespace
 * @memberof license.loginaccessusage
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccessusage/count?filter={filter}
 * This method is generated
 *
 * @memberof license.loginaccessusage.count
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccessusage.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof license.loginaccessusage
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccessusage.full
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
 * 	console.log(Array.<LicenseLoginAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license.loginaccessusage
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/loginaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof license.loginaccessusage.table
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/license/loginaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.loginaccessusage
 *
 * @example
 * ```javascript
 * qrsApi.license.loginaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
 * 	console.log(Array.<LicenseLoginAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseLoginAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/loginaccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license
 */
requestaccesstype: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/requestaccesstype
 * This method is manual
 *
 * @memberof license.requestaccesstype
 *
 * @example
 * ```javascript
 * qrsApi.license.requestaccesstype.post(postParams).then(function(AccessTypeResult) {
 * 	console.log(AccessTypeResult)
 * })
 * ```
 *
 * @param {AccessTypeRequest} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<AccessTypeResult>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/requestaccesstype',
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
 * @memberof license
 */
useraccessgroup: {
/**
 * @namespace
 * @memberof license.useraccessgroup
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessgroup/{id}
 * This method is generated
 *
 * @memberof license.useraccessgroup.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/' + id + '',
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
 * /qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessgroup.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.id(id).get(appendprivileges).then(function(LicenseUserAccessGroup) {
 * 	console.log(LicenseUserAccessGroup)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessgroup.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.id(id).put(postParams, appendprivileges).then(function(LicenseUserAccessGroup) {
 * 	console.log(LicenseUserAccessGroup)
 * })
 * ```
 *
 * @param {LicenseUserAccessGroup} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.useraccessgroup
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessgroup/count?filter={filter}
 * This method is generated
 *
 * @memberof license.useraccessgroup.count
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof license.useraccessgroup
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessgroup.full
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
 * 	console.log(Array.<LicenseUserAccessGroup>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license.useraccessgroup
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessgroup/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessgroup.many
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.many.post(postParams, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
 * 	console.log(Array.<LicenseUserAccessGroup>)
 * })
 * ```
 *
 * @param {List<LicenseUserAccessGroup>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.useraccessgroup
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessgroup/previewcreateprivilege
 * This method is generated
 *
 * @memberof license.useraccessgroup.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {LicenseUserAccessGroup} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/previewcreateprivilege',
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
 * @memberof license.useraccessgroup
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof license.useraccessgroup.table
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/license/useraccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessgroup
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
 * 	console.log(Array.<LicenseUserAccessGroup>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessGroup>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/license/useraccessgroup?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessgroup
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessgroup.post(postParams, appendprivileges).then(function(LicenseUserAccessGroup) {
 * 	console.log(LicenseUserAccessGroup)
 * })
 * ```
 *
 * @param {LicenseUserAccessGroup} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessGroup>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessgroup' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license
 */
useraccesstype: {
/**
 * @namespace
 * @memberof license.useraccesstype
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccesstype/{id}
 * This method is generated
 *
 * @memberof license.useraccesstype.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/' + id + '',
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
 * /qrs/license/useraccesstype/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccesstype.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.id(id).get(appendprivileges).then(function(LicenseUserAccessType) {
 * 	console.log(LicenseUserAccessType)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/license/useraccesstype/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccesstype.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseUserAccessType) {
 * 	console.log(LicenseUserAccessType)
 * })
 * ```
 *
 * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.useraccesstype
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccesstype/count?filter={filter}
 * This method is generated
 *
 * @memberof license.useraccesstype.count
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof license.useraccesstype
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccesstype.full
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
 * 	console.log(Array.<LicenseUserAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license.useraccesstype
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccesstype/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccesstype.many
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
 * 	console.log(Array.<LicenseUserAccessType>)
 * })
 * ```
 *
 * @param {List<LicenseUserAccessType>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license.useraccesstype
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccesstype/previewcreateprivilege
 * This method is generated
 *
 * @memberof license.useraccesstype.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/previewcreateprivilege',
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
 * @memberof license.useraccesstype
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof license.useraccesstype.table
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/license/useraccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccesstype
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
 * 	console.log(Array.<LicenseUserAccessType>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessType>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/license/useraccesstype?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccesstype
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccesstype.post(postParams, appendprivileges).then(function(LicenseUserAccessType) {
 * 	console.log(LicenseUserAccessType)
 * })
 * ```
 *
 * @param {LicenseUserAccessType} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessType>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccesstype' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof license
 */
useraccessusage: {
/**
 * @namespace
 * @memberof license.useraccessusage
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessusage/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessusage.id
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessusage.id(id).get(appendprivileges).then(function(LicenseUserAccessUsage) {
 * 	console.log(LicenseUserAccessUsage)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<LicenseUserAccessUsage>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessusage/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
};
},
/**
 * @namespace
 * @memberof license.useraccessusage
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessusage/count?filter={filter}
 * This method is generated
 *
 * @memberof license.useraccessusage.count
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessusage.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessusage/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof license.useraccessusage
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessusage.full
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
 * 	console.log(Array.<LicenseUserAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessusage/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof license.useraccessusage
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/license/useraccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof license.useraccessusage.table
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessusage/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/license/useraccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof license.useraccessusage
 *
 * @example
 * ```javascript
 * qrsApi.license.useraccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
 * 	console.log(Array.<LicenseUserAccessUsage>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<LicenseUserAccessUsage>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/license/useraccessusage' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
