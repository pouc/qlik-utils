<a name="proxyservice"></a>
## proxyservice : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [proxyservice](#proxyservice) : <code>object</code>
  * [.id](#proxyservice.id) : <code>object</code>
    * [.get([appendprivileges])](#proxyservice.id.get) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
    * [.put(postParams, [appendprivileges])](#proxyservice.id.put) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
  * [.count](#proxyservice.count) : <code>object</code>
    * [.get([filter])](#proxyservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#proxyservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#proxyservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
  * [.local](#proxyservice.local) : <code>object</code>
    * [.get()](#proxyservice.local.get) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
  * [.table](#proxyservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#proxyservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#proxyservice.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>

<a name="proxyservice.id"></a>
### proxyservice.id : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#proxyservice)</code>  

* [.id](#proxyservice.id) : <code>object</code>
  * [.get([appendprivileges])](#proxyservice.id.get) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
  * [.put(postParams, [appendprivileges])](#proxyservice.id.put) ⇒ <code>Promise.&lt;ProxyService&gt;</code>

<a name="proxyservice.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#proxyservice.id)</code>  
**Returns**: <code>Promise.&lt;ProxyService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.id(id).get(appendprivileges).then(function(ProxyService) {
    console.log(ProxyService)
})
```
<a name="proxyservice.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ProxyService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#proxyservice.id)</code>  
**Returns**: <code>Promise.&lt;ProxyService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ProxyService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.id(id).put(postParams, appendprivileges).then(function(ProxyService) {
    console.log(ProxyService)
})
```
<a name="proxyservice.count"></a>
### proxyservice.count : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#proxyservice)</code>  
<a name="proxyservice.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#proxyservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.proxyservice.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="proxyservice.full"></a>
### proxyservice.full : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#proxyservice)</code>  
<a name="proxyservice.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#proxyservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
    console.log(Array.<ProxyService>)
})
```
<a name="proxyservice.local"></a>
### proxyservice.local : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#proxyservice)</code>  
<a name="proxyservice.local.get"></a>
#### local.get() ⇒ <code>Promise.&lt;ProxyService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/local

This method is manual

**Kind**: static method of <code>[local](#proxyservice.local)</code>  
**Returns**: <code>Promise.&lt;ProxyService&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.proxyservice.local.get().then(function(ProxyService) {
    console.log(ProxyService)
})
```
<a name="proxyservice.table"></a>
### proxyservice.table : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#proxyservice)</code>  
<a name="proxyservice.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#proxyservice.table)</code>  
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
qrsApi.proxyservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="proxyservice.get"></a>
### proxyservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[proxyservice](#proxyservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.get(filter, orderby, appendprivileges).then(function(Array.<ProxyService>) {
    console.log(Array.<ProxyService>)
})
```
