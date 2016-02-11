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
  * [.applicationaccessgroup](#license.applicationaccessgroup) : <code>object</code>
    * [.id](#license.applicationaccessgroup.id) : <code>object</code>
      * [.delete()](#license.applicationaccessgroup.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#license.applicationaccessgroup.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
      * [.put(postParams, [appendprivileges])](#license.applicationaccessgroup.id.put) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
    * [.count](#license.applicationaccessgroup.count) : <code>object</code>
      * [.get([filter])](#license.applicationaccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.applicationaccessgroup.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
    * [.many](#license.applicationaccessgroup.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#license.applicationaccessgroup.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
    * [.previewcreateprivilege](#license.applicationaccessgroup.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#license.applicationaccessgroup.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#license.applicationaccessgroup.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.applicationaccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#license.applicationaccessgroup.post) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
  * [.applicationaccesstype](#license.applicationaccesstype) : <code>object</code>
    * [.id](#license.applicationaccesstype.id) : <code>object</code>
      * [.delete()](#license.applicationaccesstype.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#license.applicationaccesstype.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
      * [.put(postParams, [appendprivileges])](#license.applicationaccesstype.id.put) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
    * [.count](#license.applicationaccesstype.count) : <code>object</code>
      * [.get([filter])](#license.applicationaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.applicationaccesstype.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
    * [.many](#license.applicationaccesstype.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#license.applicationaccesstype.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
    * [.previewcreateprivilege](#license.applicationaccesstype.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#license.applicationaccesstype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#license.applicationaccesstype.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.applicationaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#license.applicationaccesstype.post) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
  * [.applicationaccessusage](#license.applicationaccessusage) : <code>object</code>
    * [.id](#license.applicationaccessusage.id) : <code>object</code>
      * [.get([appendprivileges])](#license.applicationaccessusage.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessUsage&gt;</code>
    * [.count](#license.applicationaccessusage.count) : <code>object</code>
      * [.get([filter])](#license.applicationaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#license.applicationaccessusage.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code>
    * [.table](#license.applicationaccessusage.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.applicationaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code>
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
<a name="license.applicationaccessgroup"></a>
### license.applicationaccessgroup : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.applicationaccessgroup](#license.applicationaccessgroup) : <code>object</code>
  * [.id](#license.applicationaccessgroup.id) : <code>object</code>
    * [.delete()](#license.applicationaccessgroup.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#license.applicationaccessgroup.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
    * [.put(postParams, [appendprivileges])](#license.applicationaccessgroup.id.put) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
  * [.count](#license.applicationaccessgroup.count) : <code>object</code>
    * [.get([filter])](#license.applicationaccessgroup.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.applicationaccessgroup.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessgroup.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
  * [.many](#license.applicationaccessgroup.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#license.applicationaccessgroup.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
  * [.previewcreateprivilege](#license.applicationaccessgroup.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#license.applicationaccessgroup.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#license.applicationaccessgroup.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.applicationaccessgroup.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessgroup.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#license.applicationaccessgroup.post) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>

<a name="license.applicationaccessgroup.id"></a>
#### applicationaccessgroup.id : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  

* [.id](#license.applicationaccessgroup.id) : <code>object</code>
  * [.delete()](#license.applicationaccessgroup.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#license.applicationaccessgroup.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
  * [.put(postParams, [appendprivileges])](#license.applicationaccessgroup.id.put) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>

<a name="license.applicationaccessgroup.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/{id}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccessgroup.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.license.applicationaccessgroup.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="license.applicationaccessgroup.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccessgroup.id)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.id(id).get(appendprivileges).then(function(LicenseApplicationAccessGroup) {
    console.log(LicenseApplicationAccessGroup)
})
```
<a name="license.applicationaccessgroup.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccessgroup.id)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseApplicationAccessGroup</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.id(id).put(postParams, appendprivileges).then(function(LicenseApplicationAccessGroup) {
    console.log(LicenseApplicationAccessGroup)
})
```
<a name="license.applicationaccessgroup.count"></a>
#### applicationaccessgroup.count : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
<a name="license.applicationaccessgroup.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#license.applicationaccessgroup.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="license.applicationaccessgroup.full"></a>
#### applicationaccessgroup.full : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
<a name="license.applicationaccessgroup.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#license.applicationaccessgroup.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessGroup>) {
    console.log(Array.<LicenseApplicationAccessGroup>)
})
```
<a name="license.applicationaccessgroup.many"></a>
#### applicationaccessgroup.many : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
<a name="license.applicationaccessgroup.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#license.applicationaccessgroup.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;LicenseApplicationAccessGroup&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.many.post(postParams, appendprivileges).then(function(Array.<LicenseApplicationAccessGroup>) {
    console.log(Array.<LicenseApplicationAccessGroup>)
})
```
<a name="license.applicationaccessgroup.previewcreateprivilege"></a>
#### applicationaccessgroup.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
<a name="license.applicationaccessgroup.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#license.applicationaccessgroup.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseApplicationAccessGroup</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="license.applicationaccessgroup.table"></a>
#### applicationaccessgroup.table : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
<a name="license.applicationaccessgroup.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#license.applicationaccessgroup.table)</code>  
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
qrsApi.license.applicationaccessgroup.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="license.applicationaccessgroup.get"></a>
#### applicationaccessgroup.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessGroup&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessGroup>) {
    console.log(Array.<LicenseApplicationAccessGroup>)
})
```
<a name="license.applicationaccessgroup.post"></a>
#### applicationaccessgroup.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessgroup?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[applicationaccessgroup](#license.applicationaccessgroup)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessGroup&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseApplicationAccessGroup</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessgroup.post(postParams, appendprivileges).then(function(LicenseApplicationAccessGroup) {
    console.log(LicenseApplicationAccessGroup)
})
```
<a name="license.applicationaccesstype"></a>
### license.applicationaccesstype : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.applicationaccesstype](#license.applicationaccesstype) : <code>object</code>
  * [.id](#license.applicationaccesstype.id) : <code>object</code>
    * [.delete()](#license.applicationaccesstype.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#license.applicationaccesstype.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
    * [.put(postParams, [appendprivileges])](#license.applicationaccesstype.id.put) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
  * [.count](#license.applicationaccesstype.count) : <code>object</code>
    * [.get([filter])](#license.applicationaccesstype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.applicationaccesstype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccesstype.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
  * [.many](#license.applicationaccesstype.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#license.applicationaccesstype.many.post) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
  * [.previewcreateprivilege](#license.applicationaccesstype.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#license.applicationaccesstype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#license.applicationaccesstype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.applicationaccesstype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccesstype.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#license.applicationaccesstype.post) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>

<a name="license.applicationaccesstype.id"></a>
#### applicationaccesstype.id : <code>object</code>
**Kind**: static namespace of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  

* [.id](#license.applicationaccesstype.id) : <code>object</code>
  * [.delete()](#license.applicationaccesstype.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#license.applicationaccesstype.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
  * [.put(postParams, [appendprivileges])](#license.applicationaccesstype.id.put) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>

<a name="license.applicationaccesstype.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/{id}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccesstype.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.license.applicationaccesstype.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="license.applicationaccesstype.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccesstype.id)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.id(id).get(appendprivileges).then(function(LicenseApplicationAccessType) {
    console.log(LicenseApplicationAccessType)
})
```
<a name="license.applicationaccesstype.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccesstype.id)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseApplicationAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.id(id).put(postParams, appendprivileges).then(function(LicenseApplicationAccessType) {
    console.log(LicenseApplicationAccessType)
})
```
<a name="license.applicationaccesstype.count"></a>
#### applicationaccesstype.count : <code>object</code>
**Kind**: static namespace of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
<a name="license.applicationaccesstype.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#license.applicationaccesstype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="license.applicationaccesstype.full"></a>
#### applicationaccesstype.full : <code>object</code>
**Kind**: static namespace of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
<a name="license.applicationaccesstype.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#license.applicationaccesstype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessType>) {
    console.log(Array.<LicenseApplicationAccessType>)
})
```
<a name="license.applicationaccesstype.many"></a>
#### applicationaccesstype.many : <code>object</code>
**Kind**: static namespace of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
<a name="license.applicationaccesstype.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#license.applicationaccesstype.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;LicenseApplicationAccessType&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.many.post(postParams, appendprivileges).then(function(Array.<LicenseApplicationAccessType>) {
    console.log(Array.<LicenseApplicationAccessType>)
})
```
<a name="license.applicationaccesstype.previewcreateprivilege"></a>
#### applicationaccesstype.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
<a name="license.applicationaccesstype.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#license.applicationaccesstype.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseApplicationAccessType</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="license.applicationaccesstype.table"></a>
#### applicationaccesstype.table : <code>object</code>
**Kind**: static namespace of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
<a name="license.applicationaccesstype.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#license.applicationaccesstype.table)</code>  
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
qrsApi.license.applicationaccesstype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="license.applicationaccesstype.get"></a>
#### applicationaccesstype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessType>) {
    console.log(Array.<LicenseApplicationAccessType>)
})
```
<a name="license.applicationaccesstype.post"></a>
#### applicationaccesstype.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessType&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccesstype?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[applicationaccesstype](#license.applicationaccesstype)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LicenseApplicationAccessType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccesstype.post(postParams, appendprivileges).then(function(LicenseApplicationAccessType) {
    console.log(LicenseApplicationAccessType)
})
```
<a name="license.applicationaccessusage"></a>
### license.applicationaccessusage : <code>object</code>
**Kind**: static namespace of <code>[license](#license)</code>  

* [.applicationaccessusage](#license.applicationaccessusage) : <code>object</code>
  * [.id](#license.applicationaccessusage.id) : <code>object</code>
    * [.get([appendprivileges])](#license.applicationaccessusage.id.get) ⇒ <code>Promise.&lt;LicenseApplicationAccessUsage&gt;</code>
  * [.count](#license.applicationaccessusage.count) : <code>object</code>
    * [.get([filter])](#license.applicationaccessusage.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#license.applicationaccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code>
  * [.table](#license.applicationaccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#license.applicationaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#license.applicationaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code>

<a name="license.applicationaccessusage.id"></a>
#### applicationaccessusage.id : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessusage](#license.applicationaccessusage)</code>  
<a name="license.applicationaccessusage.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;LicenseApplicationAccessUsage&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessusage/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#license.applicationaccessusage.id)</code>  
**Returns**: <code>Promise.&lt;LicenseApplicationAccessUsage&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessusage.id(id).get(appendprivileges).then(function(LicenseApplicationAccessUsage) {
    console.log(LicenseApplicationAccessUsage)
})
```
<a name="license.applicationaccessusage.count"></a>
#### applicationaccessusage.count : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessusage](#license.applicationaccessusage)</code>  
<a name="license.applicationaccessusage.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessusage/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#license.applicationaccessusage.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessusage.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="license.applicationaccessusage.full"></a>
#### applicationaccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessusage](#license.applicationaccessusage)</code>  
<a name="license.applicationaccessusage.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#license.applicationaccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessUsage>) {
    console.log(Array.<LicenseApplicationAccessUsage>)
})
```
<a name="license.applicationaccessusage.table"></a>
#### applicationaccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[applicationaccessusage](#license.applicationaccessusage)</code>  
<a name="license.applicationaccessusage.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#license.applicationaccessusage.table)</code>  
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
qrsApi.license.applicationaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="license.applicationaccessusage.get"></a>
#### applicationaccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/license/applicationaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[applicationaccessusage](#license.applicationaccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;LicenseApplicationAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.license.applicationaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<LicenseApplicationAccessUsage>) {
    console.log(Array.<LicenseApplicationAccessUsage>)
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
