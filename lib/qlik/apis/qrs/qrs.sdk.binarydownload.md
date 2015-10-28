<a name="binarydownload"></a>
## binarydownload : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [binarydownload](#binarydownload) : <code>object</code>
  * [.id](#binarydownload.id) : <code>object</code>
    * [.get([appendprivileges])](#binarydownload.id.get) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
  * [.count](#binarydownload.count) : <code>object</code>
    * [.get([filter])](#binarydownload.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#binarydownload.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#binarydownload.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
  * [.table](#binarydownload.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#binarydownload.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#binarydownload.get) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>

<a name="binarydownload.id"></a>
### binarydownload.id : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#binarydownload)</code>  
<a name="binarydownload.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;BinaryDownload&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydownload/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#binarydownload.id)</code>  
**Returns**: <code>Promise.&lt;BinaryDownload&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarydownload.id(id).get(appendprivileges).then(function(BinaryDownload) {
	console.log(BinaryDownload)
})
```
<a name="binarydownload.count"></a>
### binarydownload.count : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#binarydownload)</code>  
<a name="binarydownload.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydownload/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#binarydownload.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.binarydownload.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="binarydownload.full"></a>
### binarydownload.full : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#binarydownload)</code>  
<a name="binarydownload.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydownload/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#binarydownload.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarydownload.full.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDownload>) {
	console.log(Array.<BinaryDownload>)
})
```
<a name="binarydownload.table"></a>
### binarydownload.table : <code>object</code>
**Kind**: static namespace of <code>[binarydownload](#binarydownload)</code>  
<a name="binarydownload.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydownload/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#binarydownload.table)</code>  
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
qrsApi.binarydownload.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="binarydownload.get"></a>
### binarydownload.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/binarydownload?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[binarydownload](#binarydownload)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinaryDownload&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarydownload.get(filter, orderby, appendprivileges).then(function(Array.<BinaryDownload>) {
	console.log(Array.<BinaryDownload>)
})
```
