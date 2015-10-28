<a name="tempcontent"></a>
## tempcontent : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [tempcontent](#tempcontent) : <code>object</code>
  * [.id](#tempcontent.id) : <code>object</code>
    * [.get([appendprivileges])](#tempcontent.id.get) ⇒ <code>Promise.&lt;TempContent&gt;</code>
  * [.count](#tempcontent.count) : <code>object</code>
    * [.get([filter])](#tempcontent.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#tempcontent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#tempcontent.full.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
  * [.table](#tempcontent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#tempcontent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#tempcontent.get) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>

<a name="tempcontent.id"></a>
### tempcontent.id : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#tempcontent)</code>  
<a name="tempcontent.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;TempContent&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/tempcontent/{id}?privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[id](#tempcontent.id)</code>  
**Returns**: <code>Promise.&lt;TempContent&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tempcontent.id(id).get(appendprivileges).then(function(TempContent) {
	console.log(TempContent)
})
```
<a name="tempcontent.count"></a>
### tempcontent.count : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#tempcontent)</code>  
<a name="tempcontent.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/tempcontent/count?filter={filter}
This method is generated

**Kind**: static method of <code>[count](#tempcontent.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.tempcontent.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="tempcontent.full"></a>
### tempcontent.full : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#tempcontent)</code>  
<a name="tempcontent.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/tempcontent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#tempcontent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tempcontent.full.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
	console.log(Array.<TempContent>)
})
```
<a name="tempcontent.table"></a>
### tempcontent.table : <code>object</code>
**Kind**: static namespace of <code>[tempcontent](#tempcontent)</code>  
<a name="tempcontent.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/tempcontent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#tempcontent.table)</code>  
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
qrsApi.tempcontent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="tempcontent.get"></a>
### tempcontent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/tempcontent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[tempcontent](#tempcontent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;TempContent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.tempcontent.get(filter, orderby, appendprivileges).then(function(Array.<TempContent>) {
	console.log(Array.<TempContent>)
})
```
