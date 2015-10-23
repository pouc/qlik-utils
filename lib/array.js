var exports = {};
module.exports = exports;

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

/**
 * Wrapper for helper functions for arrays.
 * @namespace
 */
exports.Array = {

    /**
     * Cuts an array in chunks of predefined size
     *
     * @param {Array} array an array to cut in chunks
     * @param {int} n the chunk size
     * @returns {Array.<Array>} An array of chunks
     */
    chunk: function(array, n) {
        if(isInt(n) && parseInt(n) > 0) {
            return array.reduce(function (p, cur, i) {
                (p[i / parseInt(n) | 0] = p[i / parseInt(n) | 0] || []).push(cur);
                return p;
            }, []);
        }
        return undefined;
    },

    /**
     * Remove object from an array on condition
     *
     * @param {Array} array an array to remove stuff from
     * @param {Function} callback the function containing the condition
     */
    removeIf: function(array, callback) {
        var i = 0;
        while (i < array.length) if (callback(array[i], i)) {
            array.splice(i, 1);
        }
        else {
            ++i;
        }
    }

};