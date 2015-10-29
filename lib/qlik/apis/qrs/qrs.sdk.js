var url = require('url');
var extend = require('extend');

var core = require('../../../core').Core;
var base = require('../../base').Base;

/**
 * Wrapper for helper functions for Qlik Sense QRS API.
 * {@link ../../../qlik.md|See parent documentation}
 *
 * @namespace qrs
 */
module.exports = function(options) {
    var _options = extend(true, {}, options);

    var restUri = url.parse(_options.restUri);
    restUri.host = null;
    restUri.port = core.ifNotUndef(restUri.port, 4242);
    _options.restUri = url.format(restUri);

    return {
        /**
         * about endpoint
         * {@link qrs.sdk.about.md|See documentation}
         * @namespace about
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var about = qrsApi.about;
         * ```
         */
        about: require('./qrs.sdk.about')(_options).about,
        /**
         * app endpoint
         * {@link qrs.sdk.app.md|See documentation}
         * @namespace app
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var app = qrsApi.app;
         * ```
         */
        app: require('./qrs.sdk.app')(_options).app,
        /**
         * appavailability endpoint
         * {@link qrs.sdk.appavailability.md|See documentation}
         * @namespace appavailability
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var appavailability = qrsApi.appavailability;
         * ```
         */
        appavailability: require('./qrs.sdk.appavailability')(_options).appavailability,
        /**
         * appcomponent endpoint
         * {@link qrs.sdk.appcomponent.md|See documentation}
         * @namespace appcomponent
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var appcomponent = qrsApi.appcomponent;
         * ```
         */
        appcomponent: require('./qrs.sdk.appcomponent')(_options).appcomponent,
        /**
         * appcontent endpoint
         * {@link qrs.sdk.appcontent.md|See documentation}
         * @namespace appcontent
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var appcontent = qrsApi.appcontent;
         * ```
         */
        appcontent: require('./qrs.sdk.appcontent')(_options).appcontent,
        /**
         * appcontentquota endpoint
         * {@link qrs.sdk.appcontentquota.md|See documentation}
         * @namespace appcontentquota
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var appcontentquota = qrsApi.appcontentquota;
         * ```
         */
        appcontentquota: require('./qrs.sdk.appcontentquota')(_options).appcontentquota,
        /**
         * applicationlog endpoint
         * {@link qrs.sdk.applicationlog.md|See documentation}
         * @namespace applicationlog
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var applicationlog = qrsApi.applicationlog;
         * ```
         */
        applicationlog: require('./qrs.sdk.applicationlog')(_options).applicationlog,
        /**
         * appseedinfo endpoint
         * {@link qrs.sdk.appseedinfo.md|See documentation}
         * @namespace appseedinfo
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var appseedinfo = qrsApi.appseedinfo;
         * ```
         */
        appseedinfo: require('./qrs.sdk.appseedinfo')(_options).appseedinfo,
        /**
         * appstatus endpoint
         * {@link qrs.sdk.appstatus.md|See documentation}
         * @namespace appstatus
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var appstatus = qrsApi.appstatus;
         * ```
         */
        appstatus: require('./qrs.sdk.appstatus')(_options).appstatus,
        /**
         * binarydelete endpoint
         * {@link qrs.sdk.binarydelete.md|See documentation}
         * @namespace binarydelete
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var binarydelete = qrsApi.binarydelete;
         * ```
         */
        binarydelete: require('./qrs.sdk.binarydelete')(_options).binarydelete,
        /**
         * binarydownload endpoint
         * {@link qrs.sdk.binarydownload.md|See documentation}
         * @namespace binarydownload
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var binarydownload = qrsApi.binarydownload;
         * ```
         */
        binarydownload: require('./qrs.sdk.binarydownload')(_options).binarydownload,
        /**
         * binarysyncruleevaluation endpoint
         * {@link qrs.sdk.binarysyncruleevaluation.md|See documentation}
         * @namespace binarysyncruleevaluation
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var binarysyncruleevaluation = qrsApi.binarysyncruleevaluation;
         * ```
         */
        binarysyncruleevaluation: require('./qrs.sdk.binarysyncruleevaluation')(_options).binarysyncruleevaluation,
        /**
         * cache endpoint
         * {@link qrs.sdk.cache.md|See documentation}
         * @namespace cache
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var cache = qrsApi.cache;
         * ```
         */
        cache: require('./qrs.sdk.cache')(_options).cache,
        /**
         * certificatedistribution endpoint
         * {@link qrs.sdk.certificatedistribution.md|See documentation}
         * @namespace certificatedistribution
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var certificatedistribution = qrsApi.certificatedistribution;
         * ```
         */
        certificatedistribution: require('./qrs.sdk.certificatedistribution')(_options).certificatedistribution,
        /**
         * compositeevent endpoint
         * {@link qrs.sdk.compositeevent.md|See documentation}
         * @namespace compositeevent
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var compositeevent = qrsApi.compositeevent;
         * ```
         */
        compositeevent: require('./qrs.sdk.compositeevent')(_options).compositeevent,
        /**
         * compositeeventoperational endpoint
         * {@link qrs.sdk.compositeeventoperational.md|See documentation}
         * @namespace compositeeventoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var compositeeventoperational = qrsApi.compositeeventoperational;
         * ```
         */
        compositeeventoperational: require('./qrs.sdk.compositeeventoperational')(_options).compositeeventoperational,
        /**
         * compositeeventruleoperational endpoint
         * {@link qrs.sdk.compositeeventruleoperational.md|See documentation}
         * @namespace compositeeventruleoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var compositeeventruleoperational = qrsApi.compositeeventruleoperational;
         * ```
         */
        compositeeventruleoperational: require('./qrs.sdk.compositeeventruleoperational')(_options).compositeeventruleoperational,
        /**
         * contentlibrary endpoint
         * {@link qrs.sdk.contentlibrary.md|See documentation}
         * @namespace contentlibrary
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var contentlibrary = qrsApi.contentlibrary;
         * ```
         */
        contentlibrary: require('./qrs.sdk.contentlibrary')(_options).contentlibrary,
        /**
         * custompropertydefinition endpoint
         * {@link qrs.sdk.custompropertydefinition.md|See documentation}
         * @namespace custompropertydefinition
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var custompropertydefinition = qrsApi.custompropertydefinition;
         * ```
         */
        custompropertydefinition: require('./qrs.sdk.custompropertydefinition')(_options).custompropertydefinition,
        /**
         * dataconnection endpoint
         * {@link qrs.sdk.dataconnection.md|See documentation}
         * @namespace dataconnection
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var dataconnection = qrsApi.dataconnection;
         * ```
         */
        dataconnection: require('./qrs.sdk.dataconnection')(_options).dataconnection,
        /**
         * download endpoint
         * {@link qrs.sdk.download.md|See documentation}
         * @namespace download
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var download = qrsApi.download;
         * ```
         */
        download: require('./qrs.sdk.download')(_options).download,
        /**
         * engineservice endpoint
         * {@link qrs.sdk.engineservice.md|See documentation}
         * @namespace engineservice
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var engineservice = qrsApi.engineservice;
         * ```
         */
        engineservice: require('./qrs.sdk.engineservice')(_options).engineservice,
        /**
         * event endpoint
         * {@link qrs.sdk.event.md|See documentation}
         * @namespace event
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var event = qrsApi.event;
         * ```
         */
        event: require('./qrs.sdk.event')(_options).event,
        /**
         * eventoperational endpoint
         * {@link qrs.sdk.eventoperational.md|See documentation}
         * @namespace eventoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var eventoperational = qrsApi.eventoperational;
         * ```
         */
        eventoperational: require('./qrs.sdk.eventoperational')(_options).eventoperational,
        /**
         * executionresult endpoint
         * {@link qrs.sdk.executionresult.md|See documentation}
         * @namespace executionresult
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var executionresult = qrsApi.executionresult;
         * ```
         */
        executionresult: require('./qrs.sdk.executionresult')(_options).executionresult,
        /**
         * executionsession endpoint
         * {@link qrs.sdk.executionsession.md|See documentation}
         * @namespace executionsession
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var executionsession = qrsApi.executionsession;
         * ```
         */
        executionsession: require('./qrs.sdk.executionsession')(_options).executionsession,
        /**
         * extension endpoint
         * {@link qrs.sdk.extension.md|See documentation}
         * @namespace extension
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var extension = qrsApi.extension;
         * ```
         */
        extension: require('./qrs.sdk.extension')(_options).extension,
        /**
         * externalchangeinfo endpoint
         * {@link qrs.sdk.externalchangeinfo.md|See documentation}
         * @namespace externalchangeinfo
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var externalchangeinfo = qrsApi.externalchangeinfo;
         * ```
         */
        externalchangeinfo: require('./qrs.sdk.externalchangeinfo')(_options).externalchangeinfo,
        /**
         * externalprogramtask endpoint
         * {@link qrs.sdk.externalprogramtask.md|See documentation}
         * @namespace externalprogramtask
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var externalprogramtask = qrsApi.externalprogramtask;
         * ```
         */
        externalprogramtask: require('./qrs.sdk.externalprogramtask')(_options).externalprogramtask,
        /**
         * externalprogramtaskoperational endpoint
         * {@link qrs.sdk.externalprogramtaskoperational.md|See documentation}
         * @namespace externalprogramtaskoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var externalprogramtaskoperational = qrsApi.externalprogramtaskoperational;
         * ```
         */
        externalprogramtaskoperational: require('./qrs.sdk.externalprogramtaskoperational')(_options).externalprogramtaskoperational,
        /**
         * filereference endpoint
         * {@link qrs.sdk.filereference.md|See documentation}
         * @namespace filereference
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var filereference = qrsApi.filereference;
         * ```
         */
        filereference: require('./qrs.sdk.filereference')(_options).filereference,
        /**
         * license endpoint
         * {@link qrs.sdk.license.md|See documentation}
         * @namespace license
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var license = qrsApi.license;
         * ```
         */
        license: require('./qrs.sdk.license')(_options).license,
        /**
         * licenseaccessusage endpoint
         * {@link qrs.sdk.licenseaccessusage.md|See documentation}
         * @namespace licenseaccessusage
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var licenseaccessusage = qrsApi.licenseaccessusage;
         * ```
         */
        licenseaccessusage: require('./qrs.sdk.licenseaccessusage')(_options).licenseaccessusage,
        /**
         * loadbalancing endpoint
         * {@link qrs.sdk.loadbalancing.md|See documentation}
         * @namespace loadbalancing
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var loadbalancing = qrsApi.loadbalancing;
         * ```
         */
        loadbalancing: require('./qrs.sdk.loadbalancing')(_options).loadbalancing,
        /**
         * log endpoint
         * {@link qrs.sdk.log.md|See documentation}
         * @namespace log
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var log = qrsApi.log;
         * ```
         */
        log: require('./qrs.sdk.log')(_options).log,
        /**
         * managementconsolelog endpoint
         * {@link qrs.sdk.managementconsolelog.md|See documentation}
         * @namespace managementconsolelog
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var managementconsolelog = qrsApi.managementconsolelog;
         * ```
         */
        managementconsolelog: require('./qrs.sdk.managementconsolelog')(_options).managementconsolelog,
        /**
         * mimetype endpoint
         * {@link qrs.sdk.mimetype.md|See documentation}
         * @namespace mimetype
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var mimetype = qrsApi.mimetype;
         * ```
         */
        mimetype: require('./qrs.sdk.mimetype')(_options).mimetype,
        /**
         * notification endpoint
         * {@link qrs.sdk.notification.md|See documentation}
         * @namespace notification
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var notification = qrsApi.notification;
         * ```
         */
        notification: require('./qrs.sdk.notification')(_options).notification,
        /**
         * printingservice endpoint
         * {@link qrs.sdk.printingservice.md|See documentation}
         * @namespace printingservice
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var printingservice = qrsApi.printingservice;
         * ```
         */
        printingservice: require('./qrs.sdk.printingservice')(_options).printingservice,
        /**
         * proxyservice endpoint
         * {@link qrs.sdk.proxyservice.md|See documentation}
         * @namespace proxyservice
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var proxyservice = qrsApi.proxyservice;
         * ```
         */
        proxyservice: require('./qrs.sdk.proxyservice')(_options).proxyservice,
        /**
         * reloadtask endpoint
         * {@link qrs.sdk.reloadtask.md|See documentation}
         * @namespace reloadtask
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var reloadtask = qrsApi.reloadtask;
         * ```
         */
        reloadtask: require('./qrs.sdk.reloadtask')(_options).reloadtask,
        /**
         * reloadtaskoperational endpoint
         * {@link qrs.sdk.reloadtaskoperational.md|See documentation}
         * @namespace reloadtaskoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var reloadtaskoperational = qrsApi.reloadtaskoperational;
         * ```
         */
        reloadtaskoperational: require('./qrs.sdk.reloadtaskoperational')(_options).reloadtaskoperational,
        /**
         * repositoryservice endpoint
         * {@link qrs.sdk.repositoryservice.md|See documentation}
         * @namespace repositoryservice
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var repositoryservice = qrsApi.repositoryservice;
         * ```
         */
        repositoryservice: require('./qrs.sdk.repositoryservice')(_options).repositoryservice,
        /**
         * schedulerservice endpoint
         * {@link qrs.sdk.schedulerservice.md|See documentation}
         * @namespace schedulerservice
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var schedulerservice = qrsApi.schedulerservice;
         * ```
         */
        schedulerservice: require('./qrs.sdk.schedulerservice')(_options).schedulerservice,
        /**
         * schemaevent endpoint
         * {@link qrs.sdk.schemaevent.md|See documentation}
         * @namespace schemaevent
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var schemaevent = qrsApi.schemaevent;
         * ```
         */
        schemaevent: require('./qrs.sdk.schemaevent')(_options).schemaevent,
        /**
         * schemaeventoperational endpoint
         * {@link qrs.sdk.schemaeventoperational.md|See documentation}
         * @namespace schemaeventoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var schemaeventoperational = qrsApi.schemaeventoperational;
         * ```
         */
        schemaeventoperational: require('./qrs.sdk.schemaeventoperational')(_options).schemaeventoperational,
        /**
         * selection endpoint
         * {@link qrs.sdk.selection.md|See documentation}
         * @namespace selection
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var selection = qrsApi.selection;
         * ```
         */
        selection: require('./qrs.sdk.selection')(_options).selection,
        /**
         * servernodeconfiguration endpoint
         * {@link qrs.sdk.servernodeconfiguration.md|See documentation}
         * @namespace servernodeconfiguration
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var servernodeconfiguration = qrsApi.servernodeconfiguration;
         * ```
         */
        servernodeconfiguration: require('./qrs.sdk.servernodeconfiguration')(_options).servernodeconfiguration,
        /**
         * servernoderegistration endpoint
         * {@link qrs.sdk.servernoderegistration.md|See documentation}
         * @namespace servernoderegistration
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var servernoderegistration = qrsApi.servernoderegistration;
         * ```
         */
        servernoderegistration: require('./qrs.sdk.servernoderegistration')(_options).servernoderegistration,
        /**
         * servicestatus endpoint
         * {@link qrs.sdk.servicestatus.md|See documentation}
         * @namespace servicestatus
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var servicestatus = qrsApi.servicestatus;
         * ```
         */
        servicestatus: require('./qrs.sdk.servicestatus')(_options).servicestatus,
        /**
         * staticcontent endpoint
         * {@link qrs.sdk.staticcontent.md|See documentation}
         * @namespace staticcontent
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var staticcontent = qrsApi.staticcontent;
         * ```
         */
        staticcontent: require('./qrs.sdk.staticcontent')(_options).staticcontent,
        /**
         * staticcontentreference endpoint
         * {@link qrs.sdk.staticcontentreference.md|See documentation}
         * @namespace staticcontentreference
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var staticcontentreference = qrsApi.staticcontentreference;
         * ```
         */
        staticcontentreference: require('./qrs.sdk.staticcontentreference')(_options).staticcontentreference,
        /**
         * staticcontentreferencebase endpoint
         * {@link qrs.sdk.staticcontentreferencebase.md|See documentation}
         * @namespace staticcontentreferencebase
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var staticcontentreferencebase = qrsApi.staticcontentreferencebase;
         * ```
         */
        staticcontentreferencebase: require('./qrs.sdk.staticcontentreferencebase')(_options).staticcontentreferencebase,
        /**
         * stream endpoint
         * {@link qrs.sdk.stream.md|See documentation}
         * @namespace stream
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var stream = qrsApi.stream;
         * ```
         */
        stream: require('./qrs.sdk.stream')(_options).stream,
        /**
         * sync endpoint
         * {@link qrs.sdk.sync.md|See documentation}
         * @namespace sync
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var sync = qrsApi.sync;
         * ```
         */
        sync: require('./qrs.sdk.sync')(_options).sync,
        /**
         * syncsession endpoint
         * {@link qrs.sdk.syncsession.md|See documentation}
         * @namespace syncsession
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var syncsession = qrsApi.syncsession;
         * ```
         */
        syncsession: require('./qrs.sdk.syncsession')(_options).syncsession,
        /**
         * systemrule endpoint
         * {@link qrs.sdk.systemrule.md|See documentation}
         * @namespace systemrule
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var systemrule = qrsApi.systemrule;
         * ```
         */
        systemrule: require('./qrs.sdk.systemrule')(_options).systemrule,
        /**
         * tag endpoint
         * {@link qrs.sdk.tag.md|See documentation}
         * @namespace tag
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var tag = qrsApi.tag;
         * ```
         */
        tag: require('./qrs.sdk.tag')(_options).tag,
        /**
         * task endpoint
         * {@link qrs.sdk.task.md|See documentation}
         * @namespace task
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var task = qrsApi.task;
         * ```
         */
        task: require('./qrs.sdk.task')(_options).task,
        /**
         * taskoperational endpoint
         * {@link qrs.sdk.taskoperational.md|See documentation}
         * @namespace taskoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var taskoperational = qrsApi.taskoperational;
         * ```
         */
        taskoperational: require('./qrs.sdk.taskoperational')(_options).taskoperational,
        /**
         * tempcontent endpoint
         * {@link qrs.sdk.tempcontent.md|See documentation}
         * @namespace tempcontent
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var tempcontent = qrsApi.tempcontent;
         * ```
         */
        tempcontent: require('./qrs.sdk.tempcontent')(_options).tempcontent,
        /**
         * user endpoint
         * {@link qrs.sdk.user.md|See documentation}
         * @namespace user
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var user = qrsApi.user;
         * ```
         */
        user: require('./qrs.sdk.user')(_options).user,
        /**
         * userdirectory endpoint
         * {@link qrs.sdk.userdirectory.md|See documentation}
         * @namespace userdirectory
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var userdirectory = qrsApi.userdirectory;
         * ```
         */
        userdirectory: require('./qrs.sdk.userdirectory')(_options).userdirectory,
        /**
         * userdirectoryconnector endpoint
         * {@link qrs.sdk.userdirectoryconnector.md|See documentation}
         * @namespace userdirectoryconnector
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var userdirectoryconnector = qrsApi.userdirectoryconnector;
         * ```
         */
        userdirectoryconnector: require('./qrs.sdk.userdirectoryconnector')(_options).userdirectoryconnector,
        /**
         * usersynctask endpoint
         * {@link qrs.sdk.usersynctask.md|See documentation}
         * @namespace usersynctask
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var usersynctask = qrsApi.usersynctask;
         * ```
         */
        usersynctask: require('./qrs.sdk.usersynctask')(_options).usersynctask,
        /**
         * usersynctaskoperational endpoint
         * {@link qrs.sdk.usersynctaskoperational.md|See documentation}
         * @namespace usersynctaskoperational
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var usersynctaskoperational = qrsApi.usersynctaskoperational;
         * ```
         */
        usersynctaskoperational: require('./qrs.sdk.usersynctaskoperational')(_options).usersynctaskoperational,
        /**
         * virtualproxyconfig endpoint
         * {@link qrs.sdk.virtualproxyconfig.md|See documentation}
         * @namespace virtualproxyconfig
         * @memberOf qrs
         *
         * @example
         * ```javascript
         * var virtualproxyconfig = qrsApi.virtualproxyconfig;
         * ```
         */
        virtualproxyconfig: require('./qrs.sdk.virtualproxyconfig')(_options).virtualproxyconfig

    };
};

