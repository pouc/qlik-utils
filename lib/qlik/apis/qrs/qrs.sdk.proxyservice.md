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
  * [.template](#proxyservice.template) : <code>object</code>
    * [.id](#proxyservice.template.id) : <code>object</code>
      * [.delete()](#proxyservice.template.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#proxyservice.template.id.get) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
      * [.put(postParams, [appendprivileges])](#proxyservice.template.id.put) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
    * [.count](#proxyservice.template.count) : <code>object</code>
      * [.get([filter])](#proxyservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#proxyservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#proxyservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
    * [.many](#proxyservice.template.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#proxyservice.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
    * [.previewcreateprivilege](#proxyservice.template.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#proxyservice.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#proxyservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#proxyservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#proxyservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#proxyservice.template.post) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
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
<a name="proxyservice.template"></a>
### proxyservice.template : <code>object</code>
**Kind**: static namespace of <code>[proxyservice](#proxyservice)</code>  

* [.template](#proxyservice.template) : <code>object</code>
  * [.id](#proxyservice.template.id) : <code>object</code>
    * [.delete()](#proxyservice.template.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#proxyservice.template.id.get) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
    * [.put(postParams, [appendprivileges])](#proxyservice.template.id.put) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
  * [.count](#proxyservice.template.count) : <code>object</code>
    * [.get([filter])](#proxyservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#proxyservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#proxyservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
  * [.many](#proxyservice.template.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#proxyservice.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
  * [.previewcreateprivilege](#proxyservice.template.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#proxyservice.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#proxyservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#proxyservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#proxyservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#proxyservice.template.post) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>

<a name="proxyservice.template.id"></a>
#### template.id : <code>object</code>
**Kind**: static namespace of <code>[template](#proxyservice.template)</code>  

* [.id](#proxyservice.template.id) : <code>object</code>
  * [.delete()](#proxyservice.template.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#proxyservice.template.id.get) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
  * [.put(postParams, [appendprivileges])](#proxyservice.template.id.put) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>

<a name="proxyservice.template.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/{id}

This method is generated

**Kind**: static method of <code>[id](#proxyservice.template.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.proxyservice.template.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="proxyservice.template.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#proxyservice.template.id)</code>  
**Returns**: <code>Promise.&lt;ProxyServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.id(id).get(appendprivileges).then(function(ProxyServiceTemplate) {
    console.log(ProxyServiceTemplate)
})
```
<a name="proxyservice.template.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#proxyservice.template.id)</code>  
**Returns**: <code>Promise.&lt;ProxyServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ProxyServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.id(id).put(postParams, appendprivileges).then(function(ProxyServiceTemplate) {
    console.log(ProxyServiceTemplate)
})
```
<a name="proxyservice.template.count"></a>
#### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#proxyservice.template)</code>  
<a name="proxyservice.template.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#proxyservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="proxyservice.template.full"></a>
#### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#proxyservice.template)</code>  
<a name="proxyservice.template.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#proxyservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
    console.log(Array.<ProxyServiceTemplate>)
})
```
<a name="proxyservice.template.many"></a>
#### template.many : <code>object</code>
**Kind**: static namespace of <code>[template](#proxyservice.template)</code>  
<a name="proxyservice.template.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#proxyservice.template.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ProxyServiceTemplate&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.many.post(postParams, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
    console.log(Array.<ProxyServiceTemplate>)
})
```
<a name="proxyservice.template.previewcreateprivilege"></a>
#### template.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[template](#proxyservice.template)</code>  
<a name="proxyservice.template.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#proxyservice.template.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ProxyServiceTemplate</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.proxyservice.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="proxyservice.template.table"></a>
#### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#proxyservice.template)</code>  
<a name="proxyservice.template.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#proxyservice.template.table)</code>  
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
qrsApi.proxyservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="proxyservice.template.get"></a>
#### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#proxyservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ProxyServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.get(filter, orderby, appendprivileges).then(function(Array.<ProxyServiceTemplate>) {
    console.log(Array.<ProxyServiceTemplate>)
})
```
<a name="proxyservice.template.post"></a>
#### template.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ProxyServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/proxyservice/template?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#proxyservice.template)</code>  
**Returns**: <code>Promise.&lt;ProxyServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ProxyServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.proxyservice.template.post(postParams, appendprivileges).then(function(ProxyServiceTemplate) {
    console.log(ProxyServiceTemplate)
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
