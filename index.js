/**
 * A set of utility functions / classes for simplifying the call to Qlik Sense APIs
 * @module qlik-utils
 * @typicalname utils
 * @author Loic Formont
 *
 * @copyright Copyright (C) 2015 Loic Formont
 * @license MIT Licensed
 *
 * @example
 * ```javascript
 * var utils = require("qlik-utils");
 * ```
 */
module.exports = {

    /**
     * Wrapper for helper functions for arrays.
     * {@link lib/array.md|See documentation}
     *
     * @namespace
     */
    Array: require('./lib/array').Array,

    /**
     * Wrapper for helper functions for objects.
     * {@link lib/object.md|See documentation}
     *
     * @namespace
     */
    Object: require('./lib/object').Object,

    /**
     * Wrapper for helper functions.
     * {@link lib/core.md|See documentation}
     *
     * @namespace
     */
    Core: require('./lib/core').Core,

    /**
     * Wrapper for helper functions for Qlik Sense.
     * {@link lib/qlik.md|See documentation}
     *
     * @namespace
     */
    Qlik: require('./lib/qlik').Qlik

};

/**
 * Deprecated since version 2.0. Use Core.ifNotUndef instead
 * @deprecated
 */
module.exports.ifnotundef = function(a, b, c) {
    return module.exports.Core.ifNotUndef.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Qlik.generateXrfKey instead
 * @deprecated
 */
module.exports.generateXrfkey = function(size, chars) {
    return module.exports.Qlik.generateXrfKey.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Qlik.request instead
 * @deprecated
 */
module.exports.request = function(options, params) {
    return module.exports.Qlik.request.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Qlik.getTicket instead
 * @deprecated
 */
module.exports.getTicket = function(options, params) {
    return module.exports.Qlik.getTicket.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Qlik.openSession instead
 * @deprecated
 */
module.exports.openSession = function(ticket, hostUri) {
    return module.exports.Qlik.openSession.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Qlik.addToWhiteList instead
 * @deprecated
 */
module.exports.addToWhiteList = function(ip, options) {
    return module.exports.Qlik.addToWhiteList.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Core.loop instead
 * @deprecated
 */
module.exports.loop = function(func, param, retry, retryTimeout, task) {
    return module.exports.Core.loop.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Core.setTimeout2Promise instead
 * @deprecated
 */
module.exports.setTimeout2Promise = function(timeout) {
    return module.exports.Core.setTimeout2Promise.apply(this, arguments);
};

/**
 * Deprecated since version 2.0. Use Qlik.dynamicAppClone instead
 * @deprecated
 */
module.exports.dynamicAppClone = function(options, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task) {
    options.templateAppId = templateAppId;
    options.scriptMarker = scriptMarker;
    options.scriptReplaces = scriptReplaces;
    options.scriptRegex = scriptRegex;
    options.publishStreamId = publishStreamId;
    options.task = task;
    return module.exports.Qlik.dynamicAppClone.apply(this, arguments);
};
