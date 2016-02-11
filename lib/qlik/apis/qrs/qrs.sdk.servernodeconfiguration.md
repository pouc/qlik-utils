<a name="servernodeconfiguration"></a>
## servernodeconfiguration : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [servernodeconfiguration](#servernodeconfiguration) : <code>object</code>
  * [.id](#servernodeconfiguration.id) : <code>object</code>
    * [.delete()](#servernodeconfiguration.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#servernodeconfiguration.id.get) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
    * [.put(postParams, [appendprivileges])](#servernodeconfiguration.id.put) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
  * [.container](#servernodeconfiguration.container) : <code>object</code>
    * [.get()](#servernodeconfiguration.container.get) ⇒ <code>Promise.&lt;ServerNodeCreationContainer&gt;</code>
    * [.post(postParams, [appendprivileges])](#servernodeconfiguration.container.post) ⇒ <code>Promise.&lt;ServerNodeResultContainer&gt;</code>
  * [.count](#servernodeconfiguration.count) : <code>object</code>
    * [.get([filter])](#servernodeconfiguration.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#servernodeconfiguration.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#servernodeconfiguration.full.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
  * [.local](#servernodeconfiguration.local) : <code>object</code>
    * [.get()](#servernodeconfiguration.local.get) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
  * [.previewcreateprivilege](#servernodeconfiguration.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#servernodeconfiguration.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#servernodeconfiguration.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#servernodeconfiguration.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#servernodeconfiguration.get) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>

<a name="servernodeconfiguration.id"></a>
### servernodeconfiguration.id : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  

* [.id](#servernodeconfiguration.id) : <code>object</code>
  * [.delete()](#servernodeconfiguration.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#servernodeconfiguration.id.get) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
  * [.put(postParams, [appendprivileges])](#servernodeconfiguration.id.put) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>

<a name="servernodeconfiguration.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/{id}

This method is generated

**Kind**: static method of <code>[id](#servernodeconfiguration.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.servernodeconfiguration.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="servernodeconfiguration.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#servernodeconfiguration.id)</code>  
**Returns**: <code>Promise.&lt;ServerNodeConfiguration&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servernodeconfiguration.id(id).get(appendprivileges).then(function(ServerNodeConfiguration) {
    console.log(ServerNodeConfiguration)
})
```
<a name="servernodeconfiguration.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/{id}?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[id](#servernodeconfiguration.id)</code>  
**Returns**: <code>Promise.&lt;ServerNodeConfiguration&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ServerNodeConfiguration</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servernodeconfiguration.id(id).put(postParams, appendprivileges).then(function(ServerNodeConfiguration) {
    console.log(ServerNodeConfiguration)
})
```
<a name="servernodeconfiguration.container"></a>
### servernodeconfiguration.container : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  

* [.container](#servernodeconfiguration.container) : <code>object</code>
  * [.get()](#servernodeconfiguration.container.get) ⇒ <code>Promise.&lt;ServerNodeCreationContainer&gt;</code>
  * [.post(postParams, [appendprivileges])](#servernodeconfiguration.container.post) ⇒ <code>Promise.&lt;ServerNodeResultContainer&gt;</code>

<a name="servernodeconfiguration.container.get"></a>
#### container.get() ⇒ <code>Promise.&lt;ServerNodeCreationContainer&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/container

This method is manual

**Kind**: static method of <code>[container](#servernodeconfiguration.container)</code>  
**Returns**: <code>Promise.&lt;ServerNodeCreationContainer&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.servernodeconfiguration.container.get().then(function(ServerNodeCreationContainer) {
    console.log(ServerNodeCreationContainer)
})
```
<a name="servernodeconfiguration.container.post"></a>
#### container.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ServerNodeResultContainer&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/container?privileges={appendprivileges}

This method is manual

**Kind**: static method of <code>[container](#servernodeconfiguration.container)</code>  
**Returns**: <code>Promise.&lt;ServerNodeResultContainer&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ServerNodeCreationContainer</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servernodeconfiguration.container.post(postParams, appendprivileges).then(function(ServerNodeResultContainer) {
    console.log(ServerNodeResultContainer)
})
```
<a name="servernodeconfiguration.count"></a>
### servernodeconfiguration.count : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  
<a name="servernodeconfiguration.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#servernodeconfiguration.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.servernodeconfiguration.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="servernodeconfiguration.full"></a>
### servernodeconfiguration.full : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  
<a name="servernodeconfiguration.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#servernodeconfiguration.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servernodeconfiguration.full.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
    console.log(Array.<ServerNodeConfiguration>)
})
```
<a name="servernodeconfiguration.local"></a>
### servernodeconfiguration.local : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  
<a name="servernodeconfiguration.local.get"></a>
#### local.get() ⇒ <code>Promise.&lt;ServerNodeConfiguration&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/local

This method is manual

**Kind**: static method of <code>[local](#servernodeconfiguration.local)</code>  
**Returns**: <code>Promise.&lt;ServerNodeConfiguration&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.servernodeconfiguration.local.get().then(function(ServerNodeConfiguration) {
    console.log(ServerNodeConfiguration)
})
```
<a name="servernodeconfiguration.previewcreateprivilege"></a>
### servernodeconfiguration.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  
<a name="servernodeconfiguration.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/previewcreateprivilege

This method is manual

**Kind**: static method of <code>[previewcreateprivilege](#servernodeconfiguration.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ServerNodeConfiguration</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.servernodeconfiguration.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="servernodeconfiguration.table"></a>
### servernodeconfiguration.table : <code>object</code>
**Kind**: static namespace of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  
<a name="servernodeconfiguration.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#servernodeconfiguration.table)</code>  
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
qrsApi.servernodeconfiguration.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="servernodeconfiguration.get"></a>
### servernodeconfiguration.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/servernodeconfiguration?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[servernodeconfiguration](#servernodeconfiguration)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ServerNodeConfiguration&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.servernodeconfiguration.get(filter, orderby, appendprivileges).then(function(Array.<ServerNodeConfiguration>) {
    console.log(Array.<ServerNodeConfiguration>)
})
```
