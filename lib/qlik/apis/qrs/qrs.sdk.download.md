<a name="download"></a>
## download : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [download](#download) : <code>object</code>
  * [.app](#download.app) : <code>object</code>
    * [.id](#download.app.id) : <code>object</code>
      * [.exportticketid](#download.app.id.exportticketid) : <code>object</code>
        * [.localfilename](#download.app.id.exportticketid.localfilename) : <code>object</code>
          * [.get()](#download.app.id.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
  * [.reloadtask](#download.reloadtask) : <code>object</code>
    * [.downloadticketid](#download.reloadtask.downloadticketid) : <code>object</code>
      * [.localfilename](#download.reloadtask.downloadticketid.localfilename) : <code>object</code>
        * [.get()](#download.reloadtask.downloadticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
  * [.samlmetadata](#download.samlmetadata) : <code>object</code>
    * [.exportticketid](#download.samlmetadata.exportticketid) : <code>object</code>
      * [.localfilename](#download.samlmetadata.exportticketid.localfilename) : <code>object</code>
        * [.get()](#download.samlmetadata.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.app"></a>
### download.app : <code>object</code>
**Kind**: static namespace of <code>[download](#download)</code>  

* [.app](#download.app) : <code>object</code>
  * [.id](#download.app.id) : <code>object</code>
    * [.exportticketid](#download.app.id.exportticketid) : <code>object</code>
      * [.localfilename](#download.app.id.exportticketid.localfilename) : <code>object</code>
        * [.get()](#download.app.id.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.app.id"></a>
#### app.id : <code>object</code>
**Kind**: static namespace of <code>[app](#download.app)</code>  

* [.id](#download.app.id) : <code>object</code>
  * [.exportticketid](#download.app.id.exportticketid) : <code>object</code>
    * [.localfilename](#download.app.id.exportticketid.localfilename) : <code>object</code>
      * [.get()](#download.app.id.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.app.id.exportticketid"></a>
##### id.exportticketid : <code>object</code>
**Kind**: static namespace of <code>[id](#download.app.id)</code>  

* [.exportticketid](#download.app.id.exportticketid) : <code>object</code>
  * [.localfilename](#download.app.id.exportticketid.localfilename) : <code>object</code>
    * [.get()](#download.app.id.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.app.id.exportticketid.localfilename"></a>
###### exportticketid.localfilename : <code>object</code>
**Kind**: static namespace of <code>[exportticketid](#download.app.id.exportticketid)</code>  
<a name="download.app.id.exportticketid.localfilename.get"></a>
####### localfilename.get() ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/download/app/{id}/{exportticketid}/{localfilename}
This method is manual

**Kind**: static method of <code>[localfilename](#download.app.id.exportticketid.localfilename)</code>  
**Returns**: <code>Promise.&lt;FileDownloadInfo&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.download.app.id(id).exportticketid(exportticketid).localfilename(localfilename).get().then(function(FileDownloadInfo) {
	console.log(FileDownloadInfo)
})
```
<a name="download.reloadtask"></a>
### download.reloadtask : <code>object</code>
**Kind**: static namespace of <code>[download](#download)</code>  

* [.reloadtask](#download.reloadtask) : <code>object</code>
  * [.downloadticketid](#download.reloadtask.downloadticketid) : <code>object</code>
    * [.localfilename](#download.reloadtask.downloadticketid.localfilename) : <code>object</code>
      * [.get()](#download.reloadtask.downloadticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.reloadtask.downloadticketid"></a>
#### reloadtask.downloadticketid : <code>object</code>
**Kind**: static namespace of <code>[reloadtask](#download.reloadtask)</code>  

* [.downloadticketid](#download.reloadtask.downloadticketid) : <code>object</code>
  * [.localfilename](#download.reloadtask.downloadticketid.localfilename) : <code>object</code>
    * [.get()](#download.reloadtask.downloadticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.reloadtask.downloadticketid.localfilename"></a>
##### downloadticketid.localfilename : <code>object</code>
**Kind**: static namespace of <code>[downloadticketid](#download.reloadtask.downloadticketid)</code>  
<a name="download.reloadtask.downloadticketid.localfilename.get"></a>
###### localfilename.get() ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/download/reloadtask/{downloadticketid}/{localfilename}
This method is manual

**Kind**: static method of <code>[localfilename](#download.reloadtask.downloadticketid.localfilename)</code>  
**Returns**: <code>Promise.&lt;FileDownloadInfo&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.download.reloadtask.downloadticketid(downloadticketid).localfilename(localfilename).get().then(function(FileDownloadInfo) {
	console.log(FileDownloadInfo)
})
```
<a name="download.samlmetadata"></a>
### download.samlmetadata : <code>object</code>
**Kind**: static namespace of <code>[download](#download)</code>  

* [.samlmetadata](#download.samlmetadata) : <code>object</code>
  * [.exportticketid](#download.samlmetadata.exportticketid) : <code>object</code>
    * [.localfilename](#download.samlmetadata.exportticketid.localfilename) : <code>object</code>
      * [.get()](#download.samlmetadata.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.samlmetadata.exportticketid"></a>
#### samlmetadata.exportticketid : <code>object</code>
**Kind**: static namespace of <code>[samlmetadata](#download.samlmetadata)</code>  

* [.exportticketid](#download.samlmetadata.exportticketid) : <code>object</code>
  * [.localfilename](#download.samlmetadata.exportticketid.localfilename) : <code>object</code>
    * [.get()](#download.samlmetadata.exportticketid.localfilename.get) ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>

<a name="download.samlmetadata.exportticketid.localfilename"></a>
##### exportticketid.localfilename : <code>object</code>
**Kind**: static namespace of <code>[exportticketid](#download.samlmetadata.exportticketid)</code>  
<a name="download.samlmetadata.exportticketid.localfilename.get"></a>
###### localfilename.get() ⇒ <code>Promise.&lt;FileDownloadInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/download/samlmetadata/{exportticketid}/{localfilename}
This method is manual

**Kind**: static method of <code>[localfilename](#download.samlmetadata.exportticketid.localfilename)</code>  
**Returns**: <code>Promise.&lt;FileDownloadInfo&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.download.samlmetadata.exportticketid(exportticketid).localfilename(localfilename).get().then(function(FileDownloadInfo) {
	console.log(FileDownloadInfo)
})
```
