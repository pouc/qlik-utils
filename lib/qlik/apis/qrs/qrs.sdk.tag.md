<a name="tag"></a>
## tag : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [tag](#tag) : <code>object</code>
  * [.id](#tag.id) : <code>object</code>
    * [.delete()](#tag.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#tag.id.get) ⇒ <code>Promise.&lt;Tag&gt;</code>
    * [.put(postParams, [appendprivileges])](#tag.id.put) ⇒ <code>Promise.&lt;Tag&gt;</code>
  * [.count](#tag.count) : <code>object</code>
    * [.get([filter])](#tag.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#tag.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#tag.full.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
  * [.many](#tag.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#tag.many.post) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
  * [.previewcreateprivilege](#tag.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#tag.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#tag.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#tag.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#tag.get) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#tag.post) ⇒ <code>Promise.&lt;Tag&gt;</code>

<a name="tag.id"></a>
### tag.id : <code>object</code>
**Kind**: static namespace of <code>[tag](#tag)</code>  

* [.id](#tag.id) : <code>object</code>
  * [.delete()](#tag.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#tag.id.get) ⇒ <code>Promise.&lt;Tag&gt;</code>
  * [.put(postParams, [appendprivileges])](#tag.id.put) ⇒ <code>Promise.&lt;Tag&gt;</code>

<a name="tag.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/{id}

This method is generated

**Kind**: static method of <code>[id](#tag.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.tag.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="tag.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;Tag&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#tag.id)</code>  
**Returns**: <code>Promise.&lt;Tag&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tag.id(id).get(appendprivileges).then(function(Tag) {
	console.log(Tag)
})
```
<a name="tag.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Tag&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#tag.id)</code>  
**Returns**: <code>Promise.&lt;Tag&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Tag</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tag.id(id).put(postParams, appendprivileges).then(function(Tag) {
	console.log(Tag)
})
```
<a name="tag.count"></a>
### tag.count : <code>object</code>
**Kind**: static namespace of <code>[tag](#tag)</code>  
<a name="tag.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#tag.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.tag.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="tag.full"></a>
### tag.full : <code>object</code>
**Kind**: static namespace of <code>[tag](#tag)</code>  
<a name="tag.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#tag.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tag.full.get(filter, orderby, appendprivileges).then(function(Array.<Tag>) {
	console.log(Array.<Tag>)
})
```
<a name="tag.many"></a>
### tag.many : <code>object</code>
**Kind**: static namespace of <code>[tag](#tag)</code>  
<a name="tag.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#tag.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;Tag&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tag.many.post(postParams, appendprivileges).then(function(Array.<Tag>) {
	console.log(Array.<Tag>)
})
```
<a name="tag.previewcreateprivilege"></a>
### tag.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[tag](#tag)</code>  
<a name="tag.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#tag.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Tag</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.tag.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="tag.table"></a>
### tag.table : <code>object</code>
**Kind**: static namespace of <code>[tag](#tag)</code>  
<a name="tag.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#tag.table)</code>  
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
qrsApi.tag.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="tag.get"></a>
### tag.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[tag](#tag)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Tag&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tag.get(filter, orderby, appendprivileges).then(function(Array.<Tag>) {
	console.log(Array.<Tag>)
})
```
<a name="tag.post"></a>
### tag.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Tag&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/tag?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[tag](#tag)</code>  
**Returns**: <code>Promise.&lt;Tag&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Tag</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tag.post(postParams, appendprivileges).then(function(Tag) {
	console.log(Tag)
})
```
