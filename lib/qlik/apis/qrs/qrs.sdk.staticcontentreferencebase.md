<a name="staticcontentreferencebase"></a>
## staticcontentreferencebase : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [staticcontentreferencebase](#staticcontentreferencebase) : <code>object</code>
  * [.full](#staticcontentreferencebase.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#staticcontentreferencebase.full.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
  * [.table](#staticcontentreferencebase.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#staticcontentreferencebase.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#staticcontentreferencebase.get) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>

<a name="staticcontentreferencebase.full"></a>
### staticcontentreferencebase.full : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreferencebase](#staticcontentreferencebase)</code>  
<a name="staticcontentreferencebase.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/staticcontentreferencebase/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#staticcontentreferencebase.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.staticcontentreferencebase.full.get(filter, orderby, appendprivileges).then(function(Array.<IStaticContentReferenceBase>) {
	console.log(Array.<IStaticContentReferenceBase>)
})
```
<a name="staticcontentreferencebase.table"></a>
### staticcontentreferencebase.table : <code>object</code>
**Kind**: static namespace of <code>[staticcontentreferencebase](#staticcontentreferencebase)</code>  
<a name="staticcontentreferencebase.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/staticcontentreferencebase/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#staticcontentreferencebase.table)</code>  
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
qrsApi.staticcontentreferencebase.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="staticcontentreferencebase.get"></a>
### staticcontentreferencebase.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/staticcontentreferencebase?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[staticcontentreferencebase](#staticcontentreferencebase)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;IStaticContentReferenceBase&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.staticcontentreferencebase.get(filter, orderby, appendprivileges).then(function(Array.<IStaticContentReferenceBase>) {
	console.log(Array.<IStaticContentReferenceBase>)
})
```
