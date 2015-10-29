<a name="compositeeventruleoperational"></a>
## compositeeventruleoperational : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [compositeeventruleoperational](#compositeeventruleoperational) : <code>object</code>
  * [.id](#compositeeventruleoperational.id) : <code>object</code>
    * [.delete()](#compositeeventruleoperational.id.delete) ⇒ <code>Promise</code>
    * [.get([appendprivileges])](#compositeeventruleoperational.id.get) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
    * [.put(postParams, [appendprivileges])](#compositeeventruleoperational.id.put) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
  * [.count](#compositeeventruleoperational.count) : <code>object</code>
    * [.get([filter])](#compositeeventruleoperational.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#compositeeventruleoperational.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#compositeeventruleoperational.full.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
  * [.many](#compositeeventruleoperational.many) : <code>object</code>
    * [.post(postParams, [appendprivileges])](#compositeeventruleoperational.many.post) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
  * [.previewcreateprivilege](#compositeeventruleoperational.previewcreateprivilege) : <code>object</code>
    * [.post(postParams)](#compositeeventruleoperational.previewcreateprivilege.post) ⇒ <code>Promise.&lt;Boolean&gt;</code>
  * [.table](#compositeeventruleoperational.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#compositeeventruleoperational.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#compositeeventruleoperational.get) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
  * [.post(postParams, [appendprivileges])](#compositeeventruleoperational.post) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>

<a name="compositeeventruleoperational.id"></a>
### compositeeventruleoperational.id : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  

* [.id](#compositeeventruleoperational.id) : <code>object</code>
  * [.delete()](#compositeeventruleoperational.id.delete) ⇒ <code>Promise</code>
  * [.get([appendprivileges])](#compositeeventruleoperational.id.get) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
  * [.put(postParams, [appendprivileges])](#compositeeventruleoperational.id.put) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>

<a name="compositeeventruleoperational.id.delete"></a>
#### id.delete() ⇒ <code>Promise</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/{id}

This method is generated

**Kind**: static method of <code>[id](#compositeeventruleoperational.id)</code>  
**Returns**: <code>Promise</code> - a promise resolving without a return value when the request is finished  
**Example**  
```javascript
qrsApi.compositeeventruleoperational.id(id).delete().then(function() {
    console.log('done')
})
```
<a name="compositeeventruleoperational.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#compositeeventruleoperational.id)</code>  
**Returns**: <code>Promise.&lt;CompositeEventRuleOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.id(id).get(appendprivileges).then(function(CompositeEventRuleOperational) {
    console.log(CompositeEventRuleOperational)
})
```
<a name="compositeeventruleoperational.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#compositeeventruleoperational.id)</code>  
**Returns**: <code>Promise.&lt;CompositeEventRuleOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventRuleOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.id(id).put(postParams, appendprivileges).then(function(CompositeEventRuleOperational) {
    console.log(CompositeEventRuleOperational)
})
```
<a name="compositeeventruleoperational.count"></a>
### compositeeventruleoperational.count : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
<a name="compositeeventruleoperational.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#compositeeventruleoperational.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="compositeeventruleoperational.full"></a>
### compositeeventruleoperational.full : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
<a name="compositeeventruleoperational.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#compositeeventruleoperational.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.full.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
    console.log(Array.<CompositeEventRuleOperational>)
})
```
<a name="compositeeventruleoperational.many"></a>
### compositeeventruleoperational.many : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
<a name="compositeeventruleoperational.many.post"></a>
#### many.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/many?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[many](#compositeeventruleoperational.many)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>List.&lt;CompositeEventRuleOperational&gt;</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.many.post(postParams, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
    console.log(Array.<CompositeEventRuleOperational>)
})
```
<a name="compositeeventruleoperational.previewcreateprivilege"></a>
### compositeeventruleoperational.previewcreateprivilege : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
<a name="compositeeventruleoperational.previewcreateprivilege.post"></a>
#### previewcreateprivilege.post(postParams) ⇒ <code>Promise.&lt;Boolean&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/previewcreateprivilege

This method is generated

**Kind**: static method of <code>[previewcreateprivilege](#compositeeventruleoperational.previewcreateprivilege)</code>  
**Returns**: <code>Promise.&lt;Boolean&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventRuleOperational</code> | the parameters to send as request body to the API endpoint |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.previewcreateprivilege.post(postParams).then(function(Boolean) {
    console.log(Boolean)
})
```
<a name="compositeeventruleoperational.table"></a>
### compositeeventruleoperational.table : <code>object</code>
**Kind**: static namespace of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
<a name="compositeeventruleoperational.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#compositeeventruleoperational.table)</code>  
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
qrsApi.compositeeventruleoperational.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="compositeeventruleoperational.get"></a>
### compositeeventruleoperational.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;CompositeEventRuleOperational&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.get(filter, orderby, appendprivileges).then(function(Array.<CompositeEventRuleOperational>) {
    console.log(Array.<CompositeEventRuleOperational>)
})
```
<a name="compositeeventruleoperational.post"></a>
### compositeeventruleoperational.post(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;CompositeEventRuleOperational&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/compositeeventruleoperational?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[compositeeventruleoperational](#compositeeventruleoperational)</code>  
**Returns**: <code>Promise.&lt;CompositeEventRuleOperational&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>CompositeEventRuleOperational</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.compositeeventruleoperational.post(postParams, appendprivileges).then(function(CompositeEventRuleOperational) {
    console.log(CompositeEventRuleOperational)
})
```
