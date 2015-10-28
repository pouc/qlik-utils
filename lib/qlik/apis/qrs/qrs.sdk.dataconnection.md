<a name="dataconnection"></a>
## dataconnection : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [dataconnection](#dataconnection) : <code>object</code>
  * [.id](#dataconnection.id) : <code>object</code>
    * [.delete()](#dataconnection.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#dataconnection.id.get) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
    * [.put(postParams, [appendprivileges])](#dataconnection.id.put) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
  * [.count](#dataconnection.count) : <code>object</code>
    * [.get([filter])](#dataconnection.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#dataconnection.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#dataconnection.full.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
  * [.many](#dataconnection.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#dataconnection.many.post) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
  * [.previewcreateprivilege](#dataconnection.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#dataconnection.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#dataconnection.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#dataconnection.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#dataconnection.get) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#dataconnection.post) ⇒ <code>Promise.&lt;DataConnection&gt;</code>

<a name="dataconnection.id"></a>
### dataconnection.id : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#dataconnection)</code>  

* [.id](#dataconnection.id) : <code>object</code>
  * [.delete()](#dataconnection.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#dataconnection.id.get) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
  * [.put(postParams, [appendprivileges])](#dataconnection.id.put) ⇒ <code>Promise.&lt;DataConnection&gt;</code>

<a name="dataconnection.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/{id}

This method is generated

**Kind**: static method of <code>[id](#dataconnection.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.dataconnection.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="dataconnection.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#dataconnection.id)</code>  
**Returns**: <code>Promise.&lt;DataConnection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.dataconnection.id(id).get(appendprivileges).then(function(DataConnection) {
	console.log(DataConnection)
})
```
<a name="dataconnection.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#dataconnection.id)</code>  
**Returns**: <code>Promise.&lt;DataConnection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>DataConnection</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.dataconnection.id(id).put(postParams, appendprivileges).then(function(DataConnection) {
	console.log(DataConnection)
})
```
<a name="dataconnection.count"></a>
### dataconnection.count : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#dataconnection)</code>  
<a name="dataconnection.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#dataconnection.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.dataconnection.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="dataconnection.full"></a>
### dataconnection.full : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#dataconnection)</code>  
<a name="dataconnection.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#dataconnection.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.dataconnection.full.get(filter, orderby, appendprivileges).then(function(Array.<DataConnection>) {
	console.log(Array.<DataConnection>)
})
```
<a name="dataconnection.many"></a>
### dataconnection.many : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#dataconnection)</code>  
<a name="dataconnection.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#dataconnection.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;DataConnection&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.dataconnection.many.post(postParams, appendprivileges).then(function(Array.<DataConnection>) {
	console.log(Array.<DataConnection>)
})
```
<a name="dataconnection.previewcreateprivilege"></a>
### dataconnection.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#dataconnection)</code>  
<a name="dataconnection.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#dataconnection.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>DataConnection</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.dataconnection.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="dataconnection.table"></a>
### dataconnection.table : <code>object</code>
**Kind**: static namespace of <code>[dataconnection](#dataconnection)</code>  
<a name="dataconnection.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#dataconnection.table)</code>  
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
qrsApi.dataconnection.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="dataconnection.get"></a>
### dataconnection.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[dataconnection](#dataconnection)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;DataConnection&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.dataconnection.get(filter, orderby, appendprivileges).then(function(Array.<DataConnection>) {
	console.log(Array.<DataConnection>)
})
```
<a name="dataconnection.post"></a>
### dataconnection.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;DataConnection&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/dataconnection?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[dataconnection](#dataconnection)</code>  
**Returns**: <code>Promise.&lt;DataConnection&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>DataConnection</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.dataconnection.post(postParams, appendprivileges).then(function(DataConnection) {
	console.log(DataConnection)
})
```
