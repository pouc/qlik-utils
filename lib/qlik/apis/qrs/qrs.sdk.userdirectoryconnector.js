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
        userdirectoryconnector: {
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/userdirectoryconnector
             *
             * This method is manual
             *
             * @memberOf userdirectoryconnector
             *
             * @example
             * ```javascript
             * qrsApi.userdirectoryconnector.get().then(function(Object) {
             *     console.log(Object)
             * })
             * ```
             *
             * @returns {Promise.<Object>} a promise resolving to the response to the request
             */
            get: function() {

                return base.request({
                    restUri: options.qrsRestUri + '/qrs/userdirectoryconnector',
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
             * @namespace
             * @memberOf userdirectoryconnector
             */
            deleteudandusers: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectoryconnector/deleteudandusers?userdirectoryid={userdirectoryid}
                 *
                 * This method is manual
                 *
                 * @memberOf userdirectoryconnector.deleteudandusers
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectoryconnector.deleteudandusers.delete(userdirectoryid).then(function() {
                 *     console.log('done')
                 * })
                 * ```
                 *
                 * @param {string=} userdirectoryid the userdirectoryid parameter
                 * @returns {Promise} a promise resolving without a return value when the request is finished
                 */
                delete: function(userdirectoryid) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/userdirectoryconnector/deleteudandusers' + core.ifNotUndef(userdirectoryid, '?userdirectoryid=' + userdirectoryid, ''),
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
                }
            },
            /**
             * @namespace
             * @memberOf userdirectoryconnector
             */
            refreshudctypes: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectoryconnector/refreshudctypes
                 *
                 * This method is manual
                 *
                 * @memberOf userdirectoryconnector.refreshudctypes
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectoryconnector.refreshudctypes.post().then(function(Object) {
                 *     console.log(Object)
                 * })
                 * ```
                 *
                 * @returns {Promise.<Object>} a promise resolving to the response to the request
                 */
                post: function() {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/userdirectoryconnector/refreshudctypes',
                        pfx: options.pfx,
                        passPhrase: options.passPhrase,
                        key: options.key,
                        cert: options.cert,
                        ca: options.ca,
                        UserId: options.UserId,
                        UserDirectory: options.UserDirectory,
                        timeout: core.ifNotUndef(options.timeout, 60000),
                        method: 'POST'
                    });
                }
            },
            /**
             * @namespace
             * @memberOf userdirectoryconnector
             */
            syncuserdirectories: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/userdirectoryconnector/syncuserdirectories
                 *
                 * This method is manual
                 *
                 * @memberOf userdirectoryconnector.syncuserdirectories
                 *
                 * @example
                 * ```javascript
                 * qrsApi.userdirectoryconnector.syncuserdirectories.post(postParams).then(function() {
                 *     console.log('done')
                 * })
                 * ```
                 *
                 * @param {Guid[]} postParams the parameters to send as request body to the API endpoint
                 * @returns {Promise} a promise resolving without a return value when the request is finished
                 */
                post: function(postParams) {

                    return base.request({
                        restUri: options.qrsRestUri + '/qrs/userdirectoryconnector/syncuserdirectories',
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
    };
};
