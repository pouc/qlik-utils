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
custompropertydefinition: {
/**
 * @namespace
 * @memberof custompropertydefinition
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/custompropertydefinition/{id}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.id
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/' + id + '',
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
 * /qrs/custompropertydefinition/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.id
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.id(id).get(appendprivileges).then(function(CustomPropertyDefinition) {
 * 	console.log(CustomPropertyDefinition)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<CustomPropertyDefinition>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/custompropertydefinition/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.id
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.id(id).put(postParams, appendprivileges).then(function(CustomPropertyDefinition) {
 * 	console.log(CustomPropertyDefinition)
 * })
 * ```
 *
 * @param {CustomPropertyDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<CustomPropertyDefinition>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof custompropertydefinition
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/custompropertydefinition/count?filter={filter}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.count
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof custompropertydefinition
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/custompropertydefinition/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.full
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.full.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
 * 	console.log(Array.<CustomPropertyDefinition>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CustomPropertyDefinition>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof custompropertydefinition
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/custompropertydefinition/many?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.many
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.many.post(postParams, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
 * 	console.log(Array.<CustomPropertyDefinition>)
 * })
 * ```
 *
 * @param {List<CustomPropertyDefinition>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CustomPropertyDefinition>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof custompropertydefinition
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/custompropertydefinition/previewcreateprivilege
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {CustomPropertyDefinition} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/previewcreateprivilege',
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
 * @memberof custompropertydefinition
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/custompropertydefinition/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition.table
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/custompropertydefinition?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
 * 	console.log(Array.<CustomPropertyDefinition>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CustomPropertyDefinition>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/custompropertydefinition?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof custompropertydefinition
 *
 * @example
 * ```javascript
 * qrsApi.custompropertydefinition.post(postParams, appendprivileges).then(function(CustomPropertyDefinition) {
 * 	console.log(CustomPropertyDefinition)
 * })
 * ```
 *
 * @param {CustomPropertyDefinition} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<CustomPropertyDefinition>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/custompropertydefinition' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
