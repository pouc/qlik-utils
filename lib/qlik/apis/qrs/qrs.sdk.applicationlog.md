<a name="applicationlog"></a>
## applicationlog : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  
<a name="applicationlog.post"></a>
### applicationlog.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/applicationlog

This method is manual

**Kind**: static method of <code>[applicationlog](#applicationlog)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ApplicationLogInfo</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.applicationlog.post(postParams).then(function() {
    console.log('done')
})
```
