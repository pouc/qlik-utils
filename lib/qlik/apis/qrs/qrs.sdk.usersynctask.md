<a name="usersynctask"></a>
## usersynctask : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [usersynctask](#usersynctask) : <code>object</code>
  * [.id](#usersynctask.id) : <code>object</code>
    * [.delete()](#usersynctask.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#usersynctask.id.get) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
    * [.put(postParams, [appendprivileges])](#usersynctask.id.put) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
  * [.count](#usersynctask.count) : <code>object</code>
    * [.get([filter])](#usersynctask.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#usersynctask.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#usersynctask.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
  * [.many](#usersynctask.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#usersynctask.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
  * [.previewcreateprivilege](#usersynctask.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#usersynctask.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#usersynctask.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#usersynctask.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#usersynctask.get) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#usersynctask.post) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>

<a name="usersynctask.id"></a>
### usersynctask.id : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#usersynctask)</code>  

* [.id](#usersynctask.id) : <code>object</code>
  * [.delete()](#usersynctask.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#usersynctask.id.get) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
  * [.put(postParams, [appendprivileges])](#usersynctask.id.put) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>

<a name="usersynctask.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/{id}
This method is generated

**Kind**: static method of <code>[id](#usersynctask.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.usersynctask.id(id).delete().then(function() {
	console.log('done')
})
```
<a name="usersynctask.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#usersynctask.id)</code>  
**Returns**: <code>Promise.&lt;UserSyncTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctask.id(id).get(appendprivileges).then(function(UserSyncTask) {
	console.log(UserSyncTask)
})
```
<a name="usersynctask.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#usersynctask.id)</code>  
**Returns**: <code>Promise.&lt;UserSyncTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctask.id(id).put(postParams, appendprivileges).then(function(UserSyncTask) {
	console.log(UserSyncTask)
})
```
<a name="usersynctask.count"></a>
### usersynctask.count : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#usersynctask)</code>  
<a name="usersynctask.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#usersynctask.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.usersynctask.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="usersynctask.full"></a>
### usersynctask.full : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#usersynctask)</code>  
<a name="usersynctask.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#usersynctask.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctask.full.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
	console.log(Array.<UserSyncTask>)
})
```
<a name="usersynctask.many"></a>
### usersynctask.many : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#usersynctask)</code>  
<a name="usersynctask.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/many?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[many](#usersynctask.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;UserSyncTask&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctask.many.post(postParams, appendprivileges).then(function(Array.<UserSyncTask>) {
	console.log(Array.<UserSyncTask>)
})
```
<a name="usersynctask.previewcreateprivilege"></a>
### usersynctask.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#usersynctask)</code>  
<a name="usersynctask.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/previewcreateprivilege
This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#usersynctask.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTask</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.usersynctask.previewcreateprivilege.post(postParams).then(function(Boolean) {
	console.log(Boolean)
})
```
<a name="usersynctask.table"></a>
### usersynctask.table : <code>object</code>
**Kind**: static namespace of <code>[usersynctask](#usersynctask)</code>  
<a name="usersynctask.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#usersynctask.table)</code>  
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
qrsApi.usersynctask.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="usersynctask.get"></a>
### usersynctask.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[usersynctask](#usersynctask)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserSyncTask&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctask.get(filter, orderby, appendprivileges).then(function(Array.<UserSyncTask>) {
	console.log(Array.<UserSyncTask>)
})
```
<a name="usersynctask.post"></a>
### usersynctask.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserSyncTask&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/usersynctask?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[usersynctask](#usersynctask)</code>  
**Returns**: <code>Promise.&lt;UserSyncTask&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserSyncTask</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.usersynctask.post(postParams, appendprivileges).then(function(UserSyncTask) {
	console.log(UserSyncTask)
})
```
