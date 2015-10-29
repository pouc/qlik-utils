<a name="loadbalancing"></a>
## loadbalancing : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [loadbalancing](#loadbalancing) : <code>object</code>
  * [.validengines](#loadbalancing.validengines) : <code>object</code>
    * [.post(postParams)](#loadbalancing.validengines.post) ⇒ <code>Promise.&lt;LoadBalancingResult&gt;</code>

<a name="loadbalancing.validengines"></a>
### loadbalancing.validengines : <code>object</code>
**Kind**: static namespace of <code>[loadbalancing](#loadbalancing)</code>  
<a name="loadbalancing.validengines.post"></a>
#### validengines.post(postParams) ⇒ <code>Promise.&lt;LoadBalancingResult&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/loadbalancing/validengines

This method is manual

**Kind**: static method of <code>[validengines](#loadbalancing.validengines)</code>  
**Returns**: <code>Promise.&lt;LoadBalancingResult&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>LoadBalancingRequest</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.loadbalancing.validengines.post(postParams).then(function(LoadBalancingResult) {
    console.log(LoadBalancingResult)
})
```
