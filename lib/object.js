var exports = {};
module.exports = exports;

/**
 * Wrapper for helper functions for objects.
 * @namespace
 */
exports.Object = {

    /**
     * Map function for objects
     *
     * @param {Object} obj an object
     * @param {Function} f a function to apply to each property of obj
     * @returns {Object} an object with the same keys as obj but with values that are f(obj[key])
     */
    map: function(obj, f) {
        var result = {};
        Object.keys(obj).forEach(function(key) {
            result[key] = f(obj[key], key, obj);
        });
        return result;
    },

    /**
     * Gets an object's keys into an array
     *
     * @param {Object} obj the object to get keys from
     * @returns {Array} an array containing obj's keys
     */
    keys : function(obj) {
        return Object.keys(obj);
    },

    /**
     * Gets an object's values into an array
     *
     * @param {Object} obj the object to get values from
     * @returns {Array} an array containing obj's values
     */
    values : function(obj) {
        return Object.keys(obj).map(function (key) {return obj[key]});
    }


};