<a name="filereference"></a>
## filereference : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [filereference](#filereference) : <code>object</code>
  * [.id](#filereference.id) : <code>object</code>
    * [.get([appendprivileges])](#filereference.id.get) ⇒ <code>Promise.&lt;FileReference&gt;</code>
  * [.count](#filereference.count) : <code>object</code>
    * [.get([filter])](#filereference.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#filereference.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#filereference.full.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
  * [.table](#filereference.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#filereference.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#filereference.get) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>

<a name="filereference.id"></a>
### filereference.id : <code>object</code>
**Kind**: static namespace of <code>[filereference](#filereference)</code>  
<a name="filereference.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;FileReference&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/filereference/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#filereference.id)</code>  
**Returns**: <code>Promise.&lt;FileReference&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.filereference.id(id).get(appendprivileges).then(function(FileReference) {
    console.log(FileReference)
})
```
<a name="filereference.count"></a>
### filereference.count : <code>object</code>
**Kind**: static namespace of <code>[filereference](#filereference)</code>  
<a name="filereference.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/filereference/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#filereference.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.filereference.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="filereference.full"></a>
### filereference.full : <code>object</code>
**Kind**: static namespace of <code>[filereference](#filereference)</code>  
<a name="filereference.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/filereference/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#filereference.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.filereference.full.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
    console.log(Array.<FileReference>)
})
```
<a name="filereference.table"></a>
### filereference.table : <code>object</code>
**Kind**: static namespace of <code>[filereference](#filereference)</code>  
<a name="filereference.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/filereference/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#filereference.table)</code>  
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
qrsApi.filereference.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="filereference.get"></a>
### filereference.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/filereference?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[filereference](#filereference)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;FileReference&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.filereference.get(filter, orderby, appendprivileges).then(function(Array.<FileReference>) {
    console.log(Array.<FileReference>)
})
```
