<a name="log"></a>
## log : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [log](#log) : <code>object</code>
  * [.archive](#log.archive) : <code>object</code>
    * [.logrootsubfolder](#log.archive.logrootsubfolder) : <code>object</code>
      * [.post(postParams)](#log.archive.logrootsubfolder.post) ⇒ <code>Promise.&lt;Guid&gt;</code>
  * [.rolled](#log.rolled) : <code>object</code>
    * [.logrootsubfolder](#log.rolled.logrootsubfolder) : <code>object</code>
      * [.post(postParams)](#log.rolled.logrootsubfolder.post) ⇒ <code>Promise</code>

<a name="log.archive"></a>
### log.archive : <code>object</code>
**Kind**: static namespace of <code>[log](#log)</code>  

* [.archive](#log.archive) : <code>object</code>
  * [.logrootsubfolder](#log.archive.logrootsubfolder) : <code>object</code>
    * [.post(postParams)](#log.archive.logrootsubfolder.post) ⇒ <code>Promise.&lt;Guid&gt;</code>

<a name="log.archive.logrootsubfolder"></a>
#### archive.logrootsubfolder : <code>object</code>
**Kind**: static namespace of <code>[archive](#log.archive)</code>  
<a name="log.archive.logrootsubfolder.post"></a>
##### logrootsubfolder.post(postParams) ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/log/archive/{logrootsubfolder}

This method is manual

**Kind**: static method of <code>[logrootsubfolder](#log.archive.logrootsubfolder)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.log.archive.logrootsubfolder(logrootsubfolder).post(postParams).then(function(Guid) {
    console.log(Guid)
})
```
<a name="log.rolled"></a>
### log.rolled : <code>object</code>
**Kind**: static namespace of <code>[log](#log)</code>  

* [.rolled](#log.rolled) : <code>object</code>
  * [.logrootsubfolder](#log.rolled.logrootsubfolder) : <code>object</code>
    * [.post(postParams)](#log.rolled.logrootsubfolder.post) ⇒ <code>Promise</code>

<a name="log.rolled.logrootsubfolder"></a>
#### rolled.logrootsubfolder : <code>object</code>
**Kind**: static namespace of <code>[rolled](#log.rolled)</code>  
<a name="log.rolled.logrootsubfolder.post"></a>
##### logrootsubfolder.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/log/rolled/{logrootsubfolder}

This method is manual

**Kind**: static method of <code>[logrootsubfolder](#log.rolled.logrootsubfolder)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Object</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.log.rolled.logrootsubfolder(logrootsubfolder).post(postParams).then(function() {
    console.log('done')
})
```
