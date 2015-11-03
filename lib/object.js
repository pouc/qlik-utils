
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
        if (typeof obj === 'undefined' || typeof obj !== 'object' || typeof f !== 'function') {
            return;
        }
        var result = {};
        Object.keys(obj).forEach(function(key) {
            result[key] = f(obj[key], key, obj);
        });
        return result;
    },

    /**
     * Gets an object property in case insensitive mode
     *
     * @example
     * ```javascript
     * var obj = {Name: 'toto'};
     * console.log(utils.Object.getPropCI(obj, 'name')) // > toto
     * ```
     *
     * @param {object} obj the object to get the property from
     * @param {string} prop the property to get in a case insensitive mode
     * @returns {*} the property value
     */
    getPropCI: function(obj, prop) {
        if (typeof obj == 'object' && Object.keys(obj).length > 0) {
            for (key in obj) {
                if (obj.hasOwnProperty(key) && key.toLowerCase() == prop.toLowerCase()) {
                    return obj[key];
                }
            }
        }
    },

    /**
     * Gets an object's keys into an array
     *
     * @param {Object} obj the object to get keys from
     * @returns {Array} an array containing obj's keys
     */
    keys: function(obj) {
        if (typeof obj === 'undefined' || typeof obj !== 'object') {
            return;
        }
        return Object.keys(obj);
    },

    /**
     * Gets an object's values into an array
     *
     * @param {Object} obj the object to get values from
     * @returns {Array} an array containing obj's values
     */
    values: function(obj) {
        if (typeof obj === 'undefined' || typeof obj !== 'object') {
            return;
        }
        return Object.keys(obj).map(function(key) { return obj[key]; });
    }

};

