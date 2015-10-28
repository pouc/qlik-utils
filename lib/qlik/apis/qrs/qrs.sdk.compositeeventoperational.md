<a name="compositeeventoperational"></a>
## compositeeventoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [compositeeventoperational](#compositeeventoperational) : <code>object</code>
  * [.id](#compositeeventoperational.id) : <code>object</code>
    * [.delete()](#compositeeventoperational.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#compositeeventoperational.id.get) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
    * [.put(postParams, [appendprivileges])](#compositeeventoperational.id.put) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
  * [.count](#compositeeventoperational.count) : <code>object</code>
    * [.get([filter])](#compositeeventoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#compositeeventoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#compositeeventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
  * [.many](#compositeeventoperational.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#compositeeventoperational.many.post) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
  * [.previewcreateprivilege](#compositeeventoperational.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#compositeeventoperational.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#compositeeventoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#compositeeventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#compositeeventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#compositeeventoperational.post) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>

<a name="compositeeventoperational.id"></a>
### compositeeventoperational.id : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#compositeeventoperational)</code>  

* [.id](#compositeeventoperational.id) : <code>object</code>
  * [.delete()](#compositeeventoperational.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#compositeeventoperational.id.get) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
  * [.put(postParams, [appendprivileges])](#compositeeventoperational.id.put) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>

<a name="compositeeventoperational.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/{id}

This method is generated

**Kind**: static method of <code>[id](#compositeeventoperational.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.compositeeventoperational.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="compositeeventoperational.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#compositeeventoperational.id)</code>  
**Returns**: <code>Promise.&lt;CompositeEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.id(id).get(appendprivileges).then(function(CompositeEventOperational) {
	console.log(CompositeEventOperational)
})
```
<a name="compositeeventoperational.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#compositeeventoperational.id)</code>  
**Returns**: <code>Promise.&lt;CompositeEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.id(id).put(postParams, appendprivileges).then(function(CompositeEventOperational) {
	console.log(CompositeEventOperational)
})
```
<a name="compositeeventoperational.count"></a>
### compositeeventoperational.count : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#compositeeventoperational)</code>  
<a name="compositeeventoperational.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#compositeeventoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="compositeeventoperational.full"></a>
### compositeeventoperational.full : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#compositeeventoperational)</code>  
<a name="compositeeventoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#compositeeventoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
	console.log(Array.<CompositeEventOperational>)
})
```
<a name="compositeeventoperational.many"></a>
### compositeeventoperational.many : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#compositeeventoperational)</code>  
<a name="compositeeventoperational.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#compositeeventoperational.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;CompositeEventOperational&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.many.post(postParams, appendprivileges).then(function(Array.<CompositeEventOperational>) {
	console.log(Array.<CompositeEventOperational>)
})
```
<a name="compositeeventoperational.previewcreateprivilege"></a>
### compositeeventoperational.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#compositeeventoperational)</code>  
<a name="compositeeventoperational.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#compositeeventoperational.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventOperational</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.compositeeventoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="compositeeventoperational.table"></a>
### compositeeventoperational.table : <code>object</code>
**Kind**: static namespace of <code>[compositeeventoperational](#compositeeventoperational)</code>  
<a name="compositeeventoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#compositeeventoperational.table)</code>  
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
qrsApi.compositeeventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="compositeeventoperational.get"></a>
### compositeeventoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeeventoperational](#compositeeventoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventOperational>) {
	console.log(Array.<CompositeEventOperational>)
})
```
<a name="compositeeventoperational.post"></a>
### compositeeventoperational.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventoperational?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeeventoperational](#compositeeventoperational)</code>  
**Returns**: <code>Promise.&lt;CompositeEventOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventoperational.post(postParams, appendprivileges).then(function(CompositeEventOperational) {
	console.log(CompositeEventOperational)
})
```
