<a name="extension"></a>
## extension : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [extension](#extension) : <code>object</code>
  * [.extension](#extension.extension) : <code>object</code>
    * [.deletecontent](#extension.extension.deletecontent) : <code>object</code>
      * [.delete([externalpath])](#extension.extension.deletecontent.delete) ⇒ <code>Promise</code>
    * [.uploadfile](#extension.extension.uploadfile) : <code>object</code>
      * [.post(postParams, [externalpath], [overwrite])](#extension.extension.uploadfile.post) ⇒ <code>Promise.&lt;String&gt;</code>
  * [.id](#extension.id) : <code>object</code>
    * [.delete()](#extension.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#extension.id.get) ⇒ <code>Promise.&lt;Extension&gt;</code>
    * [.put(postParams, [appendprivileges])](#extension.id.put) ⇒ <code>Promise.&lt;Extension&gt;</code>
  * [.count](#extension.count) : <code>object</code>
    * [.get([filter])](#extension.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#extension.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#extension.full.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
  * [.many](#extension.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#extension.many.post) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
  * [.name](#extension.name) : <code>object</code>
    * [.extension](#extension.name.extension) : <code>object</code>
      * [.delete()](#extension.name.extension.delete) ⇒ <code>Promise</code>
      * [.post(postParams, [appendprivileges])](#extension.name.extension.post) ⇒ <code>Promise.&lt;Extension&gt;</code>
  * [.previewcreateprivilege](#extension.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#extension.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.schema](#extension.schema) : <code>object</code>
    * [.get()](#extension.schema.get) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.table](#extension.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#extension.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.upload](#extension.upload) : <code>object</code>
    * [.post(postParams, [password], [appendprivileges])](#extension.upload.post) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#extension.get) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#extension.post) ⇒ <code>Promise.&lt;Extension&gt;</code>

<a name="extension.extension"></a>
### extension.extension : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  

* [.extension](#extension.extension) : <code>object</code>
  * [.deletecontent](#extension.extension.deletecontent) : <code>object</code>
    * [.delete([externalpath])](#extension.extension.deletecontent.delete) ⇒ <code>Promise</code>
  * [.uploadfile](#extension.extension.uploadfile) : <code>object</code>
    * [.post(postParams, [externalpath], [overwrite])](#extension.extension.uploadfile.post) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="extension.extension.deletecontent"></a>
#### extension.deletecontent : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension.extension)</code>  
<a name="extension.extension.deletecontent.delete"></a>
##### deletecontent.delete([externalpath]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/{extension}/deletecontent?externalpath={externalpath}

This method is manual

**Kind**: static method of <code>[deletecontent](#extension.extension.deletecontent)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [externalpath] | <code>string</code> | the externalpath parameter |

**Example**  
```javascript
qrsApi.extension.extension(extension).deletecontent.delete(externalpath).then(function() {
	console.log('done')
})
```
<a name="extension.extension.uploadfile"></a>
#### extension.uploadfile : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension.extension)</code>  
<a name="extension.extension.uploadfile.post"></a>
##### uploadfile.post(postParams, [externalpath], [overwrite]) ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/{extension}/uploadfile?externalpath={externalpath}&overwrite={overwrite}

This method is manual

**Kind**: static method of <code>[uploadfile](#extension.extension.uploadfile)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [externalpath] | <code>string</code> | the externalpath parameter |
| [overwrite] | <code>string</code> | the overwrite parameter |

**Example**  
```javascript
qrsApi.extension.extension(extension).uploadfile.post(postParams, externalpath, overwrite).then(function(String) {
	console.log(String)
})
```
<a name="extension.id"></a>
### extension.id : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  

* [.id](#extension.id) : <code>object</code>
  * [.delete()](#extension.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#extension.id.get) ⇒ <code>Promise.&lt;Extension&gt;</code>
  * [.put(postParams, [appendprivileges])](#extension.id.put) ⇒ <code>Promise.&lt;Extension&gt;</code>

<a name="extension.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/{id}

This method is generated

**Kind**: static method of <code>[id](#extension.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.extension.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="extension.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#extension.id)</code>  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.id(id).get(appendprivileges).then(function(Extension) {
	console.log(Extension)
})
```
<a name="extension.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#extension.id)</code>  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Extension</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.id(id).put(postParams, appendprivileges).then(function(Extension) {
	console.log(Extension)
})
```
<a name="extension.count"></a>
### extension.count : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#extension.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.extension.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="extension.full"></a>
### extension.full : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#extension.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.full.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
	console.log(Array.<Extension>)
})
```
<a name="extension.many"></a>
### extension.many : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#extension.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;Extension&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.many.post(postParams, appendprivileges).then(function(Array.<Extension>) {
	console.log(Array.<Extension>)
})
```
<a name="extension.name"></a>
### extension.name : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  

* [.name](#extension.name) : <code>object</code>
  * [.extension](#extension.name.extension) : <code>object</code>
    * [.delete()](#extension.name.extension.delete) ⇒ <code>Promise</code>
    * [.post(postParams, [appendprivileges])](#extension.name.extension.post) ⇒ <code>Promise.&lt;Extension&gt;</code>

<a name="extension.name.extension"></a>
#### name.extension : <code>object</code>
**Kind**: static namespace of <code>[name](#extension.name)</code>  

* [.extension](#extension.name.extension) : <code>object</code>
  * [.delete()](#extension.name.extension.delete) ⇒ <code>Promise</code>
  * [.post(postParams, [appendprivileges])](#extension.name.extension.post) ⇒ <code>Promise.&lt;Extension&gt;</code>

<a name="extension.name.extension.delete"></a>
##### extension.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/name/{extension}

This method is manual

**Kind**: static method of <code>[extension](#extension.name.extension)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.extension.name.extension(extension).delete().then(function() {
	console.log('done')
})
```
<a name="extension.name.extension.post"></a>
##### extension.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/name/{extension}?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[extension](#extension.name.extension)</code>  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.name.extension(extension).post(postParams, appendprivileges).then(function(Extension) {
	console.log(Extension)
})
```
<a name="extension.previewcreateprivilege"></a>
### extension.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#extension.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Extension</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.extension.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="extension.schema"></a>
### extension.schema : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.schema.get"></a>
#### schema.get() ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/schema

This method is manual

**Kind**: static method of <code>[schema](#extension.schema)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.extension.schema.get().then(function(Object) {
	console.log(Object)
})
```
<a name="extension.table"></a>
### extension.table : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#extension.table)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>TableDefinition</code> | the parameters to send as request body to the API endpoint |
| [filter] | <code>string</code> | the filter parameter |
| [skip] | <code>string</code> | the skip parameter |
| [take] | <code>string</code> | the take parameter |
| [sortcolumn] | <code>string</code> | the sortcolumn parameter |
| [orderascending] | <code>string</code> | the orderascending parameter |

**Example**  
```javascript
qrsApi.extension.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="extension.upload"></a>
### extension.upload : <code>object</code>
**Kind**: static namespace of <code>[extension](#extension)</code>  
<a name="extension.upload.post"></a>
#### upload.post(postParams, [password], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension/upload?pwd={password}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[upload](#extension.upload)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [password] | <code>string</code> | the password parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.upload.post(postParams, password, appendprivileges).then(function(Array.<Extension>) {
	console.log(Array.<Extension>)
})
```
<a name="extension.get"></a>
### extension.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[extension](#extension)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Extension&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.get(filter, orderby, appendprivileges).then(function(Array.<Extension>) {
	console.log(Array.<Extension>)
})
```
<a name="extension.post"></a>
### extension.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Extension&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/extension?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[extension](#extension)</code>  
**Returns**: <code>Promise.&lt;Extension&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Extension</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.extension.post(postParams, appendprivileges).then(function(Extension) {
	console.log(Extension)
})
```
