<a name="engineservice"></a>
## engineservice : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [engineservice](#engineservice) : <code>object</code>
  * [.id](#engineservice.id) : <code>object</code>
    * [.get([appendprivileges])](#engineservice.id.get) ⇒ <code>Promise.&lt;EngineService&gt;</code>
    * [.put(postParams, [appendprivileges])](#engineservice.id.put) ⇒ <code>Promise.&lt;EngineService&gt;</code>
  * [.count](#engineservice.count) : <code>object</code>
    * [.get([filter])](#engineservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#engineservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#engineservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
  * [.local](#engineservice.local) : <code>object</code>
    * [.get()](#engineservice.local.get) ⇒ <code>Promise.&lt;EngineService&gt;</code>
  * [.table](#engineservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#engineservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#engineservice.get) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>

<a name="engineservice.id"></a>
### engineservice.id : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#engineservice)</code>  

* [.id](#engineservice.id) : <code>object</code>
  * [.get([appendprivileges])](#engineservice.id.get) ⇒ <code>Promise.&lt;EngineService&gt;</code>
  * [.put(postParams, [appendprivileges])](#engineservice.id.put) ⇒ <code>Promise.&lt;EngineService&gt;</code>

<a name="engineservice.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;EngineService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#engineservice.id)</code>  
**Returns**: <code>Promise.&lt;EngineService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.engineservice.id(id).get(appendprivileges).then(function(EngineService) {
    console.log(EngineService)
})
```
<a name="engineservice.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;EngineService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#engineservice.id)</code>  
**Returns**: <code>Promise.&lt;EngineService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>EngineService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.engineservice.id(id).put(postParams, appendprivileges).then(function(EngineService) {
    console.log(EngineService)
})
```
<a name="engineservice.count"></a>
### engineservice.count : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#engineservice)</code>  
<a name="engineservice.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#engineservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.engineservice.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="engineservice.full"></a>
### engineservice.full : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#engineservice)</code>  
<a name="engineservice.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#engineservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.engineservice.full.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
    console.log(Array.<EngineService>)
})
```
<a name="engineservice.local"></a>
### engineservice.local : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#engineservice)</code>  
<a name="engineservice.local.get"></a>
#### local.get() ⇒ <code>Promise.&lt;EngineService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice/local

This method is manual

**Kind**: static method of <code>[local](#engineservice.local)</code>  
**Returns**: <code>Promise.&lt;EngineService&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.engineservice.local.get().then(function(EngineService) {
    console.log(EngineService)
})
```
<a name="engineservice.table"></a>
### engineservice.table : <code>object</code>
**Kind**: static namespace of <code>[engineservice](#engineservice)</code>  
<a name="engineservice.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#engineservice.table)</code>  
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
qrsApi.engineservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="engineservice.get"></a>
### engineservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/engineservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[engineservice](#engineservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EngineService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.engineservice.get(filter, orderby, appendprivileges).then(function(Array.<EngineService>) {
    console.log(Array.<EngineService>)
})
```
