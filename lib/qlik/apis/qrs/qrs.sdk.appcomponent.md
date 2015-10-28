<a name="appcomponent"></a>
## appcomponent : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [appcomponent](#appcomponent) : <code>object</code>
  * [.full](#appcomponent.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#appcomponent.full.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
  * [.table](#appcomponent.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#appcomponent.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#appcomponent.get) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>

<a name="appcomponent.full"></a>
### appcomponent.full : <code>object</code>
**Kind**: static namespace of <code>[appcomponent](#appcomponent)</code>  
<a name="appcomponent.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcomponent/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#appcomponent.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appcomponent.full.get(filter, orderby, appendprivileges).then(function(Array.<IAppComponent>) {
	console.log(Array.<IAppComponent>)
})
```
<a name="appcomponent.table"></a>
### appcomponent.table : <code>object</code>
**Kind**: static namespace of <code>[appcomponent](#appcomponent)</code>  
<a name="appcomponent.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcomponent/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#appcomponent.table)</code>  
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
qrsApi.appcomponent.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="appcomponent.get"></a>
### appcomponent.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/appcomponent?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[appcomponent](#appcomponent)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IAppComponent&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.appcomponent.get(filter, orderby, appendprivileges).then(function(Array.<IAppComponent>) {
	console.log(Array.<IAppComponent>)
})
```
