<a name="task"></a>
## task : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [task](#task) : <code>object</code>
  * [.id](#task.id) : <code>object</code>
    * [.start](#task.id.start) : <code>object</code>
      * [.synchronous](#task.id.start.synchronous) : <code>object</code>
        * [.post()](#task.id.start.synchronous.post) ⇒ <code>Promise.&lt;Guid&gt;</code>
      * [.post()](#task.id.start.post) ⇒ <code>Promise</code>
    * [.stop](#task.id.stop) : <code>object</code>
      * [.post()](#task.id.stop.post) ⇒ <code>Promise</code>
  * [.full](#task.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#task.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
  * [.start](#task.start) : <code>object</code>
    * [.many](#task.start.many) : <code>object</code>
      * [.post(postParams)](#task.start.many.post) ⇒ <code>Promise</code>
    * [.synchronous](#task.start.synchronous) : <code>object</code>
      * [.post([name])](#task.start.synchronous.post) ⇒ <code>Promise.&lt;Guid&gt;</code>
    * [.post([name])](#task.start.post) ⇒ <code>Promise</code>
  * [.stop](#task.stop) : <code>object</code>
    * [.many](#task.stop.many) : <code>object</code>
      * [.post(postParams)](#task.stop.many.post) ⇒ <code>Promise</code>
  * [.table](#task.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#task.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#task.get) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>

<a name="task.id"></a>
### task.id : <code>object</code>
**Kind**: static namespace of <code>[task](#task)</code>  

* [.id](#task.id) : <code>object</code>
  * [.start](#task.id.start) : <code>object</code>
    * [.synchronous](#task.id.start.synchronous) : <code>object</code>
      * [.post()](#task.id.start.synchronous.post) ⇒ <code>Promise.&lt;Guid&gt;</code>
    * [.post()](#task.id.start.post) ⇒ <code>Promise</code>
  * [.stop](#task.id.stop) : <code>object</code>
    * [.post()](#task.id.stop.post) ⇒ <code>Promise</code>

<a name="task.id.start"></a>
#### id.start : <code>object</code>
**Kind**: static namespace of <code>[id](#task.id)</code>  

* [.start](#task.id.start) : <code>object</code>
  * [.synchronous](#task.id.start.synchronous) : <code>object</code>
    * [.post()](#task.id.start.synchronous.post) ⇒ <code>Promise.&lt;Guid&gt;</code>
  * [.post()](#task.id.start.post) ⇒ <code>Promise</code>

<a name="task.id.start.synchronous"></a>
##### start.synchronous : <code>object</code>
**Kind**: static namespace of <code>[start](#task.id.start)</code>  
<a name="task.id.start.synchronous.post"></a>
###### synchronous.post() ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/{id}/start/synchronous
This method is manual

**Kind**: static method of <code>[synchronous](#task.id.start.synchronous)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.task.id(id).start.synchronous.post().then(function(Guid) {
	console.log(Guid)
})
```
<a name="task.id.start.post"></a>
##### start.post() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/{id}/start
This method is manual

**Kind**: static method of <code>[start](#task.id.start)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.task.id(id).start.post().then(function() {
	console.log('done')
})
```
<a name="task.id.stop"></a>
#### id.stop : <code>object</code>
**Kind**: static namespace of <code>[id](#task.id)</code>  
<a name="task.id.stop.post"></a>
##### stop.post() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/{id}/stop
This method is manual

**Kind**: static method of <code>[stop](#task.id.stop)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.task.id(id).stop.post().then(function() {
	console.log('done')
})
```
<a name="task.full"></a>
### task.full : <code>object</code>
**Kind**: static namespace of <code>[task](#task)</code>  
<a name="task.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#task.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.task.full.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
	console.log(Array.<ITask>)
})
```
<a name="task.start"></a>
### task.start : <code>object</code>
**Kind**: static namespace of <code>[task](#task)</code>  

* [.start](#task.start) : <code>object</code>
  * [.many](#task.start.many) : <code>object</code>
    * [.post(postParams)](#task.start.many.post) ⇒ <code>Promise</code>
  * [.synchronous](#task.start.synchronous) : <code>object</code>
    * [.post([name])](#task.start.synchronous.post) ⇒ <code>Promise.&lt;Guid&gt;</code>
  * [.post([name])](#task.start.post) ⇒ <code>Promise</code>

<a name="task.start.many"></a>
#### start.many : <code>object</code>
**Kind**: static namespace of <code>[start](#task.start)</code>  
<a name="task.start.many.post"></a>
##### many.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/start/many
This method is manual

**Kind**: static method of <code>[many](#task.start.many)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Array.&lt;Guid&gt;</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.task.start.many.post(postParams).then(function() {
	console.log('done')
})
```
<a name="task.start.synchronous"></a>
#### start.synchronous : <code>object</code>
**Kind**: static namespace of <code>[start](#task.start)</code>  
<a name="task.start.synchronous.post"></a>
##### synchronous.post([name]) ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/start/synchronous?name={name}
This method is manual

**Kind**: static method of <code>[synchronous](#task.start.synchronous)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | the name parameter |

**Example**  
```javascript
qrsApi.task.start.synchronous.post(name).then(function(Guid) {
	console.log(Guid)
})
```
<a name="task.start.post"></a>
#### start.post([name]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/start?name={name}
This method is manual

**Kind**: static method of <code>[start](#task.start)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | the name parameter |

**Example**  
```javascript
qrsApi.task.start.post(name).then(function() {
	console.log('done')
})
```
<a name="task.stop"></a>
### task.stop : <code>object</code>
**Kind**: static namespace of <code>[task](#task)</code>  

* [.stop](#task.stop) : <code>object</code>
  * [.many](#task.stop.many) : <code>object</code>
    * [.post(postParams)](#task.stop.many.post) ⇒ <code>Promise</code>

<a name="task.stop.many"></a>
#### stop.many : <code>object</code>
**Kind**: static namespace of <code>[stop](#task.stop)</code>  
<a name="task.stop.many.post"></a>
##### many.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/stop/many
This method is manual

**Kind**: static method of <code>[many](#task.stop.many)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Array.&lt;Guid&gt;</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.task.stop.many.post(postParams).then(function() {
	console.log('done')
})
```
<a name="task.table"></a>
### task.table : <code>object</code>
**Kind**: static namespace of <code>[task](#task)</code>  
<a name="task.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#task.table)</code>  
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
qrsApi.task.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="task.get"></a>
### task.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/task?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[task](#task)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.task.get(filter, orderby, appendprivileges).then(function(Array.<ITask>) {
	console.log(Array.<ITask>)
})
```
