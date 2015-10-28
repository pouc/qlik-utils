<a name="externalprogramtask"></a>
## externalprogramtask : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [externalprogramtask](#externalprogramtask) : <code>object</code>
  * [.id](#externalprogramtask.id) : <code>object</code>
    * [.delete()](#externalprogramtask.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#externalprogramtask.id.get) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
    * [.put(postParams, [appendprivileges])](#externalprogramtask.id.put) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
  * [.count](#externalprogramtask.count) : <code>object</code>
    * [.get([filter])](#externalprogramtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#externalprogramtask.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#externalprogramtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
  * [.many](#externalprogramtask.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#externalprogramtask.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
  * [.previewcreateprivilege](#externalprogramtask.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#externalprogramtask.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#externalprogramtask.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#externalprogramtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#externalprogramtask.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#externalprogramtask.post) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>

<a name="externalprogramtask.id"></a>
### externalprogramtask.id : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#externalprogramtask)</code>  

* [.id](#externalprogramtask.id) : <code>object</code>
  * [.delete()](#externalprogramtask.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#externalprogramtask.id.get) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
  * [.put(postParams, [appendprivileges])](#externalprogramtask.id.put) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>

<a name="externalprogramtask.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/{id}
This method is generated

**Kind**: static method of <code>[id](#externalprogramtask.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.externalprogramtask.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="externalprogramtask.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#externalprogramtask.id)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.id(id).get(appendprivileges).then(function(ExternalProgramTask) {
	console.log(ExternalProgramTask)
})
```
<a name="externalprogramtask.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#externalprogramtask.id)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.id(id).put(postParams, appendprivileges).then(function(ExternalProgramTask) {
	console.log(ExternalProgramTask)
})
```
<a name="externalprogramtask.count"></a>
### externalprogramtask.count : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#externalprogramtask)</code>  
<a name="externalprogramtask.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#externalprogramtask.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="externalprogramtask.full"></a>
### externalprogramtask.full : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#externalprogramtask)</code>  
<a name="externalprogramtask.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#externalprogramtask.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
	console.log(Array.<ExternalProgramTask>)
})
```
<a name="externalprogramtask.many"></a>
### externalprogramtask.many : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#externalprogramtask)</code>  
<a name="externalprogramtask.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#externalprogramtask.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ExternalProgramTask&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.many.post(postParams, appendprivileges).then(function(Array.<ExternalProgramTask>) {
	console.log(Array.<ExternalProgramTask>)
})
```
<a name="externalprogramtask.previewcreateprivilege"></a>
### externalprogramtask.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#externalprogramtask)</code>  
<a name="externalprogramtask.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#externalprogramtask.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTask</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.externalprogramtask.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="externalprogramtask.table"></a>
### externalprogramtask.table : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtask](#externalprogramtask)</code>  
<a name="externalprogramtask.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#externalprogramtask.table)</code>  
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
qrsApi.externalprogramtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="externalprogramtask.get"></a>
### externalprogramtask.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[externalprogramtask](#externalprogramtask)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTask>) {
	console.log(Array.<ExternalProgramTask>)
})
```
<a name="externalprogramtask.post"></a>
### externalprogramtask.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/externalprogramtask?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[externalprogramtask](#externalprogramtask)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtask.post(postParams, appendprivileges).then(function(ExternalProgramTask) {
	console.log(ExternalProgramTask)
})
```
