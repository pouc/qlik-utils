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
  * [.local](#repositoryservice.local) : <code>object</code>
    * [.get()](#repositoryservice.local.get) ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
  * [.table](#repositoryservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#repositoryservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
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
<a name="repositoryservice.local"></a>
### repositoryservice.local : <code>object</code>
**Kind**: static namespace of <code>[repositoryservice](#repositoryservice)</code>  
<a name="repositoryservice.local.get"></a>
#### local.get() ⇒ <code>Promise.&lt;RepositoryService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/repositoryservice/local

This method is manual

**Kind**: static method of <code>[local](#repositoryservice.local)</code>  
**Returns**: <code>Promise.&lt;RepositoryService&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.repositoryservice.local.get().then(function(RepositoryService) {
    console.log(RepositoryService)
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
