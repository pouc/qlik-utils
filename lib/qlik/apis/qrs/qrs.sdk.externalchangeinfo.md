<a name="externalchangeinfo"></a>
## externalchangeinfo : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [externalchangeinfo](#externalchangeinfo) : <code>object</code>
  * [.id](#externalchangeinfo.id) : <code>object</code>
    * [.delete()](#externalchangeinfo.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#externalchangeinfo.id.get) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
    * [.put(postParams, [appendprivileges])](#externalchangeinfo.id.put) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
  * [.count](#externalchangeinfo.count) : <code>object</code>
    * [.get([filter])](#externalchangeinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#externalchangeinfo.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#externalchangeinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
  * [.many](#externalchangeinfo.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#externalchangeinfo.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
  * [.previewcreateprivilege](#externalchangeinfo.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#externalchangeinfo.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#externalchangeinfo.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#externalchangeinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#externalchangeinfo.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#externalchangeinfo.post) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>

<a name="externalchangeinfo.id"></a>
### externalchangeinfo.id : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#externalchangeinfo)</code>  

* [.id](#externalchangeinfo.id) : <code>object</code>
  * [.delete()](#externalchangeinfo.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#externalchangeinfo.id.get) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
  * [.put(postParams, [appendprivileges])](#externalchangeinfo.id.put) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>

<a name="externalchangeinfo.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/{id}

This method is generated

**Kind**: static method of <code>[id](#externalchangeinfo.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.externalchangeinfo.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="externalchangeinfo.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#externalchangeinfo.id)</code>  
**Returns**: <code>Promise.&lt;ExternalChangeInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.id(id).get(appendprivileges).then(function(ExternalChangeInfo) {
    console.log(ExternalChangeInfo)
})
```
<a name="externalchangeinfo.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#externalchangeinfo.id)</code>  
**Returns**: <code>Promise.&lt;ExternalChangeInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalChangeInfo</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.id(id).put(postParams, appendprivileges).then(function(ExternalChangeInfo) {
    console.log(ExternalChangeInfo)
})
```
<a name="externalchangeinfo.count"></a>
### externalchangeinfo.count : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#externalchangeinfo)</code>  
<a name="externalchangeinfo.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#externalchangeinfo.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="externalchangeinfo.full"></a>
### externalchangeinfo.full : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#externalchangeinfo)</code>  
<a name="externalchangeinfo.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#externalchangeinfo.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
    console.log(Array.<ExternalChangeInfo>)
})
```
<a name="externalchangeinfo.many"></a>
### externalchangeinfo.many : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#externalchangeinfo)</code>  
<a name="externalchangeinfo.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#externalchangeinfo.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ExternalChangeInfo&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.many.post(postParams, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
    console.log(Array.<ExternalChangeInfo>)
})
```
<a name="externalchangeinfo.previewcreateprivilege"></a>
### externalchangeinfo.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#externalchangeinfo)</code>  
<a name="externalchangeinfo.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#externalchangeinfo.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalChangeInfo</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.externalchangeinfo.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="externalchangeinfo.table"></a>
### externalchangeinfo.table : <code>object</code>
**Kind**: static namespace of <code>[externalchangeinfo](#externalchangeinfo)</code>  
<a name="externalchangeinfo.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#externalchangeinfo.table)</code>  
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
qrsApi.externalchangeinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="externalchangeinfo.get"></a>
### externalchangeinfo.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalchangeinfo](#externalchangeinfo)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalChangeInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.get(filter, orderby, appendprivileges).then(function(Array.<ExternalChangeInfo>) {
    console.log(Array.<ExternalChangeInfo>)
})
```
<a name="externalchangeinfo.post"></a>
### externalchangeinfo.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalChangeInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalchangeinfo?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalchangeinfo](#externalchangeinfo)</code>  
**Returns**: <code>Promise.&lt;ExternalChangeInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalChangeInfo</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalchangeinfo.post(postParams, appendprivileges).then(function(ExternalChangeInfo) {
    console.log(ExternalChangeInfo)
})
```
