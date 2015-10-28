<a name="licenseaccessusage"></a>
## licenseaccessusage : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [licenseaccessusage](#licenseaccessusage) : <code>object</code>
  * [.full](#licenseaccessusage.full) : <code>object</code>
    * [.get([filter], [orderby], [appendprivileges])](#licenseaccessusage.full.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
  * [.table](#licenseaccessusage.table) : <code>object</code>
    * [.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending])](#licenseaccessusage.table.post) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.get([filter], [orderby], [appendprivileges])](#licenseaccessusage.get) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>

<a name="licenseaccessusage.full"></a>
### licenseaccessusage.full : <code>object</code>
**Kind**: static namespace of <code>[licenseaccessusage](#licenseaccessusage)</code>  
<a name="licenseaccessusage.full.get"></a>
#### full.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/licenseaccessusage/full?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[full](#licenseaccessusage.full)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.licenseaccessusage.full.get(filter, orderby, appendprivileges).then(function(Array.<ILicenseAccessUsage>) {
	console.log(Array.<ILicenseAccessUsage>)
})
```
<a name="licenseaccessusage.table"></a>
### licenseaccessusage.table : <code>object</code>
**Kind**: static namespace of <code>[licenseaccessusage](#licenseaccessusage)</code>  
<a name="licenseaccessusage.table.post"></a>
#### table.post(postParams, [filter], [skip], [take], [sortcolumn], [orderascending]) ⇒ <code>Promise.&lt;Object&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/licenseaccessusage/table?filter={filter}&skip={skip}&take={take}&sortcolumn={sortcolumn}&orderascending={orderascending}
This method is generated

**Kind**: static method of <code>[table](#licenseaccessusage.table)</code>  
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
qrsApi.licenseaccessusage.table.post(postParams, filter, skip, take, sortcolumn, orderascending).then(function(Object) {
	console.log(Object)
})
```
<a name="licenseaccessusage.get"></a>
### licenseaccessusage.get([filter], [orderby], [appendprivileges]) ⇒ <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/licenseaccessusage?filter={filter}&orderby={orderby}&privileges={appendprivileges}
This method is generated

**Kind**: static method of <code>[licenseaccessusage](#licenseaccessusage)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;ILicenseAccessUsage&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>string</code> | the filter parameter |
| [orderby] | <code>string</code> | the orderby parameter |
| [appendprivileges] | <code>string</code> | the appendprivileges parameter |

**Example**  
```javascript
qrsApi.licenseaccessusage.get(filter, orderby, appendprivileges).then(function(Array.<ILicenseAccessUsage>) {
	console.log(Array.<ILicenseAccessUsage>)
})
```
