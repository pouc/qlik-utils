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
