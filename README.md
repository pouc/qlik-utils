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
    * [.ifnotundef(a, b, [c])](#module_qlik-utils.ifnotundef) ⇒ <code>\*</code>
    * [.generateXrfkey([size], [chars])](#module_qlik-utils.generateXrfkey) ⇒ <code>string</code>
    * [.request(options, [params])](#module_qlik-utils.request) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getTicket(params, options)](#module_qlik-utils.getTicket) ⇒ <code>Promise.&lt;ticket&gt;</code>
    * [.openSession(ticket, hostUri)](#module_qlik-utils.openSession) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.addToWhiteList(ip, options)](#module_qlik-utils.addToWhiteList) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.loop(func, param, retry, retryTimeout, task)](#module_qlik-utils.loop)
    * [.basicAuth(users)](#module_qlik-utils.basicAuth) ⇒ <code>function</code>
    * [.removeIf(array, callback)](#module_qlik-utils.removeIf)
    * [.setTimeout2Promise(timeout)](#module_qlik-utils.setTimeout2Promise) ⇒ <code>Promise</code>
    * [.dynamicAppClone(options, ticketParam, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task)](#module_qlik-utils.dynamicAppClone) ⇒ <code>Promise</code>
  * _inner_
    * [~Task](#module_qlik-utils..Task)
      * [new Task()](#new_module_qlik-utils..Task_new)
    * [~options](#module_qlik-utils..options) : <code>Object</code>
    * [~ticketParams](#module_qlik-utils..ticketParams) : <code>Object</code>
    * [~ticket](#module_qlik-utils..ticket) : <code>Object</code>

<a name="module_qlik-utils.ifnotundef"></a>
### utils.ifnotundef(a, b, [c]) ⇒ <code>\*</code>
Two parameters mode If a is undefined, return b else aThree parameters mode If a is undefined, return c else b

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 
| [c] | <code>\*</code> | 

**Example**  
```js
var myHost = utils.ifnotundef(options.host, options.hostname);
```
**Example**  
```js
var myHost = utils.ifnotundef(options.host, options.hostname, 'localhost');
```
<a name="module_qlik-utils.generateXrfkey"></a>
### utils.generateXrfkey([size], [chars]) ⇒ <code>string</code>
Generates a random Xrf key of a given size within a set of given chars

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>int</code> | <code>16</code> | 
| [chars] | <code>string</code> | <code>&quot;abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789&quot;</code> | 

**Example**  
```js
var xrf = utils.generateXrfkey(8);
```
<a name="module_qlik-utils.request"></a>
### utils.request(options, [params]) ⇒ <code>Promise.&lt;\*&gt;</code>
Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>Promise.&lt;\*&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>options</code> | the options to connect to the API endpoint |
| [params] | <code>Object</code> | the parameters to post to the API endpoint |

**Example**  
```js
utils.request({     restUri: 'https://10.76.224.72:4243/qps/ticket',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.getTicket"></a>
### utils.getTicket(params, options) ⇒ <code>Promise.&lt;ticket&gt;</code>
Generates a ticket on Qlik Sense QRS Api

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>Promise.&lt;ticket&gt;</code> - resolving to the generated ticket  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>ticketParams</code> | the ticket parameters |
| options | <code>options</code> | the options to connect to the ticket API endpoint |

**Example**  
```js
utils.getTicket({     restUri: 'https://10.76.224.72:4243',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.openSession"></a>
### utils.openSession(ticket, hostUri) ⇒ <code>Promise.&lt;string&gt;</code>
Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise resolving to the session cookie  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>ticket</code> | the generated ticket |
| hostUri | <code>string</code> | the URI of the Qlik Sense host (Hub or preferably QMC) to open a session on |

**Example**  
```js
utils.openSession({     UserDirectory: '2008R2-0',     UserId: 'qlikservice',     Attributes: [],     Ticket: 'QzSPXzBmJKjhucPF',     TargetUri: null}, 'https://localhost/hub').then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.addToWhiteList"></a>
### utils.addToWhiteList(ip, options) ⇒ <code>Promise.&lt;Object&gt;</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy.Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent APIcalls within this restart will fail miserably with various random & useless error messages.

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the virtual proxy configuration when successfull  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | the ip to add |
| options | <code>options</code> | the endpoint to add the ip to |

**Example**  
```js
readFile('./client.pfx').then(function(certif) {     return utils.addToWhiteList('10.76.224.72', {         restUri: 'https://10.76.224.72:4242',         pfx: certif,         passPhrase: '',         UserId: 'qlikservice',         UserDirectory: '2008R2-0'     });}).then(function(ret) {     console.log(ret);}, function(ret) {     console.log(ret);});
```
<a name="module_qlik-utils.loop"></a>
### utils.loop(func, param, retry, retryTimeout, task)
Loops until func finishes successfully

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | the function to start (must return a promise) |
| param | <code>\*</code> | the parameters to pass to the function (as an array) |
| retry | <code>int</code> | the number of times to retry |
| retryTimeout | <code>int</code> | the delay to wait before restarting the function after a failure |
| task | <code>Task</code> | the task object to update when required |

**Example**  
```js
utils.loop(     utils.addToWhiteList,     [         '10.76.224.72',         {             restUri: 'https://10.76.224.72:4242',             pfx: certif,             passPhrase: '',             UserId: 'qlikservice',             UserDirectory: '2008R2-0'         }     ],     30,     2000,     task);
```
<a name="module_qlik-utils.basicAuth"></a>
### utils.basicAuth(users) ⇒ <code>function</code>
Simple basic auth middleware for use with Express 4.x.

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>function</code> - Express 4 middleware requiring the given credentials  

| Param | Type | Description |
| --- | --- | --- |
| users | <code>Object</code> | list of usernames & passwords |

**Example**  
```js
app.use('/api-requiring-auth', utils.basicAuth([{user: 'username', pass: 'password'}]));
```
<a name="module_qlik-utils.removeIf"></a>
### utils.removeIf(array, callback)
Remove object from an array on condition

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param |
| --- |
| array | 
| callback | 

<a name="module_qlik-utils.setTimeout2Promise"></a>
### utils.setTimeout2Promise(timeout) ⇒ <code>Promise</code>
Equivalent to setTimeout but returns a promise instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Description |
| --- | --- |
| timeout | the timeout in ms |

**Example**  
```js
utils.setTimeout2Promise(1000).then(function() {     console.log('hi');});
```
<a name="module_qlik-utils.dynamicAppClone"></a>
### utils.dynamicAppClone(options, ticketParam, templateAppId, scriptMarker, scriptReplace, scriptRegex, publishStreamId, task) ⇒ <code>Promise</code>
Duplicates a template app, updates its script, reloads it and publishes it

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>options</code> | Uri to the Qlik Sense endpoint |
| ticketParam | <code>ticketParams</code> | parameters of the ticket to generate |
| templateAppId | <code>string</code> | id of the template application |
| scriptMarker | <code>string</code> | marker to be found in the script and replaced during the duplication |
| scriptReplace | <code>string</code> | replace value of the marker above |
| scriptRegex | <code>RegExp</code> | regex to track in the script trace |
| publishStreamId | <code>string</code> | id of the stream to publish into |
| task | <code>Task</code> | task that will trace the cloning progress |

**Example**  
```js
readFile(testQlikSensePfx).then(function(pfx) {     return utils.dynamicAppClone({             restUri: testQlikSenseIp,             pfx: pfx,             'UserId': 'qlikservice',             'UserDirectory': '2008R2-0'         }, {             'UserId': 'qlikservice',             'UserDirectory': '2008R2-0',             'Attributes': []         },         '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',         '%Replace me!%',         randomLoop,         /Text << fields ([0-9,]+) Lines fetched/g,         'aaec8d41-5201-43ab-809f-3063750dfafd',         task     );});
```
<a name="module_qlik-utils..Task"></a>
### utils~Task
This class enables you to handle tasks asynchronously.

**Kind**: inner class of <code>[qlik-utils](#module_qlik-utils)</code>  
<a name="new_module_qlik-utils..Task_new"></a>
#### new Task()
Creates a new task.

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

