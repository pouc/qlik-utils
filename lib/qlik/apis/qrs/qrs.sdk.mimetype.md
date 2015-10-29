<a name="mimetype"></a>
## mimetype : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [mimetype](#mimetype) : <code>object</code>
  * [.id](#mimetype.id) : <code>object</code>
    * [.delete()](#mimetype.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#mimetype.id.get) ⇒ <code>Promise.&lt;MimeType&gt;</code>
    * [.put(postParams, [appendprivileges])](#mimetype.id.put) ⇒ <code>Promise.&lt;MimeType&gt;</code>
  * [.count](#mimetype.count) : <code>object</code>
    * [.get([filter])](#mimetype.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#mimetype.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#mimetype.full.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
  * [.many](#mimetype.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#mimetype.many.post) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
  * [.previewcreateprivilege](#mimetype.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#mimetype.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#mimetype.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#mimetype.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#mimetype.get) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#mimetype.post) ⇒ <code>Promise.&lt;MimeType&gt;</code>

<a name="mimetype.id"></a>
### mimetype.id : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#mimetype)</code>  

* [.id](#mimetype.id) : <code>object</code>
  * [.delete()](#mimetype.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#mimetype.id.get) ⇒ <code>Promise.&lt;MimeType&gt;</code>
  * [.put(postParams, [appendprivileges])](#mimetype.id.put) ⇒ <code>Promise.&lt;MimeType&gt;</code>

<a name="mimetype.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/{id}

This method is generated

**Kind**: static method of <code>[id](#mimetype.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.mimetype.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="mimetype.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;MimeType&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#mimetype.id)</code>  
**Returns**: <code>Promise.&lt;MimeType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.mimetype.id(id).get(appendprivileges).then(function(MimeType) {
    console.log(MimeType)
})
```
<a name="mimetype.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;MimeType&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#mimetype.id)</code>  
**Returns**: <code>Promise.&lt;MimeType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>MimeType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.mimetype.id(id).put(postParams, appendprivileges).then(function(MimeType) {
    console.log(MimeType)
})
```
<a name="mimetype.count"></a>
### mimetype.count : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#mimetype)</code>  
<a name="mimetype.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#mimetype.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.mimetype.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="mimetype.full"></a>
### mimetype.full : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#mimetype)</code>  
<a name="mimetype.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#mimetype.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.mimetype.full.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
    console.log(Array.<MimeType>)
})
```
<a name="mimetype.many"></a>
### mimetype.many : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#mimetype)</code>  
<a name="mimetype.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#mimetype.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;MimeType&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.mimetype.many.post(postParams, appendprivileges).then(function(Array.<MimeType>) {
    console.log(Array.<MimeType>)
})
```
<a name="mimetype.previewcreateprivilege"></a>
### mimetype.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#mimetype)</code>  
<a name="mimetype.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#mimetype.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>MimeType</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.mimetype.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="mimetype.table"></a>
### mimetype.table : <code>object</code>
**Kind**: static namespace of <code>[mimetype](#mimetype)</code>  
<a name="mimetype.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#mimetype.table)</code>  
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
qrsApi.mimetype.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="mimetype.get"></a>
### mimetype.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[mimetype](#mimetype)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;MimeType&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.mimetype.get(filter, orderby, appendprivileges).then(function(Array.<MimeType>) {
    console.log(Array.<MimeType>)
})
```
<a name="mimetype.post"></a>
### mimetype.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;MimeType&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/mimetype?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[mimetype](#mimetype)</code>  
**Returns**: <code>Promise.&lt;MimeType&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>MimeType</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.mimetype.post(postParams, appendprivileges).then(function(MimeType) {
    console.log(MimeType)
})
```
