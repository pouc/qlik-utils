<a name="selection"></a>
## selection : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [selection](#selection) : <code>object</code>
  * [.id](#selection.id) : <code>object</code>
    * [.app](#selection.id.app) : <code>object</code>
      * [.content](#selection.id.app.content) : <code>object</code>
        * [.count](#selection.id.app.content.count) : <code>object</code>
          * [.get([filter])](#selection.id.app.content.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.app.content.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
        * [.synthetic](#selection.id.app.content.synthetic) : <code>object</code>
          * [.get([filter], [appendprivileges])](#selection.id.app.content.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.app.content.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.content.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
      * [.count](#selection.id.app.count) : <code>object</code>
        * [.get([filter])](#selection.id.app.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.datasegment](#selection.id.app.datasegment) : <code>object</code>
        * [.count](#selection.id.app.datasegment.count) : <code>object</code>
          * [.get([filter])](#selection.id.app.datasegment.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.app.datasegment.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
        * [.synthetic](#selection.id.app.datasegment.synthetic) : <code>object</code>
          * [.get([filter], [appendprivileges])](#selection.id.app.datasegment.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.app.datasegment.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.datasegment.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
      * [.full](#selection.id.app.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.full.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
      * [.internal](#selection.id.app.internal) : <code>object</code>
        * [.count](#selection.id.app.internal.count) : <code>object</code>
          * [.get([filter])](#selection.id.app.internal.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.app.internal.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
        * [.synthetic](#selection.id.app.internal.synthetic) : <code>object</code>
          * [.get([filter], [appendprivileges])](#selection.id.app.internal.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.app.internal.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.internal.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
      * [.object](#selection.id.app.object) : <code>object</code>
        * [.count](#selection.id.app.object.count) : <code>object</code>
          * [.get([filter])](#selection.id.app.object.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.app.object.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
        * [.synthetic](#selection.id.app.object.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.app.object.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.app.object.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.app.object.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.object.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.app.object.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
      * [.synthetic](#selection.id.app.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.app.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.app.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.app.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.app.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
    * [.appavailability](#selection.id.appavailability) : <code>object</code>
      * [.count](#selection.id.appavailability.count) : <code>object</code>
        * [.get([filter])](#selection.id.appavailability.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.appavailability.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.appavailability.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
      * [.synthetic](#selection.id.appavailability.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.appavailability.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.appavailability.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appavailability.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appavailability.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
    * [.appcomponent](#selection.id.appcomponent) : <code>object</code>
      * [.full](#selection.id.appcomponent.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcomponent.full.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcomponent.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
    * [.appcontentquota](#selection.id.appcontentquota) : <code>object</code>
      * [.count](#selection.id.appcontentquota.count) : <code>object</code>
        * [.get([filter])](#selection.id.appcontentquota.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.appcontentquota.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcontentquota.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
      * [.synthetic](#selection.id.appcontentquota.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.appcontentquota.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.appcontentquota.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.appcontentquota.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appcontentquota.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcontentquota.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
    * [.appseedinfo](#selection.id.appseedinfo) : <code>object</code>
      * [.count](#selection.id.appseedinfo.count) : <code>object</code>
        * [.get([filter])](#selection.id.appseedinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.appseedinfo.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.appseedinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
      * [.synthetic](#selection.id.appseedinfo.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.appseedinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.appseedinfo.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appseedinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appseedinfo.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
    * [.appstatus](#selection.id.appstatus) : <code>object</code>
      * [.count](#selection.id.appstatus.count) : <code>object</code>
        * [.get([filter])](#selection.id.appstatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.appstatus.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.appstatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
      * [.synthetic](#selection.id.appstatus.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.appstatus.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.appstatus.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appstatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appstatus.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
    * [.binarydelete](#selection.id.binarydelete) : <code>object</code>
      * [.count](#selection.id.binarydelete.count) : <code>object</code>
        * [.get([filter])](#selection.id.binarydelete.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.binarydelete.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydelete.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
      * [.synthetic](#selection.id.binarydelete.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.binarydelete.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.binarydelete.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarydelete.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydelete.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
    * [.binarydownload](#selection.id.binarydownload) : <code>object</code>
      * [.count](#selection.id.binarydownload.count) : <code>object</code>
        * [.get([filter])](#selection.id.binarydownload.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.binarydownload.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydownload.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
      * [.synthetic](#selection.id.binarydownload.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.binarydownload.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.binarydownload.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarydownload.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydownload.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
    * [.binarysyncruleevaluation](#selection.id.binarysyncruleevaluation) : <code>object</code>
      * [.count](#selection.id.binarysyncruleevaluation.count) : <code>object</code>
        * [.get([filter])](#selection.id.binarysyncruleevaluation.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.binarysyncruleevaluation.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarysyncruleevaluation.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
      * [.synthetic](#selection.id.binarysyncruleevaluation.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.binarysyncruleevaluation.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.binarysyncruleevaluation.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarysyncruleevaluation.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
    * [.compositeevent](#selection.id.compositeevent) : <code>object</code>
      * [.count](#selection.id.compositeevent.count) : <code>object</code>
        * [.get([filter])](#selection.id.compositeevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.compositeevent.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
      * [.synthetic](#selection.id.compositeevent.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.compositeevent.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.compositeevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.compositeevent.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.compositeevent.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeevent.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
    * [.compositeeventoperational](#selection.id.compositeeventoperational) : <code>object</code>
      * [.count](#selection.id.compositeeventoperational.count) : <code>object</code>
        * [.get([filter])](#selection.id.compositeeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.compositeeventoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
      * [.synthetic](#selection.id.compositeeventoperational.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.compositeeventoperational.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.compositeeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.compositeeventoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.compositeeventoperational.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
    * [.compositeeventruleoperational](#selection.id.compositeeventruleoperational) : <code>object</code>
      * [.count](#selection.id.compositeeventruleoperational.count) : <code>object</code>
        * [.get([filter])](#selection.id.compositeeventruleoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.compositeeventruleoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventruleoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
      * [.synthetic](#selection.id.compositeeventruleoperational.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.compositeeventruleoperational.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.compositeeventruleoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.compositeeventruleoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeeventruleoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.compositeeventruleoperational.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventruleoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
    * [.contentlibrary](#selection.id.contentlibrary) : <code>object</code>
      * [.count](#selection.id.contentlibrary.count) : <code>object</code>
        * [.get([filter])](#selection.id.contentlibrary.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.contentlibrary.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.contentlibrary.full.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
      * [.synthetic](#selection.id.contentlibrary.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.contentlibrary.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.contentlibrary.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.contentlibrary.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.contentlibrary.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.contentlibrary.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.contentlibrary.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
    * [.custompropertydefinition](#selection.id.custompropertydefinition) : <code>object</code>
      * [.count](#selection.id.custompropertydefinition.count) : <code>object</code>
        * [.get([filter])](#selection.id.custompropertydefinition.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.custompropertydefinition.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.custompropertydefinition.full.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
      * [.synthetic](#selection.id.custompropertydefinition.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.custompropertydefinition.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.custompropertydefinition.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.custompropertydefinition.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.custompropertydefinition.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.custompropertydefinition.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.custompropertydefinition.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
    * [.dataconnection](#selection.id.dataconnection) : <code>object</code>
      * [.count](#selection.id.dataconnection.count) : <code>object</code>
        * [.get([filter])](#selection.id.dataconnection.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.dataconnection.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.dataconnection.full.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
      * [.synthetic](#selection.id.dataconnection.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.dataconnection.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.dataconnection.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.dataconnection.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.dataconnection.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.dataconnection.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.dataconnection.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
    * [.engineservice](#selection.id.engineservice) : <code>object</code>
      * [.count](#selection.id.engineservice.count) : <code>object</code>
        * [.get([filter])](#selection.id.engineservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.engineservice.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
      * [.synthetic](#selection.id.engineservice.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.engineservice.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.engineservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.engineservice.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.template](#selection.id.engineservice.template) : <code>object</code>
        * [.count](#selection.id.engineservice.template.count) : <code>object</code>
          * [.get([filter])](#selection.id.engineservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.engineservice.template.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
        * [.synthetic](#selection.id.engineservice.template.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.engineservice.template.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.engineservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.engineservice.template.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.engineservice.template.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
    * [.event](#selection.id.event) : <code>object</code>
      * [.full](#selection.id.event.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.event.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.event.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
    * [.eventoperational](#selection.id.eventoperational) : <code>object</code>
      * [.full](#selection.id.eventoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.eventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.eventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
    * [.executionresult](#selection.id.executionresult) : <code>object</code>
      * [.count](#selection.id.executionresult.count) : <code>object</code>
        * [.get([filter])](#selection.id.executionresult.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.detail](#selection.id.executionresult.detail) : <code>object</code>
        * [.count](#selection.id.executionresult.detail.count) : <code>object</code>
          * [.get([filter])](#selection.id.executionresult.detail.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.executionresult.detail.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
        * [.synthetic](#selection.id.executionresult.detail.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.executionresult.detail.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.executionresult.detail.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.executionresult.detail.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.detail.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.executionresult.detail.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
      * [.full](#selection.id.executionresult.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
      * [.synthetic](#selection.id.executionresult.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.executionresult.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.executionresult.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.executionresult.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.executionresult.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
    * [.executionsession](#selection.id.executionsession) : <code>object</code>
      * [.count](#selection.id.executionsession.count) : <code>object</code>
        * [.get([filter])](#selection.id.executionsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.executionsession.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
      * [.synthetic](#selection.id.executionsession.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.executionsession.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.executionsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.executionsession.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.executionsession.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionsession.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
    * [.extension](#selection.id.extension) : <code>object</code>
      * [.count](#selection.id.extension.count) : <code>object</code>
        * [.get([filter])](#selection.id.extension.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.extension.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.extension.full.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
      * [.synthetic](#selection.id.extension.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.extension.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.extension.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.extension.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.extension.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.extension.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.extension.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
    * [.externalchangeinfo](#selection.id.externalchangeinfo) : <code>object</code>
      * [.count](#selection.id.externalchangeinfo.count) : <code>object</code>
        * [.get([filter])](#selection.id.externalchangeinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.externalchangeinfo.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalchangeinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
      * [.synthetic](#selection.id.externalchangeinfo.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.externalchangeinfo.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.externalchangeinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.externalchangeinfo.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalchangeinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.externalchangeinfo.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalchangeinfo.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
    * [.externalprogramtask](#selection.id.externalprogramtask) : <code>object</code>
      * [.count](#selection.id.externalprogramtask.count) : <code>object</code>
        * [.get([filter])](#selection.id.externalprogramtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.externalprogramtask.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
      * [.synthetic](#selection.id.externalprogramtask.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.externalprogramtask.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.externalprogramtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.externalprogramtask.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalprogramtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.externalprogramtask.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtask.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
    * [.externalprogramtaskoperational](#selection.id.externalprogramtaskoperational) : <code>object</code>
      * [.count](#selection.id.externalprogramtaskoperational.count) : <code>object</code>
        * [.get([filter])](#selection.id.externalprogramtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.externalprogramtaskoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
      * [.synthetic](#selection.id.externalprogramtaskoperational.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.externalprogramtaskoperational.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.externalprogramtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.externalprogramtaskoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalprogramtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.externalprogramtaskoperational.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
    * [.filereference](#selection.id.filereference) : <code>object</code>
      * [.count](#selection.id.filereference.count) : <code>object</code>
        * [.get([filter])](#selection.id.filereference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.filereference.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.filereference.full.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
      * [.synthetic](#selection.id.filereference.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.filereference.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.filereference.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.filereference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.filereference.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
    * [.license](#selection.id.license) : <code>object</code>
      * [.loginaccesstype](#selection.id.license.loginaccesstype) : <code>object</code>
        * [.count](#selection.id.license.loginaccesstype.count) : <code>object</code>
          * [.get([filter])](#selection.id.license.loginaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.license.loginaccesstype.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
        * [.synthetic](#selection.id.license.loginaccesstype.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.license.loginaccesstype.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.license.loginaccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.license.loginaccesstype.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.license.loginaccesstype.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
      * [.loginaccessusage](#selection.id.license.loginaccessusage) : <code>object</code>
        * [.count](#selection.id.license.loginaccessusage.count) : <code>object</code>
          * [.get([filter])](#selection.id.license.loginaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.license.loginaccessusage.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
        * [.synthetic](#selection.id.license.loginaccessusage.synthetic) : <code>object</code>
          * [.get([filter], [appendprivileges])](#selection.id.license.loginaccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.license.loginaccessusage.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
      * [.useraccessgroup](#selection.id.license.useraccessgroup) : <code>object</code>
        * [.count](#selection.id.license.useraccessgroup.count) : <code>object</code>
          * [.get([filter])](#selection.id.license.useraccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.license.useraccessgroup.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
        * [.synthetic](#selection.id.license.useraccessgroup.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.license.useraccessgroup.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.license.useraccessgroup.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.license.useraccessgroup.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.license.useraccessgroup.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
      * [.useraccesstype](#selection.id.license.useraccesstype) : <code>object</code>
        * [.count](#selection.id.license.useraccesstype.count) : <code>object</code>
          * [.get([filter])](#selection.id.license.useraccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.license.useraccesstype.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
        * [.synthetic](#selection.id.license.useraccesstype.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.license.useraccesstype.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.license.useraccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.license.useraccesstype.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.license.useraccesstype.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
      * [.useraccessusage](#selection.id.license.useraccessusage) : <code>object</code>
        * [.count](#selection.id.license.useraccessusage.count) : <code>object</code>
          * [.get([filter])](#selection.id.license.useraccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.license.useraccessusage.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
        * [.synthetic](#selection.id.license.useraccessusage.synthetic) : <code>object</code>
          * [.get([filter], [appendprivileges])](#selection.id.license.useraccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.license.useraccessusage.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
      * [.delete([filter])](#selection.id.license.delete) ⇒ <code>Promise</code>
    * [.licenseaccessusage](#selection.id.licenseaccessusage) : <code>object</code>
      * [.full](#selection.id.licenseaccessusage.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.licenseaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.licenseaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
    * [.mimetype](#selection.id.mimetype) : <code>object</code>
      * [.count](#selection.id.mimetype.count) : <code>object</code>
        * [.get([filter])](#selection.id.mimetype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.mimetype.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.mimetype.full.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
      * [.synthetic](#selection.id.mimetype.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.mimetype.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.mimetype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.mimetype.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.mimetype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.mimetype.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.mimetype.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
    * [.printingservice](#selection.id.printingservice) : <code>object</code>
      * [.count](#selection.id.printingservice.count) : <code>object</code>
        * [.get([filter])](#selection.id.printingservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.printingservice.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
      * [.synthetic](#selection.id.printingservice.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.printingservice.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.printingservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.printingservice.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.template](#selection.id.printingservice.template) : <code>object</code>
        * [.count](#selection.id.printingservice.template.count) : <code>object</code>
          * [.get([filter])](#selection.id.printingservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.printingservice.template.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
        * [.synthetic](#selection.id.printingservice.template.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.printingservice.template.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.printingservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.printingservice.template.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.printingservice.template.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
    * [.proxyservice](#selection.id.proxyservice) : <code>object</code>
      * [.count](#selection.id.proxyservice.count) : <code>object</code>
        * [.get([filter])](#selection.id.proxyservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.proxyservice.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
      * [.synthetic](#selection.id.proxyservice.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.proxyservice.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.proxyservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.proxyservice.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.template](#selection.id.proxyservice.template) : <code>object</code>
        * [.count](#selection.id.proxyservice.template.count) : <code>object</code>
          * [.get([filter])](#selection.id.proxyservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.proxyservice.template.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
        * [.synthetic](#selection.id.proxyservice.template.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.proxyservice.template.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.proxyservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.proxyservice.template.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.proxyservice.template.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
    * [.reloadtask](#selection.id.reloadtask) : <code>object</code>
      * [.count](#selection.id.reloadtask.count) : <code>object</code>
        * [.get([filter])](#selection.id.reloadtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.reloadtask.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
      * [.synthetic](#selection.id.reloadtask.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.reloadtask.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.reloadtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.reloadtask.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.reloadtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.reloadtask.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtask.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
    * [.reloadtaskoperational](#selection.id.reloadtaskoperational) : <code>object</code>
      * [.count](#selection.id.reloadtaskoperational.count) : <code>object</code>
        * [.get([filter])](#selection.id.reloadtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.reloadtaskoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
      * [.synthetic](#selection.id.reloadtaskoperational.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.reloadtaskoperational.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.reloadtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.reloadtaskoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.reloadtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.reloadtaskoperational.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
    * [.repositoryservice](#selection.id.repositoryservice) : <code>object</code>
      * [.count](#selection.id.repositoryservice.count) : <code>object</code>
        * [.get([filter])](#selection.id.repositoryservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.repositoryservice.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
      * [.synthetic](#selection.id.repositoryservice.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.repositoryservice.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.repositoryservice.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.template](#selection.id.repositoryservice.template) : <code>object</code>
        * [.count](#selection.id.repositoryservice.template.count) : <code>object</code>
          * [.get([filter])](#selection.id.repositoryservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.repositoryservice.template.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
        * [.synthetic](#selection.id.repositoryservice.template.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.repositoryservice.template.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.repositoryservice.template.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.repositoryservice.template.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
    * [.schedulerservice](#selection.id.schedulerservice) : <code>object</code>
      * [.count](#selection.id.schedulerservice.count) : <code>object</code>
        * [.get([filter])](#selection.id.schedulerservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.schedulerservice.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
      * [.synthetic](#selection.id.schedulerservice.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.schedulerservice.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.schedulerservice.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.template](#selection.id.schedulerservice.template) : <code>object</code>
        * [.count](#selection.id.schedulerservice.template.count) : <code>object</code>
          * [.get([filter])](#selection.id.schedulerservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.schedulerservice.template.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
        * [.synthetic](#selection.id.schedulerservice.template.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.schedulerservice.template.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.schedulerservice.template.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.schedulerservice.template.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
    * [.schemaevent](#selection.id.schemaevent) : <code>object</code>
      * [.count](#selection.id.schemaevent.count) : <code>object</code>
        * [.get([filter])](#selection.id.schemaevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.schemaevent.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
      * [.synthetic](#selection.id.schemaevent.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.schemaevent.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.schemaevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.schemaevent.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schemaevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.schemaevent.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaevent.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
    * [.schemaeventoperational](#selection.id.schemaeventoperational) : <code>object</code>
      * [.count](#selection.id.schemaeventoperational.count) : <code>object</code>
        * [.get([filter])](#selection.id.schemaeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.schemaeventoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
      * [.synthetic](#selection.id.schemaeventoperational.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.schemaeventoperational.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.schemaeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.schemaeventoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schemaeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.schemaeventoperational.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
    * [.servernodeconfiguration](#selection.id.servernodeconfiguration) : <code>object</code>
      * [.count](#selection.id.servernodeconfiguration.count) : <code>object</code>
        * [.get([filter])](#selection.id.servernodeconfiguration.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.servernodeconfiguration.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.servernodeconfiguration.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
      * [.synthetic](#selection.id.servernodeconfiguration.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.servernodeconfiguration.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.servernodeconfiguration.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.servernodeconfiguration.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.servernodeconfiguration.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.servernodeconfiguration.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.servernodeconfiguration.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
    * [.servicestatus](#selection.id.servicestatus) : <code>object</code>
      * [.count](#selection.id.servicestatus.count) : <code>object</code>
        * [.get([filter])](#selection.id.servicestatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.servicestatus.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.servicestatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
      * [.synthetic](#selection.id.servicestatus.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.servicestatus.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.servicestatus.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.servicestatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.servicestatus.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
    * [.staticcontentreference](#selection.id.staticcontentreference) : <code>object</code>
      * [.count](#selection.id.staticcontentreference.count) : <code>object</code>
        * [.get([filter])](#selection.id.staticcontentreference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.staticcontentreference.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreference.full.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
      * [.synthetic](#selection.id.staticcontentreference.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.staticcontentreference.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.staticcontentreference.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.staticcontentreference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreference.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
    * [.staticcontentreferencebase](#selection.id.staticcontentreferencebase) : <code>object</code>
      * [.full](#selection.id.staticcontentreferencebase.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreferencebase.full.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreferencebase.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
    * [.stream](#selection.id.stream) : <code>object</code>
      * [.count](#selection.id.stream.count) : <code>object</code>
        * [.get([filter])](#selection.id.stream.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.stream.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.stream.full.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
      * [.synthetic](#selection.id.stream.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.stream.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.stream.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.stream.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.stream.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.stream.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.stream.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
    * [.syncsession](#selection.id.syncsession) : <code>object</code>
      * [.count](#selection.id.syncsession.count) : <code>object</code>
        * [.get([filter])](#selection.id.syncsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.syncsession.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.syncsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
      * [.synthetic](#selection.id.syncsession.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.syncsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.syncsession.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.syncsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.syncsession.get) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
    * [.systemrule](#selection.id.systemrule) : <code>object</code>
      * [.count](#selection.id.systemrule.count) : <code>object</code>
        * [.get([filter])](#selection.id.systemrule.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.systemrule.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.systemrule.full.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
      * [.synthetic](#selection.id.systemrule.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.systemrule.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.systemrule.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.systemrule.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.systemrule.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.systemrule.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.systemrule.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
    * [.tag](#selection.id.tag) : <code>object</code>
      * [.count](#selection.id.tag.count) : <code>object</code>
        * [.get([filter])](#selection.id.tag.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.tag.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.tag.full.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
      * [.synthetic](#selection.id.tag.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.tag.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.tag.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.tag.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.tag.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.tag.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.tag.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
    * [.task](#selection.id.task) : <code>object</code>
      * [.full](#selection.id.task.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.task.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.task.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
    * [.taskoperational](#selection.id.taskoperational) : <code>object</code>
      * [.full](#selection.id.taskoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.taskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.taskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
    * [.tempcontent](#selection.id.tempcontent) : <code>object</code>
      * [.count](#selection.id.tempcontent.count) : <code>object</code>
        * [.get([filter])](#selection.id.tempcontent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.tempcontent.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.tempcontent.full.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
      * [.synthetic](#selection.id.tempcontent.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.tempcontent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.tempcontent.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.tempcontent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.tempcontent.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
    * [.user](#selection.id.user) : <code>object</code>
      * [.count](#selection.id.user.count) : <code>object</code>
        * [.get([filter])](#selection.id.user.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.followingapp](#selection.id.user.followingapp) : <code>object</code>
        * [.count](#selection.id.user.followingapp.count) : <code>object</code>
          * [.get([filter])](#selection.id.user.followingapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.user.followingapp.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
        * [.synthetic](#selection.id.user.followingapp.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.user.followingapp.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.user.followingapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.user.followingapp.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.followingapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.user.followingapp.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
      * [.full](#selection.id.user.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.full.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
      * [.license](#selection.id.user.license) : <code>object</code>
        * [.useraccesstype](#selection.id.user.license.useraccesstype) : <code>object</code>
          * [.post(postParams)](#selection.id.user.license.useraccesstype.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
      * [.recentapp](#selection.id.user.recentapp) : <code>object</code>
        * [.count](#selection.id.user.recentapp.count) : <code>object</code>
          * [.get([filter])](#selection.id.user.recentapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.user.recentapp.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
        * [.synthetic](#selection.id.user.recentapp.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.user.recentapp.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.user.recentapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.user.recentapp.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.recentapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.user.recentapp.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
      * [.synthetic](#selection.id.user.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.user.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.user.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.user.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.user.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
    * [.userdirectory](#selection.id.userdirectory) : <code>object</code>
      * [.count](#selection.id.userdirectory.count) : <code>object</code>
        * [.get([filter])](#selection.id.userdirectory.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.userdirectory.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
      * [.synthetic](#selection.id.userdirectory.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.userdirectory.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.userdirectory.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.userdirectory.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.template](#selection.id.userdirectory.template) : <code>object</code>
        * [.count](#selection.id.userdirectory.template.count) : <code>object</code>
          * [.get([filter])](#selection.id.userdirectory.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
        * [.full](#selection.id.userdirectory.template.full) : <code>object</code>
          * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
        * [.synthetic](#selection.id.userdirectory.template.synthetic) : <code>object</code>
          * [.put(postParams, [filter])](#selection.id.userdirectory.template.synthetic.put) ⇒ <code>Promise</code>
          * [.get([filter], [appendprivileges])](#selection.id.userdirectory.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
        * [.table](#selection.id.userdirectory.template.table) : <code>object</code>
          * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
        * [.delete([filter])](#selection.id.userdirectory.template.delete) ⇒ <code>Promise</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
      * [.delete([filter])](#selection.id.userdirectory.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
    * [.usersynctask](#selection.id.usersynctask) : <code>object</code>
      * [.count](#selection.id.usersynctask.count) : <code>object</code>
        * [.get([filter])](#selection.id.usersynctask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.usersynctask.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctask.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
      * [.synthetic](#selection.id.usersynctask.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.usersynctask.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.usersynctask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.usersynctask.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.usersynctask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.usersynctask.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctask.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
    * [.usersynctaskoperational](#selection.id.usersynctaskoperational) : <code>object</code>
      * [.count](#selection.id.usersynctaskoperational.count) : <code>object</code>
        * [.get([filter])](#selection.id.usersynctaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.usersynctaskoperational.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
      * [.synthetic](#selection.id.usersynctaskoperational.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.usersynctaskoperational.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.usersynctaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.usersynctaskoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.usersynctaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.usersynctaskoperational.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
    * [.virtualproxyconfig](#selection.id.virtualproxyconfig) : <code>object</code>
      * [.count](#selection.id.virtualproxyconfig.count) : <code>object</code>
        * [.get([filter])](#selection.id.virtualproxyconfig.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.virtualproxyconfig.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.virtualproxyconfig.full.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
      * [.synthetic](#selection.id.virtualproxyconfig.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.virtualproxyconfig.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.virtualproxyconfig.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.virtualproxyconfig.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.virtualproxyconfig.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.virtualproxyconfig.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.virtualproxyconfig.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
    * [.delete()](#selection.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#selection.id.get) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.put(postParams, [appendprivileges])](#selection.id.put) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.selectionid](#selection.selectionid) : <code>object</code>
    * [.appcomponent](#selection.selectionid.appcomponent) : <code>object</code>
      * [.table](#selection.selectionid.appcomponent.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.appcomponent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.event](#selection.selectionid.event) : <code>object</code>
      * [.table](#selection.selectionid.event.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.event.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.eventoperational](#selection.selectionid.eventoperational) : <code>object</code>
      * [.table](#selection.selectionid.eventoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.eventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.licenseaccessusage](#selection.selectionid.licenseaccessusage) : <code>object</code>
      * [.table](#selection.selectionid.licenseaccessusage.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.licenseaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.staticcontentreferencebase](#selection.selectionid.staticcontentreferencebase) : <code>object</code>
      * [.table](#selection.selectionid.staticcontentreferencebase.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.staticcontentreferencebase.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.task](#selection.selectionid.task) : <code>object</code>
      * [.table](#selection.selectionid.task.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.task.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.taskoperational](#selection.selectionid.taskoperational) : <code>object</code>
      * [.table](#selection.selectionid.taskoperational.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.taskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.app](#selection.app) : <code>object</code>
    * [.content](#selection.app.content) : <code>object</code>
      * [.post([filter])](#selection.app.content.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.datasegment](#selection.app.datasegment) : <code>object</code>
      * [.post([filter])](#selection.app.datasegment.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.internal](#selection.app.internal) : <code>object</code>
      * [.post([filter])](#selection.app.internal.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.object](#selection.app.object) : <code>object</code>
      * [.post([filter])](#selection.app.object.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.app.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.appavailability](#selection.appavailability) : <code>object</code>
    * [.post([filter])](#selection.appavailability.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.appcontentquota](#selection.appcontentquota) : <code>object</code>
    * [.post([filter])](#selection.appcontentquota.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.appseedinfo](#selection.appseedinfo) : <code>object</code>
    * [.post([filter])](#selection.appseedinfo.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.appstatus](#selection.appstatus) : <code>object</code>
    * [.post([filter])](#selection.appstatus.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.binarydelete](#selection.binarydelete) : <code>object</code>
    * [.post([filter])](#selection.binarydelete.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.binarydownload](#selection.binarydownload) : <code>object</code>
    * [.post([filter])](#selection.binarydownload.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.binarysyncruleevaluation](#selection.binarysyncruleevaluation) : <code>object</code>
    * [.post([filter])](#selection.binarysyncruleevaluation.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.compositeevent](#selection.compositeevent) : <code>object</code>
    * [.post([filter])](#selection.compositeevent.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.compositeeventoperational](#selection.compositeeventoperational) : <code>object</code>
    * [.post([filter])](#selection.compositeeventoperational.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.compositeeventruleoperational](#selection.compositeeventruleoperational) : <code>object</code>
    * [.post([filter])](#selection.compositeeventruleoperational.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.contentlibrary](#selection.contentlibrary) : <code>object</code>
    * [.post([filter])](#selection.contentlibrary.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.count](#selection.count) : <code>object</code>
    * [.get([filter])](#selection.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.custompropertydefinition](#selection.custompropertydefinition) : <code>object</code>
    * [.post([filter])](#selection.custompropertydefinition.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.dataconnection](#selection.dataconnection) : <code>object</code>
    * [.post([filter])](#selection.dataconnection.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.engineservice](#selection.engineservice) : <code>object</code>
    * [.template](#selection.engineservice.template) : <code>object</code>
      * [.post([filter])](#selection.engineservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.engineservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.executionresult](#selection.executionresult) : <code>object</code>
    * [.detail](#selection.executionresult.detail) : <code>object</code>
      * [.post([filter])](#selection.executionresult.detail.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.executionresult.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.executionsession](#selection.executionsession) : <code>object</code>
    * [.post([filter])](#selection.executionsession.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.extension](#selection.extension) : <code>object</code>
    * [.post([filter])](#selection.extension.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.externalchangeinfo](#selection.externalchangeinfo) : <code>object</code>
    * [.post([filter])](#selection.externalchangeinfo.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.externalprogramtask](#selection.externalprogramtask) : <code>object</code>
    * [.post([filter])](#selection.externalprogramtask.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.externalprogramtaskoperational](#selection.externalprogramtaskoperational) : <code>object</code>
    * [.post([filter])](#selection.externalprogramtaskoperational.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.filereference](#selection.filereference) : <code>object</code>
    * [.post([filter])](#selection.filereference.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.full](#selection.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.full.get) ⇒ <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code>
  * [.license](#selection.license) : <code>object</code>
    * [.loginaccesstype](#selection.license.loginaccesstype) : <code>object</code>
      * [.post([filter])](#selection.license.loginaccesstype.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.loginaccessusage](#selection.license.loginaccessusage) : <code>object</code>
      * [.post([filter])](#selection.license.loginaccessusage.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.useraccessgroup](#selection.license.useraccessgroup) : <code>object</code>
      * [.post([filter])](#selection.license.useraccessgroup.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.useraccesstype](#selection.license.useraccesstype) : <code>object</code>
      * [.post([filter])](#selection.license.useraccesstype.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.useraccessusage](#selection.license.useraccessusage) : <code>object</code>
      * [.post([filter])](#selection.license.useraccessusage.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.many](#selection.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#selection.many.post) ⇒ <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code>
  * [.mimetype](#selection.mimetype) : <code>object</code>
    * [.post([filter])](#selection.mimetype.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.previewcreateprivilege](#selection.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#selection.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.printingservice](#selection.printingservice) : <code>object</code>
    * [.template](#selection.printingservice.template) : <code>object</code>
      * [.post([filter])](#selection.printingservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.printingservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.proxyservice](#selection.proxyservice) : <code>object</code>
    * [.template](#selection.proxyservice.template) : <code>object</code>
      * [.post([filter])](#selection.proxyservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.proxyservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.reloadtask](#selection.reloadtask) : <code>object</code>
    * [.post([filter])](#selection.reloadtask.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.reloadtaskoperational](#selection.reloadtaskoperational) : <code>object</code>
    * [.post([filter])](#selection.reloadtaskoperational.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.repositoryservice](#selection.repositoryservice) : <code>object</code>
    * [.template](#selection.repositoryservice.template) : <code>object</code>
      * [.post([filter])](#selection.repositoryservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.repositoryservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.schedulerservice](#selection.schedulerservice) : <code>object</code>
    * [.template](#selection.schedulerservice.template) : <code>object</code>
      * [.post([filter])](#selection.schedulerservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.schedulerservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.schemaevent](#selection.schemaevent) : <code>object</code>
    * [.post([filter])](#selection.schemaevent.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.schemaeventoperational](#selection.schemaeventoperational) : <code>object</code>
    * [.post([filter])](#selection.schemaeventoperational.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.servernodeconfiguration](#selection.servernodeconfiguration) : <code>object</code>
    * [.post([filter])](#selection.servernodeconfiguration.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.servicestatus](#selection.servicestatus) : <code>object</code>
    * [.post([filter])](#selection.servicestatus.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.staticcontentreference](#selection.staticcontentreference) : <code>object</code>
    * [.post([filter])](#selection.staticcontentreference.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.stream](#selection.stream) : <code>object</code>
    * [.post([filter])](#selection.stream.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.syncsession](#selection.syncsession) : <code>object</code>
    * [.post([filter])](#selection.syncsession.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.systemrule](#selection.systemrule) : <code>object</code>
    * [.post([filter])](#selection.systemrule.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.tag](#selection.tag) : <code>object</code>
    * [.post([filter])](#selection.tag.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.tempcontent](#selection.tempcontent) : <code>object</code>
    * [.post([filter])](#selection.tempcontent.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.user](#selection.user) : <code>object</code>
    * [.followingapp](#selection.user.followingapp) : <code>object</code>
      * [.post([filter])](#selection.user.followingapp.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.recentapp](#selection.user.recentapp) : <code>object</code>
      * [.post([filter])](#selection.user.recentapp.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.user.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.userdirectory](#selection.userdirectory) : <code>object</code>
    * [.template](#selection.userdirectory.template) : <code>object</code>
      * [.post([filter])](#selection.userdirectory.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
    * [.post([filter])](#selection.userdirectory.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.usersynctask](#selection.usersynctask) : <code>object</code>
    * [.post([filter])](#selection.usersynctask.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.usersynctaskoperational](#selection.usersynctaskoperational) : <code>object</code>
    * [.post([filter])](#selection.usersynctaskoperational.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.virtualproxyconfig](#selection.virtualproxyconfig) : <code>object</code>
    * [.post([filter])](#selection.virtualproxyconfig.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.get) ⇒ <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#selection.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.id"></a>
### selection.id : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.id](#selection.id) : <code>object</code>
  * [.app](#selection.id.app) : <code>object</code>
    * [.content](#selection.id.app.content) : <code>object</code>
      * [.count](#selection.id.app.content.count) : <code>object</code>
        * [.get([filter])](#selection.id.app.content.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.app.content.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
      * [.synthetic](#selection.id.app.content.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.app.content.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.app.content.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.content.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
    * [.count](#selection.id.app.count) : <code>object</code>
      * [.get([filter])](#selection.id.app.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.datasegment](#selection.id.app.datasegment) : <code>object</code>
      * [.count](#selection.id.app.datasegment.count) : <code>object</code>
        * [.get([filter])](#selection.id.app.datasegment.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.app.datasegment.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
      * [.synthetic](#selection.id.app.datasegment.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.app.datasegment.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.app.datasegment.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.datasegment.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
    * [.full](#selection.id.app.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.full.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
    * [.internal](#selection.id.app.internal) : <code>object</code>
      * [.count](#selection.id.app.internal.count) : <code>object</code>
        * [.get([filter])](#selection.id.app.internal.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.app.internal.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
      * [.synthetic](#selection.id.app.internal.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.app.internal.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.app.internal.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.internal.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
    * [.object](#selection.id.app.object) : <code>object</code>
      * [.count](#selection.id.app.object.count) : <code>object</code>
        * [.get([filter])](#selection.id.app.object.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.app.object.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
      * [.synthetic](#selection.id.app.object.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.app.object.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.app.object.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.app.object.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.object.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.app.object.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
    * [.synthetic](#selection.id.app.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.app.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.app.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.app.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.app.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
  * [.appavailability](#selection.id.appavailability) : <code>object</code>
    * [.count](#selection.id.appavailability.count) : <code>object</code>
      * [.get([filter])](#selection.id.appavailability.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.appavailability.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appavailability.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
    * [.synthetic](#selection.id.appavailability.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.appavailability.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.appavailability.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appavailability.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appavailability.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
  * [.appcomponent](#selection.id.appcomponent) : <code>object</code>
    * [.full](#selection.id.appcomponent.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcomponent.full.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcomponent.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
  * [.appcontentquota](#selection.id.appcontentquota) : <code>object</code>
    * [.count](#selection.id.appcontentquota.count) : <code>object</code>
      * [.get([filter])](#selection.id.appcontentquota.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.appcontentquota.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcontentquota.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
    * [.synthetic](#selection.id.appcontentquota.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.appcontentquota.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.appcontentquota.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.appcontentquota.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appcontentquota.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcontentquota.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
  * [.appseedinfo](#selection.id.appseedinfo) : <code>object</code>
    * [.count](#selection.id.appseedinfo.count) : <code>object</code>
      * [.get([filter])](#selection.id.appseedinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.appseedinfo.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appseedinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
    * [.synthetic](#selection.id.appseedinfo.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.appseedinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.appseedinfo.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appseedinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appseedinfo.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
  * [.appstatus](#selection.id.appstatus) : <code>object</code>
    * [.count](#selection.id.appstatus.count) : <code>object</code>
      * [.get([filter])](#selection.id.appstatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.appstatus.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.appstatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
    * [.synthetic](#selection.id.appstatus.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.appstatus.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.appstatus.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appstatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appstatus.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
  * [.binarydelete](#selection.id.binarydelete) : <code>object</code>
    * [.count](#selection.id.binarydelete.count) : <code>object</code>
      * [.get([filter])](#selection.id.binarydelete.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.binarydelete.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydelete.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
    * [.synthetic](#selection.id.binarydelete.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.binarydelete.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.binarydelete.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarydelete.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydelete.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
  * [.binarydownload](#selection.id.binarydownload) : <code>object</code>
    * [.count](#selection.id.binarydownload.count) : <code>object</code>
      * [.get([filter])](#selection.id.binarydownload.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.binarydownload.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydownload.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
    * [.synthetic](#selection.id.binarydownload.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.binarydownload.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.binarydownload.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarydownload.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydownload.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
  * [.binarysyncruleevaluation](#selection.id.binarysyncruleevaluation) : <code>object</code>
    * [.count](#selection.id.binarysyncruleevaluation.count) : <code>object</code>
      * [.get([filter])](#selection.id.binarysyncruleevaluation.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.binarysyncruleevaluation.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarysyncruleevaluation.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
    * [.synthetic](#selection.id.binarysyncruleevaluation.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.binarysyncruleevaluation.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.binarysyncruleevaluation.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarysyncruleevaluation.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
  * [.compositeevent](#selection.id.compositeevent) : <code>object</code>
    * [.count](#selection.id.compositeevent.count) : <code>object</code>
      * [.get([filter])](#selection.id.compositeevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.compositeevent.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
    * [.synthetic](#selection.id.compositeevent.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.compositeevent.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.compositeevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.compositeevent.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.compositeevent.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeevent.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
  * [.compositeeventoperational](#selection.id.compositeeventoperational) : <code>object</code>
    * [.count](#selection.id.compositeeventoperational.count) : <code>object</code>
      * [.get([filter])](#selection.id.compositeeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.compositeeventoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
    * [.synthetic](#selection.id.compositeeventoperational.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.compositeeventoperational.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.compositeeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.compositeeventoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.compositeeventoperational.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
  * [.compositeeventruleoperational](#selection.id.compositeeventruleoperational) : <code>object</code>
    * [.count](#selection.id.compositeeventruleoperational.count) : <code>object</code>
      * [.get([filter])](#selection.id.compositeeventruleoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.compositeeventruleoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventruleoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
    * [.synthetic](#selection.id.compositeeventruleoperational.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.compositeeventruleoperational.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.compositeeventruleoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.compositeeventruleoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeeventruleoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.compositeeventruleoperational.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventruleoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
  * [.contentlibrary](#selection.id.contentlibrary) : <code>object</code>
    * [.count](#selection.id.contentlibrary.count) : <code>object</code>
      * [.get([filter])](#selection.id.contentlibrary.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.contentlibrary.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.contentlibrary.full.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
    * [.synthetic](#selection.id.contentlibrary.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.contentlibrary.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.contentlibrary.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.contentlibrary.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.contentlibrary.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.contentlibrary.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.contentlibrary.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
  * [.custompropertydefinition](#selection.id.custompropertydefinition) : <code>object</code>
    * [.count](#selection.id.custompropertydefinition.count) : <code>object</code>
      * [.get([filter])](#selection.id.custompropertydefinition.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.custompropertydefinition.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.custompropertydefinition.full.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
    * [.synthetic](#selection.id.custompropertydefinition.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.custompropertydefinition.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.custompropertydefinition.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.custompropertydefinition.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.custompropertydefinition.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.custompropertydefinition.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.custompropertydefinition.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
  * [.dataconnection](#selection.id.dataconnection) : <code>object</code>
    * [.count](#selection.id.dataconnection.count) : <code>object</code>
      * [.get([filter])](#selection.id.dataconnection.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.dataconnection.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.dataconnection.full.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
    * [.synthetic](#selection.id.dataconnection.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.dataconnection.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.dataconnection.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.dataconnection.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.dataconnection.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.dataconnection.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.dataconnection.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
  * [.engineservice](#selection.id.engineservice) : <code>object</code>
    * [.count](#selection.id.engineservice.count) : <code>object</code>
      * [.get([filter])](#selection.id.engineservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.engineservice.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
    * [.synthetic](#selection.id.engineservice.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.engineservice.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.engineservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.engineservice.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.template](#selection.id.engineservice.template) : <code>object</code>
      * [.count](#selection.id.engineservice.template.count) : <code>object</code>
        * [.get([filter])](#selection.id.engineservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.engineservice.template.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
      * [.synthetic](#selection.id.engineservice.template.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.engineservice.template.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.engineservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.engineservice.template.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.engineservice.template.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
  * [.event](#selection.id.event) : <code>object</code>
    * [.full](#selection.id.event.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.event.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.event.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
  * [.eventoperational](#selection.id.eventoperational) : <code>object</code>
    * [.full](#selection.id.eventoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.eventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.eventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
  * [.executionresult](#selection.id.executionresult) : <code>object</code>
    * [.count](#selection.id.executionresult.count) : <code>object</code>
      * [.get([filter])](#selection.id.executionresult.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.detail](#selection.id.executionresult.detail) : <code>object</code>
      * [.count](#selection.id.executionresult.detail.count) : <code>object</code>
        * [.get([filter])](#selection.id.executionresult.detail.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.executionresult.detail.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
      * [.synthetic](#selection.id.executionresult.detail.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.executionresult.detail.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.executionresult.detail.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.executionresult.detail.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.detail.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.executionresult.detail.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
    * [.full](#selection.id.executionresult.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
    * [.synthetic](#selection.id.executionresult.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.executionresult.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.executionresult.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.executionresult.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.executionresult.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
  * [.executionsession](#selection.id.executionsession) : <code>object</code>
    * [.count](#selection.id.executionsession.count) : <code>object</code>
      * [.get([filter])](#selection.id.executionsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.executionsession.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
    * [.synthetic](#selection.id.executionsession.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.executionsession.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.executionsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.executionsession.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.executionsession.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionsession.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
  * [.extension](#selection.id.extension) : <code>object</code>
    * [.count](#selection.id.extension.count) : <code>object</code>
      * [.get([filter])](#selection.id.extension.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.extension.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.extension.full.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
    * [.synthetic](#selection.id.extension.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.extension.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.extension.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.extension.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.extension.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.extension.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.extension.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
  * [.externalchangeinfo](#selection.id.externalchangeinfo) : <code>object</code>
    * [.count](#selection.id.externalchangeinfo.count) : <code>object</code>
      * [.get([filter])](#selection.id.externalchangeinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.externalchangeinfo.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalchangeinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
    * [.synthetic](#selection.id.externalchangeinfo.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.externalchangeinfo.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.externalchangeinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.externalchangeinfo.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalchangeinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.externalchangeinfo.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalchangeinfo.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
  * [.externalprogramtask](#selection.id.externalprogramtask) : <code>object</code>
    * [.count](#selection.id.externalprogramtask.count) : <code>object</code>
      * [.get([filter])](#selection.id.externalprogramtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.externalprogramtask.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
    * [.synthetic](#selection.id.externalprogramtask.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.externalprogramtask.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.externalprogramtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.externalprogramtask.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalprogramtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.externalprogramtask.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtask.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
  * [.externalprogramtaskoperational](#selection.id.externalprogramtaskoperational) : <code>object</code>
    * [.count](#selection.id.externalprogramtaskoperational.count) : <code>object</code>
      * [.get([filter])](#selection.id.externalprogramtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.externalprogramtaskoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
    * [.synthetic](#selection.id.externalprogramtaskoperational.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.externalprogramtaskoperational.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.externalprogramtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.externalprogramtaskoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalprogramtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.externalprogramtaskoperational.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
  * [.filereference](#selection.id.filereference) : <code>object</code>
    * [.count](#selection.id.filereference.count) : <code>object</code>
      * [.get([filter])](#selection.id.filereference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.filereference.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.filereference.full.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
    * [.synthetic](#selection.id.filereference.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.filereference.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.filereference.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.filereference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.filereference.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
  * [.license](#selection.id.license) : <code>object</code>
    * [.loginaccesstype](#selection.id.license.loginaccesstype) : <code>object</code>
      * [.count](#selection.id.license.loginaccesstype.count) : <code>object</code>
        * [.get([filter])](#selection.id.license.loginaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.license.loginaccesstype.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
      * [.synthetic](#selection.id.license.loginaccesstype.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.license.loginaccesstype.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.license.loginaccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.license.loginaccesstype.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.license.loginaccesstype.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
    * [.loginaccessusage](#selection.id.license.loginaccessusage) : <code>object</code>
      * [.count](#selection.id.license.loginaccessusage.count) : <code>object</code>
        * [.get([filter])](#selection.id.license.loginaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.license.loginaccessusage.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
      * [.synthetic](#selection.id.license.loginaccessusage.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.license.loginaccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.license.loginaccessusage.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
    * [.useraccessgroup](#selection.id.license.useraccessgroup) : <code>object</code>
      * [.count](#selection.id.license.useraccessgroup.count) : <code>object</code>
        * [.get([filter])](#selection.id.license.useraccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.license.useraccessgroup.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
      * [.synthetic](#selection.id.license.useraccessgroup.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.license.useraccessgroup.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.license.useraccessgroup.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.license.useraccessgroup.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.license.useraccessgroup.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
    * [.useraccesstype](#selection.id.license.useraccesstype) : <code>object</code>
      * [.count](#selection.id.license.useraccesstype.count) : <code>object</code>
        * [.get([filter])](#selection.id.license.useraccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.license.useraccesstype.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
      * [.synthetic](#selection.id.license.useraccesstype.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.license.useraccesstype.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.license.useraccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.license.useraccesstype.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.license.useraccesstype.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
    * [.useraccessusage](#selection.id.license.useraccessusage) : <code>object</code>
      * [.count](#selection.id.license.useraccessusage.count) : <code>object</code>
        * [.get([filter])](#selection.id.license.useraccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.license.useraccessusage.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
      * [.synthetic](#selection.id.license.useraccessusage.synthetic) : <code>object</code>
        * [.get([filter], [appendprivileges])](#selection.id.license.useraccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.license.useraccessusage.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
    * [.delete([filter])](#selection.id.license.delete) ⇒ <code>Promise</code>
  * [.licenseaccessusage](#selection.id.licenseaccessusage) : <code>object</code>
    * [.full](#selection.id.licenseaccessusage.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.licenseaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.licenseaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
  * [.mimetype](#selection.id.mimetype) : <code>object</code>
    * [.count](#selection.id.mimetype.count) : <code>object</code>
      * [.get([filter])](#selection.id.mimetype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.mimetype.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.mimetype.full.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
    * [.synthetic](#selection.id.mimetype.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.mimetype.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.mimetype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.mimetype.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.mimetype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.mimetype.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.mimetype.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
  * [.printingservice](#selection.id.printingservice) : <code>object</code>
    * [.count](#selection.id.printingservice.count) : <code>object</code>
      * [.get([filter])](#selection.id.printingservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.printingservice.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
    * [.synthetic](#selection.id.printingservice.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.printingservice.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.printingservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.printingservice.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.template](#selection.id.printingservice.template) : <code>object</code>
      * [.count](#selection.id.printingservice.template.count) : <code>object</code>
        * [.get([filter])](#selection.id.printingservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.printingservice.template.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
      * [.synthetic](#selection.id.printingservice.template.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.printingservice.template.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.printingservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.printingservice.template.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.printingservice.template.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
  * [.proxyservice](#selection.id.proxyservice) : <code>object</code>
    * [.count](#selection.id.proxyservice.count) : <code>object</code>
      * [.get([filter])](#selection.id.proxyservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.proxyservice.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
    * [.synthetic](#selection.id.proxyservice.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.proxyservice.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.proxyservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.proxyservice.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.template](#selection.id.proxyservice.template) : <code>object</code>
      * [.count](#selection.id.proxyservice.template.count) : <code>object</code>
        * [.get([filter])](#selection.id.proxyservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.proxyservice.template.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
      * [.synthetic](#selection.id.proxyservice.template.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.proxyservice.template.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.proxyservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.proxyservice.template.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.proxyservice.template.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
  * [.reloadtask](#selection.id.reloadtask) : <code>object</code>
    * [.count](#selection.id.reloadtask.count) : <code>object</code>
      * [.get([filter])](#selection.id.reloadtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.reloadtask.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
    * [.synthetic](#selection.id.reloadtask.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.reloadtask.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.reloadtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.reloadtask.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.reloadtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.reloadtask.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtask.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
  * [.reloadtaskoperational](#selection.id.reloadtaskoperational) : <code>object</code>
    * [.count](#selection.id.reloadtaskoperational.count) : <code>object</code>
      * [.get([filter])](#selection.id.reloadtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.reloadtaskoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
    * [.synthetic](#selection.id.reloadtaskoperational.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.reloadtaskoperational.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.reloadtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.reloadtaskoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.reloadtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.reloadtaskoperational.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
  * [.repositoryservice](#selection.id.repositoryservice) : <code>object</code>
    * [.count](#selection.id.repositoryservice.count) : <code>object</code>
      * [.get([filter])](#selection.id.repositoryservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.repositoryservice.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
    * [.synthetic](#selection.id.repositoryservice.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.repositoryservice.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.repositoryservice.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.template](#selection.id.repositoryservice.template) : <code>object</code>
      * [.count](#selection.id.repositoryservice.template.count) : <code>object</code>
        * [.get([filter])](#selection.id.repositoryservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.repositoryservice.template.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
      * [.synthetic](#selection.id.repositoryservice.template.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.repositoryservice.template.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.repositoryservice.template.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.repositoryservice.template.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
  * [.schedulerservice](#selection.id.schedulerservice) : <code>object</code>
    * [.count](#selection.id.schedulerservice.count) : <code>object</code>
      * [.get([filter])](#selection.id.schedulerservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.schedulerservice.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
    * [.synthetic](#selection.id.schedulerservice.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.schedulerservice.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.schedulerservice.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.template](#selection.id.schedulerservice.template) : <code>object</code>
      * [.count](#selection.id.schedulerservice.template.count) : <code>object</code>
        * [.get([filter])](#selection.id.schedulerservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.schedulerservice.template.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
      * [.synthetic](#selection.id.schedulerservice.template.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.schedulerservice.template.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.schedulerservice.template.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.schedulerservice.template.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
  * [.schemaevent](#selection.id.schemaevent) : <code>object</code>
    * [.count](#selection.id.schemaevent.count) : <code>object</code>
      * [.get([filter])](#selection.id.schemaevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.schemaevent.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
    * [.synthetic](#selection.id.schemaevent.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.schemaevent.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.schemaevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.schemaevent.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schemaevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.schemaevent.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaevent.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
  * [.schemaeventoperational](#selection.id.schemaeventoperational) : <code>object</code>
    * [.count](#selection.id.schemaeventoperational.count) : <code>object</code>
      * [.get([filter])](#selection.id.schemaeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.schemaeventoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
    * [.synthetic](#selection.id.schemaeventoperational.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.schemaeventoperational.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.schemaeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.schemaeventoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schemaeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.schemaeventoperational.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
  * [.servernodeconfiguration](#selection.id.servernodeconfiguration) : <code>object</code>
    * [.count](#selection.id.servernodeconfiguration.count) : <code>object</code>
      * [.get([filter])](#selection.id.servernodeconfiguration.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.servernodeconfiguration.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.servernodeconfiguration.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
    * [.synthetic](#selection.id.servernodeconfiguration.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.servernodeconfiguration.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.servernodeconfiguration.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.servernodeconfiguration.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.servernodeconfiguration.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.servernodeconfiguration.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.servernodeconfiguration.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
  * [.servicestatus](#selection.id.servicestatus) : <code>object</code>
    * [.count](#selection.id.servicestatus.count) : <code>object</code>
      * [.get([filter])](#selection.id.servicestatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.servicestatus.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.servicestatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
    * [.synthetic](#selection.id.servicestatus.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.servicestatus.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.servicestatus.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.servicestatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.servicestatus.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
  * [.staticcontentreference](#selection.id.staticcontentreference) : <code>object</code>
    * [.count](#selection.id.staticcontentreference.count) : <code>object</code>
      * [.get([filter])](#selection.id.staticcontentreference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.staticcontentreference.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreference.full.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
    * [.synthetic](#selection.id.staticcontentreference.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.staticcontentreference.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.staticcontentreference.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.staticcontentreference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreference.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
  * [.staticcontentreferencebase](#selection.id.staticcontentreferencebase) : <code>object</code>
    * [.full](#selection.id.staticcontentreferencebase.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreferencebase.full.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreferencebase.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
  * [.stream](#selection.id.stream) : <code>object</code>
    * [.count](#selection.id.stream.count) : <code>object</code>
      * [.get([filter])](#selection.id.stream.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.stream.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.stream.full.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
    * [.synthetic](#selection.id.stream.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.stream.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.stream.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.stream.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.stream.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.stream.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.stream.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
  * [.syncsession](#selection.id.syncsession) : <code>object</code>
    * [.count](#selection.id.syncsession.count) : <code>object</code>
      * [.get([filter])](#selection.id.syncsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.syncsession.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.syncsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
    * [.synthetic](#selection.id.syncsession.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.syncsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.syncsession.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.syncsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.syncsession.get) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
  * [.systemrule](#selection.id.systemrule) : <code>object</code>
    * [.count](#selection.id.systemrule.count) : <code>object</code>
      * [.get([filter])](#selection.id.systemrule.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.systemrule.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.systemrule.full.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
    * [.synthetic](#selection.id.systemrule.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.systemrule.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.systemrule.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.systemrule.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.systemrule.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.systemrule.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.systemrule.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
  * [.tag](#selection.id.tag) : <code>object</code>
    * [.count](#selection.id.tag.count) : <code>object</code>
      * [.get([filter])](#selection.id.tag.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.tag.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.tag.full.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
    * [.synthetic](#selection.id.tag.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.tag.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.tag.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.tag.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.tag.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.tag.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.tag.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
  * [.task](#selection.id.task) : <code>object</code>
    * [.full](#selection.id.task.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.task.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.task.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
  * [.taskoperational](#selection.id.taskoperational) : <code>object</code>
    * [.full](#selection.id.taskoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.taskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.taskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
  * [.tempcontent](#selection.id.tempcontent) : <code>object</code>
    * [.count](#selection.id.tempcontent.count) : <code>object</code>
      * [.get([filter])](#selection.id.tempcontent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.tempcontent.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.tempcontent.full.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
    * [.synthetic](#selection.id.tempcontent.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.tempcontent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.tempcontent.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.tempcontent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.tempcontent.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
  * [.user](#selection.id.user) : <code>object</code>
    * [.count](#selection.id.user.count) : <code>object</code>
      * [.get([filter])](#selection.id.user.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.followingapp](#selection.id.user.followingapp) : <code>object</code>
      * [.count](#selection.id.user.followingapp.count) : <code>object</code>
        * [.get([filter])](#selection.id.user.followingapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.user.followingapp.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
      * [.synthetic](#selection.id.user.followingapp.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.user.followingapp.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.user.followingapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.user.followingapp.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.followingapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.user.followingapp.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
    * [.full](#selection.id.user.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.full.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
    * [.license](#selection.id.user.license) : <code>object</code>
      * [.useraccesstype](#selection.id.user.license.useraccesstype) : <code>object</code>
        * [.post(postParams)](#selection.id.user.license.useraccesstype.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
    * [.recentapp](#selection.id.user.recentapp) : <code>object</code>
      * [.count](#selection.id.user.recentapp.count) : <code>object</code>
        * [.get([filter])](#selection.id.user.recentapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.user.recentapp.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
      * [.synthetic](#selection.id.user.recentapp.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.user.recentapp.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.user.recentapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.user.recentapp.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.recentapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.user.recentapp.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
    * [.synthetic](#selection.id.user.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.user.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.user.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.user.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.user.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.userdirectory](#selection.id.userdirectory) : <code>object</code>
    * [.count](#selection.id.userdirectory.count) : <code>object</code>
      * [.get([filter])](#selection.id.userdirectory.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.userdirectory.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
    * [.synthetic](#selection.id.userdirectory.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.userdirectory.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.userdirectory.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.userdirectory.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.template](#selection.id.userdirectory.template) : <code>object</code>
      * [.count](#selection.id.userdirectory.template.count) : <code>object</code>
        * [.get([filter])](#selection.id.userdirectory.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.full](#selection.id.userdirectory.template.full) : <code>object</code>
        * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
      * [.synthetic](#selection.id.userdirectory.template.synthetic) : <code>object</code>
        * [.put(postParams, [filter])](#selection.id.userdirectory.template.synthetic.put) ⇒ <code>Promise</code>
        * [.get([filter], [appendprivileges])](#selection.id.userdirectory.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
      * [.table](#selection.id.userdirectory.template.table) : <code>object</code>
        * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
      * [.delete([filter])](#selection.id.userdirectory.template.delete) ⇒ <code>Promise</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
    * [.delete([filter])](#selection.id.userdirectory.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
  * [.usersynctask](#selection.id.usersynctask) : <code>object</code>
    * [.count](#selection.id.usersynctask.count) : <code>object</code>
      * [.get([filter])](#selection.id.usersynctask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.usersynctask.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctask.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
    * [.synthetic](#selection.id.usersynctask.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.usersynctask.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.usersynctask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.usersynctask.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.usersynctask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.usersynctask.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctask.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
  * [.usersynctaskoperational](#selection.id.usersynctaskoperational) : <code>object</code>
    * [.count](#selection.id.usersynctaskoperational.count) : <code>object</code>
      * [.get([filter])](#selection.id.usersynctaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.usersynctaskoperational.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
    * [.synthetic](#selection.id.usersynctaskoperational.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.usersynctaskoperational.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.usersynctaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.usersynctaskoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.usersynctaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.usersynctaskoperational.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
  * [.virtualproxyconfig](#selection.id.virtualproxyconfig) : <code>object</code>
    * [.count](#selection.id.virtualproxyconfig.count) : <code>object</code>
      * [.get([filter])](#selection.id.virtualproxyconfig.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.virtualproxyconfig.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.virtualproxyconfig.full.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
    * [.synthetic](#selection.id.virtualproxyconfig.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.virtualproxyconfig.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.virtualproxyconfig.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.virtualproxyconfig.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.virtualproxyconfig.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.virtualproxyconfig.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.virtualproxyconfig.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
  * [.delete()](#selection.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#selection.id.get) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.put(postParams, [appendprivileges])](#selection.id.put) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.id.app"></a>
#### id.app : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.app](#selection.id.app) : <code>object</code>
  * [.content](#selection.id.app.content) : <code>object</code>
    * [.count](#selection.id.app.content.count) : <code>object</code>
      * [.get([filter])](#selection.id.app.content.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.app.content.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
    * [.synthetic](#selection.id.app.content.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.app.content.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.app.content.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.content.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
  * [.count](#selection.id.app.count) : <code>object</code>
    * [.get([filter])](#selection.id.app.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.datasegment](#selection.id.app.datasegment) : <code>object</code>
    * [.count](#selection.id.app.datasegment.count) : <code>object</code>
      * [.get([filter])](#selection.id.app.datasegment.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.app.datasegment.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
    * [.synthetic](#selection.id.app.datasegment.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.app.datasegment.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.app.datasegment.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.datasegment.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
  * [.full](#selection.id.app.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.full.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
  * [.internal](#selection.id.app.internal) : <code>object</code>
    * [.count](#selection.id.app.internal.count) : <code>object</code>
      * [.get([filter])](#selection.id.app.internal.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.app.internal.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
    * [.synthetic](#selection.id.app.internal.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.app.internal.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.app.internal.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.internal.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
  * [.object](#selection.id.app.object) : <code>object</code>
    * [.count](#selection.id.app.object.count) : <code>object</code>
      * [.get([filter])](#selection.id.app.object.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.app.object.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
    * [.synthetic](#selection.id.app.object.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.app.object.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.app.object.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.app.object.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.object.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.app.object.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
  * [.synthetic](#selection.id.app.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.app.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.app.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.app.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.app.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>

<a name="selection.id.app.content"></a>
##### app.content : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  

* [.content](#selection.id.app.content) : <code>object</code>
  * [.count](#selection.id.app.content.count) : <code>object</code>
    * [.get([filter])](#selection.id.app.content.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.app.content.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
  * [.synthetic](#selection.id.app.content.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.app.content.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.app.content.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.content.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.content.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>

<a name="selection.id.app.content.count"></a>
###### content.count : <code>object</code>
**Kind**: static namespace of <code>[content](#selection.id.app.content)</code>  
<a name="selection.id.app.content.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/content/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.app.content.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.content.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.app.content.full"></a>
###### content.full : <code>object</code>
**Kind**: static namespace of <code>[content](#selection.id.app.content)</code>  
<a name="selection.id.app.content.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/content/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[full](#selection.id.app.content.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.content.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
	console.log(Array.<AppContent>)
})
```
<a name="selection.id.app.content.synthetic"></a>
###### content.synthetic : <code>object</code>
**Kind**: static namespace of <code>[content](#selection.id.app.content)</code>  
<a name="selection.id.app.content.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/content/synthetic?filter={filter}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[synthetic](#selection.id.app.content.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.content.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.app.content.table"></a>
###### content.table : <code>object</code>
**Kind**: static namespace of <code>[content](#selection.id.app.content)</code>  
<a name="selection.id.app.content.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/content/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is manual

**Kind**: static method of <code>[table](#selection.id.app.content.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.content.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.app.content.get"></a>
###### content.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/content?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[content](#selection.id.app.content)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.content.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
	console.log(Array.<AppContent>)
})
```
<a name="selection.id.app.count"></a>
##### app.count : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  
<a name="selection.id.app.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.app.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.app.datasegment"></a>
##### app.datasegment : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  

* [.datasegment](#selection.id.app.datasegment) : <code>object</code>
  * [.count](#selection.id.app.datasegment.count) : <code>object</code>
    * [.get([filter])](#selection.id.app.datasegment.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.app.datasegment.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
  * [.synthetic](#selection.id.app.datasegment.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.app.datasegment.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.app.datasegment.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.datasegment.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.datasegment.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>

<a name="selection.id.app.datasegment.count"></a>
###### datasegment.count : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#selection.id.app.datasegment)</code>  
<a name="selection.id.app.datasegment.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/datasegment/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.app.datasegment.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.datasegment.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.app.datasegment.full"></a>
###### datasegment.full : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#selection.id.app.datasegment)</code>  
<a name="selection.id.app.datasegment.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/datasegment/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.app.datasegment.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.datasegment.full.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
	console.log(Array.<AppDataSegment>)
})
```
<a name="selection.id.app.datasegment.synthetic"></a>
###### datasegment.synthetic : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#selection.id.app.datasegment)</code>  
<a name="selection.id.app.datasegment.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/datasegment/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.app.datasegment.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.datasegment.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.app.datasegment.table"></a>
###### datasegment.table : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#selection.id.app.datasegment)</code>  
<a name="selection.id.app.datasegment.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/datasegment/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.app.datasegment.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.datasegment.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.app.datasegment.get"></a>
###### datasegment.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/datasegment?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[datasegment](#selection.id.app.datasegment)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.datasegment.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
	console.log(Array.<AppDataSegment>)
})
```
<a name="selection.id.app.full"></a>
##### app.full : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  
<a name="selection.id.app.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.app.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;App&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.full.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
	console.log(Array.<App>)
})
```
<a name="selection.id.app.internal"></a>
##### app.internal : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  

* [.internal](#selection.id.app.internal) : <code>object</code>
  * [.count](#selection.id.app.internal.count) : <code>object</code>
    * [.get([filter])](#selection.id.app.internal.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.app.internal.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
  * [.synthetic](#selection.id.app.internal.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.app.internal.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.app.internal.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.internal.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.internal.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>

<a name="selection.id.app.internal.count"></a>
###### internal.count : <code>object</code>
**Kind**: static namespace of <code>[internal](#selection.id.app.internal)</code>  
<a name="selection.id.app.internal.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/internal/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.app.internal.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.internal.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.app.internal.full"></a>
###### internal.full : <code>object</code>
**Kind**: static namespace of <code>[internal](#selection.id.app.internal)</code>  
<a name="selection.id.app.internal.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/internal/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.app.internal.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.internal.full.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
	console.log(Array.<AppInternal>)
})
```
<a name="selection.id.app.internal.synthetic"></a>
###### internal.synthetic : <code>object</code>
**Kind**: static namespace of <code>[internal](#selection.id.app.internal)</code>  
<a name="selection.id.app.internal.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/internal/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.app.internal.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.internal.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.app.internal.table"></a>
###### internal.table : <code>object</code>
**Kind**: static namespace of <code>[internal](#selection.id.app.internal)</code>  
<a name="selection.id.app.internal.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/internal/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.app.internal.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.internal.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.app.internal.get"></a>
###### internal.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/internal?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[internal](#selection.id.app.internal)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.internal.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
	console.log(Array.<AppInternal>)
})
```
<a name="selection.id.app.object"></a>
##### app.object : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  

* [.object](#selection.id.app.object) : <code>object</code>
  * [.count](#selection.id.app.object.count) : <code>object</code>
    * [.get([filter])](#selection.id.app.object.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.app.object.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
  * [.synthetic](#selection.id.app.object.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.app.object.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.app.object.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.app.object.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.app.object.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.app.object.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.app.object.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>

<a name="selection.id.app.object.count"></a>
###### object.count : <code>object</code>
**Kind**: static namespace of <code>[object](#selection.id.app.object)</code>  
<a name="selection.id.app.object.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.app.object.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.app.object.full"></a>
###### object.full : <code>object</code>
**Kind**: static namespace of <code>[object](#selection.id.app.object)</code>  
<a name="selection.id.app.object.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.app.object.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.full.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
	console.log(Array.<AppObject>)
})
```
<a name="selection.id.app.object.synthetic"></a>
###### object.synthetic : <code>object</code>
**Kind**: static namespace of <code>[object](#selection.id.app.object)</code>  

* [.synthetic](#selection.id.app.object.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.app.object.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.app.object.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.app.object.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.app.object.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.app.object.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.app.object.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.app.object.table"></a>
###### object.table : <code>object</code>
**Kind**: static namespace of <code>[object](#selection.id.app.object)</code>  
<a name="selection.id.app.object.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.app.object.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.app.object.delete"></a>
###### object.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object?filter={filter}

This method is generated

**Kind**: static method of <code>[object](#selection.id.app.object)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.app.object.get"></a>
###### object.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/object?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[object](#selection.id.app.object)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.object.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
	console.log(Array.<AppObject>)
})
```
<a name="selection.id.app.synthetic"></a>
##### app.synthetic : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  

* [.synthetic](#selection.id.app.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.app.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.app.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.app.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.app.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.app.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.app.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.app.table"></a>
##### app.table : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.id.app)</code>  
<a name="selection.id.app.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.app.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.app.delete"></a>
##### app.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app?filter={filter}

This method is manual

**Kind**: static method of <code>[app](#selection.id.app)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.app.get"></a>
##### app.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/app?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[app](#selection.id.app)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;App&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).app.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
	console.log(Array.<App>)
})
```
<a name="selection.id.appavailability"></a>
#### id.appavailability : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.appavailability](#selection.id.appavailability) : <code>object</code>
  * [.count](#selection.id.appavailability.count) : <code>object</code>
    * [.get([filter])](#selection.id.appavailability.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.appavailability.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appavailability.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
  * [.synthetic](#selection.id.appavailability.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.appavailability.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.appavailability.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appavailability.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.appavailability.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>

<a name="selection.id.appavailability.count"></a>
##### appavailability.count : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#selection.id.appavailability)</code>  
<a name="selection.id.appavailability.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appavailability/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.appavailability.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appavailability.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.appavailability.full"></a>
##### appavailability.full : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#selection.id.appavailability)</code>  
<a name="selection.id.appavailability.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appavailability/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.appavailability.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appavailability.full.get(filter, orderby, appendprivileges).then(function(Array.<AppAvailability>) {
	console.log(Array.<AppAvailability>)
})
```
<a name="selection.id.appavailability.synthetic"></a>
##### appavailability.synthetic : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#selection.id.appavailability)</code>  
<a name="selection.id.appavailability.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appavailability/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.appavailability.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appavailability.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.appavailability.table"></a>
##### appavailability.table : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#selection.id.appavailability)</code>  
<a name="selection.id.appavailability.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appavailability/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.appavailability.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appavailability.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.appavailability.get"></a>
##### appavailability.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appavailability?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[appavailability](#selection.id.appavailability)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appavailability.get(filter, orderby, appendprivileges).then(function(Array.<AppAvailability>) {
	console.log(Array.<AppAvailability>)
})
```
<a name="selection.id.appcomponent"></a>
#### id.appcomponent : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.appcomponent](#selection.id.appcomponent) : <code>object</code>
  * [.full](#selection.id.appcomponent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcomponent.full.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcomponent.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>

<a name="selection.id.appcomponent.full"></a>
##### appcomponent.full : <code>object</code>
**Kind**: static namespace of <code>[appcomponent](#selection.id.appcomponent)</code>  
<a name="selection.id.appcomponent.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcomponent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.appcomponent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcomponent.full.get(filter, orderby, appendprivileges).then(function(Array.<IAppComponent>) {
	console.log(Array.<IAppComponent>)
})
```
<a name="selection.id.appcomponent.get"></a>
##### appcomponent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcomponent?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[appcomponent](#selection.id.appcomponent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcomponent.get(filter, orderby, appendprivileges).then(function(Array.<IAppComponent>) {
	console.log(Array.<IAppComponent>)
})
```
<a name="selection.id.appcontentquota"></a>
#### id.appcontentquota : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.appcontentquota](#selection.id.appcontentquota) : <code>object</code>
  * [.count](#selection.id.appcontentquota.count) : <code>object</code>
    * [.get([filter])](#selection.id.appcontentquota.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.appcontentquota.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcontentquota.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
  * [.synthetic](#selection.id.appcontentquota.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.appcontentquota.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.appcontentquota.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.appcontentquota.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appcontentquota.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.appcontentquota.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>

<a name="selection.id.appcontentquota.count"></a>
##### appcontentquota.count : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#selection.id.appcontentquota)</code>  
<a name="selection.id.appcontentquota.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcontentquota/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.appcontentquota.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcontentquota.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.appcontentquota.full"></a>
##### appcontentquota.full : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#selection.id.appcontentquota)</code>  
<a name="selection.id.appcontentquota.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcontentquota/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.appcontentquota.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcontentquota.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContentQuota>) {
	console.log(Array.<AppContentQuota>)
})
```
<a name="selection.id.appcontentquota.synthetic"></a>
##### appcontentquota.synthetic : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#selection.id.appcontentquota)</code>  

* [.synthetic](#selection.id.appcontentquota.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.appcontentquota.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.appcontentquota.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.appcontentquota.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcontentquota/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.appcontentquota.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcontentquota.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.appcontentquota.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcontentquota/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.appcontentquota.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcontentquota.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.appcontentquota.table"></a>
##### appcontentquota.table : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#selection.id.appcontentquota)</code>  
<a name="selection.id.appcontentquota.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcontentquota/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.appcontentquota.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcontentquota.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.appcontentquota.get"></a>
##### appcontentquota.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appcontentquota?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[appcontentquota](#selection.id.appcontentquota)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appcontentquota.get(filter, orderby, appendprivileges).then(function(Array.<AppContentQuota>) {
	console.log(Array.<AppContentQuota>)
})
```
<a name="selection.id.appseedinfo"></a>
#### id.appseedinfo : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.appseedinfo](#selection.id.appseedinfo) : <code>object</code>
  * [.count](#selection.id.appseedinfo.count) : <code>object</code>
    * [.get([filter])](#selection.id.appseedinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.appseedinfo.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appseedinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
  * [.synthetic](#selection.id.appseedinfo.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.appseedinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.appseedinfo.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appseedinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.appseedinfo.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>

<a name="selection.id.appseedinfo.count"></a>
##### appseedinfo.count : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#selection.id.appseedinfo)</code>  
<a name="selection.id.appseedinfo.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appseedinfo/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.appseedinfo.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appseedinfo.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.appseedinfo.full"></a>
##### appseedinfo.full : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#selection.id.appseedinfo)</code>  
<a name="selection.id.appseedinfo.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appseedinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.appseedinfo.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appseedinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<AppSeedInfo>) {
	console.log(Array.<AppSeedInfo>)
})
```
<a name="selection.id.appseedinfo.synthetic"></a>
##### appseedinfo.synthetic : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#selection.id.appseedinfo)</code>  
<a name="selection.id.appseedinfo.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appseedinfo/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.appseedinfo.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appseedinfo.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.appseedinfo.table"></a>
##### appseedinfo.table : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#selection.id.appseedinfo)</code>  
<a name="selection.id.appseedinfo.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appseedinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.appseedinfo.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appseedinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.appseedinfo.get"></a>
##### appseedinfo.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appseedinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[appseedinfo](#selection.id.appseedinfo)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appseedinfo.get(filter, orderby, appendprivileges).then(function(Array.<AppSeedInfo>) {
	console.log(Array.<AppSeedInfo>)
})
```
<a name="selection.id.appstatus"></a>
#### id.appstatus : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.appstatus](#selection.id.appstatus) : <code>object</code>
  * [.count](#selection.id.appstatus.count) : <code>object</code>
    * [.get([filter])](#selection.id.appstatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.appstatus.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.appstatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
  * [.synthetic](#selection.id.appstatus.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.appstatus.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.appstatus.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.appstatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.appstatus.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>

<a name="selection.id.appstatus.count"></a>
##### appstatus.count : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#selection.id.appstatus)</code>  
<a name="selection.id.appstatus.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appstatus/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.appstatus.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appstatus.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.appstatus.full"></a>
##### appstatus.full : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#selection.id.appstatus)</code>  
<a name="selection.id.appstatus.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appstatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.appstatus.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appstatus.full.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
	console.log(Array.<AppStatus>)
})
```
<a name="selection.id.appstatus.synthetic"></a>
##### appstatus.synthetic : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#selection.id.appstatus)</code>  
<a name="selection.id.appstatus.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appstatus/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.appstatus.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appstatus.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.appstatus.table"></a>
##### appstatus.table : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#selection.id.appstatus)</code>  
<a name="selection.id.appstatus.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appstatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.appstatus.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appstatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.appstatus.get"></a>
##### appstatus.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/appstatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[appstatus](#selection.id.appstatus)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).appstatus.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
	console.log(Array.<AppStatus>)
})
```
<a name="selection.id.binarydelete"></a>
#### id.binarydelete : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.binarydelete](#selection.id.binarydelete) : <code>object</code>
  * [.count](#selection.id.binarydelete.count) : <code>object</code>
    * [.get([filter])](#selection.id.binarydelete.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.binarydelete.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydelete.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
  * [.synthetic](#selection.id.binarydelete.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.binarydelete.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.binarydelete.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarydelete.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydelete.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>

<a name="selection.id.binarydelete.count"></a>
##### binarydelete.count : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#selection.id.binarydelete)</code>  
<a name="selection.id.binarydelete.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydelete/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.binarydelete.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydelete.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.binarydelete.full"></a>
##### binarydelete.full : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#selection.id.binarydelete)</code>  
<a name="selection.id.binarydelete.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydelete/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.binarydelete.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydelete.full.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDelete>) {
	console.log(Array.<BinaryDelete>)
})
```
<a name="selection.id.binarydelete.synthetic"></a>
##### binarydelete.synthetic : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#selection.id.binarydelete)</code>  
<a name="selection.id.binarydelete.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydelete/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.binarydelete.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydelete.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.binarydelete.table"></a>
##### binarydelete.table : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#selection.id.binarydelete)</code>  
<a name="selection.id.binarydelete.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydelete/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.binarydelete.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydelete.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.binarydelete.get"></a>
##### binarydelete.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydelete?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[binarydelete](#selection.id.binarydelete)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydelete.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDelete>) {
	console.log(Array.<BinaryDelete>)
})
```
<a name="selection.id.binarydownload"></a>
#### id.binarydownload : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.binarydownload](#selection.id.binarydownload) : <code>object</code>
  * [.count](#selection.id.binarydownload.count) : <code>object</code>
    * [.get([filter])](#selection.id.binarydownload.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.binarydownload.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydownload.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
  * [.synthetic](#selection.id.binarydownload.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.binarydownload.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.binarydownload.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarydownload.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarydownload.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>

<a name="selection.id.binarydownload.count"></a>
##### binarydownload.count : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#selection.id.binarydownload)</code>  
<a name="selection.id.binarydownload.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydownload/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.binarydownload.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydownload.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.binarydownload.full"></a>
##### binarydownload.full : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#selection.id.binarydownload)</code>  
<a name="selection.id.binarydownload.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydownload/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.binarydownload.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydownload.full.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDownload>) {
	console.log(Array.<BinaryDownload>)
})
```
<a name="selection.id.binarydownload.synthetic"></a>
##### binarydownload.synthetic : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#selection.id.binarydownload)</code>  
<a name="selection.id.binarydownload.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydownload/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.binarydownload.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydownload.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.binarydownload.table"></a>
##### binarydownload.table : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#selection.id.binarydownload)</code>  
<a name="selection.id.binarydownload.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydownload/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.binarydownload.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydownload.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.binarydownload.get"></a>
##### binarydownload.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarydownload?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[binarydownload](#selection.id.binarydownload)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarydownload.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDownload>) {
	console.log(Array.<BinaryDownload>)
})
```
<a name="selection.id.binarysyncruleevaluation"></a>
#### id.binarysyncruleevaluation : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.binarysyncruleevaluation](#selection.id.binarysyncruleevaluation) : <code>object</code>
  * [.count](#selection.id.binarysyncruleevaluation.count) : <code>object</code>
    * [.get([filter])](#selection.id.binarysyncruleevaluation.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.binarysyncruleevaluation.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarysyncruleevaluation.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
  * [.synthetic](#selection.id.binarysyncruleevaluation.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.binarysyncruleevaluation.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.binarysyncruleevaluation.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.binarysyncruleevaluation.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>

<a name="selection.id.binarysyncruleevaluation.count"></a>
##### binarysyncruleevaluation.count : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#selection.id.binarysyncruleevaluation)</code>  
<a name="selection.id.binarysyncruleevaluation.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarysyncruleevaluation/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.binarysyncruleevaluation.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarysyncruleevaluation.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.binarysyncruleevaluation.full"></a>
##### binarysyncruleevaluation.full : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#selection.id.binarysyncruleevaluation)</code>  
<a name="selection.id.binarysyncruleevaluation.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarysyncruleevaluation/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.binarysyncruleevaluation.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarysyncruleevaluation.full.get(filter, orderby, appendprivileges).then(function(Array.<BinarySyncRuleEvaluation>) {
	console.log(Array.<BinarySyncRuleEvaluation>)
})
```
<a name="selection.id.binarysyncruleevaluation.synthetic"></a>
##### binarysyncruleevaluation.synthetic : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#selection.id.binarysyncruleevaluation)</code>  
<a name="selection.id.binarysyncruleevaluation.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarysyncruleevaluation/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.binarysyncruleevaluation.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarysyncruleevaluation.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.binarysyncruleevaluation.table"></a>
##### binarysyncruleevaluation.table : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#selection.id.binarysyncruleevaluation)</code>  
<a name="selection.id.binarysyncruleevaluation.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarysyncruleevaluation/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.binarysyncruleevaluation.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarysyncruleevaluation.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.binarysyncruleevaluation.get"></a>
##### binarysyncruleevaluation.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/binarysyncruleevaluation?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[binarysyncruleevaluation](#selection.id.binarysyncruleevaluation)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).binarysyncruleevaluation.get(filter, orderby, appendprivileges).then(function(Array.<BinarySyncRuleEvaluation>) {
	console.log(Array.<BinarySyncRuleEvaluation>)
})
```
<a name="selection.id.compositeevent"></a>
#### id.compositeevent : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.compositeevent](#selection.id.compositeevent) : <code>object</code>
  * [.count](#selection.id.compositeevent.count) : <code>object</code>
    * [.get([filter])](#selection.id.compositeevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.compositeevent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
  * [.synthetic](#selection.id.compositeevent.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.compositeevent.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.compositeevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.compositeevent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.compositeevent.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeevent.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>

<a name="selection.id.compositeevent.count"></a>
##### compositeevent.count : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#selection.id.compositeevent)</code>  
<a name="selection.id.compositeevent.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.compositeevent.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.compositeevent.full"></a>
##### compositeevent.full : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#selection.id.compositeevent)</code>  
<a name="selection.id.compositeevent.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.compositeevent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
	console.log(Array.<CompositeEvent>)
})
```
<a name="selection.id.compositeevent.synthetic"></a>
##### compositeevent.synthetic : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#selection.id.compositeevent)</code>  

* [.synthetic](#selection.id.compositeevent.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.compositeevent.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.compositeevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.compositeevent.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.compositeevent.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.compositeevent.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.compositeevent.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.compositeevent.table"></a>
##### compositeevent.table : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#selection.id.compositeevent)</code>  
<a name="selection.id.compositeevent.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.compositeevent.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.compositeevent.delete"></a>
##### compositeevent.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent?filter={filter}

This method is generated

**Kind**: static method of <code>[compositeevent](#selection.id.compositeevent)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.compositeevent.get"></a>
##### compositeevent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeevent](#selection.id.compositeevent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeevent.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
	console.log(Array.<CompositeEvent>)
})
```
<a name="selection.id.compositeeventoperational"></a>
#### id.compositeeventoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.compositeeventoperational](#selection.id.compositeeventoperational) : <code>object</code>
  * [.count](#selection.id.compositeeventoperational.count) : <code>object</code>
    * [.get([filter])](#selection.id.compositeeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.compositeeventoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
  * [.synthetic](#selection.id.compositeeventoperational.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.compositeeventoperational.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.compositeeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.compositeeventoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.compositeeventoperational.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>

<a name="selection.id.compositeeventoperational.count"></a>
##### compositeeventoperational.count : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#selection.id.compositeeventoperational)</code>  
<a name="selection.id.compositeeventoperational.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.compositeeventoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.compositeeventoperational.full"></a>
##### compositeeventoperational.full : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#selection.id.compositeeventoperational)</code>  
<a name="selection.id.compositeeventoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.compositeeventoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
	console.log(Array.<CompositeEventOperational>)
})
```
<a name="selection.id.compositeeventoperational.synthetic"></a>
##### compositeeventoperational.synthetic : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#selection.id.compositeeventoperational)</code>  

* [.synthetic](#selection.id.compositeeventoperational.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.compositeeventoperational.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.compositeeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.compositeeventoperational.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.compositeeventoperational.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.compositeeventoperational.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.compositeeventoperational.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.compositeeventoperational.table"></a>
##### compositeeventoperational.table : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#selection.id.compositeeventoperational)</code>  
<a name="selection.id.compositeeventoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.compositeeventoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.compositeeventoperational.delete"></a>
##### compositeeventoperational.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[compositeeventoperational](#selection.id.compositeeventoperational)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.compositeeventoperational.get"></a>
##### compositeeventoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeeventoperational](#selection.id.compositeeventoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
	console.log(Array.<CompositeEventOperational>)
})
```
<a name="selection.id.compositeeventruleoperational"></a>
#### id.compositeeventruleoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.compositeeventruleoperational](#selection.id.compositeeventruleoperational) : <code>object</code>
  * [.count](#selection.id.compositeeventruleoperational.count) : <code>object</code>
    * [.get([filter])](#selection.id.compositeeventruleoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.compositeeventruleoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventruleoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
  * [.synthetic](#selection.id.compositeeventruleoperational.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.compositeeventruleoperational.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.compositeeventruleoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.compositeeventruleoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.compositeeventruleoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.compositeeventruleoperational.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.compositeeventruleoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>

<a name="selection.id.compositeeventruleoperational.count"></a>
##### compositeeventruleoperational.count : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#selection.id.compositeeventruleoperational)</code>  
<a name="selection.id.compositeeventruleoperational.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.compositeeventruleoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.compositeeventruleoperational.full"></a>
##### compositeeventruleoperational.full : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#selection.id.compositeeventruleoperational)</code>  
<a name="selection.id.compositeeventruleoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.compositeeventruleoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
	console.log(Array.<CompositeEventRuleOperational>)
})
```
<a name="selection.id.compositeeventruleoperational.synthetic"></a>
##### compositeeventruleoperational.synthetic : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#selection.id.compositeeventruleoperational)</code>  

* [.synthetic](#selection.id.compositeeventruleoperational.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.compositeeventruleoperational.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.compositeeventruleoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.compositeeventruleoperational.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.compositeeventruleoperational.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.compositeeventruleoperational.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.compositeeventruleoperational.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.compositeeventruleoperational.table"></a>
##### compositeeventruleoperational.table : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#selection.id.compositeeventruleoperational)</code>  
<a name="selection.id.compositeeventruleoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.compositeeventruleoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.compositeeventruleoperational.delete"></a>
##### compositeeventruleoperational.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[compositeeventruleoperational](#selection.id.compositeeventruleoperational)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.compositeeventruleoperational.get"></a>
##### compositeeventruleoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/compositeeventruleoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeeventruleoperational](#selection.id.compositeeventruleoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).compositeeventruleoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
	console.log(Array.<CompositeEventRuleOperational>)
})
```
<a name="selection.id.contentlibrary"></a>
#### id.contentlibrary : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.contentlibrary](#selection.id.contentlibrary) : <code>object</code>
  * [.count](#selection.id.contentlibrary.count) : <code>object</code>
    * [.get([filter])](#selection.id.contentlibrary.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.contentlibrary.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.contentlibrary.full.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
  * [.synthetic](#selection.id.contentlibrary.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.contentlibrary.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.contentlibrary.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.contentlibrary.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.contentlibrary.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.contentlibrary.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.contentlibrary.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>

<a name="selection.id.contentlibrary.count"></a>
##### contentlibrary.count : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#selection.id.contentlibrary)</code>  
<a name="selection.id.contentlibrary.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.contentlibrary.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.contentlibrary.full"></a>
##### contentlibrary.full : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#selection.id.contentlibrary)</code>  
<a name="selection.id.contentlibrary.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.contentlibrary.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.full.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
	console.log(Array.<ContentLibrary>)
})
```
<a name="selection.id.contentlibrary.synthetic"></a>
##### contentlibrary.synthetic : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#selection.id.contentlibrary)</code>  

* [.synthetic](#selection.id.contentlibrary.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.contentlibrary.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.contentlibrary.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.contentlibrary.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.contentlibrary.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.contentlibrary.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.contentlibrary.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.contentlibrary.table"></a>
##### contentlibrary.table : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#selection.id.contentlibrary)</code>  
<a name="selection.id.contentlibrary.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.contentlibrary.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.contentlibrary.delete"></a>
##### contentlibrary.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary?filter={filter}

This method is generated

**Kind**: static method of <code>[contentlibrary](#selection.id.contentlibrary)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.contentlibrary.get"></a>
##### contentlibrary.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/contentlibrary?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[contentlibrary](#selection.id.contentlibrary)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).contentlibrary.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
	console.log(Array.<ContentLibrary>)
})
```
<a name="selection.id.custompropertydefinition"></a>
#### id.custompropertydefinition : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.custompropertydefinition](#selection.id.custompropertydefinition) : <code>object</code>
  * [.count](#selection.id.custompropertydefinition.count) : <code>object</code>
    * [.get([filter])](#selection.id.custompropertydefinition.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.custompropertydefinition.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.custompropertydefinition.full.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
  * [.synthetic](#selection.id.custompropertydefinition.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.custompropertydefinition.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.custompropertydefinition.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.custompropertydefinition.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.custompropertydefinition.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.custompropertydefinition.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.custompropertydefinition.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>

<a name="selection.id.custompropertydefinition.count"></a>
##### custompropertydefinition.count : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#selection.id.custompropertydefinition)</code>  
<a name="selection.id.custompropertydefinition.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.custompropertydefinition.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.custompropertydefinition.full"></a>
##### custompropertydefinition.full : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#selection.id.custompropertydefinition)</code>  
<a name="selection.id.custompropertydefinition.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.custompropertydefinition.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.full.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
	console.log(Array.<CustomPropertyDefinition>)
})
```
<a name="selection.id.custompropertydefinition.synthetic"></a>
##### custompropertydefinition.synthetic : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#selection.id.custompropertydefinition)</code>  

* [.synthetic](#selection.id.custompropertydefinition.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.custompropertydefinition.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.custompropertydefinition.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.custompropertydefinition.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.custompropertydefinition.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.custompropertydefinition.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.custompropertydefinition.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.custompropertydefinition.table"></a>
##### custompropertydefinition.table : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#selection.id.custompropertydefinition)</code>  
<a name="selection.id.custompropertydefinition.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.custompropertydefinition.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.custompropertydefinition.delete"></a>
##### custompropertydefinition.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition?filter={filter}

This method is generated

**Kind**: static method of <code>[custompropertydefinition](#selection.id.custompropertydefinition)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.custompropertydefinition.get"></a>
##### custompropertydefinition.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/custompropertydefinition?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[custompropertydefinition](#selection.id.custompropertydefinition)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).custompropertydefinition.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
	console.log(Array.<CustomPropertyDefinition>)
})
```
<a name="selection.id.dataconnection"></a>
#### id.dataconnection : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.dataconnection](#selection.id.dataconnection) : <code>object</code>
  * [.count](#selection.id.dataconnection.count) : <code>object</code>
    * [.get([filter])](#selection.id.dataconnection.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.dataconnection.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.dataconnection.full.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
  * [.synthetic](#selection.id.dataconnection.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.dataconnection.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.dataconnection.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.dataconnection.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.dataconnection.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.dataconnection.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.dataconnection.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>

<a name="selection.id.dataconnection.count"></a>
##### dataconnection.count : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#selection.id.dataconnection)</code>  
<a name="selection.id.dataconnection.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.dataconnection.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.dataconnection.full"></a>
##### dataconnection.full : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#selection.id.dataconnection)</code>  
<a name="selection.id.dataconnection.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.dataconnection.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.full.get(filter, orderby, appendprivileges).then(function(Array.<DataConnection>) {
	console.log(Array.<DataConnection>)
})
```
<a name="selection.id.dataconnection.synthetic"></a>
##### dataconnection.synthetic : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#selection.id.dataconnection)</code>  

* [.synthetic](#selection.id.dataconnection.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.dataconnection.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.dataconnection.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.dataconnection.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.dataconnection.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.dataconnection.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.dataconnection.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.dataconnection.table"></a>
##### dataconnection.table : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#selection.id.dataconnection)</code>  
<a name="selection.id.dataconnection.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.dataconnection.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.dataconnection.delete"></a>
##### dataconnection.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection?filter={filter}

This method is generated

**Kind**: static method of <code>[dataconnection](#selection.id.dataconnection)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.dataconnection.get"></a>
##### dataconnection.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/dataconnection?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[dataconnection](#selection.id.dataconnection)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).dataconnection.get(filter, orderby, appendprivileges).then(function(Array.<DataConnection>) {
	console.log(Array.<DataConnection>)
})
```
<a name="selection.id.engineservice"></a>
#### id.engineservice : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.engineservice](#selection.id.engineservice) : <code>object</code>
  * [.count](#selection.id.engineservice.count) : <code>object</code>
    * [.get([filter])](#selection.id.engineservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.engineservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
  * [.synthetic](#selection.id.engineservice.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.engineservice.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.engineservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.engineservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#selection.id.engineservice.template) : <code>object</code>
    * [.count](#selection.id.engineservice.template.count) : <code>object</code>
      * [.get([filter])](#selection.id.engineservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.engineservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
    * [.synthetic](#selection.id.engineservice.template.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.engineservice.template.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.engineservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.engineservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.engineservice.template.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>

<a name="selection.id.engineservice.count"></a>
##### engineservice.count : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#selection.id.engineservice)</code>  
<a name="selection.id.engineservice.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.engineservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.engineservice.full"></a>
##### engineservice.full : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#selection.id.engineservice)</code>  
<a name="selection.id.engineservice.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.engineservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
	console.log(Array.<EngineService>)
})
```
<a name="selection.id.engineservice.synthetic"></a>
##### engineservice.synthetic : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#selection.id.engineservice)</code>  

* [.synthetic](#selection.id.engineservice.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.engineservice.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.engineservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.engineservice.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.engineservice.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.engineservice.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.engineservice.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.engineservice.table"></a>
##### engineservice.table : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#selection.id.engineservice)</code>  
<a name="selection.id.engineservice.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.engineservice.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.engineservice.template"></a>
##### engineservice.template : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#selection.id.engineservice)</code>  

* [.template](#selection.id.engineservice.template) : <code>object</code>
  * [.count](#selection.id.engineservice.template.count) : <code>object</code>
    * [.get([filter])](#selection.id.engineservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.engineservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
  * [.synthetic](#selection.id.engineservice.template.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.engineservice.template.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.engineservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.engineservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.engineservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.engineservice.template.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.engineservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>

<a name="selection.id.engineservice.template.count"></a>
###### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.engineservice.template)</code>  
<a name="selection.id.engineservice.template.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.engineservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.engineservice.template.full"></a>
###### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.engineservice.template)</code>  
<a name="selection.id.engineservice.template.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.engineservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
	console.log(Array.<EngineServiceTemplate>)
})
```
<a name="selection.id.engineservice.template.synthetic"></a>
###### template.synthetic : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.engineservice.template)</code>  

* [.synthetic](#selection.id.engineservice.template.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.engineservice.template.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.engineservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.engineservice.template.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.engineservice.template.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.engineservice.template.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.engineservice.template.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.engineservice.template.table"></a>
###### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.engineservice.template)</code>  
<a name="selection.id.engineservice.template.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.engineservice.template.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.engineservice.template.delete"></a>
###### template.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.id.engineservice.template)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.engineservice.template.get"></a>
###### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#selection.id.engineservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EngineServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.template.get(filter, orderby, appendprivileges).then(function(Array.<EngineServiceTemplate>) {
	console.log(Array.<EngineServiceTemplate>)
})
```
<a name="selection.id.engineservice.get"></a>
##### engineservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/engineservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[engineservice](#selection.id.engineservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).engineservice.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
	console.log(Array.<EngineService>)
})
```
<a name="selection.id.event"></a>
#### id.event : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.event](#selection.id.event) : <code>object</code>
  * [.full](#selection.id.event.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.event.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.event.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>

<a name="selection.id.event.full"></a>
##### event.full : <code>object</code>
**Kind**: static namespace of <code>[event](#selection.id.event)</code>  
<a name="selection.id.event.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/event/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.event.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).event.full.get(filter, orderby, appendprivileges).then(function(Array.<IEvent>) {
	console.log(Array.<IEvent>)
})
```
<a name="selection.id.event.get"></a>
##### event.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/event?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[event](#selection.id.event)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).event.get(filter, orderby, appendprivileges).then(function(Array.<IEvent>) {
	console.log(Array.<IEvent>)
})
```
<a name="selection.id.eventoperational"></a>
#### id.eventoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.eventoperational](#selection.id.eventoperational) : <code>object</code>
  * [.full](#selection.id.eventoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.eventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.eventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>

<a name="selection.id.eventoperational.full"></a>
##### eventoperational.full : <code>object</code>
**Kind**: static namespace of <code>[eventoperational](#selection.id.eventoperational)</code>  
<a name="selection.id.eventoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/eventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.eventoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).eventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<IEventOperational>) {
	console.log(Array.<IEventOperational>)
})
```
<a name="selection.id.eventoperational.get"></a>
##### eventoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/eventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[eventoperational](#selection.id.eventoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).eventoperational.get(filter, orderby, appendprivileges).then(function(Array.<IEventOperational>) {
	console.log(Array.<IEventOperational>)
})
```
<a name="selection.id.executionresult"></a>
#### id.executionresult : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.executionresult](#selection.id.executionresult) : <code>object</code>
  * [.count](#selection.id.executionresult.count) : <code>object</code>
    * [.get([filter])](#selection.id.executionresult.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.detail](#selection.id.executionresult.detail) : <code>object</code>
    * [.count](#selection.id.executionresult.detail.count) : <code>object</code>
      * [.get([filter])](#selection.id.executionresult.detail.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.executionresult.detail.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
    * [.synthetic](#selection.id.executionresult.detail.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.executionresult.detail.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.executionresult.detail.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.executionresult.detail.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.detail.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.executionresult.detail.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
  * [.full](#selection.id.executionresult.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
  * [.synthetic](#selection.id.executionresult.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.executionresult.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.executionresult.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.executionresult.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.executionresult.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>

<a name="selection.id.executionresult.count"></a>
##### executionresult.count : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#selection.id.executionresult)</code>  
<a name="selection.id.executionresult.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.executionresult.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.executionresult.detail"></a>
##### executionresult.detail : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#selection.id.executionresult)</code>  

* [.detail](#selection.id.executionresult.detail) : <code>object</code>
  * [.count](#selection.id.executionresult.detail.count) : <code>object</code>
    * [.get([filter])](#selection.id.executionresult.detail.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.executionresult.detail.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
  * [.synthetic](#selection.id.executionresult.detail.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.executionresult.detail.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.executionresult.detail.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.executionresult.detail.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionresult.detail.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.executionresult.detail.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionresult.detail.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>

<a name="selection.id.executionresult.detail.count"></a>
###### detail.count : <code>object</code>
**Kind**: static namespace of <code>[detail](#selection.id.executionresult.detail)</code>  
<a name="selection.id.executionresult.detail.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.executionresult.detail.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.executionresult.detail.full"></a>
###### detail.full : <code>object</code>
**Kind**: static namespace of <code>[detail](#selection.id.executionresult.detail)</code>  
<a name="selection.id.executionresult.detail.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.executionresult.detail.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
	console.log(Array.<ExecutionResultDetail>)
})
```
<a name="selection.id.executionresult.detail.synthetic"></a>
###### detail.synthetic : <code>object</code>
**Kind**: static namespace of <code>[detail](#selection.id.executionresult.detail)</code>  

* [.synthetic](#selection.id.executionresult.detail.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.executionresult.detail.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.executionresult.detail.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.executionresult.detail.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.executionresult.detail.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.executionresult.detail.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.executionresult.detail.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.executionresult.detail.table"></a>
###### detail.table : <code>object</code>
**Kind**: static namespace of <code>[detail](#selection.id.executionresult.detail)</code>  
<a name="selection.id.executionresult.detail.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.executionresult.detail.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.executionresult.detail.delete"></a>
###### detail.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail?filter={filter}

This method is generated

**Kind**: static method of <code>[detail](#selection.id.executionresult.detail)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.executionresult.detail.get"></a>
###### detail.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/detail?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[detail](#selection.id.executionresult.detail)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.detail.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
	console.log(Array.<ExecutionResultDetail>)
})
```
<a name="selection.id.executionresult.full"></a>
##### executionresult.full : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#selection.id.executionresult)</code>  
<a name="selection.id.executionresult.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.executionresult.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
	console.log(Array.<ExecutionResult>)
})
```
<a name="selection.id.executionresult.synthetic"></a>
##### executionresult.synthetic : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#selection.id.executionresult)</code>  

* [.synthetic](#selection.id.executionresult.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.executionresult.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.executionresult.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.executionresult.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.executionresult.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.executionresult.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.executionresult.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.executionresult.table"></a>
##### executionresult.table : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#selection.id.executionresult)</code>  
<a name="selection.id.executionresult.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.executionresult.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.executionresult.delete"></a>
##### executionresult.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult?filter={filter}

This method is generated

**Kind**: static method of <code>[executionresult](#selection.id.executionresult)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.executionresult.get"></a>
##### executionresult.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionresult?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[executionresult](#selection.id.executionresult)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionresult.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
	console.log(Array.<ExecutionResult>)
})
```
<a name="selection.id.executionsession"></a>
#### id.executionsession : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.executionsession](#selection.id.executionsession) : <code>object</code>
  * [.count](#selection.id.executionsession.count) : <code>object</code>
    * [.get([filter])](#selection.id.executionsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.executionsession.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
  * [.synthetic](#selection.id.executionsession.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.executionsession.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.executionsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.executionsession.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.executionsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.executionsession.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.executionsession.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>

<a name="selection.id.executionsession.count"></a>
##### executionsession.count : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#selection.id.executionsession)</code>  
<a name="selection.id.executionsession.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.executionsession.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.executionsession.full"></a>
##### executionsession.full : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#selection.id.executionsession)</code>  
<a name="selection.id.executionsession.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.executionsession.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionSession>) {
	console.log(Array.<ExecutionSession>)
})
```
<a name="selection.id.executionsession.synthetic"></a>
##### executionsession.synthetic : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#selection.id.executionsession)</code>  

* [.synthetic](#selection.id.executionsession.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.executionsession.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.executionsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.executionsession.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.executionsession.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.executionsession.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.executionsession.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.executionsession.table"></a>
##### executionsession.table : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#selection.id.executionsession)</code>  
<a name="selection.id.executionsession.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.executionsession.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.executionsession.delete"></a>
##### executionsession.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession?filter={filter}

This method is generated

**Kind**: static method of <code>[executionsession](#selection.id.executionsession)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.executionsession.get"></a>
##### executionsession.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/executionsession?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[executionsession](#selection.id.executionsession)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).executionsession.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionSession>) {
	console.log(Array.<ExecutionSession>)
})
```
<a name="selection.id.extension"></a>
#### id.extension : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.extension](#selection.id.extension) : <code>object</code>
  * [.count](#selection.id.extension.count) : <code>object</code>
    * [.get([filter])](#selection.id.extension.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.extension.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.extension.full.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
  * [.synthetic](#selection.id.extension.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.extension.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.extension.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.extension.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.extension.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.extension.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.extension.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>

<a name="selection.id.extension.count"></a>
##### extension.count : <code>object</code>
**Kind**: static namespace of <code>[extension](#selection.id.extension)</code>  
<a name="selection.id.extension.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.extension.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.extension.full"></a>
##### extension.full : <code>object</code>
**Kind**: static namespace of <code>[extension](#selection.id.extension)</code>  
<a name="selection.id.extension.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.extension.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.full.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
	console.log(Array.<Extension>)
})
```
<a name="selection.id.extension.synthetic"></a>
##### extension.synthetic : <code>object</code>
**Kind**: static namespace of <code>[extension](#selection.id.extension)</code>  

* [.synthetic](#selection.id.extension.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.extension.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.extension.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.extension.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.extension.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.extension.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.extension.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.extension.table"></a>
##### extension.table : <code>object</code>
**Kind**: static namespace of <code>[extension](#selection.id.extension)</code>  
<a name="selection.id.extension.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.extension.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.extension.delete"></a>
##### extension.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension?filter={filter}

This method is generated

**Kind**: static method of <code>[extension](#selection.id.extension)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.extension.get"></a>
##### extension.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/extension?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[extension](#selection.id.extension)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).extension.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
	console.log(Array.<Extension>)
})
```
<a name="selection.id.externalchangeinfo"></a>
#### id.externalchangeinfo : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.externalchangeinfo](#selection.id.externalchangeinfo) : <code>object</code>
  * [.count](#selection.id.externalchangeinfo.count) : <code>object</code>
    * [.get([filter])](#selection.id.externalchangeinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.externalchangeinfo.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalchangeinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
  * [.synthetic](#selection.id.externalchangeinfo.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.externalchangeinfo.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.externalchangeinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.externalchangeinfo.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalchangeinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.externalchangeinfo.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalchangeinfo.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>

<a name="selection.id.externalchangeinfo.count"></a>
##### externalchangeinfo.count : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#selection.id.externalchangeinfo)</code>  
<a name="selection.id.externalchangeinfo.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.externalchangeinfo.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.externalchangeinfo.full"></a>
##### externalchangeinfo.full : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#selection.id.externalchangeinfo)</code>  
<a name="selection.id.externalchangeinfo.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.externalchangeinfo.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
	console.log(Array.<ExternalChangeInfo>)
})
```
<a name="selection.id.externalchangeinfo.synthetic"></a>
##### externalchangeinfo.synthetic : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#selection.id.externalchangeinfo)</code>  

* [.synthetic](#selection.id.externalchangeinfo.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.externalchangeinfo.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.externalchangeinfo.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.externalchangeinfo.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.externalchangeinfo.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.externalchangeinfo.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.externalchangeinfo.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.externalchangeinfo.table"></a>
##### externalchangeinfo.table : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#selection.id.externalchangeinfo)</code>  
<a name="selection.id.externalchangeinfo.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.externalchangeinfo.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.externalchangeinfo.delete"></a>
##### externalchangeinfo.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo?filter={filter}

This method is generated

**Kind**: static method of <code>[externalchangeinfo](#selection.id.externalchangeinfo)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.externalchangeinfo.get"></a>
##### externalchangeinfo.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalchangeinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalchangeinfo](#selection.id.externalchangeinfo)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalchangeinfo.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
	console.log(Array.<ExternalChangeInfo>)
})
```
<a name="selection.id.externalprogramtask"></a>
#### id.externalprogramtask : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.externalprogramtask](#selection.id.externalprogramtask) : <code>object</code>
  * [.count](#selection.id.externalprogramtask.count) : <code>object</code>
    * [.get([filter])](#selection.id.externalprogramtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.externalprogramtask.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
  * [.synthetic](#selection.id.externalprogramtask.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.externalprogramtask.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.externalprogramtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.externalprogramtask.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalprogramtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.externalprogramtask.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtask.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>

<a name="selection.id.externalprogramtask.count"></a>
##### externalprogramtask.count : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#selection.id.externalprogramtask)</code>  
<a name="selection.id.externalprogramtask.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.externalprogramtask.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.externalprogramtask.full"></a>
##### externalprogramtask.full : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#selection.id.externalprogramtask)</code>  
<a name="selection.id.externalprogramtask.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.externalprogramtask.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
	console.log(Array.<ExternalProgramTask>)
})
```
<a name="selection.id.externalprogramtask.synthetic"></a>
##### externalprogramtask.synthetic : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#selection.id.externalprogramtask)</code>  

* [.synthetic](#selection.id.externalprogramtask.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.externalprogramtask.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.externalprogramtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.externalprogramtask.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.externalprogramtask.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.externalprogramtask.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.externalprogramtask.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.externalprogramtask.table"></a>
##### externalprogramtask.table : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#selection.id.externalprogramtask)</code>  
<a name="selection.id.externalprogramtask.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.externalprogramtask.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.externalprogramtask.delete"></a>
##### externalprogramtask.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask?filter={filter}

This method is generated

**Kind**: static method of <code>[externalprogramtask](#selection.id.externalprogramtask)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.externalprogramtask.get"></a>
##### externalprogramtask.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalprogramtask](#selection.id.externalprogramtask)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtask.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
	console.log(Array.<ExternalProgramTask>)
})
```
<a name="selection.id.externalprogramtaskoperational"></a>
#### id.externalprogramtaskoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.externalprogramtaskoperational](#selection.id.externalprogramtaskoperational) : <code>object</code>
  * [.count](#selection.id.externalprogramtaskoperational.count) : <code>object</code>
    * [.get([filter])](#selection.id.externalprogramtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.externalprogramtaskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
  * [.synthetic](#selection.id.externalprogramtaskoperational.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.externalprogramtaskoperational.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.externalprogramtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.externalprogramtaskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.externalprogramtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.externalprogramtaskoperational.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>

<a name="selection.id.externalprogramtaskoperational.count"></a>
##### externalprogramtaskoperational.count : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#selection.id.externalprogramtaskoperational)</code>  
<a name="selection.id.externalprogramtaskoperational.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.externalprogramtaskoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.externalprogramtaskoperational.full"></a>
##### externalprogramtaskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#selection.id.externalprogramtaskoperational)</code>  
<a name="selection.id.externalprogramtaskoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.externalprogramtaskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
	console.log(Array.<ExternalProgramTaskOperational>)
})
```
<a name="selection.id.externalprogramtaskoperational.synthetic"></a>
##### externalprogramtaskoperational.synthetic : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#selection.id.externalprogramtaskoperational)</code>  

* [.synthetic](#selection.id.externalprogramtaskoperational.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.externalprogramtaskoperational.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.externalprogramtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.externalprogramtaskoperational.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.externalprogramtaskoperational.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.externalprogramtaskoperational.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.externalprogramtaskoperational.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.externalprogramtaskoperational.table"></a>
##### externalprogramtaskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#selection.id.externalprogramtaskoperational)</code>  
<a name="selection.id.externalprogramtaskoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.externalprogramtaskoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.externalprogramtaskoperational.delete"></a>
##### externalprogramtaskoperational.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[externalprogramtaskoperational](#selection.id.externalprogramtaskoperational)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.externalprogramtaskoperational.get"></a>
##### externalprogramtaskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/externalprogramtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalprogramtaskoperational](#selection.id.externalprogramtaskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).externalprogramtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
	console.log(Array.<ExternalProgramTaskOperational>)
})
```
<a name="selection.id.filereference"></a>
#### id.filereference : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.filereference](#selection.id.filereference) : <code>object</code>
  * [.count](#selection.id.filereference.count) : <code>object</code>
    * [.get([filter])](#selection.id.filereference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.filereference.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.filereference.full.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
  * [.synthetic](#selection.id.filereference.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.filereference.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.filereference.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.filereference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.filereference.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>

<a name="selection.id.filereference.count"></a>
##### filereference.count : <code>object</code>
**Kind**: static namespace of <code>[filereference](#selection.id.filereference)</code>  
<a name="selection.id.filereference.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/filereference/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.filereference.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).filereference.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.filereference.full"></a>
##### filereference.full : <code>object</code>
**Kind**: static namespace of <code>[filereference](#selection.id.filereference)</code>  
<a name="selection.id.filereference.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/filereference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.filereference.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).filereference.full.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
	console.log(Array.<FileReference>)
})
```
<a name="selection.id.filereference.synthetic"></a>
##### filereference.synthetic : <code>object</code>
**Kind**: static namespace of <code>[filereference](#selection.id.filereference)</code>  
<a name="selection.id.filereference.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/filereference/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.filereference.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).filereference.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.filereference.table"></a>
##### filereference.table : <code>object</code>
**Kind**: static namespace of <code>[filereference](#selection.id.filereference)</code>  
<a name="selection.id.filereference.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/filereference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.filereference.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).filereference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.filereference.get"></a>
##### filereference.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/filereference?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[filereference](#selection.id.filereference)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).filereference.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
	console.log(Array.<FileReference>)
})
```
<a name="selection.id.license"></a>
#### id.license : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.license](#selection.id.license) : <code>object</code>
  * [.loginaccesstype](#selection.id.license.loginaccesstype) : <code>object</code>
    * [.count](#selection.id.license.loginaccesstype.count) : <code>object</code>
      * [.get([filter])](#selection.id.license.loginaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.license.loginaccesstype.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
    * [.synthetic](#selection.id.license.loginaccesstype.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.license.loginaccesstype.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.license.loginaccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.license.loginaccesstype.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.license.loginaccesstype.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
  * [.loginaccessusage](#selection.id.license.loginaccessusage) : <code>object</code>
    * [.count](#selection.id.license.loginaccessusage.count) : <code>object</code>
      * [.get([filter])](#selection.id.license.loginaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.license.loginaccessusage.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
    * [.synthetic](#selection.id.license.loginaccessusage.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.license.loginaccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.license.loginaccessusage.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
  * [.useraccessgroup](#selection.id.license.useraccessgroup) : <code>object</code>
    * [.count](#selection.id.license.useraccessgroup.count) : <code>object</code>
      * [.get([filter])](#selection.id.license.useraccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.license.useraccessgroup.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
    * [.synthetic](#selection.id.license.useraccessgroup.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.license.useraccessgroup.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.license.useraccessgroup.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.license.useraccessgroup.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.license.useraccessgroup.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
  * [.useraccesstype](#selection.id.license.useraccesstype) : <code>object</code>
    * [.count](#selection.id.license.useraccesstype.count) : <code>object</code>
      * [.get([filter])](#selection.id.license.useraccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.license.useraccesstype.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
    * [.synthetic](#selection.id.license.useraccesstype.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.license.useraccesstype.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.license.useraccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.license.useraccesstype.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.license.useraccesstype.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
  * [.useraccessusage](#selection.id.license.useraccessusage) : <code>object</code>
    * [.count](#selection.id.license.useraccessusage.count) : <code>object</code>
      * [.get([filter])](#selection.id.license.useraccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.license.useraccessusage.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
    * [.synthetic](#selection.id.license.useraccessusage.synthetic) : <code>object</code>
      * [.get([filter], [appendprivileges])](#selection.id.license.useraccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.license.useraccessusage.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
  * [.delete([filter])](#selection.id.license.delete) ⇒ <code>Promise</code>

<a name="selection.id.license.loginaccesstype"></a>
##### license.loginaccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.id.license)</code>  

* [.loginaccesstype](#selection.id.license.loginaccesstype) : <code>object</code>
  * [.count](#selection.id.license.loginaccesstype.count) : <code>object</code>
    * [.get([filter])](#selection.id.license.loginaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.license.loginaccesstype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
  * [.synthetic](#selection.id.license.loginaccesstype.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.license.loginaccesstype.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.license.loginaccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.license.loginaccesstype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.license.loginaccesstype.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>

<a name="selection.id.license.loginaccesstype.count"></a>
###### loginaccesstype.count : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#selection.id.license.loginaccesstype)</code>  
<a name="selection.id.license.loginaccesstype.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.license.loginaccesstype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.license.loginaccesstype.full"></a>
###### loginaccesstype.full : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#selection.id.license.loginaccesstype)</code>  
<a name="selection.id.license.loginaccesstype.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.license.loginaccesstype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
	console.log(Array.<LicenseLoginAccessType>)
})
```
<a name="selection.id.license.loginaccesstype.synthetic"></a>
###### loginaccesstype.synthetic : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#selection.id.license.loginaccesstype)</code>  

* [.synthetic](#selection.id.license.loginaccesstype.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.license.loginaccesstype.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.license.loginaccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.license.loginaccesstype.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.loginaccesstype.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.license.loginaccesstype.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.loginaccesstype.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.license.loginaccesstype.table"></a>
###### loginaccesstype.table : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#selection.id.license.loginaccesstype)</code>  
<a name="selection.id.license.loginaccesstype.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.license.loginaccesstype.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.license.loginaccesstype.delete"></a>
###### loginaccesstype.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype?filter={filter}

This method is generated

**Kind**: static method of <code>[loginaccesstype](#selection.id.license.loginaccesstype)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.license.loginaccesstype.get"></a>
###### loginaccesstype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[loginaccesstype](#selection.id.license.loginaccesstype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
	console.log(Array.<LicenseLoginAccessType>)
})
```
<a name="selection.id.license.loginaccessusage"></a>
##### license.loginaccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.id.license)</code>  

* [.loginaccessusage](#selection.id.license.loginaccessusage) : <code>object</code>
  * [.count](#selection.id.license.loginaccessusage.count) : <code>object</code>
    * [.get([filter])](#selection.id.license.loginaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.license.loginaccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
  * [.synthetic](#selection.id.license.loginaccessusage.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.license.loginaccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.license.loginaccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.loginaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.loginaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>

<a name="selection.id.license.loginaccessusage.count"></a>
###### loginaccessusage.count : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#selection.id.license.loginaccessusage)</code>  
<a name="selection.id.license.loginaccessusage.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccessusage/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.license.loginaccessusage.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccessusage.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.license.loginaccessusage.full"></a>
###### loginaccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#selection.id.license.loginaccessusage)</code>  
<a name="selection.id.license.loginaccessusage.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.license.loginaccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
	console.log(Array.<LicenseLoginAccessUsage>)
})
```
<a name="selection.id.license.loginaccessusage.synthetic"></a>
###### loginaccessusage.synthetic : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#selection.id.license.loginaccessusage)</code>  
<a name="selection.id.license.loginaccessusage.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccessusage/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.loginaccessusage.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccessusage.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.license.loginaccessusage.table"></a>
###### loginaccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#selection.id.license.loginaccessusage)</code>  
<a name="selection.id.license.loginaccessusage.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.license.loginaccessusage.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.license.loginaccessusage.get"></a>
###### loginaccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/loginaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[loginaccessusage](#selection.id.license.loginaccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.loginaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
	console.log(Array.<LicenseLoginAccessUsage>)
})
```
<a name="selection.id.license.useraccessgroup"></a>
##### license.useraccessgroup : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.id.license)</code>  

* [.useraccessgroup](#selection.id.license.useraccessgroup) : <code>object</code>
  * [.count](#selection.id.license.useraccessgroup.count) : <code>object</code>
    * [.get([filter])](#selection.id.license.useraccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.license.useraccessgroup.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
  * [.synthetic](#selection.id.license.useraccessgroup.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.license.useraccessgroup.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.license.useraccessgroup.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.license.useraccessgroup.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.license.useraccessgroup.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>

<a name="selection.id.license.useraccessgroup.count"></a>
###### useraccessgroup.count : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#selection.id.license.useraccessgroup)</code>  
<a name="selection.id.license.useraccessgroup.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.license.useraccessgroup.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.license.useraccessgroup.full"></a>
###### useraccessgroup.full : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#selection.id.license.useraccessgroup)</code>  
<a name="selection.id.license.useraccessgroup.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.license.useraccessgroup.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
	console.log(Array.<LicenseUserAccessGroup>)
})
```
<a name="selection.id.license.useraccessgroup.synthetic"></a>
###### useraccessgroup.synthetic : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#selection.id.license.useraccessgroup)</code>  

* [.synthetic](#selection.id.license.useraccessgroup.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.license.useraccessgroup.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.license.useraccessgroup.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.license.useraccessgroup.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.useraccessgroup.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.license.useraccessgroup.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.useraccessgroup.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.license.useraccessgroup.table"></a>
###### useraccessgroup.table : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#selection.id.license.useraccessgroup)</code>  
<a name="selection.id.license.useraccessgroup.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.license.useraccessgroup.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.license.useraccessgroup.delete"></a>
###### useraccessgroup.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup?filter={filter}

This method is generated

**Kind**: static method of <code>[useraccessgroup](#selection.id.license.useraccessgroup)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.license.useraccessgroup.get"></a>
###### useraccessgroup.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[useraccessgroup](#selection.id.license.useraccessgroup)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
	console.log(Array.<LicenseUserAccessGroup>)
})
```
<a name="selection.id.license.useraccesstype"></a>
##### license.useraccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.id.license)</code>  

* [.useraccesstype](#selection.id.license.useraccesstype) : <code>object</code>
  * [.count](#selection.id.license.useraccesstype.count) : <code>object</code>
    * [.get([filter])](#selection.id.license.useraccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.license.useraccesstype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
  * [.synthetic](#selection.id.license.useraccesstype.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.license.useraccesstype.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.license.useraccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.license.useraccesstype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.license.useraccesstype.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>

<a name="selection.id.license.useraccesstype.count"></a>
###### useraccesstype.count : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#selection.id.license.useraccesstype)</code>  
<a name="selection.id.license.useraccesstype.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.license.useraccesstype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.license.useraccesstype.full"></a>
###### useraccesstype.full : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#selection.id.license.useraccesstype)</code>  
<a name="selection.id.license.useraccesstype.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.license.useraccesstype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
	console.log(Array.<LicenseUserAccessType>)
})
```
<a name="selection.id.license.useraccesstype.synthetic"></a>
###### useraccesstype.synthetic : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#selection.id.license.useraccesstype)</code>  

* [.synthetic](#selection.id.license.useraccesstype.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.license.useraccesstype.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.license.useraccesstype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.license.useraccesstype.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.useraccesstype.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.license.useraccesstype.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.useraccesstype.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.license.useraccesstype.table"></a>
###### useraccesstype.table : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#selection.id.license.useraccesstype)</code>  
<a name="selection.id.license.useraccesstype.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.license.useraccesstype.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.license.useraccesstype.delete"></a>
###### useraccesstype.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype?filter={filter}

This method is generated

**Kind**: static method of <code>[useraccesstype](#selection.id.license.useraccesstype)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.license.useraccesstype.get"></a>
###### useraccesstype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[useraccesstype](#selection.id.license.useraccesstype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
	console.log(Array.<LicenseUserAccessType>)
})
```
<a name="selection.id.license.useraccessusage"></a>
##### license.useraccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.id.license)</code>  

* [.useraccessusage](#selection.id.license.useraccessusage) : <code>object</code>
  * [.count](#selection.id.license.useraccessusage.count) : <code>object</code>
    * [.get([filter])](#selection.id.license.useraccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.license.useraccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
  * [.synthetic](#selection.id.license.useraccessusage.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.license.useraccessusage.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.license.useraccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.license.useraccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.license.useraccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>

<a name="selection.id.license.useraccessusage.count"></a>
###### useraccessusage.count : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#selection.id.license.useraccessusage)</code>  
<a name="selection.id.license.useraccessusage.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessusage/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.license.useraccessusage.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessusage.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.license.useraccessusage.full"></a>
###### useraccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#selection.id.license.useraccessusage)</code>  
<a name="selection.id.license.useraccessusage.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.license.useraccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
	console.log(Array.<LicenseUserAccessUsage>)
})
```
<a name="selection.id.license.useraccessusage.synthetic"></a>
###### useraccessusage.synthetic : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#selection.id.license.useraccessusage)</code>  
<a name="selection.id.license.useraccessusage.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessusage/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.license.useraccessusage.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessusage.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.license.useraccessusage.table"></a>
###### useraccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#selection.id.license.useraccessusage)</code>  
<a name="selection.id.license.useraccessusage.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.license.useraccessusage.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.license.useraccessusage.get"></a>
###### useraccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license/useraccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[useraccessusage](#selection.id.license.useraccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.useraccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
	console.log(Array.<LicenseUserAccessUsage>)
})
```
<a name="selection.id.license.delete"></a>
##### license.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/license?filter={filter}

This method is generated

**Kind**: static method of <code>[license](#selection.id.license)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).license.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.licenseaccessusage"></a>
#### id.licenseaccessusage : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.licenseaccessusage](#selection.id.licenseaccessusage) : <code>object</code>
  * [.full](#selection.id.licenseaccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.licenseaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.licenseaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>

<a name="selection.id.licenseaccessusage.full"></a>
##### licenseaccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[licenseaccessusage](#selection.id.licenseaccessusage)</code>  
<a name="selection.id.licenseaccessusage.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/licenseaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.licenseaccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).licenseaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<ILicenseAccessUsage>) {
	console.log(Array.<ILicenseAccessUsage>)
})
```
<a name="selection.id.licenseaccessusage.get"></a>
##### licenseaccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/licenseaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[licenseaccessusage](#selection.id.licenseaccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).licenseaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<ILicenseAccessUsage>) {
	console.log(Array.<ILicenseAccessUsage>)
})
```
<a name="selection.id.mimetype"></a>
#### id.mimetype : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.mimetype](#selection.id.mimetype) : <code>object</code>
  * [.count](#selection.id.mimetype.count) : <code>object</code>
    * [.get([filter])](#selection.id.mimetype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.mimetype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.mimetype.full.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
  * [.synthetic](#selection.id.mimetype.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.mimetype.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.mimetype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.mimetype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.mimetype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.mimetype.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.mimetype.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>

<a name="selection.id.mimetype.count"></a>
##### mimetype.count : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#selection.id.mimetype)</code>  
<a name="selection.id.mimetype.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.mimetype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.mimetype.full"></a>
##### mimetype.full : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#selection.id.mimetype)</code>  
<a name="selection.id.mimetype.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.mimetype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.full.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
	console.log(Array.<MimeType>)
})
```
<a name="selection.id.mimetype.synthetic"></a>
##### mimetype.synthetic : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#selection.id.mimetype)</code>  

* [.synthetic](#selection.id.mimetype.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.mimetype.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.mimetype.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.mimetype.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.mimetype.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.mimetype.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.mimetype.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.mimetype.table"></a>
##### mimetype.table : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#selection.id.mimetype)</code>  
<a name="selection.id.mimetype.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.mimetype.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.mimetype.delete"></a>
##### mimetype.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype?filter={filter}

This method is generated

**Kind**: static method of <code>[mimetype](#selection.id.mimetype)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.mimetype.get"></a>
##### mimetype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/mimetype?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[mimetype](#selection.id.mimetype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).mimetype.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
	console.log(Array.<MimeType>)
})
```
<a name="selection.id.printingservice"></a>
#### id.printingservice : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.printingservice](#selection.id.printingservice) : <code>object</code>
  * [.count](#selection.id.printingservice.count) : <code>object</code>
    * [.get([filter])](#selection.id.printingservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.printingservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
  * [.synthetic](#selection.id.printingservice.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.printingservice.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.printingservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.printingservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#selection.id.printingservice.template) : <code>object</code>
    * [.count](#selection.id.printingservice.template.count) : <code>object</code>
      * [.get([filter])](#selection.id.printingservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.printingservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
    * [.synthetic](#selection.id.printingservice.template.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.printingservice.template.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.printingservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.printingservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.printingservice.template.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>

<a name="selection.id.printingservice.count"></a>
##### printingservice.count : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#selection.id.printingservice)</code>  
<a name="selection.id.printingservice.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.printingservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.printingservice.full"></a>
##### printingservice.full : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#selection.id.printingservice)</code>  
<a name="selection.id.printingservice.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.printingservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
	console.log(Array.<PrintingService>)
})
```
<a name="selection.id.printingservice.synthetic"></a>
##### printingservice.synthetic : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#selection.id.printingservice)</code>  

* [.synthetic](#selection.id.printingservice.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.printingservice.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.printingservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.printingservice.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.printingservice.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.printingservice.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.printingservice.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.printingservice.table"></a>
##### printingservice.table : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#selection.id.printingservice)</code>  
<a name="selection.id.printingservice.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.printingservice.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.printingservice.template"></a>
##### printingservice.template : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#selection.id.printingservice)</code>  

* [.template](#selection.id.printingservice.template) : <code>object</code>
  * [.count](#selection.id.printingservice.template.count) : <code>object</code>
    * [.get([filter])](#selection.id.printingservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.printingservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
  * [.synthetic](#selection.id.printingservice.template.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.printingservice.template.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.printingservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.printingservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.printingservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.printingservice.template.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.printingservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>

<a name="selection.id.printingservice.template.count"></a>
###### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.printingservice.template)</code>  
<a name="selection.id.printingservice.template.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.printingservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.printingservice.template.full"></a>
###### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.printingservice.template)</code>  
<a name="selection.id.printingservice.template.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.printingservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
	console.log(Array.<PrintingServiceTemplate>)
})
```
<a name="selection.id.printingservice.template.synthetic"></a>
###### template.synthetic : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.printingservice.template)</code>  

* [.synthetic](#selection.id.printingservice.template.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.printingservice.template.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.printingservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.printingservice.template.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.printingservice.template.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.printingservice.template.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.printingservice.template.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.printingservice.template.table"></a>
###### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.printingservice.template)</code>  
<a name="selection.id.printingservice.template.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.printingservice.template.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.printingservice.template.delete"></a>
###### template.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.id.printingservice.template)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.printingservice.template.get"></a>
###### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#selection.id.printingservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;PrintingServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.template.get(filter, orderby, appendprivileges).then(function(Array.<PrintingServiceTemplate>) {
	console.log(Array.<PrintingServiceTemplate>)
})
```
<a name="selection.id.printingservice.get"></a>
##### printingservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/printingservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[printingservice](#selection.id.printingservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).printingservice.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
	console.log(Array.<PrintingService>)
})
```
<a name="selection.id.proxyservice"></a>
#### id.proxyservice : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.proxyservice](#selection.id.proxyservice) : <code>object</code>
  * [.count](#selection.id.proxyservice.count) : <code>object</code>
    * [.get([filter])](#selection.id.proxyservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.proxyservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
  * [.synthetic](#selection.id.proxyservice.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.proxyservice.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.proxyservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.proxyservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#selection.id.proxyservice.template) : <code>object</code>
    * [.count](#selection.id.proxyservice.template.count) : <code>object</code>
      * [.get([filter])](#selection.id.proxyservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.proxyservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
    * [.synthetic](#selection.id.proxyservice.template.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.proxyservice.template.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.proxyservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.proxyservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.proxyservice.template.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>

<a name="selection.id.proxyservice.count"></a>
##### proxyservice.count : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#selection.id.proxyservice)</code>  
<a name="selection.id.proxyservice.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.proxyservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.proxyservice.full"></a>
##### proxyservice.full : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#selection.id.proxyservice)</code>  
<a name="selection.id.proxyservice.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.proxyservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
	console.log(Array.<ProxyService>)
})
```
<a name="selection.id.proxyservice.synthetic"></a>
##### proxyservice.synthetic : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#selection.id.proxyservice)</code>  

* [.synthetic](#selection.id.proxyservice.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.proxyservice.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.proxyservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.proxyservice.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.proxyservice.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.proxyservice.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.proxyservice.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.proxyservice.table"></a>
##### proxyservice.table : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#selection.id.proxyservice)</code>  
<a name="selection.id.proxyservice.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.proxyservice.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.proxyservice.template"></a>
##### proxyservice.template : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#selection.id.proxyservice)</code>  

* [.template](#selection.id.proxyservice.template) : <code>object</code>
  * [.count](#selection.id.proxyservice.template.count) : <code>object</code>
    * [.get([filter])](#selection.id.proxyservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.proxyservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
  * [.synthetic](#selection.id.proxyservice.template.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.proxyservice.template.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.proxyservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.proxyservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.proxyservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.proxyservice.template.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.proxyservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>

<a name="selection.id.proxyservice.template.count"></a>
###### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.proxyservice.template)</code>  
<a name="selection.id.proxyservice.template.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.proxyservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.proxyservice.template.full"></a>
###### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.proxyservice.template)</code>  
<a name="selection.id.proxyservice.template.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.proxyservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
	console.log(Array.<ProxyServiceTemplate>)
})
```
<a name="selection.id.proxyservice.template.synthetic"></a>
###### template.synthetic : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.proxyservice.template)</code>  

* [.synthetic](#selection.id.proxyservice.template.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.proxyservice.template.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.proxyservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.proxyservice.template.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.proxyservice.template.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.proxyservice.template.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.proxyservice.template.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.proxyservice.template.table"></a>
###### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.proxyservice.template)</code>  
<a name="selection.id.proxyservice.template.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.proxyservice.template.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.proxyservice.template.delete"></a>
###### template.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.id.proxyservice.template)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.proxyservice.template.get"></a>
###### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#selection.id.proxyservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.template.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
	console.log(Array.<ProxyServiceTemplate>)
})
```
<a name="selection.id.proxyservice.get"></a>
##### proxyservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/proxyservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[proxyservice](#selection.id.proxyservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).proxyservice.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
	console.log(Array.<ProxyService>)
})
```
<a name="selection.id.reloadtask"></a>
#### id.reloadtask : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.reloadtask](#selection.id.reloadtask) : <code>object</code>
  * [.count](#selection.id.reloadtask.count) : <code>object</code>
    * [.get([filter])](#selection.id.reloadtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.reloadtask.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
  * [.synthetic](#selection.id.reloadtask.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.reloadtask.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.reloadtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.reloadtask.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.reloadtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.reloadtask.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtask.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>

<a name="selection.id.reloadtask.count"></a>
##### reloadtask.count : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#selection.id.reloadtask)</code>  
<a name="selection.id.reloadtask.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.reloadtask.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.reloadtask.full"></a>
##### reloadtask.full : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#selection.id.reloadtask)</code>  
<a name="selection.id.reloadtask.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.reloadtask.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
	console.log(Array.<ReloadTask>)
})
```
<a name="selection.id.reloadtask.synthetic"></a>
##### reloadtask.synthetic : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#selection.id.reloadtask)</code>  

* [.synthetic](#selection.id.reloadtask.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.reloadtask.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.reloadtask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.reloadtask.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.reloadtask.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.reloadtask.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.reloadtask.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.reloadtask.table"></a>
##### reloadtask.table : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#selection.id.reloadtask)</code>  
<a name="selection.id.reloadtask.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.reloadtask.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.reloadtask.delete"></a>
##### reloadtask.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask?filter={filter}

This method is generated

**Kind**: static method of <code>[reloadtask](#selection.id.reloadtask)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.reloadtask.get"></a>
##### reloadtask.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[reloadtask](#selection.id.reloadtask)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtask.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
	console.log(Array.<ReloadTask>)
})
```
<a name="selection.id.reloadtaskoperational"></a>
#### id.reloadtaskoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.reloadtaskoperational](#selection.id.reloadtaskoperational) : <code>object</code>
  * [.count](#selection.id.reloadtaskoperational.count) : <code>object</code>
    * [.get([filter])](#selection.id.reloadtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.reloadtaskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
  * [.synthetic](#selection.id.reloadtaskoperational.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.reloadtaskoperational.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.reloadtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.reloadtaskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.reloadtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.reloadtaskoperational.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.reloadtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>

<a name="selection.id.reloadtaskoperational.count"></a>
##### reloadtaskoperational.count : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#selection.id.reloadtaskoperational)</code>  
<a name="selection.id.reloadtaskoperational.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.reloadtaskoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.reloadtaskoperational.full"></a>
##### reloadtaskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#selection.id.reloadtaskoperational)</code>  
<a name="selection.id.reloadtaskoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.reloadtaskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
	console.log(Array.<ReloadTaskOperational>)
})
```
<a name="selection.id.reloadtaskoperational.synthetic"></a>
##### reloadtaskoperational.synthetic : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#selection.id.reloadtaskoperational)</code>  

* [.synthetic](#selection.id.reloadtaskoperational.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.reloadtaskoperational.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.reloadtaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.reloadtaskoperational.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.reloadtaskoperational.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.reloadtaskoperational.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.reloadtaskoperational.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.reloadtaskoperational.table"></a>
##### reloadtaskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#selection.id.reloadtaskoperational)</code>  
<a name="selection.id.reloadtaskoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.reloadtaskoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.reloadtaskoperational.delete"></a>
##### reloadtaskoperational.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[reloadtaskoperational](#selection.id.reloadtaskoperational)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.reloadtaskoperational.get"></a>
##### reloadtaskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/reloadtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[reloadtaskoperational](#selection.id.reloadtaskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).reloadtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
	console.log(Array.<ReloadTaskOperational>)
})
```
<a name="selection.id.repositoryservice"></a>
#### id.repositoryservice : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.repositoryservice](#selection.id.repositoryservice) : <code>object</code>
  * [.count](#selection.id.repositoryservice.count) : <code>object</code>
    * [.get([filter])](#selection.id.repositoryservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.repositoryservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
  * [.synthetic](#selection.id.repositoryservice.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.repositoryservice.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.repositoryservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#selection.id.repositoryservice.template) : <code>object</code>
    * [.count](#selection.id.repositoryservice.template.count) : <code>object</code>
      * [.get([filter])](#selection.id.repositoryservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.repositoryservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
    * [.synthetic](#selection.id.repositoryservice.template.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.repositoryservice.template.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.repositoryservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.repositoryservice.template.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>

<a name="selection.id.repositoryservice.count"></a>
##### repositoryservice.count : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#selection.id.repositoryservice)</code>  
<a name="selection.id.repositoryservice.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.repositoryservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.repositoryservice.full"></a>
##### repositoryservice.full : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#selection.id.repositoryservice)</code>  
<a name="selection.id.repositoryservice.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.repositoryservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.full.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryService>) {
	console.log(Array.<RepositoryService>)
})
```
<a name="selection.id.repositoryservice.synthetic"></a>
##### repositoryservice.synthetic : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#selection.id.repositoryservice)</code>  

* [.synthetic](#selection.id.repositoryservice.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.repositoryservice.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.repositoryservice.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.repositoryservice.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.repositoryservice.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.repositoryservice.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.repositoryservice.table"></a>
##### repositoryservice.table : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#selection.id.repositoryservice)</code>  
<a name="selection.id.repositoryservice.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.repositoryservice.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.repositoryservice.template"></a>
##### repositoryservice.template : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#selection.id.repositoryservice)</code>  

* [.template](#selection.id.repositoryservice.template) : <code>object</code>
  * [.count](#selection.id.repositoryservice.template.count) : <code>object</code>
    * [.get([filter])](#selection.id.repositoryservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.repositoryservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
  * [.synthetic](#selection.id.repositoryservice.template.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.repositoryservice.template.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.repositoryservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.repositoryservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.repositoryservice.template.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.repositoryservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>

<a name="selection.id.repositoryservice.template.count"></a>
###### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.repositoryservice.template)</code>  
<a name="selection.id.repositoryservice.template.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.repositoryservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.repositoryservice.template.full"></a>
###### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.repositoryservice.template)</code>  
<a name="selection.id.repositoryservice.template.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.repositoryservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
	console.log(Array.<RepositoryServiceTemplate>)
})
```
<a name="selection.id.repositoryservice.template.synthetic"></a>
###### template.synthetic : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.repositoryservice.template)</code>  

* [.synthetic](#selection.id.repositoryservice.template.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.repositoryservice.template.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.repositoryservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.repositoryservice.template.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.repositoryservice.template.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.repositoryservice.template.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.repositoryservice.template.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.repositoryservice.template.table"></a>
###### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.repositoryservice.template)</code>  
<a name="selection.id.repositoryservice.template.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.repositoryservice.template.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.repositoryservice.template.delete"></a>
###### template.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.id.repositoryservice.template)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.repositoryservice.template.get"></a>
###### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#selection.id.repositoryservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.template.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
	console.log(Array.<RepositoryServiceTemplate>)
})
```
<a name="selection.id.repositoryservice.get"></a>
##### repositoryservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/repositoryservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[repositoryservice](#selection.id.repositoryservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).repositoryservice.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryService>) {
	console.log(Array.<RepositoryService>)
})
```
<a name="selection.id.schedulerservice"></a>
#### id.schedulerservice : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.schedulerservice](#selection.id.schedulerservice) : <code>object</code>
  * [.count](#selection.id.schedulerservice.count) : <code>object</code>
    * [.get([filter])](#selection.id.schedulerservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.schedulerservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
  * [.synthetic](#selection.id.schedulerservice.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.schedulerservice.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.schedulerservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#selection.id.schedulerservice.template) : <code>object</code>
    * [.count](#selection.id.schedulerservice.template.count) : <code>object</code>
      * [.get([filter])](#selection.id.schedulerservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.schedulerservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
    * [.synthetic](#selection.id.schedulerservice.template.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.schedulerservice.template.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.schedulerservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.schedulerservice.template.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>

<a name="selection.id.schedulerservice.count"></a>
##### schedulerservice.count : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#selection.id.schedulerservice)</code>  
<a name="selection.id.schedulerservice.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.schedulerservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.schedulerservice.full"></a>
##### schedulerservice.full : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#selection.id.schedulerservice)</code>  
<a name="selection.id.schedulerservice.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.schedulerservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
	console.log(Array.<SchedulerService>)
})
```
<a name="selection.id.schedulerservice.synthetic"></a>
##### schedulerservice.synthetic : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#selection.id.schedulerservice)</code>  

* [.synthetic](#selection.id.schedulerservice.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.schedulerservice.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.schedulerservice.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schedulerservice.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schedulerservice.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schedulerservice.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.schedulerservice.table"></a>
##### schedulerservice.table : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#selection.id.schedulerservice)</code>  
<a name="selection.id.schedulerservice.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.schedulerservice.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.schedulerservice.template"></a>
##### schedulerservice.template : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#selection.id.schedulerservice)</code>  

* [.template](#selection.id.schedulerservice.template) : <code>object</code>
  * [.count](#selection.id.schedulerservice.template.count) : <code>object</code>
    * [.get([filter])](#selection.id.schedulerservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.schedulerservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
  * [.synthetic](#selection.id.schedulerservice.template.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.schedulerservice.template.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.schedulerservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schedulerservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.schedulerservice.template.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.schedulerservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>

<a name="selection.id.schedulerservice.template.count"></a>
###### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.schedulerservice.template)</code>  
<a name="selection.id.schedulerservice.template.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.schedulerservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.schedulerservice.template.full"></a>
###### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.schedulerservice.template)</code>  
<a name="selection.id.schedulerservice.template.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.schedulerservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
	console.log(Array.<SchedulerServiceTemplate>)
})
```
<a name="selection.id.schedulerservice.template.synthetic"></a>
###### template.synthetic : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.schedulerservice.template)</code>  

* [.synthetic](#selection.id.schedulerservice.template.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.schedulerservice.template.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.schedulerservice.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.schedulerservice.template.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schedulerservice.template.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schedulerservice.template.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schedulerservice.template.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.schedulerservice.template.table"></a>
###### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.schedulerservice.template)</code>  
<a name="selection.id.schedulerservice.template.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.schedulerservice.template.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.schedulerservice.template.delete"></a>
###### template.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.id.schedulerservice.template)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schedulerservice.template.get"></a>
###### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#selection.id.schedulerservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.template.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
	console.log(Array.<SchedulerServiceTemplate>)
})
```
<a name="selection.id.schedulerservice.get"></a>
##### schedulerservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schedulerservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[schedulerservice](#selection.id.schedulerservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schedulerservice.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
	console.log(Array.<SchedulerService>)
})
```
<a name="selection.id.schemaevent"></a>
#### id.schemaevent : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.schemaevent](#selection.id.schemaevent) : <code>object</code>
  * [.count](#selection.id.schemaevent.count) : <code>object</code>
    * [.get([filter])](#selection.id.schemaevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.schemaevent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
  * [.synthetic](#selection.id.schemaevent.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.schemaevent.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.schemaevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.schemaevent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schemaevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.schemaevent.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaevent.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>

<a name="selection.id.schemaevent.count"></a>
##### schemaevent.count : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#selection.id.schemaevent)</code>  
<a name="selection.id.schemaevent.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.schemaevent.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.schemaevent.full"></a>
##### schemaevent.full : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#selection.id.schemaevent)</code>  
<a name="selection.id.schemaevent.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.schemaevent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
	console.log(Array.<SchemaEvent>)
})
```
<a name="selection.id.schemaevent.synthetic"></a>
##### schemaevent.synthetic : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#selection.id.schemaevent)</code>  

* [.synthetic](#selection.id.schemaevent.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.schemaevent.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.schemaevent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.schemaevent.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schemaevent.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schemaevent.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schemaevent.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.schemaevent.table"></a>
##### schemaevent.table : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#selection.id.schemaevent)</code>  
<a name="selection.id.schemaevent.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.schemaevent.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.schemaevent.delete"></a>
##### schemaevent.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent?filter={filter}

This method is generated

**Kind**: static method of <code>[schemaevent](#selection.id.schemaevent)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schemaevent.get"></a>
##### schemaevent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[schemaevent](#selection.id.schemaevent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaevent.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
	console.log(Array.<SchemaEvent>)
})
```
<a name="selection.id.schemaeventoperational"></a>
#### id.schemaeventoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.schemaeventoperational](#selection.id.schemaeventoperational) : <code>object</code>
  * [.count](#selection.id.schemaeventoperational.count) : <code>object</code>
    * [.get([filter])](#selection.id.schemaeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.schemaeventoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
  * [.synthetic](#selection.id.schemaeventoperational.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.schemaeventoperational.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.schemaeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.schemaeventoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.schemaeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.schemaeventoperational.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.schemaeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>

<a name="selection.id.schemaeventoperational.count"></a>
##### schemaeventoperational.count : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#selection.id.schemaeventoperational)</code>  
<a name="selection.id.schemaeventoperational.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.schemaeventoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.schemaeventoperational.full"></a>
##### schemaeventoperational.full : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#selection.id.schemaeventoperational)</code>  
<a name="selection.id.schemaeventoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.schemaeventoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEventOperational>) {
	console.log(Array.<SchemaEventOperational>)
})
```
<a name="selection.id.schemaeventoperational.synthetic"></a>
##### schemaeventoperational.synthetic : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#selection.id.schemaeventoperational)</code>  

* [.synthetic](#selection.id.schemaeventoperational.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.schemaeventoperational.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.schemaeventoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.schemaeventoperational.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schemaeventoperational.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schemaeventoperational.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.schemaeventoperational.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.schemaeventoperational.table"></a>
##### schemaeventoperational.table : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#selection.id.schemaeventoperational)</code>  
<a name="selection.id.schemaeventoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.schemaeventoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.schemaeventoperational.delete"></a>
##### schemaeventoperational.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[schemaeventoperational](#selection.id.schemaeventoperational)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.schemaeventoperational.get"></a>
##### schemaeventoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/schemaeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[schemaeventoperational](#selection.id.schemaeventoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).schemaeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEventOperational>) {
	console.log(Array.<SchemaEventOperational>)
})
```
<a name="selection.id.servernodeconfiguration"></a>
#### id.servernodeconfiguration : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.servernodeconfiguration](#selection.id.servernodeconfiguration) : <code>object</code>
  * [.count](#selection.id.servernodeconfiguration.count) : <code>object</code>
    * [.get([filter])](#selection.id.servernodeconfiguration.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.servernodeconfiguration.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.servernodeconfiguration.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
  * [.synthetic](#selection.id.servernodeconfiguration.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.servernodeconfiguration.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.servernodeconfiguration.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.servernodeconfiguration.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.servernodeconfiguration.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.servernodeconfiguration.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.servernodeconfiguration.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>

<a name="selection.id.servernodeconfiguration.count"></a>
##### servernodeconfiguration.count : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#selection.id.servernodeconfiguration)</code>  
<a name="selection.id.servernodeconfiguration.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.servernodeconfiguration.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.servernodeconfiguration.full"></a>
##### servernodeconfiguration.full : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#selection.id.servernodeconfiguration)</code>  
<a name="selection.id.servernodeconfiguration.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.servernodeconfiguration.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.full.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
	console.log(Array.<ServerNodeConfiguration>)
})
```
<a name="selection.id.servernodeconfiguration.synthetic"></a>
##### servernodeconfiguration.synthetic : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#selection.id.servernodeconfiguration)</code>  

* [.synthetic](#selection.id.servernodeconfiguration.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.servernodeconfiguration.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.servernodeconfiguration.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.servernodeconfiguration.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration/synthetic?filter={filter}

This method is manual

**Kind**: static method of <code>[synthetic](#selection.id.servernodeconfiguration.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.servernodeconfiguration.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.servernodeconfiguration.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.servernodeconfiguration.table"></a>
##### servernodeconfiguration.table : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#selection.id.servernodeconfiguration)</code>  
<a name="selection.id.servernodeconfiguration.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.servernodeconfiguration.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.servernodeconfiguration.delete"></a>
##### servernodeconfiguration.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration?filter={filter}

This method is generated

**Kind**: static method of <code>[servernodeconfiguration](#selection.id.servernodeconfiguration)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.servernodeconfiguration.get"></a>
##### servernodeconfiguration.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servernodeconfiguration?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[servernodeconfiguration](#selection.id.servernodeconfiguration)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servernodeconfiguration.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
	console.log(Array.<ServerNodeConfiguration>)
})
```
<a name="selection.id.servicestatus"></a>
#### id.servicestatus : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.servicestatus](#selection.id.servicestatus) : <code>object</code>
  * [.count](#selection.id.servicestatus.count) : <code>object</code>
    * [.get([filter])](#selection.id.servicestatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.servicestatus.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.servicestatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
  * [.synthetic](#selection.id.servicestatus.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.servicestatus.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.servicestatus.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.servicestatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.servicestatus.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>

<a name="selection.id.servicestatus.count"></a>
##### servicestatus.count : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#selection.id.servicestatus)</code>  
<a name="selection.id.servicestatus.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servicestatus/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.servicestatus.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servicestatus.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.servicestatus.full"></a>
##### servicestatus.full : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#selection.id.servicestatus)</code>  
<a name="selection.id.servicestatus.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servicestatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.servicestatus.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servicestatus.full.get(filter, orderby, appendprivileges).then(function(Array.<ServiceStatus>) {
	console.log(Array.<ServiceStatus>)
})
```
<a name="selection.id.servicestatus.synthetic"></a>
##### servicestatus.synthetic : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#selection.id.servicestatus)</code>  
<a name="selection.id.servicestatus.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servicestatus/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.servicestatus.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servicestatus.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.servicestatus.table"></a>
##### servicestatus.table : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#selection.id.servicestatus)</code>  
<a name="selection.id.servicestatus.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servicestatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.servicestatus.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servicestatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.servicestatus.get"></a>
##### servicestatus.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/servicestatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[servicestatus](#selection.id.servicestatus)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).servicestatus.get(filter, orderby, appendprivileges).then(function(Array.<ServiceStatus>) {
	console.log(Array.<ServiceStatus>)
})
```
<a name="selection.id.staticcontentreference"></a>
#### id.staticcontentreference : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.staticcontentreference](#selection.id.staticcontentreference) : <code>object</code>
  * [.count](#selection.id.staticcontentreference.count) : <code>object</code>
    * [.get([filter])](#selection.id.staticcontentreference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.staticcontentreference.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreference.full.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
  * [.synthetic](#selection.id.staticcontentreference.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.staticcontentreference.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.staticcontentreference.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.staticcontentreference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreference.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>

<a name="selection.id.staticcontentreference.count"></a>
##### staticcontentreference.count : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#selection.id.staticcontentreference)</code>  
<a name="selection.id.staticcontentreference.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreference/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.staticcontentreference.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreference.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.staticcontentreference.full"></a>
##### staticcontentreference.full : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#selection.id.staticcontentreference)</code>  
<a name="selection.id.staticcontentreference.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.staticcontentreference.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreference.full.get(filter, orderby, appendprivileges).then(function(Array.<StaticContentReference>) {
	console.log(Array.<StaticContentReference>)
})
```
<a name="selection.id.staticcontentreference.synthetic"></a>
##### staticcontentreference.synthetic : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#selection.id.staticcontentreference)</code>  
<a name="selection.id.staticcontentreference.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreference/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.staticcontentreference.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreference.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.staticcontentreference.table"></a>
##### staticcontentreference.table : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#selection.id.staticcontentreference)</code>  
<a name="selection.id.staticcontentreference.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.staticcontentreference.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.staticcontentreference.get"></a>
##### staticcontentreference.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreference?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[staticcontentreference](#selection.id.staticcontentreference)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreference.get(filter, orderby, appendprivileges).then(function(Array.<StaticContentReference>) {
	console.log(Array.<StaticContentReference>)
})
```
<a name="selection.id.staticcontentreferencebase"></a>
#### id.staticcontentreferencebase : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.staticcontentreferencebase](#selection.id.staticcontentreferencebase) : <code>object</code>
  * [.full](#selection.id.staticcontentreferencebase.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreferencebase.full.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.staticcontentreferencebase.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>

<a name="selection.id.staticcontentreferencebase.full"></a>
##### staticcontentreferencebase.full : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreferencebase](#selection.id.staticcontentreferencebase)</code>  
<a name="selection.id.staticcontentreferencebase.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreferencebase/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.staticcontentreferencebase.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreferencebase.full.get(filter, orderby, appendprivileges).then(function(Array.<IStaticContentReferenceBase>) {
	console.log(Array.<IStaticContentReferenceBase>)
})
```
<a name="selection.id.staticcontentreferencebase.get"></a>
##### staticcontentreferencebase.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/staticcontentreferencebase?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[staticcontentreferencebase](#selection.id.staticcontentreferencebase)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).staticcontentreferencebase.get(filter, orderby, appendprivileges).then(function(Array.<IStaticContentReferenceBase>) {
	console.log(Array.<IStaticContentReferenceBase>)
})
```
<a name="selection.id.stream"></a>
#### id.stream : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.stream](#selection.id.stream) : <code>object</code>
  * [.count](#selection.id.stream.count) : <code>object</code>
    * [.get([filter])](#selection.id.stream.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.stream.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.stream.full.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
  * [.synthetic](#selection.id.stream.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.stream.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.stream.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.stream.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.stream.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.stream.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.stream.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>

<a name="selection.id.stream.count"></a>
##### stream.count : <code>object</code>
**Kind**: static namespace of <code>[stream](#selection.id.stream)</code>  
<a name="selection.id.stream.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.stream.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.stream.full"></a>
##### stream.full : <code>object</code>
**Kind**: static namespace of <code>[stream](#selection.id.stream)</code>  
<a name="selection.id.stream.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.stream.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.full.get(filter, orderby, appendprivileges).then(function(Array.<Stream>) {
	console.log(Array.<Stream>)
})
```
<a name="selection.id.stream.synthetic"></a>
##### stream.synthetic : <code>object</code>
**Kind**: static namespace of <code>[stream](#selection.id.stream)</code>  

* [.synthetic](#selection.id.stream.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.stream.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.stream.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.stream.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.stream.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.stream.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.stream.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.stream.table"></a>
##### stream.table : <code>object</code>
**Kind**: static namespace of <code>[stream](#selection.id.stream)</code>  
<a name="selection.id.stream.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.stream.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.stream.delete"></a>
##### stream.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream?filter={filter}

This method is generated

**Kind**: static method of <code>[stream](#selection.id.stream)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.stream.get"></a>
##### stream.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/stream?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[stream](#selection.id.stream)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).stream.get(filter, orderby, appendprivileges).then(function(Array.<Stream>) {
	console.log(Array.<Stream>)
})
```
<a name="selection.id.syncsession"></a>
#### id.syncsession : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.syncsession](#selection.id.syncsession) : <code>object</code>
  * [.count](#selection.id.syncsession.count) : <code>object</code>
    * [.get([filter])](#selection.id.syncsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.syncsession.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.syncsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
  * [.synthetic](#selection.id.syncsession.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.syncsession.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.syncsession.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.syncsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.syncsession.get) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>

<a name="selection.id.syncsession.count"></a>
##### syncsession.count : <code>object</code>
**Kind**: static namespace of <code>[syncsession](#selection.id.syncsession)</code>  
<a name="selection.id.syncsession.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/syncsession/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.syncsession.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).syncsession.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.syncsession.full"></a>
##### syncsession.full : <code>object</code>
**Kind**: static namespace of <code>[syncsession](#selection.id.syncsession)</code>  
<a name="selection.id.syncsession.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/syncsession/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.syncsession.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).syncsession.full.get(filter, orderby, appendprivileges).then(function(Array.<SyncSession>) {
	console.log(Array.<SyncSession>)
})
```
<a name="selection.id.syncsession.synthetic"></a>
##### syncsession.synthetic : <code>object</code>
**Kind**: static namespace of <code>[syncsession](#selection.id.syncsession)</code>  
<a name="selection.id.syncsession.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/syncsession/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.syncsession.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).syncsession.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.syncsession.table"></a>
##### syncsession.table : <code>object</code>
**Kind**: static namespace of <code>[syncsession](#selection.id.syncsession)</code>  
<a name="selection.id.syncsession.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/syncsession/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.syncsession.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).syncsession.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.syncsession.get"></a>
##### syncsession.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/syncsession?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[syncsession](#selection.id.syncsession)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SyncSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).syncsession.get(filter, orderby, appendprivileges).then(function(Array.<SyncSession>) {
	console.log(Array.<SyncSession>)
})
```
<a name="selection.id.systemrule"></a>
#### id.systemrule : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.systemrule](#selection.id.systemrule) : <code>object</code>
  * [.count](#selection.id.systemrule.count) : <code>object</code>
    * [.get([filter])](#selection.id.systemrule.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.systemrule.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.systemrule.full.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
  * [.synthetic](#selection.id.systemrule.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.systemrule.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.systemrule.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.systemrule.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.systemrule.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.systemrule.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.systemrule.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>

<a name="selection.id.systemrule.count"></a>
##### systemrule.count : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#selection.id.systemrule)</code>  
<a name="selection.id.systemrule.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.systemrule.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.systemrule.full"></a>
##### systemrule.full : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#selection.id.systemrule)</code>  
<a name="selection.id.systemrule.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.systemrule.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.full.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
	console.log(Array.<SystemRule>)
})
```
<a name="selection.id.systemrule.synthetic"></a>
##### systemrule.synthetic : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#selection.id.systemrule)</code>  

* [.synthetic](#selection.id.systemrule.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.systemrule.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.systemrule.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.systemrule.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.systemrule.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.systemrule.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.systemrule.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.systemrule.table"></a>
##### systemrule.table : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#selection.id.systemrule)</code>  
<a name="selection.id.systemrule.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.systemrule.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.systemrule.delete"></a>
##### systemrule.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule?filter={filter}

This method is generated

**Kind**: static method of <code>[systemrule](#selection.id.systemrule)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.systemrule.get"></a>
##### systemrule.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/systemrule?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[systemrule](#selection.id.systemrule)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).systemrule.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
	console.log(Array.<SystemRule>)
})
```
<a name="selection.id.tag"></a>
#### id.tag : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.tag](#selection.id.tag) : <code>object</code>
  * [.count](#selection.id.tag.count) : <code>object</code>
    * [.get([filter])](#selection.id.tag.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.tag.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.tag.full.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
  * [.synthetic](#selection.id.tag.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.tag.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.tag.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.tag.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.tag.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.tag.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.tag.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>

<a name="selection.id.tag.count"></a>
##### tag.count : <code>object</code>
**Kind**: static namespace of <code>[tag](#selection.id.tag)</code>  
<a name="selection.id.tag.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.tag.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.tag.full"></a>
##### tag.full : <code>object</code>
**Kind**: static namespace of <code>[tag](#selection.id.tag)</code>  
<a name="selection.id.tag.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.tag.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.full.get(filter, orderby, appendprivileges).then(function(Array.<Tag>) {
	console.log(Array.<Tag>)
})
```
<a name="selection.id.tag.synthetic"></a>
##### tag.synthetic : <code>object</code>
**Kind**: static namespace of <code>[tag](#selection.id.tag)</code>  

* [.synthetic](#selection.id.tag.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.tag.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.tag.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.tag.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.tag.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.tag.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.tag.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.tag.table"></a>
##### tag.table : <code>object</code>
**Kind**: static namespace of <code>[tag](#selection.id.tag)</code>  
<a name="selection.id.tag.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.tag.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.tag.delete"></a>
##### tag.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag?filter={filter}

This method is generated

**Kind**: static method of <code>[tag](#selection.id.tag)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.tag.get"></a>
##### tag.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tag?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[tag](#selection.id.tag)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tag.get(filter, orderby, appendprivileges).then(function(Array.<Tag>) {
	console.log(Array.<Tag>)
})
```
<a name="selection.id.task"></a>
#### id.task : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.task](#selection.id.task) : <code>object</code>
  * [.full](#selection.id.task.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.task.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.task.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>

<a name="selection.id.task.full"></a>
##### task.full : <code>object</code>
**Kind**: static namespace of <code>[task](#selection.id.task)</code>  
<a name="selection.id.task.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/task/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.task.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).task.full.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
	console.log(Array.<ITask>)
})
```
<a name="selection.id.task.get"></a>
##### task.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/task?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[task](#selection.id.task)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).task.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
	console.log(Array.<ITask>)
})
```
<a name="selection.id.taskoperational"></a>
#### id.taskoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.taskoperational](#selection.id.taskoperational) : <code>object</code>
  * [.full](#selection.id.taskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.taskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.taskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>

<a name="selection.id.taskoperational.full"></a>
##### taskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[taskoperational](#selection.id.taskoperational)</code>  
<a name="selection.id.taskoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/taskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.taskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).taskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ITaskOperational>) {
	console.log(Array.<ITaskOperational>)
})
```
<a name="selection.id.taskoperational.get"></a>
##### taskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/taskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[taskoperational](#selection.id.taskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).taskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ITaskOperational>) {
	console.log(Array.<ITaskOperational>)
})
```
<a name="selection.id.tempcontent"></a>
#### id.tempcontent : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.tempcontent](#selection.id.tempcontent) : <code>object</code>
  * [.count](#selection.id.tempcontent.count) : <code>object</code>
    * [.get([filter])](#selection.id.tempcontent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.tempcontent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.tempcontent.full.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
  * [.synthetic](#selection.id.tempcontent.synthetic) : <code>object</code>
    * [.get([filter], [appendprivileges])](#selection.id.tempcontent.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.tempcontent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.tempcontent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.tempcontent.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>

<a name="selection.id.tempcontent.count"></a>
##### tempcontent.count : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#selection.id.tempcontent)</code>  
<a name="selection.id.tempcontent.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tempcontent/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.tempcontent.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tempcontent.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.tempcontent.full"></a>
##### tempcontent.full : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#selection.id.tempcontent)</code>  
<a name="selection.id.tempcontent.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tempcontent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.tempcontent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tempcontent.full.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
	console.log(Array.<TempContent>)
})
```
<a name="selection.id.tempcontent.synthetic"></a>
##### tempcontent.synthetic : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#selection.id.tempcontent)</code>  
<a name="selection.id.tempcontent.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tempcontent/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.tempcontent.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tempcontent.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.tempcontent.table"></a>
##### tempcontent.table : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#selection.id.tempcontent)</code>  
<a name="selection.id.tempcontent.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tempcontent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.tempcontent.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tempcontent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.tempcontent.get"></a>
##### tempcontent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/tempcontent?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[tempcontent](#selection.id.tempcontent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).tempcontent.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
	console.log(Array.<TempContent>)
})
```
<a name="selection.id.user"></a>
#### id.user : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.user](#selection.id.user) : <code>object</code>
  * [.count](#selection.id.user.count) : <code>object</code>
    * [.get([filter])](#selection.id.user.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.followingapp](#selection.id.user.followingapp) : <code>object</code>
    * [.count](#selection.id.user.followingapp.count) : <code>object</code>
      * [.get([filter])](#selection.id.user.followingapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.user.followingapp.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
    * [.synthetic](#selection.id.user.followingapp.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.user.followingapp.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.user.followingapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.user.followingapp.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.followingapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.user.followingapp.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
  * [.full](#selection.id.user.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.full.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.license](#selection.id.user.license) : <code>object</code>
    * [.useraccesstype](#selection.id.user.license.useraccesstype) : <code>object</code>
      * [.post(postParams)](#selection.id.user.license.useraccesstype.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
  * [.recentapp](#selection.id.user.recentapp) : <code>object</code>
    * [.count](#selection.id.user.recentapp.count) : <code>object</code>
      * [.get([filter])](#selection.id.user.recentapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.user.recentapp.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
    * [.synthetic](#selection.id.user.recentapp.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.user.recentapp.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.user.recentapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.user.recentapp.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.recentapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.user.recentapp.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
  * [.synthetic](#selection.id.user.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.user.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.user.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.user.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.user.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>

<a name="selection.id.user.count"></a>
##### user.count : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  
<a name="selection.id.user.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.user.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.user.followingapp"></a>
##### user.followingapp : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  

* [.followingapp](#selection.id.user.followingapp) : <code>object</code>
  * [.count](#selection.id.user.followingapp.count) : <code>object</code>
    * [.get([filter])](#selection.id.user.followingapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.user.followingapp.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
  * [.synthetic](#selection.id.user.followingapp.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.user.followingapp.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.user.followingapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.user.followingapp.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.followingapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.user.followingapp.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.followingapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>

<a name="selection.id.user.followingapp.count"></a>
###### followingapp.count : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#selection.id.user.followingapp)</code>  
<a name="selection.id.user.followingapp.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.user.followingapp.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.user.followingapp.full"></a>
###### followingapp.full : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#selection.id.user.followingapp)</code>  
<a name="selection.id.user.followingapp.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.user.followingapp.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
	console.log(Array.<UserFollowingApp>)
})
```
<a name="selection.id.user.followingapp.synthetic"></a>
###### followingapp.synthetic : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#selection.id.user.followingapp)</code>  

* [.synthetic](#selection.id.user.followingapp.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.user.followingapp.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.user.followingapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.user.followingapp.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.user.followingapp.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.user.followingapp.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.user.followingapp.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.user.followingapp.table"></a>
###### followingapp.table : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#selection.id.user.followingapp)</code>  
<a name="selection.id.user.followingapp.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.user.followingapp.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.user.followingapp.delete"></a>
###### followingapp.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp?filter={filter}

This method is generated

**Kind**: static method of <code>[followingapp](#selection.id.user.followingapp)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.user.followingapp.get"></a>
###### followingapp.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/followingapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[followingapp](#selection.id.user.followingapp)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.followingapp.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
	console.log(Array.<UserFollowingApp>)
})
```
<a name="selection.id.user.full"></a>
##### user.full : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  
<a name="selection.id.user.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.user.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;User&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.full.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
	console.log(Array.<User>)
})
```
<a name="selection.id.user.license"></a>
##### user.license : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  

* [.license](#selection.id.user.license) : <code>object</code>
  * [.useraccesstype](#selection.id.user.license.useraccesstype) : <code>object</code>
    * [.post(postParams)](#selection.id.user.license.useraccesstype.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>

<a name="selection.id.user.license.useraccesstype"></a>
###### license.useraccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.id.user.license)</code>  
<a name="selection.id.user.license.useraccesstype.post"></a>
####### useraccesstype.post(postParams) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/license/useraccesstype

This method is manual

**Kind**: static method of <code>[useraccesstype](#selection.id.user.license.useraccesstype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessType</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.selection.id(id).user.license.useraccesstype.post(postParams).then(function(Array.<LicenseUserAccessType>) {
	console.log(Array.<LicenseUserAccessType>)
})
```
<a name="selection.id.user.recentapp"></a>
##### user.recentapp : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  

* [.recentapp](#selection.id.user.recentapp) : <code>object</code>
  * [.count](#selection.id.user.recentapp.count) : <code>object</code>
    * [.get([filter])](#selection.id.user.recentapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.user.recentapp.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
  * [.synthetic](#selection.id.user.recentapp.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.user.recentapp.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.user.recentapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.user.recentapp.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.user.recentapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.user.recentapp.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.user.recentapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>

<a name="selection.id.user.recentapp.count"></a>
###### recentapp.count : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#selection.id.user.recentapp)</code>  
<a name="selection.id.user.recentapp.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.user.recentapp.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.user.recentapp.full"></a>
###### recentapp.full : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#selection.id.user.recentapp)</code>  
<a name="selection.id.user.recentapp.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.user.recentapp.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
	console.log(Array.<UserRecentApp>)
})
```
<a name="selection.id.user.recentapp.synthetic"></a>
###### recentapp.synthetic : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#selection.id.user.recentapp)</code>  

* [.synthetic](#selection.id.user.recentapp.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.user.recentapp.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.user.recentapp.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.user.recentapp.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.user.recentapp.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.user.recentapp.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.user.recentapp.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.user.recentapp.table"></a>
###### recentapp.table : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#selection.id.user.recentapp)</code>  
<a name="selection.id.user.recentapp.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.user.recentapp.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.user.recentapp.delete"></a>
###### recentapp.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp?filter={filter}

This method is generated

**Kind**: static method of <code>[recentapp](#selection.id.user.recentapp)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.user.recentapp.get"></a>
###### recentapp.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/recentapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[recentapp](#selection.id.user.recentapp)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.recentapp.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
	console.log(Array.<UserRecentApp>)
})
```
<a name="selection.id.user.synthetic"></a>
##### user.synthetic : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  

* [.synthetic](#selection.id.user.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.user.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.user.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.user.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.user.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.user.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.user.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.user.table"></a>
##### user.table : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.id.user)</code>  
<a name="selection.id.user.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.user.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.user.delete"></a>
##### user.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user?filter={filter}

This method is generated

**Kind**: static method of <code>[user](#selection.id.user)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.user.get"></a>
##### user.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/user?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[user](#selection.id.user)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;User&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).user.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
	console.log(Array.<User>)
})
```
<a name="selection.id.userdirectory"></a>
#### id.userdirectory : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.userdirectory](#selection.id.userdirectory) : <code>object</code>
  * [.count](#selection.id.userdirectory.count) : <code>object</code>
    * [.get([filter])](#selection.id.userdirectory.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.userdirectory.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
  * [.synthetic](#selection.id.userdirectory.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.userdirectory.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.userdirectory.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.userdirectory.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#selection.id.userdirectory.template) : <code>object</code>
    * [.count](#selection.id.userdirectory.template.count) : <code>object</code>
      * [.get([filter])](#selection.id.userdirectory.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#selection.id.userdirectory.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
    * [.synthetic](#selection.id.userdirectory.template.synthetic) : <code>object</code>
      * [.put(postParams, [filter])](#selection.id.userdirectory.template.synthetic.put) ⇒ <code>Promise</code>
      * [.get([filter], [appendprivileges])](#selection.id.userdirectory.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
    * [.table](#selection.id.userdirectory.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.delete([filter])](#selection.id.userdirectory.template.delete) ⇒ <code>Promise</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
  * [.delete([filter])](#selection.id.userdirectory.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>

<a name="selection.id.userdirectory.count"></a>
##### userdirectory.count : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#selection.id.userdirectory)</code>  
<a name="selection.id.userdirectory.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.userdirectory.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.userdirectory.full"></a>
##### userdirectory.full : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#selection.id.userdirectory)</code>  
<a name="selection.id.userdirectory.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.userdirectory.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
	console.log(Array.<UserDirectory>)
})
```
<a name="selection.id.userdirectory.synthetic"></a>
##### userdirectory.synthetic : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#selection.id.userdirectory)</code>  

* [.synthetic](#selection.id.userdirectory.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.userdirectory.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.userdirectory.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.userdirectory.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.userdirectory.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.userdirectory.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.userdirectory.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.userdirectory.table"></a>
##### userdirectory.table : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#selection.id.userdirectory)</code>  
<a name="selection.id.userdirectory.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.userdirectory.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.userdirectory.template"></a>
##### userdirectory.template : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#selection.id.userdirectory)</code>  

* [.template](#selection.id.userdirectory.template) : <code>object</code>
  * [.count](#selection.id.userdirectory.template.count) : <code>object</code>
    * [.get([filter])](#selection.id.userdirectory.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.userdirectory.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
  * [.synthetic](#selection.id.userdirectory.template.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.userdirectory.template.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.userdirectory.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.userdirectory.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.userdirectory.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.userdirectory.template.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.userdirectory.template.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>

<a name="selection.id.userdirectory.template.count"></a>
###### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.userdirectory.template)</code>  
<a name="selection.id.userdirectory.template.count.get"></a>
####### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.userdirectory.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.userdirectory.template.full"></a>
###### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.userdirectory.template)</code>  
<a name="selection.id.userdirectory.template.full.get"></a>
####### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.userdirectory.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
	console.log(Array.<UserDirectoryTemplate>)
})
```
<a name="selection.id.userdirectory.template.synthetic"></a>
###### template.synthetic : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.userdirectory.template)</code>  

* [.synthetic](#selection.id.userdirectory.template.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.userdirectory.template.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.userdirectory.template.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.userdirectory.template.synthetic.put"></a>
####### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.userdirectory.template.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.userdirectory.template.synthetic.get"></a>
####### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.userdirectory.template.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.userdirectory.template.table"></a>
###### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#selection.id.userdirectory.template)</code>  
<a name="selection.id.userdirectory.template.table.post"></a>
####### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.userdirectory.template.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.userdirectory.template.delete"></a>
###### template.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.id.userdirectory.template)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.userdirectory.template.get"></a>
###### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#selection.id.userdirectory.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.template.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
	console.log(Array.<UserDirectoryTemplate>)
})
```
<a name="selection.id.userdirectory.delete"></a>
##### userdirectory.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory?filter={filter}

This method is generated

**Kind**: static method of <code>[userdirectory](#selection.id.userdirectory)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.userdirectory.get"></a>
##### userdirectory.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/userdirectory?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[userdirectory](#selection.id.userdirectory)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).userdirectory.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
	console.log(Array.<UserDirectory>)
})
```
<a name="selection.id.usersynctask"></a>
#### id.usersynctask : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.usersynctask](#selection.id.usersynctask) : <code>object</code>
  * [.count](#selection.id.usersynctask.count) : <code>object</code>
    * [.get([filter])](#selection.id.usersynctask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.usersynctask.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctask.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
  * [.synthetic](#selection.id.usersynctask.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.usersynctask.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.usersynctask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.usersynctask.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.usersynctask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.usersynctask.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctask.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>

<a name="selection.id.usersynctask.count"></a>
##### usersynctask.count : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#selection.id.usersynctask)</code>  
<a name="selection.id.usersynctask.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.usersynctask.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.usersynctask.full"></a>
##### usersynctask.full : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#selection.id.usersynctask)</code>  
<a name="selection.id.usersynctask.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.usersynctask.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
	console.log(Array.<UserSyncTask>)
})
```
<a name="selection.id.usersynctask.synthetic"></a>
##### usersynctask.synthetic : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#selection.id.usersynctask)</code>  

* [.synthetic](#selection.id.usersynctask.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.usersynctask.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.usersynctask.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.usersynctask.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.usersynctask.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.usersynctask.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.usersynctask.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.usersynctask.table"></a>
##### usersynctask.table : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#selection.id.usersynctask)</code>  
<a name="selection.id.usersynctask.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.usersynctask.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.usersynctask.delete"></a>
##### usersynctask.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask?filter={filter}

This method is generated

**Kind**: static method of <code>[usersynctask](#selection.id.usersynctask)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.usersynctask.get"></a>
##### usersynctask.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctask?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[usersynctask](#selection.id.usersynctask)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctask.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
	console.log(Array.<UserSyncTask>)
})
```
<a name="selection.id.usersynctaskoperational"></a>
#### id.usersynctaskoperational : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.usersynctaskoperational](#selection.id.usersynctaskoperational) : <code>object</code>
  * [.count](#selection.id.usersynctaskoperational.count) : <code>object</code>
    * [.get([filter])](#selection.id.usersynctaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.usersynctaskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
  * [.synthetic](#selection.id.usersynctaskoperational.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.usersynctaskoperational.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.usersynctaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.usersynctaskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.usersynctaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.usersynctaskoperational.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.usersynctaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>

<a name="selection.id.usersynctaskoperational.count"></a>
##### usersynctaskoperational.count : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#selection.id.usersynctaskoperational)</code>  
<a name="selection.id.usersynctaskoperational.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.usersynctaskoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.usersynctaskoperational.full"></a>
##### usersynctaskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#selection.id.usersynctaskoperational)</code>  
<a name="selection.id.usersynctaskoperational.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.usersynctaskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
	console.log(Array.<UserSyncTaskOperational>)
})
```
<a name="selection.id.usersynctaskoperational.synthetic"></a>
##### usersynctaskoperational.synthetic : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#selection.id.usersynctaskoperational)</code>  

* [.synthetic](#selection.id.usersynctaskoperational.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.usersynctaskoperational.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.usersynctaskoperational.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.usersynctaskoperational.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.usersynctaskoperational.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.usersynctaskoperational.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.usersynctaskoperational.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.usersynctaskoperational.table"></a>
##### usersynctaskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#selection.id.usersynctaskoperational)</code>  
<a name="selection.id.usersynctaskoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.usersynctaskoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.usersynctaskoperational.delete"></a>
##### usersynctaskoperational.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[usersynctaskoperational](#selection.id.usersynctaskoperational)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.usersynctaskoperational.get"></a>
##### usersynctaskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/usersynctaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[usersynctaskoperational](#selection.id.usersynctaskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).usersynctaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
	console.log(Array.<UserSyncTaskOperational>)
})
```
<a name="selection.id.virtualproxyconfig"></a>
#### id.virtualproxyconfig : <code>object</code>
**Kind**: static namespace of <code>[id](#selection.id)</code>  

* [.virtualproxyconfig](#selection.id.virtualproxyconfig) : <code>object</code>
  * [.count](#selection.id.virtualproxyconfig.count) : <code>object</code>
    * [.get([filter])](#selection.id.virtualproxyconfig.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#selection.id.virtualproxyconfig.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#selection.id.virtualproxyconfig.full.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
  * [.synthetic](#selection.id.virtualproxyconfig.synthetic) : <code>object</code>
    * [.put(postParams, [filter])](#selection.id.virtualproxyconfig.synthetic.put) ⇒ <code>Promise</code>
    * [.get([filter], [appendprivileges])](#selection.id.virtualproxyconfig.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
  * [.table](#selection.id.virtualproxyconfig.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.id.virtualproxyconfig.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.delete([filter])](#selection.id.virtualproxyconfig.delete) ⇒ <code>Promise</code>
  * [.get([filter], [orderby], [appendprivileges])](#selection.id.virtualproxyconfig.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>

<a name="selection.id.virtualproxyconfig.count"></a>
##### virtualproxyconfig.count : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#selection.id.virtualproxyconfig)</code>  
<a name="selection.id.virtualproxyconfig.count.get"></a>
###### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.id.virtualproxyconfig.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.id.virtualproxyconfig.full"></a>
##### virtualproxyconfig.full : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#selection.id.virtualproxyconfig)</code>  
<a name="selection.id.virtualproxyconfig.full.get"></a>
###### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.id.virtualproxyconfig.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.full.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
	console.log(Array.<VirtualProxyConfig>)
})
```
<a name="selection.id.virtualproxyconfig.synthetic"></a>
##### virtualproxyconfig.synthetic : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#selection.id.virtualproxyconfig)</code>  

* [.synthetic](#selection.id.virtualproxyconfig.synthetic) : <code>object</code>
  * [.put(postParams, [filter])](#selection.id.virtualproxyconfig.synthetic.put) ⇒ <code>Promise</code>
  * [.get([filter], [appendprivileges])](#selection.id.virtualproxyconfig.synthetic.get) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>

<a name="selection.id.virtualproxyconfig.synthetic.put"></a>
###### synthetic.put(postParams, [filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig/synthetic?filter={filter}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.virtualproxyconfig.synthetic)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyntheticRootEntity</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.synthetic.put(postParams, filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.virtualproxyconfig.synthetic.get"></a>
###### synthetic.get([filter], [appendprivileges]) ⇒ <code>Promise.&lt;SyntheticEntity&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig/synthetic?filter={filter}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[synthetic](#selection.id.virtualproxyconfig.synthetic)</code>  
**Returns**: <code>Promise.&lt;SyntheticEntity&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.synthetic.get(filter, appendprivileges).then(function(SyntheticEntity) {
	console.log(SyntheticEntity)
})
```
<a name="selection.id.virtualproxyconfig.table"></a>
##### virtualproxyconfig.table : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#selection.id.virtualproxyconfig)</code>  
<a name="selection.id.virtualproxyconfig.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.id.virtualproxyconfig.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.id.virtualproxyconfig.delete"></a>
##### virtualproxyconfig.delete([filter]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig?filter={filter}

This method is generated

**Kind**: static method of <code>[virtualproxyconfig](#selection.id.virtualproxyconfig)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.delete(filter).then(function() {
	console.log('done')
})
```
<a name="selection.id.virtualproxyconfig.get"></a>
##### virtualproxyconfig.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}/virtualproxyconfig?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[virtualproxyconfig](#selection.id.virtualproxyconfig)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).virtualproxyconfig.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
	console.log(Array.<VirtualProxyConfig>)
})
```
<a name="selection.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}

This method is generated

**Kind**: static method of <code>[id](#selection.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.selection.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="selection.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#selection.id)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).get(appendprivileges).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{id}?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[id](#selection.id)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Selection</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.id(id).put(postParams, appendprivileges).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.selectionid"></a>
### selection.selectionid : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.selectionid](#selection.selectionid) : <code>object</code>
  * [.appcomponent](#selection.selectionid.appcomponent) : <code>object</code>
    * [.table](#selection.selectionid.appcomponent.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.appcomponent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.event](#selection.selectionid.event) : <code>object</code>
    * [.table](#selection.selectionid.event.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.event.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.eventoperational](#selection.selectionid.eventoperational) : <code>object</code>
    * [.table](#selection.selectionid.eventoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.eventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.licenseaccessusage](#selection.selectionid.licenseaccessusage) : <code>object</code>
    * [.table](#selection.selectionid.licenseaccessusage.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.licenseaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.staticcontentreferencebase](#selection.selectionid.staticcontentreferencebase) : <code>object</code>
    * [.table](#selection.selectionid.staticcontentreferencebase.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.staticcontentreferencebase.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.task](#selection.selectionid.task) : <code>object</code>
    * [.table](#selection.selectionid.task.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.task.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.taskoperational](#selection.selectionid.taskoperational) : <code>object</code>
    * [.table](#selection.selectionid.taskoperational.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.taskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.appcomponent"></a>
#### selectionid.appcomponent : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.appcomponent](#selection.selectionid.appcomponent) : <code>object</code>
  * [.table](#selection.selectionid.appcomponent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.appcomponent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.appcomponent.table"></a>
##### appcomponent.table : <code>object</code>
**Kind**: static namespace of <code>[appcomponent](#selection.selectionid.appcomponent)</code>  
<a name="selection.selectionid.appcomponent.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/appcomponent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.appcomponent.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).appcomponent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.selectionid.event"></a>
#### selectionid.event : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.event](#selection.selectionid.event) : <code>object</code>
  * [.table](#selection.selectionid.event.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.event.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.event.table"></a>
##### event.table : <code>object</code>
**Kind**: static namespace of <code>[event](#selection.selectionid.event)</code>  
<a name="selection.selectionid.event.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/event/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.event.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).event.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.selectionid.eventoperational"></a>
#### selectionid.eventoperational : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.eventoperational](#selection.selectionid.eventoperational) : <code>object</code>
  * [.table](#selection.selectionid.eventoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.eventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.eventoperational.table"></a>
##### eventoperational.table : <code>object</code>
**Kind**: static namespace of <code>[eventoperational](#selection.selectionid.eventoperational)</code>  
<a name="selection.selectionid.eventoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/eventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.eventoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).eventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.selectionid.licenseaccessusage"></a>
#### selectionid.licenseaccessusage : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.licenseaccessusage](#selection.selectionid.licenseaccessusage) : <code>object</code>
  * [.table](#selection.selectionid.licenseaccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.licenseaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.licenseaccessusage.table"></a>
##### licenseaccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[licenseaccessusage](#selection.selectionid.licenseaccessusage)</code>  
<a name="selection.selectionid.licenseaccessusage.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/licenseaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.licenseaccessusage.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).licenseaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.selectionid.staticcontentreferencebase"></a>
#### selectionid.staticcontentreferencebase : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.staticcontentreferencebase](#selection.selectionid.staticcontentreferencebase) : <code>object</code>
  * [.table](#selection.selectionid.staticcontentreferencebase.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.staticcontentreferencebase.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.staticcontentreferencebase.table"></a>
##### staticcontentreferencebase.table : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreferencebase](#selection.selectionid.staticcontentreferencebase)</code>  
<a name="selection.selectionid.staticcontentreferencebase.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/staticcontentreferencebase/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.staticcontentreferencebase.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).staticcontentreferencebase.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.selectionid.task"></a>
#### selectionid.task : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.task](#selection.selectionid.task) : <code>object</code>
  * [.table](#selection.selectionid.task.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.task.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.task.table"></a>
##### task.table : <code>object</code>
**Kind**: static namespace of <code>[task](#selection.selectionid.task)</code>  
<a name="selection.selectionid.task.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/task/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.task.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).task.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.selectionid.taskoperational"></a>
#### selectionid.taskoperational : <code>object</code>
**Kind**: static namespace of <code>[selectionid](#selection.selectionid)</code>  

* [.taskoperational](#selection.selectionid.taskoperational) : <code>object</code>
  * [.table](#selection.selectionid.taskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#selection.selectionid.taskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="selection.selectionid.taskoperational.table"></a>
##### taskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[taskoperational](#selection.selectionid.taskoperational)</code>  
<a name="selection.selectionid.taskoperational.table.post"></a>
###### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/{selectionid}/taskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#selection.selectionid.taskoperational.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.selection.selectionid(selectionid).taskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="selection.app"></a>
### selection.app : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.app](#selection.app) : <code>object</code>
  * [.content](#selection.app.content) : <code>object</code>
    * [.post([filter])](#selection.app.content.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.datasegment](#selection.app.datasegment) : <code>object</code>
    * [.post([filter])](#selection.app.datasegment.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.internal](#selection.app.internal) : <code>object</code>
    * [.post([filter])](#selection.app.internal.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.object](#selection.app.object) : <code>object</code>
    * [.post([filter])](#selection.app.object.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.app.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.app.content"></a>
#### app.content : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.app)</code>  
<a name="selection.app.content.post"></a>
##### content.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/app/content?filter={filter}

This method is manual

**Kind**: static method of <code>[content](#selection.app.content)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.app.content.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.app.datasegment"></a>
#### app.datasegment : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.app)</code>  
<a name="selection.app.datasegment.post"></a>
##### datasegment.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/app/datasegment?filter={filter}

This method is generated

**Kind**: static method of <code>[datasegment](#selection.app.datasegment)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.app.datasegment.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.app.internal"></a>
#### app.internal : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.app)</code>  
<a name="selection.app.internal.post"></a>
##### internal.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/app/internal?filter={filter}

This method is generated

**Kind**: static method of <code>[internal](#selection.app.internal)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.app.internal.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.app.object"></a>
#### app.object : <code>object</code>
**Kind**: static namespace of <code>[app](#selection.app)</code>  
<a name="selection.app.object.post"></a>
##### object.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/app/object?filter={filter}

This method is generated

**Kind**: static method of <code>[object](#selection.app.object)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.app.object.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.app.post"></a>
#### app.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/app?filter={filter}

This method is generated

**Kind**: static method of <code>[app](#selection.app)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.app.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.appavailability"></a>
### selection.appavailability : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.appavailability.post"></a>
#### appavailability.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/appavailability?filter={filter}

This method is generated

**Kind**: static method of <code>[appavailability](#selection.appavailability)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.appavailability.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.appcontentquota"></a>
### selection.appcontentquota : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.appcontentquota.post"></a>
#### appcontentquota.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/appcontentquota?filter={filter}

This method is generated

**Kind**: static method of <code>[appcontentquota](#selection.appcontentquota)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.appcontentquota.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.appseedinfo"></a>
### selection.appseedinfo : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.appseedinfo.post"></a>
#### appseedinfo.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/appseedinfo?filter={filter}

This method is generated

**Kind**: static method of <code>[appseedinfo](#selection.appseedinfo)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.appseedinfo.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.appstatus"></a>
### selection.appstatus : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.appstatus.post"></a>
#### appstatus.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/appstatus?filter={filter}

This method is generated

**Kind**: static method of <code>[appstatus](#selection.appstatus)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.appstatus.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.binarydelete"></a>
### selection.binarydelete : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.binarydelete.post"></a>
#### binarydelete.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/binarydelete?filter={filter}

This method is generated

**Kind**: static method of <code>[binarydelete](#selection.binarydelete)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.binarydelete.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.binarydownload"></a>
### selection.binarydownload : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.binarydownload.post"></a>
#### binarydownload.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/binarydownload?filter={filter}

This method is generated

**Kind**: static method of <code>[binarydownload](#selection.binarydownload)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.binarydownload.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.binarysyncruleevaluation"></a>
### selection.binarysyncruleevaluation : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.binarysyncruleevaluation.post"></a>
#### binarysyncruleevaluation.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/binarysyncruleevaluation?filter={filter}

This method is generated

**Kind**: static method of <code>[binarysyncruleevaluation](#selection.binarysyncruleevaluation)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.binarysyncruleevaluation.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.compositeevent"></a>
### selection.compositeevent : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.compositeevent.post"></a>
#### compositeevent.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/compositeevent?filter={filter}

This method is generated

**Kind**: static method of <code>[compositeevent](#selection.compositeevent)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.compositeevent.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.compositeeventoperational"></a>
### selection.compositeeventoperational : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.compositeeventoperational.post"></a>
#### compositeeventoperational.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/compositeeventoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[compositeeventoperational](#selection.compositeeventoperational)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.compositeeventoperational.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.compositeeventruleoperational"></a>
### selection.compositeeventruleoperational : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.compositeeventruleoperational.post"></a>
#### compositeeventruleoperational.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/compositeeventruleoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[compositeeventruleoperational](#selection.compositeeventruleoperational)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.compositeeventruleoperational.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.contentlibrary"></a>
### selection.contentlibrary : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.contentlibrary.post"></a>
#### contentlibrary.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/contentlibrary?filter={filter}

This method is generated

**Kind**: static method of <code>[contentlibrary](#selection.contentlibrary)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.contentlibrary.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.count"></a>
### selection.count : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#selection.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="selection.custompropertydefinition"></a>
### selection.custompropertydefinition : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.custompropertydefinition.post"></a>
#### custompropertydefinition.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/custompropertydefinition?filter={filter}

This method is generated

**Kind**: static method of <code>[custompropertydefinition](#selection.custompropertydefinition)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.custompropertydefinition.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.dataconnection"></a>
### selection.dataconnection : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.dataconnection.post"></a>
#### dataconnection.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/dataconnection?filter={filter}

This method is generated

**Kind**: static method of <code>[dataconnection](#selection.dataconnection)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.dataconnection.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.engineservice"></a>
### selection.engineservice : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.engineservice](#selection.engineservice) : <code>object</code>
  * [.template](#selection.engineservice.template) : <code>object</code>
    * [.post([filter])](#selection.engineservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.engineservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.engineservice.template"></a>
#### engineservice.template : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#selection.engineservice)</code>  
<a name="selection.engineservice.template.post"></a>
##### template.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/engineservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.engineservice.template)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.engineservice.template.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.engineservice.post"></a>
#### engineservice.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/engineservice?filter={filter}

This method is generated

**Kind**: static method of <code>[engineservice](#selection.engineservice)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.engineservice.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.executionresult"></a>
### selection.executionresult : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.executionresult](#selection.executionresult) : <code>object</code>
  * [.detail](#selection.executionresult.detail) : <code>object</code>
    * [.post([filter])](#selection.executionresult.detail.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.executionresult.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.executionresult.detail"></a>
#### executionresult.detail : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#selection.executionresult)</code>  
<a name="selection.executionresult.detail.post"></a>
##### detail.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/executionresult/detail?filter={filter}

This method is generated

**Kind**: static method of <code>[detail](#selection.executionresult.detail)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.executionresult.detail.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.executionresult.post"></a>
#### executionresult.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/executionresult?filter={filter}

This method is generated

**Kind**: static method of <code>[executionresult](#selection.executionresult)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.executionresult.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.executionsession"></a>
### selection.executionsession : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.executionsession.post"></a>
#### executionsession.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/executionsession?filter={filter}

This method is generated

**Kind**: static method of <code>[executionsession](#selection.executionsession)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.executionsession.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.extension"></a>
### selection.extension : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.extension.post"></a>
#### extension.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/extension?filter={filter}

This method is generated

**Kind**: static method of <code>[extension](#selection.extension)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.extension.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.externalchangeinfo"></a>
### selection.externalchangeinfo : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.externalchangeinfo.post"></a>
#### externalchangeinfo.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/externalchangeinfo?filter={filter}

This method is generated

**Kind**: static method of <code>[externalchangeinfo](#selection.externalchangeinfo)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.externalchangeinfo.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.externalprogramtask"></a>
### selection.externalprogramtask : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.externalprogramtask.post"></a>
#### externalprogramtask.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/externalprogramtask?filter={filter}

This method is generated

**Kind**: static method of <code>[externalprogramtask](#selection.externalprogramtask)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.externalprogramtask.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.externalprogramtaskoperational"></a>
### selection.externalprogramtaskoperational : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.externalprogramtaskoperational.post"></a>
#### externalprogramtaskoperational.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/externalprogramtaskoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[externalprogramtaskoperational](#selection.externalprogramtaskoperational)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.externalprogramtaskoperational.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.filereference"></a>
### selection.filereference : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.filereference.post"></a>
#### filereference.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/filereference?filter={filter}

This method is generated

**Kind**: static method of <code>[filereference](#selection.filereference)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.filereference.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.full"></a>
### selection.full : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#selection.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.full.get(filter, orderby, appendprivileges).then(function(Array.<Selection>) {
	console.log(Array.<Selection>)
})
```
<a name="selection.license"></a>
### selection.license : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.license](#selection.license) : <code>object</code>
  * [.loginaccesstype](#selection.license.loginaccesstype) : <code>object</code>
    * [.post([filter])](#selection.license.loginaccesstype.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.loginaccessusage](#selection.license.loginaccessusage) : <code>object</code>
    * [.post([filter])](#selection.license.loginaccessusage.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.useraccessgroup](#selection.license.useraccessgroup) : <code>object</code>
    * [.post([filter])](#selection.license.useraccessgroup.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.useraccesstype](#selection.license.useraccesstype) : <code>object</code>
    * [.post([filter])](#selection.license.useraccesstype.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.useraccessusage](#selection.license.useraccessusage) : <code>object</code>
    * [.post([filter])](#selection.license.useraccessusage.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.license.loginaccesstype"></a>
#### license.loginaccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.license)</code>  
<a name="selection.license.loginaccesstype.post"></a>
##### loginaccesstype.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/license/loginaccesstype?filter={filter}

This method is generated

**Kind**: static method of <code>[loginaccesstype](#selection.license.loginaccesstype)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.license.loginaccesstype.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.license.loginaccessusage"></a>
#### license.loginaccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.license)</code>  
<a name="selection.license.loginaccessusage.post"></a>
##### loginaccessusage.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/license/loginaccessusage?filter={filter}

This method is generated

**Kind**: static method of <code>[loginaccessusage](#selection.license.loginaccessusage)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.license.loginaccessusage.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.license.useraccessgroup"></a>
#### license.useraccessgroup : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.license)</code>  
<a name="selection.license.useraccessgroup.post"></a>
##### useraccessgroup.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/license/useraccessgroup?filter={filter}

This method is generated

**Kind**: static method of <code>[useraccessgroup](#selection.license.useraccessgroup)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.license.useraccessgroup.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.license.useraccesstype"></a>
#### license.useraccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.license)</code>  
<a name="selection.license.useraccesstype.post"></a>
##### useraccesstype.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/license/useraccesstype?filter={filter}

This method is generated

**Kind**: static method of <code>[useraccesstype](#selection.license.useraccesstype)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.license.useraccesstype.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.license.useraccessusage"></a>
#### license.useraccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#selection.license)</code>  
<a name="selection.license.useraccessusage.post"></a>
##### useraccessusage.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/license/useraccessusage?filter={filter}

This method is generated

**Kind**: static method of <code>[useraccessusage](#selection.license.useraccessusage)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.license.useraccessusage.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.many"></a>
### selection.many : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#selection.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;Selection&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.many.post(postParams, appendprivileges).then(function(Array.<Selection>) {
	console.log(Array.<Selection>)
})
```
<a name="selection.mimetype"></a>
### selection.mimetype : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.mimetype.post"></a>
#### mimetype.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/mimetype?filter={filter}

This method is generated

**Kind**: static method of <code>[mimetype](#selection.mimetype)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.mimetype.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.previewcreateprivilege"></a>
### selection.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#selection.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Selection</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.selection.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="selection.printingservice"></a>
### selection.printingservice : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.printingservice](#selection.printingservice) : <code>object</code>
  * [.template](#selection.printingservice.template) : <code>object</code>
    * [.post([filter])](#selection.printingservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.printingservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.printingservice.template"></a>
#### printingservice.template : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#selection.printingservice)</code>  
<a name="selection.printingservice.template.post"></a>
##### template.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/printingservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.printingservice.template)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.printingservice.template.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.printingservice.post"></a>
#### printingservice.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/printingservice?filter={filter}

This method is generated

**Kind**: static method of <code>[printingservice](#selection.printingservice)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.printingservice.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.proxyservice"></a>
### selection.proxyservice : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.proxyservice](#selection.proxyservice) : <code>object</code>
  * [.template](#selection.proxyservice.template) : <code>object</code>
    * [.post([filter])](#selection.proxyservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.proxyservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.proxyservice.template"></a>
#### proxyservice.template : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#selection.proxyservice)</code>  
<a name="selection.proxyservice.template.post"></a>
##### template.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/proxyservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.proxyservice.template)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.proxyservice.template.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.proxyservice.post"></a>
#### proxyservice.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/proxyservice?filter={filter}

This method is generated

**Kind**: static method of <code>[proxyservice](#selection.proxyservice)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.proxyservice.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.reloadtask"></a>
### selection.reloadtask : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.reloadtask.post"></a>
#### reloadtask.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/reloadtask?filter={filter}

This method is generated

**Kind**: static method of <code>[reloadtask](#selection.reloadtask)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.reloadtask.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.reloadtaskoperational"></a>
### selection.reloadtaskoperational : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.reloadtaskoperational.post"></a>
#### reloadtaskoperational.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/reloadtaskoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[reloadtaskoperational](#selection.reloadtaskoperational)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.reloadtaskoperational.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.repositoryservice"></a>
### selection.repositoryservice : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.repositoryservice](#selection.repositoryservice) : <code>object</code>
  * [.template](#selection.repositoryservice.template) : <code>object</code>
    * [.post([filter])](#selection.repositoryservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.repositoryservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.repositoryservice.template"></a>
#### repositoryservice.template : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#selection.repositoryservice)</code>  
<a name="selection.repositoryservice.template.post"></a>
##### template.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/repositoryservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.repositoryservice.template)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.repositoryservice.template.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.repositoryservice.post"></a>
#### repositoryservice.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/repositoryservice?filter={filter}

This method is generated

**Kind**: static method of <code>[repositoryservice](#selection.repositoryservice)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.repositoryservice.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.schedulerservice"></a>
### selection.schedulerservice : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.schedulerservice](#selection.schedulerservice) : <code>object</code>
  * [.template](#selection.schedulerservice.template) : <code>object</code>
    * [.post([filter])](#selection.schedulerservice.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.schedulerservice.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.schedulerservice.template"></a>
#### schedulerservice.template : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#selection.schedulerservice)</code>  
<a name="selection.schedulerservice.template.post"></a>
##### template.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/schedulerservice/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.schedulerservice.template)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.schedulerservice.template.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.schedulerservice.post"></a>
#### schedulerservice.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/schedulerservice?filter={filter}

This method is generated

**Kind**: static method of <code>[schedulerservice](#selection.schedulerservice)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.schedulerservice.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.schemaevent"></a>
### selection.schemaevent : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.schemaevent.post"></a>
#### schemaevent.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/schemaevent?filter={filter}

This method is generated

**Kind**: static method of <code>[schemaevent](#selection.schemaevent)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.schemaevent.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.schemaeventoperational"></a>
### selection.schemaeventoperational : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.schemaeventoperational.post"></a>
#### schemaeventoperational.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/schemaeventoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[schemaeventoperational](#selection.schemaeventoperational)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.schemaeventoperational.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.servernodeconfiguration"></a>
### selection.servernodeconfiguration : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.servernodeconfiguration.post"></a>
#### servernodeconfiguration.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/servernodeconfiguration?filter={filter}

This method is generated

**Kind**: static method of <code>[servernodeconfiguration](#selection.servernodeconfiguration)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.servernodeconfiguration.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.servicestatus"></a>
### selection.servicestatus : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.servicestatus.post"></a>
#### servicestatus.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/servicestatus?filter={filter}

This method is generated

**Kind**: static method of <code>[servicestatus](#selection.servicestatus)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.servicestatus.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.staticcontentreference"></a>
### selection.staticcontentreference : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.staticcontentreference.post"></a>
#### staticcontentreference.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/staticcontentreference?filter={filter}

This method is generated

**Kind**: static method of <code>[staticcontentreference](#selection.staticcontentreference)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.staticcontentreference.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.stream"></a>
### selection.stream : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.stream.post"></a>
#### stream.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/stream?filter={filter}

This method is generated

**Kind**: static method of <code>[stream](#selection.stream)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.stream.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.syncsession"></a>
### selection.syncsession : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.syncsession.post"></a>
#### syncsession.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/syncsession?filter={filter}

This method is generated

**Kind**: static method of <code>[syncsession](#selection.syncsession)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.syncsession.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.systemrule"></a>
### selection.systemrule : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.systemrule.post"></a>
#### systemrule.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/systemrule?filter={filter}

This method is generated

**Kind**: static method of <code>[systemrule](#selection.systemrule)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.systemrule.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.tag"></a>
### selection.tag : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.tag.post"></a>
#### tag.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/tag?filter={filter}

This method is generated

**Kind**: static method of <code>[tag](#selection.tag)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.tag.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.tempcontent"></a>
### selection.tempcontent : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.tempcontent.post"></a>
#### tempcontent.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/tempcontent?filter={filter}

This method is generated

**Kind**: static method of <code>[tempcontent](#selection.tempcontent)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.tempcontent.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.user"></a>
### selection.user : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.user](#selection.user) : <code>object</code>
  * [.followingapp](#selection.user.followingapp) : <code>object</code>
    * [.post([filter])](#selection.user.followingapp.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.recentapp](#selection.user.recentapp) : <code>object</code>
    * [.post([filter])](#selection.user.recentapp.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.user.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.user.followingapp"></a>
#### user.followingapp : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.user)</code>  
<a name="selection.user.followingapp.post"></a>
##### followingapp.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/user/followingapp?filter={filter}

This method is generated

**Kind**: static method of <code>[followingapp](#selection.user.followingapp)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.user.followingapp.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.user.recentapp"></a>
#### user.recentapp : <code>object</code>
**Kind**: static namespace of <code>[user](#selection.user)</code>  
<a name="selection.user.recentapp.post"></a>
##### recentapp.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/user/recentapp?filter={filter}

This method is generated

**Kind**: static method of <code>[recentapp](#selection.user.recentapp)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.user.recentapp.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.user.post"></a>
#### user.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/user?filter={filter}

This method is generated

**Kind**: static method of <code>[user](#selection.user)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.user.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.userdirectory"></a>
### selection.userdirectory : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  

* [.userdirectory](#selection.userdirectory) : <code>object</code>
  * [.template](#selection.userdirectory.template) : <code>object</code>
    * [.post([filter])](#selection.userdirectory.template.post) ⇒ <code>Promise.&lt;Selection&gt;</code>
  * [.post([filter])](#selection.userdirectory.post) ⇒ <code>Promise.&lt;Selection&gt;</code>

<a name="selection.userdirectory.template"></a>
#### userdirectory.template : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#selection.userdirectory)</code>  
<a name="selection.userdirectory.template.post"></a>
##### template.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/userdirectory/template?filter={filter}

This method is generated

**Kind**: static method of <code>[template](#selection.userdirectory.template)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.userdirectory.template.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.userdirectory.post"></a>
#### userdirectory.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/userdirectory?filter={filter}

This method is generated

**Kind**: static method of <code>[userdirectory](#selection.userdirectory)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.userdirectory.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.usersynctask"></a>
### selection.usersynctask : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.usersynctask.post"></a>
#### usersynctask.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/usersynctask?filter={filter}

This method is generated

**Kind**: static method of <code>[usersynctask](#selection.usersynctask)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.usersynctask.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.usersynctaskoperational"></a>
### selection.usersynctaskoperational : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.usersynctaskoperational.post"></a>
#### usersynctaskoperational.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/usersynctaskoperational?filter={filter}

This method is generated

**Kind**: static method of <code>[usersynctaskoperational](#selection.usersynctaskoperational)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.usersynctaskoperational.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.virtualproxyconfig"></a>
### selection.virtualproxyconfig : <code>object</code>
**Kind**: static namespace of <code>[selection](#selection)</code>  
<a name="selection.virtualproxyconfig.post"></a>
#### virtualproxyconfig.post([filter]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection/virtualproxyconfig?filter={filter}

This method is generated

**Kind**: static method of <code>[virtualproxyconfig](#selection.virtualproxyconfig)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.selection.virtualproxyconfig.post(filter).then(function(Selection) {
	console.log(Selection)
})
```
<a name="selection.get"></a>
### selection.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[selection](#selection)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Selection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.get(filter, orderby, appendprivileges).then(function(Array.<Selection>) {
	console.log(Array.<Selection>)
})
```
<a name="selection.post"></a>
### selection.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Selection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/selection?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[selection](#selection)</code>  
**Returns**: <code>Promise.&lt;Selection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Selection</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.selection.post(postParams, appendprivileges).then(function(Selection) {
	console.log(Selection)
})
```
