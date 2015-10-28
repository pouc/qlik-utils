<a name="schemaeventoperational"></a>
## schemaeventoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [schemaeventoperational](#schemaeventoperational) : <code>object</code>
  * [.id](#schemaeventoperational.id) : <code>object</code>
    * [.delete()](#schemaeventoperational.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#schemaeventoperational.id.get) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
    * [.put(postParams, [appendprivileges])](#schemaeventoperational.id.put) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
  * [.count](#schemaeventoperational.count) : <code>object</code>
    * [.get([filter])](#schemaeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#schemaeventoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#schemaeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
  * [.many](#schemaeventoperational.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#schemaeventoperational.many.post) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
  * [.previewcreateprivilege](#schemaeventoperational.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#schemaeventoperational.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#schemaeventoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#schemaeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#schemaeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#schemaeventoperational.post) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>

<a name="schemaeventoperational.id"></a>
### schemaeventoperational.id : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#schemaeventoperational)</code>  

* [.id](#schemaeventoperational.id) : <code>object</code>
  * [.delete()](#schemaeventoperational.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#schemaeventoperational.id.get) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
  * [.put(postParams, [appendprivileges])](#schemaeventoperational.id.put) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>

<a name="schemaeventoperational.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/{id}
This method is generated

**Kind**: static method of <code>[id](#schemaeventoperational.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.schemaeventoperational.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="schemaeventoperational.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#schemaeventoperational.id)</code>  
**Returns**: <code>Promise.&lt;SchemaEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.id(id).get(appendprivileges).then(function(SchemaEventOperational) {
	console.log(SchemaEventOperational)
})
```
<a name="schemaeventoperational.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#schemaeventoperational.id)</code>  
**Returns**: <code>Promise.&lt;SchemaEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEventOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.id(id).put(postParams, appendprivileges).then(function(SchemaEventOperational) {
	console.log(SchemaEventOperational)
})
```
<a name="schemaeventoperational.count"></a>
### schemaeventoperational.count : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#schemaeventoperational)</code>  
<a name="schemaeventoperational.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#schemaeventoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="schemaeventoperational.full"></a>
### schemaeventoperational.full : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#schemaeventoperational)</code>  
<a name="schemaeventoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#schemaeventoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEventOperational>) {
	console.log(Array.<SchemaEventOperational>)
})
```
<a name="schemaeventoperational.many"></a>
### schemaeventoperational.many : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#schemaeventoperational)</code>  
<a name="schemaeventoperational.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#schemaeventoperational.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;SchemaEventOperational&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.many.post(postParams, appendprivileges).then(function(Array.<SchemaEventOperational>) {
	console.log(Array.<SchemaEventOperational>)
})
```
<a name="schemaeventoperational.previewcreateprivilege"></a>
### schemaeventoperational.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#schemaeventoperational)</code>  
<a name="schemaeventoperational.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#schemaeventoperational.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEventOperational</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.schemaeventoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="schemaeventoperational.table"></a>
### schemaeventoperational.table : <code>object</code>
**Kind**: static namespace of <code>[schemaeventoperational](#schemaeventoperational)</code>  
<a name="schemaeventoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#schemaeventoperational.table)</code>  
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
qrsApi.schemaeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="schemaeventoperational.get"></a>
### schemaeventoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[schemaeventoperational](#schemaeventoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEventOperational>) {
	console.log(Array.<SchemaEventOperational>)
})
```
<a name="schemaeventoperational.post"></a>
### schemaeventoperational.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchemaEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/schemaeventoperational?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[schemaeventoperational](#schemaeventoperational)</code>  
**Returns**: <code>Promise.&lt;SchemaEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEventOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaeventoperational.post(postParams, appendprivileges).then(function(SchemaEventOperational) {
	console.log(SchemaEventOperational)
})
```
