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
        download: {
            /**
             * @namespace
             * @memberOf download
             */
            app: {
                /**
                 * @namespace
                 * @memberOf download.app
                 */
                id: function(id) {
                    return {
                        /**
                         * @namespace
                         * @memberOf download.app.id
                         */
                        exportticketid: function(exportticketid) {
                            return {
                                /**
                                 * @namespace
                                 * @memberOf download.app.id.exportticketid
                                 */
                                localfilename: function(localfilename) {
                                    return {
                                        /**
                                         * Makes a request on the Qlik Sense QRS API:
                                         *
                                         * /qrs/download/app/{id}/{exportticketid}/{localfilename}
                                         *
                                         * This method is manual
                                         *
                                         * @memberOf download.app.id.exportticketid.localfilename
                                         *
                                         * @example
                                         * ```javascript
                                         * qrsApi.download.app.id(id).exportticketid(exportticketid).localfilename(localfilename).get().then(function(FileDownloadInfo) {
                                         *     console.log(FileDownloadInfo)
                                         * })
                                         * ```
                                         *
                                         * @returns {Promise.<FileDownloadInfo>} a promise resolving to the response to the request
                                         */
                                        get: function() {

                                            return base.request({
                                                restUri: options.qrsRestUri + '/qrs/download/app/' + id + '/' + exportticketid + '/' + localfilename + '',
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
                                    };
                                }
                            };
                        }
                    };
                }
            },
            /**
             * @namespace
             * @memberOf download
             */
            reloadtask: {
                /**
                 * @namespace
                 * @memberOf download.reloadtask
                 */
                downloadticketid: function(downloadticketid) {
                    return {
                        /**
                         * @namespace
                         * @memberOf download.reloadtask.downloadticketid
                         */
                        localfilename: function(localfilename) {
                            return {
                                /**
                                 * Makes a request on the Qlik Sense QRS API:
                                 *
                                 * /qrs/download/reloadtask/{downloadticketid}/{localfilename}
                                 *
                                 * This method is manual
                                 *
                                 * @memberOf download.reloadtask.downloadticketid.localfilename
                                 *
                                 * @example
                                 * ```javascript
                                 * qrsApi.download.reloadtask.downloadticketid(downloadticketid).localfilename(localfilename).get().then(function(FileDownloadInfo) {
                                 *     console.log(FileDownloadInfo)
                                 * })
                                 * ```
                                 *
                                 * @returns {Promise.<FileDownloadInfo>} a promise resolving to the response to the request
                                 */
                                get: function() {

                                    return base.request({
                                        restUri: options.qrsRestUri + '/qrs/download/reloadtask/' + downloadticketid + '/' + localfilename + '',
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
                            };
                        }
                    };
                }
            },
            /**
             * @namespace
             * @memberOf download
             */
            samlmetadata: {
                /**
                 * @namespace
                 * @memberOf download.samlmetadata
                 */
                exportticketid: function(exportticketid) {
                    return {
                        /**
                         * @namespace
                         * @memberOf download.samlmetadata.exportticketid
                         */
                        localfilename: function(localfilename) {
                            return {
                                /**
                                 * Makes a request on the Qlik Sense QRS API:
                                 *
                                 * /qrs/download/samlmetadata/{exportticketid}/{localfilename}
                                 *
                                 * This method is manual
                                 *
                                 * @memberOf download.samlmetadata.exportticketid.localfilename
                                 *
                                 * @example
                                 * ```javascript
                                 * qrsApi.download.samlmetadata.exportticketid(exportticketid).localfilename(localfilename).get().then(function(FileDownloadInfo) {
                                 *     console.log(FileDownloadInfo)
                                 * })
                                 * ```
                                 *
                                 * @returns {Promise.<FileDownloadInfo>} a promise resolving to the response to the request
                                 */
                                get: function() {

                                    return base.request({
                                        restUri: options.qrsRestUri + '/qrs/download/samlmetadata/' + exportticketid + '/' + localfilename + '',
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
                            };
                        }
                    };
                }
            }
        }
    };
};
