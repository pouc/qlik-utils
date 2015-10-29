<a name="servernoderegistration"></a>
## servernoderegistration : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [servernoderegistration](#servernoderegistration) : <code>object</code>
  * [.start](#servernoderegistration.start) : <code>object</code>
    * [.servernodeconfigurationid](#servernoderegistration.start.servernodeconfigurationid) : <code>object</code>
      * [.get()](#servernoderegistration.start.servernodeconfigurationid.get) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="servernoderegistration.start"></a>
### servernoderegistration.start : <code>object</code>
**Kind**: static namespace of <code>[servernoderegistration](#servernoderegistration)</code>  

* [.start](#servernoderegistration.start) : <code>object</code>
  * [.servernodeconfigurationid](#servernoderegistration.start.servernodeconfigurationid) : <code>object</code>
    * [.get()](#servernoderegistration.start.servernodeconfigurationid.get) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="servernoderegistration.start.servernodeconfigurationid"></a>
#### start.servernodeconfigurationid : <code>object</code>
**Kind**: static namespace of <code>[start](#servernoderegistration.start)</code>  
<a name="servernoderegistration.start.servernodeconfigurationid.get"></a>
##### servernodeconfigurationid.get() ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernoderegistration/start/{servernodeconfigurationid}

This method is manual

**Kind**: static method of <code>[servernodeconfigurationid](#servernoderegistration.start.servernodeconfigurationid)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.servernoderegistration.start.servernodeconfigurationid(servernodeconfigurationid).get().then(function(String) {
    console.log(String)
})
```
