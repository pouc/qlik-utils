<a name="Object"></a>
## Object : <code>object</code>
Wrapper for helper functions for objects.

**Kind**: global namespace  

* [Object](#Object) : <code>object</code>
  * [.map(obj, f)](#Object.map) ⇒ <code>[Object](#Object)</code>
  * [.getPropCI(obj, prop)](#Object.getPropCI) ⇒ <code>\*</code>
  * [.keys(obj)](#Object.keys) ⇒ <code>Array</code>
  * [.values(obj)](#Object.values) ⇒ <code>Array</code>

<a name="Object.map"></a>
### Object.map(obj, f) ⇒ <code>[Object](#Object)</code>
Map function for objects

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>[Object](#Object)</code> - an object with the same keys as obj but with values that are f(obj[key])  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>[Object](#Object)</code> | an object |
| f | <code>function</code> | a function to apply to each property of obj |

<a name="Object.getPropCI"></a>
### Object.getPropCI(obj, prop) ⇒ <code>\*</code>
Gets an object property in case insensitive mode

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>\*</code> - the property value  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | the object to get the property from |
| prop | <code>string</code> | the property to get in a case insensitive mode |

**Example**  
```javascriptvar obj = {Name: 'toto'};console.log(utils.Object.getPropCI(obj, 'name')) // > toto```
<a name="Object.keys"></a>
### Object.keys(obj) ⇒ <code>Array</code>
Gets an object's keys into an array

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>Array</code> - an array containing obj's keys  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>[Object](#Object)</code> | the object to get keys from |

<a name="Object.values"></a>
### Object.values(obj) ⇒ <code>Array</code>
Gets an object's values into an array

**Kind**: static method of <code>[Object](#Object)</code>  
**Returns**: <code>Array</code> - an array containing obj's values  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>[Object](#Object)</code> | the object to get values from |

