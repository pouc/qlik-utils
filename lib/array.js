function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}

var exports = {};
module.exports = exports;

/**
 * Wrapper for helper functions for arrays.
 * @namespace
 */
exports.Array = {

    /**
     * Returns the intersection of two arrays
     *
     * @param arr1
     * @param arr2
     * @returns {Array} the intersection
     */
    intersect: function(arr1, arr2) {
        return arr1.filter(function(n) {
            return arr2.indexOf(n) != -1;
        });
    },

    /**
     * Compares two arrays to check if they contain the same elements
     *
     * @param arr1
     * @param arr2
     * @returns {boolean}
     */
    compare: function(arr1, arr2) {
        if (arr1.length != arr2.length) return false;
        var inter = exports.Array.intersect(arr1, arr2);
        if (arr1.length != inter.length) return false;
        return true;
    },

    /**
     * Cuts an array in chunks of predefined size
     *
     * @param {Array} array an array to cut in chunks
     * @param {int} n the chunk size
     * @returns {Array.<Array>} An array of chunks
     */
    chunk: function(array, n) {
        if (isInt(n) && parseInt(n) > 0) {
            return array.reduce(function(p, cur, i) {
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
        while (i < array.length) {
            if (callback(array[i], i)) {
                array.splice(i, 1);
            } else {
                ++i;
            }
        }
    }

};
