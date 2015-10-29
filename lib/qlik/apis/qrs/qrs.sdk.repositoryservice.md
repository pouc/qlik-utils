<a name="repositoryservice"></a>
## repositoryservice : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [repositoryservice](#repositoryservice) : <code>object</code>
  * [.id](#repositoryservice.id) : <code>object</code>
    * [.get([appendprivileges])](#repositoryservice.id.get) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
    * [.put(postParams, [appendprivileges])](#repositoryservice.id.put) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
  * [.count](#repositoryservice.count) : <code>object</code>
    * [.get([filter])](#repositoryservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#repositoryservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#repositoryservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
  * [.table](#repositoryservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#repositoryservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#repositoryservice.template) : <code>object</code>
    * [.id](#repositoryservice.template.id) : <code>object</code>
      * [.delete()](#repositoryservice.template.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#repositoryservice.template.id.get) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
      * [.put(postParams, [appendprivileges])](#repositoryservice.template.id.put) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
    * [.count](#repositoryservice.template.count) : <code>object</code>
      * [.get([filter])](#repositoryservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#repositoryservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#repositoryservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
    * [.many](#repositoryservice.template.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#repositoryservice.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
    * [.previewcreateprivilege](#repositoryservice.template.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#repositoryservice.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#repositoryservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#repositoryservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#repositoryservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#repositoryservice.template.post) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#repositoryservice.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>

<a name="repositoryservice.id"></a>
### repositoryservice.id : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#repositoryservice)</code>  

* [.id](#repositoryservice.id) : <code>object</code>
  * [.get([appendprivileges])](#repositoryservice.id.get) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
  * [.put(postParams, [appendprivileges])](#repositoryservice.id.put) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>

<a name="repositoryservice.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#repositoryservice.id)</code>  
**Returns**: <code>Promise.&lt;RepositoryService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.id(id).get(appendprivileges).then(function(RepositoryService) {
    console.log(RepositoryService)
})
```
<a name="repositoryservice.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#repositoryservice.id)</code>  
**Returns**: <code>Promise.&lt;RepositoryService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>RepositoryService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.id(id).put(postParams, appendprivileges).then(function(RepositoryService) {
    console.log(RepositoryService)
})
```
<a name="repositoryservice.count"></a>
### repositoryservice.count : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#repositoryservice)</code>  
<a name="repositoryservice.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#repositoryservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.repositoryservice.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="repositoryservice.full"></a>
### repositoryservice.full : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#repositoryservice)</code>  
<a name="repositoryservice.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#repositoryservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.full.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryService>) {
    console.log(Array.<RepositoryService>)
})
```
<a name="repositoryservice.table"></a>
### repositoryservice.table : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#repositoryservice)</code>  
<a name="repositoryservice.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#repositoryservice.table)</code>  
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
qrsApi.repositoryservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="repositoryservice.template"></a>
### repositoryservice.template : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#repositoryservice)</code>  

* [.template](#repositoryservice.template) : <code>object</code>
  * [.id](#repositoryservice.template.id) : <code>object</code>
    * [.delete()](#repositoryservice.template.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#repositoryservice.template.id.get) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
    * [.put(postParams, [appendprivileges])](#repositoryservice.template.id.put) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
  * [.count](#repositoryservice.template.count) : <code>object</code>
    * [.get([filter])](#repositoryservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#repositoryservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#repositoryservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
  * [.many](#repositoryservice.template.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#repositoryservice.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
  * [.previewcreateprivilege](#repositoryservice.template.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#repositoryservice.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#repositoryservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#repositoryservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#repositoryservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#repositoryservice.template.post) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>

<a name="repositoryservice.template.id"></a>
#### template.id : <code>object</code>
**Kind**: static namespace of <code>[template](#repositoryservice.template)</code>  

* [.id](#repositoryservice.template.id) : <code>object</code>
  * [.delete()](#repositoryservice.template.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#repositoryservice.template.id.get) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
  * [.put(postParams, [appendprivileges])](#repositoryservice.template.id.put) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>

<a name="repositoryservice.template.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/{id}

This method is generated

**Kind**: static method of <code>[id](#repositoryservice.template.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.repositoryservice.template.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="repositoryservice.template.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#repositoryservice.template.id)</code>  
**Returns**: <code>Promise.&lt;RepositoryServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.id(id).get(appendprivileges).then(function(RepositoryServiceTemplate) {
    console.log(RepositoryServiceTemplate)
})
```
<a name="repositoryservice.template.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#repositoryservice.template.id)</code>  
**Returns**: <code>Promise.&lt;RepositoryServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>RepositoryServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.id(id).put(postParams, appendprivileges).then(function(RepositoryServiceTemplate) {
    console.log(RepositoryServiceTemplate)
})
```
<a name="repositoryservice.template.count"></a>
#### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#repositoryservice.template)</code>  
<a name="repositoryservice.template.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#repositoryservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="repositoryservice.template.full"></a>
#### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#repositoryservice.template)</code>  
<a name="repositoryservice.template.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#repositoryservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
    console.log(Array.<RepositoryServiceTemplate>)
})
```
<a name="repositoryservice.template.many"></a>
#### template.many : <code>object</code>
**Kind**: static namespace of <code>[template](#repositoryservice.template)</code>  
<a name="repositoryservice.template.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#repositoryservice.template.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;RepositoryServiceTemplate&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.many.post(postParams, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
    console.log(Array.<RepositoryServiceTemplate>)
})
```
<a name="repositoryservice.template.previewcreateprivilege"></a>
#### template.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[template](#repositoryservice.template)</code>  
<a name="repositoryservice.template.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#repositoryservice.template.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>RepositoryServiceTemplate</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.repositoryservice.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="repositoryservice.template.table"></a>
#### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#repositoryservice.template)</code>  
<a name="repositoryservice.template.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#repositoryservice.template.table)</code>  
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
qrsApi.repositoryservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="repositoryservice.template.get"></a>
#### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#repositoryservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryServiceTemplate>) {
    console.log(Array.<RepositoryServiceTemplate>)
})
```
<a name="repositoryservice.template.post"></a>
#### template.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;RepositoryServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/template?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#repositoryservice.template)</code>  
**Returns**: <code>Promise.&lt;RepositoryServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>RepositoryServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.template.post(postParams, appendprivileges).then(function(RepositoryServiceTemplate) {
    console.log(RepositoryServiceTemplate)
})
```
<a name="repositoryservice.get"></a>
### repositoryservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[repositoryservice](#repositoryservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;RepositoryService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.repositoryservice.get(filter, orderby, appendprivileges).then(function(Array.<RepositoryService>) {
    console.log(Array.<RepositoryService>)
})
```
