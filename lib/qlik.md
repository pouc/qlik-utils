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
</dl>
<a name="Qlik"></a>
## Qlik : <code>object</code>
Wrapper for helper functions for Qlik Sense APIs.

**Kind**: global namespace  

* [Qlik](#Qlik) : <code>object</code>
  * [.getTicket(params, options)](#Qlik.getTicket) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
  * [.addToWhiteList(ip, options)](#Qlik.addToWhiteList) ⇒ <code>Promise.&lt;Object&gt;</code>
  * [.dynamicAppClone(options)](#Qlik.dynamicAppClone) ⇒ <code>Promise</code>
  * [.generateXrfKey([size], [chars])](#Qlik.generateXrfKey) ⇒ <code>string</code>
  * [.request(options, [params])](#Qlik.request) ⇒ <code>Promise</code>
  * [.openSession(ticket, hostUri)](#Qlik.openSession) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="Qlik.getTicket"></a>
### Qlik.getTicket(params, options) ⇒ <code>[Promise.&lt;ticket&gt;](#ticket)</code>
Generates a ticket on Qlik Sense QRS Api. If the targetId is not correctthen the ticket will redirect to the hub

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>[Promise.&lt;ticket&gt;](#ticket)</code> - resolving to the generated ticket  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>[ticketParams](#ticketParams)</code> | the ticket parameters |
| options | <code>[options](#options)</code> | the options to connect to the ticket API endpoint |

**Example**  
```javascriptutils.Qlik.getTicket({     restUri: 'https://10.76.224.72:4243',     pfx: pfx,     passPhrase: ''}, {     'UserId': 'qlikservice',     'UserDirectory': '2008R2-0',     'Attributes': []}).then(function(retVal) {     console.log(retVal);});```
<a name="Qlik.addToWhiteList"></a>
### Qlik.addToWhiteList(ip, options) ⇒ <code>Promise.&lt;Object&gt;</code>
Adds the given ip address to the websocket whitelist of the given virtual proxy.Be careful: this restarts the proxy. The restart can take 1-2 seconds. All subsequent APIcalls within this restart will fail miserably with various random & useless error messages.

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>Promise.&lt;Object&gt;</code> - a promise resolving to the virtual proxy configuration when successfull  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | the ip to add |
| options | <code>[options](#options)</code> | the endpoint to add the ip to |

**Example**  
```javascriptreadFile('./client.pfx').then(function(certif) {     return utils.Qlik.addToWhiteList('10.76.224.72', {         restUri: 'https://10.76.224.72:4242',         pfx: certif,         passPhrase: '',         UserId: 'qlikservice',         UserDirectory: '2008R2-0'     });}).then(function(ret) {     console.log(ret);}, function(ret) {     console.log(ret);});```
<a name="Qlik.dynamicAppClone"></a>
### Qlik.dynamicAppClone(options) ⇒ <code>Promise</code>
Duplicates a template app, updates its script, reloads it and publishes it

**Kind**: static method of <code>[Qlik](#Qlik)</code>  
**Returns**: <code>Promise</code> - a promise that resolves when the process is finished  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>[options](#options)</code> |  | Uri to the Qlik Sense endpoint |
| options.templateAppId | <code>string</code> |  | id of the template application |
| [options.templateMaxParDup] | <code>int</code> | <code>5</code> | maximum number of // operations (opened sockets & QRS API queries) |
| [options.scriptMarker=] | <code>string</code> |  | marker to be found in the script and replaced during the duplication. If this parameter is null, the script is not updated. |
| options.scriptReplaces | <code>Array.&lt;string&gt;</code> |  | replace value of the marker above for each array value |
| [options.scriptRegex=] | <code>RegExp</code> |  | regex to track in the script trace. If this parameter is null (or scriptMarker parameter above is null), then the app is not reloaded |
| [options.publishStreamId=] | <code>string</code> |  | id of the stream to publish into. If this parameter is null, then the app is not published |
| options.publishReplace | <code>boolean</code> |  | boolean telling wether to replace the app if an app with the same name was already published in the same stream |
| options.task | <code>Task</code> |  | task that will trace the cloning progress |

**Example**  
```javascriptvar task = new utils.Core.Task();task.start();task.bind(function(task) {     console.log(task.val, task.detail);});readFile(testQlikSensePfx).then(function(pfx) {     task.running('info', 'certificate loaded...');     return utils.Qlik.dynamicAppClone({         restUri: 'http://10.20.30.40',         pfx: pfx,         UserId: 'qlikservice',         UserDirectory: '2008R2-0',         templateAppId: '3bcb8ed0-7ac5-4cd0-8913-37d1255d67c3',         templateMaxParDup: 5,         scriptMarker: '%Replace me!%',         scriptReplaces: [ 'Employees.qvd' ],         scriptRegex: /(.*) << (.*) ([0-9,]+) Lines fetched/g,         publishStreamId: 'aaec8d41-5201-43ab-809f-3063750dfafd',         publishReplace: true,         task: task     });});```
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
| UserDirectory | <code>string</code> | <code>&quot;.&quot;</code> | the user directory of the Qlik Sense user that will make the API call |
| UserId | <code>string</code> | <code>&quot;qlikservice&quot;</code> | the user id of the Qlik Sense user that will make the API call |
| session | <code>string</code> |  | the cookie of a valid Qlik Sense session |
| restUri | <code>string</code> |  | an URI to a valid Qlik Sense endpoint |
| method | <code>string</code> | <code>&quot;POST&quot;</code> | the method of the HTTP request (GET/PUT/POST/DELETE) |
| pfx | <code>buffer</code> |  | the Qlik Sense pfx certificate (not required if a session is set) |
| passphrase | <code>string</code> |  | the Qlik Sense certificate's passphrase (not required if a session is set) |
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

