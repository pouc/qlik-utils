var url = require('url');
var XRegExp = require('xregexp');

var core = require('../../core').Core;
var base = require('../base').Base;

/**
 * Wrapper for helper functions for Qlik Sense APIs.
 * @namespace qrs
 */
module.exports = function(options) {
    return {
        /**
         * about endpoint
         * {@link qrs.sdk.about.md|See documentation}
         * @namespace about
         * @memberof qrs
         */
        about: require('./qrs.sdk.about')(options),
        /**
         * app endpoint
         * {@link qrs.sdk.app.md|See documentation}
         * @namespace app
         * @memberof qrs
         */
        app: require('./qrs.sdk.app')(options),
        /**
         * appavailability endpoint
         * {@link qrs.sdk.appavailability.md|See documentation}
         * @namespace appavailability
         * @memberof qrs
         */
        appavailability: require('./qrs.sdk.appavailability')(options),
        /**
         * appcomponent endpoint
         * {@link qrs.sdk.appcomponent.md|See documentation}
         * @namespace appcomponent
         * @memberof qrs
         */
        appcomponent: require('./qrs.sdk.appcomponent')(options),
        /**
         * appcontent endpoint
         * {@link qrs.sdk.appcontent.md|See documentation}
         * @namespace appcontent
         * @memberof qrs
         */
        appcontent: require('./qrs.sdk.appcontent')(options),
        /**
         * appcontentquota endpoint
         * {@link qrs.sdk.appcontentquota.md|See documentation}
         * @namespace appcontentquota
         * @memberof qrs
         */
        appcontentquota: require('./qrs.sdk.appcontentquota')(options),
        /**
         * applicationlog endpoint
         * {@link qrs.sdk.applicationlog.md|See documentation}
         * @namespace applicationlog
         * @memberof qrs
         */
        applicationlog: require('./qrs.sdk.applicationlog')(options),
        /**
         * appseedinfo endpoint
         * {@link qrs.sdk.appseedinfo.md|See documentation}
         * @namespace appseedinfo
         * @memberof qrs
         */
        appseedinfo: require('./qrs.sdk.appseedinfo')(options),
        /**
         * appstatus endpoint
         * {@link qrs.sdk.appstatus.md|See documentation}
         * @namespace appstatus
         * @memberof qrs
         */
        appstatus: require('./qrs.sdk.appstatus')(options),
        /**
         * binarydelete endpoint
         * {@link qrs.sdk.binarydelete.md|See documentation}
         * @namespace binarydelete
         * @memberof qrs
         */
        binarydelete: require('./qrs.sdk.binarydelete')(options),
        /**
         * binarydownload endpoint
         * {@link qrs.sdk.binarydownload.md|See documentation}
         * @namespace binarydownload
         * @memberof qrs
         */
        binarydownload: require('./qrs.sdk.binarydownload')(options),
        /**
         * binarysyncruleevaluation endpoint
         * {@link qrs.sdk.binarysyncruleevaluation.md|See documentation}
         * @namespace binarysyncruleevaluation
         * @memberof qrs
         */
        binarysyncruleevaluation: require('./qrs.sdk.binarysyncruleevaluation')(options),
        /**
         * cache endpoint
         * {@link qrs.sdk.cache.md|See documentation}
         * @namespace cache
         * @memberof qrs
         */
        cache: require('./qrs.sdk.cache')(options),
        /**
         * certificatedistribution endpoint
         * {@link qrs.sdk.certificatedistribution.md|See documentation}
         * @namespace certificatedistribution
         * @memberof qrs
         */
        certificatedistribution: require('./qrs.sdk.certificatedistribution')(options),
        /**
         * compositeevent endpoint
         * {@link qrs.sdk.compositeevent.md|See documentation}
         * @namespace compositeevent
         * @memberof qrs
         */
        compositeevent: require('./qrs.sdk.compositeevent')(options),
        /**
         * compositeeventoperational endpoint
         * {@link qrs.sdk.compositeeventoperational.md|See documentation}
         * @namespace compositeeventoperational
         * @memberof qrs
         */
        compositeeventoperational: require('./qrs.sdk.compositeeventoperational')(options),
        /**
         * compositeeventruleoperational endpoint
         * {@link qrs.sdk.compositeeventruleoperational.md|See documentation}
         * @namespace compositeeventruleoperational
         * @memberof qrs
         */
        compositeeventruleoperational: require('./qrs.sdk.compositeeventruleoperational')(options),
        /**
         * contentlibrary endpoint
         * {@link qrs.sdk.contentlibrary.md|See documentation}
         * @namespace contentlibrary
         * @memberof qrs
         */
        contentlibrary: require('./qrs.sdk.contentlibrary')(options),
        /**
         * custompropertydefinition endpoint
         * {@link qrs.sdk.custompropertydefinition.md|See documentation}
         * @namespace custompropertydefinition
         * @memberof qrs
         */
        custompropertydefinition: require('./qrs.sdk.custompropertydefinition')(options),
        /**
         * dataconnection endpoint
         * {@link qrs.sdk.dataconnection.md|See documentation}
         * @namespace dataconnection
         * @memberof qrs
         */
        dataconnection: require('./qrs.sdk.dataconnection')(options),
        /**
         * download endpoint
         * {@link qrs.sdk.download.md|See documentation}
         * @namespace download
         * @memberof qrs
         */
        download: require('./qrs.sdk.download')(options),
        /**
         * engineservice endpoint
         * {@link qrs.sdk.engineservice.md|See documentation}
         * @namespace engineservice
         * @memberof qrs
         */
        engineservice: require('./qrs.sdk.engineservice')(options),
        /**
         * event endpoint
         * {@link qrs.sdk.event.md|See documentation}
         * @namespace event
         * @memberof qrs
         */
        event: require('./qrs.sdk.event')(options),
        /**
         * eventoperational endpoint
         * {@link qrs.sdk.eventoperational.md|See documentation}
         * @namespace eventoperational
         * @memberof qrs
         */
        eventoperational: require('./qrs.sdk.eventoperational')(options),
        /**
         * executionresult endpoint
         * {@link qrs.sdk.executionresult.md|See documentation}
         * @namespace executionresult
         * @memberof qrs
         */
        executionresult: require('./qrs.sdk.executionresult')(options),
        /**
         * executionsession endpoint
         * {@link qrs.sdk.executionsession.md|See documentation}
         * @namespace executionsession
         * @memberof qrs
         */
        executionsession: require('./qrs.sdk.executionsession')(options),
        /**
         * extension endpoint
         * {@link qrs.sdk.extension.md|See documentation}
         * @namespace extension
         * @memberof qrs
         */
        extension: require('./qrs.sdk.extension')(options),
        /**
         * externalchangeinfo endpoint
         * {@link qrs.sdk.externalchangeinfo.md|See documentation}
         * @namespace externalchangeinfo
         * @memberof qrs
         */
        externalchangeinfo: require('./qrs.sdk.externalchangeinfo')(options),
        /**
         * externalprogramtask endpoint
         * {@link qrs.sdk.externalprogramtask.md|See documentation}
         * @namespace externalprogramtask
         * @memberof qrs
         */
        externalprogramtask: require('./qrs.sdk.externalprogramtask')(options),
        /**
         * externalprogramtaskoperational endpoint
         * {@link qrs.sdk.externalprogramtaskoperational.md|See documentation}
         * @namespace externalprogramtaskoperational
         * @memberof qrs
         */
        externalprogramtaskoperational: require('./qrs.sdk.externalprogramtaskoperational')(options),
        /**
         * filereference endpoint
         * {@link qrs.sdk.filereference.md|See documentation}
         * @namespace filereference
         * @memberof qrs
         */
        filereference: require('./qrs.sdk.filereference')(options),
        /**
         * license endpoint
         * {@link qrs.sdk.license.md|See documentation}
         * @namespace license
         * @memberof qrs
         */
        license: require('./qrs.sdk.license')(options),
        /**
         * licenseaccessusage endpoint
         * {@link qrs.sdk.licenseaccessusage.md|See documentation}
         * @namespace licenseaccessusage
         * @memberof qrs
         */
        licenseaccessusage: require('./qrs.sdk.licenseaccessusage')(options),
        /**
         * loadbalancing endpoint
         * {@link qrs.sdk.loadbalancing.md|See documentation}
         * @namespace loadbalancing
         * @memberof qrs
         */
        loadbalancing: require('./qrs.sdk.loadbalancing')(options),
        /**
         * log endpoint
         * {@link qrs.sdk.log.md|See documentation}
         * @namespace log
         * @memberof qrs
         */
        log: require('./qrs.sdk.log')(options),
        /**
         * managementconsolelog endpoint
         * {@link qrs.sdk.managementconsolelog.md|See documentation}
         * @namespace managementconsolelog
         * @memberof qrs
         */
        managementconsolelog: require('./qrs.sdk.managementconsolelog')(options),
        /**
         * mimetype endpoint
         * {@link qrs.sdk.mimetype.md|See documentation}
         * @namespace mimetype
         * @memberof qrs
         */
        mimetype: require('./qrs.sdk.mimetype')(options),
        /**
         * notification endpoint
         * {@link qrs.sdk.notification.md|See documentation}
         * @namespace notification
         * @memberof qrs
         */
        notification: require('./qrs.sdk.notification')(options),
        /**
         * printingservice endpoint
         * {@link qrs.sdk.printingservice.md|See documentation}
         * @namespace printingservice
         * @memberof qrs
         */
        printingservice: require('./qrs.sdk.printingservice')(options),
        /**
         * proxyservice endpoint
         * {@link qrs.sdk.proxyservice.md|See documentation}
         * @namespace proxyservice
         * @memberof qrs
         */
        proxyservice: require('./qrs.sdk.proxyservice')(options),
        /**
         * reloadtask endpoint
         * {@link qrs.sdk.reloadtask.md|See documentation}
         * @namespace reloadtask
         * @memberof qrs
         */
        reloadtask: require('./qrs.sdk.reloadtask')(options),
        /**
         * reloadtaskoperational endpoint
         * {@link qrs.sdk.reloadtaskoperational.md|See documentation}
         * @namespace reloadtaskoperational
         * @memberof qrs
         */
        reloadtaskoperational: require('./qrs.sdk.reloadtaskoperational')(options),
        /**
         * repositoryservice endpoint
         * {@link qrs.sdk.repositoryservice.md|See documentation}
         * @namespace repositoryservice
         * @memberof qrs
         */
        repositoryservice: require('./qrs.sdk.repositoryservice')(options),
        /**
         * schedulerservice endpoint
         * {@link qrs.sdk.schedulerservice.md|See documentation}
         * @namespace schedulerservice
         * @memberof qrs
         */
        schedulerservice: require('./qrs.sdk.schedulerservice')(options),
        /**
         * schemaevent endpoint
         * {@link qrs.sdk.schemaevent.md|See documentation}
         * @namespace schemaevent
         * @memberof qrs
         */
        schemaevent: require('./qrs.sdk.schemaevent')(options),
        /**
         * schemaeventoperational endpoint
         * {@link qrs.sdk.schemaeventoperational.md|See documentation}
         * @namespace schemaeventoperational
         * @memberof qrs
         */
        schemaeventoperational: require('./qrs.sdk.schemaeventoperational')(options),
        /**
         * selection endpoint
         * {@link qrs.sdk.selection.md|See documentation}
         * @namespace selection
         * @memberof qrs
         */
        selection: require('./qrs.sdk.selection')(options),
        /**
         * servernodeconfiguration endpoint
         * {@link qrs.sdk.servernodeconfiguration.md|See documentation}
         * @namespace servernodeconfiguration
         * @memberof qrs
         */
        servernodeconfiguration: require('./qrs.sdk.servernodeconfiguration')(options),
        /**
         * servernoderegistration endpoint
         * {@link qrs.sdk.servernoderegistration.md|See documentation}
         * @namespace servernoderegistration
         * @memberof qrs
         */
        servernoderegistration: require('./qrs.sdk.servernoderegistration')(options),
        /**
         * servicestatus endpoint
         * {@link qrs.sdk.servicestatus.md|See documentation}
         * @namespace servicestatus
         * @memberof qrs
         */
        servicestatus: require('./qrs.sdk.servicestatus')(options),
        /**
         * staticcontent endpoint
         * {@link qrs.sdk.staticcontent.md|See documentation}
         * @namespace staticcontent
         * @memberof qrs
         */
        staticcontent: require('./qrs.sdk.staticcontent')(options),
        /**
         * staticcontentreference endpoint
         * {@link qrs.sdk.staticcontentreference.md|See documentation}
         * @namespace staticcontentreference
         * @memberof qrs
         */
        staticcontentreference: require('./qrs.sdk.staticcontentreference')(options),
        /**
         * staticcontentreferencebase endpoint
         * {@link qrs.sdk.staticcontentreferencebase.md|See documentation}
         * @namespace staticcontentreferencebase
         * @memberof qrs
         */
        staticcontentreferencebase: require('./qrs.sdk.staticcontentreferencebase')(options),
        /**
         * stream endpoint
         * {@link qrs.sdk.stream.md|See documentation}
         * @namespace stream
         * @memberof qrs
         */
        stream: require('./qrs.sdk.stream')(options),
        /**
         * sync endpoint
         * {@link qrs.sdk.sync.md|See documentation}
         * @namespace sync
         * @memberof qrs
         */
        sync: require('./qrs.sdk.sync')(options),
        /**
         * syncsession endpoint
         * {@link qrs.sdk.syncsession.md|See documentation}
         * @namespace syncsession
         * @memberof qrs
         */
        syncsession: require('./qrs.sdk.syncsession')(options),
        /**
         * systemrule endpoint
         * {@link qrs.sdk.systemrule.md|See documentation}
         * @namespace systemrule
         * @memberof qrs
         */
        systemrule: require('./qrs.sdk.systemrule')(options),
        /**
         * tag endpoint
         * {@link qrs.sdk.tag.md|See documentation}
         * @namespace tag
         * @memberof qrs
         */
        tag: require('./qrs.sdk.tag')(options),
        /**
         * task endpoint
         * {@link qrs.sdk.task.md|See documentation}
         * @namespace task
         * @memberof qrs
         */
        task: require('./qrs.sdk.task')(options),
        /**
         * taskoperational endpoint
         * {@link qrs.sdk.taskoperational.md|See documentation}
         * @namespace taskoperational
         * @memberof qrs
         */
        taskoperational: require('./qrs.sdk.taskoperational')(options),
        /**
         * tempcontent endpoint
         * {@link qrs.sdk.tempcontent.md|See documentation}
         * @namespace tempcontent
         * @memberof qrs
         */
        tempcontent: require('./qrs.sdk.tempcontent')(options),
        /**
         * user endpoint
         * {@link qrs.sdk.user.md|See documentation}
         * @namespace user
         * @memberof qrs
         */
        user: require('./qrs.sdk.user')(options),
        /**
         * userdirectory endpoint
         * {@link qrs.sdk.userdirectory.md|See documentation}
         * @namespace userdirectory
         * @memberof qrs
         */
        userdirectory: require('./qrs.sdk.userdirectory')(options),
        /**
         * userdirectoryconnector endpoint
         * {@link qrs.sdk.userdirectoryconnector.md|See documentation}
         * @namespace userdirectoryconnector
         * @memberof qrs
         */
        userdirectoryconnector: require('./qrs.sdk.userdirectoryconnector')(options),
        /**
         * usersynctask endpoint
         * {@link qrs.sdk.usersynctask.md|See documentation}
         * @namespace usersynctask
         * @memberof qrs
         */
        usersynctask: require('./qrs.sdk.usersynctask')(options),
        /**
         * usersynctaskoperational endpoint
         * {@link qrs.sdk.usersynctaskoperational.md|See documentation}
         * @namespace usersynctaskoperational
         * @memberof qrs
         */
        usersynctaskoperational: require('./qrs.sdk.usersynctaskoperational')(options),
        /**
         * virtualproxyconfig endpoint
         * {@link qrs.sdk.virtualproxyconfig.md|See documentation}
         * @namespace virtualproxyconfig
         * @memberof qrs
         */
        virtualproxyconfig: require('./qrs.sdk.virtualproxyconfig')(options)

    }
};

