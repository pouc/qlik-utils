<a name="schedulerservice"></a>
## schedulerservice : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [schedulerservice](#schedulerservice) : <code>object</code>
  * [.id](#schedulerservice.id) : <code>object</code>
    * [.get([appendprivileges])](#schedulerservice.id.get) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
    * [.put(postParams, [appendprivileges])](#schedulerservice.id.put) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
  * [.count](#schedulerservice.count) : <code>object</code>
    * [.get([filter])](#schedulerservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#schedulerservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#schedulerservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
  * [.local](#schedulerservice.local) : <code>object</code>
    * [.get()](#schedulerservice.local.get) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
  * [.table](#schedulerservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#schedulerservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.template](#schedulerservice.template) : <code>object</code>
    * [.id](#schedulerservice.template.id) : <code>object</code>
      * [.delete()](#schedulerservice.template.id.delete) ⇒ <code>Promise</code>
      * [.get([appendprivileges])](#schedulerservice.template.id.get) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
      * [.put(postParams, [appendprivileges])](#schedulerservice.template.id.put) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
    * [.count](#schedulerservice.template.count) : <code>object</code>
      * [.get([filter])](#schedulerservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
    * [.full](#schedulerservice.template.full) : <code>object</code>
      * [.get([filter], [orderby], [appendprivileges])](#schedulerservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
    * [.many](#schedulerservice.template.many) : <code>object</code>
      * [.post(postParams, [appendprivileges])](#schedulerservice.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
    * [.previewcreateprivilege](#schedulerservice.template.previewcreateprivilege) : <code>object</code>
      * [.post(postParams)](#schedulerservice.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
    * [.table](#schedulerservice.template.table) : <code>object</code>
      * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#schedulerservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.get([filter], [orderby], [appendprivileges])](#schedulerservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
    * [.post(postParams, [appendprivileges])](#schedulerservice.template.post) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#schedulerservice.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>

<a name="schedulerservice.id"></a>
### schedulerservice.id : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#schedulerservice)</code>  

* [.id](#schedulerservice.id) : <code>object</code>
  * [.get([appendprivileges])](#schedulerservice.id.get) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
  * [.put(postParams, [appendprivileges])](#schedulerservice.id.put) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>

<a name="schedulerservice.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#schedulerservice.id)</code>  
**Returns**: <code>Promise.&lt;SchedulerService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.id(id).get(appendprivileges).then(function(SchedulerService) {
    console.log(SchedulerService)
})
```
<a name="schedulerservice.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#schedulerservice.id)</code>  
**Returns**: <code>Promise.&lt;SchedulerService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchedulerService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.id(id).put(postParams, appendprivileges).then(function(SchedulerService) {
    console.log(SchedulerService)
})
```
<a name="schedulerservice.count"></a>
### schedulerservice.count : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#schedulerservice)</code>  
<a name="schedulerservice.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#schedulerservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.schedulerservice.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="schedulerservice.full"></a>
### schedulerservice.full : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#schedulerservice)</code>  
<a name="schedulerservice.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#schedulerservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
    console.log(Array.<SchedulerService>)
})
```
<a name="schedulerservice.local"></a>
### schedulerservice.local : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#schedulerservice)</code>  
<a name="schedulerservice.local.get"></a>
#### local.get() ⇒ <code>Promise.&lt;SchedulerService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/local

This method is manual

**Kind**: static method of <code>[local](#schedulerservice.local)</code>  
**Returns**: <code>Promise.&lt;SchedulerService&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.schedulerservice.local.get().then(function(SchedulerService) {
    console.log(SchedulerService)
})
```
<a name="schedulerservice.table"></a>
### schedulerservice.table : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#schedulerservice)</code>  
<a name="schedulerservice.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#schedulerservice.table)</code>  
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
qrsApi.schedulerservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="schedulerservice.template"></a>
### schedulerservice.template : <code>object</code>
**Kind**: static namespace of <code>[schedulerservice](#schedulerservice)</code>  

* [.template](#schedulerservice.template) : <code>object</code>
  * [.id](#schedulerservice.template.id) : <code>object</code>
    * [.delete()](#schedulerservice.template.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#schedulerservice.template.id.get) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
    * [.put(postParams, [appendprivileges])](#schedulerservice.template.id.put) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
  * [.count](#schedulerservice.template.count) : <code>object</code>
    * [.get([filter])](#schedulerservice.template.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#schedulerservice.template.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#schedulerservice.template.full.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
  * [.many](#schedulerservice.template.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#schedulerservice.template.many.post) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
  * [.previewcreateprivilege](#schedulerservice.template.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#schedulerservice.template.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#schedulerservice.template.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#schedulerservice.template.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#schedulerservice.template.get) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#schedulerservice.template.post) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>

<a name="schedulerservice.template.id"></a>
#### template.id : <code>object</code>
**Kind**: static namespace of <code>[template](#schedulerservice.template)</code>  

* [.id](#schedulerservice.template.id) : <code>object</code>
  * [.delete()](#schedulerservice.template.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#schedulerservice.template.id.get) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
  * [.put(postParams, [appendprivileges])](#schedulerservice.template.id.put) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>

<a name="schedulerservice.template.id.delete"></a>
##### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/{id}

This method is generated

**Kind**: static method of <code>[id](#schedulerservice.template.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.schedulerservice.template.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="schedulerservice.template.id.get"></a>
##### id.get([appendprivileges]) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#schedulerservice.template.id)</code>  
**Returns**: <code>Promise.&lt;SchedulerServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.id(id).get(appendprivileges).then(function(SchedulerServiceTemplate) {
    console.log(SchedulerServiceTemplate)
})
```
<a name="schedulerservice.template.id.put"></a>
##### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#schedulerservice.template.id)</code>  
**Returns**: <code>Promise.&lt;SchedulerServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchedulerServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.id(id).put(postParams, appendprivileges).then(function(SchedulerServiceTemplate) {
    console.log(SchedulerServiceTemplate)
})
```
<a name="schedulerservice.template.count"></a>
#### template.count : <code>object</code>
**Kind**: static namespace of <code>[template](#schedulerservice.template)</code>  
<a name="schedulerservice.template.count.get"></a>
##### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#schedulerservice.template.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="schedulerservice.template.full"></a>
#### template.full : <code>object</code>
**Kind**: static namespace of <code>[template](#schedulerservice.template)</code>  
<a name="schedulerservice.template.full.get"></a>
##### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#schedulerservice.template.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.full.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
    console.log(Array.<SchedulerServiceTemplate>)
})
```
<a name="schedulerservice.template.many"></a>
#### template.many : <code>object</code>
**Kind**: static namespace of <code>[template](#schedulerservice.template)</code>  
<a name="schedulerservice.template.many.post"></a>
##### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#schedulerservice.template.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;SchedulerServiceTemplate&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.many.post(postParams, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
    console.log(Array.<SchedulerServiceTemplate>)
})
```
<a name="schedulerservice.template.previewcreateprivilege"></a>
#### template.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[template](#schedulerservice.template)</code>  
<a name="schedulerservice.template.previewcreateprivilege.post"></a>
##### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#schedulerservice.template.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchedulerServiceTemplate</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.schedulerservice.template.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="schedulerservice.template.table"></a>
#### template.table : <code>object</code>
**Kind**: static namespace of <code>[template](#schedulerservice.template)</code>  
<a name="schedulerservice.template.table.post"></a>
##### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#schedulerservice.template.table)</code>  
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
qrsApi.schedulerservice.template.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="schedulerservice.template.get"></a>
#### template.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#schedulerservice.template)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerServiceTemplate&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerServiceTemplate>) {
    console.log(Array.<SchedulerServiceTemplate>)
})
```
<a name="schedulerservice.template.post"></a>
#### template.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;SchedulerServiceTemplate&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice/template?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[template](#schedulerservice.template)</code>  
**Returns**: <code>Promise.&lt;SchedulerServiceTemplate&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>SchedulerServiceTemplate</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.template.post(postParams, appendprivileges).then(function(SchedulerServiceTemplate) {
    console.log(SchedulerServiceTemplate)
})
```
<a name="schedulerservice.get"></a>
### schedulerservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/schedulerservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[schedulerservice](#schedulerservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;SchedulerService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.schedulerservice.get(filter, orderby, appendprivileges).then(function(Array.<SchedulerService>) {
    console.log(Array.<SchedulerService>)
})
```
