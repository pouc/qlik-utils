<a name="schemaevent"></a>
## schemaevent : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [schemaevent](#schemaevent) : <code>object</code>
  * [.id](#schemaevent.id) : <code>object</code>
    * [.delete()](#schemaevent.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#schemaevent.id.get) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
    * [.put(postParams, [appendprivileges])](#schemaevent.id.put) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
  * [.count](#schemaevent.count) : <code>object</code>
    * [.get([filter])](#schemaevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#schemaevent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#schemaevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
  * [.many](#schemaevent.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#schemaevent.many.post) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
  * [.previewcreateprivilege](#schemaevent.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#schemaevent.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#schemaevent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#schemaevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#schemaevent.get) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#schemaevent.post) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>

<a name="schemaevent.id"></a>
### schemaevent.id : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#schemaevent)</code>  

* [.id](#schemaevent.id) : <code>object</code>
  * [.delete()](#schemaevent.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#schemaevent.id.get) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
  * [.put(postParams, [appendprivileges])](#schemaevent.id.put) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>

<a name="schemaevent.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/{id}

This method is generated

**Kind**: static method of <code>[id](#schemaevent.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.schemaevent.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="schemaevent.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#schemaevent.id)</code>  
**Returns**: <code>Promise.&lt;SchemaEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaevent.id(id).get(appendprivileges).then(function(SchemaEvent) {
	console.log(SchemaEvent)
})
```
<a name="schemaevent.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#schemaevent.id)</code>  
**Returns**: <code>Promise.&lt;SchemaEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEvent</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaevent.id(id).put(postParams, appendprivileges).then(function(SchemaEvent) {
	console.log(SchemaEvent)
})
```
<a name="schemaevent.count"></a>
### schemaevent.count : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#schemaevent)</code>  
<a name="schemaevent.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#schemaevent.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.schemaevent.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="schemaevent.full"></a>
### schemaevent.full : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#schemaevent)</code>  
<a name="schemaevent.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#schemaevent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaevent.full.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
	console.log(Array.<SchemaEvent>)
})
```
<a name="schemaevent.many"></a>
### schemaevent.many : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#schemaevent)</code>  
<a name="schemaevent.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#schemaevent.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;SchemaEvent&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaevent.many.post(postParams, appendprivileges).then(function(Array.<SchemaEvent>) {
	console.log(Array.<SchemaEvent>)
})
```
<a name="schemaevent.previewcreateprivilege"></a>
### schemaevent.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#schemaevent)</code>  
<a name="schemaevent.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#schemaevent.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEvent</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.schemaevent.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="schemaevent.table"></a>
### schemaevent.table : <code>object</code>
**Kind**: static namespace of <code>[schemaevent](#schemaevent)</code>  
<a name="schemaevent.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#schemaevent.table)</code>  
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
qrsApi.schemaevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="schemaevent.get"></a>
### schemaevent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[schemaevent](#schemaevent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchemaEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaevent.get(filter, orderby, appendprivileges).then(function(Array.<SchemaEvent>) {
	console.log(Array.<SchemaEvent>)
})
```
<a name="schemaevent.post"></a>
### schemaevent.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchemaEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schemaevent?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[schemaevent](#schemaevent)</code>  
**Returns**: <code>Promise.&lt;SchemaEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchemaEvent</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schemaevent.post(postParams, appendprivileges).then(function(SchemaEvent) {
	console.log(SchemaEvent)
})
```
