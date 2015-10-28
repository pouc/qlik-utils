<a name="appseedinfo"></a>
## appseedinfo : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [appseedinfo](#appseedinfo) : <code>object</code>
  * [.id](#appseedinfo.id) : <code>object</code>
    * [.get([appendprivileges])](#appseedinfo.id.get) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
  * [.count](#appseedinfo.count) : <code>object</code>
    * [.get([filter])](#appseedinfo.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#appseedinfo.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#appseedinfo.full.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
  * [.table](#appseedinfo.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#appseedinfo.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#appseedinfo.get) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>

<a name="appseedinfo.id"></a>
### appseedinfo.id : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#appseedinfo)</code>  
<a name="appseedinfo.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;AppSeedInfo&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appseedinfo/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#appseedinfo.id)</code>  
**Returns**: <code>Promise.&lt;AppSeedInfo&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appseedinfo.id(id).get(appendprivileges).then(function(AppSeedInfo) {
	console.log(AppSeedInfo)
})
```
<a name="appseedinfo.count"></a>
### appseedinfo.count : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#appseedinfo)</code>  
<a name="appseedinfo.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appseedinfo/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#appseedinfo.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.appseedinfo.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="appseedinfo.full"></a>
### appseedinfo.full : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#appseedinfo)</code>  
<a name="appseedinfo.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appseedinfo/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#appseedinfo.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appseedinfo.full.get(filter, orderby, appendprivileges).then(function(Array.<AppSeedInfo>) {
	console.log(Array.<AppSeedInfo>)
})
```
<a name="appseedinfo.table"></a>
### appseedinfo.table : <code>object</code>
**Kind**: static namespace of <code>[appseedinfo](#appseedinfo)</code>  
<a name="appseedinfo.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appseedinfo/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#appseedinfo.table)</code>  
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
qrsApi.appseedinfo.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="appseedinfo.get"></a>
### appseedinfo.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appseedinfo?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[appseedinfo](#appseedinfo)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;AppSeedInfo&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appseedinfo.get(filter, orderby, appendprivileges).then(function(Array.<AppSeedInfo>) {
	console.log(Array.<AppSeedInfo>)
})
```
