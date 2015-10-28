<a name="binarydelete"></a>
## binarydelete : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [binarydelete](#binarydelete) : <code>object</code>
  * [.id](#binarydelete.id) : <code>object</code>
    * [.get([appendprivileges])](#binarydelete.id.get) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
  * [.count](#binarydelete.count) : <code>object</code>
    * [.get([filter])](#binarydelete.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#binarydelete.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#binarydelete.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
  * [.table](#binarydelete.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#binarydelete.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#binarydelete.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>

<a name="binarydelete.id"></a>
### binarydelete.id : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#binarydelete)</code>  
<a name="binarydelete.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;BinaryDelete&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydelete/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#binarydelete.id)</code>  
**Returns**: <code>Promise.&lt;BinaryDelete&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarydelete.id(id).get(appendprivileges).then(function(BinaryDelete) {
	console.log(BinaryDelete)
})
```
<a name="binarydelete.count"></a>
### binarydelete.count : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#binarydelete)</code>  
<a name="binarydelete.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydelete/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#binarydelete.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.binarydelete.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="binarydelete.full"></a>
### binarydelete.full : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#binarydelete)</code>  
<a name="binarydelete.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydelete/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#binarydelete.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarydelete.full.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDelete>) {
	console.log(Array.<BinaryDelete>)
})
```
<a name="binarydelete.table"></a>
### binarydelete.table : <code>object</code>
**Kind**: static namespace of <code>[binarydelete](#binarydelete)</code>  
<a name="binarydelete.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydelete/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#binarydelete.table)</code>  
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
qrsApi.binarydelete.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="binarydelete.get"></a>
### binarydelete.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydelete?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[binarydelete](#binarydelete)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDelete&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarydelete.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDelete>) {
	console.log(Array.<BinaryDelete>)
})
```
