<a name="app"></a>
## app : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [app](#app) : <code>object</code>
  * [.id](#app.id) : <code>object</code>
    * [.copy](#app.id.copy) : <code>object</code>
      * [.post([name])](#app.id.copy.post) ⇒ <code>Promise.&lt;App&gt;</code>
    * [.export](#app.id.export) : <code>object</code>
      * [.get()](#app.id.export.get) ⇒ <code>Promise.&lt;Guid&gt;</code>
    * [.migrate](#app.id.migrate) : <code>object</code>
      * [.put()](#app.id.migrate.put) ⇒ <code>Promise</code>
    * [.migrationcompleted](#app.id.migrationcompleted) : <code>object</code>
      * [.post(postParams)](#app.id.migrationcompleted.post) ⇒ <code>Promise</code>
    * [.privileges](#app.id.privileges) : <code>object</code>
      * [.get()](#app.id.privileges.get) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.publish](#app.id.publish) : <code>object</code>
      * [.put([streamid], [name])](#app.id.publish.put) ⇒ <code>Promise.&lt;App&gt;</code>
    * [.reload](#app.id.reload) : <code>object</code>
      * [.post()](#app.id.reload.post) ⇒ <code>Promise</code>
    * [.replace](#app.id.replace) : <code>object</code>
      * [.put([appid])](#app.id.replace.put) ⇒ <code>Promise.&lt;App&gt;</code>
    * [.state](#app.id.state) : <code>object</code>
      * [.get()](#app.id.state.get) ⇒ <code>Promise.&lt;AppState&gt;</code>
    * [.delete()](#app.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#app.id.get) ⇒ <code>Promise.&lt;App&gt;</code>
    * [.put(postParams, [appendprivileges])](#app.id.put) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.content](#app.content) : <code>object</code>
    * [.id](#app.content.id) : <code>object</code>
      * [.get([appendprivileges])](#app.content.id.get) ⇒ <code>Promise.&lt;AppContent&gt;</code>
    * [.count](#app.content.count) : <code>object</code>
      * [.get([filter])](#app.content.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#app.content.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#app.content.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
    * [.table](#app.content.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.content.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.content.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
  * [.count](#app.count) : <code>object</code>
    * [.get([filter])](#app.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.datasegment](#app.datasegment) : <code>object</code>
    * [.id](#app.datasegment.id) : <code>object</code>
      * [.get([appendprivileges])](#app.datasegment.id.get) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
    * [.count](#app.datasegment.count) : <code>object</code>
      * [.get([filter])](#app.datasegment.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#app.datasegment.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#app.datasegment.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
    * [.table](#app.datasegment.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.datasegment.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.datasegment.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
  * [.full](#app.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.full.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
  * [.import](#app.import) : <code>object</code>
    * [.post(postParams, [name], [keepdata], [replace], [appendprivileges], [excludeconnections])](#app.import.post) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.internal](#app.internal) : <code>object</code>
    * [.id](#app.internal.id) : <code>object</code>
      * [.get([appendprivileges])](#app.internal.id.get) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
    * [.count](#app.internal.count) : <code>object</code>
      * [.get([filter])](#app.internal.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#app.internal.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#app.internal.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
    * [.table](#app.internal.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.internal.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.internal.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
  * [.object](#app.object) : <code>object</code>
    * [.id](#app.object.id) : <code>object</code>
      * [.publish](#app.object.id.publish) : <code>object</code>
        * [.put()](#app.object.id.publish.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
      * [.unpublish](#app.object.id.unpublish) : <code>object</code>
        * [.put()](#app.object.id.unpublish.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
      * [.delete()](#app.object.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#app.object.id.get) ⇒ <code>Promise.&lt;AppObject&gt;</code>
      * [.put(postParams, [appendprivileges])](#app.object.id.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
    * [.count](#app.object.count) : <code>object</code>
      * [.get([filter])](#app.object.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#app.object.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#app.object.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
    * [.table](#app.object.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.object.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.object.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
  * [.previewcreateprivilege](#app.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#app.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#app.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.upload](#app.upload) : <code>object</code>
    * [.post(postParams, [name], [keepdata], [replace], [appendprivileges], [excludeconnections])](#app.upload.post) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#app.get) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>

<a name="app.id"></a>
### app.id : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  

* [.id](#app.id) : <code>object</code>
  * [.copy](#app.id.copy) : <code>object</code>
    * [.post([name])](#app.id.copy.post) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.export](#app.id.export) : <code>object</code>
    * [.get()](#app.id.export.get) ⇒ <code>Promise.&lt;Guid&gt;</code>
  * [.migrate](#app.id.migrate) : <code>object</code>
    * [.put()](#app.id.migrate.put) ⇒ <code>Promise</code>
  * [.migrationcompleted](#app.id.migrationcompleted) : <code>object</code>
    * [.post(postParams)](#app.id.migrationcompleted.post) ⇒ <code>Promise</code>
  * [.privileges](#app.id.privileges) : <code>object</code>
    * [.get()](#app.id.privileges.get) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.publish](#app.id.publish) : <code>object</code>
    * [.put([streamid], [name])](#app.id.publish.put) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.reload](#app.id.reload) : <code>object</code>
    * [.post()](#app.id.reload.post) ⇒ <code>Promise</code>
  * [.replace](#app.id.replace) : <code>object</code>
    * [.put([appid])](#app.id.replace.put) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.state](#app.id.state) : <code>object</code>
    * [.get()](#app.id.state.get) ⇒ <code>Promise.&lt;AppState&gt;</code>
  * [.delete()](#app.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#app.id.get) ⇒ <code>Promise.&lt;App&gt;</code>
  * [.put(postParams, [appendprivileges])](#app.id.put) ⇒ <code>Promise.&lt;App&gt;</code>

<a name="app.id.copy"></a>
#### id.copy : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.copy.post"></a>
##### copy.post([name]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/copy?name={name}

This method is manual

**Kind**: static method of <code>[copy](#app.id.copy)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | the name parameter |

**Example**  
```javascript
qrsApi.app.id(id).copy.post(name).then(function(App) {
    console.log(App)
})
```
<a name="app.id.export"></a>
#### id.export : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.export.get"></a>
##### export.get() ⇒ <code>Promise.&lt;Guid&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/export

This method is manual

**Kind**: static method of <code>[export](#app.id.export)</code>  
**Returns**: <code>Promise.&lt;Guid&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.app.id(id).export.get().then(function(Guid) {
    console.log(Guid)
})
```
<a name="app.id.migrate"></a>
#### id.migrate : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.migrate.put"></a>
##### migrate.put() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/migrate

This method is manual

**Kind**: static method of <code>[migrate](#app.id.migrate)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.app.id(id).migrate.put().then(function() {
    console.log('done')
})
```
<a name="app.id.migrationcompleted"></a>
#### id.migrationcompleted : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.migrationcompleted.post"></a>
##### migrationcompleted.post(postParams) ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/migrationcompleted

This method is manual

**Kind**: static method of <code>[migrationcompleted](#app.id.migrationcompleted)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AppMigrationStatus</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.app.id(id).migrationcompleted.post(postParams).then(function() {
    console.log('done')
})
```
<a name="app.id.privileges"></a>
#### id.privileges : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.privileges.get"></a>
##### privileges.get() ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/privileges

This method is manual

**Kind**: static method of <code>[privileges](#app.id.privileges)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.app.id(id).privileges.get().then(function(Object) {
    console.log(Object)
})
```
<a name="app.id.publish"></a>
#### id.publish : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.publish.put"></a>
##### publish.put([streamid], [name]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/publish?stream={streamid}&name={name}

This method is manual

**Kind**: static method of <code>[publish](#app.id.publish)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [streamid] | <code>string</code> | the streamid parameter |
| [name] | <code>string</code> | the name parameter |

**Example**  
```javascript
qrsApi.app.id(id).publish.put(streamid, name).then(function(App) {
    console.log(App)
})
```
<a name="app.id.reload"></a>
#### id.reload : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.reload.post"></a>
##### reload.post() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/reload

This method is manual

**Kind**: static method of <code>[reload](#app.id.reload)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.app.id(id).reload.post().then(function() {
    console.log('done')
})
```
<a name="app.id.replace"></a>
#### id.replace : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.replace.put"></a>
##### replace.put([appid]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/replace?app={appid}

This method is manual

**Kind**: static method of <code>[replace](#app.id.replace)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appid] | <code>string</code> | the appid parameter |

**Example**  
```javascript
qrsApi.app.id(id).replace.put(appid).then(function(App) {
    console.log(App)
})
```
<a name="app.id.state"></a>
#### id.state : <code>object</code>
**Kind**: static namespace of <code>[id](#app.id)</code>  
<a name="app.id.state.get"></a>
##### state.get() ⇒ <code>Promise.&lt;AppState&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}/state

This method is manual

**Kind**: static method of <code>[state](#app.id.state)</code>  
**Returns**: <code>Promise.&lt;AppState&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.app.id(id).state.get().then(function(AppState) {
    console.log(AppState)
})
```
<a name="app.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}

This method is manual

**Kind**: static method of <code>[id](#app.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.app.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="app.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#app.id)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.id(id).get(appendprivileges).then(function(App) {
    console.log(App)
})
```
<a name="app.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#app.id)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>App</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.id(id).put(postParams, appendprivileges).then(function(App) {
    console.log(App)
})
```
<a name="app.content"></a>
### app.content : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  

* [.content](#app.content) : <code>object</code>
  * [.id](#app.content.id) : <code>object</code>
    * [.get([appendprivileges])](#app.content.id.get) ⇒ <code>Promise.&lt;AppContent&gt;</code>
  * [.count](#app.content.count) : <code>object</code>
    * [.get([filter])](#app.content.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#app.content.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.content.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
  * [.table](#app.content.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.content.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#app.content.get) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>

<a name="app.content.id"></a>
#### content.id : <code>object</code>
**Kind**: static namespace of <code>[content](#app.content)</code>  
<a name="app.content.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppContent&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/content/{id}?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[id](#app.content.id)</code>  
**Returns**: <code>Promise.&lt;AppContent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.content.id(id).get(appendprivileges).then(function(AppContent) {
    console.log(AppContent)
})
```
<a name="app.content.count"></a>
#### content.count : <code>object</code>
**Kind**: static namespace of <code>[content](#app.content)</code>  
<a name="app.content.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/content/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#app.content.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.app.content.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="app.content.full"></a>
#### content.full : <code>object</code>
**Kind**: static namespace of <code>[content](#app.content)</code>  
<a name="app.content.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/content/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[full](#app.content.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.content.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
    console.log(Array.<AppContent>)
})
```
<a name="app.content.table"></a>
#### content.table : <code>object</code>
**Kind**: static namespace of <code>[content](#app.content)</code>  
<a name="app.content.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/content/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is manual

**Kind**: static method of <code>[table](#app.content.table)</code>  
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
qrsApi.app.content.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="app.content.get"></a>
#### content.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/content?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[content](#app.content)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.content.get(filter, orderby, appendprivileges).then(function(Array.<AppContent>) {
    console.log(Array.<AppContent>)
})
```
<a name="app.count"></a>
### app.count : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  
<a name="app.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#app.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.app.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="app.datasegment"></a>
### app.datasegment : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  

* [.datasegment](#app.datasegment) : <code>object</code>
  * [.id](#app.datasegment.id) : <code>object</code>
    * [.get([appendprivileges])](#app.datasegment.id.get) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
  * [.count](#app.datasegment.count) : <code>object</code>
    * [.get([filter])](#app.datasegment.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#app.datasegment.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.datasegment.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
  * [.table](#app.datasegment.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.datasegment.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#app.datasegment.get) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>

<a name="app.datasegment.id"></a>
#### datasegment.id : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#app.datasegment)</code>  
<a name="app.datasegment.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppDataSegment&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/datasegment/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#app.datasegment.id)</code>  
**Returns**: <code>Promise.&lt;AppDataSegment&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.datasegment.id(id).get(appendprivileges).then(function(AppDataSegment) {
    console.log(AppDataSegment)
})
```
<a name="app.datasegment.count"></a>
#### datasegment.count : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#app.datasegment)</code>  
<a name="app.datasegment.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/datasegment/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#app.datasegment.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.app.datasegment.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="app.datasegment.full"></a>
#### datasegment.full : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#app.datasegment)</code>  
<a name="app.datasegment.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/datasegment/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#app.datasegment.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.datasegment.full.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
    console.log(Array.<AppDataSegment>)
})
```
<a name="app.datasegment.table"></a>
#### datasegment.table : <code>object</code>
**Kind**: static namespace of <code>[datasegment](#app.datasegment)</code>  
<a name="app.datasegment.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/datasegment/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#app.datasegment.table)</code>  
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
qrsApi.app.datasegment.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="app.datasegment.get"></a>
#### datasegment.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/datasegment?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[datasegment](#app.datasegment)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppDataSegment&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.datasegment.get(filter, orderby, appendprivileges).then(function(Array.<AppDataSegment>) {
    console.log(Array.<AppDataSegment>)
})
```
<a name="app.full"></a>
### app.full : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  
<a name="app.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#app.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;App&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.full.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
    console.log(Array.<App>)
})
```
<a name="app.import"></a>
### app.import : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  
<a name="app.import.post"></a>
#### import.post(postParams, [name], [keepdata], [replace], [appendprivileges], [excludeconnections]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/import?name={name}&keepdata={keepdata}&replace={replace}&privileges={appendprivileges}&excludeconnections={excludeconnections}

This method is manual

**Kind**: static method of <code>[import](#app.import)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [name] | <code>string</code> | the name parameter |
| [keepdata] | <code>string</code> | the keepdata parameter |
| [replace] | <code>string</code> | the replace parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |
| [excludeconnections] | <code>string</code> | the excludeconnections parameter |

**Example**  
```javascript
qrsApi.app.import.post(postParams, name, keepdata, replace, appendprivileges, excludeconnections).then(function(App) {
    console.log(App)
})
```
<a name="app.internal"></a>
### app.internal : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  

* [.internal](#app.internal) : <code>object</code>
  * [.id](#app.internal.id) : <code>object</code>
    * [.get([appendprivileges])](#app.internal.id.get) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
  * [.count](#app.internal.count) : <code>object</code>
    * [.get([filter])](#app.internal.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#app.internal.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.internal.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
  * [.table](#app.internal.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.internal.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#app.internal.get) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>

<a name="app.internal.id"></a>
#### internal.id : <code>object</code>
**Kind**: static namespace of <code>[internal](#app.internal)</code>  
<a name="app.internal.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppInternal&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/internal/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#app.internal.id)</code>  
**Returns**: <code>Promise.&lt;AppInternal&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.internal.id(id).get(appendprivileges).then(function(AppInternal) {
    console.log(AppInternal)
})
```
<a name="app.internal.count"></a>
#### internal.count : <code>object</code>
**Kind**: static namespace of <code>[internal](#app.internal)</code>  
<a name="app.internal.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/internal/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#app.internal.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.app.internal.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="app.internal.full"></a>
#### internal.full : <code>object</code>
**Kind**: static namespace of <code>[internal](#app.internal)</code>  
<a name="app.internal.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/internal/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#app.internal.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.internal.full.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
    console.log(Array.<AppInternal>)
})
```
<a name="app.internal.table"></a>
#### internal.table : <code>object</code>
**Kind**: static namespace of <code>[internal](#app.internal)</code>  
<a name="app.internal.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/internal/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#app.internal.table)</code>  
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
qrsApi.app.internal.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="app.internal.get"></a>
#### internal.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/internal?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[internal](#app.internal)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppInternal&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.internal.get(filter, orderby, appendprivileges).then(function(Array.<AppInternal>) {
    console.log(Array.<AppInternal>)
})
```
<a name="app.object"></a>
### app.object : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  

* [.object](#app.object) : <code>object</code>
  * [.id](#app.object.id) : <code>object</code>
    * [.publish](#app.object.id.publish) : <code>object</code>
      * [.put()](#app.object.id.publish.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
    * [.unpublish](#app.object.id.unpublish) : <code>object</code>
      * [.put()](#app.object.id.unpublish.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
    * [.delete()](#app.object.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#app.object.id.get) ⇒ <code>Promise.&lt;AppObject&gt;</code>
    * [.put(postParams, [appendprivileges])](#app.object.id.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
  * [.count](#app.object.count) : <code>object</code>
    * [.get([filter])](#app.object.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#app.object.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#app.object.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
  * [.table](#app.object.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#app.object.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#app.object.get) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>

<a name="app.object.id"></a>
#### object.id : <code>object</code>
**Kind**: static namespace of <code>[object](#app.object)</code>  

* [.id](#app.object.id) : <code>object</code>
  * [.publish](#app.object.id.publish) : <code>object</code>
    * [.put()](#app.object.id.publish.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
  * [.unpublish](#app.object.id.unpublish) : <code>object</code>
    * [.put()](#app.object.id.unpublish.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>
  * [.delete()](#app.object.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#app.object.id.get) ⇒ <code>Promise.&lt;AppObject&gt;</code>
  * [.put(postParams, [appendprivileges])](#app.object.id.put) ⇒ <code>Promise.&lt;AppObject&gt;</code>

<a name="app.object.id.publish"></a>
##### id.publish : <code>object</code>
**Kind**: static namespace of <code>[id](#app.object.id)</code>  
<a name="app.object.id.publish.put"></a>
###### publish.put() ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/{id}/publish

This method is manual

**Kind**: static method of <code>[publish](#app.object.id.publish)</code>  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.app.object.id(id).publish.put().then(function(AppObject) {
    console.log(AppObject)
})
```
<a name="app.object.id.unpublish"></a>
##### id.unpublish : <code>object</code>
**Kind**: static namespace of <code>[id](#app.object.id)</code>  
<a name="app.object.id.unpublish.put"></a>
###### unpublish.put() ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/{id}/unpublish

This method is manual

**Kind**: static method of <code>[unpublish](#app.object.id.unpublish)</code>  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.app.object.id(id).unpublish.put().then(function(AppObject) {
    console.log(AppObject)
})
```
<a name="app.object.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/{id}

This method is generated

**Kind**: static method of <code>[id](#app.object.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.app.object.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="app.object.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#app.object.id)</code>  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.object.id(id).get(appendprivileges).then(function(AppObject) {
    console.log(AppObject)
})
```
<a name="app.object.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;AppObject&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#app.object.id)</code>  
**Returns**: <code>Promise.&lt;AppObject&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AppObject</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.object.id(id).put(postParams, appendprivileges).then(function(AppObject) {
    console.log(AppObject)
})
```
<a name="app.object.count"></a>
#### object.count : <code>object</code>
**Kind**: static namespace of <code>[object](#app.object)</code>  
<a name="app.object.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#app.object.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.app.object.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="app.object.full"></a>
#### object.full : <code>object</code>
**Kind**: static namespace of <code>[object](#app.object)</code>  
<a name="app.object.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#app.object.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.object.full.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
    console.log(Array.<AppObject>)
})
```
<a name="app.object.table"></a>
#### object.table : <code>object</code>
**Kind**: static namespace of <code>[object](#app.object)</code>  
<a name="app.object.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#app.object.table)</code>  
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
qrsApi.app.object.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="app.object.get"></a>
#### object.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/object?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[object](#app.object)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppObject&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.object.get(filter, orderby, appendprivileges).then(function(Array.<AppObject>) {
    console.log(Array.<AppObject>)
})
```
<a name="app.previewcreateprivilege"></a>
### app.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  
<a name="app.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/previewcreateprivilege

This method is manual

**Kind**: static method of <code>[previewcreateprivilege](#app.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>App</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.app.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="app.table"></a>
### app.table : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  
<a name="app.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#app.table)</code>  
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
qrsApi.app.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="app.upload"></a>
### app.upload : <code>object</code>
**Kind**: static namespace of <code>[app](#app)</code>  
<a name="app.upload.post"></a>
#### upload.post(postParams, [name], [keepdata], [replace], [appendprivileges], [excludeconnections]) ⇒ <code>Promise.&lt;App&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app/upload?name={name}&keepdata={keepdata}&replace={replace}&privileges={appendprivileges}&excludeconnections={excludeconnections}

This method is manual

**Kind**: static method of <code>[upload](#app.upload)</code>  
**Returns**: <code>Promise.&lt;App&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>String</code> | the parameters to send as request body to the API endpoint |
| [name] | <code>string</code> | the name parameter |
| [keepdata] | <code>string</code> | the keepdata parameter |
| [replace] | <code>string</code> | the replace parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |
| [excludeconnections] | <code>string</code> | the excludeconnections parameter |

**Example**  
```javascript
qrsApi.app.upload.post(postParams, name, keepdata, replace, appendprivileges, excludeconnections).then(function(App) {
    console.log(App)
})
```
<a name="app.get"></a>
### app.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/app?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[app](#app)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;App&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.app.get(filter, orderby, appendprivileges).then(function(Array.<App>) {
    console.log(Array.<App>)
})
```
