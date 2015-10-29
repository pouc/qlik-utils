<a name="certificatedistribution"></a>
## certificatedistribution : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [certificatedistribution](#certificatedistribution) : <code>object</code>
  * [.distributecertificate](#certificatedistribution.distributecertificate) : <code>object</code>
    * [.servernodeconfigurationid](#certificatedistribution.distributecertificate.servernodeconfigurationid) : <code>object</code>
      * [.get()](#certificatedistribution.distributecertificate.servernodeconfigurationid.get) ⇒ <code>Promise.&lt;String&gt;</code>
  * [.exportcertificates](#certificatedistribution.exportcertificates) : <code>object</code>
    * [.post(postParams)](#certificatedistribution.exportcertificates.post) ⇒ <code>Promise.&lt;String&gt;</code>
  * [.exportcertificatespath](#certificatedistribution.exportcertificatespath) : <code>object</code>
    * [.get()](#certificatedistribution.exportcertificatespath.get) ⇒ <code>Promise.&lt;String&gt;</code>
  * [.redistributecertificate](#certificatedistribution.redistributecertificate) : <code>object</code>
    * [.servernodeconfigurationid](#certificatedistribution.redistributecertificate.servernodeconfigurationid) : <code>object</code>
      * [.head()](#certificatedistribution.redistributecertificate.servernodeconfigurationid.head) ⇒ <code>Promise</code>

<a name="certificatedistribution.distributecertificate"></a>
### certificatedistribution.distributecertificate : <code>object</code>
**Kind**: static namespace of <code>[certificatedistribution](#certificatedistribution)</code>  

* [.distributecertificate](#certificatedistribution.distributecertificate) : <code>object</code>
  * [.servernodeconfigurationid](#certificatedistribution.distributecertificate.servernodeconfigurationid) : <code>object</code>
    * [.get()](#certificatedistribution.distributecertificate.servernodeconfigurationid.get) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="certificatedistribution.distributecertificate.servernodeconfigurationid"></a>
#### distributecertificate.servernodeconfigurationid : <code>object</code>
**Kind**: static namespace of <code>[distributecertificate](#certificatedistribution.distributecertificate)</code>  
<a name="certificatedistribution.distributecertificate.servernodeconfigurationid.get"></a>
##### servernodeconfigurationid.get() ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/certificatedistribution/distributecertificate/{servernodeconfigurationid}

This method is manual

**Kind**: static method of <code>[servernodeconfigurationid](#certificatedistribution.distributecertificate.servernodeconfigurationid)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.certificatedistribution.distributecertificate.servernodeconfigurationid(servernodeconfigurationid).get().then(function(String) {
    console.log(String)
})
```
<a name="certificatedistribution.exportcertificates"></a>
### certificatedistribution.exportcertificates : <code>object</code>
**Kind**: static namespace of <code>[certificatedistribution](#certificatedistribution)</code>  
<a name="certificatedistribution.exportcertificates.post"></a>
#### exportcertificates.post(postParams) ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/certificatedistribution/exportcertificates

This method is manual

**Kind**: static method of <code>[exportcertificates](#certificatedistribution.exportcertificates)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExportParameters</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.certificatedistribution.exportcertificates.post(postParams).then(function(String) {
    console.log(String)
})
```
<a name="certificatedistribution.exportcertificatespath"></a>
### certificatedistribution.exportcertificatespath : <code>object</code>
**Kind**: static namespace of <code>[certificatedistribution](#certificatedistribution)</code>  
<a name="certificatedistribution.exportcertificatespath.get"></a>
#### exportcertificatespath.get() ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/certificatedistribution/exportcertificatespath

This method is manual

**Kind**: static method of <code>[exportcertificatespath](#certificatedistribution.exportcertificatespath)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.certificatedistribution.exportcertificatespath.get().then(function(String) {
    console.log(String)
})
```
<a name="certificatedistribution.redistributecertificate"></a>
### certificatedistribution.redistributecertificate : <code>object</code>
**Kind**: static namespace of <code>[certificatedistribution](#certificatedistribution)</code>  

* [.redistributecertificate](#certificatedistribution.redistributecertificate) : <code>object</code>
  * [.servernodeconfigurationid](#certificatedistribution.redistributecertificate.servernodeconfigurationid) : <code>object</code>
    * [.head()](#certificatedistribution.redistributecertificate.servernodeconfigurationid.head) ⇒ <code>Promise</code>

<a name="certificatedistribution.redistributecertificate.servernodeconfigurationid"></a>
#### redistributecertificate.servernodeconfigurationid : <code>object</code>
**Kind**: static namespace of <code>[redistributecertificate](#certificatedistribution.redistributecertificate)</code>  
<a name="certificatedistribution.redistributecertificate.servernodeconfigurationid.head"></a>
##### servernodeconfigurationid.head() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/certificatedistribution/redistributecertificate/{servernodeconfigurationid}

This method is manual

**Kind**: static method of <code>[servernodeconfigurationid](#certificatedistribution.redistributecertificate.servernodeconfigurationid)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.certificatedistribution.redistributecertificate.servernodeconfigurationid(servernodeconfigurationid).head().then(function() {
    console.log('done')
})
```
