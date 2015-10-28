<a name="appavailability"></a>
## appavailability : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [appavailability](#appavailability) : <code>object</code>
  * [.id](#appavailability.id) : <code>object</code>
    * [.get([appendprivileges])](#appavailability.id.get) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
  * [.count](#appavailability.count) : <code>object</code>
    * [.get([filter])](#appavailability.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#appavailability.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#appavailability.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
  * [.table](#appavailability.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#appavailability.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#appavailability.get) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>

<a name="appavailability.id"></a>
### appavailability.id : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#appavailability)</code>  
<a name="appavailability.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppAvailability&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appavailability/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#appavailability.id)</code>  
**Returns**: <code>Promise.&lt;AppAvailability&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appavailability.id(id).get(appendprivileges).then(function(AppAvailability) {
	console.log(AppAvailability)
})
```
<a name="appavailability.count"></a>
### appavailability.count : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#appavailability)</code>  
<a name="appavailability.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appavailability/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#appavailability.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.appavailability.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="appavailability.full"></a>
### appavailability.full : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#appavailability)</code>  
<a name="appavailability.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appavailability/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#appavailability.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appavailability.full.get(filter, orderby, appendprivileges).then(function(Array.<AppAvailability>) {
	console.log(Array.<AppAvailability>)
})
```
<a name="appavailability.table"></a>
### appavailability.table : <code>object</code>
**Kind**: static namespace of <code>[appavailability](#appavailability)</code>  
<a name="appavailability.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appavailability/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#appavailability.table)</code>  
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
qrsApi.appavailability.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="appavailability.get"></a>
### appavailability.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appavailability?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[appavailability](#appavailability)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppAvailability&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appavailability.get(filter, orderby, appendprivileges).then(function(Array.<AppAvailability>) {
	console.log(Array.<AppAvailability>)
})
```
