<a name="cache"></a>
## cache : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  
<a name="cache.delete"></a>
### cache.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/cache
This method is manual

**Kind**: static method of <code>[cache](#cache)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.cache.delete().then(function() {
	console.log('done')
})
```
