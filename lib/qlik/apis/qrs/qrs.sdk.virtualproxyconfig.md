<a name="virtualproxyconfig"></a>
## virtualproxyconfig : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [virtualproxyconfig](#virtualproxyconfig) : <code>object</code>
  * [.id](#virtualproxyconfig.id) : <code>object</code>
    * [.delete()](#virtualproxyconfig.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#virtualproxyconfig.id.get) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
    * [.put(postParams, [appendprivileges])](#virtualproxyconfig.id.put) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
  * [.vpid](#virtualproxyconfig.vpid) : <code>object</code>
    * [.generate](#virtualproxyconfig.vpid.generate) : <code>object</code>
      * [.samlmetadata](#virtualproxyconfig.vpid.generate.samlmetadata) : <code>object</code>
        * [.get()](#virtualproxyconfig.vpid.generate.samlmetadata.get) ⇒ <code>Promise.&lt;Guid&gt;</code>
  * [.count](#virtualproxyconfig.count) : <code>object</code>
    * [.get([filter])](#virtualproxyconfig.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#virtualproxyconfig.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#virtualproxyconfig.full.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
  * [.many](#virtualproxyconfig.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#virtualproxyconfig.many.post) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
  * [.previewcreateprivilege](#virtualproxyconfig.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#virtualproxyconfig.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#virtualproxyconfig.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#virtualproxyconfig.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#virtualproxyconfig.get) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#virtualproxyconfig.post) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>

<a name="virtualproxyconfig.id"></a>
### virtualproxyconfig.id : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  

* [.id](#virtualproxyconfig.id) : <code>object</code>
  * [.delete()](#virtualproxyconfig.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#virtualproxyconfig.id.get) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
  * [.put(postParams, [appendprivileges])](#virtualproxyconfig.id.put) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>

<a name="virtualproxyconfig.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/{id}

This method is generated

**Kind**: static method of <code>[id](#virtualproxyconfig.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.virtualproxyconfig.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="virtualproxyconfig.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#virtualproxyconfig.id)</code>  
**Returns**: <code>Promise.&lt;VirtualProxyConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.id(id).get(appendprivileges).then(function(VirtualProxyConfig) {
    console.log(VirtualProxyConfig)
})
```
<a name="virtualproxyconfig.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#virtualproxyconfig.id)</code>  
**Returns**: <code>Promise.&lt;VirtualProxyConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>VirtualProxyConfig</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.id(id).put(postParams, appendprivileges).then(function(VirtualProxyConfig) {
    console.log(VirtualProxyConfig)
})
```
<a name="virtualproxyconfig.vpid"></a>
### virtualproxyconfig.vpid : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  

* [.vpid](#virtualproxyconfig.vpid) : <code>object</code>
  * [.generate](#virtualproxyconfig.vpid.generate) : <code>object</code>
    * [.samlmetadata](#virtualproxyconfig.vpid.generate.samlmetadata) : <code>object</code>
      * [.get()](#virtualproxyconfig.vpid.generate.samlmetadata.get) ⇒ <code>Promise.&lt;Guid&gt;</code>

<a name="virtualproxyconfig.vpid.generate"></a>
#### vpid.generate : <code>object</code>
**Kind**: static namespace of <code>[vpid](#virtualproxyconfig.vpid)</code>  

* [.generate](#virtualproxyconfig.vpid.generate) : <code>object</code>
  * [.samlmetadata](#virtualproxyconfig.vpid.generate.samlmetadata) : <code>object</code>
    * [.get()](#virtualproxyconfig.vpid.generate.samlmetadata.get) ⇒ <code>Promise.&lt;Guid&gt;</code>

<a name="virtualproxyconfig.vpid.generate.samlmetadata"></a>
##### generate.samlmetadata : <code>object</code>
**Kind**: static namespace of <code>[generate](#virtualproxyconfig.vpid.generate)</code>  
<a name="virtualproxyconfig.vpid.generate.samlmetadata.get"></a>
###### samlmetadata.get() ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/{vpid}/generate/samlmetadata

This method is manual

**Kind**: static method of <code>[samlmetadata](#virtualproxyconfig.vpid.generate.samlmetadata)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.virtualproxyconfig.vpid(vpid).generate.samlmetadata.get().then(function(Guid) {
    console.log(Guid)
})
```
<a name="virtualproxyconfig.count"></a>
### virtualproxyconfig.count : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
<a name="virtualproxyconfig.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#virtualproxyconfig.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="virtualproxyconfig.full"></a>
### virtualproxyconfig.full : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
<a name="virtualproxyconfig.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#virtualproxyconfig.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.full.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
    console.log(Array.<VirtualProxyConfig>)
})
```
<a name="virtualproxyconfig.many"></a>
### virtualproxyconfig.many : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
<a name="virtualproxyconfig.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#virtualproxyconfig.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;VirtualProxyConfig&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.many.post(postParams, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
    console.log(Array.<VirtualProxyConfig>)
})
```
<a name="virtualproxyconfig.previewcreateprivilege"></a>
### virtualproxyconfig.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
<a name="virtualproxyconfig.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#virtualproxyconfig.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>VirtualProxyConfig</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.virtualproxyconfig.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="virtualproxyconfig.table"></a>
### virtualproxyconfig.table : <code>object</code>
**Kind**: static namespace of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
<a name="virtualproxyconfig.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#virtualproxyconfig.table)</code>  
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
qrsApi.virtualproxyconfig.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="virtualproxyconfig.get"></a>
### virtualproxyconfig.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;VirtualProxyConfig&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.get(filter, orderby, appendprivileges).then(function(Array.<VirtualProxyConfig>) {
    console.log(Array.<VirtualProxyConfig>)
})
```
<a name="virtualproxyconfig.post"></a>
### virtualproxyconfig.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;VirtualProxyConfig&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/virtualproxyconfig?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[virtualproxyconfig](#virtualproxyconfig)</code>  
**Returns**: <code>Promise.&lt;VirtualProxyConfig&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>VirtualProxyConfig</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.virtualproxyconfig.post(postParams, appendprivileges).then(function(VirtualProxyConfig) {
    console.log(VirtualProxyConfig)
})
```
