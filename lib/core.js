var uuid = require('node-uuid');
var Q = require('q');
var fs = require('fs');
var extend = require('extend');
var Deep = require('deep-diff');
var Zip = require('adm-zip');
var temp = require("temp").track();

var array = require('./array').Array;

var mkdirp = Q.denodeify(require('mkdirp'));
var read = Q.denodeify(fs.readFile);
var readdir = Q.denodeify(fs.readdir);
var write = Q.denodeify(fs.writeFile);
var unlink = Q.denodeify(fs.unlink);
var mkdir = Q.denodeify(fs.mkdir);

var exports = {};
module.exports = exports;

/**
 * Wrapper for helper functions.
 * @namespace
 */
exports.Core = {

    /**
     * Two parameters mode
     *  If a is undefined, return b else a
     * Three parameters mode
     *  If a is undefined, return c else b
     *
     * @example
     * var myHost = utils.Core.ifNotUndef(options.host, options.hostname);
     *
     * @example
     * var myHost = utils.Core.ifNotUndef(options.host, options.hostname, 'localhost');
     *
     * @param {*} a
     * @param {*} b
     * @param {*=} c
     * @returns {*}
     */
    ifNotUndef: function(a, b, c) {

        return (arguments.length <= 2) ?
            ((typeof a != 'undefined' && a != null) ? a : b) :  // 2 arguments mode: return b if a is undefined else return a
            ((typeof a != 'undefined' && a != null) ? b : c);   // 3 arguments mode: return c if a is undefined else return b

    },

    /**
     * Loops until func finishes successfully
     *
     * @example
     * utils.Core.loop(
     *      utils.Qlik.addToWhiteList,
     *      [
     *          '10.76.224.72',
     *          {
     *              restUri: 'https://10.76.224.72:4242',
     *              pfx: certif,
     *              passPhrase: '',
     *              UserId: 'qlikservice',
     *              UserDirectory: '2008R2-0'
     *          }
     *      ],
     *      30,
     *      2000,
     *      task
     * );
     *
     * @param {Function} func the function to start (must return a promise)
     * @param {*} param the parameters to pass to the function (as an array)
     * @param {int} retry the number of times to retry
     * @param {int} retryTimeout the delay to wait before restarting the function after a failure
     * @param {Task} task the task object to update when required
     */
    loop: function(func, param, retry, retryTimeout, task) {

        func
            .apply(this, param)
            .then(task.done)
            .fail(function (ret) {

                if(retry == 1) {

                    task.failed(ret);
                    return Q.reject(ret);

                } else {

                    return exports.Core.setTimeout2Promise(retryTimeout).then(function () {

                        task.running(ret);
                        exports.Core.loop(func, param, retry - 1, retryTimeout, task);

                    });
                }

            });

    },

    /**
     * Equivalent to setTimeout but returns a promise instead
     *
     * @example
     * utils.Core.setTimeout2Promise(1000).then(function() {
     *      console.log('hi');
     * });
     *
     * @param {int} timeout the timeout in ms
     * @returns {Promise} a promise that resolves when the timeout is reached
     */
    setTimeout2Promise: function(timeout) {

        var timeoutDef = Q.defer();

        setTimeout(function() {
            timeoutDef.resolve();
        }, timeout);

        return timeoutDef.promise;

    },

    /**
     * Creates a new Task.
     * @class
     * @classdesc This class enables you to handle tasks asynchronously.
     */
    Task: function() {

        var _this = this;
        var listenDef, listen;
        var bound = [];

        // Private methods

        var notifyBound = function() {
            listen.then(function(task) {
                var retVal = [];
                bound.forEach(function(item) {
                    retVal.push(item.func(_this));
                });
                return Q.all(retVal);
            });
        };

        var changeStatus = function(status, val, detail) {

            _this.status = status;
            _this.modifiedDate = new Date();
            _this.val = val;
            _this.detail = detail;

            var retVal = [];
            bound.forEach(function(item) {
                retVal.push(item.func(_this));
            });

            array.removeIf(bound, function(item) { return item.mode == 'once'; });

            return Q.all(retVal);

        };

        // constructor

        _this.guid = uuid.v1();
        changeStatus('waiting');

        // Public methods

        /**
         * Binds a callback function that will be ran once when the Task status is updated the first time
         *
         * @param func the function to run
         */
        this.once = function(func) {
            if(bound.filter(function(item) { return item.func == func }).length == 0) {
                bound.push({ func: func, mode: 'once' });
            }

            if(_this.status == 'done' || _this.status == 'failed') func(_this);
        };

        /**
         * Binds a callback function that will be ran every time the Task status is updated
         *
         * @param func
         */
        this.bind = function(func) {
            if(bound.filter(function(item) { return item.func == func }).length == 0) {
                bound.push({ func: func, mode: 'bind' });
            }

            if(_this.status == 'done' || _this.status == 'failed') func(_this);
        };

        /**
         * Unbinds a previously bound callback function
         *
         * @param func
         */
        this.unbind = function(func) {
            array.removeIf(bound, function(item) { return item.func == func; });
        };

        /**
         * Starts the task.
         *
         * @returns {Promise} A promise that resolves when the Task is started
         */
        this.start = function() {
            _this.startedDate = new Date();
            return this.running();
        };

        /**
         * Changes the Task to the 'running' status.
         * This method can also be called to update the 'running' status with a new value
         *
         * @param {*} val the progress value
         * @param {*=} detail additional details to push into the progress value
         * @returns {Promise} A promise that resolves when the Task status is updated
         */
        this.running = function(val, detail) {
            return changeStatus('running', val, detail);
        };

        /**
         * Ends the Task with the 'done' status.
         *
         * @param {*} val the progress value
         * @param {*=} detail additional details to push into the progress value
         * @returns {Promise} A promise that resolves when the Task status is updated
         */
        this.done = function(val, detail) {
            return changeStatus('done', val, detail);
        };

        /**
         * Ends the Task with the 'failed' status.
         *
         * @param {*} val the progress value
         * @param {*=} detail additional details to push into the progress value
         * @returns {Promise} A promise that resolves when the Task status is updated
         */
        this.failed = function(val, detail) {
            return changeStatus('failed', val, detail);
        };

    },

    /**
     * Creates a new Json storage.
     *
     * @class
     * @classdesc This class enables you to load and store JSON config files from/to the disk.
     *
     * @param {string} name the name of the config
     * @param {string} [dir=./storage] the directory in which to store the config
     */
    Json: function(name, dir) {
        var that = this;

        this.name = name;
        this.dir = exports.Core.ifNotUndef(dir, __dirname + '/storage/');

        console.log(this.dir)

        this.config = {};
        this.oldConfig = {};

        /**
         * Init the storage
         *
         * @returns {Promise} A promise that resolves when the storage is initialized
         */
        this.init = function() {

            return mkdirp(that.dir + that.name)
                .then(function() {
                    return that.load();
                }, function(err) {
                    return that.load();
                }).then(function() {
                    return that;
                })

        };

        /**
         * Loads the config from the disk
         *
         * @returns {Promise} A promise that resolves when the config is loaded
         */
        this.load = function() {

            return read(that.dir + that.name + '/config.json', 'utf8')
                .then(function (str) {

                    that.config = JSON.parse(str);
                    return that.loadOld();

                }, function() {

                    var ret = [];

                    ret.push(that.store(true));
                    ret.push(that.storeOld());

                    return Q.all(ret);

                });

        };

        /**
         * Loads the previous config from the disk
         *
         * @returns {Promise} A promise that resolves when the previous config is loaded
         */
        this.loadOld = function() {

            return read(that.dir + that.name + '/config.old.json', 'utf8')
                .then(function (str) {
                    that.oldConfig = extend(true, {}, that.config);
                }, function() {
                    return that.storeOld()
                });

        };

        /**
         * Stores the config to the disk
         *
         * @returns {Promise} A promise that resolves when the config is stored
         */
        this.store = function(force) {

            var differences = Deep.diff(that.config, that.oldConfig);

            var ret = [];
            if(differences) {
                var timestamp = (new Date()).toISOString().replace(/[^0-9]/g, "");
                ret.push(write(that.dir + that.name + '/config.diff.' + timestamp + '.json', JSON.stringify(differences)))
                that.oldConfig = extend(true, {}, that.config);
            }

            if(force || differences) {
                ret.push(write(that.dir + that.name + '/config.json', JSON.stringify(that.config)))
            }

            return Q.all(ret);

        };

        /**
         * Stores the old config to the disk
         *
         * @returns {Promise} A promise that resolves when the config is stored
         */
        this.storeOld = function() {
            return write(that.dir + that.name + '/config.old.json', JSON.stringify(that.oldConfig));
        };

        /**
         * Gets the config item keys
         *
         * @returns {Array} an array with the config item keys
         */
        this.getRootValues = function() {
            return Object.keys(that.config)
        };

        /**
         * Get a config item
         *
         * @param {string} root a config item key
         * @returns {Promise} A promise that resolves to the config item value
         */
        this.get = function(root) {
            if(typeof that.config[root] != 'undefined') {
                var config = extend(true, {}, that.config[root]);
                return Q().resolve(config);
            } else {
                return Q().reject(util.format('%s does not exist!', root))
            }
        };

        /**
         * Set a config item
         *
         * @param {string} root a config item key
         * @param {string} conf a config item value
         * @param {string} user the user making the change
         * @returns {Promise} A promise that resolves when the config item is set
         */
        this.set = function(root, conf, user) {

            var config = extend(true, {}, conf);
            var differences = Deep.diff(that.config[root], config);

            var ret = [];
            if(differences) {
                that.config[root] = config;

                var newDate = new Date();

                that.config[root].__modif_date = newDate;
                that.config[root].__modif_user = user;

                conf.__modif_date = newDate;
                conf.__modif_user = user;

                ret.push(that.store());
            }

            return Q.all(ret);
        };

        /**
         * Remove a config item
         *
         * @param {string} root a config item key
         * @param {string} user the user making the change
         * @returns {Promise} A promise that resolves when the config item is removed
         */
        this.remove = function(root, user) {

            var ret = [];
            if(typeof that.config[root] != "undefined") {
                delete that.config[root];

                ret.push(that.store());
            }

            return Q.all(ret);
        };

        /**
         * Cleans the config files
         *
         * @returns {Promise} A promise that resolves when the config files are cleaned
         */
        this.clean = function() {
            return readdir(that.dir + that.name)
                .then(function(files) {

                    var maxTimeStamp = -1;
                    var diffFilesToZip = [];

                    files.forEach(function(item) {
                        var match = /config\.diff\.([0-9]+)\.json$/.exec(item);
                        if(match) {
                            diffFilesToZip.push(item);
                            var num = parseInt(match[1]);
                            if(num > maxTimeStamp) maxTimeStamp = num;
                        }
                    });

                    var toDo = [];
                    if(diffFilesToZip.length > 10) {
                        var zip = new Zip();

                        zip.addLocalFile(that.dir + that.name + '/config.old.json');
                        zip.addLocalFile(that.dir + that.name + '/config.json');

                        toDo.push(unlink(that.dir + that.name + '/config.old.json')
                                .then(function() {
                                    return that.storeOld();
                                })
                        );

                        var toDel = [];
                        diffFilesToZip.forEach(function(item) {
                            zip.addLocalFile(that.dir + that.name + '/' + item);
                            toDel.push(unlink(that.dir + that.name + '/' + item));
                        });


                        zip.writeZip(that.dir + that.name + '/config.' + maxTimeStamp + '.zip');

                        toDo = toDo.concat(toDel)
                    }

                    return Q.all(toDo);
                })
        }

    },

    /**
     * Creates a new File storage.
     *
     * @class
     * @classdesc This class enables you to load and store files from/to the disk.
     *
     * @param {string} name the name of the config
     * @param {string} [dir=./storage] the directory in which to store the files
     */
    File: function(name, dir) {
        var that = this;

        this.name = name;
        this.dir = exports.Core.ifNotUndef(dir, __dirname + '/storage/');

        /**
         * Init the storage
         *
         * @returns {Promise} A promise that resolves when the storage is initialized
         */
        this.init = function() {

            var retDef = Q.defer();

            mkdir(__dirname + '/storage/' + that.name)
                .then(function() {
                    retDef.resolve(name);
                }, function() {
                    retDef.reject(name);
                });

            return retDef.promise;

        };

        /**
         * Stores the file to the disk
         *
         * @returns {Promise} A promise that resolves when the file is stored
         */
        this.store = function(path, name) {
            return exports.Core.copyFile(path, that.dir + that.name + '/' + name);
        }
    },

    /**
     * Creates a new Image storage.
     *
     * @class
     * @classdesc This class enables you to load and store images from/to the disk.
     *
     * @param {string} name the name of the config
     * @param {string} [dir=./storage] the directory in which to store the files
     */
    Image: function(name, dir) {
        var that = this;

        this.name = name;
        this.file = new exports.Core.File(name, dir);

        /**
         * Init the storage
         *
         * @returns {Promise} A promise that resolves when the storage is initialized
         */
        this.init = function() {
            return that.file.init();
        };

        /**
         * Stores the file to the disk
         *
         * @returns {Promise} A promise that resolves when the file is stored
         */
        this.store = function(data, name) {

            var retDef = Q.defer();

            var rdata = data.replace(/^data:image\/\w+;base64,/, "");
            var buf = new Buffer(rdata, 'base64');

            temp.open('qlikutils', function(err, info) {
                if (!err) {

                    fs.write(info.fd, buf);

                    fs.close(info.fd, function(err) {
                        if(!err) {
                            that.file.store(info.path, name).then(function() {
                                retDef.resolve(name);
                            }, function(err) {
                                retDef.reject(err);
                            })
                        } else
                            retDef.reject(err);
                    });

                } else
                    retDef.reject(err);
            });

            return retDef.promise;
        }
    },

    /**
     * Copies a file
     *
     * @param {string} source the source file full path
     * @param {string} target the target file full path
     * @returns {Promise} a promise that resolves when the file is copied
     */
    copyFile: function(source, target) {
        var cbCalled = false;

        var rd = fs.createReadStream(source);

        rd.on("error", function(err) {
            done(err);
        });

        var wr = fs.createWriteStream(target);
        wr.on("error", function(err) {
            done(err);
        });

        wr.on("close", function(ex) {
            done();
        });

        rd.pipe(wr);

        var copyDef = Q.defer();

        function done(err) {
            if (!cbCalled) {
                if(err) copyDef.reject(err);
                else copyDef.resolve();
                cbCalled = true;
            }
        }

        return copyDef.promise;
    }

};

/**
 * Similar to the promise.all function but with Tasks
 *
 * @param {Object.<string, Task>} tasks An object listing Tasks with their name
 * @returns {Promise} A promise that resolves when all the Tasks are resolved
 */
exports.Core.Task.all = function(tasks) {

    var tasksListeners = [], keys = [];
    for (var key in tasks) {
        if (tasks.hasOwnProperty(key)) {
            keys.push(key);
            tasksListeners.push(tasks[key].listen);
        }
    }

    return Q.all(tasksListeners).then(function(ret) {
        var retVal = {};
        ret.forEach(function(item, index) {
            retVal[keys[index]] = item;
        });
        return retVal;
    });
};