<a name="about"></a>
## about : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [about](#about) : <code>object</code>
  * [.api](#about.api) : <code>object</code>
    * [.default](#about.api.default) : <code>object</code>
      * [.app](#about.api.default.app) : <code>object</code>
        * [.get([listentries])](#about.api.default.app.get) ⇒ <code>Promise.&lt;App&gt;</code>
      * [.appavailability](#about.api.default.appavailability) : <code>object</code>
        * [.get([listentries])](#about.api.default.appavailability.get) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
      * [.appcontentquota](#about.api.default.appcontentquota) : <code>object</code>
        * [.get([listentries])](#about.api.default.appcontentquota.get) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
      * [.appseedinfo](#about.api.default.appseedinfo) : <code>object</code>
        * [.get([listentries])](#about.api.default.appseedinfo.get) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
      * [.appstatus](#about.api.default.appstatus) : <code>object</code>
        * [.get([listentries])](#about.api.default.appstatus.get) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
      * [.binarydelete](#about.api.default.binarydelete) : <code>object</code>
        * [.get([listentries])](#about.api.default.binarydelete.get) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
      * [.binarydownload](#about.api.default.binarydownload) : <code>object</code>
        * [.get([listentries])](#about.api.default.binarydownload.get) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
      * [.binarysyncruleevaluation](#about.api.default.binarysyncruleevaluation) : <code>object</code>
        * [.get([listentries])](#about.api.default.binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
      * [.compositeevent](#about.api.default.compositeevent) : <code>object</code>
        * [.get([listentries])](#about.api.default.compositeevent.get) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
      * [.compositeeventoperational](#about.api.default.compositeeventoperational) : <code>object</code>
        * [.get([listentries])](#about.api.default.compositeeventoperational.get) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
      * [.compositeeventruleoperational](#about.api.default.compositeeventruleoperational) : <code>object</code>
        * [.get([listentries])](#about.api.default.compositeeventruleoperational.get) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
      * [.content](#about.api.default.content) : <code>object</code>
        * [.get([listentries])](#about.api.default.content.get) ⇒ <code>Promise.&lt;AppContent&gt;</code>
      * [.contentlibrary](#about.api.default.contentlibrary) : <code>object</code>
        * [.get([listentries])](#about.api.default.contentlibrary.get) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
      * [.custompropertydefinition](#about.api.default.custompropertydefinition) : <code>object</code>
        * [.get([listentries])](#about.api.default.custompropertydefinition.get) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
      * [.dataconnection](#about.api.default.dataconnection) : <code>object</code>
        * [.get([listentries])](#about.api.default.dataconnection.get) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
      * [.datasegment](#about.api.default.datasegment) : <code>object</code>
        * [.get([listentries])](#about.api.default.datasegment.get) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
      * [.detail](#about.api.default.detail) : <code>object</code>
        * [.get([listentries])](#about.api.default.detail.get) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
      * [.engineservice](#about.api.default.engineservice) : <code>object</code>
        * [.get([listentries])](#about.api.default.engineservice.get) ⇒ <code>Promise.&lt;EngineService&gt;</code>
      * [.engineservicetemplate](#about.api.default.engineservicetemplate) : <code>object</code>
        * [.get([listentries])](#about.api.default.engineservicetemplate.get) ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code>
      * [.executionresult](#about.api.default.executionresult) : <code>object</code>
        * [.get([listentries])](#about.api.default.executionresult.get) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
      * [.executionsession](#about.api.default.executionsession) : <code>object</code>
        * [.get([listentries])](#about.api.default.executionsession.get) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
      * [.extension](#about.api.default.extension) : <code>object</code>
        * [.get([listentries])](#about.api.default.extension.get) ⇒ <code>Promise.&lt;Extension&gt;</code>
      * [.externalchangeinfo](#about.api.default.externalchangeinfo) : <code>object</code>
        * [.get([listentries])](#about.api.default.externalchangeinfo.get) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
      * [.externalprogramtask](#about.api.default.externalprogramtask) : <code>object</code>
        * [.get([listentries])](#about.api.default.externalprogramtask.get) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
      * [.externalprogramtaskoperational](#about.api.default.externalprogramtaskoperational) : <code>object</code>
        * [.get([listentries])](#about.api.default.externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
      * [.filereference](#about.api.default.filereference) : <code>object</code>
        * [.get([listentries])](#about.api.default.filereference.get) ⇒ <code>Promise.&lt;FileReference&gt;</code>
      * [.followingapp](#about.api.default.followingapp) : <code>object</code>
        * [.get([listentries])](#about.api.default.followingapp.get) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
      * [.internal](#about.api.default.internal) : <code>object</code>
        * [.get([listentries])](#about.api.default.internal.get) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
      * [.license](#about.api.default.license) : <code>object</code>
        * [.get([listentries])](#about.api.default.license.get) ⇒ <code>Promise.&lt;License&gt;</code>
      * [.localconfig](#about.api.default.localconfig) : <code>object</code>
        * [.get([listentries])](#about.api.default.localconfig.get) ⇒ <code>Promise.&lt;LocalConfig&gt;</code>
      * [.loginaccesstype](#about.api.default.loginaccesstype) : <code>object</code>
        * [.get([listentries])](#about.api.default.loginaccesstype.get) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
      * [.loginaccessusage](#about.api.default.loginaccessusage) : <code>object</code>
        * [.get([listentries])](#about.api.default.loginaccessusage.get) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
      * [.mimetype](#about.api.default.mimetype) : <code>object</code>
        * [.get([listentries])](#about.api.default.mimetype.get) ⇒ <code>Promise.&lt;MimeType&gt;</code>
      * [.object](#about.api.default.object) : <code>object</code>
        * [.get([listentries])](#about.api.default.object.get) ⇒ <code>Promise.&lt;AppObject&gt;</code>
      * [.printingservice](#about.api.default.printingservice) : <code>object</code>
        * [.get([listentries])](#about.api.default.printingservice.get) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
      * [.printingservicetemplate](#about.api.default.printingservicetemplate) : <code>object</code>
        * [.get([listentries])](#about.api.default.printingservicetemplate.get) ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code>
      * [.proxyservice](#about.api.default.proxyservice) : <code>object</code>
        * [.get([listentries])](#about.api.default.proxyservice.get) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
      * [.proxyservicetemplate](#about.api.default.proxyservicetemplate) : <code>object</code>
        * [.get([listentries])](#about.api.default.proxyservicetemplate.get) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
      * [.recentapp](#about.api.default.recentapp) : <code>object</code>
        * [.get([listentries])](#about.api.default.recentapp.get) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
      * [.reloadtask](#about.api.default.reloadtask) : <code>object</code>
        * [.get([listentries])](#about.api.default.reloadtask.get) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
      * [.reloadtaskoperational](#about.api.default.reloadtaskoperational) : <code>object</code>
        * [.get([listentries])](#about.api.default.reloadtaskoperational.get) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
      * [.removedsystemrule](#about.api.default.removedsystemrule) : <code>object</code>
        * [.get([listentries])](#about.api.default.removedsystemrule.get) ⇒ <code>Promise.&lt;RemovedSystemRule&gt;</code>
      * [.repositoryservice](#about.api.default.repositoryservice) : <code>object</code>
        * [.get([listentries])](#about.api.default.repositoryservice.get) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
      * [.repositoryservicetemplate](#about.api.default.repositoryservicetemplate) : <code>object</code>
        * [.get([listentries])](#about.api.default.repositoryservicetemplate.get) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
      * [.schedulerservice](#about.api.default.schedulerservice) : <code>object</code>
        * [.get([listentries])](#about.api.default.schedulerservice.get) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
      * [.schedulerservicetemplate](#about.api.default.schedulerservicetemplate) : <code>object</code>
        * [.get([listentries])](#about.api.default.schedulerservicetemplate.get) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
      * [.schemaevent](#about.api.default.schemaevent) : <code>object</code>
        * [.get([listentries])](#about.api.default.schemaevent.get) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
      * [.schemaeventoperational](#about.api.default.schemaeventoperational) : <code>object</code>
        * [.get([listentries])](#about.api.default.schemaeventoperational.get) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
      * [.selection](#about.api.default.selection) : <code>object</code>
        * [.get([listentries])](#about.api.default.selection.get) ⇒ <code>Promise.&lt;Selection&gt;</code>
      * [.servernodeconfiguration](#about.api.default.servernodeconfiguration) : <code>object</code>
        * [.get([listentries])](#about.api.default.servernodeconfiguration.get) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
      * [.servicestatus](#about.api.default.servicestatus) : <code>object</code>
        * [.get([listentries])](#about.api.default.servicestatus.get) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
      * [.staticcontentreference](#about.api.default.staticcontentreference) : <code>object</code>
        * [.get([listentries])](#about.api.default.staticcontentreference.get) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
      * [.stream](#about.api.default.stream) : <code>object</code>
        * [.get([listentries])](#about.api.default.stream.get) ⇒ <code>Promise.&lt;Stream&gt;</code>
      * [.syncsession](#about.api.default.syncsession) : <code>object</code>
        * [.get([listentries])](#about.api.default.syncsession.get) ⇒ <code>Promise.&lt;SyncSession&gt;</code>
      * [.systeminfo](#about.api.default.systeminfo) : <code>object</code>
        * [.get([listentries])](#about.api.default.systeminfo.get) ⇒ <code>Promise.&lt;SystemInfo&gt;</code>
      * [.systemrule](#about.api.default.systemrule) : <code>object</code>
        * [.get([listentries])](#about.api.default.systemrule.get) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
      * [.tabledefinition](#about.api.default.tabledefinition) : <code>object</code>
        * [.get([listentries])](#about.api.default.tabledefinition.get) ⇒ <code>Promise.&lt;TableDefinition&gt;</code>
      * [.tag](#about.api.default.tag) : <code>object</code>
        * [.get([listentries])](#about.api.default.tag.get) ⇒ <code>Promise.&lt;Tag&gt;</code>
      * [.tempcontent](#about.api.default.tempcontent) : <code>object</code>
        * [.get([listentries])](#about.api.default.tempcontent.get) ⇒ <code>Promise.&lt;TempContent&gt;</code>
      * [.termsacceptance](#about.api.default.termsacceptance) : <code>object</code>
        * [.get([listentries])](#about.api.default.termsacceptance.get) ⇒ <code>Promise.&lt;TermsAcceptance&gt;</code>
      * [.user](#about.api.default.user) : <code>object</code>
        * [.get([listentries])](#about.api.default.user.get) ⇒ <code>Promise.&lt;User&gt;</code>
      * [.useraccessgroup](#about.api.default.useraccessgroup) : <code>object</code>
        * [.get([listentries])](#about.api.default.useraccessgroup.get) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
      * [.useraccesstype](#about.api.default.useraccesstype) : <code>object</code>
        * [.get([listentries])](#about.api.default.useraccesstype.get) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
      * [.useraccessusage](#about.api.default.useraccessusage) : <code>object</code>
        * [.get([listentries])](#about.api.default.useraccessusage.get) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
      * [.userdirectory](#about.api.default.userdirectory) : <code>object</code>
        * [.get([listentries])](#about.api.default.userdirectory.get) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
      * [.userdirectorytemplate](#about.api.default.userdirectorytemplate) : <code>object</code>
        * [.get([listentries])](#about.api.default.userdirectorytemplate.get) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
      * [.usersynctask](#about.api.default.usersynctask) : <code>object</code>
        * [.get([listentries])](#about.api.default.usersynctask.get) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
      * [.usersynctaskoperational](#about.api.default.usersynctaskoperational) : <code>object</code>
        * [.get([listentries])](#about.api.default.usersynctaskoperational.get) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
      * [.virtualproxyconfig](#about.api.default.virtualproxyconfig) : <code>object</code>
        * [.get([listentries])](#about.api.default.virtualproxyconfig.get) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
      * [.get([listentries])](#about.api.default.get) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.description](#about.api.description) : <code>object</code>
      * [.get([extended], [method], [format])](#about.api.description.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.enums](#about.api.enums) : <code>object</code>
      * [.get()](#about.api.enums.get) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.relations](#about.api.relations) : <code>object</code>
      * [.get()](#about.api.relations.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
  * [.get()](#about.get) ⇒ <code>Promise.&lt;About&gt;</code>

<a name="about.api"></a>
### about.api : <code>object</code>
**Kind**: static namespace of <code>[about](#about)</code>  

* [.api](#about.api) : <code>object</code>
  * [.default](#about.api.default) : <code>object</code>
    * [.app](#about.api.default.app) : <code>object</code>
      * [.get([listentries])](#about.api.default.app.get) ⇒ <code>Promise.&lt;App&gt;</code>
    * [.appavailability](#about.api.default.appavailability) : <code>object</code>
      * [.get([listentries])](#about.api.default.appavailability.get) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
    * [.appcontentquota](#about.api.default.appcontentquota) : <code>object</code>
      * [.get([listentries])](#about.api.default.appcontentquota.get) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
    * [.appseedinfo](#about.api.default.appseedinfo) : <code>object</code>
      * [.get([listentries])](#about.api.default.appseedinfo.get) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
    * [.appstatus](#about.api.default.appstatus) : <code>object</code>
      * [.get([listentries])](#about.api.default.appstatus.get) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
    * [.binarydelete](#about.api.default.binarydelete) : <code>object</code>
      * [.get([listentries])](#about.api.default.binarydelete.get) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
    * [.binarydownload](#about.api.default.binarydownload) : <code>object</code>
      * [.get([listentries])](#about.api.default.binarydownload.get) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
    * [.binarysyncruleevaluation](#about.api.default.binarysyncruleevaluation) : <code>object</code>
      * [.get([listentries])](#about.api.default.binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
    * [.compositeevent](#about.api.default.compositeevent) : <code>object</code>
      * [.get([listentries])](#about.api.default.compositeevent.get) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
    * [.compositeeventoperational](#about.api.default.compositeeventoperational) : <code>object</code>
      * [.get([listentries])](#about.api.default.compositeeventoperational.get) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
    * [.compositeeventruleoperational](#about.api.default.compositeeventruleoperational) : <code>object</code>
      * [.get([listentries])](#about.api.default.compositeeventruleoperational.get) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
    * [.content](#about.api.default.content) : <code>object</code>
      * [.get([listentries])](#about.api.default.content.get) ⇒ <code>Promise.&lt;AppContent&gt;</code>
    * [.contentlibrary](#about.api.default.contentlibrary) : <code>object</code>
      * [.get([listentries])](#about.api.default.contentlibrary.get) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
    * [.custompropertydefinition](#about.api.default.custompropertydefinition) : <code>object</code>
      * [.get([listentries])](#about.api.default.custompropertydefinition.get) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
    * [.dataconnection](#about.api.default.dataconnection) : <code>object</code>
      * [.get([listentries])](#about.api.default.dataconnection.get) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
    * [.datasegment](#about.api.default.datasegment) : <code>object</code>
      * [.get([listentries])](#about.api.default.datasegment.get) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
    * [.detail](#about.api.default.detail) : <code>object</code>
      * [.get([listentries])](#about.api.default.detail.get) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
    * [.engineservice](#about.api.default.engineservice) : <code>object</code>
      * [.get([listentries])](#about.api.default.engineservice.get) ⇒ <code>Promise.&lt;EngineService&gt;</code>
    * [.engineservicetemplate](#about.api.default.engineservicetemplate) : <code>object</code>
      * [.get([listentries])](#about.api.default.engineservicetemplate.get) ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code>
    * [.executionresult](#about.api.default.executionresult) : <code>object</code>
      * [.get([listentries])](#about.api.default.executionresult.get) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
    * [.executionsession](#about.api.default.executionsession) : <code>object</code>
      * [.get([listentries])](#about.api.default.executionsession.get) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
    * [.extension](#about.api.default.extension) : <code>object</code>
      * [.get([listentries])](#about.api.default.extension.get) ⇒ <code>Promise.&lt;Extension&gt;</code>
    * [.externalchangeinfo](#about.api.default.externalchangeinfo) : <code>object</code>
      * [.get([listentries])](#about.api.default.externalchangeinfo.get) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
    * [.externalprogramtask](#about.api.default.externalprogramtask) : <code>object</code>
      * [.get([listentries])](#about.api.default.externalprogramtask.get) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
    * [.externalprogramtaskoperational](#about.api.default.externalprogramtaskoperational) : <code>object</code>
      * [.get([listentries])](#about.api.default.externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
    * [.filereference](#about.api.default.filereference) : <code>object</code>
      * [.get([listentries])](#about.api.default.filereference.get) ⇒ <code>Promise.&lt;FileReference&gt;</code>
    * [.followingapp](#about.api.default.followingapp) : <code>object</code>
      * [.get([listentries])](#about.api.default.followingapp.get) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
    * [.internal](#about.api.default.internal) : <code>object</code>
      * [.get([listentries])](#about.api.default.internal.get) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
    * [.license](#about.api.default.license) : <code>object</code>
      * [.get([listentries])](#about.api.default.license.get) ⇒ <code>Promise.&lt;License&gt;</code>
    * [.localconfig](#about.api.default.localconfig) : <code>object</code>
      * [.get([listentries])](#about.api.default.localconfig.get) ⇒ <code>Promise.&lt;LocalConfig&gt;</code>
    * [.loginaccesstype](#about.api.default.loginaccesstype) : <code>object</code>
      * [.get([listentries])](#about.api.default.loginaccesstype.get) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
    * [.loginaccessusage](#about.api.default.loginaccessusage) : <code>object</code>
      * [.get([listentries])](#about.api.default.loginaccessusage.get) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
    * [.mimetype](#about.api.default.mimetype) : <code>object</code>
      * [.get([listentries])](#about.api.default.mimetype.get) ⇒ <code>Promise.&lt;MimeType&gt;</code>
    * [.object](#about.api.default.object) : <code>object</code>
      * [.get([listentries])](#about.api.default.object.get) ⇒ <code>Promise.&lt;AppObject&gt;</code>
    * [.printingservice](#about.api.default.printingservice) : <code>object</code>
      * [.get([listentries])](#about.api.default.printingservice.get) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
    * [.printingservicetemplate](#about.api.default.printingservicetemplate) : <code>object</code>
      * [.get([listentries])](#about.api.default.printingservicetemplate.get) ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code>
    * [.proxyservice](#about.api.default.proxyservice) : <code>object</code>
      * [.get([listentries])](#about.api.default.proxyservice.get) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
    * [.proxyservicetemplate](#about.api.default.proxyservicetemplate) : <code>object</code>
      * [.get([listentries])](#about.api.default.proxyservicetemplate.get) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
    * [.recentapp](#about.api.default.recentapp) : <code>object</code>
      * [.get([listentries])](#about.api.default.recentapp.get) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
    * [.reloadtask](#about.api.default.reloadtask) : <code>object</code>
      * [.get([listentries])](#about.api.default.reloadtask.get) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
    * [.reloadtaskoperational](#about.api.default.reloadtaskoperational) : <code>object</code>
      * [.get([listentries])](#about.api.default.reloadtaskoperational.get) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
    * [.removedsystemrule](#about.api.default.removedsystemrule) : <code>object</code>
      * [.get([listentries])](#about.api.default.removedsystemrule.get) ⇒ <code>Promise.&lt;RemovedSystemRule&gt;</code>
    * [.repositoryservice](#about.api.default.repositoryservice) : <code>object</code>
      * [.get([listentries])](#about.api.default.repositoryservice.get) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
    * [.repositoryservicetemplate](#about.api.default.repositoryservicetemplate) : <code>object</code>
      * [.get([listentries])](#about.api.default.repositoryservicetemplate.get) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
    * [.schedulerservice](#about.api.default.schedulerservice) : <code>object</code>
      * [.get([listentries])](#about.api.default.schedulerservice.get) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
    * [.schedulerservicetemplate](#about.api.default.schedulerservicetemplate) : <code>object</code>
      * [.get([listentries])](#about.api.default.schedulerservicetemplate.get) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
    * [.schemaevent](#about.api.default.schemaevent) : <code>object</code>
      * [.get([listentries])](#about.api.default.schemaevent.get) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
    * [.schemaeventoperational](#about.api.default.schemaeventoperational) : <code>object</code>
      * [.get([listentries])](#about.api.default.schemaeventoperational.get) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
    * [.selection](#about.api.default.selection) : <code>object</code>
      * [.get([listentries])](#about.api.default.selection.get) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.servernodeconfiguration](#about.api.default.servernodeconfiguration) : <code>object</code>
      * [.get([listentries])](#about.api.default.servernodeconfiguration.get) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
    * [.servicestatus](#about.api.default.servicestatus) : <code>object</code>
      * [.get([listentries])](#about.api.default.servicestatus.get) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
    * [.staticcontentreference](#about.api.default.staticcontentreference) : <code>object</code>
      * [.get([listentries])](#about.api.default.staticcontentreference.get) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
    * [.stream](#about.api.default.stream) : <code>object</code>
      * [.get([listentries])](#about.api.default.stream.get) ⇒ <code>Promise.&lt;Stream&gt;</code>
    * [.syncsession](#about.api.default.syncsession) : <code>object</code>
      * [.get([listentries])](#about.api.default.syncsession.get) ⇒ <code>Promise.&lt;SyncSession&gt;</code>
    * [.systeminfo](#about.api.default.systeminfo) : <code>object</code>
      * [.get([listentries])](#about.api.default.systeminfo.get) ⇒ <code>Promise.&lt;SystemInfo&gt;</code>
    * [.systemrule](#about.api.default.systemrule) : <code>object</code>
      * [.get([listentries])](#about.api.default.systemrule.get) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
    * [.tabledefinition](#about.api.default.tabledefinition) : <code>object</code>
      * [.get([listentries])](#about.api.default.tabledefinition.get) ⇒ <code>Promise.&lt;TableDefinition&gt;</code>
    * [.tag](#about.api.default.tag) : <code>object</code>
      * [.get([listentries])](#about.api.default.tag.get) ⇒ <code>Promise.&lt;Tag&gt;</code>
    * [.tempcontent](#about.api.default.tempcontent) : <code>object</code>
      * [.get([listentries])](#about.api.default.tempcontent.get) ⇒ <code>Promise.&lt;TempContent&gt;</code>
    * [.termsacceptance](#about.api.default.termsacceptance) : <code>object</code>
      * [.get([listentries])](#about.api.default.termsacceptance.get) ⇒ <code>Promise.&lt;TermsAcceptance&gt;</code>
    * [.user](#about.api.default.user) : <code>object</code>
      * [.get([listentries])](#about.api.default.user.get) ⇒ <code>Promise.&lt;User&gt;</code>
    * [.useraccessgroup](#about.api.default.useraccessgroup) : <code>object</code>
      * [.get([listentries])](#about.api.default.useraccessgroup.get) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
    * [.useraccesstype](#about.api.default.useraccesstype) : <code>object</code>
      * [.get([listentries])](#about.api.default.useraccesstype.get) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
    * [.useraccessusage](#about.api.default.useraccessusage) : <code>object</code>
      * [.get([listentries])](#about.api.default.useraccessusage.get) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
    * [.userdirectory](#about.api.default.userdirectory) : <code>object</code>
      * [.get([listentries])](#about.api.default.userdirectory.get) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
    * [.userdirectorytemplate](#about.api.default.userdirectorytemplate) : <code>object</code>
      * [.get([listentries])](#about.api.default.userdirectorytemplate.get) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
    * [.usersynctask](#about.api.default.usersynctask) : <code>object</code>
      * [.get([listentries])](#about.api.default.usersynctask.get) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
    * [.usersynctaskoperational](#about.api.default.usersynctaskoperational) : <code>object</code>
      * [.get([listentries])](#about.api.default.usersynctaskoperational.get) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
    * [.virtualproxyconfig](#about.api.default.virtualproxyconfig) : <code>object</code>
      * [.get([listentries])](#about.api.default.virtualproxyconfig.get) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
    * [.get([listentries])](#about.api.default.get) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.description](#about.api.description) : <code>object</code>
    * [.get([extended], [method], [format])](#about.api.description.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
  * [.enums](#about.api.enums) : <code>object</code>
    * [.get()](#about.api.enums.get) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.relations](#about.api.relations) : <code>object</code>
    * [.get()](#about.api.relations.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>

<a name="about.api.default"></a>
#### api.default : <code>object</code>
**Kind**: static namespace of <code>[api](#about.api)</code>  

* [.default](#about.api.default) : <code>object</code>
  * [.app](#about.api.default.app) : <code>object</code>
    * [.get([listentries])](#about.api.default.app.get) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.appavailability](#about.api.default.appavailability) : <code>object</code>
    * [.get([listentries])](#about.api.default.appavailability.get) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
  * [.appcontentquota](#about.api.default.appcontentquota) : <code>object</code>
    * [.get([listentries])](#about.api.default.appcontentquota.get) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
  * [.appseedinfo](#about.api.default.appseedinfo) : <code>object</code>
    * [.get([listentries])](#about.api.default.appseedinfo.get) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
  * [.appstatus](#about.api.default.appstatus) : <code>object</code>
    * [.get([listentries])](#about.api.default.appstatus.get) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
  * [.binarydelete](#about.api.default.binarydelete) : <code>object</code>
    * [.get([listentries])](#about.api.default.binarydelete.get) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
  * [.binarydownload](#about.api.default.binarydownload) : <code>object</code>
    * [.get([listentries])](#about.api.default.binarydownload.get) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
  * [.binarysyncruleevaluation](#about.api.default.binarysyncruleevaluation) : <code>object</code>
    * [.get([listentries])](#about.api.default.binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
  * [.compositeevent](#about.api.default.compositeevent) : <code>object</code>
    * [.get([listentries])](#about.api.default.compositeevent.get) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
  * [.compositeeventoperational](#about.api.default.compositeeventoperational) : <code>object</code>
    * [.get([listentries])](#about.api.default.compositeeventoperational.get) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
  * [.compositeeventruleoperational](#about.api.default.compositeeventruleoperational) : <code>object</code>
    * [.get([listentries])](#about.api.default.compositeeventruleoperational.get) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
  * [.content](#about.api.default.content) : <code>object</code>
    * [.get([listentries])](#about.api.default.content.get) ⇒ <code>Promise.&lt;AppContent&gt;</code>
  * [.contentlibrary](#about.api.default.contentlibrary) : <code>object</code>
    * [.get([listentries])](#about.api.default.contentlibrary.get) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
  * [.custompropertydefinition](#about.api.default.custompropertydefinition) : <code>object</code>
    * [.get([listentries])](#about.api.default.custompropertydefinition.get) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
  * [.dataconnection](#about.api.default.dataconnection) : <code>object</code>
    * [.get([listentries])](#about.api.default.dataconnection.get) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
  * [.datasegment](#about.api.default.datasegment) : <code>object</code>
    * [.get([listentries])](#about.api.default.datasegment.get) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
  * [.detail](#about.api.default.detail) : <code>object</code>
    * [.get([listentries])](#about.api.default.detail.get) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
  * [.engineservice](#about.api.default.engineservice) : <code>object</code>
    * [.get([listentries])](#about.api.default.engineservice.get) ⇒ <code>Promise.&lt;EngineService&gt;</code>
  * [.engineservicetemplate](#about.api.default.engineservicetemplate) : <code>object</code>
    * [.get([listentries])](#about.api.default.engineservicetemplate.get) ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code>
  * [.executionresult](#about.api.default.executionresult) : <code>object</code>
    * [.get([listentries])](#about.api.default.executionresult.get) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
  * [.executionsession](#about.api.default.executionsession) : <code>object</code>
    * [.get([listentries])](#about.api.default.executionsession.get) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
  * [.extension](#about.api.default.extension) : <code>object</code>
    * [.get([listentries])](#about.api.default.extension.get) ⇒ <code>Promise.&lt;Extension&gt;</code>
  * [.externalchangeinfo](#about.api.default.externalchangeinfo) : <code>object</code>
    * [.get([listentries])](#about.api.default.externalchangeinfo.get) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
  * [.externalprogramtask](#about.api.default.externalprogramtask) : <code>object</code>
    * [.get([listentries])](#about.api.default.externalprogramtask.get) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
  * [.externalprogramtaskoperational](#about.api.default.externalprogramtaskoperational) : <code>object</code>
    * [.get([listentries])](#about.api.default.externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
  * [.filereference](#about.api.default.filereference) : <code>object</code>
    * [.get([listentries])](#about.api.default.filereference.get) ⇒ <code>Promise.&lt;FileReference&gt;</code>
  * [.followingapp](#about.api.default.followingapp) : <code>object</code>
    * [.get([listentries])](#about.api.default.followingapp.get) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
  * [.internal](#about.api.default.internal) : <code>object</code>
    * [.get([listentries])](#about.api.default.internal.get) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
  * [.license](#about.api.default.license) : <code>object</code>
    * [.get([listentries])](#about.api.default.license.get) ⇒ <code>Promise.&lt;License&gt;</code>
  * [.localconfig](#about.api.default.localconfig) : <code>object</code>
    * [.get([listentries])](#about.api.default.localconfig.get) ⇒ <code>Promise.&lt;LocalConfig&gt;</code>
  * [.loginaccesstype](#about.api.default.loginaccesstype) : <code>object</code>
    * [.get([listentries])](#about.api.default.loginaccesstype.get) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
  * [.loginaccessusage](#about.api.default.loginaccessusage) : <code>object</code>
    * [.get([listentries])](#about.api.default.loginaccessusage.get) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
  * [.mimetype](#about.api.default.mimetype) : <code>object</code>
    * [.get([listentries])](#about.api.default.mimetype.get) ⇒ <code>Promise.&lt;MimeType&gt;</code>
  * [.object](#about.api.default.object) : <code>object</code>
    * [.get([listentries])](#about.api.default.object.get) ⇒ <code>Promise.&lt;AppObject&gt;</code>
  * [.printingservice](#about.api.default.printingservice) : <code>object</code>
    * [.get([listentries])](#about.api.default.printingservice.get) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
  * [.printingservicetemplate](#about.api.default.printingservicetemplate) : <code>object</code>
    * [.get([listentries])](#about.api.default.printingservicetemplate.get) ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code>
  * [.proxyservice](#about.api.default.proxyservice) : <code>object</code>
    * [.get([listentries])](#about.api.default.proxyservice.get) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
  * [.proxyservicetemplate](#about.api.default.proxyservicetemplate) : <code>object</code>
    * [.get([listentries])](#about.api.default.proxyservicetemplate.get) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
  * [.recentapp](#about.api.default.recentapp) : <code>object</code>
    * [.get([listentries])](#about.api.default.recentapp.get) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
  * [.reloadtask](#about.api.default.reloadtask) : <code>object</code>
    * [.get([listentries])](#about.api.default.reloadtask.get) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
  * [.reloadtaskoperational](#about.api.default.reloadtaskoperational) : <code>object</code>
    * [.get([listentries])](#about.api.default.reloadtaskoperational.get) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
  * [.removedsystemrule](#about.api.default.removedsystemrule) : <code>object</code>
    * [.get([listentries])](#about.api.default.removedsystemrule.get) ⇒ <code>Promise.&lt;RemovedSystemRule&gt;</code>
  * [.repositoryservice](#about.api.default.repositoryservice) : <code>object</code>
    * [.get([listentries])](#about.api.default.repositoryservice.get) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
  * [.repositoryservicetemplate](#about.api.default.repositoryservicetemplate) : <code>object</code>
    * [.get([listentries])](#about.api.default.repositoryservicetemplate.get) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
  * [.schedulerservice](#about.api.default.schedulerservice) : <code>object</code>
    * [.get([listentries])](#about.api.default.schedulerservice.get) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
  * [.schedulerservicetemplate](#about.api.default.schedulerservicetemplate) : <code>object</code>
    * [.get([listentries])](#about.api.default.schedulerservicetemplate.get) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
  * [.schemaevent](#about.api.default.schemaevent) : <code>object</code>
    * [.get([listentries])](#about.api.default.schemaevent.get) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
  * [.schemaeventoperational](#about.api.default.schemaeventoperational) : <code>object</code>
    * [.get([listentries])](#about.api.default.schemaeventoperational.get) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
  * [.selection](#about.api.default.selection) : <code>object</code>
    * [.get([listentries])](#about.api.default.selection.get) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.servernodeconfiguration](#about.api.default.servernodeconfiguration) : <code>object</code>
    * [.get([listentries])](#about.api.default.servernodeconfiguration.get) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
  * [.servicestatus](#about.api.default.servicestatus) : <code>object</code>
    * [.get([listentries])](#about.api.default.servicestatus.get) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
  * [.staticcontentreference](#about.api.default.staticcontentreference) : <code>object</code>
    * [.get([listentries])](#about.api.default.staticcontentreference.get) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
  * [.stream](#about.api.default.stream) : <code>object</code>
    * [.get([listentries])](#about.api.default.stream.get) ⇒ <code>Promise.&lt;Stream&gt;</code>
  * [.syncsession](#about.api.default.syncsession) : <code>object</code>
    * [.get([listentries])](#about.api.default.syncsession.get) ⇒ <code>Promise.&lt;SyncSession&gt;</code>
  * [.systeminfo](#about.api.default.systeminfo) : <code>object</code>
    * [.get([listentries])](#about.api.default.systeminfo.get) ⇒ <code>Promise.&lt;SystemInfo&gt;</code>
  * [.systemrule](#about.api.default.systemrule) : <code>object</code>
    * [.get([listentries])](#about.api.default.systemrule.get) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
  * [.tabledefinition](#about.api.default.tabledefinition) : <code>object</code>
    * [.get([listentries])](#about.api.default.tabledefinition.get) ⇒ <code>Promise.&lt;TableDefinition&gt;</code>
  * [.tag](#about.api.default.tag) : <code>object</code>
    * [.get([listentries])](#about.api.default.tag.get) ⇒ <code>Promise.&lt;Tag&gt;</code>
  * [.tempcontent](#about.api.default.tempcontent) : <code>object</code>
    * [.get([listentries])](#about.api.default.tempcontent.get) ⇒ <code>Promise.&lt;TempContent&gt;</code>
  * [.termsacceptance](#about.api.default.termsacceptance) : <code>object</code>
    * [.get([listentries])](#about.api.default.termsacceptance.get) ⇒ <code>Promise.&lt;TermsAcceptance&gt;</code>
  * [.user](#about.api.default.user) : <code>object</code>
    * [.get([listentries])](#about.api.default.user.get) ⇒ <code>Promise.&lt;User&gt;</code>
  * [.useraccessgroup](#about.api.default.useraccessgroup) : <code>object</code>
    * [.get([listentries])](#about.api.default.useraccessgroup.get) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
  * [.useraccesstype](#about.api.default.useraccesstype) : <code>object</code>
    * [.get([listentries])](#about.api.default.useraccesstype.get) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
  * [.useraccessusage](#about.api.default.useraccessusage) : <code>object</code>
    * [.get([listentries])](#about.api.default.useraccessusage.get) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
  * [.userdirectory](#about.api.default.userdirectory) : <code>object</code>
    * [.get([listentries])](#about.api.default.userdirectory.get) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
  * [.userdirectorytemplate](#about.api.default.userdirectorytemplate) : <code>object</code>
    * [.get([listentries])](#about.api.default.userdirectorytemplate.get) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
  * [.usersynctask](#about.api.default.usersynctask) : <code>object</code>
    * [.get([listentries])](#about.api.default.usersynctask.get) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
  * [.usersynctaskoperational](#about.api.default.usersynctaskoperational) : <code>object</code>
    * [.get([listentries])](#about.api.default.usersynctaskoperational.get) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
  * [.virtualproxyconfig](#about.api.default.virtualproxyconfig) : <code>object</code>
    * [.get([listentries])](#about.api.default.virtualproxyconfig.get) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
  * [.get([listentries])](#about.api.default.get) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="about.api.default.app"></a>
##### default.app : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.app.get"></a>
###### app.get([listentries]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/app?listentries={listentries}
This method is manual

**Kind**: static method of <code>[app](#about.api.default.app)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.app.get(listentries).then(function(App) {
	console.log(App)
})
```
<a name="about.api.default.appavailability"></a>
##### default.appavailability : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.appavailability.get"></a>
###### appavailability.get([listentries]) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/appavailability?listentries={listentries}
This method is manual

**Kind**: static method of <code>[appavailability](#about.api.default.appavailability)</code>  
**Returns**: <code>Promise.&lt;AppAvailability&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.appavailability.get(listentries).then(function(AppAvailability) {
	console.log(AppAvailability)
})
```
<a name="about.api.default.appcontentquota"></a>
##### default.appcontentquota : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.appcontentquota.get"></a>
###### appcontentquota.get([listentries]) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/appcontentquota?listentries={listentries}
This method is manual

**Kind**: static method of <code>[appcontentquota](#about.api.default.appcontentquota)</code>  
**Returns**: <code>Promise.&lt;AppContentQuota&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.appcontentquota.get(listentries).then(function(AppContentQuota) {
	console.log(AppContentQuota)
})
```
<a name="about.api.default.appseedinfo"></a>
##### default.appseedinfo : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.appseedinfo.get"></a>
###### appseedinfo.get([listentries]) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/appseedinfo?listentries={listentries}
This method is manual

**Kind**: static method of <code>[appseedinfo](#about.api.default.appseedinfo)</code>  
**Returns**: <code>Promise.&lt;AppSeedInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.appseedinfo.get(listentries).then(function(AppSeedInfo) {
	console.log(AppSeedInfo)
})
```
<a name="about.api.default.appstatus"></a>
##### default.appstatus : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.appstatus.get"></a>
###### appstatus.get([listentries]) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/appstatus?listentries={listentries}
This method is manual

**Kind**: static method of <code>[appstatus](#about.api.default.appstatus)</code>  
**Returns**: <code>Promise.&lt;AppStatus&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.appstatus.get(listentries).then(function(AppStatus) {
	console.log(AppStatus)
})
```
<a name="about.api.default.binarydelete"></a>
##### default.binarydelete : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.binarydelete.get"></a>
###### binarydelete.get([listentries]) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/binarydelete?listentries={listentries}
This method is manual

**Kind**: static method of <code>[binarydelete](#about.api.default.binarydelete)</code>  
**Returns**: <code>Promise.&lt;BinaryDelete&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.binarydelete.get(listentries).then(function(BinaryDelete) {
	console.log(BinaryDelete)
})
```
<a name="about.api.default.binarydownload"></a>
##### default.binarydownload : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.binarydownload.get"></a>
###### binarydownload.get([listentries]) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/binarydownload?listentries={listentries}
This method is manual

**Kind**: static method of <code>[binarydownload](#about.api.default.binarydownload)</code>  
**Returns**: <code>Promise.&lt;BinaryDownload&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.binarydownload.get(listentries).then(function(BinaryDownload) {
	console.log(BinaryDownload)
})
```
<a name="about.api.default.binarysyncruleevaluation"></a>
##### default.binarysyncruleevaluation : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.binarysyncruleevaluation.get"></a>
###### binarysyncruleevaluation.get([listentries]) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/binarysyncruleevaluation?listentries={listentries}
This method is manual

**Kind**: static method of <code>[binarysyncruleevaluation](#about.api.default.binarysyncruleevaluation)</code>  
**Returns**: <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.binarysyncruleevaluation.get(listentries).then(function(BinarySyncRuleEvaluation) {
	console.log(BinarySyncRuleEvaluation)
})
```
<a name="about.api.default.compositeevent"></a>
##### default.compositeevent : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.compositeevent.get"></a>
###### compositeevent.get([listentries]) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/compositeevent?listentries={listentries}
This method is manual

**Kind**: static method of <code>[compositeevent](#about.api.default.compositeevent)</code>  
**Returns**: <code>Promise.&lt;CompositeEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.compositeevent.get(listentries).then(function(CompositeEvent) {
	console.log(CompositeEvent)
})
```
<a name="about.api.default.compositeeventoperational"></a>
##### default.compositeeventoperational : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.compositeeventoperational.get"></a>
###### compositeeventoperational.get([listentries]) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/compositeeventoperational?listentries={listentries}
This method is manual

**Kind**: static method of <code>[compositeeventoperational](#about.api.default.compositeeventoperational)</code>  
**Returns**: <code>Promise.&lt;CompositeEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.compositeeventoperational.get(listentries).then(function(CompositeEventOperational) {
	console.log(CompositeEventOperational)
})
```
<a name="about.api.default.compositeeventruleoperational"></a>
##### default.compositeeventruleoperational : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.compositeeventruleoperational.get"></a>
###### compositeeventruleoperational.get([listentries]) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/compositeeventruleoperational?listentries={listentries}
This method is manual

**Kind**: static method of <code>[compositeeventruleoperational](#about.api.default.compositeeventruleoperational)</code>  
**Returns**: <code>Promise.&lt;CompositeEventRuleOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.compositeeventruleoperational.get(listentries).then(function(CompositeEventRuleOperational) {
	console.log(CompositeEventRuleOperational)
})
```
<a name="about.api.default.content"></a>
##### default.content : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.content.get"></a>
###### content.get([listentries]) ⇒ <code>Promise.&lt;AppContent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/content?listentries={listentries}
This method is manual

**Kind**: static method of <code>[content](#about.api.default.content)</code>  
**Returns**: <code>Promise.&lt;AppContent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.content.get(listentries).then(function(AppContent) {
	console.log(AppContent)
})
```
<a name="about.api.default.contentlibrary"></a>
##### default.contentlibrary : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.contentlibrary.get"></a>
###### contentlibrary.get([listentries]) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/contentlibrary?listentries={listentries}
This method is manual

**Kind**: static method of <code>[contentlibrary](#about.api.default.contentlibrary)</code>  
**Returns**: <code>Promise.&lt;ContentLibrary&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.contentlibrary.get(listentries).then(function(ContentLibrary) {
	console.log(ContentLibrary)
})
```
<a name="about.api.default.custompropertydefinition"></a>
##### default.custompropertydefinition : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.custompropertydefinition.get"></a>
###### custompropertydefinition.get([listentries]) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/custompropertydefinition?listentries={listentries}
This method is manual

**Kind**: static method of <code>[custompropertydefinition](#about.api.default.custompropertydefinition)</code>  
**Returns**: <code>Promise.&lt;CustomPropertyDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.custompropertydefinition.get(listentries).then(function(CustomPropertyDefinition) {
	console.log(CustomPropertyDefinition)
})
```
<a name="about.api.default.dataconnection"></a>
##### default.dataconnection : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.dataconnection.get"></a>
###### dataconnection.get([listentries]) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/dataconnection?listentries={listentries}
This method is manual

**Kind**: static method of <code>[dataconnection](#about.api.default.dataconnection)</code>  
**Returns**: <code>Promise.&lt;DataConnection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.dataconnection.get(listentries).then(function(DataConnection) {
	console.log(DataConnection)
})
```
<a name="about.api.default.datasegment"></a>
##### default.datasegment : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.datasegment.get"></a>
###### datasegment.get([listentries]) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/datasegment?listentries={listentries}
This method is manual

**Kind**: static method of <code>[datasegment](#about.api.default.datasegment)</code>  
**Returns**: <code>Promise.&lt;AppDataSegment&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.datasegment.get(listentries).then(function(AppDataSegment) {
	console.log(AppDataSegment)
})
```
<a name="about.api.default.detail"></a>
##### default.detail : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.detail.get"></a>
###### detail.get([listentries]) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/detail?listentries={listentries}
This method is manual

**Kind**: static method of <code>[detail](#about.api.default.detail)</code>  
**Returns**: <code>Promise.&lt;ExecutionResultDetail&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.detail.get(listentries).then(function(ExecutionResultDetail) {
	console.log(ExecutionResultDetail)
})
```
<a name="about.api.default.engineservice"></a>
##### default.engineservice : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.engineservice.get"></a>
###### engineservice.get([listentries]) ⇒ <code>Promise.&lt;EngineService&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/engineservice?listentries={listentries}
This method is manual

**Kind**: static method of <code>[engineservice](#about.api.default.engineservice)</code>  
**Returns**: <code>Promise.&lt;EngineService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.engineservice.get(listentries).then(function(EngineService) {
	console.log(EngineService)
})
```
<a name="about.api.default.engineservicetemplate"></a>
##### default.engineservicetemplate : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.engineservicetemplate.get"></a>
###### engineservicetemplate.get([listentries]) ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/engineservicetemplate?listentries={listentries}
This method is manual

**Kind**: static method of <code>[engineservicetemplate](#about.api.default.engineservicetemplate)</code>  
**Returns**: <code>Promise.&lt;EngineServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.engineservicetemplate.get(listentries).then(function(EngineServiceTemplate) {
	console.log(EngineServiceTemplate)
})
```
<a name="about.api.default.executionresult"></a>
##### default.executionresult : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.executionresult.get"></a>
###### executionresult.get([listentries]) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/executionresult?listentries={listentries}
This method is manual

**Kind**: static method of <code>[executionresult](#about.api.default.executionresult)</code>  
**Returns**: <code>Promise.&lt;ExecutionResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.executionresult.get(listentries).then(function(ExecutionResult) {
	console.log(ExecutionResult)
})
```
<a name="about.api.default.executionsession"></a>
##### default.executionsession : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.executionsession.get"></a>
###### executionsession.get([listentries]) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/executionsession?listentries={listentries}
This method is manual

**Kind**: static method of <code>[executionsession](#about.api.default.executionsession)</code>  
**Returns**: <code>Promise.&lt;ExecutionSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.executionsession.get(listentries).then(function(ExecutionSession) {
	console.log(ExecutionSession)
})
```
<a name="about.api.default.extension"></a>
##### default.extension : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.extension.get"></a>
###### extension.get([listentries]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/extension?listentries={listentries}
This method is manual

**Kind**: static method of <code>[extension](#about.api.default.extension)</code>  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.extension.get(listentries).then(function(Extension) {
	console.log(Extension)
})
```
<a name="about.api.default.externalchangeinfo"></a>
##### default.externalchangeinfo : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.externalchangeinfo.get"></a>
###### externalchangeinfo.get([listentries]) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/externalchangeinfo?listentries={listentries}
This method is manual

**Kind**: static method of <code>[externalchangeinfo](#about.api.default.externalchangeinfo)</code>  
**Returns**: <code>Promise.&lt;ExternalChangeInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.externalchangeinfo.get(listentries).then(function(ExternalChangeInfo) {
	console.log(ExternalChangeInfo)
})
```
<a name="about.api.default.externalprogramtask"></a>
##### default.externalprogramtask : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.externalprogramtask.get"></a>
###### externalprogramtask.get([listentries]) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/externalprogramtask?listentries={listentries}
This method is manual

**Kind**: static method of <code>[externalprogramtask](#about.api.default.externalprogramtask)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.externalprogramtask.get(listentries).then(function(ExternalProgramTask) {
	console.log(ExternalProgramTask)
})
```
<a name="about.api.default.externalprogramtaskoperational"></a>
##### default.externalprogramtaskoperational : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.externalprogramtaskoperational.get"></a>
###### externalprogramtaskoperational.get([listentries]) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/externalprogramtaskoperational?listentries={listentries}
This method is manual

**Kind**: static method of <code>[externalprogramtaskoperational](#about.api.default.externalprogramtaskoperational)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.externalprogramtaskoperational.get(listentries).then(function(ExternalProgramTaskOperational) {
	console.log(ExternalProgramTaskOperational)
})
```
<a name="about.api.default.filereference"></a>
##### default.filereference : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.filereference.get"></a>
###### filereference.get([listentries]) ⇒ <code>Promise.&lt;FileReference&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/filereference?listentries={listentries}
This method is manual

**Kind**: static method of <code>[filereference](#about.api.default.filereference)</code>  
**Returns**: <code>Promise.&lt;FileReference&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.filereference.get(listentries).then(function(FileReference) {
	console.log(FileReference)
})
```
<a name="about.api.default.followingapp"></a>
##### default.followingapp : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.followingapp.get"></a>
###### followingapp.get([listentries]) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/followingapp?listentries={listentries}
This method is manual

**Kind**: static method of <code>[followingapp](#about.api.default.followingapp)</code>  
**Returns**: <code>Promise.&lt;UserFollowingApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.followingapp.get(listentries).then(function(UserFollowingApp) {
	console.log(UserFollowingApp)
})
```
<a name="about.api.default.internal"></a>
##### default.internal : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.internal.get"></a>
###### internal.get([listentries]) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/internal?listentries={listentries}
This method is manual

**Kind**: static method of <code>[internal](#about.api.default.internal)</code>  
**Returns**: <code>Promise.&lt;AppInternal&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.internal.get(listentries).then(function(AppInternal) {
	console.log(AppInternal)
})
```
<a name="about.api.default.license"></a>
##### default.license : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.license.get"></a>
###### license.get([listentries]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/license?listentries={listentries}
This method is manual

**Kind**: static method of <code>[license](#about.api.default.license)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.license.get(listentries).then(function(License) {
	console.log(License)
})
```
<a name="about.api.default.localconfig"></a>
##### default.localconfig : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.localconfig.get"></a>
###### localconfig.get([listentries]) ⇒ <code>Promise.&lt;LocalConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/localconfig?listentries={listentries}
This method is manual

**Kind**: static method of <code>[localconfig](#about.api.default.localconfig)</code>  
**Returns**: <code>Promise.&lt;LocalConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.localconfig.get(listentries).then(function(LocalConfig) {
	console.log(LocalConfig)
})
```
<a name="about.api.default.loginaccesstype"></a>
##### default.loginaccesstype : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.loginaccesstype.get"></a>
###### loginaccesstype.get([listentries]) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/loginaccesstype?listentries={listentries}
This method is manual

**Kind**: static method of <code>[loginaccesstype](#about.api.default.loginaccesstype)</code>  
**Returns**: <code>Promise.&lt;LicenseLoginAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.loginaccesstype.get(listentries).then(function(LicenseLoginAccessType) {
	console.log(LicenseLoginAccessType)
})
```
<a name="about.api.default.loginaccessusage"></a>
##### default.loginaccessusage : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.loginaccessusage.get"></a>
###### loginaccessusage.get([listentries]) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/loginaccessusage?listentries={listentries}
This method is manual

**Kind**: static method of <code>[loginaccessusage](#about.api.default.loginaccessusage)</code>  
**Returns**: <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.loginaccessusage.get(listentries).then(function(LicenseLoginAccessUsage) {
	console.log(LicenseLoginAccessUsage)
})
```
<a name="about.api.default.mimetype"></a>
##### default.mimetype : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.mimetype.get"></a>
###### mimetype.get([listentries]) ⇒ <code>Promise.&lt;MimeType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/mimetype?listentries={listentries}
This method is manual

**Kind**: static method of <code>[mimetype](#about.api.default.mimetype)</code>  
**Returns**: <code>Promise.&lt;MimeType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.mimetype.get(listentries).then(function(MimeType) {
	console.log(MimeType)
})
```
<a name="about.api.default.object"></a>
##### default.object : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.object.get"></a>
###### object.get([listentries]) ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/object?listentries={listentries}
This method is manual

**Kind**: static method of <code>[object](#about.api.default.object)</code>  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.object.get(listentries).then(function(AppObject) {
	console.log(AppObject)
})
```
<a name="about.api.default.printingservice"></a>
##### default.printingservice : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.printingservice.get"></a>
###### printingservice.get([listentries]) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/printingservice?listentries={listentries}
This method is manual

**Kind**: static method of <code>[printingservice](#about.api.default.printingservice)</code>  
**Returns**: <code>Promise.&lt;PrintingService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.printingservice.get(listentries).then(function(PrintingService) {
	console.log(PrintingService)
})
```
<a name="about.api.default.printingservicetemplate"></a>
##### default.printingservicetemplate : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.printingservicetemplate.get"></a>
###### printingservicetemplate.get([listentries]) ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/printingservicetemplate?listentries={listentries}
This method is manual

**Kind**: static method of <code>[printingservicetemplate](#about.api.default.printingservicetemplate)</code>  
**Returns**: <code>Promise.&lt;PrintingServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.printingservicetemplate.get(listentries).then(function(PrintingServiceTemplate) {
	console.log(PrintingServiceTemplate)
})
```
<a name="about.api.default.proxyservice"></a>
##### default.proxyservice : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.proxyservice.get"></a>
###### proxyservice.get([listentries]) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/proxyservice?listentries={listentries}
This method is manual

**Kind**: static method of <code>[proxyservice](#about.api.default.proxyservice)</code>  
**Returns**: <code>Promise.&lt;ProxyService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.proxyservice.get(listentries).then(function(ProxyService) {
	console.log(ProxyService)
})
```
<a name="about.api.default.proxyservicetemplate"></a>
##### default.proxyservicetemplate : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.proxyservicetemplate.get"></a>
###### proxyservicetemplate.get([listentries]) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/proxyservicetemplate?listentries={listentries}
This method is manual

**Kind**: static method of <code>[proxyservicetemplate](#about.api.default.proxyservicetemplate)</code>  
**Returns**: <code>Promise.&lt;ProxyServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.proxyservicetemplate.get(listentries).then(function(ProxyServiceTemplate) {
	console.log(ProxyServiceTemplate)
})
```
<a name="about.api.default.recentapp"></a>
##### default.recentapp : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.recentapp.get"></a>
###### recentapp.get([listentries]) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/recentapp?listentries={listentries}
This method is manual

**Kind**: static method of <code>[recentapp](#about.api.default.recentapp)</code>  
**Returns**: <code>Promise.&lt;UserRecentApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.recentapp.get(listentries).then(function(UserRecentApp) {
	console.log(UserRecentApp)
})
```
<a name="about.api.default.reloadtask"></a>
##### default.reloadtask : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.reloadtask.get"></a>
###### reloadtask.get([listentries]) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/reloadtask?listentries={listentries}
This method is manual

**Kind**: static method of <code>[reloadtask](#about.api.default.reloadtask)</code>  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.reloadtask.get(listentries).then(function(ReloadTask) {
	console.log(ReloadTask)
})
```
<a name="about.api.default.reloadtaskoperational"></a>
##### default.reloadtaskoperational : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.reloadtaskoperational.get"></a>
###### reloadtaskoperational.get([listentries]) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/reloadtaskoperational?listentries={listentries}
This method is manual

**Kind**: static method of <code>[reloadtaskoperational](#about.api.default.reloadtaskoperational)</code>  
**Returns**: <code>Promise.&lt;ReloadTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.reloadtaskoperational.get(listentries).then(function(ReloadTaskOperational) {
	console.log(ReloadTaskOperational)
})
```
<a name="about.api.default.removedsystemrule"></a>
##### default.removedsystemrule : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.removedsystemrule.get"></a>
###### removedsystemrule.get([listentries]) ⇒ <code>Promise.&lt;RemovedSystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/removedsystemrule?listentries={listentries}
This method is manual

**Kind**: static method of <code>[removedsystemrule](#about.api.default.removedsystemrule)</code>  
**Returns**: <code>Promise.&lt;RemovedSystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.removedsystemrule.get(listentries).then(function(RemovedSystemRule) {
	console.log(RemovedSystemRule)
})
```
<a name="about.api.default.repositoryservice"></a>
##### default.repositoryservice : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.repositoryservice.get"></a>
###### repositoryservice.get([listentries]) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/repositoryservice?listentries={listentries}
This method is manual

**Kind**: static method of <code>[repositoryservice](#about.api.default.repositoryservice)</code>  
**Returns**: <code>Promise.&lt;RepositoryService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.repositoryservice.get(listentries).then(function(RepositoryService) {
	console.log(RepositoryService)
})
```
<a name="about.api.default.repositoryservicetemplate"></a>
##### default.repositoryservicetemplate : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.repositoryservicetemplate.get"></a>
###### repositoryservicetemplate.get([listentries]) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/repositoryservicetemplate?listentries={listentries}
This method is manual

**Kind**: static method of <code>[repositoryservicetemplate](#about.api.default.repositoryservicetemplate)</code>  
**Returns**: <code>Promise.&lt;RepositoryServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.repositoryservicetemplate.get(listentries).then(function(RepositoryServiceTemplate) {
	console.log(RepositoryServiceTemplate)
})
```
<a name="about.api.default.schedulerservice"></a>
##### default.schedulerservice : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.schedulerservice.get"></a>
###### schedulerservice.get([listentries]) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/schedulerservice?listentries={listentries}
This method is manual

**Kind**: static method of <code>[schedulerservice](#about.api.default.schedulerservice)</code>  
**Returns**: <code>Promise.&lt;SchedulerService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.schedulerservice.get(listentries).then(function(SchedulerService) {
	console.log(SchedulerService)
})
```
<a name="about.api.default.schedulerservicetemplate"></a>
##### default.schedulerservicetemplate : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.schedulerservicetemplate.get"></a>
###### schedulerservicetemplate.get([listentries]) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/schedulerservicetemplate?listentries={listentries}
This method is manual

**Kind**: static method of <code>[schedulerservicetemplate](#about.api.default.schedulerservicetemplate)</code>  
**Returns**: <code>Promise.&lt;SchedulerServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.schedulerservicetemplate.get(listentries).then(function(SchedulerServiceTemplate) {
	console.log(SchedulerServiceTemplate)
})
```
<a name="about.api.default.schemaevent"></a>
##### default.schemaevent : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.schemaevent.get"></a>
###### schemaevent.get([listentries]) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/schemaevent?listentries={listentries}
This method is manual

**Kind**: static method of <code>[schemaevent](#about.api.default.schemaevent)</code>  
**Returns**: <code>Promise.&lt;SchemaEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.schemaevent.get(listentries).then(function(SchemaEvent) {
	console.log(SchemaEvent)
})
```
<a name="about.api.default.schemaeventoperational"></a>
##### default.schemaeventoperational : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.schemaeventoperational.get"></a>
###### schemaeventoperational.get([listentries]) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/schemaeventoperational?listentries={listentries}
This method is manual

**Kind**: static method of <code>[schemaeventoperational](#about.api.default.schemaeventoperational)</code>  
**Returns**: <code>Promise.&lt;SchemaEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.schemaeventoperational.get(listentries).then(function(SchemaEventOperational) {
	console.log(SchemaEventOperational)
})
```
<a name="about.api.default.selection"></a>
##### default.selection : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.selection.get"></a>
###### selection.get([listentries]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/selection?listentries={listentries}
This method is manual

**Kind**: static method of <code>[selection](#about.api.default.selection)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.selection.get(listentries).then(function(Selection) {
	console.log(Selection)
})
```
<a name="about.api.default.servernodeconfiguration"></a>
##### default.servernodeconfiguration : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.servernodeconfiguration.get"></a>
###### servernodeconfiguration.get([listentries]) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/servernodeconfiguration?listentries={listentries}
This method is manual

**Kind**: static method of <code>[servernodeconfiguration](#about.api.default.servernodeconfiguration)</code>  
**Returns**: <code>Promise.&lt;ServerNodeConfiguration&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.servernodeconfiguration.get(listentries).then(function(ServerNodeConfiguration) {
	console.log(ServerNodeConfiguration)
})
```
<a name="about.api.default.servicestatus"></a>
##### default.servicestatus : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.servicestatus.get"></a>
###### servicestatus.get([listentries]) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/servicestatus?listentries={listentries}
This method is manual

**Kind**: static method of <code>[servicestatus](#about.api.default.servicestatus)</code>  
**Returns**: <code>Promise.&lt;ServiceStatus&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.servicestatus.get(listentries).then(function(ServiceStatus) {
	console.log(ServiceStatus)
})
```
<a name="about.api.default.staticcontentreference"></a>
##### default.staticcontentreference : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.staticcontentreference.get"></a>
###### staticcontentreference.get([listentries]) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/staticcontentreference?listentries={listentries}
This method is manual

**Kind**: static method of <code>[staticcontentreference](#about.api.default.staticcontentreference)</code>  
**Returns**: <code>Promise.&lt;StaticContentReference&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.staticcontentreference.get(listentries).then(function(StaticContentReference) {
	console.log(StaticContentReference)
})
```
<a name="about.api.default.stream"></a>
##### default.stream : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.stream.get"></a>
###### stream.get([listentries]) ⇒ <code>Promise.&lt;Stream&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/stream?listentries={listentries}
This method is manual

**Kind**: static method of <code>[stream](#about.api.default.stream)</code>  
**Returns**: <code>Promise.&lt;Stream&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.stream.get(listentries).then(function(Stream) {
	console.log(Stream)
})
```
<a name="about.api.default.syncsession"></a>
##### default.syncsession : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.syncsession.get"></a>
###### syncsession.get([listentries]) ⇒ <code>Promise.&lt;SyncSession&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/syncsession?listentries={listentries}
This method is manual

**Kind**: static method of <code>[syncsession](#about.api.default.syncsession)</code>  
**Returns**: <code>Promise.&lt;SyncSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.syncsession.get(listentries).then(function(SyncSession) {
	console.log(SyncSession)
})
```
<a name="about.api.default.systeminfo"></a>
##### default.systeminfo : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.systeminfo.get"></a>
###### systeminfo.get([listentries]) ⇒ <code>Promise.&lt;SystemInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/systeminfo?listentries={listentries}
This method is manual

**Kind**: static method of <code>[systeminfo](#about.api.default.systeminfo)</code>  
**Returns**: <code>Promise.&lt;SystemInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.systeminfo.get(listentries).then(function(SystemInfo) {
	console.log(SystemInfo)
})
```
<a name="about.api.default.systemrule"></a>
##### default.systemrule : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.systemrule.get"></a>
###### systemrule.get([listentries]) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/systemrule?listentries={listentries}
This method is manual

**Kind**: static method of <code>[systemrule](#about.api.default.systemrule)</code>  
**Returns**: <code>Promise.&lt;SystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.systemrule.get(listentries).then(function(SystemRule) {
	console.log(SystemRule)
})
```
<a name="about.api.default.tabledefinition"></a>
##### default.tabledefinition : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.tabledefinition.get"></a>
###### tabledefinition.get([listentries]) ⇒ <code>Promise.&lt;TableDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/tabledefinition?listentries={listentries}
This method is manual

**Kind**: static method of <code>[tabledefinition](#about.api.default.tabledefinition)</code>  
**Returns**: <code>Promise.&lt;TableDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.tabledefinition.get(listentries).then(function(TableDefinition) {
	console.log(TableDefinition)
})
```
<a name="about.api.default.tag"></a>
##### default.tag : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.tag.get"></a>
###### tag.get([listentries]) ⇒ <code>Promise.&lt;Tag&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/tag?listentries={listentries}
This method is manual

**Kind**: static method of <code>[tag](#about.api.default.tag)</code>  
**Returns**: <code>Promise.&lt;Tag&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.tag.get(listentries).then(function(Tag) {
	console.log(Tag)
})
```
<a name="about.api.default.tempcontent"></a>
##### default.tempcontent : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.tempcontent.get"></a>
###### tempcontent.get([listentries]) ⇒ <code>Promise.&lt;TempContent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/tempcontent?listentries={listentries}
This method is manual

**Kind**: static method of <code>[tempcontent](#about.api.default.tempcontent)</code>  
**Returns**: <code>Promise.&lt;TempContent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.tempcontent.get(listentries).then(function(TempContent) {
	console.log(TempContent)
})
```
<a name="about.api.default.termsacceptance"></a>
##### default.termsacceptance : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.termsacceptance.get"></a>
###### termsacceptance.get([listentries]) ⇒ <code>Promise.&lt;TermsAcceptance&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/termsacceptance?listentries={listentries}
This method is manual

**Kind**: static method of <code>[termsacceptance](#about.api.default.termsacceptance)</code>  
**Returns**: <code>Promise.&lt;TermsAcceptance&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.termsacceptance.get(listentries).then(function(TermsAcceptance) {
	console.log(TermsAcceptance)
})
```
<a name="about.api.default.user"></a>
##### default.user : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.user.get"></a>
###### user.get([listentries]) ⇒ <code>Promise.&lt;User&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/user?listentries={listentries}
This method is manual

**Kind**: static method of <code>[user](#about.api.default.user)</code>  
**Returns**: <code>Promise.&lt;User&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.user.get(listentries).then(function(User) {
	console.log(User)
})
```
<a name="about.api.default.useraccessgroup"></a>
##### default.useraccessgroup : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.useraccessgroup.get"></a>
###### useraccessgroup.get([listentries]) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/useraccessgroup?listentries={listentries}
This method is manual

**Kind**: static method of <code>[useraccessgroup](#about.api.default.useraccessgroup)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.useraccessgroup.get(listentries).then(function(LicenseUserAccessGroup) {
	console.log(LicenseUserAccessGroup)
})
```
<a name="about.api.default.useraccesstype"></a>
##### default.useraccesstype : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.useraccesstype.get"></a>
###### useraccesstype.get([listentries]) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/useraccesstype?listentries={listentries}
This method is manual

**Kind**: static method of <code>[useraccesstype](#about.api.default.useraccesstype)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.useraccesstype.get(listentries).then(function(LicenseUserAccessType) {
	console.log(LicenseUserAccessType)
})
```
<a name="about.api.default.useraccessusage"></a>
##### default.useraccessusage : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.useraccessusage.get"></a>
###### useraccessusage.get([listentries]) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/useraccessusage?listentries={listentries}
This method is manual

**Kind**: static method of <code>[useraccessusage](#about.api.default.useraccessusage)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.useraccessusage.get(listentries).then(function(LicenseUserAccessUsage) {
	console.log(LicenseUserAccessUsage)
})
```
<a name="about.api.default.userdirectory"></a>
##### default.userdirectory : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.userdirectory.get"></a>
###### userdirectory.get([listentries]) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/userdirectory?listentries={listentries}
This method is manual

**Kind**: static method of <code>[userdirectory](#about.api.default.userdirectory)</code>  
**Returns**: <code>Promise.&lt;UserDirectory&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.userdirectory.get(listentries).then(function(UserDirectory) {
	console.log(UserDirectory)
})
```
<a name="about.api.default.userdirectorytemplate"></a>
##### default.userdirectorytemplate : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.userdirectorytemplate.get"></a>
###### userdirectorytemplate.get([listentries]) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/userdirectorytemplate?listentries={listentries}
This method is manual

**Kind**: static method of <code>[userdirectorytemplate](#about.api.default.userdirectorytemplate)</code>  
**Returns**: <code>Promise.&lt;UserDirectoryTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.userdirectorytemplate.get(listentries).then(function(UserDirectoryTemplate) {
	console.log(UserDirectoryTemplate)
})
```
<a name="about.api.default.usersynctask"></a>
##### default.usersynctask : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.usersynctask.get"></a>
###### usersynctask.get([listentries]) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/usersynctask?listentries={listentries}
This method is manual

**Kind**: static method of <code>[usersynctask](#about.api.default.usersynctask)</code>  
**Returns**: <code>Promise.&lt;UserSyncTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.usersynctask.get(listentries).then(function(UserSyncTask) {
	console.log(UserSyncTask)
})
```
<a name="about.api.default.usersynctaskoperational"></a>
##### default.usersynctaskoperational : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.usersynctaskoperational.get"></a>
###### usersynctaskoperational.get([listentries]) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/usersynctaskoperational?listentries={listentries}
This method is manual

**Kind**: static method of <code>[usersynctaskoperational](#about.api.default.usersynctaskoperational)</code>  
**Returns**: <code>Promise.&lt;UserSyncTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.usersynctaskoperational.get(listentries).then(function(UserSyncTaskOperational) {
	console.log(UserSyncTaskOperational)
})
```
<a name="about.api.default.virtualproxyconfig"></a>
##### default.virtualproxyconfig : <code>object</code>
**Kind**: static namespace of <code>[default](#about.api.default)</code>  
<a name="about.api.default.virtualproxyconfig.get"></a>
###### virtualproxyconfig.get([listentries]) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default/virtualproxyconfig?listentries={listentries}
This method is manual

**Kind**: static method of <code>[virtualproxyconfig](#about.api.default.virtualproxyconfig)</code>  
**Returns**: <code>Promise.&lt;VirtualProxyConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.virtualproxyconfig.get(listentries).then(function(VirtualProxyConfig) {
	console.log(VirtualProxyConfig)
})
```
<a name="about.api.default.get"></a>
##### default.get([listentries]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/default?listentries={listentries}
This method is manual

**Kind**: static method of <code>[default](#about.api.default)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [listentries] | <code>string</code> | the listentries parameter |

**Example**  
```javascript
qrsApi.about.api.default.get(listentries).then(function(Object) {
	console.log(Object)
})
```
<a name="about.api.description"></a>
#### api.description : <code>object</code>
**Kind**: static namespace of <code>[api](#about.api)</code>  
<a name="about.api.description.get"></a>
##### description.get([extended], [method], [format]) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/description?extended={extended}&method={method}&format={format}
This method is manual

**Kind**: static method of <code>[description](#about.api.description)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [extended] | <code>string</code> | the extended parameter |
| [method] | <code>string</code> | the method parameter |
| [format] | <code>string</code> | the format parameter |

**Example**  
```javascript
qrsApi.about.api.description.get(extended, method, format).then(function(Array.<String>) {
	console.log(Array.<String>)
})
```
<a name="about.api.enums"></a>
#### api.enums : <code>object</code>
**Kind**: static namespace of <code>[api](#about.api)</code>  
<a name="about.api.enums.get"></a>
##### enums.get() ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/enums
This method is manual

**Kind**: static method of <code>[enums](#about.api.enums)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.about.api.enums.get().then(function(Object) {
	console.log(Object)
})
```
<a name="about.api.relations"></a>
#### api.relations : <code>object</code>
**Kind**: static namespace of <code>[api](#about.api)</code>  
<a name="about.api.relations.get"></a>
##### relations.get() ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about/api/relations
This method is manual

**Kind**: static method of <code>[relations](#about.api.relations)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.about.api.relations.get().then(function(Array.<String>) {
	console.log(Array.<String>)
})
```
<a name="about.get"></a>
### about.get() ⇒ <code>Promise.&lt;About&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/about
This method is manual

**Kind**: static method of <code>[about](#about)</code>  
**Returns**: <code>Promise.&lt;About&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.about.get().then(function(About) {
	console.log(About)
})
```
