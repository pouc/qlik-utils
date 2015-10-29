<a name="managementconsolelog"></a>
## managementconsolelog : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  
<a name="managementconsolelog.post"></a>
### managementconsolelog.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/managementconsolelog

This method is manual

**Kind**: static method of <code>[managementconsolelog](#managementconsolelog)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ManagementConsoleLogInfo</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.managementconsolelog.post(postParams).then(function() {
    console.log('done')
})
```
