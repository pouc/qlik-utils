<a name="executionresult"></a>
## executionresult : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [executionresult](#executionresult) : <code>object</code>
  * [.id](#executionresult.id) : <code>object</code>
    * [.delete()](#executionresult.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#executionresult.id.get) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
    * [.put(postParams, [appendprivileges])](#executionresult.id.put) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
  * [.count](#executionresult.count) : <code>object</code>
    * [.get([filter])](#executionresult.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.detail](#executionresult.detail) : <code>object</code>
    * [.id](#executionresult.detail.id) : <code>object</code>
      * [.delete()](#executionresult.detail.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#executionresult.detail.id.get) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
      * [.put(postParams, [appendprivileges])](#executionresult.detail.id.put) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
    * [.count](#executionresult.detail.count) : <code>object</code>
      * [.get([filter])](#executionresult.detail.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#executionresult.detail.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#executionresult.detail.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
    * [.many](#executionresult.detail.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#executionresult.detail.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
    * [.previewcreateprivilege](#executionresult.detail.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#executionresult.detail.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#executionresult.detail.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#executionresult.detail.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#executionresult.detail.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#executionresult.detail.post) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
  * [.full](#executionresult.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#executionresult.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
  * [.many](#executionresult.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#executionresult.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
  * [.previewcreateprivilege](#executionresult.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#executionresult.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#executionresult.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#executionresult.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#executionresult.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#executionresult.post) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>

<a name="executionresult.id"></a>
### executionresult.id : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  

* [.id](#executionresult.id) : <code>object</code>
  * [.delete()](#executionresult.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#executionresult.id.get) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
  * [.put(postParams, [appendprivileges])](#executionresult.id.put) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>

<a name="executionresult.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/{id}

This method is generated

**Kind**: static method of <code>[id](#executionresult.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.executionresult.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="executionresult.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#executionresult.id)</code>  
**Returns**: <code>Promise.&lt;ExecutionResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.id(id).get(appendprivileges).then(function(ExecutionResult) {
	console.log(ExecutionResult)
})
```
<a name="executionresult.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#executionresult.id)</code>  
**Returns**: <code>Promise.&lt;ExecutionResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResult</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.id(id).put(postParams, appendprivileges).then(function(ExecutionResult) {
	console.log(ExecutionResult)
})
```
<a name="executionresult.count"></a>
### executionresult.count : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  
<a name="executionresult.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#executionresult.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.executionresult.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="executionresult.detail"></a>
### executionresult.detail : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  

* [.detail](#executionresult.detail) : <code>object</code>
  * [.id](#executionresult.detail.id) : <code>object</code>
    * [.delete()](#executionresult.detail.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#executionresult.detail.id.get) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
    * [.put(postParams, [appendprivileges])](#executionresult.detail.id.put) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
  * [.count](#executionresult.detail.count) : <code>object</code>
    * [.get([filter])](#executionresult.detail.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#executionresult.detail.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#executionresult.detail.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
  * [.many](#executionresult.detail.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#executionresult.detail.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
  * [.previewcreateprivilege](#executionresult.detail.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#executionresult.detail.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#executionresult.detail.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#executionresult.detail.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#executionresult.detail.get) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#executionresult.detail.post) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>

<a name="executionresult.detail.id"></a>
#### detail.id : <code>object</code>
**Kind**: static namespace of <code>[detail](#executionresult.detail)</code>  

* [.id](#executionresult.detail.id) : <code>object</code>
  * [.delete()](#executionresult.detail.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#executionresult.detail.id.get) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
  * [.put(postParams, [appendprivileges])](#executionresult.detail.id.put) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>

<a name="executionresult.detail.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/{id}

This method is generated

**Kind**: static method of <code>[id](#executionresult.detail.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.executionresult.detail.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="executionresult.detail.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#executionresult.detail.id)</code>  
**Returns**: <code>Promise.&lt;ExecutionResultDetail&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.id(id).get(appendprivileges).then(function(ExecutionResultDetail) {
	console.log(ExecutionResultDetail)
})
```
<a name="executionresult.detail.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#executionresult.detail.id)</code>  
**Returns**: <code>Promise.&lt;ExecutionResultDetail&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResultDetail</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.id(id).put(postParams, appendprivileges).then(function(ExecutionResultDetail) {
	console.log(ExecutionResultDetail)
})
```
<a name="executionresult.detail.count"></a>
#### detail.count : <code>object</code>
**Kind**: static namespace of <code>[detail](#executionresult.detail)</code>  
<a name="executionresult.detail.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#executionresult.detail.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="executionresult.detail.full"></a>
#### detail.full : <code>object</code>
**Kind**: static namespace of <code>[detail](#executionresult.detail)</code>  
<a name="executionresult.detail.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#executionresult.detail.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
	console.log(Array.<ExecutionResultDetail>)
})
```
<a name="executionresult.detail.many"></a>
#### detail.many : <code>object</code>
**Kind**: static namespace of <code>[detail](#executionresult.detail)</code>  
<a name="executionresult.detail.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#executionresult.detail.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ExecutionResultDetail&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.many.post(postParams, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
	console.log(Array.<ExecutionResultDetail>)
})
```
<a name="executionresult.detail.previewcreateprivilege"></a>
#### detail.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[detail](#executionresult.detail)</code>  
<a name="executionresult.detail.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#executionresult.detail.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResultDetail</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.executionresult.detail.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="executionresult.detail.table"></a>
#### detail.table : <code>object</code>
**Kind**: static namespace of <code>[detail](#executionresult.detail)</code>  
<a name="executionresult.detail.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#executionresult.detail.table)</code>  
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
qrsApi.executionresult.detail.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="executionresult.detail.get"></a>
#### detail.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[detail](#executionresult.detail)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResultDetail&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResultDetail>) {
	console.log(Array.<ExecutionResultDetail>)
})
```
<a name="executionresult.detail.post"></a>
#### detail.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResultDetail&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/detail?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[detail](#executionresult.detail)</code>  
**Returns**: <code>Promise.&lt;ExecutionResultDetail&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResultDetail</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.detail.post(postParams, appendprivileges).then(function(ExecutionResultDetail) {
	console.log(ExecutionResultDetail)
})
```
<a name="executionresult.full"></a>
### executionresult.full : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  
<a name="executionresult.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#executionresult.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.full.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
	console.log(Array.<ExecutionResult>)
})
```
<a name="executionresult.many"></a>
### executionresult.many : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  
<a name="executionresult.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#executionresult.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ExecutionResult&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.many.post(postParams, appendprivileges).then(function(Array.<ExecutionResult>) {
	console.log(Array.<ExecutionResult>)
})
```
<a name="executionresult.previewcreateprivilege"></a>
### executionresult.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  
<a name="executionresult.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#executionresult.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResult</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.executionresult.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="executionresult.table"></a>
### executionresult.table : <code>object</code>
**Kind**: static namespace of <code>[executionresult](#executionresult)</code>  
<a name="executionresult.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#executionresult.table)</code>  
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
qrsApi.executionresult.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="executionresult.get"></a>
### executionresult.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[executionresult](#executionresult)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExecutionResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.get(filter, orderby, appendprivileges).then(function(Array.<ExecutionResult>) {
	console.log(Array.<ExecutionResult>)
})
```
<a name="executionresult.post"></a>
### executionresult.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExecutionResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/executionresult?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[executionresult](#executionresult)</code>  
**Returns**: <code>Promise.&lt;ExecutionResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExecutionResult</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.executionresult.post(postParams, appendprivileges).then(function(ExecutionResult) {
	console.log(ExecutionResult)
})
```
