## Modules
<dl>
<dt><a href="#module_qlik-utils">qlik-utils</a></dt>
<dd><p>A set of utility functions / classes for simplifying the call to Qlik Sense APIs</p>
</dd>
</dl>
## Classes
<dl>
<dt><a href="#Task">Task</a></dt>
<dd><p>This class enables you to handle tasks asynchronously. It relies on Q promises.</p>
</dd>
</dl>
## Functions
<dl>
<dt><a href="#ifnotundef">ifnotundef(a, b, [c])</a> ⇒ <code>*</code></dt>
<dd><p>Two parameters mode
 If a is undefined, return b else a
Three parameters mode
 If a is undefined, return c else b</p>
</dd>
<dt><a href="#generateXrfkey">generateXrfkey([size], [chars])</a> ⇒ <code>string</code></dt>
<dd><p>Generates a random Xrf key of a given size within a set of given chars</p>
</dd>
<dt><a href="#request">request(params, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object</p>
</dd>
<dt><a href="#getTicket">getTicket(params, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Generates a ticket on Qlik Sense QRS Api</p>
</dd>
<dt><a href="#openSession">openSession(ticket, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie</p>
</dd>
<dt><a href="#addToWhiteList">addToWhiteList(ip, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Adds the given ip address to the websocket whitelist of the given virtual proxy</p>
</dd>
<dt><a href="#basicAuth">basicAuth(users)</a> ⇒ <code>function</code></dt>
<dd><p>Simple basic auth middleware for use with Express 4.x.</p>
</dd>
<dt><a href="#setTimeout2Promise">setTimeout2Promise(timeout)</a> ⇒ <code>Promise</code></dt>
<dd><p>Equivalent to setTimeout but returns a promise instead</p>
</dd>
</dl>
<a name="module_qlik-utils"></a>
## qlik-utils
A set of utility functions / classes for simplifying the call to Qlik Sense APIs

**Example**  
```jsvar utils = require("qlik-utils");```
<a name="Task"></a>
## Task
This class enables you to handle tasks asynchronously. It relies on Q promises.

**Kind**: global class  

* [Task](#Task)
  * [new Task()](#new_Task_new)
  * _instance_
    * [.start()](#Task+start)
    * [.running(val)](#Task+running)
    * [.done(val)](#Task+done)
    * [.failed(val)](#Task+failed)
  * _static_
    * [.task.all(tasks)](#Task.task.all) ⇒ <code>Promise</code>

<a name="new_Task_new"></a>
### new Task()
Creates a new task.

<a name="Task+start"></a>
### task.start()
Starts the task.

**Kind**: instance method of <code>[Task](#Task)</code>  
<a name="Task+running"></a>
### task.running(val)
Changes the task to the 'running' status.This method can also be called to update the 'running' status with a new value

**Kind**: instance method of <code>[Task](#Task)</code>  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |

<a name="Task+done"></a>
### task.done(val)
Ends the task with the 'done' status.

**Kind**: instance method of <code>[Task](#Task)</code>  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |

<a name="Task+failed"></a>
### task.failed(val)
ends the task with the 'failed' status.

**Kind**: instance method of <code>[Task](#Task)</code>  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | the progress value |

<a name="Task.task.all"></a>
### Task.task.all(tasks) ⇒ <code>Promise</code>
Similar to the promise.all function but with tasks

**Kind**: static method of <code>[Task](#Task)</code>  
**Returns**: <code>Promise</code> - A promise that resolves when all the tasks are resolved  

| Param | Type | Description |
| --- | --- | --- |
| tasks | <code>Object.&lt;string, Task&gt;</code> | An object listing tasks with their name |

<a name="ifnotundef"></a>
## ifnotundef(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode If a is undefined, return b else aThree parameters mode If a is undefined, return c else b

**Kind**: global function  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| [c] | <code>\*</code> | 

**Example**  
```js
var myHost = ifnotundef(options.host, options.hostname);
```
**Example**  
```js
var myHost = ifnotundef(options.host, options.hostname, 'localhost');
```
<a name="generateXrfkey"></a>
## generateXrfkey([size], [chars]) ⇒ <code>string</code>
Generates a random Xrf key of a given size within a set of given chars

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>integer</code> | <code>16</code> | 
| [chars] | <code>string</code> | <code>&quot;abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789&quot;</code> | 

**Example**  
```js
var xrf = generateXrfkey(8);
```
<a name="request"></a>
## request(params, options) ⇒ <code>Promise</code>
Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the parameters to post to the API endpoint |
| options | <code>Object</code> | the options to connect to the API endpoint |

**Example**  
```js
request({     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}, {     restUri: 'https://10.76.224.72:4243/qps/ticket',     pfx: pfx,     passPhrase: ''}).then(function(retVal) {     console.log(retVal);});
```
<a name="getTicket"></a>
## getTicket(params, options) ⇒ <code>Promise</code>
Generates a ticket on Qlik Sense QRS Api

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the ticket parameters |
| options | <code>Object</code> | the options to connect to the ticket API endpoint |

**Example**  
```js
getTicket({     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}, {     restUri: 'https://10.76.224.72:4243',     pfx: pfx,     passPhrase: ''}).then(function(retVal) {     console.log(retVal);});
```
<a name="openSession"></a>
## openSession(ticket, options) ⇒ <code>Promise</code>
Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>Object</code> | the generated ticket |
| options | <code>Object</code> | parsed url of the Qlik Sense Hub |

**Example**  
```js
openSession({     UserDirectory: '2008R2-0',     UserId: 'qlikservice',     Attributes: [],     Ticket: 'QzSPXzBmJKjhucPF',     TargetUri: null}, url.parse('https://localhost/hub')).then(function(retVal) {     console.log(retVal);});
```
<a name="addToWhiteList"></a>
## addToWhiteList(ip, options) ⇒ <code>Promise</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | the ip to add |
| options | <code>Object</code> | the endpoint to add the ip to |

**Example**  
```js
readFile('./client.pfx').then(function(certif) {     return utils.addToWhiteList('10.76.224.72', {         restUri: 'https://10.76.224.72:4242',         pfx: certif,         passPhrase: '',         UserId: 'qlikservice',         UserDirectory: '2008R2-0'     });}).then(function(ret) {     console.log(ret);}, function(ret) {     console.log(ret);});
```
<a name="basicAuth"></a>
## basicAuth(users) ⇒ <code>function</code>
Simple basic auth middleware for use with Express 4.x.

**Kind**: global function  
**Returns**: <code>function</code> - Express 4 middleware requiring the given credentials  

| Param | Type | Description |
| --- | --- | --- |
| users | <code>Object</code> | list of usernames & passwords |

**Example**  
```js
app.use('/api-requiring-auth', utils.basicAuth([{user: 'username', pass: 'password'}]));
```
<a name="setTimeout2Promise"></a>
## setTimeout2Promise(timeout) ⇒ <code>Promise</code>
Equivalent to setTimeout but returns a promise instead

**Kind**: global function  

| Param | Description |
| --- | --- |
| timeout | the timeout in ms |

**Example**  
```js
setTimeout2Promise(1000).then(function() {     console.log('hi');});
```
