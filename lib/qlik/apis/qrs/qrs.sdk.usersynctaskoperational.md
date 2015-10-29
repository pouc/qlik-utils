<a name="usersynctaskoperational"></a>
## usersynctaskoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [usersynctaskoperational](#usersynctaskoperational) : <code>object</code>
  * [.id](#usersynctaskoperational.id) : <code>object</code>
    * [.delete()](#usersynctaskoperational.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#usersynctaskoperational.id.get) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
    * [.put(postParams, [appendprivileges])](#usersynctaskoperational.id.put) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
  * [.count](#usersynctaskoperational.count) : <code>object</code>
    * [.get([filter])](#usersynctaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#usersynctaskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#usersynctaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
  * [.many](#usersynctaskoperational.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#usersynctaskoperational.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
  * [.previewcreateprivilege](#usersynctaskoperational.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#usersynctaskoperational.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#usersynctaskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#usersynctaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#usersynctaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#usersynctaskoperational.post) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>

<a name="usersynctaskoperational.id"></a>
### usersynctaskoperational.id : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  

* [.id](#usersynctaskoperational.id) : <code>object</code>
  * [.delete()](#usersynctaskoperational.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#usersynctaskoperational.id.get) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
  * [.put(postParams, [appendprivileges])](#usersynctaskoperational.id.put) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>

<a name="usersynctaskoperational.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/{id}

This method is generated

**Kind**: static method of <code>[id](#usersynctaskoperational.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.usersynctaskoperational.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="usersynctaskoperational.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#usersynctaskoperational.id)</code>  
**Returns**: <code>Promise.&lt;UserSyncTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.id(id).get(appendprivileges).then(function(UserSyncTaskOperational) {
    console.log(UserSyncTaskOperational)
})
```
<a name="usersynctaskoperational.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#usersynctaskoperational.id)</code>  
**Returns**: <code>Promise.&lt;UserSyncTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.id(id).put(postParams, appendprivileges).then(function(UserSyncTaskOperational) {
    console.log(UserSyncTaskOperational)
})
```
<a name="usersynctaskoperational.count"></a>
### usersynctaskoperational.count : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
<a name="usersynctaskoperational.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#usersynctaskoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="usersynctaskoperational.full"></a>
### usersynctaskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
<a name="usersynctaskoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#usersynctaskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
    console.log(Array.<UserSyncTaskOperational>)
})
```
<a name="usersynctaskoperational.many"></a>
### usersynctaskoperational.many : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
<a name="usersynctaskoperational.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#usersynctaskoperational.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;UserSyncTaskOperational&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.many.post(postParams, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
    console.log(Array.<UserSyncTaskOperational>)
})
```
<a name="usersynctaskoperational.previewcreateprivilege"></a>
### usersynctaskoperational.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
<a name="usersynctaskoperational.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#usersynctaskoperational.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTaskOperational</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.usersynctaskoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="usersynctaskoperational.table"></a>
### usersynctaskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
<a name="usersynctaskoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#usersynctaskoperational.table)</code>  
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
qrsApi.usersynctaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="usersynctaskoperational.get"></a>
### usersynctaskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTaskOperational>) {
    console.log(Array.<UserSyncTaskOperational>)
})
```
<a name="usersynctaskoperational.post"></a>
### usersynctaskoperational.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/usersynctaskoperational?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[usersynctaskoperational](#usersynctaskoperational)</code>  
**Returns**: <code>Promise.&lt;UserSyncTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctaskoperational.post(postParams, appendprivileges).then(function(UserSyncTaskOperational) {
    console.log(UserSyncTaskOperational)
})
```
