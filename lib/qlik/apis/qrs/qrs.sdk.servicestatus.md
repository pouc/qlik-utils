<a name="servicestatus"></a>
## servicestatus : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [servicestatus](#servicestatus) : <code>object</code>
  * [.id](#servicestatus.id) : <code>object</code>
    * [.get([appendprivileges])](#servicestatus.id.get) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
  * [.count](#servicestatus.count) : <code>object</code>
    * [.get([filter])](#servicestatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#servicestatus.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#servicestatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
  * [.table](#servicestatus.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#servicestatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#servicestatus.get) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>

<a name="servicestatus.id"></a>
### servicestatus.id : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#servicestatus)</code>  
<a name="servicestatus.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ServiceStatus&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/servicestatus/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#servicestatus.id)</code>  
**Returns**: <code>Promise.&lt;ServiceStatus&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servicestatus.id(id).get(appendprivileges).then(function(ServiceStatus) {
	console.log(ServiceStatus)
})
```
<a name="servicestatus.count"></a>
### servicestatus.count : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#servicestatus)</code>  
<a name="servicestatus.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/servicestatus/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#servicestatus.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.servicestatus.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="servicestatus.full"></a>
### servicestatus.full : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#servicestatus)</code>  
<a name="servicestatus.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/servicestatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#servicestatus.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servicestatus.full.get(filter, orderby, appendprivileges).then(function(Array.<ServiceStatus>) {
	console.log(Array.<ServiceStatus>)
})
```
<a name="servicestatus.table"></a>
### servicestatus.table : <code>object</code>
**Kind**: static namespace of <code>[servicestatus](#servicestatus)</code>  
<a name="servicestatus.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/servicestatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#servicestatus.table)</code>  
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
qrsApi.servicestatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="servicestatus.get"></a>
### servicestatus.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/servicestatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[servicestatus](#servicestatus)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServiceStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servicestatus.get(filter, orderby, appendprivileges).then(function(Array.<ServiceStatus>) {
	console.log(Array.<ServiceStatus>)
})
```
