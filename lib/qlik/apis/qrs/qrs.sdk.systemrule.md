<a name="systemrule"></a>
## systemrule : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [systemrule](#systemrule) : <code>object</code>
  * [.category](#systemrule.category) : <code>object</code>
    * [.associatedrules](#systemrule.category.associatedrules) : <code>object</code>
      * [.get([resourcetype], [resourcefilter], [appendprivileges])](#systemrule.category.associatedrules.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
  * [.id](#systemrule.id) : <code>object</code>
    * [.delete()](#systemrule.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#systemrule.id.get) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
    * [.put(postParams, [appendprivileges])](#systemrule.id.put) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
  * [.count](#systemrule.count) : <code>object</code>
    * [.get([filter])](#systemrule.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#systemrule.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#systemrule.full.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
  * [.license](#systemrule.license) : <code>object</code>
    * [.audit](#systemrule.license.audit) : <code>object</code>
      * [.preview](#systemrule.license.audit.preview) : <code>object</code>
        * [.post(postParams)](#systemrule.license.audit.preview.post) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
      * [.post(postParams)](#systemrule.license.audit.post) ⇒ <code>Promise.&lt;AuditResult&gt;</code>
    * [.useractions](#systemrule.license.useractions) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#systemrule.license.useractions.post) ⇒ <code>Promise.&lt;Array.&lt;UserLicenseActions&gt;&gt;</code>
  * [.many](#systemrule.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#systemrule.many.post) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
  * [.previewcreateprivilege](#systemrule.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#systemrule.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.security](#systemrule.security) : <code>object</code>
    * [.accessibleattributes](#systemrule.security.accessibleattributes) : <code>object</code>
      * [.get([resourcetype])](#systemrule.security.accessibleattributes.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.attributevalues](#systemrule.security.attributevalues) : <code>object</code>
      * [.get([resourcetype], [attribute], [filter], [limit], [selection])](#systemrule.security.attributevalues.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.audit](#systemrule.security.audit) : <code>object</code>
      * [.accessibleobjects](#systemrule.security.audit.accessibleobjects) : <code>object</code>
        * [.post(postParams)](#systemrule.security.audit.accessibleobjects.post) ⇒ <code>Promise.&lt;Array.&lt;IRepositoryObject&gt;&gt;</code>
      * [.countresources](#systemrule.security.audit.countresources) : <code>object</code>
        * [.post(postParams)](#systemrule.security.audit.countresources.post) ⇒ <code>Promise.&lt;int&gt;</code>
      * [.export](#systemrule.security.audit.export) : <code>object</code>
        * [.get()](#systemrule.security.audit.export.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
      * [.preview](#systemrule.security.audit.preview) : <code>object</code>
        * [.post(postParams)](#systemrule.security.audit.preview.post) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
      * [.post(postParams)](#systemrule.security.audit.post) ⇒ <code>Promise.&lt;AuditResult&gt;</code>
    * [.evaluatetransientresources](#systemrule.security.evaluatetransientresources) : <code>object</code>
      * [.post(postParams)](#systemrule.security.evaluatetransientresources.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.parsetree](#systemrule.security.parsetree) : <code>object</code>
      * [.get([rule])](#systemrule.security.parsetree.get) ⇒ <code>Promise.&lt;BacktrackedRule&gt;</code>
    * [.referenceduserroles](#systemrule.security.referenceduserroles) : <code>object</code>
      * [.get()](#systemrule.security.referenceduserroles.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.useractions](#systemrule.security.useractions) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#systemrule.security.useractions.post) ⇒ <code>Promise.&lt;Array.&lt;UserActions&gt;&gt;</code>
  * [.sync](#systemrule.sync) : <code>object</code>
    * [.audit](#systemrule.sync.audit) : <code>object</code>
      * [.preview](#systemrule.sync.audit.preview) : <code>object</code>
        * [.post(postParams)](#systemrule.sync.audit.preview.post) ⇒ <code>Promise.&lt;SyncPreviewResult&gt;</code>
      * [.post(postParams)](#systemrule.sync.audit.post) ⇒ <code>Promise.&lt;SyncAuditResult&gt;</code>
    * [.linkednodes](#systemrule.sync.linkednodes) : <code>object</code>
      * [.get([resourcetype], [resourceid])](#systemrule.sync.linkednodes.get) ⇒ <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code>
    * [.linkedobjects](#systemrule.sync.linkedobjects) : <code>object</code>
      * [.get([servernodeconfiguration], [resourcetype])](#systemrule.sync.linkedobjects.get) ⇒ <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code>
  * [.table](#systemrule.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#systemrule.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#systemrule.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#systemrule.post) ⇒ <code>Promise.&lt;SystemRule&gt;</code>

<a name="systemrule.category"></a>
### systemrule.category : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  

* [.category](#systemrule.category) : <code>object</code>
  * [.associatedrules](#systemrule.category.associatedrules) : <code>object</code>
    * [.get([resourcetype], [resourcefilter], [appendprivileges])](#systemrule.category.associatedrules.get) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>

<a name="systemrule.category.associatedrules"></a>
#### category.associatedrules : <code>object</code>
**Kind**: static namespace of <code>[category](#systemrule.category)</code>  
<a name="systemrule.category.associatedrules.get"></a>
##### associatedrules.get([resourcetype], [resourcefilter], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/{category}/associatedrules?resourcetype={resourcetype}&resourcefilter={resourcefilter}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[associatedrules](#systemrule.category.associatedrules)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [resourcetype] | <code>string</code> | the resourcetype parameter |
| [resourcefilter] | <code>string</code> | the resourcefilter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.category(category).associatedrules.get(resourcetype, resourcefilter, appendprivileges).then(function(Array.<SystemRule>) {
    console.log(Array.<SystemRule>)
})
```
<a name="systemrule.id"></a>
### systemrule.id : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  

* [.id](#systemrule.id) : <code>object</code>
  * [.delete()](#systemrule.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#systemrule.id.get) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
  * [.put(postParams, [appendprivileges])](#systemrule.id.put) ⇒ <code>Promise.&lt;SystemRule&gt;</code>

<a name="systemrule.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/{id}

This method is generated

**Kind**: static method of <code>[id](#systemrule.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.systemrule.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="systemrule.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#systemrule.id)</code>  
**Returns**: <code>Promise.&lt;SystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.id(id).get(appendprivileges).then(function(SystemRule) {
    console.log(SystemRule)
})
```
<a name="systemrule.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#systemrule.id)</code>  
**Returns**: <code>Promise.&lt;SystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SystemRule</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.id(id).put(postParams, appendprivileges).then(function(SystemRule) {
    console.log(SystemRule)
})
```
<a name="systemrule.count"></a>
### systemrule.count : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  
<a name="systemrule.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#systemrule.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.systemrule.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="systemrule.full"></a>
### systemrule.full : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  
<a name="systemrule.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#systemrule.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.full.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
    console.log(Array.<SystemRule>)
})
```
<a name="systemrule.license"></a>
### systemrule.license : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  

* [.license](#systemrule.license) : <code>object</code>
  * [.audit](#systemrule.license.audit) : <code>object</code>
    * [.preview](#systemrule.license.audit.preview) : <code>object</code>
      * [.post(postParams)](#systemrule.license.audit.preview.post) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
    * [.post(postParams)](#systemrule.license.audit.post) ⇒ <code>Promise.&lt;AuditResult&gt;</code>
  * [.useractions](#systemrule.license.useractions) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#systemrule.license.useractions.post) ⇒ <code>Promise.&lt;Array.&lt;UserLicenseActions&gt;&gt;</code>

<a name="systemrule.license.audit"></a>
#### license.audit : <code>object</code>
**Kind**: static namespace of <code>[license](#systemrule.license)</code>  

* [.audit](#systemrule.license.audit) : <code>object</code>
  * [.preview](#systemrule.license.audit.preview) : <code>object</code>
    * [.post(postParams)](#systemrule.license.audit.preview.post) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
  * [.post(postParams)](#systemrule.license.audit.post) ⇒ <code>Promise.&lt;AuditResult&gt;</code>

<a name="systemrule.license.audit.preview"></a>
##### audit.preview : <code>object</code>
**Kind**: static namespace of <code>[audit](#systemrule.license.audit)</code>  
<a name="systemrule.license.audit.preview.post"></a>
###### preview.post(postParams) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/license/audit/preview

This method is manual

**Kind**: static method of <code>[preview](#systemrule.license.audit.preview)</code>  
**Returns**: <code>Promise.&lt;AuditPreviewResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AuditPreviewParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.license.audit.preview.post(postParams).then(function(AuditPreviewResult) {
    console.log(AuditPreviewResult)
})
```
<a name="systemrule.license.audit.post"></a>
##### audit.post(postParams) ⇒ <code>Promise.&lt;AuditResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/license/audit

This method is manual

**Kind**: static method of <code>[audit](#systemrule.license.audit)</code>  
**Returns**: <code>Promise.&lt;AuditResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AuditParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.license.audit.post(postParams).then(function(AuditResult) {
    console.log(AuditResult)
})
```
<a name="systemrule.license.useractions"></a>
#### license.useractions : <code>object</code>
**Kind**: static namespace of <code>[license](#systemrule.license)</code>  
<a name="systemrule.license.useractions.post"></a>
##### useractions.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserLicenseActions&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/license/useractions?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[useractions](#systemrule.license.useractions)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserLicenseActions&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserInput</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.license.useractions.post(postParams, appendprivileges).then(function(Array.<UserLicenseActions>) {
    console.log(Array.<UserLicenseActions>)
})
```
<a name="systemrule.many"></a>
### systemrule.many : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  
<a name="systemrule.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#systemrule.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;SystemRule&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.many.post(postParams, appendprivileges).then(function(Array.<SystemRule>) {
    console.log(Array.<SystemRule>)
})
```
<a name="systemrule.previewcreateprivilege"></a>
### systemrule.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  
<a name="systemrule.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#systemrule.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SystemRule</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="systemrule.security"></a>
### systemrule.security : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  

* [.security](#systemrule.security) : <code>object</code>
  * [.accessibleattributes](#systemrule.security.accessibleattributes) : <code>object</code>
    * [.get([resourcetype])](#systemrule.security.accessibleattributes.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
  * [.attributevalues](#systemrule.security.attributevalues) : <code>object</code>
    * [.get([resourcetype], [attribute], [filter], [limit], [selection])](#systemrule.security.attributevalues.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
  * [.audit](#systemrule.security.audit) : <code>object</code>
    * [.accessibleobjects](#systemrule.security.audit.accessibleobjects) : <code>object</code>
      * [.post(postParams)](#systemrule.security.audit.accessibleobjects.post) ⇒ <code>Promise.&lt;Array.&lt;IRepositoryObject&gt;&gt;</code>
    * [.countresources](#systemrule.security.audit.countresources) : <code>object</code>
      * [.post(postParams)](#systemrule.security.audit.countresources.post) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.export](#systemrule.security.audit.export) : <code>object</code>
      * [.get()](#systemrule.security.audit.export.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.preview](#systemrule.security.audit.preview) : <code>object</code>
      * [.post(postParams)](#systemrule.security.audit.preview.post) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
    * [.post(postParams)](#systemrule.security.audit.post) ⇒ <code>Promise.&lt;AuditResult&gt;</code>
  * [.evaluatetransientresources](#systemrule.security.evaluatetransientresources) : <code>object</code>
    * [.post(postParams)](#systemrule.security.evaluatetransientresources.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.parsetree](#systemrule.security.parsetree) : <code>object</code>
    * [.get([rule])](#systemrule.security.parsetree.get) ⇒ <code>Promise.&lt;BacktrackedRule&gt;</code>
  * [.referenceduserroles](#systemrule.security.referenceduserroles) : <code>object</code>
    * [.get()](#systemrule.security.referenceduserroles.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
  * [.useractions](#systemrule.security.useractions) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#systemrule.security.useractions.post) ⇒ <code>Promise.&lt;Array.&lt;UserActions&gt;&gt;</code>

<a name="systemrule.security.accessibleattributes"></a>
#### security.accessibleattributes : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  
<a name="systemrule.security.accessibleattributes.get"></a>
##### accessibleattributes.get([resourcetype]) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/accessibleattributes?resourcetype={resourcetype}

This method is manual

**Kind**: static method of <code>[accessibleattributes](#systemrule.security.accessibleattributes)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [resourcetype] | <code>string</code> | the resourcetype parameter |

**Example**  
```javascript
qrsApi.systemrule.security.accessibleattributes.get(resourcetype).then(function(Array.<String>) {
    console.log(Array.<String>)
})
```
<a name="systemrule.security.attributevalues"></a>
#### security.attributevalues : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  
<a name="systemrule.security.attributevalues.get"></a>
##### attributevalues.get([resourcetype], [attribute], [filter], [limit], [selection]) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/attributevalues?resourcetype={resourcetype}&attribute={attribute}&filter={filter}&limit={limit}&selection={selection}

This method is manual

**Kind**: static method of <code>[attributevalues](#systemrule.security.attributevalues)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [resourcetype] | <code>string</code> | the resourcetype parameter |
| [attribute] | <code>string</code> | the attribute parameter |
| [filter] | <code>string</code> | the filter parameter |
| [limit] | <code>string</code> | the limit parameter |
| [selection] | <code>string</code> | the selection parameter |

**Example**  
```javascript
qrsApi.systemrule.security.attributevalues.get(resourcetype, attribute, filter, limit, selection).then(function(Array.<String>) {
    console.log(Array.<String>)
})
```
<a name="systemrule.security.audit"></a>
#### security.audit : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  

* [.audit](#systemrule.security.audit) : <code>object</code>
  * [.accessibleobjects](#systemrule.security.audit.accessibleobjects) : <code>object</code>
    * [.post(postParams)](#systemrule.security.audit.accessibleobjects.post) ⇒ <code>Promise.&lt;Array.&lt;IRepositoryObject&gt;&gt;</code>
  * [.countresources](#systemrule.security.audit.countresources) : <code>object</code>
    * [.post(postParams)](#systemrule.security.audit.countresources.post) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.export](#systemrule.security.audit.export) : <code>object</code>
    * [.get()](#systemrule.security.audit.export.get) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
  * [.preview](#systemrule.security.audit.preview) : <code>object</code>
    * [.post(postParams)](#systemrule.security.audit.preview.post) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
  * [.post(postParams)](#systemrule.security.audit.post) ⇒ <code>Promise.&lt;AuditResult&gt;</code>

<a name="systemrule.security.audit.accessibleobjects"></a>
##### audit.accessibleobjects : <code>object</code>
**Kind**: static namespace of <code>[audit](#systemrule.security.audit)</code>  
<a name="systemrule.security.audit.accessibleobjects.post"></a>
###### accessibleobjects.post(postParams) ⇒ <code>Promise.&lt;Array.&lt;IRepositoryObject&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/audit/accessibleobjects

This method is manual

**Kind**: static method of <code>[accessibleobjects](#systemrule.security.audit.accessibleobjects)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IRepositoryObject&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AccessibleObjectParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.security.audit.accessibleobjects.post(postParams).then(function(Array.<IRepositoryObject>) {
    console.log(Array.<IRepositoryObject>)
})
```
<a name="systemrule.security.audit.countresources"></a>
##### audit.countresources : <code>object</code>
**Kind**: static namespace of <code>[audit](#systemrule.security.audit)</code>  
<a name="systemrule.security.audit.countresources.post"></a>
###### countresources.post(postParams) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/audit/countresources

This method is manual

**Kind**: static method of <code>[countresources](#systemrule.security.audit.countresources)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AuditCountParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.security.audit.countresources.post(postParams).then(function(int) {
    console.log(int)
})
```
<a name="systemrule.security.audit.export"></a>
##### audit.export : <code>object</code>
**Kind**: static namespace of <code>[audit](#systemrule.security.audit)</code>  
<a name="systemrule.security.audit.export.get"></a>
###### export.get() ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/audit/export

This method is manual

**Kind**: static method of <code>[export](#systemrule.security.audit.export)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.systemrule.security.audit.export.get().then(function(Array.<String>) {
    console.log(Array.<String>)
})
```
<a name="systemrule.security.audit.preview"></a>
##### audit.preview : <code>object</code>
**Kind**: static namespace of <code>[audit](#systemrule.security.audit)</code>  
<a name="systemrule.security.audit.preview.post"></a>
###### preview.post(postParams) ⇒ <code>Promise.&lt;AuditPreviewResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/audit/preview

This method is manual

**Kind**: static method of <code>[preview](#systemrule.security.audit.preview)</code>  
**Returns**: <code>Promise.&lt;AuditPreviewResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AuditPreviewParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.security.audit.preview.post(postParams).then(function(AuditPreviewResult) {
    console.log(AuditPreviewResult)
})
```
<a name="systemrule.security.audit.post"></a>
##### audit.post(postParams) ⇒ <code>Promise.&lt;AuditResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/audit

This method is manual

**Kind**: static method of <code>[audit](#systemrule.security.audit)</code>  
**Returns**: <code>Promise.&lt;AuditResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AuditParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.security.audit.post(postParams).then(function(AuditResult) {
    console.log(AuditResult)
})
```
<a name="systemrule.security.evaluatetransientresources"></a>
#### security.evaluatetransientresources : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  
<a name="systemrule.security.evaluatetransientresources.post"></a>
##### evaluatetransientresources.post(postParams) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/evaluatetransientresources

This method is manual

**Kind**: static method of <code>[evaluatetransientresources](#systemrule.security.evaluatetransientresources)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Array.&lt;String&gt;</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.security.evaluatetransientresources.post(postParams).then(function(Object) {
    console.log(Object)
})
```
<a name="systemrule.security.parsetree"></a>
#### security.parsetree : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  
<a name="systemrule.security.parsetree.get"></a>
##### parsetree.get([rule]) ⇒ <code>Promise.&lt;BacktrackedRule&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/parsetree?rule={rule}

This method is manual

**Kind**: static method of <code>[parsetree](#systemrule.security.parsetree)</code>  
**Returns**: <code>Promise.&lt;BacktrackedRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [rule] | <code>string</code> | the rule parameter |

**Example**  
```javascript
qrsApi.systemrule.security.parsetree.get(rule).then(function(BacktrackedRule) {
    console.log(BacktrackedRule)
})
```
<a name="systemrule.security.referenceduserroles"></a>
#### security.referenceduserroles : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  
<a name="systemrule.security.referenceduserroles.get"></a>
##### referenceduserroles.get() ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/referenceduserroles

This method is manual

**Kind**: static method of <code>[referenceduserroles](#systemrule.security.referenceduserroles)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.systemrule.security.referenceduserroles.get().then(function(Array.<String>) {
    console.log(Array.<String>)
})
```
<a name="systemrule.security.useractions"></a>
#### security.useractions : <code>object</code>
**Kind**: static namespace of <code>[security](#systemrule.security)</code>  
<a name="systemrule.security.useractions.post"></a>
##### useractions.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserActions&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/security/useractions?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[useractions](#systemrule.security.useractions)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserActions&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserInput</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.security.useractions.post(postParams, appendprivileges).then(function(Array.<UserActions>) {
    console.log(Array.<UserActions>)
})
```
<a name="systemrule.sync"></a>
### systemrule.sync : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  

* [.sync](#systemrule.sync) : <code>object</code>
  * [.audit](#systemrule.sync.audit) : <code>object</code>
    * [.preview](#systemrule.sync.audit.preview) : <code>object</code>
      * [.post(postParams)](#systemrule.sync.audit.preview.post) ⇒ <code>Promise.&lt;SyncPreviewResult&gt;</code>
    * [.post(postParams)](#systemrule.sync.audit.post) ⇒ <code>Promise.&lt;SyncAuditResult&gt;</code>
  * [.linkednodes](#systemrule.sync.linkednodes) : <code>object</code>
    * [.get([resourcetype], [resourceid])](#systemrule.sync.linkednodes.get) ⇒ <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code>
  * [.linkedobjects](#systemrule.sync.linkedobjects) : <code>object</code>
    * [.get([servernodeconfiguration], [resourcetype])](#systemrule.sync.linkedobjects.get) ⇒ <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code>

<a name="systemrule.sync.audit"></a>
#### sync.audit : <code>object</code>
**Kind**: static namespace of <code>[sync](#systemrule.sync)</code>  

* [.audit](#systemrule.sync.audit) : <code>object</code>
  * [.preview](#systemrule.sync.audit.preview) : <code>object</code>
    * [.post(postParams)](#systemrule.sync.audit.preview.post) ⇒ <code>Promise.&lt;SyncPreviewResult&gt;</code>
  * [.post(postParams)](#systemrule.sync.audit.post) ⇒ <code>Promise.&lt;SyncAuditResult&gt;</code>

<a name="systemrule.sync.audit.preview"></a>
##### audit.preview : <code>object</code>
**Kind**: static namespace of <code>[audit](#systemrule.sync.audit)</code>  
<a name="systemrule.sync.audit.preview.post"></a>
###### preview.post(postParams) ⇒ <code>Promise.&lt;SyncPreviewResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/sync/audit/preview

This method is manual

**Kind**: static method of <code>[preview](#systemrule.sync.audit.preview)</code>  
**Returns**: <code>Promise.&lt;SyncPreviewResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyncAuditPreviewParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.sync.audit.preview.post(postParams).then(function(SyncPreviewResult) {
    console.log(SyncPreviewResult)
})
```
<a name="systemrule.sync.audit.post"></a>
##### audit.post(postParams) ⇒ <code>Promise.&lt;SyncAuditResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/sync/audit

This method is manual

**Kind**: static method of <code>[audit](#systemrule.sync.audit)</code>  
**Returns**: <code>Promise.&lt;SyncAuditResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SyncAuditParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.systemrule.sync.audit.post(postParams).then(function(SyncAuditResult) {
    console.log(SyncAuditResult)
})
```
<a name="systemrule.sync.linkednodes"></a>
#### sync.linkednodes : <code>object</code>
**Kind**: static namespace of <code>[sync](#systemrule.sync)</code>  
<a name="systemrule.sync.linkednodes.get"></a>
##### linkednodes.get([resourcetype], [resourceid]) ⇒ <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/sync/linkednodes?resourcetype={resourcetype}&resourceid={resourceid}

This method is manual

**Kind**: static method of <code>[linkednodes](#systemrule.sync.linkednodes)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [resourcetype] | <code>string</code> | the resourcetype parameter |
| [resourceid] | <code>string</code> | the resourceid parameter |

**Example**  
```javascript
qrsApi.systemrule.sync.linkednodes.get(resourcetype, resourceid).then(function(Array.<Guid>) {
    console.log(Array.<Guid>)
})
```
<a name="systemrule.sync.linkedobjects"></a>
#### sync.linkedobjects : <code>object</code>
**Kind**: static namespace of <code>[sync](#systemrule.sync)</code>  
<a name="systemrule.sync.linkedobjects.get"></a>
##### linkedobjects.get([servernodeconfiguration], [resourcetype]) ⇒ <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/sync/linkedobjects?node={servernodeconfiguration}&resourcetype={resourcetype}

This method is manual

**Kind**: static method of <code>[linkedobjects](#systemrule.sync.linkedobjects)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Guid&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [servernodeconfiguration] | <code>string</code> | the servernodeconfiguration parameter |
| [resourcetype] | <code>string</code> | the resourcetype parameter |

**Example**  
```javascript
qrsApi.systemrule.sync.linkedobjects.get(servernodeconfiguration, resourcetype).then(function(Array.<Guid>) {
    console.log(Array.<Guid>)
})
```
<a name="systemrule.table"></a>
### systemrule.table : <code>object</code>
**Kind**: static namespace of <code>[systemrule](#systemrule)</code>  
<a name="systemrule.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#systemrule.table)</code>  
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
qrsApi.systemrule.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="systemrule.get"></a>
### systemrule.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[systemrule](#systemrule)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SystemRule&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.get(filter, orderby, appendprivileges).then(function(Array.<SystemRule>) {
    console.log(Array.<SystemRule>)
})
```
<a name="systemrule.post"></a>
### systemrule.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SystemRule&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/systemrule?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[systemrule](#systemrule)</code>  
**Returns**: <code>Promise.&lt;SystemRule&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SystemRule</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.systemrule.post(postParams, appendprivileges).then(function(SystemRule) {
    console.log(SystemRule)
})
```
