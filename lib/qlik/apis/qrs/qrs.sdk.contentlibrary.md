<a name="contentlibrary"></a>
## contentlibrary : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [contentlibrary](#contentlibrary) : <code>object</code>
  * [.id](#contentlibrary.id) : <code>object</code>
    * [.delete()](#contentlibrary.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#contentlibrary.id.get) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
    * [.put(postParams, [appendprivileges])](#contentlibrary.id.put) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
  * [.libname](#contentlibrary.libname) : <code>object</code>
    * [.deletecontent](#contentlibrary.libname.deletecontent) : <code>object</code>
      * [.delete([externalpath])](#contentlibrary.libname.deletecontent.delete) ⇒ <code>Promise</code>
    * [.uploadfile](#contentlibrary.libname.uploadfile) : <code>object</code>
      * [.post(postParams, [externalpath], [overwrite])](#contentlibrary.libname.uploadfile.post) ⇒ <code>Promise.&lt;String&gt;</code>
  * [.count](#contentlibrary.count) : <code>object</code>
    * [.get([filter])](#contentlibrary.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#contentlibrary.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#contentlibrary.full.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
  * [.many](#contentlibrary.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#contentlibrary.many.post) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
  * [.previewcreateprivilege](#contentlibrary.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#contentlibrary.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#contentlibrary.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#contentlibrary.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#contentlibrary.get) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#contentlibrary.post) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>

<a name="contentlibrary.id"></a>
### contentlibrary.id : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  

* [.id](#contentlibrary.id) : <code>object</code>
  * [.delete()](#contentlibrary.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#contentlibrary.id.get) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
  * [.put(postParams, [appendprivileges])](#contentlibrary.id.put) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>

<a name="contentlibrary.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/{id}

This method is generated

**Kind**: static method of <code>[id](#contentlibrary.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.contentlibrary.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="contentlibrary.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#contentlibrary.id)</code>  
**Returns**: <code>Promise.&lt;ContentLibrary&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.contentlibrary.id(id).get(appendprivileges).then(function(ContentLibrary) {
    console.log(ContentLibrary)
})
```
<a name="contentlibrary.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#contentlibrary.id)</code>  
**Returns**: <code>Promise.&lt;ContentLibrary&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ContentLibrary</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.contentlibrary.id(id).put(postParams, appendprivileges).then(function(ContentLibrary) {
    console.log(ContentLibrary)
})
```
<a name="contentlibrary.libname"></a>
### contentlibrary.libname : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  

* [.libname](#contentlibrary.libname) : <code>object</code>
  * [.deletecontent](#contentlibrary.libname.deletecontent) : <code>object</code>
    * [.delete([externalpath])](#contentlibrary.libname.deletecontent.delete) ⇒ <code>Promise</code>
  * [.uploadfile](#contentlibrary.libname.uploadfile) : <code>object</code>
    * [.post(postParams, [externalpath], [overwrite])](#contentlibrary.libname.uploadfile.post) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="contentlibrary.libname.deletecontent"></a>
#### libname.deletecontent : <code>object</code>
**Kind**: static namespace of <code>[libname](#contentlibrary.libname)</code>  
<a name="contentlibrary.libname.deletecontent.delete"></a>
##### deletecontent.delete([externalpath]) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/{libname}/deletecontent?externalpath={externalpath}

This method is manual

**Kind**: static method of <code>[deletecontent](#contentlibrary.libname.deletecontent)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| [externalpath] | <code>string</code> | the externalpath parameter |

**Example**  
```javascript
qrsApi.contentlibrary.libname(libname).deletecontent.delete(externalpath).then(function() {
    console.log('done')
})
```
<a name="contentlibrary.libname.uploadfile"></a>
#### libname.uploadfile : <code>object</code>
**Kind**: static namespace of <code>[libname](#contentlibrary.libname)</code>  
<a name="contentlibrary.libname.uploadfile.post"></a>
##### uploadfile.post(postParams, [externalpath], [overwrite]) ⇒ <code>Promise.&lt;String&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/{libname}/uploadfile?externalpath={externalpath}&overwrite={overwrite}

This method is manual

**Kind**: static method of <code>[uploadfile](#contentlibrary.libname.uploadfile)</code>  
**Returns**: <code>Promise.&lt;String&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [externalpath] | <code>string</code> | the externalpath parameter |
| [overwrite] | <code>string</code> | the overwrite parameter |

**Example**  
```javascript
qrsApi.contentlibrary.libname(libname).uploadfile.post(postParams, externalpath, overwrite).then(function(String) {
    console.log(String)
})
```
<a name="contentlibrary.count"></a>
### contentlibrary.count : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  
<a name="contentlibrary.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#contentlibrary.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.contentlibrary.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="contentlibrary.full"></a>
### contentlibrary.full : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  
<a name="contentlibrary.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#contentlibrary.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.contentlibrary.full.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
    console.log(Array.<ContentLibrary>)
})
```
<a name="contentlibrary.many"></a>
### contentlibrary.many : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  
<a name="contentlibrary.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#contentlibrary.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ContentLibrary&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.contentlibrary.many.post(postParams, appendprivileges).then(function(Array.<ContentLibrary>) {
    console.log(Array.<ContentLibrary>)
})
```
<a name="contentlibrary.previewcreateprivilege"></a>
### contentlibrary.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  
<a name="contentlibrary.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#contentlibrary.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ContentLibrary</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.contentlibrary.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="contentlibrary.table"></a>
### contentlibrary.table : <code>object</code>
**Kind**: static namespace of <code>[contentlibrary](#contentlibrary)</code>  
<a name="contentlibrary.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#contentlibrary.table)</code>  
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
qrsApi.contentlibrary.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="contentlibrary.get"></a>
### contentlibrary.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[contentlibrary](#contentlibrary)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ContentLibrary&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.contentlibrary.get(filter, orderby, appendprivileges).then(function(Array.<ContentLibrary>) {
    console.log(Array.<ContentLibrary>)
})
```
<a name="contentlibrary.post"></a>
### contentlibrary.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ContentLibrary&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/contentlibrary?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[contentlibrary](#contentlibrary)</code>  
**Returns**: <code>Promise.&lt;ContentLibrary&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ContentLibrary</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.contentlibrary.post(postParams, appendprivileges).then(function(ContentLibrary) {
    console.log(ContentLibrary)
})
```
