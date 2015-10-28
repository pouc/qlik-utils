<a name="appcontent"></a>
## appcontent : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [appcontent](#appcontent) : <code>object</code>
  * [.appid](#appcontent.appid) : <code>object</code>
    * [.deletecontent](#appcontent.appid.deletecontent) : <code>object</code>
      * [.delete([externalpath])](#appcontent.appid.deletecontent.delete) ⇒ <code>Promise</code>
    * [.uploadfile](#appcontent.appid.uploadfile) : <code>object</code>
      * [.post(postParams, [externalpath], [overwrite])](#appcontent.appid.uploadfile.post) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="appcontent.appid"></a>
### appcontent.appid : <code>object</code>
**Kind**: static namespace of <code>[appcontent](#appcontent)</code>  

* [.appid](#appcontent.appid) : <code>object</code>
  * [.deletecontent](#appcontent.appid.deletecontent) : <code>object</code>
    * [.delete([externalpath])](#appcontent.appid.deletecontent.delete) ⇒ <code>Promise</code>
  * [.uploadfile](#appcontent.appid.uploadfile) : <code>object</code>
    * [.post(postParams, [externalpath], [overwrite])](#appcontent.appid.uploadfile.post) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="appcontent.appid.deletecontent"></a>
#### appid.deletecontent : <code>object</code>
**Kind**: static namespace of <code>[appid](#appcontent.appid)</code>  
<a name="appcontent.appid.deletecontent.delete"></a>
##### deletecontent.delete([externalpath]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontent/{appid}/deletecontent?externalpath={externalpath}
This method is manual

**Kind**: static method of <code>[deletecontent](#appcontent.appid.deletecontent)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [externalpath] | <code>string</code> | the externalpath parameter |

**Example**  
```javascript
qrsApi.appcontent.appid(appid).deletecontent.delete(externalpath).then(function() {
	console.log('done')
})
```
<a name="appcontent.appid.uploadfile"></a>
#### appid.uploadfile : <code>object</code>
**Kind**: static namespace of <code>[appid](#appcontent.appid)</code>  
<a name="appcontent.appid.uploadfile.post"></a>
##### uploadfile.post(postParams, [externalpath], [overwrite]) ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontent/{appid}/uploadfile?externalpath={externalpath}&overwrite={overwrite}
This method is manual

**Kind**: static method of <code>[uploadfile](#appcontent.appid.uploadfile)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [externalpath] | <code>string</code> | the externalpath parameter |
| [overwrite] | <code>string</code> | the overwrite parameter |

**Example**  
```javascript
qrsApi.appcontent.appid(appid).uploadfile.post(postParams, externalpath, overwrite).then(function(String) {
	console.log(String)
})
```
