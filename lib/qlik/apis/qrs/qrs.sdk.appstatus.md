<a name="appstatus"></a>
## appstatus : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [appstatus](#appstatus) : <code>object</code>
  * [.id](#appstatus.id) : <code>object</code>
    * [.get([appendprivileges])](#appstatus.id.get) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
  * [.count](#appstatus.count) : <code>object</code>
    * [.get([filter])](#appstatus.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#appstatus.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#appstatus.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
  * [.table](#appstatus.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#appstatus.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#appstatus.get) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>

<a name="appstatus.id"></a>
### appstatus.id : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#appstatus)</code>  
<a name="appstatus.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppStatus&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/appstatus/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#appstatus.id)</code>  
**Returns**: <code>Promise.&lt;AppStatus&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appstatus.id(id).get(appendprivileges).then(function(AppStatus) {
	console.log(AppStatus)
})
```
<a name="appstatus.count"></a>
### appstatus.count : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#appstatus)</code>  
<a name="appstatus.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/appstatus/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#appstatus.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.appstatus.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="appstatus.full"></a>
### appstatus.full : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#appstatus)</code>  
<a name="appstatus.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/appstatus/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#appstatus.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appstatus.full.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
	console.log(Array.<AppStatus>)
})
```
<a name="appstatus.table"></a>
### appstatus.table : <code>object</code>
**Kind**: static namespace of <code>[appstatus](#appstatus)</code>  
<a name="appstatus.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/appstatus/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#appstatus.table)</code>  
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
qrsApi.appstatus.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="appstatus.get"></a>
### appstatus.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/appstatus?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[appstatus](#appstatus)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppStatus&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appstatus.get(filter, orderby, appendprivileges).then(function(Array.<AppStatus>) {
	console.log(Array.<AppStatus>)
})
```
