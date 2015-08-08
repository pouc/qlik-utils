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
    * [.request([params], options)](#module_qlik-utils.request) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getTicket(params, options)](#module_qlik-utils.getTicket) ⇒ <code>Promise.&lt;ticket&gt;</code>
    * [.openSession(ticket, options)](#module_qlik-utils.openSession) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.addToWhiteList(ip, options)](#module_qlik-utils.addToWhiteList) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.basicAuth(users)](#module_qlik-utils.basicAuth) ⇒ <code>function</code>
    * [.setTimeout2Promise(timeout)](#module_qlik-utils.setTimeout2Promise) ⇒ <code>Promise</code>
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
var myHost = ifnotundef(options.host, options.hostname);
```
**Example**  
```js
var myHost = ifnotundef(options.host, options.hostname, 'localhost');
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
var xrf = generateXrfkey(8);
```
<a name="module_qlik-utils.request"></a>
### utils.request([params], options) ⇒ <code>Promise.&lt;\*&gt;</code>
Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>Promise.&lt;\*&gt;</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| [params] | <code>Object</code> | the parameters to post to the API endpoint |
| options | <code>options</code> | the options to connect to the API endpoint |

**Example**  
```js
request({     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}, {     restUri: 'https://10.76.224.72:4243/qps/ticket',     pfx: pfx,     passPhrase: ''}).then(function(retVal) {     console.log(retVal);});
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
getTicket({     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}, {     restUri: 'https://10.76.224.72:4243',     pfx: pfx,     passPhrase: ''}).then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.openSession"></a>
### utils.openSession(ticket, options) ⇒ <code>Promise.&lt;string&gt;</code>
Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise resolving to the session cookie  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>ticket</code> | the generated ticket |
| options | <code>options</code> | parsed url of the Qlik Sense Hub |

**Example**  
```js
openSession({     UserDirectory: '2008R2-0',     UserId: 'qlikservice',     Attributes: [],     Ticket: 'QzSPXzBmJKjhucPF',     TargetUri: null}, url.parse('https://localhost/hub')).then(function(retVal) {     console.log(retVal);});
```
<a name="module_qlik-utils.addToWhiteList"></a>
### utils.addToWhiteList(ip, options) ⇒ <code>Promise.&lt;Object&gt;</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy

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
<a name="module_qlik-utils.setTimeout2Promise"></a>
### utils.setTimeout2Promise(timeout) ⇒ <code>Promise</code>
Equivalent to setTimeout but returns a promise instead

**Kind**: static method of <code>[qlik-utils](#module_qlik-utils)</code>  

| Param | Description |
| --- | --- |
| timeout | the timeout in ms |

**Example**  
```js
setTimeout2Promise(1000).then(function() {     console.log('hi');});
```
<a name="module_qlik-utils..Task"></a>
### utils~Task
This class enables you to handle tasks asynchronously. It relies on Q promises.

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

