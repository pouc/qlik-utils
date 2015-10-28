<a name="binarysyncruleevaluation"></a>
## binarysyncruleevaluation : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [binarysyncruleevaluation](#binarysyncruleevaluation) : <code>object</code>
  * [.id](#binarysyncruleevaluation.id) : <code>object</code>
    * [.get([appendprivileges])](#binarysyncruleevaluation.id.get) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
  * [.count](#binarysyncruleevaluation.count) : <code>object</code>
    * [.get([filter])](#binarysyncruleevaluation.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#binarysyncruleevaluation.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#binarysyncruleevaluation.full.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
  * [.table](#binarysyncruleevaluation.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#binarysyncruleevaluation.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#binarysyncruleevaluation.get) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>

<a name="binarysyncruleevaluation.id"></a>
### binarysyncruleevaluation.id : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#binarysyncruleevaluation)</code>  
<a name="binarysyncruleevaluation.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/binarysyncruleevaluation/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#binarysyncruleevaluation.id)</code>  
**Returns**: <code>Promise.&lt;BinarySyncRuleEvaluation&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarysyncruleevaluation.id(id).get(appendprivileges).then(function(BinarySyncRuleEvaluation) {
	console.log(BinarySyncRuleEvaluation)
})
```
<a name="binarysyncruleevaluation.count"></a>
### binarysyncruleevaluation.count : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#binarysyncruleevaluation)</code>  
<a name="binarysyncruleevaluation.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/binarysyncruleevaluation/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#binarysyncruleevaluation.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.binarysyncruleevaluation.count.get(filter).then(function(int) {
	console.log(int)
})
```
<a name="binarysyncruleevaluation.full"></a>
### binarysyncruleevaluation.full : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#binarysyncruleevaluation)</code>  
<a name="binarysyncruleevaluation.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/binarysyncruleevaluation/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#binarysyncruleevaluation.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarysyncruleevaluation.full.get(filter, orderby, appendprivileges).then(function(Array.<BinarySyncRuleEvaluation>) {
	console.log(Array.<BinarySyncRuleEvaluation>)
})
```
<a name="binarysyncruleevaluation.table"></a>
### binarysyncruleevaluation.table : <code>object</code>
**Kind**: static namespace of <code>[binarysyncruleevaluation](#binarysyncruleevaluation)</code>  
<a name="binarysyncruleevaluation.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/binarysyncruleevaluation/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#binarysyncruleevaluation.table)</code>  
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
qrsApi.binarysyncruleevaluation.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="binarysyncruleevaluation.get"></a>
### binarysyncruleevaluation.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/binarysyncruleevaluation?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[binarysyncruleevaluation](#binarysyncruleevaluation)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;BinarySyncRuleEvaluation&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.binarysyncruleevaluation.get(filter, orderby, appendprivileges).then(function(Array.<BinarySyncRuleEvaluation>) {
	console.log(Array.<BinarySyncRuleEvaluation>)
})
```
