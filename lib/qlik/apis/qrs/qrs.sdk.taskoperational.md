<a name="taskoperational"></a>
## taskoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [taskoperational](#taskoperational) : <code>object</code>
  * [.full](#taskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#taskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
  * [.table](#taskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#taskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#taskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>

<a name="taskoperational.full"></a>
### taskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[taskoperational](#taskoperational)</code>  
<a name="taskoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/taskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#taskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.taskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ITaskOperational>) {
	console.log(Array.<ITaskOperational>)
})
```
<a name="taskoperational.table"></a>
### taskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[taskoperational](#taskoperational)</code>  
<a name="taskoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/taskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#taskoperational.table)</code>  
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
qrsApi.taskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="taskoperational.get"></a>
### taskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/taskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[taskoperational](#taskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ITaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.taskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ITaskOperational>) {
	console.log(Array.<ITaskOperational>)
})
```
