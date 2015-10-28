<a name="staticcontent"></a>
## staticcontent : <code>object</code>
[See parent documentation](qrs.md)

**Kind**: global namespace  

* [staticcontent](#staticcontent) : <code>object</code>
  * [.enumeratefiles](#staticcontent.enumeratefiles) : <code>object</code>
    * [.get([path])](#staticcontent.enumeratefiles.get) ⇒ <code>Promise.&lt;Array.&lt;EnumerateFilesResult&gt;&gt;</code>

<a name="staticcontent.enumeratefiles"></a>
### staticcontent.enumeratefiles : <code>object</code>
**Kind**: static namespace of <code>[staticcontent](#staticcontent)</code>  
<a name="staticcontent.enumeratefiles.get"></a>
#### enumeratefiles.get([path]) ⇒ <code>Promise.&lt;Array.&lt;EnumerateFilesResult&gt;&gt;</code>
Makes a request on the Qlik Sense QRS API:
/qrs/staticcontent/enumeratefiles?path={path}
This method is manual

**Kind**: static method of <code>[enumeratefiles](#staticcontent.enumeratefiles)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;EnumerateFilesResult&gt;&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [path] | <code>string</code> | the path parameter |

**Example**  
```javascript
qrsApi.staticcontent.enumeratefiles.get(path).then(function(Array.<EnumerateFilesResult>) {
	console.log(Array.<EnumerateFilesResult>)
})
```
