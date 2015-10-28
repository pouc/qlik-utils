var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

module.exports = function(options) { 
return {
contentlibrary: {
id: function(id) {
return {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/{id}
 * This method is generated
 *
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function () {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/' + id + '',
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
 * /qrs/contentlibrary/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
 */
get: function (appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
 * /qrs/contentlibrary/{id}?privileges={appendprivileges}
 * This method is generated
 *
 * @param {ContentLibrary} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
 */
put: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/' + id + '' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
libname: function(libname) {
return {
deletecontent: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/{libname}/deletecontent?externalpath={externalpath}
 * This method is manual
 *
 * @param {string=} externalpath the externalpath parameter
 * @returns {Promise} a promise resolving without a return value when the request is finished
 */
delete: function (externalpath) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/' + libname + '/deletecontent' + core.ifNotUndef(externalpath, '?externalpath=' + externalpath, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'DELETE'
	});
}
},
uploadfile: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/{libname}/uploadfile?externalpath={externalpath}&overwrite={overwrite}
 * This method is manual
 *
 * @param {String} postParams the parameters to send as request body to the API endpoint
 * @param {string=} externalpath the externalpath parameter
 * @param {string=} overwrite the overwrite parameter
 * @returns {Promise.<String>} a promise resolving to the response to the request
 */
post: function (postParams, externalpath, overwrite) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/' + libname + '/uploadfile' + (core.ifNotUndef(externalpath, '&externalpath=' + externalpath, '') + core.ifNotUndef(overwrite, '&overwrite=' + overwrite, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
}
};
},
count: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/count?filter={filter}
 * This method is generated
 *
 * @param {string=} filter the filter parameter
 * @returns {Promise.<int>} a promise resolving to the response to the request
 */
get: function (filter) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/count' + core.ifNotUndef(filter, '?filter=' + filter, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
full: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/full' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'GET'
	});
}
},
many: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/many?privileges={appendprivileges}
 * This method is generated
 *
 * @param {List<ContentLibrary>} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/many' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
previewcreateprivilege: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/previewcreateprivilege
 * This method is generated
 *
 * @param {ContentLibrary} postParams the parameters to send as request body to the API endpoint
 * @returns {Promise.<Boolean>} a promise resolving to the response to the request
 */
post: function (postParams) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/previewcreateprivilege',
		pfx: options.pfx,
		passPhrase: options.passPhrase,
		UserId: options.UserId,
		UserDirectory: options.UserDirectory,
		timeout: core.ifNotUndef(options.timeout, 60000),
		method: 'POST'
	}, postParams);
}
},
table: {
/**
 * Makes a request on the Qlik Sense QRS API:
 * /qrs/contentlibrary/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
 * This method is generated
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
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary/table' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(skip, '&skip=' + skip, '') + core.ifNotUndef(take, '&take=' + take, '') + core.ifNotUndef(sortcolumn, '&sortcolumn=' + sortcolumn, '') + core.ifNotUndef(orderascending, '&orderascending=' + orderascending, '')).replace(/^&/, '?'),
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
 * /qrs/contentlibrary?filter={filter}&orderby={orderby}&privileges={appendprivileges}
 * This method is generated
 *
 * @param {string=} filter the filter parameter
 * @param {string=} orderby the orderby parameter
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<Array.<ContentLibrary>>} a promise resolving to the response to the request
 */
get: function (filter, orderby, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary' + (core.ifNotUndef(filter, '&filter=' + filter, '') + core.ifNotUndef(orderby, '&orderby=' + orderby, '') + core.ifNotUndef(appendprivileges, '&privileges=' + appendprivileges, '')).replace(/^&/, '?'),
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
 * /qrs/contentlibrary?privileges={appendprivileges}
 * This method is generated
 *
 * @param {ContentLibrary} postParams the parameters to send as request body to the API endpoint
 * @param {string=} appendprivileges the appendprivileges parameter
 * @returns {Promise.<ContentLibrary>} a promise resolving to the response to the request
 */
post: function (postParams, appendprivileges) {
	var restUri = url.parse(options.restUri);
	return base.request({
		restUri: 'https://' + restUri.hostname + ':' + restUri.port + '/qrs/contentlibrary' + core.ifNotUndef(appendprivileges, '?privileges=' + appendprivileges, ''),
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
