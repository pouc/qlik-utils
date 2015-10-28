<a name="userdirectoryconnector"></a>
## userdirectoryconnector : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [userdirectoryconnector](#userdirectoryconnector) : <code>object</code>
  * [.deleteudandusers](#userdirectoryconnector.deleteudandusers) : <code>object</code>
    * [.delete([userdirectoryid])](#userdirectoryconnector.deleteudandusers.delete) ⇒ <code>Promise</code>
  * [.refreshudctypes](#userdirectoryconnector.refreshudctypes) : <code>object</code>
    * [.post()](#userdirectoryconnector.refreshudctypes.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.syncuserdirectories](#userdirectoryconnector.syncuserdirectories) : <code>object</code>
    * [.post(postParams)](#userdirectoryconnector.syncuserdirectories.post) ⇒ <code>Promise</code>
  * [.get()](#userdirectoryconnector.get) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="userdirectoryconnector.deleteudandusers"></a>
### userdirectoryconnector.deleteudandusers : <code>object</code>
**Kind**: static namespace of <code>[userdirectoryconnector](#userdirectoryconnector)</code>  
<a name="userdirectoryconnector.deleteudandusers.delete"></a>
#### deleteudandusers.delete([userdirectoryid]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectoryconnector/deleteudandusers?userdirectoryid={userdirectoryid}
This method is manual

**Kind**: static method of <code>[deleteudandusers](#userdirectoryconnector.deleteudandusers)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [userdirectoryid] | <code>string</code> | the userdirectoryid parameter |

**Example**  
```javascript
qrsApi.userdirectoryconnector.deleteudandusers.delete(userdirectoryid).then(function() {
	console.log('done')
})
```
<a name="userdirectoryconnector.refreshudctypes"></a>
### userdirectoryconnector.refreshudctypes : <code>object</code>
**Kind**: static namespace of <code>[userdirectoryconnector](#userdirectoryconnector)</code>  
<a name="userdirectoryconnector.refreshudctypes.post"></a>
#### refreshudctypes.post() ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectoryconnector/refreshudctypes
This method is manual

**Kind**: static method of <code>[refreshudctypes](#userdirectoryconnector.refreshudctypes)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.userdirectoryconnector.refreshudctypes.post().then(function(Object) {
	console.log(Object)
})
```
<a name="userdirectoryconnector.syncuserdirectories"></a>
### userdirectoryconnector.syncuserdirectories : <code>object</code>
**Kind**: static namespace of <code>[userdirectoryconnector](#userdirectoryconnector)</code>  
<a name="userdirectoryconnector.syncuserdirectories.post"></a>
#### syncuserdirectories.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectoryconnector/syncuserdirectories
This method is manual

**Kind**: static method of <code>[syncuserdirectories](#userdirectoryconnector.syncuserdirectories)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Array.&lt;Guid&gt;</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.userdirectoryconnector.syncuserdirectories.post(postParams).then(function() {
	console.log('done')
})
```
<a name="userdirectoryconnector.get"></a>
### userdirectoryconnector.get() ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectoryconnector
This method is manual

**Kind**: static method of <code>[userdirectoryconnector](#userdirectoryconnector)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.userdirectoryconnector.get().then(function(Object) {
	console.log(Object)
})
```
