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
        log: {
            /**
             * @namespace
             * @memberOf log
             */
            archive: {
                /**
                 * @namespace
                 * @memberOf log.archive
                 */
                logrootsubfolder: function(logrootsubfolder) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/log/archive/{logrootsubfolder}
                         *
                         * This method is manual
                         *
                         * @memberOf log.archive.logrootsubfolder
                         *
                         * @example
                         * ```javascript
                         * qrsApi.log.archive.logrootsubfolder(logrootsubfolder).post(postParams).then(function(Guid) {
                         *     console.log(Guid)
                         * })
                         * ```
                         *
                         * @param {String} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise.<Guid>} a promise resolving to the response to the request
                         */
                        post: function(postParams) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/log/archive/' + logrootsubfolder + '',
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
                    };
                }
            },
            /**
             * @namespace
             * @memberOf log
             */
            rolled: {
                /**
                 * @namespace
                 * @memberOf log.rolled
                 */
                logrootsubfolder: function(logrootsubfolder) {
                    return {
                        /**
                         * Makes a request on the Qlik Sense QRS API:
                         *
                         * /qrs/log/rolled/{logrootsubfolder}
                         *
                         * This method is manual
                         *
                         * @memberOf log.rolled.logrootsubfolder
                         *
                         * @example
                         * ```javascript
                         * qrsApi.log.rolled.logrootsubfolder(logrootsubfolder).post(postParams).then(function() {
                         *     console.log('done')
                         * })
                         * ```
                         *
                         * @param {Object} postParams the parameters to send as request body to the API endpoint
                         * @returns {Promise} a promise resolving without a return value when the request is finished
                         */
                        post: function(postParams) {

                            return base.request({
                                restUri: options.qrsRestUri + '/qrs/log/rolled/' + logrootsubfolder + '',
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
                    };
                }
            }
        }
    };
};
