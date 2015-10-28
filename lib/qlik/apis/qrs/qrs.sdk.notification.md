<a name="notification"></a>
## notification : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [notification](#notification) : <code>object</code>
  * [.changes](#notification.changes) : <code>object</code>
    * [.get([since], [types])](#notification.changes.get) ⇒ <code>Promise.&lt;Array.&lt;ChangesSinceOutput&gt;&gt;</code>
  * [.delete([handle])](#notification.delete) ⇒ <code>Promise</code>
  * [.post(postParams, [typename], [id], [filter], [condition], [changetype], [propertyname])](#notification.post) ⇒ <code>Promise.&lt;Guid&gt;</code>

<a name="notification.changes"></a>
### notification.changes : <code>object</code>
**Kind**: static namespace of <code>[notification](#notification)</code>  
<a name="notification.changes.get"></a>
#### changes.get([since], [types]) ⇒ <code>Promise.&lt;Array.&lt;ChangesSinceOutput&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/notification/changes?since={since}&types={types}

This method is manual

**Kind**: static method of <code>[changes](#notification.changes)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ChangesSinceOutput&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [since] | <code>string</code> | the since parameter |
| [types] | <code>string</code> | the types parameter |

**Example**  
```javascript
qrsApi.notification.changes.get(since, types).then(function(Array.<ChangesSinceOutput>) {
	console.log(Array.<ChangesSinceOutput>)
})
```
<a name="notification.delete"></a>
### notification.delete([handle]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/notification/?handle={handle}

This method is manual

**Kind**: static method of <code>[notification](#notification)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [handle] | <code>string</code> | the handle parameter |

**Example**  
```javascript
qrsApi.notification.delete(handle).then(function() {
	console.log('done')
})
```
<a name="notification.post"></a>
### notification.post(postParams, [typename], [id], [filter], [condition], [changetype], [propertyname]) ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/notification/?name={typename}&id={id}&filter={filter}&condition={condition}&changetype={changetype}&propertyname={propertyname}

This method is manual

**Kind**: static method of <code>[notification](#notification)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [typename] | <code>string</code> | the typename parameter |
| [id] | <code>string</code> | the id parameter |
| [filter] | <code>string</code> | the filter parameter |
| [condition] | <code>string</code> | the condition parameter |
| [changetype] | <code>string</code> | the changetype parameter |
| [propertyname] | <code>string</code> | the propertyname parameter |

**Example**  
```javascript
qrsApi.notification.post(postParams, typename, id, filter, condition, changetype, propertyname).then(function(Guid) {
	console.log(Guid)
})
```
