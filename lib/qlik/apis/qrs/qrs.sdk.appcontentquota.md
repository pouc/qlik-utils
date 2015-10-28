<a name="appcontentquota"></a>
## appcontentquota : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [appcontentquota](#appcontentquota) : <code>object</code>
  * [.id](#appcontentquota.id) : <code>object</code>
    * [.get([appendprivileges])](#appcontentquota.id.get) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
    * [.put(postParams, [appendprivileges])](#appcontentquota.id.put) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
  * [.count](#appcontentquota.count) : <code>object</code>
    * [.get([filter])](#appcontentquota.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#appcontentquota.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#appcontentquota.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
  * [.table](#appcontentquota.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#appcontentquota.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#appcontentquota.get) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>

<a name="appcontentquota.id"></a>
### appcontentquota.id : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#appcontentquota)</code>  

* [.id](#appcontentquota.id) : <code>object</code>
  * [.get([appendprivileges])](#appcontentquota.id.get) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
  * [.put(postParams, [appendprivileges])](#appcontentquota.id.put) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>

<a name="appcontentquota.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#appcontentquota.id)</code>  
**Returns**: <code>Promise.&lt;AppContentQuota&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appcontentquota.id(id).get(appendprivileges).then(function(AppContentQuota) {
	console.log(AppContentQuota)
})
```
<a name="appcontentquota.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;AppContentQuota&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#appcontentquota.id)</code>  
**Returns**: <code>Promise.&lt;AppContentQuota&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>AppContentQuota</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appcontentquota.id(id).put(postParams, appendprivileges).then(function(AppContentQuota) {
	console.log(AppContentQuota)
})
```
<a name="appcontentquota.count"></a>
### appcontentquota.count : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#appcontentquota)</code>  
<a name="appcontentquota.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#appcontentquota.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.appcontentquota.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="appcontentquota.full"></a>
### appcontentquota.full : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#appcontentquota)</code>  
<a name="appcontentquota.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#appcontentquota.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appcontentquota.full.get(filter, orderby, appendprivileges).then(function(Array.<AppContentQuota>) {
	console.log(Array.<AppContentQuota>)
})
```
<a name="appcontentquota.table"></a>
### appcontentquota.table : <code>object</code>
**Kind**: static namespace of <code>[appcontentquota](#appcontentquota)</code>  
<a name="appcontentquota.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#appcontentquota.table)</code>  
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
qrsApi.appcontentquota.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="appcontentquota.get"></a>
### appcontentquota.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcontentquota?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[appcontentquota](#appcontentquota)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppContentQuota&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appcontentquota.get(filter, orderby, appendprivileges).then(function(Array.<AppContentQuota>) {
	console.log(Array.<AppContentQuota>)
})
```
