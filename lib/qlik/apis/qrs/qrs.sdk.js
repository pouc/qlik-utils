var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../../core').Core;
var base = require('../../base').Base;

/**
 * Wrapper for helper functions for Qlik Sense QRS API.
 * {@link ../../../qlik.md|See parent documentation}
 * @namespace qrs
 */
module.exports = function(options) {
    return {
        /**
         * about endpoint
         * {@link qrs.sdk.about.md|See documentation}
         * @namespace about
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var about = qrsApi.about;
         * ```
         */
        about: require('./qrs.sdk.about')(options).about,
        /**
         * app endpoint
         * {@link qrs.sdk.app.md|See documentation}
         * @namespace app
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var app = qrsApi.app;
         * ```
         */
        app: require('./qrs.sdk.app')(options).app,
        /**
         * appavailability endpoint
         * {@link qrs.sdk.appavailability.md|See documentation}
         * @namespace appavailability
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var appavailability = qrsApi.appavailability;
         * ```
         */
        appavailability: require('./qrs.sdk.appavailability')(options).appavailability,
        /**
         * appcomponent endpoint
         * {@link qrs.sdk.appcomponent.md|See documentation}
         * @namespace appcomponent
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var appcomponent = qrsApi.appcomponent;
         * ```
         */
        appcomponent: require('./qrs.sdk.appcomponent')(options).appcomponent,
        /**
         * appcontent endpoint
         * {@link qrs.sdk.appcontent.md|See documentation}
         * @namespace appcontent
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var appcontent = qrsApi.appcontent;
         * ```
         */
        appcontent: require('./qrs.sdk.appcontent')(options).appcontent,
        /**
         * appcontentquota endpoint
         * {@link qrs.sdk.appcontentquota.md|See documentation}
         * @namespace appcontentquota
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var appcontentquota = qrsApi.appcontentquota;
         * ```
         */
        appcontentquota: require('./qrs.sdk.appcontentquota')(options).appcontentquota,
        /**
         * applicationlog endpoint
         * {@link qrs.sdk.applicationlog.md|See documentation}
         * @namespace applicationlog
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var applicationlog = qrsApi.applicationlog;
         * ```
         */
        applicationlog: require('./qrs.sdk.applicationlog')(options).applicationlog,
        /**
         * appseedinfo endpoint
         * {@link qrs.sdk.appseedinfo.md|See documentation}
         * @namespace appseedinfo
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var appseedinfo = qrsApi.appseedinfo;
         * ```
         */
        appseedinfo: require('./qrs.sdk.appseedinfo')(options).appseedinfo,
        /**
         * appstatus endpoint
         * {@link qrs.sdk.appstatus.md|See documentation}
         * @namespace appstatus
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var appstatus = qrsApi.appstatus;
         * ```
         */
        appstatus: require('./qrs.sdk.appstatus')(options).appstatus,
        /**
         * binarydelete endpoint
         * {@link qrs.sdk.binarydelete.md|See documentation}
         * @namespace binarydelete
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var binarydelete = qrsApi.binarydelete;
         * ```
         */
        binarydelete: require('./qrs.sdk.binarydelete')(options).binarydelete,
        /**
         * binarydownload endpoint
         * {@link qrs.sdk.binarydownload.md|See documentation}
         * @namespace binarydownload
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var binarydownload = qrsApi.binarydownload;
         * ```
         */
        binarydownload: require('./qrs.sdk.binarydownload')(options).binarydownload,
        /**
         * binarysyncruleevaluation endpoint
         * {@link qrs.sdk.binarysyncruleevaluation.md|See documentation}
         * @namespace binarysyncruleevaluation
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var binarysyncruleevaluation = qrsApi.binarysyncruleevaluation;
         * ```
         */
        binarysyncruleevaluation: require('./qrs.sdk.binarysyncruleevaluation')(options).binarysyncruleevaluation,
        /**
         * cache endpoint
         * {@link qrs.sdk.cache.md|See documentation}
         * @namespace cache
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var cache = qrsApi.cache;
         * ```
         */
        cache: require('./qrs.sdk.cache')(options).cache,
        /**
         * certificatedistribution endpoint
         * {@link qrs.sdk.certificatedistribution.md|See documentation}
         * @namespace certificatedistribution
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var certificatedistribution = qrsApi.certificatedistribution;
         * ```
         */
        certificatedistribution: require('./qrs.sdk.certificatedistribution')(options).certificatedistribution,
        /**
         * compositeevent endpoint
         * {@link qrs.sdk.compositeevent.md|See documentation}
         * @namespace compositeevent
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var compositeevent = qrsApi.compositeevent;
         * ```
         */
        compositeevent: require('./qrs.sdk.compositeevent')(options).compositeevent,
        /**
         * compositeeventoperational endpoint
         * {@link qrs.sdk.compositeeventoperational.md|See documentation}
         * @namespace compositeeventoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var compositeeventoperational = qrsApi.compositeeventoperational;
         * ```
         */
        compositeeventoperational: require('./qrs.sdk.compositeeventoperational')(options).compositeeventoperational,
        /**
         * compositeeventruleoperational endpoint
         * {@link qrs.sdk.compositeeventruleoperational.md|See documentation}
         * @namespace compositeeventruleoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var compositeeventruleoperational = qrsApi.compositeeventruleoperational;
         * ```
         */
        compositeeventruleoperational: require('./qrs.sdk.compositeeventruleoperational')(options).compositeeventruleoperational,
        /**
         * contentlibrary endpoint
         * {@link qrs.sdk.contentlibrary.md|See documentation}
         * @namespace contentlibrary
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var contentlibrary = qrsApi.contentlibrary;
         * ```
         */
        contentlibrary: require('./qrs.sdk.contentlibrary')(options).contentlibrary,
        /**
         * custompropertydefinition endpoint
         * {@link qrs.sdk.custompropertydefinition.md|See documentation}
         * @namespace custompropertydefinition
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var custompropertydefinition = qrsApi.custompropertydefinition;
         * ```
         */
        custompropertydefinition: require('./qrs.sdk.custompropertydefinition')(options).custompropertydefinition,
        /**
         * dataconnection endpoint
         * {@link qrs.sdk.dataconnection.md|See documentation}
         * @namespace dataconnection
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var dataconnection = qrsApi.dataconnection;
         * ```
         */
        dataconnection: require('./qrs.sdk.dataconnection')(options).dataconnection,
        /**
         * download endpoint
         * {@link qrs.sdk.download.md|See documentation}
         * @namespace download
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var download = qrsApi.download;
         * ```
         */
        download: require('./qrs.sdk.download')(options).download,
        /**
         * engineservice endpoint
         * {@link qrs.sdk.engineservice.md|See documentation}
         * @namespace engineservice
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var engineservice = qrsApi.engineservice;
         * ```
         */
        engineservice: require('./qrs.sdk.engineservice')(options).engineservice,
        /**
         * event endpoint
         * {@link qrs.sdk.event.md|See documentation}
         * @namespace event
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var event = qrsApi.event;
         * ```
         */
        event: require('./qrs.sdk.event')(options).event,
        /**
         * eventoperational endpoint
         * {@link qrs.sdk.eventoperational.md|See documentation}
         * @namespace eventoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var eventoperational = qrsApi.eventoperational;
         * ```
         */
        eventoperational: require('./qrs.sdk.eventoperational')(options).eventoperational,
        /**
         * executionresult endpoint
         * {@link qrs.sdk.executionresult.md|See documentation}
         * @namespace executionresult
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var executionresult = qrsApi.executionresult;
         * ```
         */
        executionresult: require('./qrs.sdk.executionresult')(options).executionresult,
        /**
         * executionsession endpoint
         * {@link qrs.sdk.executionsession.md|See documentation}
         * @namespace executionsession
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var executionsession = qrsApi.executionsession;
         * ```
         */
        executionsession: require('./qrs.sdk.executionsession')(options).executionsession,
        /**
         * extension endpoint
         * {@link qrs.sdk.extension.md|See documentation}
         * @namespace extension
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var extension = qrsApi.extension;
         * ```
         */
        extension: require('./qrs.sdk.extension')(options).extension,
        /**
         * externalchangeinfo endpoint
         * {@link qrs.sdk.externalchangeinfo.md|See documentation}
         * @namespace externalchangeinfo
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var externalchangeinfo = qrsApi.externalchangeinfo;
         * ```
         */
        externalchangeinfo: require('./qrs.sdk.externalchangeinfo')(options).externalchangeinfo,
        /**
         * externalprogramtask endpoint
         * {@link qrs.sdk.externalprogramtask.md|See documentation}
         * @namespace externalprogramtask
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var externalprogramtask = qrsApi.externalprogramtask;
         * ```
         */
        externalprogramtask: require('./qrs.sdk.externalprogramtask')(options).externalprogramtask,
        /**
         * externalprogramtaskoperational endpoint
         * {@link qrs.sdk.externalprogramtaskoperational.md|See documentation}
         * @namespace externalprogramtaskoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var externalprogramtaskoperational = qrsApi.externalprogramtaskoperational;
         * ```
         */
        externalprogramtaskoperational: require('./qrs.sdk.externalprogramtaskoperational')(options).externalprogramtaskoperational,
        /**
         * filereference endpoint
         * {@link qrs.sdk.filereference.md|See documentation}
         * @namespace filereference
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var filereference = qrsApi.filereference;
         * ```
         */
        filereference: require('./qrs.sdk.filereference')(options).filereference,
        /**
         * license endpoint
         * {@link qrs.sdk.license.md|See documentation}
         * @namespace license
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var license = qrsApi.license;
         * ```
         */
        license: require('./qrs.sdk.license')(options).license,
        /**
         * licenseaccessusage endpoint
         * {@link qrs.sdk.licenseaccessusage.md|See documentation}
         * @namespace licenseaccessusage
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var licenseaccessusage = qrsApi.licenseaccessusage;
         * ```
         */
        licenseaccessusage: require('./qrs.sdk.licenseaccessusage')(options).licenseaccessusage,
        /**
         * loadbalancing endpoint
         * {@link qrs.sdk.loadbalancing.md|See documentation}
         * @namespace loadbalancing
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var loadbalancing = qrsApi.loadbalancing;
         * ```
         */
        loadbalancing: require('./qrs.sdk.loadbalancing')(options).loadbalancing,
        /**
         * log endpoint
         * {@link qrs.sdk.log.md|See documentation}
         * @namespace log
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var log = qrsApi.log;
         * ```
         */
        log: require('./qrs.sdk.log')(options).log,
        /**
         * managementconsolelog endpoint
         * {@link qrs.sdk.managementconsolelog.md|See documentation}
         * @namespace managementconsolelog
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var managementconsolelog = qrsApi.managementconsolelog;
         * ```
         */
        managementconsolelog: require('./qrs.sdk.managementconsolelog')(options).managementconsolelog,
        /**
         * mimetype endpoint
         * {@link qrs.sdk.mimetype.md|See documentation}
         * @namespace mimetype
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var mimetype = qrsApi.mimetype;
         * ```
         */
        mimetype: require('./qrs.sdk.mimetype')(options).mimetype,
        /**
         * notification endpoint
         * {@link qrs.sdk.notification.md|See documentation}
         * @namespace notification
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var notification = qrsApi.notification;
         * ```
         */
        notification: require('./qrs.sdk.notification')(options).notification,
        /**
         * printingservice endpoint
         * {@link qrs.sdk.printingservice.md|See documentation}
         * @namespace printingservice
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var printingservice = qrsApi.printingservice;
         * ```
         */
        printingservice: require('./qrs.sdk.printingservice')(options).printingservice,
        /**
         * proxyservice endpoint
         * {@link qrs.sdk.proxyservice.md|See documentation}
         * @namespace proxyservice
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var proxyservice = qrsApi.proxyservice;
         * ```
         */
        proxyservice: require('./qrs.sdk.proxyservice')(options).proxyservice,
        /**
         * reloadtask endpoint
         * {@link qrs.sdk.reloadtask.md|See documentation}
         * @namespace reloadtask
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var reloadtask = qrsApi.reloadtask;
         * ```
         */
        reloadtask: require('./qrs.sdk.reloadtask')(options).reloadtask,
        /**
         * reloadtaskoperational endpoint
         * {@link qrs.sdk.reloadtaskoperational.md|See documentation}
         * @namespace reloadtaskoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var reloadtaskoperational = qrsApi.reloadtaskoperational;
         * ```
         */
        reloadtaskoperational: require('./qrs.sdk.reloadtaskoperational')(options).reloadtaskoperational,
        /**
         * repositoryservice endpoint
         * {@link qrs.sdk.repositoryservice.md|See documentation}
         * @namespace repositoryservice
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var repositoryservice = qrsApi.repositoryservice;
         * ```
         */
        repositoryservice: require('./qrs.sdk.repositoryservice')(options).repositoryservice,
        /**
         * schedulerservice endpoint
         * {@link qrs.sdk.schedulerservice.md|See documentation}
         * @namespace schedulerservice
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var schedulerservice = qrsApi.schedulerservice;
         * ```
         */
        schedulerservice: require('./qrs.sdk.schedulerservice')(options).schedulerservice,
        /**
         * schemaevent endpoint
         * {@link qrs.sdk.schemaevent.md|See documentation}
         * @namespace schemaevent
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var schemaevent = qrsApi.schemaevent;
         * ```
         */
        schemaevent: require('./qrs.sdk.schemaevent')(options).schemaevent,
        /**
         * schemaeventoperational endpoint
         * {@link qrs.sdk.schemaeventoperational.md|See documentation}
         * @namespace schemaeventoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var schemaeventoperational = qrsApi.schemaeventoperational;
         * ```
         */
        schemaeventoperational: require('./qrs.sdk.schemaeventoperational')(options).schemaeventoperational,
        /**
         * selection endpoint
         * {@link qrs.sdk.selection.md|See documentation}
         * @namespace selection
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var selection = qrsApi.selection;
         * ```
         */
        selection: require('./qrs.sdk.selection')(options).selection,
        /**
         * servernodeconfiguration endpoint
         * {@link qrs.sdk.servernodeconfiguration.md|See documentation}
         * @namespace servernodeconfiguration
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var servernodeconfiguration = qrsApi.servernodeconfiguration;
         * ```
         */
        servernodeconfiguration: require('./qrs.sdk.servernodeconfiguration')(options).servernodeconfiguration,
        /**
         * servernoderegistration endpoint
         * {@link qrs.sdk.servernoderegistration.md|See documentation}
         * @namespace servernoderegistration
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var servernoderegistration = qrsApi.servernoderegistration;
         * ```
         */
        servernoderegistration: require('./qrs.sdk.servernoderegistration')(options).servernoderegistration,
        /**
         * servicestatus endpoint
         * {@link qrs.sdk.servicestatus.md|See documentation}
         * @namespace servicestatus
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var servicestatus = qrsApi.servicestatus;
         * ```
         */
        servicestatus: require('./qrs.sdk.servicestatus')(options).servicestatus,
        /**
         * staticcontent endpoint
         * {@link qrs.sdk.staticcontent.md|See documentation}
         * @namespace staticcontent
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var staticcontent = qrsApi.staticcontent;
         * ```
         */
        staticcontent: require('./qrs.sdk.staticcontent')(options).staticcontent,
        /**
         * staticcontentreference endpoint
         * {@link qrs.sdk.staticcontentreference.md|See documentation}
         * @namespace staticcontentreference
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var staticcontentreference = qrsApi.staticcontentreference;
         * ```
         */
        staticcontentreference: require('./qrs.sdk.staticcontentreference')(options).staticcontentreference,
        /**
         * staticcontentreferencebase endpoint
         * {@link qrs.sdk.staticcontentreferencebase.md|See documentation}
         * @namespace staticcontentreferencebase
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var staticcontentreferencebase = qrsApi.staticcontentreferencebase;
         * ```
         */
        staticcontentreferencebase: require('./qrs.sdk.staticcontentreferencebase')(options).staticcontentreferencebase,
        /**
         * stream endpoint
         * {@link qrs.sdk.stream.md|See documentation}
         * @namespace stream
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var stream = qrsApi.stream;
         * ```
         */
        stream: require('./qrs.sdk.stream')(options).stream,
        /**
         * sync endpoint
         * {@link qrs.sdk.sync.md|See documentation}
         * @namespace sync
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var sync = qrsApi.sync;
         * ```
         */
        sync: require('./qrs.sdk.sync')(options).sync,
        /**
         * syncsession endpoint
         * {@link qrs.sdk.syncsession.md|See documentation}
         * @namespace syncsession
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var syncsession = qrsApi.syncsession;
         * ```
         */
        syncsession: require('./qrs.sdk.syncsession')(options).syncsession,
        /**
         * systemrule endpoint
         * {@link qrs.sdk.systemrule.md|See documentation}
         * @namespace systemrule
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var systemrule = qrsApi.systemrule;
         * ```
         */
        systemrule: require('./qrs.sdk.systemrule')(options).systemrule,
        /**
         * tag endpoint
         * {@link qrs.sdk.tag.md|See documentation}
         * @namespace tag
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var tag = qrsApi.tag;
         * ```
         */
        tag: require('./qrs.sdk.tag')(options).tag,
        /**
         * task endpoint
         * {@link qrs.sdk.task.md|See documentation}
         * @namespace task
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var task = qrsApi.task;
         * ```
         */
        task: require('./qrs.sdk.task')(options).task,
        /**
         * taskoperational endpoint
         * {@link qrs.sdk.taskoperational.md|See documentation}
         * @namespace taskoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var taskoperational = qrsApi.taskoperational;
         * ```
         */
        taskoperational: require('./qrs.sdk.taskoperational')(options).taskoperational,
        /**
         * tempcontent endpoint
         * {@link qrs.sdk.tempcontent.md|See documentation}
         * @namespace tempcontent
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var tempcontent = qrsApi.tempcontent;
         * ```
         */
        tempcontent: require('./qrs.sdk.tempcontent')(options).tempcontent,
        /**
         * user endpoint
         * {@link qrs.sdk.user.md|See documentation}
         * @namespace user
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var user = qrsApi.user;
         * ```
         */
        user: require('./qrs.sdk.user')(options).user,
        /**
         * userdirectory endpoint
         * {@link qrs.sdk.userdirectory.md|See documentation}
         * @namespace userdirectory
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var userdirectory = qrsApi.userdirectory;
         * ```
         */
        userdirectory: require('./qrs.sdk.userdirectory')(options).userdirectory,
        /**
         * userdirectoryconnector endpoint
         * {@link qrs.sdk.userdirectoryconnector.md|See documentation}
         * @namespace userdirectoryconnector
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var userdirectoryconnector = qrsApi.userdirectoryconnector;
         * ```
         */
        userdirectoryconnector: require('./qrs.sdk.userdirectoryconnector')(options).userdirectoryconnector,
        /**
         * usersynctask endpoint
         * {@link qrs.sdk.usersynctask.md|See documentation}
         * @namespace usersynctask
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var usersynctask = qrsApi.usersynctask;
         * ```
         */
        usersynctask: require('./qrs.sdk.usersynctask')(options).usersynctask,
        /**
         * usersynctaskoperational endpoint
         * {@link qrs.sdk.usersynctaskoperational.md|See documentation}
         * @namespace usersynctaskoperational
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var usersynctaskoperational = qrsApi.usersynctaskoperational;
         * ```
         */
        usersynctaskoperational: require('./qrs.sdk.usersynctaskoperational')(options).usersynctaskoperational,
        /**
         * virtualproxyconfig endpoint
         * {@link qrs.sdk.virtualproxyconfig.md|See documentation}
         * @namespace virtualproxyconfig
         * @memberof qrs
         *
         * @example
         * ```javascript
         * var virtualproxyconfig = qrsApi.virtualproxyconfig;
         * ```
         */
        virtualproxyconfig: require('./qrs.sdk.virtualproxyconfig')(options).virtualproxyconfig

    }
};

