<a name="stream"></a>
## stream : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [stream](#stream) : <code>object</code>
  * [.id](#stream.id) : <code>object</code>
    * [.delete()](#stream.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#stream.id.get) ⇒ <code>Promise.&lt;Stream&gt;</code>
    * [.put(postParams, [appendprivileges])](#stream.id.put) ⇒ <code>Promise.&lt;Stream&gt;</code>
  * [.count](#stream.count) : <code>object</code>
    * [.get([filter])](#stream.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#stream.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#stream.full.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
  * [.many](#stream.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#stream.many.post) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
  * [.previewcreateprivilege](#stream.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#stream.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#stream.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#stream.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#stream.get) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#stream.post) ⇒ <code>Promise.&lt;Stream&gt;</code>

<a name="stream.id"></a>
### stream.id : <code>object</code>
**Kind**: static namespace of <code>[stream](#stream)</code>  

* [.id](#stream.id) : <code>object</code>
  * [.delete()](#stream.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#stream.id.get) ⇒ <code>Promise.&lt;Stream&gt;</code>
  * [.put(postParams, [appendprivileges])](#stream.id.put) ⇒ <code>Promise.&lt;Stream&gt;</code>

<a name="stream.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/{id}
This method is generated

**Kind**: static method of <code>[id](#stream.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.stream.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="stream.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;Stream&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#stream.id)</code>  
**Returns**: <code>Promise.&lt;Stream&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.stream.id(id).get(appendprivileges).then(function(Stream) {
	console.log(Stream)
})
```
<a name="stream.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Stream&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#stream.id)</code>  
**Returns**: <code>Promise.&lt;Stream&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Stream</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.stream.id(id).put(postParams, appendprivileges).then(function(Stream) {
	console.log(Stream)
})
```
<a name="stream.count"></a>
### stream.count : <code>object</code>
**Kind**: static namespace of <code>[stream](#stream)</code>  
<a name="stream.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#stream.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.stream.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="stream.full"></a>
### stream.full : <code>object</code>
**Kind**: static namespace of <code>[stream](#stream)</code>  
<a name="stream.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#stream.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.stream.full.get(filter, orderby, appendprivileges).then(function(Array.<Stream>) {
	console.log(Array.<Stream>)
})
```
<a name="stream.many"></a>
### stream.many : <code>object</code>
**Kind**: static namespace of <code>[stream](#stream)</code>  
<a name="stream.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#stream.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;Stream&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.stream.many.post(postParams, appendprivileges).then(function(Array.<Stream>) {
	console.log(Array.<Stream>)
})
```
<a name="stream.previewcreateprivilege"></a>
### stream.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[stream](#stream)</code>  
<a name="stream.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#stream.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Stream</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.stream.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="stream.table"></a>
### stream.table : <code>object</code>
**Kind**: static namespace of <code>[stream](#stream)</code>  
<a name="stream.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#stream.table)</code>  
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
qrsApi.stream.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="stream.get"></a>
### stream.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[stream](#stream)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Stream&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.stream.get(filter, orderby, appendprivileges).then(function(Array.<Stream>) {
	console.log(Array.<Stream>)
})
```
<a name="stream.post"></a>
### stream.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Stream&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/stream?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[stream](#stream)</code>  
**Returns**: <code>Promise.&lt;Stream&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Stream</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.stream.post(postParams, appendprivileges).then(function(Stream) {
	console.log(Stream)
})
```
