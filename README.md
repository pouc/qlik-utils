## Modules
<dl>
<dt><a href="#module_qlik-utils">qlik-utils</a></dt>
<dd><p>A set of utility functions / classes for simplifying the call to Qlik Sense APIs</p>
</dd>
</dl>
## Objects
<dl>
<dt><a href="#Array">Array</a> : <code>object</code></dt>
<dd><p>Wrapper for helper functions for arrays.</p>
</dd>
<dt><a href="#Core">Core</a> : <code>object</code></dt>
<dd><p>Wrapper for helper functions.</p>
</dd>
<dt><a href="#Object">Object</a> : <code>object</code></dt>
<dd><p>Wrapper for helper functions for objects.</p>
</dd>
<dt><a href="#Advanced">Advanced</a> : <code>object</code></dt>
<dd><p>Wrapper for helper functions for Qlik Sense.</p>
</dd>
<dt><a href="#Base">Base</a> : <code>object</code></dt>
<dd><p>Wrapper for helper functions for Qlik Sense.</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/{id}
This method is manual</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;App&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;App&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppContent&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/content/{id}?privileges={appendprivileges}
This method is manual</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppDataSegment&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/datasegment/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppInternal&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/internal/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/object/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppObject&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/object/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;AppObject&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/app/object/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppAvailability&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/appavailability/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppContentQuota&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;AppContentQuota&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/appseedinfo/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;AppStatus&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/appstatus/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;BinaryDelete&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/binarydelete/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;BinaryDownload&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/binarydownload/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/binarysyncruleevaluation/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get()</a> ⇒ <code>Promise.&lt;String&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/certificatedistribution/distributecertificate/{servernodeconfigurationid}
This method is manual</p>
</dd>
<dt><a href="#head">head()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/certificatedistribution/redistributecertificate/{servernodeconfigurationid}
This method is manual</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;CompositeEvent&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;CompositeEvent&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeeventoperational/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeeventoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeeventoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeeventruleoperational/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeeventruleoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/compositeeventruleoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/contentlibrary/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ContentLibrary&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/contentlibrary/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ContentLibrary&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/contentlibrary/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/custompropertydefinition/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/custompropertydefinition/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/custompropertydefinition/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/dataconnection/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;DataConnection&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/dataconnection/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;DataConnection&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/dataconnection/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get()</a> ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/download/app/{id}/{exportticketid}/{localfilename}
This method is manual</p>
</dd>
<dt><a href="#get">get()</a> ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/download/reloadtask/{downloadticketid}/{localfilename}
This method is manual</p>
</dd>
<dt><a href="#get">get()</a> ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/download/samlmetadata/{exportticketid}/{localfilename}
This method is manual</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;EngineService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/engineservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;EngineService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/engineservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/engineservice/template/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/engineservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/engineservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionresult/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ExecutionResult&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionresult/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ExecutionResult&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionresult/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionresult/detail/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionresult/detail/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionresult/detail/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ExecutionSession&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ExecutionSession&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/extension/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;Extension&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/extension/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;Extension&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/extension/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/extension/name/{extension}
This method is manual</p>
</dd>
<dt><a href="#post">post(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;Extension&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/extension/name/{extension}?privileges={appendprivileges}
This method is manual</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalchangeinfo/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalchangeinfo/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalchangeinfo/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtaskoperational/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;FileReference&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/filereference/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/{id}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [control], [appendprivileges])</a> ⇒ <code>Promise.&lt;License&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/{id}?control={control}&amp;privileges={appendprivileges}
This method is manual</p>
</dd>
<dt><a href="#put">put(postParams, [control], [appendprivileges])</a> ⇒ <code>Promise.&lt;License&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/datamarket/{id}?control={control}&amp;privileges={appendprivileges}
This method is manual</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccessusage/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessusage/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#post">post(postParams)</a> ⇒ <code>Promise.&lt;Guid&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/log/archive/{logrootsubfolder}
This method is manual</p>
</dd>
<dt><a href="#post">post(postParams)</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/log/rolled/{logrootsubfolder}
This method is manual</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/mimetype/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;MimeType&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/mimetype/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;MimeType&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/mimetype/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;PrintingService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/printingservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;PrintingService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/printingservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/printingservice/template/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/printingservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/printingservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ProxyService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/proxyservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ProxyService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/proxyservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/proxyservice/template/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/proxyservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/proxyservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ReloadTask&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ReloadTask&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/reloadtaskoperational/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/reloadtaskoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/reloadtaskoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;RepositoryService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/repositoryservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;RepositoryService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/repositoryservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/repositoryservice/template/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/repositoryservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/repositoryservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;SchedulerService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schedulerservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;SchedulerService&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schedulerservice/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schedulerservice/template/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schedulerservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schedulerservice/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schemaevent/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;SchemaEvent&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schemaevent/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;SchemaEvent&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schemaevent/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/selection/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;Selection&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/selection/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;Selection&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/selection/{id}?privileges={appendprivileges}
This method is manual</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/servernodeconfiguration/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/servernodeconfiguration/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/servernodeconfiguration/{id}?privileges={appendprivileges}
This method is manual</p>
</dd>
<dt><a href="#get">get()</a> ⇒ <code>Promise.&lt;String&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/servernoderegistration/start/{servernodeconfigurationid}
This method is manual</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;ServiceStatus&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/servicestatus/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;StaticContentReference&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/staticcontentreference/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/stream/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;Stream&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/stream/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;Stream&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/stream/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;SyncSession&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/syncsession/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/systemrule/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;SystemRule&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/systemrule/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;SystemRule&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/systemrule/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/tag/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;Tag&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/tag/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;Tag&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/tag/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;TempContent&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/tempcontent/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;User&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;User&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/followingapp/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/followingapp/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/followingapp/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/recentapp/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;UserRecentApp&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/recentapp/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;UserRecentApp&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/recentapp/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#get">get()</a> ⇒ <code>Promise.&lt;Boolean&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/user/sync/{userdirectory}/{userid}
This method is manual</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;UserDirectory&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;UserDirectory&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;UserSyncTask&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;UserSyncTask&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/usersynctaskoperational/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/usersynctaskoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/usersynctaskoperational/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#delete">delete()</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/virtualproxyconfig/{id}
This method is generated</p>
</dd>
<dt><a href="#get">get([appendprivileges])</a> ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/virtualproxyconfig/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
<dt><a href="#put">put(postParams, [appendprivileges])</a> ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code></dt>
<dd><p>Makes a request on the Qlik Sense QRS API:
/qrs/virtualproxyconfig/{id}?privileges={appendprivileges}
This method is generated</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#options">options</a> : <code><a href="#Object">Object</a></code></dt>
<dd></dd>
<dt><a href="#ticketParams">ticketParams</a> : <code><a href="#Object">Object</a></code></dt>
<dd></dd>
<dt><a href="#ticket">ticket</a> : <code><a href="#Object">Object</a></code></dt>
<dd></dd>
</dl>
<a name="module_qlik-utils"></a>
## qlik-utils
A set of utility functions / classes for simplifying the call to Qlik Sense APIs

**Author:** Loic Formont  
**License**: MIT Licensed  
**Copyright**: Copyright (C) 2015 Loic Formont  
**Example**  
```js
var utils = require("qlik-utils");
```

* [qlik-utils](#module_qlik-utils)
  * ~~[.ifnotundef()](#module_qlik-utils.ifnotundef)~~
  * ~~[.generateXrfkey()](#module_qlik-utils.generateXrfkey)~~
  * ~~[.request()](#module_qlik-utils.request)~~
  * ~~[.getTicket()](#module_qlik-utils.getTicket)~~
  * ~~[.openSession()](#module_qlik-utils.openSession)~~
  * ~~[.addToWhiteList()](#module_qlik-utils.addToWhiteList)~~
  * ~~[.loop()](#module_qlik-utils.loop)~~
  * ~~[.setTimeout2Promise()](#module_qlik-utils.setTimeout2Promise)~~
  * ~~[.dynamicAppClone()](#module_qlik-utils.dynamicAppClone)~~

<a name="module_qlik-utils.ifnotundef"></a>
### ~~utils.ifnotundef()~~
***Deprecated***

Deprecated since version 2.0. Use Core.ifNotUndef instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.generateXrfkey"></a>
### ~~utils.generateXrfkey()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.generateXrfKey instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.request"></a>
### ~~utils.request()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.request instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.getTicket"></a>
### ~~utils.getTicket()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.getTicket instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.openSession"></a>
### ~~utils.openSession()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.openSession instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.addToWhiteList"></a>
### ~~utils.addToWhiteList()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.addToWhiteList instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.loop"></a>
### ~~utils.loop()~~
***Deprecated***

Deprecated since version 2.0. Use Core.loop instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.setTimeout2Promise"></a>
### ~~utils.setTimeout2Promise()~~
***Deprecated***

Deprecated since version 2.0. Use Core.setTimeout2Promise instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.dynamicAppClone"></a>
### ~~utils.dynamicAppClone()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.dynamicAppClone instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="Array"></a>
## Array : <code>object</code>
Wrapper for helper functions for arrays.

**Kind**: global namespace  

* [Array](#Array) : <code>object</code>
  * [.chunk(array, n)](#Array.chunk) ⇒ <code>[Array.&lt;Array&gt;](#Array)</code>
  * [.removeIf(array, callback)](#Array.removeIf)

<a name="Array.chunk"></a>
### Array.chunk(array, n) ⇒ <code>[Array.&lt;Array&gt;](#Array)</code>
Cuts an array in chunks of predefined size

**Kind**: static method of <code>[Array](#Array)</code>  
**Returns**: <code>[Array.&lt;Array&gt;](#Array)</code> - An array of chunks  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>[Array](#Array)</code> | an array to cut in chunks |
| n | <code>int</code> | the chunk size |

<a name="Array.removeIf"></a>
### Array.removeIf(array, callback)
Remove object from an array on condition

**Kind**: static method of <code>[Array](#Array)</code>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>[Array](#Array)</code> | an array to remove stuff from |
| callback | <code>function</code> | the function containing the condition |

<a name="Core"></a>
## Core : <code>object</code>
Wrapper for helper functions.

**Kind**: global namespace  

* [Core](#Core) : <code>object</code>
  * [.Task](#Core.Task)
    * [new Task()](#new_Core.Task_new)
    * _instance_
      * [.once(func)](#Core.Task+once)
      * [.bind(func)](#Core.Task+bind)
      * [.unbind(func)](#Core.Task+unbind)
      * [.start()](#Core.Task+start) ⇒ <code>Promise</code>
      * [.running(val, [detail])](#Core.Task+running) ⇒ <code>Promise</code>
      * [.done(val, [detail])](#Core.Task+done) ⇒ <code>Promise</code>
      * [.failed(val, [detail])](#Core.Task+failed) ⇒ <code>Promise</code>
    * _static_
      * [.all(tasks)](#Core.Task.all) ⇒ <code>Promise</code>
  * [.Json](#Core.Json)
    * [new Json(name, [dir])](#new_Core.Json_new)
    * [.init()](#Core.Json+init) ⇒ <code>Promise</code>
    * [.load()](#Core.Json+load) ⇒ <code>Promise</code>
    * [.loadOld()](#Core.Json+loadOld) ⇒ <code>Promise</code>
    * [.store()](#Core.Json+store) ⇒ <code>Promise</code>
    * [.storeOld()](#Core.Json+storeOld) ⇒ <code>Promise</code>
    * [.getRootValues()](#Core.Json+getRootValues) ⇒ <code>[Array](#Array)</code>
    * [.get(root)](#Core.Json+get) ⇒ <code>Promise</code>
    * [.set(root, conf, user)](#Core.Json+set) ⇒ <code>Promise</code>
    * [.remove(root, user)](#Core.Json+remove) ⇒ <code>Promise</code>
    * [.clean()](#Core.Json+clean) ⇒ <code>Promise</code>
  * [.File](#Core.File)
    * [new File(name, [dir])](#new_Core.File_new)
    * [.init()](#Core.File+init) ⇒ <code>Promise</code>
    * [.store()](#Core.File+store) ⇒ <code>Promise</code>
  * [.Image](#Core.Image)
    * [new Image(name, [dir])](#new_Core.Image_new)
    * [.init()](#Core.Image+init) ⇒ <code>Promise</code>
    * [.store()](#Core.Image+store) ⇒ <code>Promise</code>
  * [.ifNotUndef(a, b, [c])](#Core.ifNotUndef) ⇒ <code>\*</code>
  * [.loop(func, param, retry, retryTimeout, task)](#Core.loop)
  * [.setTimeout2Promise(timeout)](#Core.setTimeout2Promise) ⇒ <code>Promise</code>
  * [.copyFile(source, target)](#Core.copyFile) ⇒ <code>Promise</code>

<a name="Core.Task"></a>
### Core.Task
This class enables you to handle tasks asynchronously.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.Task](#Core.Task)
  * [new Task()](#new_Core.Task_new)
  * _instance_
    * [.once(func)](#Core.Task+once)
    * [.bind(func)](#Core.Task+bind)
    * [.unbind(func)](#Core.Task+unbind)
    * [.start()](#Core.Task+start) ⇒ <code>Promise</code>
    * [.running(val, [detail])](#Core.Task+running) ⇒ <code>Promise</code>
    * [.done(val, [detail])](#Core.Task+done) ⇒ <code>Promise</code>
    * [.failed(val, [detail])](#Core.Task+failed) ⇒ <code>Promise</code>
  * _static_
    * [.all(tasks)](#Core.Task.all) ⇒ <code>Promise</code>

<a name="new_Core.Task_new"></a>
#### new Task()
Creates a new Task.

<a name="Core.Task+once"></a>
#### task.once(func)
Binds a callback function that will be ran once when the Task status is updated the first time

**Kind**: instance method of <code>[Task](#Core.Task)</code>  

| Param | Description |
| --- | --- |
| func | the function to run |

<a name="Core.Task+bind"></a>
#### task.bind(func)
Binds a callback function that will be ran every time the Task status is updated

**Kind**: instance method of <code>[Task](#Core.Task)</code>  

| Param |
| --- |
| func | 

<a name="Core.Task+unbind"></a>
#### task.unbind(func)
Unbinds a previously bound callback function

**Kind**: instance method of <code>[Task](#Core.Task)</code>  

| Param |
| --- |
| func | 

<a name="Core.Task+start"></a>
#### task.start() ⇒ <code>Promise</code>
Starts the task.

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task is started  
<a name="Core.Task+running"></a>
#### task.running(val, [detail]) ⇒ <code>Promise</code>
Changes the Task to the 'running' status.This method can also be called to update the 'running' status with a new value

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="Core.Task+done"></a>
#### task.done(val, [detail]) ⇒ <code>Promise</code>
Ends the Task with the 'done' status.

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="Core.Task+failed"></a>
#### task.failed(val, [detail]) ⇒ <code>Promise</code>
Ends the Task with the 'failed' status.

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="Core.Task.all"></a>
#### Task.all(tasks) ⇒ <code>Promise</code>
Similar to the promise.all function but with Tasks

**Kind**: static method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when all the Tasks are resolved  

| Param | Type | Description |
| --- | --- | --- |
| tasks | <code>Object.&lt;string, Task&gt;</code> | An object listing Tasks with their name |

<a name="Core.Json"></a>
### Core.Json
This class enables you to load and store JSON config files from/to the disk.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.Json](#Core.Json)
  * [new Json(name, [dir])](#new_Core.Json_new)
  * [.init()](#Core.Json+init) ⇒ <code>Promise</code>
  * [.load()](#Core.Json+load) ⇒ <code>Promise</code>
  * [.loadOld()](#Core.Json+loadOld) ⇒ <code>Promise</code>
  * [.store()](#Core.Json+store) ⇒ <code>Promise</code>
  * [.storeOld()](#Core.Json+storeOld) ⇒ <code>Promise</code>
  * [.getRootValues()](#Core.Json+getRootValues) ⇒ <code>[Array](#Array)</code>
  * [.get(root)](#Core.Json+get) ⇒ <code>Promise</code>
  * [.set(root, conf, user)](#Core.Json+set) ⇒ <code>Promise</code>
  * [.remove(root, user)](#Core.Json+remove) ⇒ <code>Promise</code>
  * [.clean()](#Core.Json+clean) ⇒ <code>Promise</code>

<a name="new_Core.Json_new"></a>
#### new Json(name, [dir])
Creates a new Json storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the config |

<a name="Core.Json+init"></a>
#### json.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="Core.Json+load"></a>
#### json.load() ⇒ <code>Promise</code>
Loads the config from the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is loaded  
<a name="Core.Json+loadOld"></a>
#### json.loadOld() ⇒ <code>Promise</code>
Loads the previous config from the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the previous config is loaded  
<a name="Core.Json+store"></a>
#### json.store() ⇒ <code>Promise</code>
Stores the config to the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is stored  
<a name="Core.Json+storeOld"></a>
#### json.storeOld() ⇒ <code>Promise</code>
Stores the old config to the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is stored  
<a name="Core.Json+getRootValues"></a>
#### json.getRootValues() ⇒ <code>[Array](#Array)</code>
Gets the config item keys

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>[Array](#Array)</code> - an array with the config item keys  
<a name="Core.Json+get"></a>
#### json.get(root) ⇒ <code>Promise</code>
Get a config item

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves to the config item value  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |

<a name="Core.Json+set"></a>
#### json.set(root, conf, user) ⇒ <code>Promise</code>
Set a config item

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config item is set  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |
| conf | <code>string</code> | a config item value |
| user | <code>string</code> | the user making the change |

<a name="Core.Json+remove"></a>
#### json.remove(root, user) ⇒ <code>Promise</code>
Remove a config item

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config item is removed  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |
| user | <code>string</code> | the user making the change |

<a name="Core.Json+clean"></a>
#### json.clean() ⇒ <code>Promise</code>
Cleans the config files

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config files are cleaned  
<a name="Core.File"></a>
### Core.File
This class enables you to load and store files from/to the disk.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.File](#Core.File)
  * [new File(name, [dir])](#new_Core.File_new)
  * [.init()](#Core.File+init) ⇒ <code>Promise</code>
  * [.store()](#Core.File+store) ⇒ <code>Promise</code>

<a name="new_Core.File_new"></a>
#### new File(name, [dir])
Creates a new File storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the files |

<a name="Core.File+init"></a>
#### file.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[File](#Core.File)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="Core.File+store"></a>
#### file.store() ⇒ <code>Promise</code>
Stores the file to the disk

**Kind**: instance method of <code>[File](#Core.File)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the file is stored  
<a name="Core.Image"></a>
### Core.Image
This class enables you to load and store images from/to the disk.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.Image](#Core.Image)
  * [new Image(name, [dir])](#new_Core.Image_new)
  * [.init()](#Core.Image+init) ⇒ <code>Promise</code>
  * [.store()](#Core.Image+store) ⇒ <code>Promise</code>

<a name="new_Core.Image_new"></a>
#### new Image(name, [dir])
Creates a new Image storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the files |

<a name="Core.Image+init"></a>
#### image.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[Image](#Core.Image)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="Core.Image+store"></a>
#### image.store() ⇒ <code>Promise</code>
Stores the file to the disk

**Kind**: instance method of <code>[Image](#Core.Image)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the file is stored  
<a name="Core.ifNotUndef"></a>
### Core.ifNotUndef(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode If a is undefined, return b else aThree parameters mode If a is undefined, return c else b

**Kind**: static method of <code>[Core](#Core)</code>  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| [c] | <code>\*</code> | 

**Example**  
```js
var myHost = utils.Core.ifNotUndef(options.host, options.hostname);
```
**Example**  
```js
var myHost = utils.Core.ifNotUndef(options.host, options.hostname, 'localhost');
```
<a name="Core.loop"></a>
### Core.loop(func, param, retry, retryTimeout, task)
Loops until func finishes successfully

**Kind**: static method of <code>[Core](#Core)</code>  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | the function to start (must return a promise) |
| param | <code>\*</code> | the parameters to pass to the function (as an array) |
| retry | <code>int</code> | the number of times to retry |
| retryTimeout | <code>int</code> | the delay to wait before restarting the function after a failure |
| task | <code>Task</code> | the task object to update when required |

**Example**  
```js
utils.Core.loop(     utils.Qlik.addToWhiteList,     [         '10.76.224.72',         {             restUri: 'https://10.76.224.72:4242',             pfx: certif,             passPhrase: '',             UserId: 'qlikservice',             UserDirectory: '2008R2-0'         }     ],     30,     2000,     task);
```
<a name="Core.setTimeout2Promise"></a>
### Core.setTimeout2Promise(timeout) ⇒ <code>Promise</code>
Equivalent to setTimeout but returns a promise instead

**Kind**: static method of <code>[Core](#Core)</code>  
**Returns**: <code>Promise</code> - a promise that resolves when the timeout is reached  

| Param | Type | Description |
| --- | --- | --- |
| timeout | <code>int</code> | the timeout in ms |

**Example**  
```js
utils.Core.setTimeout2Promise(1000).then(function() {     console.log('hi');});
```
<a name="Core.copyFile"></a>
### Core.copyFile(source, target) ⇒ <code>Promise</code>
Copies a file

**Kind**: static method of <code>[Core](#Core)</code>  
**Returns**: <code>Promise</code> - a promise that resolves when the file is copied  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | the source file full path |
| target | <code>string</code> | the target file full path |

<a name="Object"></a>
## Object : <code>object</code>
Wrapper for helper functions for objects.

**Kind**: global namespace  

* [Object](#Object) : <code>object</code>
  * [.map(obj, f)](#Object.map) ⇒ <code>[Object](#Object)</code>
  * [.keys(obj)](#Object.keys) ⇒ <code>[Array](#Array)</code>
  * [.values(obj)](#Object.values) ⇒ <code>[Array](#Array)</code>

<a name="Object.map"></a>
### Object.map(obj, f) ⇒ <code>[Object](#Object)</code>
Map function for objects

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>[Object](#Object)</code> - an object with the same keys as obj but with values that are f(obj[key])  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>[Object](#Object)</code> | an object |
| f | <code>function</code> | a function to apply to each property of obj |

<a name="Object.keys"></a>
### Object.keys(obj) ⇒ <code>[Array](#Array)</code>
Gets an object's keys into an array

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>[Array](#Array)</code> - an array containing obj's keys  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>[Object](#Object)</code> | the object to get keys from |

<a name="Object.values"></a>
### Object.values(obj) ⇒ <code>[Array](#Array)</code>
Gets an object's values into an array

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>[Array](#Array)</code> - an array containing obj's values  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>[Object](#Object)</code> | the object to get values from |

<a name="Advanced"></a>
## Advanced : <code>object</code>
Wrapper for helper functions for Qlik Sense.

**Kind**: global namespace  

* [Advanced](#Advanced) : <code>object</code>
  * [.getTicket(params, options)](#Advanced.getTicket) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
  * [.addToWhiteList(ip, options)](#Advanced.addToWhiteList) ⇒ <code>[Promise.&lt;Object&gt;](#Object)</code>
  * [.dynamicAppClone(options)](#Advanced.dynamicAppClone) ⇒ <code>Promise</code>

<a name="Advanced.getTicket"></a>
### Advanced.getTicket(params, options) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
Generates a ticket on Qlik Sense QRS Api. If the targetId is not correctthen the ticket will redirect to the hub

**Kind**: static method of <code>[Advanced](#Advanced)</code>  
**Returns**: <code>[Promise.&lt;ticket&gt;](#ticket)</code> - resolving to the generated ticket  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>[ticketParams](#ticketParams)</code> | the ticket parameters |
| options | <code>[options](#options)</code> | the options to connect to the ticket API endpoint |

**Example**  
```js
utils.Qlik.getTicket({     restUri: 'https://10.76.224.72:4243',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});
```
<a name="Advanced.addToWhiteList"></a>
### Advanced.addToWhiteList(ip, options) ⇒ <code>[Promise.&lt;Object&gt;](#Object)</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy.Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent APIcalls within this restart will fail miserably with various random & useless error messages.

**Kind**: static method of <code>[Advanced](#Advanced)</code>  
**Returns**: <code>[Promise.&lt;Object&gt;](#Object)</code> - a promise resolving to the virtual proxy configuration when successfull  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | the ip to add |
| options | <code>[options](#options)</code> | the endpoint to add the ip to |

**Example**  
```js
readFile('./client.pfx').then(function(certif) {     return utils.Qlik.addToWhiteList('10.76.224.72', {         restUri: 'https://10.76.224.72:4242',         pfx: certif,         passPhrase: '',         UserId: 'qlikservice',         UserDirectory: '2008R2-0'     });}).then(function(ret) {     console.log(ret);}, function(ret) {     console.log(ret);});
```
<a name="Advanced.dynamicAppClone"></a>
### Advanced.dynamicAppClone(options) ⇒ <code>Promise</code>
Duplicates a template app, updates its script, reloads it and publishes it

**Kind**: static method of <code>[Advanced](#Advanced)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>[options](#options)</code> |  | Uri to the Qlik Sense endpoint |
| options.templateAppId | <code>string</code> |  | id of the template application |
| [options.templateMaxParDup] | <code>int</code> | <code>5</code> | maximum number of // operations (opened sockets & QRS API queries) |
| [options.scriptMarker=] | <code>string</code> |  | marker to be found in the script and replaced during the duplication. If this parameter is null, the script is not updated. |
| options.scriptReplaces | <code>Array.&lt;string&gt;</code> |  | replace value of the marker above for each array value |
| [options.scriptRegex=] | <code>RegExp</code> |  | regex to track in the script trace. If this parameter is null (or scriptMarker parameter above is null), then the app is not reloaded |
| [options.publishStreamId=] | <code>string</code> |  | id of the stream to publish into. If this parameter is null, then the app is not published |
| options.publishReplace | <code>boolean</code> |  | boolean telling wether to replace the app if an app with the same name was already published in the same stream |
| options.task | <code>Task</code> |  | task that will trace the cloning progress |

**Example**  
```js
var task = new utils.Core.Task();task.start();task.bind(function(task) {     console.log(task.val, task.detail);});readFile(testQlikSensePfx).then(function(pfx) {     task.running('info', 'certificate loaded...');     return utils.Qlik.dynamicAppClone({         restUri: 'http://10.20.30.40',         pfx: pfx,         UserId: 'qlikservice',         UserDirectory: '2008R2-0',         templateAppId: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',         templateMaxParDup: 5,         scriptMarker: '%Replace me!%',         scriptReplaces: [ 'Employees.qvd' ],         scriptRegex: /(.*) << (.*) ([0-9,]+) Lines fetched/g,         publishStreamId: 'aaec8d41-5201-43ab-809f-3063750dfafd',         publishReplace: true,         task: task     });});
```
<a name="Base"></a>
## Base : <code>object</code>
Wrapper for helper functions for Qlik Sense.

**Kind**: global namespace  

* [Base](#Base) : <code>object</code>
  * [.generateXrfKey([size], [chars])](#Base.generateXrfKey) ⇒ <code>string</code>
  * [.request(options, [params])](#Base.request) ⇒ <code>Promise.&lt;\*&gt;</code>
  * [.openSession(ticket, hostUri)](#Base.openSession) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="Base.generateXrfKey"></a>
### Base.generateXrfKey([size], [chars]) ⇒ <code>string</code>
Generates a random Xrf key of a given size within a set of given chars

**Kind**: static method of <code>[Base](#Base)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>int</code> | <code>16</code> | 
| [chars] | <code>string</code> | <code>&quot;abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789&quot;</code> | 

**Example**  
```js
var xrf = utils.Base.generateXrfkey(8);
```
<a name="Base.request"></a>
### Base.request(options, [params]) ⇒ <code>Promise.&lt;\*&gt;</code>
Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object

**Kind**: static method of <code>[Base](#Base)</code>  
**Returns**: <code>Promise.&lt;\*&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>[options](#options)</code> | the options to connect to the API endpoint |
| [params] | <code>[Object](#Object)</code> | the parameters to post to the API endpoint |

**Example**  
```js
utils.Qlik.request({     restUri: 'https://10.76.224.72:4243/qps/ticket',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});
```
<a name="Base.openSession"></a>
### Base.openSession(ticket, hostUri) ⇒ <code>Promise.&lt;string&gt;</code>
Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie

**Kind**: static method of <code>[Base](#Base)</code>  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise resolving to the session cookie  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>[ticket](#ticket)</code> | the generated ticket |
| hostUri | <code>string</code> | the URI of the Qlik Sense host (Hub or preferably QMC) to open a session on |

**Example**  
```js
utils.Qlik.openSession({     UserDirectory: '2008R2-0',     UserId: 'qlikservice',     Attributes: [],     Ticket: 'QzSPXzBmJKjhucPF',     TargetUri: null}, 'https://localhost/hub').then(function(retVal) {     console.log(retVal);});
```
<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/{id}This method is manual

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>App</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppContent&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/content/{id}?privileges={appendprivileges}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppContent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/datasegment/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppDataSegment&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/internal/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppInternal&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/object/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/object/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/app/object/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AppObject</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/appavailability/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppAvailability&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/appcontentquota/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppContentQuota&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/appcontentquota/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppContentQuota&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AppContentQuota</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/appseedinfo/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppSeedInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/appstatus/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;AppStatus&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/binarydelete/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;BinaryDelete&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/binarydownload/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;BinaryDownload&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/binarysyncruleevaluation/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get() ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/certificatedistribution/distributecertificate/{servernodeconfigurationid}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  
<a name="head"></a>
## head() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/certificatedistribution/redistributecertificate/{servernodeconfigurationid}This method is manual

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeevent/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeevent/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CompositeEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeevent/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CompositeEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEvent</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeeventoperational/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeeventoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CompositeEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeeventoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CompositeEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeeventruleoperational/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeeventruleoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CompositeEventRuleOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/compositeeventruleoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CompositeEventRuleOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventRuleOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/contentlibrary/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/contentlibrary/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ContentLibrary&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/contentlibrary/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ContentLibrary&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ContentLibrary</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/custompropertydefinition/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/custompropertydefinition/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CustomPropertyDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/custompropertydefinition/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;CustomPropertyDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CustomPropertyDefinition</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/dataconnection/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/dataconnection/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;DataConnection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/dataconnection/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;DataConnection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>DataConnection</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get() ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/download/app/{id}/{exportticketid}/{localfilename}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;FileDownloadInfo&gt;</code> - a promise resolving to the response to the request  
<a name="get"></a>
## get() ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/download/reloadtask/{downloadticketid}/{localfilename}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;FileDownloadInfo&gt;</code> - a promise resolving to the response to the request  
<a name="get"></a>
## get() ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/download/samlmetadata/{exportticketid}/{localfilename}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;FileDownloadInfo&gt;</code> - a promise resolving to the response to the request  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;EngineService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/engineservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;EngineService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;EngineService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/engineservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;EngineService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>EngineService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/engineservice/template/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/engineservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;EngineServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;EngineServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/engineservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;EngineServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>EngineServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionresult/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionresult/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExecutionResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionresult/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExecutionResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResult</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionresult/detail/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionresult/detail/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExecutionResultDetail&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionresult/detail/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExecutionResultDetail&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResultDetail</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionsession/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionsession/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExecutionSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/executionsession/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExecutionSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionSession</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/extension/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/extension/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/extension/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Extension</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/extension/name/{extension}This method is manual

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="post"></a>
## post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/extension/name/{extension}?privileges={appendprivileges}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalchangeinfo/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalchangeinfo/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExternalChangeInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalchangeinfo/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExternalChangeInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalChangeInfo</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalprogramtask/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalprogramtask/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExternalProgramTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalprogramtask/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExternalProgramTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalprogramtaskoperational/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;FileReference&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/filereference/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;FileReference&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="put"></a>
## put(postParams, [control], [appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/{id}?control={control}&privileges={appendprivileges}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>License</code> | the parameters to send as request body to the API endpoint |
| [control] | <code>string</code> | the control parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [control], [appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/datamarket/{id}?control={control}&privileges={appendprivileges}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>License</code> | the parameters to send as request body to the API endpoint |
| [control] | <code>string</code> | the control parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/loginaccesstype/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/loginaccesstype/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseLoginAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/loginaccesstype/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseLoginAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseLoginAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/loginaccessusage/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccessgroup/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccessgroup/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseUserAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccessgroup/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseUserAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessGroup</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccesstype/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccesstype/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseUserAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccesstype/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseUserAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/license/useraccessusage/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;LicenseUserAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="post"></a>
## post(postParams) ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/log/archive/{logrootsubfolder}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |

<a name="post"></a>
## post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/log/rolled/{logrootsubfolder}This method is manual

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>IEnumerable</code> | the parameters to send as request body to the API endpoint |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/mimetype/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;MimeType&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/mimetype/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;MimeType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;MimeType&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/mimetype/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;MimeType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>MimeType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/printingservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;PrintingService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/printingservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;PrintingService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>PrintingService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/printingservice/template/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/printingservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;PrintingServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;PrintingServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/printingservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;PrintingServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>PrintingServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/proxyservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ProxyService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/proxyservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ProxyService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ProxyService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/proxyservice/template/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/proxyservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ProxyServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/proxyservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ProxyServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ProxyServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/reloadtask/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/reloadtask/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/reloadtask/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/reloadtaskoperational/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/reloadtaskoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ReloadTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/reloadtaskoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ReloadTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/repositoryservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;RepositoryService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/repositoryservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;RepositoryService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>RepositoryService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/repositoryservice/template/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/repositoryservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;RepositoryServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/repositoryservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;RepositoryServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>RepositoryServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schedulerservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchedulerService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schedulerservice/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchedulerService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchedulerService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/schedulerservice/template/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schedulerservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchedulerServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schedulerservice/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchedulerServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchedulerServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/schemaevent/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schemaevent/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchemaEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schemaevent/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchemaEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEvent</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/schemaeventoperational/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schemaeventoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchemaEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/schemaeventoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SchemaEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEventOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/selection/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/selection/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/selection/{id}?privileges={appendprivileges}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Selection</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/servernodeconfiguration/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/servernodeconfiguration/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ServerNodeConfiguration&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/servernodeconfiguration/{id}?privileges={appendprivileges}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;ServerNodeConfiguration&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ServerNodeConfiguration</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get() ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/servernoderegistration/start/{servernodeconfigurationid}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/servicestatus/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;ServiceStatus&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/staticcontentreference/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;StaticContentReference&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/stream/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;Stream&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/stream/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Stream&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Stream&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/stream/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Stream&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Stream</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;SyncSession&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/syncsession/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SyncSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/systemrule/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/systemrule/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/systemrule/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;SystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SystemRule</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/tag/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;Tag&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/tag/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Tag&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Tag&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/tag/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;Tag&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Tag</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;TempContent&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/tempcontent/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;TempContent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;User&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;User&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;User&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;User&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>User</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/followingapp/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/followingapp/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserFollowingApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/followingapp/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserFollowingApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserFollowingApp</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/recentapp/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/recentapp/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserRecentApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/recentapp/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserRecentApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserRecentApp</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="get"></a>
## get() ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/user/sync/{userdirectory}/{userid}This method is manual

**Kind**: global function  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  
<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/userdirectory/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/userdirectory/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserDirectory&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/userdirectory/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserDirectory&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectory</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/userdirectory/template/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/userdirectory/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserDirectoryTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/userdirectory/template/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserDirectoryTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectoryTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/usersynctask/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/usersynctask/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserSyncTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/usersynctask/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserSyncTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/usersynctaskoperational/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/usersynctaskoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserSyncTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/usersynctaskoperational/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;UserSyncTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="delete"></a>
## delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:/qrs/virtualproxyconfig/{id}This method is generated

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
<a name="get"></a>
## get([appendprivileges]) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/virtualproxyconfig/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;VirtualProxyConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="put"></a>
## put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:/qrs/virtualproxyconfig/{id}?privileges={appendprivileges}This method is generated

**Kind**: global function  
**Returns**: <code>Promise.&lt;VirtualProxyConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>VirtualProxyConfig</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

<a name="options"></a>
## options : <code>[Object](#Object)</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| UserDirectory | <code>string</code> | <code>&quot;.&quot;</code> | the user directory of the Qlik Sense user that will make the API call |
| UserId | <code>string</code> | <code>&quot;qlikservice&quot;</code> | the user id of the Qlik Sense user that will make the API call |
| session | <code>string</code> |  | the cookie of a valid Qlik Sense session |
| restUri | <code>string</code> |  | an URI to a valid Qlik Sense endpoint |
| method | <code>string</code> | <code>&quot;POST&quot;</code> | the method of the HTTP request (GET/PUT/POST/DELETE) |
| pfx | <code>buffer</code> |  | the Qlik Sense pfx certificate (not required if a session is set) |
| passphrase | <code>string</code> |  | the Qlik Sense certificate's passphrase (not required if a session is set) |
| timeout | <code>int</code> |  | the timeout of the HTTP request |

<a name="ticketParams"></a>
## ticketParams : <code>[Object](#Object)</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UserId | <code>string</code> | the user id to generate a ticket for |
| UserDirectory | <code>string</code> | the user directory of the user to generate a ticket for |
| Attributes | <code>Array.&lt;string&gt;</code> | the user attributes |

<a name="ticket"></a>
## ticket : <code>[Object](#Object)</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UserId | <code>string</code> | the user id of the generated ticket |
| UserDirectory | <code>string</code> | the user directory of generated ticket |
| Attributes | <code>Array.&lt;string&gt;</code> | the user attributes |
| Ticket | <code>string</code> | the ticket |
| TargetUri | <code>string</code> | the target uri |

