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
externalprogramtaskoperational: {
/**
 * @namespace
 * @memberof externalprogramtaskoperational
 */
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/externalprogramtaskoperational/{id}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.id
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.id(id).delete().then(function() {
 * 	console.log('done')
 * })
 * ```
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/' + id + '',
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
 * /qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.id
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.id(id).get(appendprivileges).then(function(ExternalProgramTaskOperational) {
 * 	console.log(ExternalProgramTaskOperational)
 * })
 * ```
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ExternalProgramTaskOperational>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.id
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.id(id).put(postParams, appendprivileges).then(function(ExternalProgramTaskOperational) {
 * 	console.log(ExternalProgramTaskOperational)
 * })
 * ```
 *
 * @param {ExternalProgramTaskOperational} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ExternalProgramTaskOperational>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof externalprogramtaskoperational
 */
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/externalprogramtaskoperational/count?filter={filter}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.count
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.count.get(filter).then(function(int) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
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
 * @memberof externalprogramtaskoperational
 */
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/externalprogramtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.full
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
 * 	console.log(Array.<ExternalProgramTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * @memberof externalprogramtaskoperational
 */
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/externalprogramtaskoperational/many?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.many
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.many.post(postParams, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
 * 	console.log(Array.<ExternalProgramTaskOperational>)
 * })
 * ```
 *
 * @param {List<ExternalProgramTaskOperational>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTaskOperational>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * @memberof externalprogramtaskoperational
 */
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/externalprogramtaskoperational/previewcreateprivilege
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.previewcreateprivilege
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
 * 	console.log(Boolean)
 * })
 * ```
 *
 * @param {ExternalProgramTaskOperational} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/previewcreateprivilege',
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
 * @memberof externalprogramtaskoperational
 */
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/externalprogramtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational.table
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/externalprogramtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
 * 	console.log(Array.<ExternalProgramTaskOperational>)
 * })
 * ```
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ExternalProgramTaskOperational>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/externalprogramtaskoperational?privileges={appendprivileges}
 * This method is generated
 *
 * @memberof externalprogramtaskoperational
 *
 * @example
 * ```javascript
 * qrsApi.externalprogramtaskoperational.post(postParams, appendprivileges).then(function(ExternalProgramTaskOperational) {
 * 	console.log(ExternalProgramTaskOperational)
 * })
 * ```
 *
 * @param {ExternalProgramTaskOperational} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ExternalProgramTaskOperational>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/externalprogramtaskoperational' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
