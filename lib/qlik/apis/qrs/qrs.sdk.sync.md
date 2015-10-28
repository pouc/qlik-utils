<a name="sync"></a>
## sync : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [sync](#sync) : <code>object</code>
  * [.snapshot](#sync.snapshot) : <code>object</code>
    * [.post()](#sync.snapshot.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>

<a name="sync.snapshot"></a>
### sync.snapshot : <code>object</code>
**Kind**: static namespace of <code>[sync](#sync)</code>  
<a name="sync.snapshot.post"></a>
#### snapshot.post() ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/sync/snapshot
This method is manual

**Kind**: static method of <code>[snapshot](#sync.snapshot)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.sync.snapshot.post().then(function(Boolean) {
	console.log(Boolean)
})
```
