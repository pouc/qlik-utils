<a name="userdirectory"></a>
## userdirectory : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [userdirectory](#userdirectory) : <code>object</code>
  * [.id](#userdirectory.id) : <code>object</code>
    * [.delete()](#userdirectory.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#userdirectory.id.get) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
    * [.put(postParams, [appendprivileges])](#userdirectory.id.put) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
  * [.count](#userdirectory.count) : <code>object</code>
    * [.get([filter])](#userdirectory.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#userdirectory.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#userdirectory.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
  * [.many](#userdirectory.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#userdirectory.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
  * [.previewcreateprivilege](#userdirectory.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#userdirectory.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#userdirectory.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#userdirectory.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#userdirectory.template) : <code>object</code>
    * [.id](#userdirectory.template.id) : <code>object</code>
      * [.delete()](#userdirectory.template.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#userdirectory.template.id.get) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
      * [.put(postParams, [appendprivileges])](#userdirectory.template.id.put) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
    * [.count](#userdirectory.template.count) : <code>object</code>
      * [.get([filter])](#userdirectory.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#userdirectory.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#userdirectory.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
    * [.many](#userdirectory.template.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#userdirectory.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
    * [.previewcreateprivilege](#userdirectory.template.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#userdirectory.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#userdirectory.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#userdirectory.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#userdirectory.template.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#userdirectory.template.post) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#userdirectory.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#userdirectory.post) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>

<a name="userdirectory.id"></a>
### userdirectory.id : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  

* [.id](#userdirectory.id) : <code>object</code>
  * [.delete()](#userdirectory.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#userdirectory.id.get) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
  * [.put(postParams, [appendprivileges])](#userdirectory.id.put) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>

<a name="userdirectory.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/{id}
This method is generated

**Kind**: static method of <code>[id](#userdirectory.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.userdirectory.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="userdirectory.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#userdirectory.id)</code>  
**Returns**: <code>Promise.&lt;UserDirectory&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.id(id).get(appendprivileges).then(function(UserDirectory) {
	console.log(UserDirectory)
})
```
<a name="userdirectory.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#userdirectory.id)</code>  
**Returns**: <code>Promise.&lt;UserDirectory&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectory</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.id(id).put(postParams, appendprivileges).then(function(UserDirectory) {
	console.log(UserDirectory)
})
```
<a name="userdirectory.count"></a>
### userdirectory.count : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  
<a name="userdirectory.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#userdirectory.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.userdirectory.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="userdirectory.full"></a>
### userdirectory.full : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  
<a name="userdirectory.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#userdirectory.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
	console.log(Array.<UserDirectory>)
})
```
<a name="userdirectory.many"></a>
### userdirectory.many : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  
<a name="userdirectory.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#userdirectory.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;UserDirectory&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.many.post(postParams, appendprivileges).then(function(Array.<UserDirectory>) {
	console.log(Array.<UserDirectory>)
})
```
<a name="userdirectory.previewcreateprivilege"></a>
### userdirectory.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  
<a name="userdirectory.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#userdirectory.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectory</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.userdirectory.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="userdirectory.table"></a>
### userdirectory.table : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  
<a name="userdirectory.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#userdirectory.table)</code>  
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
qrsApi.userdirectory.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="userdirectory.template"></a>
### userdirectory.template : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#userdirectory)</code>  

* [.template](#userdirectory.template) : <code>object</code>
  * [.id](#userdirectory.template.id) : <code>object</code>
    * [.delete()](#userdirectory.template.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#userdirectory.template.id.get) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
    * [.put(postParams, [appendprivileges])](#userdirectory.template.id.put) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
  * [.count](#userdirectory.template.count) : <code>object</code>
    * [.get([filter])](#userdirectory.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#userdirectory.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#userdirectory.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
  * [.many](#userdirectory.template.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#userdirectory.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
  * [.previewcreateprivilege](#userdirectory.template.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#userdirectory.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#userdirectory.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#userdirectory.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#userdirectory.template.get) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#userdirectory.template.post) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>

<a name="userdirectory.template.id"></a>
#### template.id : <code>object</code>
**Kind**: static namespace of <code>[template](#userdirectory.template)</code>  

* [.id](#userdirectory.template.id) : <code>object</code>
  * [.delete()](#userdirectory.template.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#userdirectory.template.id.get) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
  * [.put(postParams, [appendprivileges])](#userdirectory.template.id.put) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>

<a name="userdirectory.template.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/{id}
This method is generated

**Kind**: static method of <code>[id](#userdirectory.template.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.userdirectory.template.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="userdirectory.template.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#userdirectory.template.id)</code>  
**Returns**: <code>Promise.&lt;UserDirectoryTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.id(id).get(appendprivileges).then(function(UserDirectoryTemplate) {
	console.log(UserDirectoryTemplate)
})
```
<a name="userdirectory.template.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#userdirectory.template.id)</code>  
**Returns**: <code>Promise.&lt;UserDirectoryTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectoryTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.id(id).put(postParams, appendprivileges).then(function(UserDirectoryTemplate) {
	console.log(UserDirectoryTemplate)
})
```
<a name="userdirectory.template.count"></a>
#### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#userdirectory.template)</code>  
<a name="userdirectory.template.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#userdirectory.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="userdirectory.template.full"></a>
#### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#userdirectory.template)</code>  
<a name="userdirectory.template.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#userdirectory.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.full.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
	console.log(Array.<UserDirectoryTemplate>)
})
```
<a name="userdirectory.template.many"></a>
#### template.many : <code>object</code>
**Kind**: static namespace of <code>[template](#userdirectory.template)</code>  
<a name="userdirectory.template.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#userdirectory.template.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;UserDirectoryTemplate&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.many.post(postParams, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
	console.log(Array.<UserDirectoryTemplate>)
})
```
<a name="userdirectory.template.previewcreateprivilege"></a>
#### template.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[template](#userdirectory.template)</code>  
<a name="userdirectory.template.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#userdirectory.template.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectoryTemplate</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.userdirectory.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="userdirectory.template.table"></a>
#### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#userdirectory.template)</code>  
<a name="userdirectory.template.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#userdirectory.template.table)</code>  
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
qrsApi.userdirectory.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="userdirectory.template.get"></a>
#### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[template](#userdirectory.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectoryTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectoryTemplate>) {
	console.log(Array.<UserDirectoryTemplate>)
})
```
<a name="userdirectory.template.post"></a>
#### template.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserDirectoryTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory/template?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[template](#userdirectory.template)</code>  
**Returns**: <code>Promise.&lt;UserDirectoryTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectoryTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.template.post(postParams, appendprivileges).then(function(UserDirectoryTemplate) {
	console.log(UserDirectoryTemplate)
})
```
<a name="userdirectory.get"></a>
### userdirectory.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[userdirectory](#userdirectory)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserDirectory&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.get(filter, orderby, appendprivileges).then(function(Array.<UserDirectory>) {
	console.log(Array.<UserDirectory>)
})
```
<a name="userdirectory.post"></a>
### userdirectory.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserDirectory&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/userdirectory?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[userdirectory](#userdirectory)</code>  
**Returns**: <code>Promise.&lt;UserDirectory&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserDirectory</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.userdirectory.post(postParams, appendprivileges).then(function(UserDirectory) {
	console.log(UserDirectory)
})
```
