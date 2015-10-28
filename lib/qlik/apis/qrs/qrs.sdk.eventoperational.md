<a name="eventoperational"></a>
## eventoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [eventoperational](#eventoperational) : <code>object</code>
  * [.full](#eventoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#eventoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
  * [.table](#eventoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#eventoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#eventoperational.get) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>

<a name="eventoperational.full"></a>
### eventoperational.full : <code>object</code>
**Kind**: static namespace of <code>[eventoperational](#eventoperational)</code>  
<a name="eventoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/eventoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#eventoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.eventoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<IEventOperational>) {
	console.log(Array.<IEventOperational>)
})
```
<a name="eventoperational.table"></a>
### eventoperational.table : <code>object</code>
**Kind**: static namespace of <code>[eventoperational](#eventoperational)</code>  
<a name="eventoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/eventoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#eventoperational.table)</code>  
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
qrsApi.eventoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="eventoperational.get"></a>
### eventoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/eventoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[eventoperational](#eventoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEventOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.eventoperational.get(filter, orderby, appendprivileges).then(function(Array.<IEventOperational>) {
	console.log(Array.<IEventOperational>)
})
```
