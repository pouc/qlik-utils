<a name="reloadtask"></a>
## reloadtask : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [reloadtask](#reloadtask) : <code>object</code>
  * [.id](#reloadtask.id) : <code>object</code>
    * [.delete()](#reloadtask.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#reloadtask.id.get) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
    * [.put(postParams, [appendprivileges])](#reloadtask.id.put) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
  * [.reloadtaskid](#reloadtask.reloadtaskid) : <code>object</code>
    * [.scriptlog](#reloadtask.reloadtaskid.scriptlog) : <code>object</code>
      * [.get([filereferenceid])](#reloadtask.reloadtaskid.scriptlog.get) ⇒ <code>Promise.&lt;Guid&gt;</code>
  * [.count](#reloadtask.count) : <code>object</code>
    * [.get([filter])](#reloadtask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.create](#reloadtask.create) : <code>object</code>
    * [.post(postParams)](#reloadtask.create.post) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
  * [.full](#reloadtask.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#reloadtask.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
  * [.many](#reloadtask.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#reloadtask.many.post) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
  * [.previewcreateprivilege](#reloadtask.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#reloadtask.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#reloadtask.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#reloadtask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.update](#reloadtask.update) : <code>object</code>
    * [.post(postParams)](#reloadtask.update.post) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#reloadtask.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#reloadtask.post) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>

<a name="reloadtask.id"></a>
### reloadtask.id : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  

* [.id](#reloadtask.id) : <code>object</code>
  * [.delete()](#reloadtask.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#reloadtask.id.get) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
  * [.put(postParams, [appendprivileges])](#reloadtask.id.put) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>

<a name="reloadtask.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{id}
This method is generated

**Kind**: static method of <code>[id](#reloadtask.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.reloadtask.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="reloadtask.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#reloadtask.id)</code>  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtask.id(id).get(appendprivileges).then(function(ReloadTask) {
	console.log(ReloadTask)
})
```
<a name="reloadtask.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#reloadtask.id)</code>  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtask.id(id).put(postParams, appendprivileges).then(function(ReloadTask) {
	console.log(ReloadTask)
})
```
<a name="reloadtask.reloadtaskid"></a>
### reloadtask.reloadtaskid : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  

* [.reloadtaskid](#reloadtask.reloadtaskid) : <code>object</code>
  * [.scriptlog](#reloadtask.reloadtaskid.scriptlog) : <code>object</code>
    * [.get([filereferenceid])](#reloadtask.reloadtaskid.scriptlog.get) ⇒ <code>Promise.&lt;Guid&gt;</code>

<a name="reloadtask.reloadtaskid.scriptlog"></a>
#### reloadtaskid.scriptlog : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskid](#reloadtask.reloadtaskid)</code>  
<a name="reloadtask.reloadtaskid.scriptlog.get"></a>
##### scriptlog.get([filereferenceid]) ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/{reloadtaskid}/scriptlog?filereferenceid={filereferenceid}
This method is manual

**Kind**: static method of <code>[scriptlog](#reloadtask.reloadtaskid.scriptlog)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filereferenceid] | <code>string</code> | the filereferenceid parameter |

**Example**  
```javascript
qrsApi.reloadtask.reloadtaskid(reloadtaskid).scriptlog.get(filereferenceid).then(function(Guid) {
	console.log(Guid)
})
```
<a name="reloadtask.count"></a>
### reloadtask.count : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#reloadtask.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.reloadtask.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="reloadtask.create"></a>
### reloadtask.create : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.create.post"></a>
#### create.post(postParams) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/create
This method is manual

**Kind**: static method of <code>[create](#reloadtask.create)</code>  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTaskBundle</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.reloadtask.create.post(postParams).then(function(ReloadTask) {
	console.log(ReloadTask)
})
```
<a name="reloadtask.full"></a>
### reloadtask.full : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#reloadtask.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtask.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
	console.log(Array.<ReloadTask>)
})
```
<a name="reloadtask.many"></a>
### reloadtask.many : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#reloadtask.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ReloadTask&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtask.many.post(postParams, appendprivileges).then(function(Array.<ReloadTask>) {
	console.log(Array.<ReloadTask>)
})
```
<a name="reloadtask.previewcreateprivilege"></a>
### reloadtask.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#reloadtask.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTask</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.reloadtask.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="reloadtask.table"></a>
### reloadtask.table : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#reloadtask.table)</code>  
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
qrsApi.reloadtask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="reloadtask.update"></a>
### reloadtask.update : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#reloadtask)</code>  
<a name="reloadtask.update.post"></a>
#### update.post(postParams) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask/update
This method is manual

**Kind**: static method of <code>[update](#reloadtask.update)</code>  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTaskChange</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.reloadtask.update.post(postParams).then(function(ReloadTask) {
	console.log(ReloadTask)
})
```
<a name="reloadtask.get"></a>
### reloadtask.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[reloadtask](#reloadtask)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtask.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTask>) {
	console.log(Array.<ReloadTask>)
})
```
<a name="reloadtask.post"></a>
### reloadtask.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ReloadTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/reloadtask?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[reloadtask](#reloadtask)</code>  
**Returns**: <code>Promise.&lt;ReloadTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtask.post(postParams, appendprivileges).then(function(ReloadTask) {
	console.log(ReloadTask)
})
```
