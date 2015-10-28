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
compositeeventoperational: {
/**
 * @namespace
 * @memberof compositeeventoperational
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/compositeeventoperational/{id}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.id
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/' + id + '',
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
 * /qrs/compositeeventoperational/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.id
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.id(id).get(appendprivileges).then(function(CompositeEventOperational) {
 * 	console.log(CompositeEventOperational)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<CompositeEventOperational>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/compositeeventoperational/{id}?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.id
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.id(id).put(postParams, appendprivileges).then(function(CompositeEventOperational) {
 * 	console.log(CompositeEventOperational)
 * })
 * ```
 *
 * @param {CompositeEventOperational} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<CompositeEventOperational>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof compositeeventoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/compositeeventoperational/count?filter={filter}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof compositeeventoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/compositeeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
 * 	console.log(Array.<CompositeEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof compositeeventoperational
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/compositeeventoperational/many?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.many
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.many.post(postParams, appendprivileges).then(function(Array.<CompositeEventOperational>) {
 * 	console.log(Array.<CompositeEventOperational>)
 * })
 * ```
 *
 * @param {List<CompositeEventOperational>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventOperational>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof compositeeventoperational
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/compositeeventoperational/previewcreateprivilege
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {CompositeEventOperational} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/previewcreateprivilege',
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
 * @memberof compositeeventoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 *
 * /qrs/compositeeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/compositeeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
 * 	console.log(Array.<CompositeEventOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<CompositeEventOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/compositeeventoperational?privileges={appendprivileges}
 *
 * This method is generated
 *
 * @memberof compositeeventoperational
 *
 * @example
 * ```javascript
 * qrsApi.compositeeventoperational.post(postParams, appendprivileges).then(function(CompositeEventOperational) {
 * 	console.log(CompositeEventOperational)
 * })
 * ```
 *
 * @param {CompositeEventOperational} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<CompositeEventOperational>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/compositeeventoperational' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
