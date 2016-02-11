<a name="user"></a>
## user : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [user](#user) : <code>object</code>
  * [.id](#user.id) : <code>object</code>
    * [.delete()](#user.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#user.id.get) ⇒ <code>Promise.&lt;User&gt;</code>
    * [.put(postParams, [appendprivileges])](#user.id.put) ⇒ <code>Promise.&lt;User&gt;</code>
  * [.count](#user.count) : <code>object</code>
    * [.get([filter])](#user.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#user.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#user.full.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.many](#user.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#user.many.post) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.ownedresources](#user.ownedresources) : <code>object</code>
    * [.get([selectionid], [limit], [filter], [appendprivileges])](#user.ownedresources.get) ⇒ <code>Promise.&lt;Array.&lt;OwnedResourceResult&gt;&gt;</code>
  * [.previewcreateprivilege](#user.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#user.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.sync](#user.sync) : <code>object</code>
    * [.userdirectory](#user.sync.userdirectory) : <code>object</code>
      * [.userid](#user.sync.userdirectory.userid) : <code>object</code>
        * [.get()](#user.sync.userdirectory.userid.get) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#user.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#user.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#user.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#user.post) ⇒ <code>Promise.&lt;User&gt;</code>

<a name="user.id"></a>
### user.id : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  

* [.id](#user.id) : <code>object</code>
  * [.delete()](#user.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#user.id.get) ⇒ <code>Promise.&lt;User&gt;</code>
  * [.put(postParams, [appendprivileges])](#user.id.put) ⇒ <code>Promise.&lt;User&gt;</code>

<a name="user.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/{id}

This method is generated

**Kind**: static method of <code>[id](#user.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.user.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="user.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;User&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#user.id)</code>  
**Returns**: <code>Promise.&lt;User&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.id(id).get(appendprivileges).then(function(User) {
    console.log(User)
})
```
<a name="user.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;User&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#user.id)</code>  
**Returns**: <code>Promise.&lt;User&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>User</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.id(id).put(postParams, appendprivileges).then(function(User) {
    console.log(User)
})
```
<a name="user.count"></a>
### user.count : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  
<a name="user.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#user.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.user.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="user.full"></a>
### user.full : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  
<a name="user.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#user.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;User&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.full.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
    console.log(Array.<User>)
})
```
<a name="user.many"></a>
### user.many : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  
<a name="user.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#user.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;User&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;User&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.many.post(postParams, appendprivileges).then(function(Array.<User>) {
    console.log(Array.<User>)
})
```
<a name="user.ownedresources"></a>
### user.ownedresources : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  
<a name="user.ownedresources.get"></a>
#### ownedresources.get([selectionid], [limit], [filter], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;OwnedResourceResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/ownedresources?userselection={selectionid}&limit={limit}&filter={filter}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[ownedresources](#user.ownedresources)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;OwnedResourceResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [selectionid] | <code>string</code> | the selectionid parameter |
| [limit] | <code>string</code> | the limit parameter |
| [filter] | <code>string</code> | the filter parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.ownedresources.get(selectionid, limit, filter, appendprivileges).then(function(Array.<OwnedResourceResult>) {
    console.log(Array.<OwnedResourceResult>)
})
```
<a name="user.previewcreateprivilege"></a>
### user.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  
<a name="user.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#user.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>User</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.user.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="user.sync"></a>
### user.sync : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  

* [.sync](#user.sync) : <code>object</code>
  * [.userdirectory](#user.sync.userdirectory) : <code>object</code>
    * [.userid](#user.sync.userdirectory.userid) : <code>object</code>
      * [.get()](#user.sync.userdirectory.userid.get) ⇒ <code>Promise.&lt;Boolean&gt;</code>

<a name="user.sync.userdirectory"></a>
#### sync.userdirectory : <code>object</code>
**Kind**: static namespace of <code>[sync](#user.sync)</code>  

* [.userdirectory](#user.sync.userdirectory) : <code>object</code>
  * [.userid](#user.sync.userdirectory.userid) : <code>object</code>
    * [.get()](#user.sync.userdirectory.userid.get) ⇒ <code>Promise.&lt;Boolean&gt;</code>

<a name="user.sync.userdirectory.userid"></a>
##### userdirectory.userid : <code>object</code>
**Kind**: static namespace of <code>[userdirectory](#user.sync.userdirectory)</code>  
<a name="user.sync.userdirectory.userid.get"></a>
###### userid.get() ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/sync/{userdirectory}/{userid}

This method is manual

**Kind**: static method of <code>[userid](#user.sync.userdirectory.userid)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.user.sync.userdirectory(userdirectory).userid(userid).get().then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="user.table"></a>
### user.table : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  
<a name="user.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#user.table)</code>  
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
qrsApi.user.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="user.get"></a>
### user.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[user](#user)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;User&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.get(filter, orderby, appendprivileges).then(function(Array.<User>) {
    console.log(Array.<User>)
})
```
<a name="user.post"></a>
### user.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;User&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[user](#user)</code>  
**Returns**: <code>Promise.&lt;User&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>User</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.post(postParams, appendprivileges).then(function(User) {
    console.log(User)
})
```
