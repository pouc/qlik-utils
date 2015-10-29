<a name="event"></a>
## event : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [event](#event) : <code>object</code>
  * [.full](#event.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#event.full.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
  * [.table](#event.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#event.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#event.get) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>

<a name="event.full"></a>
### event.full : <code>object</code>
**Kind**: static namespace of <code>[event](#event)</code>  
<a name="event.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/event/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#event.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.event.full.get(filter, orderby, appendprivileges).then(function(Array.<IEvent>) {
    console.log(Array.<IEvent>)
})
```
<a name="event.table"></a>
### event.table : <code>object</code>
**Kind**: static namespace of <code>[event](#event)</code>  
<a name="event.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/event/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#event.table)</code>  
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
qrsApi.event.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="event.get"></a>
### event.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/event?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[event](#event)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IEvent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.event.get(filter, orderby, appendprivileges).then(function(Array.<IEvent>) {
    console.log(Array.<IEvent>)
})
```
