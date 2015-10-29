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
  * [.followingapp](#user.followingapp) : <code>object</code>
    * [.id](#user.followingapp.id) : <code>object</code>
      * [.delete()](#user.followingapp.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#user.followingapp.id.get) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
      * [.put(postParams, [appendprivileges])](#user.followingapp.id.put) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
    * [.count](#user.followingapp.count) : <code>object</code>
      * [.get([filter])](#user.followingapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#user.followingapp.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#user.followingapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
    * [.many](#user.followingapp.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#user.followingapp.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
    * [.previewcreateprivilege](#user.followingapp.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#user.followingapp.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#user.followingapp.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#user.followingapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#user.followingapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#user.followingapp.post) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
  * [.full](#user.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#user.full.get) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.many](#user.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#user.many.post) ⇒ <code>Promise.&lt;Array.&lt;User&gt;&gt;</code>
  * [.ownedresources](#user.ownedresources) : <code>object</code>
    * [.get([selectionid], [limit], [filter], [appendprivileges])](#user.ownedresources.get) ⇒ <code>Promise.&lt;Array.&lt;OwnedResourceResult&gt;&gt;</code>
  * [.previewcreateprivilege](#user.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#user.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.recentapp](#user.recentapp) : <code>object</code>
    * [.id](#user.recentapp.id) : <code>object</code>
      * [.delete()](#user.recentapp.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#user.recentapp.id.get) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
      * [.put(postParams, [appendprivileges])](#user.recentapp.id.put) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
    * [.count](#user.recentapp.count) : <code>object</code>
      * [.get([filter])](#user.recentapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#user.recentapp.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#user.recentapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
    * [.many](#user.recentapp.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#user.recentapp.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
    * [.previewcreateprivilege](#user.recentapp.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#user.recentapp.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#user.recentapp.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#user.recentapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#user.recentapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#user.recentapp.post) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
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
<a name="user.followingapp"></a>
### user.followingapp : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  

* [.followingapp](#user.followingapp) : <code>object</code>
  * [.id](#user.followingapp.id) : <code>object</code>
    * [.delete()](#user.followingapp.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#user.followingapp.id.get) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
    * [.put(postParams, [appendprivileges])](#user.followingapp.id.put) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
  * [.count](#user.followingapp.count) : <code>object</code>
    * [.get([filter])](#user.followingapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#user.followingapp.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#user.followingapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
  * [.many](#user.followingapp.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#user.followingapp.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
  * [.previewcreateprivilege](#user.followingapp.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#user.followingapp.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#user.followingapp.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#user.followingapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#user.followingapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#user.followingapp.post) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>

<a name="user.followingapp.id"></a>
#### followingapp.id : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#user.followingapp)</code>  

* [.id](#user.followingapp.id) : <code>object</code>
  * [.delete()](#user.followingapp.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#user.followingapp.id.get) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
  * [.put(postParams, [appendprivileges])](#user.followingapp.id.put) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>

<a name="user.followingapp.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/{id}

This method is generated

**Kind**: static method of <code>[id](#user.followingapp.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.user.followingapp.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="user.followingapp.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#user.followingapp.id)</code>  
**Returns**: <code>Promise.&lt;UserFollowingApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.followingapp.id(id).get(appendprivileges).then(function(UserFollowingApp) {
    console.log(UserFollowingApp)
})
```
<a name="user.followingapp.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#user.followingapp.id)</code>  
**Returns**: <code>Promise.&lt;UserFollowingApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserFollowingApp</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.followingapp.id(id).put(postParams, appendprivileges).then(function(UserFollowingApp) {
    console.log(UserFollowingApp)
})
```
<a name="user.followingapp.count"></a>
#### followingapp.count : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#user.followingapp)</code>  
<a name="user.followingapp.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#user.followingapp.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.user.followingapp.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="user.followingapp.full"></a>
#### followingapp.full : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#user.followingapp)</code>  
<a name="user.followingapp.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#user.followingapp.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.followingapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
    console.log(Array.<UserFollowingApp>)
})
```
<a name="user.followingapp.many"></a>
#### followingapp.many : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#user.followingapp)</code>  
<a name="user.followingapp.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#user.followingapp.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;UserFollowingApp&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.followingapp.many.post(postParams, appendprivileges).then(function(Array.<UserFollowingApp>) {
    console.log(Array.<UserFollowingApp>)
})
```
<a name="user.followingapp.previewcreateprivilege"></a>
#### followingapp.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#user.followingapp)</code>  
<a name="user.followingapp.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#user.followingapp.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserFollowingApp</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.user.followingapp.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="user.followingapp.table"></a>
#### followingapp.table : <code>object</code>
**Kind**: static namespace of <code>[followingapp](#user.followingapp)</code>  
<a name="user.followingapp.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#user.followingapp.table)</code>  
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
qrsApi.user.followingapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="user.followingapp.get"></a>
#### followingapp.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[followingapp](#user.followingapp)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserFollowingApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.followingapp.get(filter, orderby, appendprivileges).then(function(Array.<UserFollowingApp>) {
    console.log(Array.<UserFollowingApp>)
})
```
<a name="user.followingapp.post"></a>
#### followingapp.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserFollowingApp&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/followingapp?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[followingapp](#user.followingapp)</code>  
**Returns**: <code>Promise.&lt;UserFollowingApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserFollowingApp</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.followingapp.post(postParams, appendprivileges).then(function(UserFollowingApp) {
    console.log(UserFollowingApp)
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
<a name="user.recentapp"></a>
### user.recentapp : <code>object</code>
**Kind**: static namespace of <code>[user](#user)</code>  

* [.recentapp](#user.recentapp) : <code>object</code>
  * [.id](#user.recentapp.id) : <code>object</code>
    * [.delete()](#user.recentapp.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#user.recentapp.id.get) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
    * [.put(postParams, [appendprivileges])](#user.recentapp.id.put) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
  * [.count](#user.recentapp.count) : <code>object</code>
    * [.get([filter])](#user.recentapp.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#user.recentapp.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#user.recentapp.full.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
  * [.many](#user.recentapp.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#user.recentapp.many.post) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
  * [.previewcreateprivilege](#user.recentapp.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#user.recentapp.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#user.recentapp.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#user.recentapp.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#user.recentapp.get) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#user.recentapp.post) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>

<a name="user.recentapp.id"></a>
#### recentapp.id : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#user.recentapp)</code>  

* [.id](#user.recentapp.id) : <code>object</code>
  * [.delete()](#user.recentapp.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#user.recentapp.id.get) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
  * [.put(postParams, [appendprivileges])](#user.recentapp.id.put) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>

<a name="user.recentapp.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/{id}

This method is generated

**Kind**: static method of <code>[id](#user.recentapp.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.user.recentapp.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="user.recentapp.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#user.recentapp.id)</code>  
**Returns**: <code>Promise.&lt;UserRecentApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.recentapp.id(id).get(appendprivileges).then(function(UserRecentApp) {
    console.log(UserRecentApp)
})
```
<a name="user.recentapp.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#user.recentapp.id)</code>  
**Returns**: <code>Promise.&lt;UserRecentApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserRecentApp</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.recentapp.id(id).put(postParams, appendprivileges).then(function(UserRecentApp) {
    console.log(UserRecentApp)
})
```
<a name="user.recentapp.count"></a>
#### recentapp.count : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#user.recentapp)</code>  
<a name="user.recentapp.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#user.recentapp.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.user.recentapp.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="user.recentapp.full"></a>
#### recentapp.full : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#user.recentapp)</code>  
<a name="user.recentapp.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#user.recentapp.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.recentapp.full.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
    console.log(Array.<UserRecentApp>)
})
```
<a name="user.recentapp.many"></a>
#### recentapp.many : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#user.recentapp)</code>  
<a name="user.recentapp.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#user.recentapp.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;UserRecentApp&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.recentapp.many.post(postParams, appendprivileges).then(function(Array.<UserRecentApp>) {
    console.log(Array.<UserRecentApp>)
})
```
<a name="user.recentapp.previewcreateprivilege"></a>
#### recentapp.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#user.recentapp)</code>  
<a name="user.recentapp.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#user.recentapp.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserRecentApp</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.user.recentapp.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="user.recentapp.table"></a>
#### recentapp.table : <code>object</code>
**Kind**: static namespace of <code>[recentapp](#user.recentapp)</code>  
<a name="user.recentapp.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#user.recentapp.table)</code>  
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
qrsApi.user.recentapp.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="user.recentapp.get"></a>
#### recentapp.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[recentapp](#user.recentapp)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;UserRecentApp&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.recentapp.get(filter, orderby, appendprivileges).then(function(Array.<UserRecentApp>) {
    console.log(Array.<UserRecentApp>)
})
```
<a name="user.recentapp.post"></a>
#### recentapp.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;UserRecentApp&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/user/recentapp?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[recentapp](#user.recentapp)</code>  
**Returns**: <code>Promise.&lt;UserRecentApp&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>UserRecentApp</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.user.recentapp.post(postParams, appendprivileges).then(function(UserRecentApp) {
    console.log(UserRecentApp)
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
