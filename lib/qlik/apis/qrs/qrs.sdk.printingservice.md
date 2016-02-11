<a name="printingservice"></a>
## printingservice : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [printingservice](#printingservice) : <code>object</code>
  * [.id](#printingservice.id) : <code>object</code>
    * [.get([appendprivileges])](#printingservice.id.get) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
    * [.put(postParams, [appendprivileges])](#printingservice.id.put) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
  * [.count](#printingservice.count) : <code>object</code>
    * [.get([filter])](#printingservice.count.get) ⇒ <code>Promise.&lt;int&gt;</code>
  * [.full](#printingservice.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#printingservice.full.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
  * [.local](#printingservice.local) : <code>object</code>
    * [.get()](#printingservice.local.get) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
  * [.table](#printingservice.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#printingservice.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#printingservice.get) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>

<a name="printingservice.id"></a>
### printingservice.id : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#printingservice)</code>  

* [.id](#printingservice.id) : <code>object</code>
  * [.get([appendprivileges])](#printingservice.id.get) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
  * [.put(postParams, [appendprivileges])](#printingservice.id.put) ⇒ <code>Promise.&lt;PrintingService&gt;</code>

<a name="printingservice.id.get"></a>
#### id.get([appendprivileges]) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#printingservice.id)</code>  
**Returns**: <code>Promise.&lt;PrintingService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.printingservice.id(id).get(appendprivileges).then(function(PrintingService) {
    console.log(PrintingService)
})
```
<a name="printingservice.id.put"></a>
#### id.put(postParams, [appendprivileges]) ⇒ <code>Promise.&lt;PrintingService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice/{id}?privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[id](#printingservice.id)</code>  
**Returns**: <code>Promise.&lt;PrintingService&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>PrintingService</code> | the parameters to send as request body to the API endpoint |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.printingservice.id(id).put(postParams, appendprivileges).then(function(PrintingService) {
    console.log(PrintingService)
})
```
<a name="printingservice.count"></a>
### printingservice.count : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#printingservice)</code>  
<a name="printingservice.count.get"></a>
#### count.get([filter]) ⇒ <code>Promise.&lt;int&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice/count?filter={filter}

This method is generated

**Kind**: static method of <code>[count](#printingservice.count)</code>  
**Returns**: <code>Promise.&lt;int&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |

**Example**  
```javascript
qrsApi.printingservice.count.get(filter).then(function(int) {
    console.log(int)
})
```
<a name="printingservice.full"></a>
### printingservice.full : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#printingservice)</code>  
<a name="printingservice.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[full](#printingservice.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.printingservice.full.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
    console.log(Array.<PrintingService>)
})
```
<a name="printingservice.local"></a>
### printingservice.local : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#printingservice)</code>  
<a name="printingservice.local.get"></a>
#### local.get() ⇒ <code>Promise.&lt;PrintingService&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice/local

This method is manual

**Kind**: static method of <code>[local](#printingservice.local)</code>  
**Returns**: <code>Promise.&lt;PrintingService&gt;</code> - a promise resolving to the response to the request  
**Example**  
```javascript
qrsApi.printingservice.local.get().then(function(PrintingService) {
    console.log(PrintingService)
})
```
<a name="printingservice.table"></a>
### printingservice.table : <code>object</code>
**Kind**: static namespace of <code>[printingservice](#printingservice)</code>  
<a name="printingservice.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}

This method is generated

**Kind**: static method of <code>[table](#printingservice.table)</code>  
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
qrsApi.printingservice.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
    console.log(Object)
})
```
<a name="printingservice.get"></a>
### printingservice.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:

/qrs/printingservice?filter={filter}&orderby={orderby}&privileges={appendprivileges}

This method is generated

**Kind**: static method of <code>[printingservice](#printingservice)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;PrintingService&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.printingservice.get(filter, orderby, appendprivileges).then(function(Array.<PrintingService>) {
    console.log(Array.<PrintingService>)
})
```
