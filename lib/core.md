<a name="Core"></a>
## Core : <code>object</code>
Wrapper for helper functions.

**Kind**: global namespace  

* [Core](#Core) : <code>object</code>
  * [.Task](#Core.Task)
    * [new Task()](#new_Core.Task_new)
    * _instance_
      * [.once(func)](#Core.Task+once)
      * [.bind(func)](#Core.Task+bind)
      * [.unbind(func)](#Core.Task+unbind)
      * [.start()](#Core.Task+start) ⇒ <code>Promise</code>
      * [.running(val, [detail])](#Core.Task+running) ⇒ <code>Promise</code>
      * [.done(val, [detail])](#Core.Task+done) ⇒ <code>Promise</code>
      * [.failed(val, [detail])](#Core.Task+failed) ⇒ <code>Promise</code>
    * _static_
      * [.all(tasks)](#Core.Task.all) ⇒ <code>Promise</code>
  * [.Json](#Core.Json)
    * [new Json(name, [dir])](#new_Core.Json_new)
    * [.init()](#Core.Json+init) ⇒ <code>Promise</code>
    * [.load()](#Core.Json+load) ⇒ <code>Promise</code>
    * [.loadOld()](#Core.Json+loadOld) ⇒ <code>Promise</code>
    * [.store()](#Core.Json+store) ⇒ <code>Promise</code>
    * [.storeOld()](#Core.Json+storeOld) ⇒ <code>Promise</code>
    * [.getRootValues()](#Core.Json+getRootValues) ⇒ <code>Array</code>
    * [.get(root)](#Core.Json+get) ⇒ <code>Promise</code>
    * [.set(root, conf, user)](#Core.Json+set) ⇒ <code>Promise</code>
    * [.remove(root, user)](#Core.Json+remove) ⇒ <code>Promise</code>
    * [.clean()](#Core.Json+clean) ⇒ <code>Promise</code>
  * [.File](#Core.File)
    * [new File(name, [dir])](#new_Core.File_new)
    * [.init()](#Core.File+init) ⇒ <code>Promise</code>
    * [.store()](#Core.File+store) ⇒ <code>Promise</code>
  * [.Image](#Core.Image)
    * [new Image(name, [dir])](#new_Core.Image_new)
    * [.init()](#Core.Image+init) ⇒ <code>Promise</code>
    * [.store()](#Core.Image+store) ⇒ <code>Promise</code>
  * [.ifNotUndef(a, b, [c])](#Core.ifNotUndef) ⇒ <code>\*</code>
  * [.loop(func, param, retry, retryTimeout, task)](#Core.loop)
  * [.setTimeout2Promise(timeout)](#Core.setTimeout2Promise) ⇒ <code>Promise</code>
  * [.copyFile(source, target)](#Core.copyFile) ⇒ <code>Promise</code>

<a name="Core.Task"></a>
### Core.Task
This class enables you to handle tasks asynchronously.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.Task](#Core.Task)
  * [new Task()](#new_Core.Task_new)
  * _instance_
    * [.once(func)](#Core.Task+once)
    * [.bind(func)](#Core.Task+bind)
    * [.unbind(func)](#Core.Task+unbind)
    * [.start()](#Core.Task+start) ⇒ <code>Promise</code>
    * [.running(val, [detail])](#Core.Task+running) ⇒ <code>Promise</code>
    * [.done(val, [detail])](#Core.Task+done) ⇒ <code>Promise</code>
    * [.failed(val, [detail])](#Core.Task+failed) ⇒ <code>Promise</code>
  * _static_
    * [.all(tasks)](#Core.Task.all) ⇒ <code>Promise</code>

<a name="new_Core.Task_new"></a>
#### new Task()
Creates a new Task.

<a name="Core.Task+once"></a>
#### task.once(func)
Binds a callback function that will be ran once when the Task status is updated the first time

**Kind**: instance method of <code>[Task](#Core.Task)</code>  

| Param | Description |
| --- | --- |
| func | the function to run |

<a name="Core.Task+bind"></a>
#### task.bind(func)
Binds a callback function that will be ran every time the Task status is updated

**Kind**: instance method of <code>[Task](#Core.Task)</code>  

| Param |
| --- |
| func | 

<a name="Core.Task+unbind"></a>
#### task.unbind(func)
Unbinds a previously bound callback function

**Kind**: instance method of <code>[Task](#Core.Task)</code>  

| Param |
| --- |
| func | 

<a name="Core.Task+start"></a>
#### task.start() ⇒ <code>Promise</code>
Starts the task.

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task is started  
<a name="Core.Task+running"></a>
#### task.running(val, [detail]) ⇒ <code>Promise</code>
Changes the Task to the 'running' status.
         This method can also be called to update the 'running' status with a new value

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="Core.Task+done"></a>
#### task.done(val, [detail]) ⇒ <code>Promise</code>
Ends the Task with the 'done' status.

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="Core.Task+failed"></a>
#### task.failed(val, [detail]) ⇒ <code>Promise</code>
Ends the Task with the 'failed' status.

**Kind**: instance method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the Task status is updated  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |
| [detail] | <code>\*</code> | additional details to push into the progress value |

<a name="Core.Task.all"></a>
#### Task.all(tasks) ⇒ <code>Promise</code>
Similar to the promise.all function but with Tasks

**Kind**: static method of <code>[Task](#Core.Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when all the Tasks are resolved  

| Param | Type | Description |
| --- | --- | --- |
| tasks | <code>Object.&lt;string, Task&gt;</code> | An object listing Tasks with their name |

<a name="Core.Json"></a>
### Core.Json
This class enables you to load and store JSON config files from/to the disk.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.Json](#Core.Json)
  * [new Json(name, [dir])](#new_Core.Json_new)
  * [.init()](#Core.Json+init) ⇒ <code>Promise</code>
  * [.load()](#Core.Json+load) ⇒ <code>Promise</code>
  * [.loadOld()](#Core.Json+loadOld) ⇒ <code>Promise</code>
  * [.store()](#Core.Json+store) ⇒ <code>Promise</code>
  * [.storeOld()](#Core.Json+storeOld) ⇒ <code>Promise</code>
  * [.getRootValues()](#Core.Json+getRootValues) ⇒ <code>Array</code>
  * [.get(root)](#Core.Json+get) ⇒ <code>Promise</code>
  * [.set(root, conf, user)](#Core.Json+set) ⇒ <code>Promise</code>
  * [.remove(root, user)](#Core.Json+remove) ⇒ <code>Promise</code>
  * [.clean()](#Core.Json+clean) ⇒ <code>Promise</code>

<a name="new_Core.Json_new"></a>
#### new Json(name, [dir])
Creates a new Json storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the config |

<a name="Core.Json+init"></a>
#### json.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="Core.Json+load"></a>
#### json.load() ⇒ <code>Promise</code>
Loads the config from the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is loaded  
<a name="Core.Json+loadOld"></a>
#### json.loadOld() ⇒ <code>Promise</code>
Loads the previous config from the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the previous config is loaded  
<a name="Core.Json+store"></a>
#### json.store() ⇒ <code>Promise</code>
Stores the config to the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is stored  
<a name="Core.Json+storeOld"></a>
#### json.storeOld() ⇒ <code>Promise</code>
Stores the old config to the disk

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config is stored  
<a name="Core.Json+getRootValues"></a>
#### json.getRootValues() ⇒ <code>Array</code>
Gets the config item keys

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Array</code> - an array with the config item keys  
<a name="Core.Json+get"></a>
#### json.get(root) ⇒ <code>Promise</code>
Get a config item

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves to the config item value  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |

<a name="Core.Json+set"></a>
#### json.set(root, conf, user) ⇒ <code>Promise</code>
Set a config item

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config item is set  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |
| conf | <code>string</code> | a config item value |
| user | <code>string</code> | the user making the change |

<a name="Core.Json+remove"></a>
#### json.remove(root, user) ⇒ <code>Promise</code>
Remove a config item

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config item is removed  

| Param | Type | Description |
| --- | --- | --- |
| root | <code>string</code> | a config item key |
| user | <code>string</code> | the user making the change |

<a name="Core.Json+clean"></a>
#### json.clean() ⇒ <code>Promise</code>
Cleans the config files

**Kind**: instance method of <code>[Json](#Core.Json)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the config files are cleaned  
<a name="Core.File"></a>
### Core.File
This class enables you to load and store files from/to the disk.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.File](#Core.File)
  * [new File(name, [dir])](#new_Core.File_new)
  * [.init()](#Core.File+init) ⇒ <code>Promise</code>
  * [.store()](#Core.File+store) ⇒ <code>Promise</code>

<a name="new_Core.File_new"></a>
#### new File(name, [dir])
Creates a new File storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the files |

<a name="Core.File+init"></a>
#### file.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[File](#Core.File)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="Core.File+store"></a>
#### file.store() ⇒ <code>Promise</code>
Stores the file to the disk

**Kind**: instance method of <code>[File](#Core.File)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the file is stored  
<a name="Core.Image"></a>
### Core.Image
This class enables you to load and store images from/to the disk.

**Kind**: static class of <code>[Core](#Core)</code>  

* [.Image](#Core.Image)
  * [new Image(name, [dir])](#new_Core.Image_new)
  * [.init()](#Core.Image+init) ⇒ <code>Promise</code>
  * [.store()](#Core.Image+store) ⇒ <code>Promise</code>

<a name="new_Core.Image_new"></a>
#### new Image(name, [dir])
Creates a new Image storage.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | the name of the config |
| [dir] | <code>string</code> | <code>&quot;./storage&quot;</code> | the directory in which to store the files |

<a name="Core.Image+init"></a>
#### image.init() ⇒ <code>Promise</code>
Init the storage

**Kind**: instance method of <code>[Image](#Core.Image)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the storage is initialized  
<a name="Core.Image+store"></a>
#### image.store() ⇒ <code>Promise</code>
Stores the file to the disk

**Kind**: instance method of <code>[Image](#Core.Image)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when the file is stored  
<a name="Core.ifNotUndef"></a>
### Core.ifNotUndef(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode
      If a is undefined, return b else a
     Three parameters mode
      If a is undefined, return c else b

**Kind**: static method of <code>[Core](#Core)</code>  
**Returns**: <code>\*</code> - a, b or c depending on their undefined status  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | the first parameter |
| b | <code>\*</code> | the second parameter |
| [c] | <code>\*</code> | the third parameter |

**Example**  
Two ways to use ifNotUndef. Either with two parameters (a||b):

     ```javascript
     var myHost = utils.Core.ifNotUndef(options.host, options.hostname);
     ```

     or with three parameters (a?b:c):
     
     ```javascript
     var myHost = utils.Core.ifNotUndef(options.host, options.hostname, 'localhost');
     ```

     
<a name="Core.loop"></a>
### Core.loop(func, param, retry, retryTimeout, task)
Loops until func finishes successfully

**Kind**: static method of <code>[Core](#Core)</code>  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | the function to start (must return a promise) |
| param | <code>\*</code> | the parameters to pass to the function (as an array) |
| retry | <code>int</code> | the number of times to retry |
| retryTimeout | <code>int</code> | the delay to wait before restarting the function after a failure |
| task | <code>Task</code> | the task object to update when required |

**Example**  
```js
     utils.Core.loop(
          utils.Qlik.addToWhiteList,
          [
              '10.76.224.72',
              {
                  restUri: 'https://10.76.224.72:4242',
                  pfx: certif,
                  passPhrase: '',
                  UserId: 'qlikservice',
                  UserDirectory: '2008R2-0'
              }
          ],
          30,
          2000,
          task
     );
     ```

     
<a name="Core.setTimeout2Promise"></a>
### Core.setTimeout2Promise(timeout) ⇒ <code>Promise</code>
Equivalent to setTimeout but returns a promise instead

**Kind**: static method of <code>[Core](#Core)</code>  
**Returns**: <code>Promise</code> - a promise that resolves when the timeout is reached  

| Param | Type | Description |
| --- | --- | --- |
| timeout | <code>int</code> | the timeout in ms |

**Example**  
```js
utils.Core.setTimeout2Promise(1000).then(function() {
          console.log('hi');
     });

     
```
<a name="Core.copyFile"></a>
### Core.copyFile(source, target) ⇒ <code>Promise</code>
Copies a file

**Kind**: static method of <code>[Core](#Core)</code>  
**Returns**: <code>Promise</code> - a promise that resolves when the file is copied  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | the source file full path |
| target | <code>string</code> | the target file full path |

