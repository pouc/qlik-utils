<a name="license"></a>
## license : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [license](#license) : <code>object</code>
  * [.id](#license.id) : <code>object</code>
    * [.delete()](#license.id.delete) ⇒ <code>Promise</code>
    * [.put(postParams, [control], [appendprivileges])](#license.id.put) ⇒ <code>Promise.&lt;License&gt;</code>
  * [.accesstypeinfo](#license.accesstypeinfo) : <code>object</code>
    * [.get()](#license.accesstypeinfo.get) ⇒ <code>Promise.&lt;AccessTypesInfo&gt;</code>
  * [.datamarket](#license.datamarket) : <code>object</code>
    * [.id](#license.datamarket.id) : <code>object</code>
      * [.put(postParams, [control], [appendprivileges])](#license.datamarket.id.put) ⇒ <code>Promise.&lt;License&gt;</code>
    * [.post(postParams, [control], [appendprivileges])](#license.datamarket.post) ⇒ <code>Promise.&lt;License&gt;</code>
    * [.get([appendprivileges])](#license.datamarket.get) ⇒ <code>Promise.&lt;License&gt;</code>
  * [.download](#license.download) : <code>object</code>
    * [.get([serial], [control], [user], [org])](#license.download.get) ⇒ <code>Promise.&lt;String&gt;</code>
  * [.loginaccesstype](#license.loginaccesstype) : <code>object</code>
    * [.id](#license.loginaccesstype.id) : <code>object</code>
      * [.delete()](#license.loginaccesstype.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#license.loginaccesstype.id.get) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
      * [.put(postParams, [appendprivileges])](#license.loginaccesstype.id.put) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
    * [.count](#license.loginaccesstype.count) : <code>object</code>
      * [.get([filter])](#license.loginaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.loginaccesstype.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.loginaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
    * [.many](#license.loginaccesstype.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#license.loginaccesstype.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
    * [.previewcreateprivilege](#license.loginaccesstype.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#license.loginaccesstype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#license.loginaccesstype.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.loginaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.loginaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#license.loginaccesstype.post) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
  * [.loginaccessusage](#license.loginaccessusage) : <code>object</code>
    * [.id](#license.loginaccessusage.id) : <code>object</code>
      * [.get([appendprivileges])](#license.loginaccessusage.id.get) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
    * [.count](#license.loginaccessusage.count) : <code>object</code>
      * [.get([filter])](#license.loginaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.loginaccessusage.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.loginaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
    * [.table](#license.loginaccessusage.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.loginaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.loginaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
  * [.requestaccesstype](#license.requestaccesstype) : <code>object</code>
    * [.post(postParams)](#license.requestaccesstype.post) ⇒ <code>Promise.&lt;AccessTypeResult&gt;</code>
  * [.useraccessgroup](#license.useraccessgroup) : <code>object</code>
    * [.id](#license.useraccessgroup.id) : <code>object</code>
      * [.delete()](#license.useraccessgroup.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#license.useraccessgroup.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
      * [.put(postParams, [appendprivileges])](#license.useraccessgroup.id.put) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
    * [.count](#license.useraccessgroup.count) : <code>object</code>
      * [.get([filter])](#license.useraccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.useraccessgroup.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.useraccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
    * [.many](#license.useraccessgroup.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#license.useraccessgroup.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
    * [.previewcreateprivilege](#license.useraccessgroup.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#license.useraccessgroup.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#license.useraccessgroup.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.useraccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.useraccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#license.useraccessgroup.post) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
  * [.useraccesstype](#license.useraccesstype) : <code>object</code>
    * [.id](#license.useraccesstype.id) : <code>object</code>
      * [.delete()](#license.useraccesstype.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#license.useraccesstype.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
      * [.put(postParams, [appendprivileges])](#license.useraccesstype.id.put) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
    * [.count](#license.useraccesstype.count) : <code>object</code>
      * [.get([filter])](#license.useraccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.useraccesstype.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.useraccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
    * [.many](#license.useraccesstype.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#license.useraccesstype.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
    * [.previewcreateprivilege](#license.useraccesstype.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#license.useraccesstype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#license.useraccesstype.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.useraccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.useraccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#license.useraccesstype.post) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
  * [.useraccessusage](#license.useraccessusage) : <code>object</code>
    * [.id](#license.useraccessusage.id) : <code>object</code>
      * [.get([appendprivileges])](#license.useraccessusage.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
    * [.count](#license.useraccessusage.count) : <code>object</code>
      * [.get([filter])](#license.useraccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.useraccessusage.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.useraccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
    * [.table](#license.useraccessusage.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.useraccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.useraccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
  * [.post(postParams, [control], [appendprivileges])](#license.post) ⇒ <code>Promise.&lt;License&gt;</code>
  * [.get([appendprivileges])](#license.get) ⇒ <code>Promise.&lt;License&gt;</code>

<a name="license.id"></a>
### license.id : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.id](#license.id) : <code>object</code>
  * [.delete()](#license.id.delete) ⇒ <code>Promise</code>
  * [.put(postParams, [control], [appendprivileges])](#license.id.put) ⇒ <code>Promise.&lt;License&gt;</code>

<a name="license.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/{id}
This method is generated

**Kind**: static method of <code>[id](#license.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.license.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="license.id.put"></a>
#### id.put(postParams, [control], [appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/{id}?control={control}&privileges={appendprivileges}
This method is manual

**Kind**: static method of <code>[id](#license.id)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>License</code> | the parameters to send as request body to the API endpoint |
| [control] | <code>string</code> | the control parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.id(id).put(postParams, control, appendprivileges).then(function(License) {
	console.log(License)
})
```
<a name="license.accesstypeinfo"></a>
### license.accesstypeinfo : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  
<a name="license.accesstypeinfo.get"></a>
#### accesstypeinfo.get() ⇒ <code>Promise.&lt;AccessTypesInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/accesstypeinfo
This method is manual

**Kind**: static method of <code>[accesstypeinfo](#license.accesstypeinfo)</code>  
**Returns**: <code>Promise.&lt;AccessTypesInfo&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.license.accesstypeinfo.get().then(function(AccessTypesInfo) {
	console.log(AccessTypesInfo)
})
```
<a name="license.datamarket"></a>
### license.datamarket : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.datamarket](#license.datamarket) : <code>object</code>
  * [.id](#license.datamarket.id) : <code>object</code>
    * [.put(postParams, [control], [appendprivileges])](#license.datamarket.id.put) ⇒ <code>Promise.&lt;License&gt;</code>
  * [.post(postParams, [control], [appendprivileges])](#license.datamarket.post) ⇒ <code>Promise.&lt;License&gt;</code>
  * [.get([appendprivileges])](#license.datamarket.get) ⇒ <code>Promise.&lt;License&gt;</code>

<a name="license.datamarket.id"></a>
#### datamarket.id : <code>object</code>
**Kind**: static namespace of <code>[datamarket](#license.datamarket)</code>  
<a name="license.datamarket.id.put"></a>
##### id.put(postParams, [control], [appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/datamarket/{id}?control={control}&privileges={appendprivileges}
This method is manual

**Kind**: static method of <code>[id](#license.datamarket.id)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>License</code> | the parameters to send as request body to the API endpoint |
| [control] | <code>string</code> | the control parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.datamarket.id(id).put(postParams, control, appendprivileges).then(function(License) {
	console.log(License)
})
```
<a name="license.datamarket.post"></a>
#### datamarket.post(postParams, [control], [appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/datamarket/?control={control}&privileges={appendprivileges}
This method is manual

**Kind**: static method of <code>[datamarket](#license.datamarket)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>License</code> | the parameters to send as request body to the API endpoint |
| [control] | <code>string</code> | the control parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.datamarket.post(postParams, control, appendprivileges).then(function(License) {
	console.log(License)
})
```
<a name="license.datamarket.get"></a>
#### datamarket.get([appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/datamarket/?privileges={appendprivileges}
This method is manual

**Kind**: static method of <code>[datamarket](#license.datamarket)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.datamarket.get(appendprivileges).then(function(License) {
	console.log(License)
})
```
<a name="license.download"></a>
### license.download : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  
<a name="license.download.get"></a>
#### download.get([serial], [control], [user], [org]) ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/download?serial={serial}&control={control}&user={user}&org={org}
This method is manual

**Kind**: static method of <code>[download](#license.download)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [serial] | <code>string</code> | the serial parameter |
| [control] | <code>string</code> | the control parameter |
| [user] | <code>string</code> | the user parameter |
| [org] | <code>string</code> | the org parameter |

**Example**  
```javascript
qrsApi.license.download.get(serial, control, user, org).then(function(String) {
	console.log(String)
})
```
<a name="license.loginaccesstype"></a>
### license.loginaccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.loginaccesstype](#license.loginaccesstype) : <code>object</code>
  * [.id](#license.loginaccesstype.id) : <code>object</code>
    * [.delete()](#license.loginaccesstype.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#license.loginaccesstype.id.get) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
    * [.put(postParams, [appendprivileges])](#license.loginaccesstype.id.put) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
  * [.count](#license.loginaccesstype.count) : <code>object</code>
    * [.get([filter])](#license.loginaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.loginaccesstype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.loginaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
  * [.many](#license.loginaccesstype.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#license.loginaccesstype.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
  * [.previewcreateprivilege](#license.loginaccesstype.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#license.loginaccesstype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#license.loginaccesstype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.loginaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.loginaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#license.loginaccesstype.post) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>

<a name="license.loginaccesstype.id"></a>
#### loginaccesstype.id : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#license.loginaccesstype)</code>  

* [.id](#license.loginaccesstype.id) : <code>object</code>
  * [.delete()](#license.loginaccesstype.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#license.loginaccesstype.id.get) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
  * [.put(postParams, [appendprivileges])](#license.loginaccesstype.id.put) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>

<a name="license.loginaccesstype.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/{id}
This method is generated

**Kind**: static method of <code>[id](#license.loginaccesstype.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.license.loginaccesstype.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="license.loginaccesstype.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.loginaccesstype.id)</code>  
**Returns**: <code>Promise.&lt;LicenseLoginAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.id(id).get(appendprivileges).then(function(LicenseLoginAccessType) {
	console.log(LicenseLoginAccessType)
})
```
<a name="license.loginaccesstype.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.loginaccesstype.id)</code>  
**Returns**: <code>Promise.&lt;LicenseLoginAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseLoginAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseLoginAccessType) {
	console.log(LicenseLoginAccessType)
})
```
<a name="license.loginaccesstype.count"></a>
#### loginaccesstype.count : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#license.loginaccesstype)</code>  
<a name="license.loginaccesstype.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#license.loginaccesstype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="license.loginaccesstype.full"></a>
#### loginaccesstype.full : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#license.loginaccesstype)</code>  
<a name="license.loginaccesstype.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#license.loginaccesstype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
	console.log(Array.<LicenseLoginAccessType>)
})
```
<a name="license.loginaccesstype.many"></a>
#### loginaccesstype.many : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#license.loginaccesstype)</code>  
<a name="license.loginaccesstype.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#license.loginaccesstype.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;LicenseLoginAccessType&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
	console.log(Array.<LicenseLoginAccessType>)
})
```
<a name="license.loginaccesstype.previewcreateprivilege"></a>
#### loginaccesstype.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#license.loginaccesstype)</code>  
<a name="license.loginaccesstype.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#license.loginaccesstype.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseLoginAccessType</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.license.loginaccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="license.loginaccesstype.table"></a>
#### loginaccesstype.table : <code>object</code>
**Kind**: static namespace of <code>[loginaccesstype](#license.loginaccesstype)</code>  
<a name="license.loginaccesstype.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#license.loginaccesstype.table)</code>  
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
qrsApi.license.loginaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="license.loginaccesstype.get"></a>
#### loginaccesstype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[loginaccesstype](#license.loginaccesstype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessType>) {
	console.log(Array.<LicenseLoginAccessType>)
})
```
<a name="license.loginaccesstype.post"></a>
#### loginaccesstype.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccesstype?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[loginaccesstype](#license.loginaccesstype)</code>  
**Returns**: <code>Promise.&lt;LicenseLoginAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseLoginAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccesstype.post(postParams, appendprivileges).then(function(LicenseLoginAccessType) {
	console.log(LicenseLoginAccessType)
})
```
<a name="license.loginaccessusage"></a>
### license.loginaccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.loginaccessusage](#license.loginaccessusage) : <code>object</code>
  * [.id](#license.loginaccessusage.id) : <code>object</code>
    * [.get([appendprivileges])](#license.loginaccessusage.id.get) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
  * [.count](#license.loginaccessusage.count) : <code>object</code>
    * [.get([filter])](#license.loginaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.loginaccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.loginaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
  * [.table](#license.loginaccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.loginaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.loginaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>

<a name="license.loginaccessusage.id"></a>
#### loginaccessusage.id : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#license.loginaccessusage)</code>  
<a name="license.loginaccessusage.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccessusage/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.loginaccessusage.id)</code>  
**Returns**: <code>Promise.&lt;LicenseLoginAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccessusage.id(id).get(appendprivileges).then(function(LicenseLoginAccessUsage) {
	console.log(LicenseLoginAccessUsage)
})
```
<a name="license.loginaccessusage.count"></a>
#### loginaccessusage.count : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#license.loginaccessusage)</code>  
<a name="license.loginaccessusage.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccessusage/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#license.loginaccessusage.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.loginaccessusage.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="license.loginaccessusage.full"></a>
#### loginaccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#license.loginaccessusage)</code>  
<a name="license.loginaccessusage.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#license.loginaccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
	console.log(Array.<LicenseLoginAccessUsage>)
})
```
<a name="license.loginaccessusage.table"></a>
#### loginaccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[loginaccessusage](#license.loginaccessusage)</code>  
<a name="license.loginaccessusage.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#license.loginaccessusage.table)</code>  
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
qrsApi.license.loginaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="license.loginaccessusage.get"></a>
#### loginaccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/loginaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[loginaccessusage](#license.loginaccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseLoginAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.loginaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseLoginAccessUsage>) {
	console.log(Array.<LicenseLoginAccessUsage>)
})
```
<a name="license.requestaccesstype"></a>
### license.requestaccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  
<a name="license.requestaccesstype.post"></a>
#### requestaccesstype.post(postParams) ⇒ <code>Promise.&lt;AccessTypeResult&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/requestaccesstype
This method is manual

**Kind**: static method of <code>[requestaccesstype](#license.requestaccesstype)</code>  
**Returns**: <code>Promise.&lt;AccessTypeResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AccessTypeRequest</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.license.requestaccesstype.post(postParams).then(function(AccessTypeResult) {
	console.log(AccessTypeResult)
})
```
<a name="license.useraccessgroup"></a>
### license.useraccessgroup : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.useraccessgroup](#license.useraccessgroup) : <code>object</code>
  * [.id](#license.useraccessgroup.id) : <code>object</code>
    * [.delete()](#license.useraccessgroup.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#license.useraccessgroup.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
    * [.put(postParams, [appendprivileges])](#license.useraccessgroup.id.put) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
  * [.count](#license.useraccessgroup.count) : <code>object</code>
    * [.get([filter])](#license.useraccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.useraccessgroup.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.useraccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
  * [.many](#license.useraccessgroup.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#license.useraccessgroup.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
  * [.previewcreateprivilege](#license.useraccessgroup.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#license.useraccessgroup.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#license.useraccessgroup.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.useraccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.useraccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#license.useraccessgroup.post) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>

<a name="license.useraccessgroup.id"></a>
#### useraccessgroup.id : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#license.useraccessgroup)</code>  

* [.id](#license.useraccessgroup.id) : <code>object</code>
  * [.delete()](#license.useraccessgroup.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#license.useraccessgroup.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
  * [.put(postParams, [appendprivileges])](#license.useraccessgroup.id.put) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>

<a name="license.useraccessgroup.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/{id}
This method is generated

**Kind**: static method of <code>[id](#license.useraccessgroup.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.license.useraccessgroup.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="license.useraccessgroup.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.useraccessgroup.id)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.id(id).get(appendprivileges).then(function(LicenseUserAccessGroup) {
	console.log(LicenseUserAccessGroup)
})
```
<a name="license.useraccessgroup.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.useraccessgroup.id)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessGroup</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.id(id).put(postParams, appendprivileges).then(function(LicenseUserAccessGroup) {
	console.log(LicenseUserAccessGroup)
})
```
<a name="license.useraccessgroup.count"></a>
#### useraccessgroup.count : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#license.useraccessgroup)</code>  
<a name="license.useraccessgroup.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#license.useraccessgroup.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="license.useraccessgroup.full"></a>
#### useraccessgroup.full : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#license.useraccessgroup)</code>  
<a name="license.useraccessgroup.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#license.useraccessgroup.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
	console.log(Array.<LicenseUserAccessGroup>)
})
```
<a name="license.useraccessgroup.many"></a>
#### useraccessgroup.many : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#license.useraccessgroup)</code>  
<a name="license.useraccessgroup.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#license.useraccessgroup.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;LicenseUserAccessGroup&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.many.post(postParams, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
	console.log(Array.<LicenseUserAccessGroup>)
})
```
<a name="license.useraccessgroup.previewcreateprivilege"></a>
#### useraccessgroup.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#license.useraccessgroup)</code>  
<a name="license.useraccessgroup.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#license.useraccessgroup.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessGroup</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.license.useraccessgroup.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="license.useraccessgroup.table"></a>
#### useraccessgroup.table : <code>object</code>
**Kind**: static namespace of <code>[useraccessgroup](#license.useraccessgroup)</code>  
<a name="license.useraccessgroup.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#license.useraccessgroup.table)</code>  
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
qrsApi.license.useraccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="license.useraccessgroup.get"></a>
#### useraccessgroup.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[useraccessgroup](#license.useraccessgroup)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessGroup>) {
	console.log(Array.<LicenseUserAccessGroup>)
})
```
<a name="license.useraccessgroup.post"></a>
#### useraccessgroup.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessgroup?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[useraccessgroup](#license.useraccessgroup)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessGroup</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessgroup.post(postParams, appendprivileges).then(function(LicenseUserAccessGroup) {
	console.log(LicenseUserAccessGroup)
})
```
<a name="license.useraccesstype"></a>
### license.useraccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.useraccesstype](#license.useraccesstype) : <code>object</code>
  * [.id](#license.useraccesstype.id) : <code>object</code>
    * [.delete()](#license.useraccesstype.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#license.useraccesstype.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
    * [.put(postParams, [appendprivileges])](#license.useraccesstype.id.put) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
  * [.count](#license.useraccesstype.count) : <code>object</code>
    * [.get([filter])](#license.useraccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.useraccesstype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.useraccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
  * [.many](#license.useraccesstype.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#license.useraccesstype.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
  * [.previewcreateprivilege](#license.useraccesstype.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#license.useraccesstype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#license.useraccesstype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.useraccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.useraccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#license.useraccesstype.post) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>

<a name="license.useraccesstype.id"></a>
#### useraccesstype.id : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#license.useraccesstype)</code>  

* [.id](#license.useraccesstype.id) : <code>object</code>
  * [.delete()](#license.useraccesstype.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#license.useraccesstype.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
  * [.put(postParams, [appendprivileges])](#license.useraccesstype.id.put) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>

<a name="license.useraccesstype.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/{id}
This method is generated

**Kind**: static method of <code>[id](#license.useraccesstype.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.license.useraccesstype.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="license.useraccesstype.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.useraccesstype.id)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.id(id).get(appendprivileges).then(function(LicenseUserAccessType) {
	console.log(LicenseUserAccessType)
})
```
<a name="license.useraccesstype.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.useraccesstype.id)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseUserAccessType) {
	console.log(LicenseUserAccessType)
})
```
<a name="license.useraccesstype.count"></a>
#### useraccesstype.count : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#license.useraccesstype)</code>  
<a name="license.useraccesstype.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#license.useraccesstype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="license.useraccesstype.full"></a>
#### useraccesstype.full : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#license.useraccesstype)</code>  
<a name="license.useraccesstype.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#license.useraccesstype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
	console.log(Array.<LicenseUserAccessType>)
})
```
<a name="license.useraccesstype.many"></a>
#### useraccesstype.many : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#license.useraccesstype)</code>  
<a name="license.useraccesstype.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#license.useraccesstype.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;LicenseUserAccessType&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
	console.log(Array.<LicenseUserAccessType>)
})
```
<a name="license.useraccesstype.previewcreateprivilege"></a>
#### useraccesstype.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#license.useraccesstype)</code>  
<a name="license.useraccesstype.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#license.useraccesstype.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessType</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.license.useraccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="license.useraccesstype.table"></a>
#### useraccesstype.table : <code>object</code>
**Kind**: static namespace of <code>[useraccesstype](#license.useraccesstype)</code>  
<a name="license.useraccesstype.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#license.useraccesstype.table)</code>  
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
qrsApi.license.useraccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="license.useraccesstype.get"></a>
#### useraccesstype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[useraccesstype](#license.useraccesstype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessType>) {
	console.log(Array.<LicenseUserAccessType>)
})
```
<a name="license.useraccesstype.post"></a>
#### useraccesstype.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccesstype?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[useraccesstype](#license.useraccesstype)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseUserAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccesstype.post(postParams, appendprivileges).then(function(LicenseUserAccessType) {
	console.log(LicenseUserAccessType)
})
```
<a name="license.useraccessusage"></a>
### license.useraccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.useraccessusage](#license.useraccessusage) : <code>object</code>
  * [.id](#license.useraccessusage.id) : <code>object</code>
    * [.get([appendprivileges])](#license.useraccessusage.id.get) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
  * [.count](#license.useraccessusage.count) : <code>object</code>
    * [.get([filter])](#license.useraccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.useraccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.useraccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
  * [.table](#license.useraccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.useraccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.useraccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>

<a name="license.useraccessusage.id"></a>
#### useraccessusage.id : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#license.useraccessusage)</code>  
<a name="license.useraccessusage.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseUserAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessusage/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#license.useraccessusage.id)</code>  
**Returns**: <code>Promise.&lt;LicenseUserAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessusage.id(id).get(appendprivileges).then(function(LicenseUserAccessUsage) {
	console.log(LicenseUserAccessUsage)
})
```
<a name="license.useraccessusage.count"></a>
#### useraccessusage.count : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#license.useraccessusage)</code>  
<a name="license.useraccessusage.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessusage/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#license.useraccessusage.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.useraccessusage.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="license.useraccessusage.full"></a>
#### useraccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#license.useraccessusage)</code>  
<a name="license.useraccessusage.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#license.useraccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
	console.log(Array.<LicenseUserAccessUsage>)
})
```
<a name="license.useraccessusage.table"></a>
#### useraccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[useraccessusage](#license.useraccessusage)</code>  
<a name="license.useraccessusage.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#license.useraccessusage.table)</code>  
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
qrsApi.license.useraccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="license.useraccessusage.get"></a>
#### useraccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/useraccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[useraccessusage](#license.useraccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseUserAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.useraccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseUserAccessUsage>) {
	console.log(Array.<LicenseUserAccessUsage>)
})
```
<a name="license.post"></a>
### license.post(postParams, [control], [appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/?control={control}&privileges={appendprivileges}
This method is manual

**Kind**: static method of <code>[license](#license)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>License</code> | the parameters to send as request body to the API endpoint |
| [control] | <code>string</code> | the control parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.post(postParams, control, appendprivileges).then(function(License) {
	console.log(License)
})
```
<a name="license.get"></a>
### license.get([appendprivileges]) ⇒ <code>Promise.&lt;License&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/license/?privileges={appendprivileges}
This method is manual

**Kind**: static method of <code>[license](#license)</code>  
**Returns**: <code>Promise.&lt;License&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.get(appendprivileges).then(function(License) {
	console.log(License)
})
```
