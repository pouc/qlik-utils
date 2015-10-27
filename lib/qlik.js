var extend = require('extend');

var base = require('./qlik/base').Base;
var advanced = require('./qlik/advanced').Advanced;
var qrs = require('./qlik/apis/qrs');

var exports = {};
module.exports = exports;

/**
 * Wrapper for helper functions for Qlik Sense APIs.
 * @namespace
 */
exports.Qlik = extend(true, {}, base, advanced, qrs);