<a name="custompropertydefinition"></a>
## custompropertydefinition : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [custompropertydefinition](#custompropertydefinition) : <code>object</code>
  * [.id](#custompropertydefinition.id) : <code>object</code>
    * [.delete()](#custompropertydefinition.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#custompropertydefinition.id.get) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
    * [.put(postParams, [appendprivileges])](#custompropertydefinition.id.put) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
  * [.count](#custompropertydefinition.count) : <code>object</code>
    * [.get([filter])](#custompropertydefinition.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#custompropertydefinition.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#custompropertydefinition.full.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
  * [.many](#custompropertydefinition.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#custompropertydefinition.many.post) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
  * [.previewcreateprivilege](#custompropertydefinition.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#custompropertydefinition.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#custompropertydefinition.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#custompropertydefinition.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#custompropertydefinition.get) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#custompropertydefinition.post) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>

<a name="custompropertydefinition.id"></a>
### custompropertydefinition.id : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#custompropertydefinition)</code>  

* [.id](#custompropertydefinition.id) : <code>object</code>
  * [.delete()](#custompropertydefinition.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#custompropertydefinition.id.get) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
  * [.put(postParams, [appendprivileges])](#custompropertydefinition.id.put) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>

<a name="custompropertydefinition.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/{id}

This method is generated

**Kind**: static method of <code>[id](#custompropertydefinition.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.custompropertydefinition.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="custompropertydefinition.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#custompropertydefinition.id)</code>  
**Returns**: <code>Promise.&lt;CustomPropertyDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.id(id).get(appendprivileges).then(function(CustomPropertyDefinition) {
	console.log(CustomPropertyDefinition)
})
```
<a name="custompropertydefinition.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#custompropertydefinition.id)</code>  
**Returns**: <code>Promise.&lt;CustomPropertyDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CustomPropertyDefinition</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.id(id).put(postParams, appendprivileges).then(function(CustomPropertyDefinition) {
	console.log(CustomPropertyDefinition)
})
```
<a name="custompropertydefinition.count"></a>
### custompropertydefinition.count : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#custompropertydefinition)</code>  
<a name="custompropertydefinition.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#custompropertydefinition.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="custompropertydefinition.full"></a>
### custompropertydefinition.full : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#custompropertydefinition)</code>  
<a name="custompropertydefinition.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#custompropertydefinition.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.full.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
	console.log(Array.<CustomPropertyDefinition>)
})
```
<a name="custompropertydefinition.many"></a>
### custompropertydefinition.many : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#custompropertydefinition)</code>  
<a name="custompropertydefinition.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#custompropertydefinition.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;CustomPropertyDefinition&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.many.post(postParams, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
	console.log(Array.<CustomPropertyDefinition>)
})
```
<a name="custompropertydefinition.previewcreateprivilege"></a>
### custompropertydefinition.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#custompropertydefinition)</code>  
<a name="custompropertydefinition.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#custompropertydefinition.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CustomPropertyDefinition</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.custompropertydefinition.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="custompropertydefinition.table"></a>
### custompropertydefinition.table : <code>object</code>
**Kind**: static namespace of <code>[custompropertydefinition](#custompropertydefinition)</code>  
<a name="custompropertydefinition.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#custompropertydefinition.table)</code>  
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
qrsApi.custompropertydefinition.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="custompropertydefinition.get"></a>
### custompropertydefinition.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[custompropertydefinition](#custompropertydefinition)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CustomPropertyDefinition&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.get(filter, orderby, appendprivileges).then(function(Array.<CustomPropertyDefinition>) {
	console.log(Array.<CustomPropertyDefinition>)
})
```
<a name="custompropertydefinition.post"></a>
### custompropertydefinition.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CustomPropertyDefinition&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/custompropertydefinition?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[custompropertydefinition](#custompropertydefinition)</code>  
**Returns**: <code>Promise.&lt;CustomPropertyDefinition&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CustomPropertyDefinition</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.custompropertydefinition.post(postParams, appendprivileges).then(function(CustomPropertyDefinition) {
	console.log(CustomPropertyDefinition)
})
```
