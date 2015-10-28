<a name="executionsession"></a>
## executionsession : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [executionsession](#executionsession) : <code>object</code>
  * [.id](#executionsession.id) : <code>object</code>
    * [.delete()](#executionsession.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#executionsession.id.get) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
    * [.put(postParams, [appendprivileges])](#executionsession.id.put) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
  * [.count](#executionsession.count) : <code>object</code>
    * [.get([filter])](#executionsession.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#executionsession.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#executionsession.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
  * [.many](#executionsession.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#executionsession.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
  * [.previewcreateprivilege](#executionsession.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#executionsession.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#executionsession.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#executionsession.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#executionsession.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#executionsession.post) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>

<a name="executionsession.id"></a>
### executionsession.id : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#executionsession)</code>  

* [.id](#executionsession.id) : <code>object</code>
  * [.delete()](#executionsession.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#executionsession.id.get) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
  * [.put(postParams, [appendprivileges])](#executionsession.id.put) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>

<a name="executionsession.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/{id}
This method is generated

**Kind**: static method of <code>[id](#executionsession.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.executionsession.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="executionsession.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#executionsession.id)</code>  
**Returns**: <code>Promise.&lt;ExecutionSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionsession.id(id).get(appendprivileges).then(function(ExecutionSession) {
	console.log(ExecutionSession)
})
```
<a name="executionsession.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#executionsession.id)</code>  
**Returns**: <code>Promise.&lt;ExecutionSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionSession</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionsession.id(id).put(postParams, appendprivileges).then(function(ExecutionSession) {
	console.log(ExecutionSession)
})
```
<a name="executionsession.count"></a>
### executionsession.count : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#executionsession)</code>  
<a name="executionsession.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#executionsession.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.executionsession.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="executionsession.full"></a>
### executionsession.full : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#executionsession)</code>  
<a name="executionsession.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#executionsession.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionsession.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionSession>) {
	console.log(Array.<ExecutionSession>)
})
```
<a name="executionsession.many"></a>
### executionsession.many : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#executionsession)</code>  
<a name="executionsession.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#executionsession.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ExecutionSession&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionsession.many.post(postParams, appendprivileges).then(function(Array.<ExecutionSession>) {
	console.log(Array.<ExecutionSession>)
})
```
<a name="executionsession.previewcreateprivilege"></a>
### executionsession.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#executionsession)</code>  
<a name="executionsession.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#executionsession.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionSession</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.executionsession.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="executionsession.table"></a>
### executionsession.table : <code>object</code>
**Kind**: static namespace of <code>[executionsession](#executionsession)</code>  
<a name="executionsession.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#executionsession.table)</code>  
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
qrsApi.executionsession.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="executionsession.get"></a>
### executionsession.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[executionsession](#executionsession)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionSession&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionsession.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionSession>) {
	console.log(Array.<ExecutionSession>)
})
```
<a name="executionsession.post"></a>
### executionsession.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionSession&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/executionsession?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[executionsession](#executionsession)</code>  
**Returns**: <code>Promise.&lt;ExecutionSession&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionSession</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionsession.post(postParams, appendprivileges).then(function(ExecutionSession) {
	console.log(ExecutionSession)
})
```
