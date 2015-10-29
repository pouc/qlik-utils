<a name="externalprogramtaskoperational"></a>
## externalprogramtaskoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [externalprogramtaskoperational](#externalprogramtaskoperational) : <code>object</code>
  * [.id](#externalprogramtaskoperational.id) : <code>object</code>
    * [.delete()](#externalprogramtaskoperational.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#externalprogramtaskoperational.id.get) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
    * [.put(postParams, [appendprivileges])](#externalprogramtaskoperational.id.put) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
  * [.count](#externalprogramtaskoperational.count) : <code>object</code>
    * [.get([filter])](#externalprogramtaskoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#externalprogramtaskoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#externalprogramtaskoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
  * [.many](#externalprogramtaskoperational.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#externalprogramtaskoperational.many.post) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
  * [.previewcreateprivilege](#externalprogramtaskoperational.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#externalprogramtaskoperational.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#externalprogramtaskoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#externalprogramtaskoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#externalprogramtaskoperational.get) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#externalprogramtaskoperational.post) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>

<a name="externalprogramtaskoperational.id"></a>
### externalprogramtaskoperational.id : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  

* [.id](#externalprogramtaskoperational.id) : <code>object</code>
  * [.delete()](#externalprogramtaskoperational.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#externalprogramtaskoperational.id.get) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
  * [.put(postParams, [appendprivileges])](#externalprogramtaskoperational.id.put) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>

<a name="externalprogramtaskoperational.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/{id}

This method is generated

**Kind**: static method of <code>[id](#externalprogramtaskoperational.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.externalprogramtaskoperational.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="externalprogramtaskoperational.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#externalprogramtaskoperational.id)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.id(id).get(appendprivileges).then(function(ExternalProgramTaskOperational) {
    console.log(ExternalProgramTaskOperational)
})
```
<a name="externalprogramtaskoperational.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#externalprogramtaskoperational.id)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.id(id).put(postParams, appendprivileges).then(function(ExternalProgramTaskOperational) {
    console.log(ExternalProgramTaskOperational)
})
```
<a name="externalprogramtaskoperational.count"></a>
### externalprogramtaskoperational.count : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
<a name="externalprogramtaskoperational.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#externalprogramtaskoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="externalprogramtaskoperational.full"></a>
### externalprogramtaskoperational.full : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
<a name="externalprogramtaskoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#externalprogramtaskoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
    console.log(Array.<ExternalProgramTaskOperational>)
})
```
<a name="externalprogramtaskoperational.many"></a>
### externalprogramtaskoperational.many : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
<a name="externalprogramtaskoperational.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#externalprogramtaskoperational.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;ExternalProgramTaskOperational&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.many.post(postParams, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
    console.log(Array.<ExternalProgramTaskOperational>)
})
```
<a name="externalprogramtaskoperational.previewcreateprivilege"></a>
### externalprogramtaskoperational.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
<a name="externalprogramtaskoperational.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#externalprogramtaskoperational.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTaskOperational</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="externalprogramtaskoperational.table"></a>
### externalprogramtaskoperational.table : <code>object</code>
**Kind**: static namespace of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
<a name="externalprogramtaskoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#externalprogramtaskoperational.table)</code>  
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
qrsApi.externalprogramtaskoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="externalprogramtaskoperational.get"></a>
### externalprogramtaskoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ExternalProgramTaskOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.get(filter, orderby, appendprivileges).then(function(Array.<ExternalProgramTaskOperational>) {
    console.log(Array.<ExternalProgramTaskOperational>)
})
```
<a name="externalprogramtaskoperational.post"></a>
### externalprogramtaskoperational.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/externalprogramtaskoperational?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[externalprogramtaskoperational](#externalprogramtaskoperational)</code>  
**Returns**: <code>Promise.&lt;ExternalProgramTaskOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>ExternalProgramTaskOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.externalprogramtaskoperational.post(postParams, appendprivileges).then(function(ExternalProgramTaskOperational) {
    console.log(ExternalProgramTaskOperational)
})
```
