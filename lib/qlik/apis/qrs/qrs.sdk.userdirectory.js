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
userdirectory: {
/**
 * @namespace
 * @memberof userdirectory
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/{id}
 *
 * This method is generated
 *
 * @memberof userdirectory.id
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/' + id + '',
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
 * /qrs/userdirectory/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.id
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.id(id).get(appendprivileges).then(function(UserDirectory) {
 * 	console.log(UserDirectory)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/userdirectory/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.id
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.id(id).put(postParams, appendprivileges).then(function(UserDirectory) {
 * 	console.log(UserDirectory)
 * })
 * ```
 *
 * @param {UserDirectory} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof userdirectory
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/count?filter={filter}
 *
 * This method is generated
 *
 * @memberof userdirectory.count
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof userdirectory
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.full
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
 * 	console.log(Array.<UserDirectory>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof userdirectory
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/many?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.many
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.many.post(postParams, appendprivileges).then(function(Array.<UserDirectory>) {
 * 	console.log(Array.<UserDirectory>)
 * })
 * ```
 *
 * @param {List<UserDirectory>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof userdirectory
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/previewcreateprivilege
 *
 * This method is generated
 *
 * @memberof userdirectory.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {UserDirectory} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/previewcreateprivilege',
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
 * @memberof userdirectory
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 *
 * This method is generated
 *
 * @memberof userdirectory.table
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * @memberof userdirectory
 */
template: {
/**
 * @namespace
 * @memberof userdirectory.template
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/template/{id}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.id
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/' + id + '',
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
 * /qrs/userdirectory/template/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.id
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.id(id).get(appendprivileges).then(function(UserDirectoryTemplate) {
 * 	console.log(UserDirectoryTemplate)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<UserDirectoryTemplate>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/userdirectory/template/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.id
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.id(id).put(postParams, appendprivileges).then(function(UserDirectoryTemplate) {
 * 	console.log(UserDirectoryTemplate)
 * })
 * ```
 *
 * @param {UserDirectoryTemplate} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<UserDirectoryTemplate>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof userdirectory.template
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/template/count?filter={filter}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.count
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof userdirectory.template
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.full
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
 * 	console.log(Array.<UserDirectoryTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectoryTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof userdirectory.template
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/template/many?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.many
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.many.post(postParams, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
 * 	console.log(Array.<UserDirectoryTemplate>)
 * })
 * ```
 *
 * @param {List<UserDirectoryTemplate>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectoryTemplate>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof userdirectory.template
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/template/previewcreateprivilege
 *
 * This method is generated
 *
 * @memberof userdirectory.template.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {UserDirectoryTemplate} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/previewcreateprivilege',
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
 * @memberof userdirectory.template
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/userdirectory/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 *
 * This method is generated
 *
 * @memberof userdirectory.template.table
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/userdirectory/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.template
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
 * 	console.log(Array.<UserDirectoryTemplate>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectoryTemplate>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/userdirectory/template?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory.template
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.template.post(postParams, appendprivileges).then(function(UserDirectoryTemplate) {
 * 	console.log(UserDirectoryTemplate)
 * })
 * ```
 *
 * @param {UserDirectoryTemplate} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<UserDirectoryTemplate>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory/template' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/userdirectory?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
 * 	console.log(Array.<UserDirectory>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<UserDirectory>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/userdirectory?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof userdirectory
 *
 * @example
 * ```javascript
 * qrsApi.userdirectory.post(postParams, appendprivileges).then(function(UserDirectory) {
 * 	console.log(UserDirectory)
 * })
 * ```
 *
 * @param {UserDirectory} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<UserDirectory>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/userdirectory' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
