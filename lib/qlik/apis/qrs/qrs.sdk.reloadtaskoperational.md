<a name="reloadtaskoperational"></a>
## reloadtaskoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [reloadtaskoperational](#reloadtaskoperational) : <code>object</code>
  * [.id](#reloadtaskoperational.id) : <code>object</code>
    * [.delete()](#reloadtaskoperational.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#reloadtaskoperational.id.get) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
    * [.put(postParams, [appendprivileges])](#reloadtaskoperational.id.put) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
  * [.count](#reloadtaskoperational.count) : <code>object</code>
    * [.get([filter])](#reloadtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#reloadtaskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#reloadtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
  * [.many](#reloadtaskoperational.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#reloadtaskoperational.many.post) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
  * [.previewcreateprivilege](#reloadtaskoperational.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#reloadtaskoperational.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#reloadtaskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#reloadtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#reloadtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#reloadtaskoperational.post) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>

<a name="reloadtaskoperational.id"></a>
### reloadtaskoperational.id : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  

* [.id](#reloadtaskoperational.id) : <code>object</code>
  * [.delete()](#reloadtaskoperational.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#reloadtaskoperational.id.get) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
  * [.put(postParams, [appendprivileges])](#reloadtaskoperational.id.put) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>

<a name="reloadtaskoperational.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/{id}

This method is generated

**Kind**: static method of <code>[id](#reloadtaskoperational.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.reloadtaskoperational.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="reloadtaskoperational.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#reloadtaskoperational.id)</code>  
**Returns**: <code>Promise.&lt;ReloadTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.id(id).get(appendprivileges).then(function(ReloadTaskOperational) {
    console.log(ReloadTaskOperational)
})
```
<a name="reloadtaskoperational.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#reloadtaskoperational.id)</code>  
**Returns**: <code>Promise.&lt;ReloadTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.id(id).put(postParams, appendprivileges).then(function(ReloadTaskOperational) {
    console.log(ReloadTaskOperational)
})
```
<a name="reloadtaskoperational.count"></a>
### reloadtaskoperational.count : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
<a name="reloadtaskoperational.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#reloadtaskoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="reloadtaskoperational.full"></a>
### reloadtaskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
<a name="reloadtaskoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#reloadtaskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
    console.log(Array.<ReloadTaskOperational>)
})
```
<a name="reloadtaskoperational.many"></a>
### reloadtaskoperational.many : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
<a name="reloadtaskoperational.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#reloadtaskoperational.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ReloadTaskOperational&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.many.post(postParams, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
    console.log(Array.<ReloadTaskOperational>)
})
```
<a name="reloadtaskoperational.previewcreateprivilege"></a>
### reloadtaskoperational.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
<a name="reloadtaskoperational.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#reloadtaskoperational.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTaskOperational</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.reloadtaskoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="reloadtaskoperational.table"></a>
### reloadtaskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
<a name="reloadtaskoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#reloadtaskoperational.table)</code>  
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
qrsApi.reloadtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="reloadtaskoperational.get"></a>
### reloadtaskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ReloadTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ReloadTaskOperational>) {
    console.log(Array.<ReloadTaskOperational>)
})
```
<a name="reloadtaskoperational.post"></a>
### reloadtaskoperational.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ReloadTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/reloadtaskoperational?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[reloadtaskoperational](#reloadtaskoperational)</code>  
**Returns**: <code>Promise.&lt;ReloadTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ReloadTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.reloadtaskoperational.post(postParams, appendprivileges).then(function(ReloadTaskOperational) {
    console.log(ReloadTaskOperational)
})
```
