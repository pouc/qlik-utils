<a name="module_qlik-utils"></a>
## qlik-utils
A set of utility functions / classes for simplifying the call to Qlik Sense APIs

**Author:** Loic Formont  
**License**: MIT Licensed  
**Copyright**: Copyright (C) 2015 Loic Formont  
**Example**  
```js
var utils = require("qlik-utils");
```

* [qlik-utils](#module_qlik-utils)
  * _static_
    * [.Core](#module_qlik-utils.Core) : <code>object</code>
      * [.Task](#module_qlik-utils.Core.Task)
        * [new Task()](#new_module_qlik-utils.Core.Task_new)
        * _instance_
          * [.once(func)](#module_qlik-utils.Core.Task+once)
          * [.bind(func)](#module_qlik-utils.Core.Task+bind)
          * [.unbind(func)](#module_qlik-utils.Core.Task+unbind)
          * [.start()](#module_qlik-utils.Core.Task+start) ⇒ <code>Promise</code>
          * [.running(val, [detail])](#module_qlik-utils.Core.Task+running) ⇒ <code>Promise</code>
          * [.done(val, [detail])](#module_qlik-utils.Core.Task+done) ⇒ <code>Promise</code>
          * [.failed(val, [detail])](#module_qlik-utils.Core.Task+failed) ⇒ <code>Promise</code>
        * _static_
          * [.all(tasks)](#module_qlik-utils.Core.Task.all) ⇒ <code>Promise</code>
      * [.Json](#module_qlik-utils.Core.Json)
        * [new Json(name, [dir])](#new_module_qlik-utils.Core.Json_new)
        * [.init()](#module_qlik-utils.Core.Json+init) ⇒ <code>Promise</code>
        * [.load()](#module_qlik-utils.Core.Json+load) ⇒ <code>Promise</code>
        * [.loadOld()](#module_qlik-utils.Core.Json+loadOld) ⇒ <code>Promise</code>
        * [.store()](#module_qlik-utils.Core.Json+store) ⇒ <code>Promise</code>
        * [.storeOld()](#module_qlik-utils.Core.Json+storeOld) ⇒ <code>Promise</code>
        * [.getRootValues()](#module_qlik-utils.Core.Json+getRootValues) ⇒ <code>Array</code>
        * [.get(root)](#module_qlik-utils.Core.Json+get) ⇒ <code>Promise</code>
        * [.set(root, conf, user)](#module_qlik-utils.Core.Json+set) ⇒ <code>Promise</code>
        * [.remove(root, user)](#module_qlik-utils.Core.Json+remove) ⇒ <code>Promise</code>
        * [.clean()](#module_qlik-utils.Core.Json+clean) ⇒ <code>Promise</code>
      * [.File](#module_qlik-utils.Core.File)
        * [new File(name, [dir])](#new_module_qlik-utils.Core.File_new)
        * [.init()](#module_qlik-utils.Core.File+init) ⇒ <code>Promise</code>
        * [.store()](#module_qlik-utils.Core.File+store) ⇒ <code>Promise</code>
      * [.Image](#module_qlik-utils.Core.Image)
        * [new Image(name, [dir])](#new_module_qlik-utils.Core.Image_new)
        * [.init()](#module_qlik-utils.Core.Image+init) ⇒ <code>Promise</code>
        * [.store()](#module_qlik-utils.Core.Image+store) ⇒ <code>Promise</code>
      * [.ifNotUndef(a, b, [c])](#module_qlik-utils.Core.ifNotUndef) ⇒ <code>\*</code>
      * [.loop(func, param, retry, retryTimeout, task)](#module_qlik-utils.Core.loop)
      * [.setTimeout2Promise(timeout)](#module_qlik-utils.Core.setTimeout2Promise) ⇒ <code>Promise</code>
    * [.Array](#module_qlik-utils.Array) : <code>object</code>
      * [.chunk(array, n)](#module_qlik-utils.Array.chunk) ⇒ <code>Array.&lt;Array&gt;</code>
      * [.removeIf(array, callback)](#module_qlik-utils.Array.removeIf)
    * [.Object](#module_qlik-utils.Object) : <code>object</code>
      * [.map(obj, f)](#module_qlik-utils.Object.map) ⇒ <code>Object</code>
      * [.keys(obj)](#module_qlik-utils.Object.keys) ⇒ <code>Array</code>
      * [.values(obj)](#module_qlik-utils.Object.values) ⇒ <code>Array</code>
    * [.Qlik](#module_qlik-utils.Qlik) : <code>object</code>
      * [.generateXrfKey([size], [chars])](#module_qlik-utils.Qlik.generateXrfKey) ⇒ <code>string</code>
      * [.request(options, [params])](#module_qlik-utils.Qlik.request) ⇒ <code>Promise.&lt;\*&gt;</code>
      * [.getTicket(params, options)](#module_qlik-utils.Qlik.getTicket) ⇒ <code>Promise.&lt;ticket&gt;</code>
      * [.openSession(ticket, hostUri)](#module_qlik-utils.Qlik.openSession) ⇒ <code>Promise.&lt;string&gt;</code>
      * [.addToWhiteList(ip, options)](#module_qlik-utils.Qlik.addToWhiteList) ⇒ <code>Promise.&lt;Object&gt;</code>
    * ~~[.ifnotundef()](#module_qlik-utils.ifnotundef)~~
    * ~~[.generateXrfkey()](#module_qlik-utils.generateXrfkey)~~
    * ~~[.request()](#module_qlik-utils.request)~~
    * ~~[.getTicket()](#module_qlik-utils.getTicket)~~
    * ~~[.openSession()](#module_qlik-utils.openSession)~~
    * ~~[.addToWhiteList()](#module_qlik-utils.addToWhiteList)~~
    * ~~[.loop()](#module_qlik-utils.loop)~~
    * ~~[.setTimeout2Promise()](#module_qlik-utils.setTimeout2Promise)~~
    * [.dynamicAppClone(options, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task)](#module_qlik-utils.dynamicAppClone) ⇒ <code>Promise</code>
  * _inner_
    * [~options](#module_qlik-utils..options) : <code>Object</code>
    * [~ticketParams](#module_qlik-utils..ticketParams) : <code>Object</code>
    * [~ticket](#module_qlik-utils..ticket) : <code>Object</code>

<a name="module_qlik-utils.Core"></a>
### utils.Core : <code>object</code>
Wrapper for helper functions.

**Kind**: static namespace of <code>[qlik-utils](#module_qlik-utils)</code>  

  * [.Core](#module_qlik-utils.Core) : <code>object</code>
    * [.Task](#module_qlik-utils.Core.Task)
      * [new Task()](#new_module_qlik-utils.Core.Task_new)
      * _instance_
        * [.once(func)](#module_qlik-utils.Core.Task+once)
        * [.bind(func)](#module_qlik-utils.Core.Task+bind)
        * [.unbind(func)](#module_qlik-utils.Core.Task+unbind)
        * [.start()](#module_qlik-utils.Core.Task+start) ⇒ <code>Promise</code>
        * [.running(val, [detail])](#module_qlik-utils.Core.Task+running) ⇒ <code>Promise</code>
        * [.done(val, [detail])](#module_qlik-utils.Core.Task+done) ⇒ <code>Promise</code>
        * [.failed(val, [detail])](#module_qlik-utils.Core.Task+failed) ⇒ <code>Promise</code>
      * _static_
        * [.all(tasks)](#module_qlik-utils.Core.Task.all) ⇒ <code>Promise</code>
    * [.Json](#module_qlik-utils.Core.Json)
      * [new Json(name, [dir])](#new_module_qlik-utils.Core.Json_new)
      * [.init()](#module_qlik-utils.Core.Json+init) ⇒ <code>Promise</code>
      * [.load()](#module_qlik-utils.Core.Json+load) ⇒ <code>Promise</code>
      * [.loadOld()](#module_qlik-utils.Core.Json+loadOld) ⇒ <code>Promise</code>
      * [.store()](#module_qlik-utils.Core.Json+store) ⇒ <code>Promise</code>
      * [.storeOld()](#module_qlik-utils.Core.Json+storeOld) ⇒ <code>Promise</code>
      * [.getRootValues()](#module_qlik-utils.Core.Json+getRootValues) ⇒ <code>Array</code>
      * [.get(root)](#module_qlik-utils.Core.Json+get) ⇒ <code>Promise</code>
      * [.set(root, conf, user)](#module_qlik-utils.Core.Json+set) ⇒ <code>Promise</code>
      * [.remove(root, user)](#module_qlik-utils.Core.Json+remove) ⇒ <code>Promise</code>
      * [.clean()](#module_qlik-utils.Core.Json+clean) ⇒ <code>Promise</code>
    * [.File](#module_qlik-utils.Core.File)
      * [new File(name, [dir])](#new_module_qlik-utils.Core.File_new)
      * [.init()](#module_qlik-utils.Core.File+init) ⇒ <code>Promise</code>
      * [.store()](#module_qlik-utils.Core.File+store) ⇒ <code>Promise</code>
    * [.Image](#module_qlik-utils.Core.Image)
      * [new Image(name, [dir])](#new_module_qlik-utils.Core.Image_new)
      * [.init()](#module_qlik-utils.Core.Image+init) ⇒ <code>Promise</code>
      * [.store()](#module_qlik-utils.Core.Image+store) ⇒ <code>Promise</code>
    * [.ifNotUndef(a, b, [c])](#module_qlik-utils.Core.ifNotUndef) ⇒ <code>\*</code>
    * [.loop(func, param, retry, retryTimeout, task)](#module_qlik-utils.Core.loop)
    * [.setTimeout2Promise(timeout)](#module_qlik-utils.Core.setTimeout2Promise) ⇒ <code>Promise</code>

<a name="module_qlik-utils.Core.Task"></a>
#### Core.Task
This class enables you to handle tasks asynchronously.

**Kind**: static class of <code>[Core](#module_qlik-utils.Core)</code>  

* [.Task](#module_qlik-utils.Core.Task)
  * [new Task()](#new_module_qlik-utils.Core.Task_new)
  * _instance_
    * [.once(func)](#module_qlik-utils.Core.Task+once)
    * [.bind(func)](#module_qlik-utils.Core.Task+bind)
    * [.unbind(func)](#module_qlik-utils.Core.Task+unbind)
    * [.start()](#module_qlik-utils.Core.Task+start) ⇒ <code>Promise</code>
    * [.running(val, [detail])](#module_qlik-utils.Core.Task+running) ⇒ <code>Promise</code>
    * [.done(val, [detail])](#module_qlik-utils.Core.Task+done) ⇒ <code>Promise</code>
    * [.failed(val, [detail])](#module_qlik-utils.Core.Task+failed) ⇒ <code>Promise</code>
  * _static_
    * [.all(tasks)](#module_qlik-utils.Core.Task.all) ⇒ <code>Promise</code>

<a name="new_module_qlik-utils.Core.Task_new"></a>
##### new Task()
Creates a new Task.

<a name="module_qlik-utils.Core.Task+once"></a>
##### task.once(func)
Binds a callback function that will be ran once when the Task status is updated the first time

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  

| Param | Description |
| --- | --- |
| func | the function to run |

<a name="module_qlik-utils.Core.Task+bind"></a>
##### task.bind(func)
Binds a callback function that will be ran every time the Task status is updated

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  

| Param |
| --- |
| func | 

<a name="module_qlik-utils.Core.Task+unbind"></a>
##### task.unbind(func)
Unbinds a previously bound callback function

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  

| Param |
| --- |
| func | 

<a name="module_qlik-utils.Core.Task+start"></a>
##### task.start() ⇒ <code>Promise</code>
Starts the task.

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task is started  
<a name="module_qlik-utils.Core.Task+running"></a>
##### task.running(val, [detail]) ⇒ <code>Promise</code>
Changes the Task to the 'running' status.This method can also be called to update the 'running' status with a new value

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="module_qlik-utils.Core.Task+done"></a>
##### task.done(val, [detail]) ⇒ <code>Promise</code>
Ends the Task with the 'done' status.

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="module_qlik-utils.Core.Task+failed"></a>
##### task.failed(val, [detail]) ⇒ <code>Promise</code>
Ends the Task with the 'failed' status.

**Kind**: instance method of <code>[Task](#module_qlik-utils.Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="module_qlik-utils.Core.Task.all"></a>
##### Task.all(tasks) ⇒ <code>Promise</code>
Similar to the promise.all function but with Tasks

**Kind**: static method of <code>[Task](#module_qlik-utils.Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when all the Tasks are resolved  

| Param | Type | Description |
| --- | --- | --- |
| tasks | <code>Object.&lt;string, Task&gt;</code> | An object listing Tasks with their name |

<a name="module_qlik-utils.Core.Json"></a>
#### Core.Json
This class enables you to load and store JSON config files from/to the disk.

**Kind**: static class of <code>[Core](#module_qlik-utils.Core)</code>  

* [.Json](#module_qlik-utils.Core.Json)
  * [new Json(name, [dir])](#new_module_qlik-utils.Core.Json_new)
  * [.init()](#module_qlik-utils.Core.Json+init) ⇒ <code>Promise</code>
  * [.load()](#module_qlik-utils.Core.Json+load) ⇒ <code>Promise</code>
  * [.loadOld()](#module_qlik-utils.Core.Json+loadOld) ⇒ <code>Promise</code>
  * [.store()](#module_qlik-utils.Core.Json+store) ⇒ <code>Promise</code>
  * [.storeOld()](#module_qlik-utils.Core.Json+storeOld) ⇒ <code>Promise</code>
  * [.getRootValues()](#module_qlik-utils.Core.Json+getRootValues) ⇒ <code>Array</code>
  * [.get(root)](#module_qlik-utils.Core.Json+get) ⇒ <code>Promise</code>
  * [.set(root, conf, user)](#module_qlik-utils.Core.Json+set) ⇒ <code>Promise</code>
  * [.remove(root, user)](#module_qlik-utils.Core.Json+remove) ⇒ <code>Promise</code>
  * [.clean()](#module_qlik-utils.Core.Json+clean) ⇒ <code>Promise</code>

<a name="new_module_qlik-utils.Core.Json_new"></a>
##### new Json(name, [dir])
Creates a new Json storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the config |

<a name="module_qlik-utils.Core.Json+init"></a>
##### json.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="module_qlik-utils.Core.Json+load"></a>
##### json.load() ⇒ <code>Promise</code>
Loads the config from the disk

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is loaded  
<a name="module_qlik-utils.Core.Json+loadOld"></a>
##### json.loadOld() ⇒ <code>Promise</code>
Loads the previous config from the disk

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the previous config is loaded  
<a name="module_qlik-utils.Core.Json+store"></a>
##### json.store() ⇒ <code>Promise</code>
Stores the config to the disk

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is stored  
<a name="module_qlik-utils.Core.Json+storeOld"></a>
##### json.storeOld() ⇒ <code>Promise</code>
Stores the old config to the disk

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is stored  
<a name="module_qlik-utils.Core.Json+getRootValues"></a>
##### json.getRootValues() ⇒ <code>Array</code>
Gets the config item keys

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Array</code> - an array with the config item keys  
<a name="module_qlik-utils.Core.Json+get"></a>
##### json.get(root) ⇒ <code>Promise</code>
Get a config item

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves to the config item value  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |

<a name="module_qlik-utils.Core.Json+set"></a>
##### json.set(root, conf, user) ⇒ <code>Promise</code>
Set a config item

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config item is set  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |
| conf | <code>string</code> | a config item value |
| user | <code>string</code> | the user making the change |

<a name="module_qlik-utils.Core.Json+remove"></a>
##### json.remove(root, user) ⇒ <code>Promise</code>
Remove a config item

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config item is removed  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |
| user | <code>string</code> | the user making the change |

<a name="module_qlik-utils.Core.Json+clean"></a>
##### json.clean() ⇒ <code>Promise</code>
Cleans the config files

**Kind**: instance method of <code>[Json](#module_qlik-utils.Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config files are cleaned  
<a name="module_qlik-utils.Core.File"></a>
#### Core.File
This class enables you to load and store files from/to the disk.

**Kind**: static class of <code>[Core](#module_qlik-utils.Core)</code>  

* [.File](#module_qlik-utils.Core.File)
  * [new File(name, [dir])](#new_module_qlik-utils.Core.File_new)
  * [.init()](#module_qlik-utils.Core.File+init) ⇒ <code>Promise</code>
  * [.store()](#module_qlik-utils.Core.File+store) ⇒ <code>Promise</code>

<a name="new_module_qlik-utils.Core.File_new"></a>
##### new File(name, [dir])
Creates a new File storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the files |

<a name="module_qlik-utils.Core.File+init"></a>
##### file.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[File](#module_qlik-utils.Core.File)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="module_qlik-utils.Core.File+store"></a>
##### file.store() ⇒ <code>Promise</code>
Stores the file to the disk

**Kind**: instance method of <code>[File](#module_qlik-utils.Core.File)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the file is stored  
<a name="module_qlik-utils.Core.Image"></a>
#### Core.Image
This class enables you to load and store images from/to the disk.

**Kind**: static class of <code>[Core](#module_qlik-utils.Core)</code>  

* [.Image](#module_qlik-utils.Core.Image)
  * [new Image(name, [dir])](#new_module_qlik-utils.Core.Image_new)
  * [.init()](#module_qlik-utils.Core.Image+init) ⇒ <code>Promise</code>
  * [.store()](#module_qlik-utils.Core.Image+store) ⇒ <code>Promise</code>

<a name="new_module_qlik-utils.Core.Image_new"></a>
##### new Image(name, [dir])
Creates a new Image storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the files |

<a name="module_qlik-utils.Core.Image+init"></a>
##### image.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[Image](#module_qlik-utils.Core.Image)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="module_qlik-utils.Core.Image+store"></a>
##### image.store() ⇒ <code>Promise</code>
Stores the file to the disk

**Kind**: instance method of <code>[Image](#module_qlik-utils.Core.Image)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the file is stored  
<a name="module_qlik-utils.Core.ifNotUndef"></a>
#### Core.ifNotUndef(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode If a is undefined, return b else aThree parameters mode If a is undefined, return c else b

**Kind**: static method of <code>[Core](#module_qlik-utils.Core)</code>  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| [c] | <code>\*</code> | 

**Example**  
```js
var myHost = utils.Core.ifNotUndef(options.host, options.hostname);
```
**Example**  
```js
var myHost = utils.Core.ifNotUndef(options.host, options.hostname, 'localhost');
```
<a name="module_qlik-utils.Core.loop"></a>
#### Core.loop(func, param, retry, retryTimeout, task)
Loops until func finishes successfully

**Kind**: static method of <code>[Core](#module_qlik-utils.Core)</code>  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | the function to start (must return a promise) |
| param | <code>\*</code> | the parameters to pass to the function (as an array) |
| retry | <code>int</code> | the number of times to retry |
| retryTimeout | <code>int</code> | the delay to wait before restarting the function after a failure |
| task | <code>Task</code> | the task object to update when required |

**Example**  
```js
utils.Core.loop(     utils.Qlik.addToWhiteList,     [         '10.76.224.72',         {             restUri: 'https://10.76.224.72:4242',             pfx: certif,             passPhrase: '',             UserId: 'qlikservice',             UserDirectory: '2008R2-0'         }     ],     30,     2000,     task);
```
<a name="module_qlik-utils.Core.setTimeout2Promise"></a>
#### Core.setTimeout2Promise(timeout) ⇒ <code>Promise</code>
Equivalent to setTimeout but returns a promise instead

**Kind**: static method of <code>[Core](#module_qlik-utils.Core)</code>  

| Param | Description |
| --- | --- |
| timeout | the timeout in ms |

**Example**  
```js
utils.Core.setTimeout2Promise(1000).then(function() {     console.log('hi');});
```
<a name="module_qlik-utils.Array"></a>
### utils.Array : <code>object</code>
Wrapper for helper functions for arrays.

**Kind**: static namespace of <code>[qlik-utils](#module_qlik-utils)</code>  

  * [.Array](#module_qlik-utils.Array) : <code>object</code>
    * [.chunk(array, n)](#module_qlik-utils.Array.chunk) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.removeIf(array, callback)](#module_qlik-utils.Array.removeIf)

<a name="module_qlik-utils.Array.chunk"></a>
#### Array.chunk(array, n) ⇒ <code>Array.&lt;Array&gt;</code>
Cuts an array in chunks of predefined size

**Kind**: static method of <code>[Array](#module_qlik-utils.Array)</code>  
**Returns**: <code>Array.&lt;Array&gt;</code> - An array of chunks  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | an array to cut in chunks |
| n | <code>int</code> | the chunk size |

<a name="module_qlik-utils.Array.removeIf"></a>
#### Array.removeIf(array, callback)
Remove object from an array on condition

**Kind**: static method of <code>[Array](#module_qlik-utils.Array)</code>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | an array to remove stuff from |
| callback | <code>function</code> | the function containing the condition |

<a name="module_qlik-utils.Object"></a>
### utils.Object : <code>object</code>
Wrapper for helper functions for objects.

**Kind**: static namespace of <code>[qlik-utils](#module_qlik-utils)</code>  

  * [.Object](#module_qlik-utils.Object) : <code>object</code>
    * [.map(obj, f)](#module_qlik-utils.Object.map) ⇒ <code>Object</code>
    * [.keys(obj)](#module_qlik-utils.Object.keys) ⇒ <code>Array</code>
    * [.values(obj)](#module_qlik-utils.Object.values) ⇒ <code>Array</code>

<a name="module_qlik-utils.Object.map"></a>
#### Object.map(obj, f) ⇒ <code>Object</code>
Map function for objects

**Kind**: static method of <code>[Object](#module_qlik-utils.Object)</code>  
**Returns**: <code>Object</code> - an object with the same keys as obj but with values that are f(obj[key])  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | an object |
| f | <code>function</code> | a function to apply to each property of obj |

<a name="module_qlik-utils.Object.keys"></a>
#### Object.keys(obj) ⇒ <code>Array</code>
Gets an object's keys into an array

**Kind**: static method of <code>[Object](#module_qlik-utils.Object)</code>  
**Returns**: <code>Array</code> - an array containing obj's keys  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the object to get keys from |

<a name="module_qlik-utils.Object.values"></a>
#### Object.values(obj) ⇒ <code>Array</code>
Gets an object's values into an array

**Kind**: static method of <code>[Object](#module_qlik-utils.Object)</code>  
**Returns**: <code>Array</code> - an array containing obj's values  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the object to get values from |

<a name="module_qlik-utils.Qlik"></a>
### utils.Qlik : <code>object</code>
Wrapper for helper functions for Qlik Sense.

**Kind**: static namespace of <code>[qlik-utils](#module_qlik-utils)</code>  

  * [.Qlik](#module_qlik-utils.Qlik) : <code>object</code>
    * [.generateXrfKey([size], [chars])](#module_qlik-utils.Qlik.generateXrfKey) ⇒ <code>string</code>
    * [.request(options, [params])](#module_qlik-utils.Qlik.request) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getTicket(params, options)](#module_qlik-utils.Qlik.getTicket) ⇒ <code>Promise.&lt;ticket&gt;</code>
    * [.openSession(ticket, hostUri)](#module_qlik-utils.Qlik.openSession) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.addToWhiteList(ip, options)](#module_qlik-utils.Qlik.addToWhiteList) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="module_qlik-utils.Qlik.generateXrfKey"></a>
#### Qlik.generateXrfKey([size], [chars]) ⇒ <code>string</code>
Generates a random Xrf key of a given size within a set of given chars

**Kind**: static method of <code>[Qlik](#module_qlik-utils.Qlik)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>int</code> | <code>16</code> | 
| [chars] | <code>string</code> | <code>&quot;abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789&quot;</code> | 

**Example**  
```js
var xrf = utils.Qlik.generateXrfkey(8);
```
<a name="module_qlik-utils.Qlik.request"></a>
#### Qlik.request(options, [params]) ⇒ <code>Promise.&lt;\*&gt;</code>
Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object

**Kind**: static method of <code>[Qlik](#module_qlik-utils.Qlik)</code>  
**Returns**: <code>Promise.&lt;\*&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>options</code> | the options to connect to the API endpoint |
| [params] | <code>Object</code> | the parameters to post to the API endpoint |

**Example**  
```js
utils.Qlik.request({     restUri: 'https://10.76.224.72:4243/qps/ticket',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.Qlik.getTicket"></a>
#### Qlik.getTicket(params, options) ⇒ <code>Promise.&lt;ticket&gt;</code>
Generates a ticket on Qlik Sense QRS Api. If the targetId is not correctthen the ticket will redirect to the hub

**Kind**: static method of <code>[Qlik](#module_qlik-utils.Qlik)</code>  
**Returns**: <code>Promise.&lt;ticket&gt;</code> - resolving to the generated ticket  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>ticketParams</code> | the ticket parameters |
| options | <code>options</code> | the options to connect to the ticket API endpoint |

**Example**  
```js
utils.Qlik.getTicket({     restUri: 'https://10.76.224.72:4243',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.Qlik.openSession"></a>
#### Qlik.openSession(ticket, hostUri) ⇒ <code>Promise.&lt;string&gt;</code>
Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie

**Kind**: static method of <code>[Qlik](#module_qlik-utils.Qlik)</code>  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise resolving to the session cookie  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>ticket</code> | the generated ticket |
| hostUri | <code>string</code> | the URI of the Qlik Sense host (Hub or preferably QMC) to open a session on |

**Example**  
```js
utils.Qlik.openSession({     UserDirectory: '2008R2-0',     UserId: 'qlikservice',     Attributes: [],     Ticket: 'QzSPXzBmJKjhucPF',     TargetUri: null}, 'https://localhost/hub').then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.Qlik.addToWhiteList"></a>
#### Qlik.addToWhiteList(ip, options) ⇒ <code>Promise.&lt;Object&gt;</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy.Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent APIcalls within this restart will fail miserably with various random & useless error messages.

**Kind**: static method of <code>[Qlik](#module_qlik-utils.Qlik)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the virtual proxy configuration when successfull  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | the ip to add |
| options | <code>options</code> | the endpoint to add the ip to |

**Example**  
```js
readFile('./client.pfx').then(function(certif) {     return utils.Qlik.addToWhiteList('10.76.224.72', {         restUri: 'https://10.76.224.72:4242',         pfx: certif,         passPhrase: '',         UserId: 'qlikservice',         UserDirectory: '2008R2-0'     });}).then(function(ret) {     console.log(ret);}, function(ret) {     console.log(ret);});
```
<a name="module_qlik-utils.ifnotundef"></a>
### ~~utils.ifnotundef()~~
***Deprecated***

Deprecated since version 2.0. Use Core.ifNotUndef instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.generateXrfkey"></a>
### ~~utils.generateXrfkey()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.generateXrfKey instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.request"></a>
### ~~utils.request()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.request instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.getTicket"></a>
### ~~utils.getTicket()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.getTicket instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.openSession"></a>
### ~~utils.openSession()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.openSession instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.addToWhiteList"></a>
### ~~utils.addToWhiteList()~~
***Deprecated***

Deprecated since version 2.0. Use Qlik.addToWhiteList instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.loop"></a>
### ~~utils.loop()~~
***Deprecated***

Deprecated since version 2.0. Use Core.loop instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.setTimeout2Promise"></a>
### ~~utils.setTimeout2Promise()~~
***Deprecated***

Deprecated since version 2.0. Use Core.setTimeout2Promise instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="module_qlik-utils.dynamicAppClone"></a>
### utils.dynamicAppClone(options, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task) ⇒ <code>Promise</code>
Duplicates a template app, updates its script, reloads it and publishes it

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>options</code> | Uri to the Qlik Sense endpoint |
| templateAppId | <code>string</code> | id of the template application |
| scriptMarker | <code>string</code> | marker to be found in the script and replaced during the duplication |
| scriptReplace | <code>string</code> | replace value of the marker above |
| scriptRegex | <code>RegExp</code> | regex to track in the script trace |
| publishStreamId | <code>string</code> | id of the stream to publish into |
| task | <code>Task</code> | task that will trace the cloning progress |

**Example**  
```js
var task = new utils.task();task.start();task.bind(function(task) {     console.log(task.val, task.detail);});readFile(testQlikSensePfx).then(function(pfx) {     task.running('info', 'certificate loaded...');     return utils.dynamicAppClone({             restUri: 'http://10.20.30.40',             pfx: pfx,             'UserId': 'qlikservice',             'UserDirectory': '2008R2-0'         },         '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',         '%Replace me!%',         'Employees.qvd',         /(.*) << (.*) ([0-9,]+) Lines fetched/g,         'aaec8d41-5201-43ab-809f-3063750dfafd',         task     );});
```
<a name="module_qlik-utils..options"></a>
### utils~options : <code>Object</code>
**Kind**: inner typedef of <code>[qlik-utils](#module_qlik-utils)</code>  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| UserDirectory | <code>string</code> | <code>&quot;.&quot;</code> | the user directory of the Qlik Sense user that will make the API call |
| UserId | <code>string</code> | <code>&quot;qlikservice&quot;</code> | the user id of the Qlik Sense user that will make the API call |
| session | <code>string</code> |  | the cookie of a valid Qlik Sense session |
| restUri | <code>string</code> |  | an URI to a valid Qlik Sense endpoint |
| method | <code>string</code> | <code>&quot;POST&quot;</code> | the method of the HTTP request (GET/PUT/POST/DELETE) |
| pfx | <code>buffer</code> |  | the Qlik Sense pfx certificate (not required if a session is set) |
| passphrase | <code>string</code> |  | the Qlik Sense certificate's passphrase (not required if a session is set) |
| timeout | <code>int</code> |  | the timeout of the HTTP request |

<a name="module_qlik-utils..ticketParams"></a>
### utils~ticketParams : <code>Object</code>
**Kind**: inner typedef of <code>[qlik-utils](#module_qlik-utils)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UserId | <code>string</code> | the user id to generate a ticket for |
| UserDirectory | <code>string</code> | the user directory of the user to generate a ticket for |
| Attributes | <code>Array.&lt;string&gt;</code> | the user attributes |

<a name="module_qlik-utils..ticket"></a>
### utils~ticket : <code>Object</code>
**Kind**: inner typedef of <code>[qlik-utils](#module_qlik-utils)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UserId | <code>string</code> | the user id of the generated ticket |
| UserDirectory | <code>string</code> | the user directory of generated ticket |
| Attributes | <code>Array.&lt;string&gt;</code> | the user attributes |
| Ticket | <code>string</code> | the ticket |
| TargetUri | <code>string</code> | the target uri |

