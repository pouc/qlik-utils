## Objects
<dl>
<dt><a href="#Qlik">Qlik</a> : <code>object</code></dt>
<dd><p>Wrapper for helper functions for Qlik Sense APIs.</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#ticketParams">ticketParams</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#options">options</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ticket">ticket</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#replaceDef">replaceDef</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#cloneDef">cloneDef</a> : <code>Object</code></dt>
<dd></dd>
</dl>
<a name="Qlik"></a>
## Qlik : <code>object</code>
Wrapper for helper functions for Qlik Sense APIs.

**Kind**: global namespace  

* [Qlik](#Qlik) : <code>object</code>
  * [.apis](#Qlik.apis) : <code>object</code>
    * [.qrs](#Qlik.apis.qrs) : <code>object</code>
    * [.qps](#Qlik.apis.qps) : <code>object</code>
      * [.ticket](#Qlik.apis.qps.ticket) : <code>object</code>
        * [.post(postParams)](#Qlik.apis.qps.ticket.post) ⇒ <code>Promise.&lt;Ticket&gt;</code>
      * [.user](#Qlik.apis.qps.user) : <code>object</code>
        * [.get(directory, id)](#Qlik.apis.qps.user.get) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
        * [.delete(directory, id)](#Qlik.apis.qps.user.delete) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
      * [.session](#Qlik.apis.qps.session) : <code>object</code>
        * [.get(id)](#Qlik.apis.qps.session.get) ⇒ <code>Promise.&lt;Session&gt;</code>
        * [.post(postParams)](#Qlik.apis.qps.session.post) ⇒ <code>Promise.&lt;Session&gt;</code>
        * [.delete(id)](#Qlik.apis.qps.session.delete) ⇒ <code>Promise.&lt;Session&gt;</code>
  * [.getTicket(options, params, [task])](#Qlik.getTicket) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
  * [.openWebSocket(options, [params], [task])](#Qlik.openWebSocket) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
  * [.addToWhiteList(options, params, task)](#Qlik.addToWhiteList) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.dynamicAppClone(options, params, task)](#Qlik.dynamicAppClone) ⇒ <code>Promise</code>
  * [.generateXrfKey([size], [chars])](#Qlik.generateXrfKey) ⇒ <code>string</code>
  * [.request(options, [params])](#Qlik.request) ⇒ <code>Promise</code>
  * [.openSession(ticket, hostUri)](#Qlik.openSession) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="Qlik.apis"></a>
### Qlik.apis : <code>object</code>
**Kind**: static namespace of <code>[Qlik](#Qlik)</code>  

* [.apis](#Qlik.apis) : <code>object</code>
  * [.qrs](#Qlik.apis.qrs) : <code>object</code>
  * [.qps](#Qlik.apis.qps) : <code>object</code>
    * [.ticket](#Qlik.apis.qps.ticket) : <code>object</code>
      * [.post(postParams)](#Qlik.apis.qps.ticket.post) ⇒ <code>Promise.&lt;Ticket&gt;</code>
    * [.user](#Qlik.apis.qps.user) : <code>object</code>
      * [.get(directory, id)](#Qlik.apis.qps.user.get) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
      * [.delete(directory, id)](#Qlik.apis.qps.user.delete) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
    * [.session](#Qlik.apis.qps.session) : <code>object</code>
      * [.get(id)](#Qlik.apis.qps.session.get) ⇒ <code>Promise.&lt;Session&gt;</code>
      * [.post(postParams)](#Qlik.apis.qps.session.post) ⇒ <code>Promise.&lt;Session&gt;</code>
      * [.delete(id)](#Qlik.apis.qps.session.delete) ⇒ <code>Promise.&lt;Session&gt;</code>

<a name="Qlik.apis.qrs"></a>
#### apis.qrs : <code>object</code>
[See documentation](qlik/apis/qrs/qrs.md)

**Kind**: static namespace of <code>[apis](#Qlik.apis)</code>  
**Example**  
```javascriptvar qrsApi = utils.Qlik.apis.qrs({    restUri: 'https://localhost:4242',    pfx: pfx,    UserId: 'qlikservice',    UserDirectory: '2008R2-0'});```
<a name="Qlik.apis.qps"></a>
#### apis.qps : <code>object</code>
**Kind**: static namespace of <code>[apis](#Qlik.apis)</code>  
**Example**  
```javascriptvar qpsApi = utils.Qlik.apis.qps({    restUri: 'https://localhost',    prefix: 'test',    pfx: pfx,    UserId: 'qlikservice',    UserDirectory: '2008R2-0'});```

* [.qps](#Qlik.apis.qps) : <code>object</code>
  * [.ticket](#Qlik.apis.qps.ticket) : <code>object</code>
    * [.post(postParams)](#Qlik.apis.qps.ticket.post) ⇒ <code>Promise.&lt;Ticket&gt;</code>
  * [.user](#Qlik.apis.qps.user) : <code>object</code>
    * [.get(directory, id)](#Qlik.apis.qps.user.get) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
    * [.delete(directory, id)](#Qlik.apis.qps.user.delete) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
  * [.session](#Qlik.apis.qps.session) : <code>object</code>
    * [.get(id)](#Qlik.apis.qps.session.get) ⇒ <code>Promise.&lt;Session&gt;</code>
    * [.post(postParams)](#Qlik.apis.qps.session.post) ⇒ <code>Promise.&lt;Session&gt;</code>
    * [.delete(id)](#Qlik.apis.qps.session.delete) ⇒ <code>Promise.&lt;Session&gt;</code>

<a name="Qlik.apis.qps.ticket"></a>
##### qps.ticket : <code>object</code>
**Kind**: static namespace of <code>[qps](#Qlik.apis.qps)</code>  
<a name="Qlik.apis.qps.ticket.post"></a>
###### ticket.post(postParams) ⇒ <code>Promise.&lt;Ticket&gt;</code>
This returns a JSON object containing the same UserId and an authentication ticket (Ticket):/qps/{virtual proxy/}ticket

**Kind**: static method of <code>[ticket](#Qlik.apis.qps.ticket)</code>  
**Returns**: <code>Promise.&lt;Ticket&gt;</code> - a promise resolving to the ticket  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Object</code> | the ticket definition to post |

**Example**  
```javascriptqpsApi.ticket.post(postParams).then(function(Ticket) {	console.log(Ticket)})```
<a name="Qlik.apis.qps.user"></a>
##### qps.user : <code>object</code>
**Kind**: static namespace of <code>[qps](#Qlik.apis.qps)</code>  

* [.user](#Qlik.apis.qps.user) : <code>object</code>
  * [.get(directory, id)](#Qlik.apis.qps.user.get) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
  * [.delete(directory, id)](#Qlik.apis.qps.user.delete) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>

<a name="Qlik.apis.qps.user.get"></a>
###### user.get(directory, id) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
This returns all proxy sessions that a user (identified by {directory} and {id}) has./qps/{virtual proxy/}user/{directory}/{id}

**Kind**: static method of <code>[user](#Qlik.apis.qps.user)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code> - a promise resolving to a list of sessions  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | the user directory |
| id | <code>string</code> | the user id |

**Example**  
```javascriptqpsApi.user.get(directory, id).then(function(Sessions) {	console.log(Sessions)})```
<a name="Qlik.apis.qps.user.delete"></a>
###### user.delete(directory, id) ⇒ <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code>
This is part of the Logout API. The directory and ID are the same UserDirectory and UserId as those that were sent in POST /qps/{virtual proxy/}ticket.A list of all proxy sessions that were connected to the deleted user is returned./qps/{virtual proxy/}user/{directory}/{id}

**Kind**: static method of <code>[user](#Qlik.apis.qps.user)</code>  
**Returns**: <code>Promise.&lt;Array.&lt;Session&gt;&gt;</code> - a promise resolving to a list of disconnected sessions  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | the user directory |
| id | <code>string</code> | the user id |

**Example**  
```javascriptqpsApi.user.delete(directory, id).then(function(Sessions) {	console.log(Sessions)})```
<a name="Qlik.apis.qps.session"></a>
##### qps.session : <code>object</code>
**Kind**: static namespace of <code>[qps](#Qlik.apis.qps)</code>  

* [.session](#Qlik.apis.qps.session) : <code>object</code>
  * [.get(id)](#Qlik.apis.qps.session.get) ⇒ <code>Promise.&lt;Session&gt;</code>
  * [.post(postParams)](#Qlik.apis.qps.session.post) ⇒ <code>Promise.&lt;Session&gt;</code>
  * [.delete(id)](#Qlik.apis.qps.session.delete) ⇒ <code>Promise.&lt;Session&gt;</code>

<a name="Qlik.apis.qps.session.get"></a>
###### session.get(id) ⇒ <code>Promise.&lt;Session&gt;</code>
This returns the proxy session identified by {id}./qps/{virtual proxy/}session/{id}

**Kind**: static method of <code>[session](#Qlik.apis.qps.session)</code>  
**Returns**: <code>Promise.&lt;Session&gt;</code> - a promise resolving to a session  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the session id |

**Example**  
```javascriptqpsApi.session.get(id).then(function(Session) {	console.log(Session)})```
<a name="Qlik.apis.qps.session.post"></a>
###### session.post(postParams) ⇒ <code>Promise.&lt;Session&gt;</code>
This adds a new proxy session./qps/{virtual proxy/}session

**Kind**: static method of <code>[session](#Qlik.apis.qps.session)</code>  
**Returns**: <code>Promise.&lt;Session&gt;</code> - a promise resolving to a session  

| Param | Type | Description |
| --- | --- | --- |
| postParams | <code>Object</code> | the session to create |

**Example**  
```javascriptqpsApi.session.post(postParams).then(function(Session) {	console.log(Session)})```
<a name="Qlik.apis.qps.session.delete"></a>
###### session.delete(id) ⇒ <code>Promise.&lt;Session&gt;</code>
This deletes the proxy session identified by {id} and returns it as a session struct./qps/{virtual proxy/}session/{id}

**Kind**: static method of <code>[session](#Qlik.apis.qps.session)</code>  
**Returns**: <code>Promise.&lt;Session&gt;</code> - a promise resolving to the session that was deleted  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the session id |

**Example**  
```javascriptqpsApi.session.delete(id).then(function(Session) {	console.log(Session)})```
<a name="Qlik.getTicket"></a>
### Qlik.getTicket(options, params, [task]) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
Generates a ticket on Qlik Sense QRS Api. If the targetId is not correctthen the ticket will redirect to the hub

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>[Promise.&lt;ticket&gt;](#ticket)</code> - a promise resolving to the generated ticket  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>[options](#options)</code> | Qlik Sense connection options |
| params | <code>[ticketParams](#ticketParams)</code> | the ticket parameters |
| [task] | <code>Task</code> | a task that will trace the ticket generation progress |

**Example**  
```javascriptutils.Qlik.getTicket({         restUri: 'https://10.76.224.72',         pfx: pfx,         passPhrase: ''     },     {         UserId: 'qlikservice',         UserDirectory: '2008R2-0',         Attributes: []     }}).then(function(retVal) {     console.log(retVal);});```
<a name="Qlik.openWebSocket"></a>
### Qlik.openWebSocket(options, [params], [task]) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
Safe function to open a ws session on a Qlik Sense server. This function can reuse the cookie of a previously opened session

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>[Promise.&lt;ticket&gt;](#ticket)</code> - a promise resolving to the generated ticket  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>[options](#options)</code> | Qlik Sense connection options |
| [params] | <code>[ticketParams](#ticketParams)</code> | the ticket parameters to generate if no cookie is provided |
| [task] | <code>Task</code> | a task that will trace the session opening progress |

**Example**  
Classical mode:```javascriptutils.Qlik.openWebSocket({         restUri: 'https://10.76.224.72',         pfx: pfx,         passPhrase: ''     },     {         ticketParams: {             UserId: 'qlikservice',             UserDirectory: '2008R2-0',             Attributes: []         }     }}).then(function(ws) {});```
**Example**  
Reuse mode:```javascriptutils.Qlik.openWebSocket({         restUri: 'https://10.76.224.72',         pfx: pfx,         passPhrase: '',         cookie: 'X-Qlik-Session=12345678-1234-1234-1234-123456789012; Path=/; HttpOnly; Secure'     }}).then(function(ws) {});```
<a name="Qlik.addToWhiteList"></a>
### Qlik.addToWhiteList(options, params, task) ⇒ <code>Promise.&lt;Object&gt;</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy.Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent APIcalls within this restart will fail miserably with various random & useless error messages.

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the virtual proxy configuration when successfull  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>[options](#options)</code> | Qlik Sense connection options |
| params | <code>string</code> | parameters to add to the whitelist |
| params.ip | <code>string</code> | the ip to add |
| [params.vp] | <code>string</code> &#124; <code>int</code> | the prefix or id of the virtual proxy to update. If null or false, this function will update all vps |
| task | <code>Task</code> |  |

**Example**  
```javascriptreadFile('./client.pfx').then(function(certif) {     return utils.Qlik.addToWhiteList({         restUri: 'https://10.76.224.72:4242',         pfx: certif,         passPhrase: '',         UserId: 'qlikservice',         UserDirectory: '2008R2-0',         params: {             ip: '10.76.224.72'         }     });}).then(function(ret) {     console.log(ret);}, function(ret) {     console.log(ret);});```
<a name="Qlik.dynamicAppClone"></a>
### Qlik.dynamicAppClone(options, params, task) ⇒ <code>Promise</code>
Duplicates a template app, updates its script, reloads it and publishes it

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>Promise</code> - a promise that resolves when the process is finished  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>[options](#options)</code> |  | Qlik Sense connection options |
| params | <code>string</code> |  | parameters for the cloning |
| params.templateApp | <code>string</code> |  | name or id of the template application |
| [params.maxParDup] | <code>int</code> | <code>1</code> | maximum number of // operations (opened sockets & QRS API queries) |
| [params.replacesDef] | <code>Array.&lt;(replaceDef\|cloneDef)&gt;</code> &#124; <code>[replaceDef](#replaceDef)</code> &#124; <code>[cloneDef](#cloneDef)</code> |  | definition of script replacement(s) to perform and parameters of the app to generate. If this parameter is null or false, the script is not updated |
| [params.duplicateApp] | <code>boolean</code> | <code>true</code> | duplicates the template app |
| [params.reloadApp] | <code>boolean</code> | <code>true</code> | reload the app |
| [params.keepApp] | <code>boolean</code> | <code>true</code> | keep the app when the operation finished. If false, app will be deleted |
| [params.overwriteApp] | <code>boolean</code> | <code>true</code> | Overwrite the replace app if it exists. If false, and if replace app exists, nothing will happen |
| [params.reloadRegex] | <code>RegExp</code> | <code>/(.*)/</code> | regex to track in the script reload trace. If this parameter is null or false, uses default regex that captures everything |
| [params.replaceApp] | <code>boolean</code> &#124; <code>string</code> | <code>true</code> | name or id of the app to replace. Can also be boolean (when false, don't replace the app, when true, replace the app with name == targetApp) |
| [params.targetApp] | <code>string</code> | <code>&quot;default&quot;</code> | name of the new app. Defaults to %(templateAppName)s %(replace.value)s |
| [params.publishStream] | <code>string</code> |  | name or id of a stream to publish the new app in. If this parameter is null or false, then the app is not published |
| [params.createReloadTask] | <code>boolean</code> &#124; <code>Qlik.reloadTask</code> | <code>true</code> | create a reload task associated to the generated app. If true, create a task with a daily trigger @ 4AM. If a reload task already exists it will be overwritten. If null or false, do nothing. |
| [params.customProperties] | <code>Object</code> |  | custom properties to add to the newly created app. If this parameter is null or false, then the custom properties are not changed. |
| task | <code>Task</code> |  | task that will trace the cloning progress |

**Example**  
Simple mode 1 : duplicate a template app, replace a marker in the script, reload and publish (overwrites if target app exists in stream)```javascriptvar task = new utils.Core.Task();task.start();task.bind(function(task) {     console.log(task.val, task.detail);});readFile(testQlikSensePfx).then(function(pfx) {     task.running('info', 'certificate loaded...');     return utils.Qlik.dynamicAppClone({             restUri: 'http://10.20.30.40',             pfx: pfx,             UserId: 'qlikservice',             UserDirectory: '2008R2-0'         },         {             templateApp: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',             replacesDef: { marker: '%Replace me!%', value: 'Employees.qvd' },             publishStream: 'aaec8d41-5201-43ab-809f-3063750dfafd'         },         task: task     });});```
**Example**  
Simple mode 2 : duplicate a template app, replace 3 markers in the script, reload and don't publish```javascriptvar task = new utils.Core.Task();task.start();task.bind(function(task) {     console.log(task.val, task.detail);});readFile(testQlikSensePfx).then(function(pfx) {     task.running('info', 'certificate loaded...');     return utils.Qlik.dynamicAppClone({             restUri: 'http://10.20.30.40',             pfx: pfx,             UserId: 'qlikservice',             UserDirectory: '2008R2-0'         },         {             templateApp: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',             replacesDef: [                 { marker: '%Replace me1!%', value: 'Employees1.qvd' },                 { marker: '%Replace me2!%', value: 'Employees2.qvd' },                 { marker: '%Replace me3!%', value: 'Employees3.qvd' }             ]         },         task: task     });});```
**Example**  
Advanced mode 1: clone a template app twice: - first app will be called 'White App' and will have the markers replaced to 1 & 2 qvds. Don't reload it but save it. When publishing it, replace the app with name 'White App' already existing in the stream. - second app will be called 'Black App' and will have the markers replaced to 3 & 4 qvds. Reload it. Don't save it (delete the copy). Don't publish it.```javascriptvar task = new utils.Core.Task();task.start();task.bind(function(task) {     console.log(task.val, task.detail);});readFile(testQlikSensePfx).then(function(pfx) {     task.running('info', 'certificate loaded...');     return utils.Qlik.dynamicAppClone({             restUri: 'http://10.20.30.40',             pfx: pfx,             UserId: 'qlikservice',             UserDirectory: '2008R2-0'         },         {             templateApp: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',             replacesDef: [                 {                     replaces: [                         { marker: '%Replace me1!%', value: 'Employees1.qvd' }                         { marker: '%Replace me2!%', value: 'Employees2.qvd' }                     ],                     replaceApp: 'White App',                     reloadApp = false,                     targetApp: 'White App'                 },                 {                     replaces: [                         { marker: '%Replace me1!%', value: 'Employees3.qvd' }                         { marker: '%Replace me2!%', value: 'Employees4.qvd' }                     ],                     keepApp = false,                     targetApp: 'Black App'                     publishStream: false                 }             ],             reloadApp = true,             replaceApp = false,             publishStream: 'aaec8d41-5201-43ab-809f-3063750dfafd'         },         task: task     });});```
<a name="Qlik.generateXrfKey"></a>
### Qlik.generateXrfKey([size], [chars]) ⇒ <code>string</code>
Generates a random Xrf key of a given size within a set of given chars

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>string</code> - the xrf key  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [size] | <code>int</code> | <code>16</code> | the number of characters of the xrf key |
| [chars] | <code>string</code> | <code>&quot;abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789&quot;</code> | the characters from which to construct the key |

**Example**  
```javascriptvar xrf = utils.Qlik.generateXrfkey(8);```
<a name="Qlik.request"></a>
### Qlik.request(options, [params]) ⇒ <code>Promise</code>
Makes a request on a Qlik Sense API endpoint defined in the options object, posting the params object

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>Promise</code> - a promise resolving to the response to the request  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>[options](#options)</code> | the options to connect to the API endpoint |
| [params] | <code>Object</code> | the parameters to post to the API endpoint |

**Example**  
```javascriptutils.Qlik.request({     restUri: 'https://10.76.224.72:4243/qps/ticket',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});```
<a name="Qlik.openSession"></a>
### Qlik.openSession(ticket, hostUri) ⇒ <code>Promise.&lt;string&gt;</code>
Opens a session on the Qlik Sense Hub with the given ticket and returns the session cookie

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>Promise.&lt;string&gt;</code> - a promise resolving to the session cookie  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>[ticket](#ticket)</code> | the generated ticket |
| hostUri | <code>string</code> | the URI of the Qlik Sense host (Hub or preferably QMC) to open a session on |

**Example**  
```javascriptutils.Qlik.openSession({     UserDirectory: '2008R2-0',     UserId: 'qlikservice',     Attributes: [],     Ticket: 'QzSPXzBmJKjhucPF',     TargetUri: null}, 'https://localhost/hub').then(function(retVal) {     console.log(retVal);});```
<a name="ticketParams"></a>
## ticketParams : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UserId | <code>string</code> | the user id to generate a ticket for |
| UserDirectory | <code>string</code> | the user directory of the user to generate a ticket for |
| Attributes | <code>Array.&lt;string&gt;</code> | the user attributes |
| TargetId | <code>string</code> | a target id |

<a name="options"></a>
## options : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| UserDirectory | <code>string</code> | <code>&quot;.&quot;</code> | the user directory of the Qlik Sense user that will make the API call (not required if a valid cookie is set) |
| UserId | <code>string</code> | <code>&quot;qlikservice&quot;</code> | the user id of the Qlik Sense user that will make the API call (not required if a valid cookie is set) |
| cookie | <code>string</code> |  | the cookie of a valid Qlik Sense session |
| restUri | <code>string</code> |  | an URI to a valid Qlik Sense endpoint |
| qpsRestUri | <code>string</code> | <code>&quot;https://restUri.hostname:4243/qps/restUri.pathname&quot;</code> | an URI to a valid Qlik Sense QPS endpoint |
| qrsRestUri | <code>string</code> | <code>&quot;https://restUri.hostname:4244/qrs&quot;</code> | an URI to a valid Qlik Sense QRS endpoint |
| wsUri | <code>string</code> | <code>&quot;wss://restUri.hostname:443&quot;</code> | an URI to a valid Qlik Sense WebSocket endpoint |
| appname | <code>string</code> |  | the application name if required by the websocket |
| method | <code>string</code> | <code>&quot;POST&quot;</code> | the method of the HTTP request (GET/PUT/POST/DELETE) |
| pfx | <code>buffer</code> |  | the Qlik Sense pfx certificate (not required if a valid cookie is set) |
| passphrase | <code>string</code> |  | the Qlik Sense certificate's passphrase (not required if a valid cookie is set) |
| key | <code>string</code> |  | the Qlik Sense certificate's key (not required if a valid cookie is set) |
| cert | <code>string</code> |  | the Qlik Sense certificate (not required if a valid cookie is set) |
| ca | <code>string</code> |  | the Qlik Sense certificate's certification authority (not required if a valid cookie is set) |
| timeout | <code>int</code> |  | the timeout of the HTTP request |

<a name="ticket"></a>
## ticket : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UserId | <code>string</code> | the user id of the generated ticket |
| UserDirectory | <code>string</code> | the user directory of generated ticket |
| Attributes | <code>Array.&lt;string&gt;</code> | the user attributes |
| Ticket | <code>string</code> | the ticket |
| TargetUri | <code>string</code> | the target uri |

<a name="replaceDef"></a>
## replaceDef : <code>Object</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| marker | <code>string</code> | to be found in the script and replaced during the duplication. |
| value | <code>string</code> | the value to replace in the script |

<a name="cloneDef"></a>
## cloneDef : <code>Object</code>
**Kind**: global typedef  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| replaces | <code>[Array.&lt;replaceDef&gt;](#replaceDef)</code> &#124; <code>[replaceDef](#replaceDef)</code> |  | the list of values to be replaced. If this parameter is null or false, the script is not updated |
| [duplicateApp] | <code>boolean</code> | <code>true</code> | duplicates the template app. Overrides parent duplicateApp if defined |
| [reloadApp] | <code>boolean</code> | <code>parent value</code> | reload the app. Overrides parent reloadApp if defined |
| [keepApp] | <code>boolean</code> | <code>parent value</code> | keep the app when the operation finished. If false, app will be deleted. Overrides parent keepApp if defined |
| [overwriteApp] | <code>boolean</code> | <code>parent value</code> | Overwrite the replace app if it exists. If false, and if replace app exists, nothing will happen. Overrides parent replaceApp if defined |
| [replaceApp] | <code>boolean</code> &#124; <code>string</code> | <code>parent value</code> | name or id of the app to replace. Can also be boolean (when false, don't replace the app, when true, replace the app which name == targetApp). Overrides parent replaceApp if defined |
| [targetApp] | <code>string</code> | <code>&quot;parent value&quot;</code> | name of the new app. Overrides parent targetApp if defined |
| [publishStream] | <code>string</code> |  | name or id of the stream to publish the new app in. If this parameter is null or false, then the app is not published. Overrides parent publishStreamId if defined |
| [createReloadTask] | <code>boolean</code> &#124; <code>Qlik.reloadTask</code> | <code>true</code> | create a reload task associated to the generated app. If true, create a task with a daily trigger @ 4AM. If a reload task already exists it will be overwritten. If null or false, do nothing. Overrides parent createReloadTask if defined |
| [customProperties] | <code>Object</code> |  | custom properties to add to the newly created app. If this parameter is null or false, then the custom properties are not changed. Overrides parent customProperties if defined |

