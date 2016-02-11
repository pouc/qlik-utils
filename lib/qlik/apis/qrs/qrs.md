<a name="qrs"></a>
## qrs : <code>object</code>
Wrapper for helper functions for Qlik Sense QRS API.[See parent documentation](../../../qlik.md)

**Kind**: global namespace  

* [qrs](#qrs) : <code>object</code>
  * [.about](#qrs.about) : <code>object</code>
  * [.app](#qrs.app) : <code>object</code>
  * [.appavailability](#qrs.appavailability) : <code>object</code>
  * [.appcomponent](#qrs.appcomponent) : <code>object</code>
  * [.appcontent](#qrs.appcontent) : <code>object</code>
  * [.appcontentquota](#qrs.appcontentquota) : <code>object</code>
  * [.applicationlog](#qrs.applicationlog) : <code>object</code>
  * [.appseedinfo](#qrs.appseedinfo) : <code>object</code>
  * [.appstatus](#qrs.appstatus) : <code>object</code>
  * [.binarydelete](#qrs.binarydelete) : <code>object</code>
  * [.binarydownload](#qrs.binarydownload) : <code>object</code>
  * [.binarysyncruleevaluation](#qrs.binarysyncruleevaluation) : <code>object</code>
  * [.cache](#qrs.cache) : <code>object</code>
  * [.certificatedistribution](#qrs.certificatedistribution) : <code>object</code>
  * [.compositeevent](#qrs.compositeevent) : <code>object</code>
  * [.compositeeventoperational](#qrs.compositeeventoperational) : <code>object</code>
  * [.compositeeventruleoperational](#qrs.compositeeventruleoperational) : <code>object</code>
  * [.contentlibrary](#qrs.contentlibrary) : <code>object</code>
  * [.custompropertydefinition](#qrs.custompropertydefinition) : <code>object</code>
  * [.dataconnection](#qrs.dataconnection) : <code>object</code>
  * [.download](#qrs.download) : <code>object</code>
  * [.engineservice](#qrs.engineservice) : <code>object</code>
  * [.event](#qrs.event) : <code>object</code>
  * [.eventoperational](#qrs.eventoperational) : <code>object</code>
  * [.executionresult](#qrs.executionresult) : <code>object</code>
  * [.executionsession](#qrs.executionsession) : <code>object</code>
  * [.extension](#qrs.extension) : <code>object</code>
  * [.externalchangeinfo](#qrs.externalchangeinfo) : <code>object</code>
  * [.externalprogramtask](#qrs.externalprogramtask) : <code>object</code>
  * [.externalprogramtaskoperational](#qrs.externalprogramtaskoperational) : <code>object</code>
  * [.filereference](#qrs.filereference) : <code>object</code>
  * [.license](#qrs.license) : <code>object</code>
  * [.licenseaccessusage](#qrs.licenseaccessusage) : <code>object</code>
  * [.loadbalancing](#qrs.loadbalancing) : <code>object</code>
  * [.log](#qrs.log) : <code>object</code>
  * [.managementconsolelog](#qrs.managementconsolelog) : <code>object</code>
  * [.mimetype](#qrs.mimetype) : <code>object</code>
  * [.notification](#qrs.notification) : <code>object</code>
  * [.printingservice](#qrs.printingservice) : <code>object</code>
  * [.proxyservice](#qrs.proxyservice) : <code>object</code>
  * [.proxyservicecertificate](#qrs.proxyservicecertificate) : <code>object</code>
  * [.reloadtask](#qrs.reloadtask) : <code>object</code>
  * [.reloadtaskoperational](#qrs.reloadtaskoperational) : <code>object</code>
  * [.repositoryservice](#qrs.repositoryservice) : <code>object</code>
  * [.schedulerservice](#qrs.schedulerservice) : <code>object</code>
  * [.schemaevent](#qrs.schemaevent) : <code>object</code>
  * [.schemaeventoperational](#qrs.schemaeventoperational) : <code>object</code>
  * [.selection](#qrs.selection) : <code>object</code>
  * [.servernodeconfiguration](#qrs.servernodeconfiguration) : <code>object</code>
  * [.servernoderegistration](#qrs.servernoderegistration) : <code>object</code>
  * [.servicestatus](#qrs.servicestatus) : <code>object</code>
  * [.staticcontent](#qrs.staticcontent) : <code>object</code>
  * [.staticcontentreference](#qrs.staticcontentreference) : <code>object</code>
  * [.staticcontentreferencebase](#qrs.staticcontentreferencebase) : <code>object</code>
  * [.stream](#qrs.stream) : <code>object</code>
  * [.sync](#qrs.sync) : <code>object</code>
  * [.syncsession](#qrs.syncsession) : <code>object</code>
  * [.systeminfo](#qrs.systeminfo) : <code>object</code>
  * [.systemrule](#qrs.systemrule) : <code>object</code>
  * [.tag](#qrs.tag) : <code>object</code>
  * [.task](#qrs.task) : <code>object</code>
  * [.taskoperational](#qrs.taskoperational) : <code>object</code>
  * [.tempcontent](#qrs.tempcontent) : <code>object</code>
  * [.user](#qrs.user) : <code>object</code>
  * [.userdirectory](#qrs.userdirectory) : <code>object</code>
  * [.userdirectoryconnector](#qrs.userdirectoryconnector) : <code>object</code>
  * [.usersynctask](#qrs.usersynctask) : <code>object</code>
  * [.usersynctaskoperational](#qrs.usersynctaskoperational) : <code>object</code>
  * [.virtualproxyconfig](#qrs.virtualproxyconfig) : <code>object</code>

<a name="qrs.about"></a>
### qrs.about : <code>object</code>
about endpoint[See documentation](qrs.sdk.about.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar about = qrsApi.about;```
<a name="qrs.app"></a>
### qrs.app : <code>object</code>
app endpoint[See documentation](qrs.sdk.app.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar app = qrsApi.app;```
<a name="qrs.appavailability"></a>
### qrs.appavailability : <code>object</code>
appavailability endpoint[See documentation](qrs.sdk.appavailability.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar appavailability = qrsApi.appavailability;```
<a name="qrs.appcomponent"></a>
### qrs.appcomponent : <code>object</code>
appcomponent endpoint[See documentation](qrs.sdk.appcomponent.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar appcomponent = qrsApi.appcomponent;```
<a name="qrs.appcontent"></a>
### qrs.appcontent : <code>object</code>
appcontent endpoint[See documentation](qrs.sdk.appcontent.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar appcontent = qrsApi.appcontent;```
<a name="qrs.appcontentquota"></a>
### qrs.appcontentquota : <code>object</code>
appcontentquota endpoint[See documentation](qrs.sdk.appcontentquota.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar appcontentquota = qrsApi.appcontentquota;```
<a name="qrs.applicationlog"></a>
### qrs.applicationlog : <code>object</code>
applicationlog endpoint[See documentation](qrs.sdk.applicationlog.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar applicationlog = qrsApi.applicationlog;```
<a name="qrs.appseedinfo"></a>
### qrs.appseedinfo : <code>object</code>
appseedinfo endpoint[See documentation](qrs.sdk.appseedinfo.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar appseedinfo = qrsApi.appseedinfo;```
<a name="qrs.appstatus"></a>
### qrs.appstatus : <code>object</code>
appstatus endpoint[See documentation](qrs.sdk.appstatus.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar appstatus = qrsApi.appstatus;```
<a name="qrs.binarydelete"></a>
### qrs.binarydelete : <code>object</code>
binarydelete endpoint[See documentation](qrs.sdk.binarydelete.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar binarydelete = qrsApi.binarydelete;```
<a name="qrs.binarydownload"></a>
### qrs.binarydownload : <code>object</code>
binarydownload endpoint[See documentation](qrs.sdk.binarydownload.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar binarydownload = qrsApi.binarydownload;```
<a name="qrs.binarysyncruleevaluation"></a>
### qrs.binarysyncruleevaluation : <code>object</code>
binarysyncruleevaluation endpoint[See documentation](qrs.sdk.binarysyncruleevaluation.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar binarysyncruleevaluation = qrsApi.binarysyncruleevaluation;```
<a name="qrs.cache"></a>
### qrs.cache : <code>object</code>
cache endpoint[See documentation](qrs.sdk.cache.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar cache = qrsApi.cache;```
<a name="qrs.certificatedistribution"></a>
### qrs.certificatedistribution : <code>object</code>
certificatedistribution endpoint[See documentation](qrs.sdk.certificatedistribution.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar certificatedistribution = qrsApi.certificatedistribution;```
<a name="qrs.compositeevent"></a>
### qrs.compositeevent : <code>object</code>
compositeevent endpoint[See documentation](qrs.sdk.compositeevent.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar compositeevent = qrsApi.compositeevent;```
<a name="qrs.compositeeventoperational"></a>
### qrs.compositeeventoperational : <code>object</code>
compositeeventoperational endpoint[See documentation](qrs.sdk.compositeeventoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar compositeeventoperational = qrsApi.compositeeventoperational;```
<a name="qrs.compositeeventruleoperational"></a>
### qrs.compositeeventruleoperational : <code>object</code>
compositeeventruleoperational endpoint[See documentation](qrs.sdk.compositeeventruleoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar compositeeventruleoperational = qrsApi.compositeeventruleoperational;```
<a name="qrs.contentlibrary"></a>
### qrs.contentlibrary : <code>object</code>
contentlibrary endpoint[See documentation](qrs.sdk.contentlibrary.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar contentlibrary = qrsApi.contentlibrary;```
<a name="qrs.custompropertydefinition"></a>
### qrs.custompropertydefinition : <code>object</code>
custompropertydefinition endpoint[See documentation](qrs.sdk.custompropertydefinition.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar custompropertydefinition = qrsApi.custompropertydefinition;```
<a name="qrs.dataconnection"></a>
### qrs.dataconnection : <code>object</code>
dataconnection endpoint[See documentation](qrs.sdk.dataconnection.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar dataconnection = qrsApi.dataconnection;```
<a name="qrs.download"></a>
### qrs.download : <code>object</code>
download endpoint[See documentation](qrs.sdk.download.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar download = qrsApi.download;```
<a name="qrs.engineservice"></a>
### qrs.engineservice : <code>object</code>
engineservice endpoint[See documentation](qrs.sdk.engineservice.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar engineservice = qrsApi.engineservice;```
<a name="qrs.event"></a>
### qrs.event : <code>object</code>
event endpoint[See documentation](qrs.sdk.event.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar event = qrsApi.event;```
<a name="qrs.eventoperational"></a>
### qrs.eventoperational : <code>object</code>
eventoperational endpoint[See documentation](qrs.sdk.eventoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar eventoperational = qrsApi.eventoperational;```
<a name="qrs.executionresult"></a>
### qrs.executionresult : <code>object</code>
executionresult endpoint[See documentation](qrs.sdk.executionresult.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar executionresult = qrsApi.executionresult;```
<a name="qrs.executionsession"></a>
### qrs.executionsession : <code>object</code>
executionsession endpoint[See documentation](qrs.sdk.executionsession.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar executionsession = qrsApi.executionsession;```
<a name="qrs.extension"></a>
### qrs.extension : <code>object</code>
extension endpoint[See documentation](qrs.sdk.extension.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar extension = qrsApi.extension;```
<a name="qrs.externalchangeinfo"></a>
### qrs.externalchangeinfo : <code>object</code>
externalchangeinfo endpoint[See documentation](qrs.sdk.externalchangeinfo.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar externalchangeinfo = qrsApi.externalchangeinfo;```
<a name="qrs.externalprogramtask"></a>
### qrs.externalprogramtask : <code>object</code>
externalprogramtask endpoint[See documentation](qrs.sdk.externalprogramtask.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar externalprogramtask = qrsApi.externalprogramtask;```
<a name="qrs.externalprogramtaskoperational"></a>
### qrs.externalprogramtaskoperational : <code>object</code>
externalprogramtaskoperational endpoint[See documentation](qrs.sdk.externalprogramtaskoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar externalprogramtaskoperational = qrsApi.externalprogramtaskoperational;```
<a name="qrs.filereference"></a>
### qrs.filereference : <code>object</code>
filereference endpoint[See documentation](qrs.sdk.filereference.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar filereference = qrsApi.filereference;```
<a name="qrs.license"></a>
### qrs.license : <code>object</code>
license endpoint[See documentation](qrs.sdk.license.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar license = qrsApi.license;```
<a name="qrs.licenseaccessusage"></a>
### qrs.licenseaccessusage : <code>object</code>
licenseaccessusage endpoint[See documentation](qrs.sdk.licenseaccessusage.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar licenseaccessusage = qrsApi.licenseaccessusage;```
<a name="qrs.loadbalancing"></a>
### qrs.loadbalancing : <code>object</code>
loadbalancing endpoint[See documentation](qrs.sdk.loadbalancing.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar loadbalancing = qrsApi.loadbalancing;```
<a name="qrs.log"></a>
### qrs.log : <code>object</code>
log endpoint[See documentation](qrs.sdk.log.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar log = qrsApi.log;```
<a name="qrs.managementconsolelog"></a>
### qrs.managementconsolelog : <code>object</code>
managementconsolelog endpoint[See documentation](qrs.sdk.managementconsolelog.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar managementconsolelog = qrsApi.managementconsolelog;```
<a name="qrs.mimetype"></a>
### qrs.mimetype : <code>object</code>
mimetype endpoint[See documentation](qrs.sdk.mimetype.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar mimetype = qrsApi.mimetype;```
<a name="qrs.notification"></a>
### qrs.notification : <code>object</code>
notification endpoint[See documentation](qrs.sdk.notification.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar notification = qrsApi.notification;```
<a name="qrs.printingservice"></a>
### qrs.printingservice : <code>object</code>
printingservice endpoint[See documentation](qrs.sdk.printingservice.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar printingservice = qrsApi.printingservice;```
<a name="qrs.proxyservice"></a>
### qrs.proxyservice : <code>object</code>
proxyservice endpoint[See documentation](qrs.sdk.proxyservice.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar proxyservice = qrsApi.proxyservice;```
<a name="qrs.proxyservicecertificate"></a>
### qrs.proxyservicecertificate : <code>object</code>
proxyservicecertificate endpoint[See documentation](qrs.sdk.proxyservicecertificate.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar proxyservicecertificate = qrsApi.proxyservicecertificate;```
<a name="qrs.reloadtask"></a>
### qrs.reloadtask : <code>object</code>
reloadtask endpoint[See documentation](qrs.sdk.reloadtask.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar reloadtask = qrsApi.reloadtask;```
<a name="qrs.reloadtaskoperational"></a>
### qrs.reloadtaskoperational : <code>object</code>
reloadtaskoperational endpoint[See documentation](qrs.sdk.reloadtaskoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar reloadtaskoperational = qrsApi.reloadtaskoperational;```
<a name="qrs.repositoryservice"></a>
### qrs.repositoryservice : <code>object</code>
repositoryservice endpoint[See documentation](qrs.sdk.repositoryservice.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar repositoryservice = qrsApi.repositoryservice;```
<a name="qrs.schedulerservice"></a>
### qrs.schedulerservice : <code>object</code>
schedulerservice endpoint[See documentation](qrs.sdk.schedulerservice.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar schedulerservice = qrsApi.schedulerservice;```
<a name="qrs.schemaevent"></a>
### qrs.schemaevent : <code>object</code>
schemaevent endpoint[See documentation](qrs.sdk.schemaevent.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar schemaevent = qrsApi.schemaevent;```
<a name="qrs.schemaeventoperational"></a>
### qrs.schemaeventoperational : <code>object</code>
schemaeventoperational endpoint[See documentation](qrs.sdk.schemaeventoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar schemaeventoperational = qrsApi.schemaeventoperational;```
<a name="qrs.selection"></a>
### qrs.selection : <code>object</code>
selection endpoint[See documentation](qrs.sdk.selection.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar selection = qrsApi.selection;```
<a name="qrs.servernodeconfiguration"></a>
### qrs.servernodeconfiguration : <code>object</code>
servernodeconfiguration endpoint[See documentation](qrs.sdk.servernodeconfiguration.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar servernodeconfiguration = qrsApi.servernodeconfiguration;```
<a name="qrs.servernoderegistration"></a>
### qrs.servernoderegistration : <code>object</code>
servernoderegistration endpoint[See documentation](qrs.sdk.servernoderegistration.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar servernoderegistration = qrsApi.servernoderegistration;```
<a name="qrs.servicestatus"></a>
### qrs.servicestatus : <code>object</code>
servicestatus endpoint[See documentation](qrs.sdk.servicestatus.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar servicestatus = qrsApi.servicestatus;```
<a name="qrs.staticcontent"></a>
### qrs.staticcontent : <code>object</code>
staticcontent endpoint[See documentation](qrs.sdk.staticcontent.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar staticcontent = qrsApi.staticcontent;```
<a name="qrs.staticcontentreference"></a>
### qrs.staticcontentreference : <code>object</code>
staticcontentreference endpoint[See documentation](qrs.sdk.staticcontentreference.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar staticcontentreference = qrsApi.staticcontentreference;```
<a name="qrs.staticcontentreferencebase"></a>
### qrs.staticcontentreferencebase : <code>object</code>
staticcontentreferencebase endpoint[See documentation](qrs.sdk.staticcontentreferencebase.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar staticcontentreferencebase = qrsApi.staticcontentreferencebase;```
<a name="qrs.stream"></a>
### qrs.stream : <code>object</code>
stream endpoint[See documentation](qrs.sdk.stream.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar stream = qrsApi.stream;```
<a name="qrs.sync"></a>
### qrs.sync : <code>object</code>
sync endpoint[See documentation](qrs.sdk.sync.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar sync = qrsApi.sync;```
<a name="qrs.syncsession"></a>
### qrs.syncsession : <code>object</code>
syncsession endpoint[See documentation](qrs.sdk.syncsession.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar syncsession = qrsApi.syncsession;```
<a name="qrs.systeminfo"></a>
### qrs.systeminfo : <code>object</code>
systeminfo endpoint[See documentation](qrs.sdk.systeminfo.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar systeminfo = qrsApi.systeminfo;```
<a name="qrs.systemrule"></a>
### qrs.systemrule : <code>object</code>
systemrule endpoint[See documentation](qrs.sdk.systemrule.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar systemrule = qrsApi.systemrule;```
<a name="qrs.tag"></a>
### qrs.tag : <code>object</code>
tag endpoint[See documentation](qrs.sdk.tag.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar tag = qrsApi.tag;```
<a name="qrs.task"></a>
### qrs.task : <code>object</code>
task endpoint[See documentation](qrs.sdk.task.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar task = qrsApi.task;```
<a name="qrs.taskoperational"></a>
### qrs.taskoperational : <code>object</code>
taskoperational endpoint[See documentation](qrs.sdk.taskoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar taskoperational = qrsApi.taskoperational;```
<a name="qrs.tempcontent"></a>
### qrs.tempcontent : <code>object</code>
tempcontent endpoint[See documentation](qrs.sdk.tempcontent.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar tempcontent = qrsApi.tempcontent;```
<a name="qrs.user"></a>
### qrs.user : <code>object</code>
user endpoint[See documentation](qrs.sdk.user.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar user = qrsApi.user;```
<a name="qrs.userdirectory"></a>
### qrs.userdirectory : <code>object</code>
userdirectory endpoint[See documentation](qrs.sdk.userdirectory.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar userdirectory = qrsApi.userdirectory;```
<a name="qrs.userdirectoryconnector"></a>
### qrs.userdirectoryconnector : <code>object</code>
userdirectoryconnector endpoint[See documentation](qrs.sdk.userdirectoryconnector.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar userdirectoryconnector = qrsApi.userdirectoryconnector;```
<a name="qrs.usersynctask"></a>
### qrs.usersynctask : <code>object</code>
usersynctask endpoint[See documentation](qrs.sdk.usersynctask.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar usersynctask = qrsApi.usersynctask;```
<a name="qrs.usersynctaskoperational"></a>
### qrs.usersynctaskoperational : <code>object</code>
usersynctaskoperational endpoint[See documentation](qrs.sdk.usersynctaskoperational.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar usersynctaskoperational = qrsApi.usersynctaskoperational;```
<a name="qrs.virtualproxyconfig"></a>
### qrs.virtualproxyconfig : <code>object</code>
virtualproxyconfig endpoint[See documentation](qrs.sdk.virtualproxyconfig.md)

**Kind**: static namespace of <code>[qrs](#qrs)</code>  
**Example**  
```javascriptvar virtualproxyconfig = qrsApi.virtualproxyconfig;```
