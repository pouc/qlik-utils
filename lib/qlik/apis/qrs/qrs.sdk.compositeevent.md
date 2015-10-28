<a name="compositeevent"></a>
## compositeevent : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [compositeevent](#compositeevent) : <code>object</code>
  * [.id](#compositeevent.id) : <code>object</code>
    * [.delete()](#compositeevent.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#compositeevent.id.get) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
    * [.put(postParams, [appendprivileges])](#compositeevent.id.put) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
  * [.count](#compositeevent.count) : <code>object</code>
    * [.get([filter])](#compositeevent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#compositeevent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#compositeevent.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
  * [.many](#compositeevent.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#compositeevent.many.post) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
  * [.previewcreateprivilege](#compositeevent.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#compositeevent.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#compositeevent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#compositeevent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#compositeevent.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#compositeevent.post) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>

<a name="compositeevent.id"></a>
### compositeevent.id : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#compositeevent)</code>  

* [.id](#compositeevent.id) : <code>object</code>
  * [.delete()](#compositeevent.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#compositeevent.id.get) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
  * [.put(postParams, [appendprivileges])](#compositeevent.id.put) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>

<a name="compositeevent.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/{id}
This method is generated

**Kind**: static method of <code>[id](#compositeevent.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.compositeevent.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="compositeevent.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#compositeevent.id)</code>  
**Returns**: <code>Promise.&lt;CompositeEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeevent.id(id).get(appendprivileges).then(function(CompositeEvent) {
	console.log(CompositeEvent)
})
```
<a name="compositeevent.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#compositeevent.id)</code>  
**Returns**: <code>Promise.&lt;CompositeEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEvent</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeevent.id(id).put(postParams, appendprivileges).then(function(CompositeEvent) {
	console.log(CompositeEvent)
})
```
<a name="compositeevent.count"></a>
### compositeevent.count : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#compositeevent)</code>  
<a name="compositeevent.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#compositeevent.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.compositeevent.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="compositeevent.full"></a>
### compositeevent.full : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#compositeevent)</code>  
<a name="compositeevent.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#compositeevent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeevent.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
	console.log(Array.<CompositeEvent>)
})
```
<a name="compositeevent.many"></a>
### compositeevent.many : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#compositeevent)</code>  
<a name="compositeevent.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#compositeevent.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;CompositeEvent&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeevent.many.post(postParams, appendprivileges).then(function(Array.<CompositeEvent>) {
	console.log(Array.<CompositeEvent>)
})
```
<a name="compositeevent.previewcreateprivilege"></a>
### compositeevent.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#compositeevent)</code>  
<a name="compositeevent.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#compositeevent.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEvent</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.compositeevent.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="compositeevent.table"></a>
### compositeevent.table : <code>object</code>
**Kind**: static namespace of <code>[compositeevent](#compositeevent)</code>  
<a name="compositeevent.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#compositeevent.table)</code>  
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
qrsApi.compositeevent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="compositeevent.get"></a>
### compositeevent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[compositeevent](#compositeevent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeevent.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEvent>) {
	console.log(Array.<CompositeEvent>)
})
```
<a name="compositeevent.post"></a>
### compositeevent.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEvent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/compositeevent?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[compositeevent](#compositeevent)</code>  
**Returns**: <code>Promise.&lt;CompositeEvent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEvent</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeevent.post(postParams, appendprivileges).then(function(CompositeEvent) {
	console.log(CompositeEvent)
})
```
