var url = require('url');
var XRegExp = require('xregexp');
var extend = require('extend');

var core = require('../../../core').Core;
var base = require('../../base').Base;

module.exports = function(options) {
    return {
        /**
         * {@link qrs.md|See parent documentation}
         * @namespace
         */
        notification: {
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/notification/?handle={handle}
             *
             * This method is manual
             *
             * @memberOf notification
             *
             * @example
             * ```javascript
             * qrsApi.notification.delete(handle).then(function() {
             *     console.log('done')
             * })
             * ```
             *
             * @param {string=} handle the handle parameter
             * @returns {Promise} a promise resolving without a return value when the request is finished
             */
            delete: function(handle) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/notification' + core.ifNotUndef(handle, '?handle=' + handle, ''),
                    method: 'DELETE'
                }));
            },
            /**
             * Makes a request on the Qlik Sense QRS API:
             *
             * /qrs/notification/?name={typename}&id={id}&filter={filter}&condition={condition}&changetype={changetype}&propertyname={propertyname}
             *
             * This method is manual
             *
             * @memberOf notification
             *
             * @example
             * ```javascript
             * qrsApi.notification.post(postParams, typename, id, filter, condition, changetype, propertyname).then(function(Guid) {
             *     console.log(Guid)
             * })
             * ```
             *
             * @param {String} postParams the parameters to send as request body to the API endpoint
             * @param {string=} typename the typename parameter
             * @param {string=} id the id parameter
             * @param {string=} filter the filter parameter
             * @param {string=} condition the condition parameter
             * @param {string=} changetype the changetype parameter
             * @param {string=} propertyname the propertyname parameter
             * @returns {Promise.<Guid>} a promise resolving to the response to the request
             */
            post: function(postParams, typename, id, filter, condition, changetype, propertyname) {
                return base.request(extend(true, {}, options, {
                    restUri: options.qrsRestUri + '/qrs/notification' + (core.ifNotUndef(typename, '&name=' + typename, '') +
                        core.ifNotUndef(id, '&id=' + id, '') +
                        core.ifNotUndef(filter, '&filter=' + filter, '') +
                        core.ifNotUndef(condition, '&condition=' + condition, '') +
                        core.ifNotUndef(changetype, '&changetype=' + changetype, '') +
                        core.ifNotUndef(propertyname, '&propertyname=' + propertyname, '')).replace(/^&/, '?'),
                    method: 'POST'
                }), postParams);
            },
            /**
             * @namespace
             * @memberOf notification
             */
            changes: {
                /**
                 * Makes a request on the Qlik Sense QRS API:
                 *
                 * /qrs/notification/changes?since={since}&types={types}
                 *
                 * This method is manual
                 *
                 * @memberOf notification.changes
                 *
                 * @example
                 * ```javascript
                 * qrsApi.notification.changes.get(since, types).then(function(Array.<ChangesSinceOutput>) {
                 *     console.log(Array.<ChangesSinceOutput>)
                 * })
                 * ```
                 *
                 * @param {string=} since the since parameter
                 * @param {string=} types the types parameter
                 * @returns {Promise.<Array.<ChangesSinceOutput>>} a promise resolving to the response to the request
                 */
                get: function(since, types) {
                    return base.request(extend(true, {}, options, {
                        restUri: options.qrsRestUri + '/qrs/notification/changes' + (core.ifNotUndef(since, '&since=' + since, '') +
                            core.ifNotUndef(types, '&types=' + types, '')).replace(/^&/, '?'),
                        method: 'GET'
                    }));
                }
            }
        }
    };
};
