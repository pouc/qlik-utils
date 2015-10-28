<a name="staticcontentreference"></a>
## staticcontentreference : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [staticcontentreference](#staticcontentreference) : <code>object</code>
  * [.id](#staticcontentreference.id) : <code>object</code>
    * [.get([appendprivileges])](#staticcontentreference.id.get) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
  * [.count](#staticcontentreference.count) : <code>object</code>
    * [.get([filter])](#staticcontentreference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#staticcontentreference.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#staticcontentreference.full.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
  * [.table](#staticcontentreference.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#staticcontentreference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#staticcontentreference.get) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>

<a name="staticcontentreference.id"></a>
### staticcontentreference.id : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#staticcontentreference)</code>  
<a name="staticcontentreference.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;StaticContentReference&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/staticcontentreference/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#staticcontentreference.id)</code>  
**Returns**: <code>Promise.&lt;StaticContentReference&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.staticcontentreference.id(id).get(appendprivileges).then(function(StaticContentReference) {
	console.log(StaticContentReference)
})
```
<a name="staticcontentreference.count"></a>
### staticcontentreference.count : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#staticcontentreference)</code>  
<a name="staticcontentreference.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/staticcontentreference/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#staticcontentreference.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.staticcontentreference.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="staticcontentreference.full"></a>
### staticcontentreference.full : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#staticcontentreference)</code>  
<a name="staticcontentreference.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/staticcontentreference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#staticcontentreference.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.staticcontentreference.full.get(filter, orderby, appendprivileges).then(function(Array.<StaticContentReference>) {
	console.log(Array.<StaticContentReference>)
})
```
<a name="staticcontentreference.table"></a>
### staticcontentreference.table : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreference](#staticcontentreference)</code>  
<a name="staticcontentreference.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/staticcontentreference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#staticcontentreference.table)</code>  
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
qrsApi.staticcontentreference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="staticcontentreference.get"></a>
### staticcontentreference.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/staticcontentreference?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[staticcontentreference](#staticcontentreference)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;StaticContentReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.staticcontentreference.get(filter, orderby, appendprivileges).then(function(Array.<StaticContentReference>) {
	console.log(Array.<StaticContentReference>)
})
```
