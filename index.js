var extend = require('extend');

var base = require('./lib/qlik/base').Base;
var advanced = require('./lib/qlik/advanced').Advanced;
var qrs = require('./lib/qlik/apis/qrs');

/**
 A set of utility functions / classes for simplifying the call to Qlik Sense APIs
 @module qlik-utils
 @typicalname utils
 @author Loic Formont

 @copyright Copyright (C) 2015 Loic Formont
 @license MIT Licensed

 @example
 var utils = require("qlik-utils");
 */
module.exports = {

    /**
     Wrapper for helper functions for arrays.
     {@link lib/array.md|See documentation}

     @namespace
     */
    Array: require('./lib/array').Array,

    /**
     Wrapper for helper functions for objects.
     {@link lib/object.md|See documentation}

     @namespace
     */
    Object: require('./lib/object').Object,

    /**
     Wrapper for helper functions.
     {@link lib/core.md|See documentation}

     @namespace
     */
    Core: require('./lib/core').Core,

    /**
     Wrapper for helper functions for Qlik Sense.
     {@link lib/qlik.md|See documentation}

     @namespace
    */
    Qlik: extend(true, {}, base, advanced, qrs)

};


/**
 Deprecated since version 2.0. Use Core.ifNotUndef instead
 @deprecated
 */
exports.ifnotundef = function(a, b, c) {
    return utils.Core.ifNotUndef.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Qlik.generateXrfKey instead
 @deprecated
 */
exports.generateXrfkey = function(size, chars) {
    return utils.Qlik.generateXrfKey.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Qlik.request instead
 @deprecated
 */
exports.request = function(options, params) {
    return utils.Qlik.request.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Qlik.getTicket instead
 @deprecated
*/
exports.getTicket = function(options, params) {
    return utils.Qlik.getTicket.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Qlik.openSession instead
 @deprecated
 */
exports.openSession = function(ticket, hostUri) {
    return utils.Qlik.openSession.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Qlik.addToWhiteList instead
 @deprecated
 */
exports.addToWhiteList = function(ip, options) {
    return utils.Qlik.addToWhiteList.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Core.loop instead
 @deprecated
 */
exports.loop = function(func, param, retry, retryTimeout, task) {
    return utils.Core.loop.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Core.setTimeout2Promise instead
 @deprecated
 */
exports.setTimeout2Promise = function(timeout) {
    return utils.Core.setTimeout2Promise.apply(this, arguments);
};

/**
 Deprecated since version 2.0. Use Qlik.dynamicAppClone instead
 @deprecated
 */
exports.dynamicAppClone = function(options, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task) {
    options.templateAppId = templateAppId;
    options.scriptMarker = scriptMarker;
    options.scriptReplaces = scriptReplaces;
    options.scriptRegex = scriptRegex;
    options.publishStreamId = publishStreamId;
    options.task = task;
    return utils.Qlik.dynamicAppClone.apply(this, arguments);
};



