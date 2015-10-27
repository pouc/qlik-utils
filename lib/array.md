<a name="Array"></a>
## Array : <code>object</code>
Wrapper for helper functions for arrays.

**Kind**: global namespace  

* [Array](#Array) : <code>object</code>
  * [.chunk(array, n)](#Array.chunk) ⇒ <code>[Array.&lt;Array&gt;](#Array)</code>
  * [.removeIf(array, callback)](#Array.removeIf)

<a name="Array.chunk"></a>
### Array.chunk(array, n) ⇒ <code>[Array.&lt;Array&gt;](#Array)</code>
Cuts an array in chunks of predefined size

**Kind**: static method of <code>[Array](#Array)</code>  
**Returns**: <code>[Array.&lt;Array&gt;](#Array)</code> - An array of chunks  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>[Array](#Array)</code> | an array to cut in chunks |
| n | <code>int</code> | the chunk size |

<a name="Array.removeIf"></a>
### Array.removeIf(array, callback)
Remove object from an array on condition

**Kind**: static method of <code>[Array](#Array)</code>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>[Array](#Array)</code> | an array to remove stuff from |
| callback | <code>function</code> | the function containing the condition |
