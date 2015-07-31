var https = require('https');
var crypto = require('crypto');
var url = require('url');
var fs = require('fs');

 function ifnotundef(a, b, c) {
	 return (typeof c == 'undefined') ? ((typeof a != 'undefined' && a != null) ? a : b) : ((typeof a != 'undefined' && a != null) ? b : c);
 }

function generateXrfkey(size, chars) {
	size = size || 16;
	chars = chars || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';

	var rnd = crypto.randomBytes(size), value = new Array(size), len = chars.length;

	for (var i = 0; i < size; i++) {
		value[i] = chars[rnd[i] % len]
	};

	return value.join('');
}

function request(params, options) {

	var xrfkey = generateXrfkey();
	var hostUri = url.parse(options.restUri);
	
	var settings = {
		host: hostUri.hostname,
		port: hostUri.port,
		path: hostUri.pathname + '?' + ifnotundef(hostUri.query, hostUri.query + '&', '') + 'xrfkey=' + xrfkey,
		method: ifnotundef(options.method, 'POST'),
		headers: {
			'X-Qlik-Xrfkey': xrfkey,
			'Content-Type': 'application/json'
		},
		pfx: ifnotundef(options.pfx, null),
		passphrase: ifnotundef(options.passPhrase, null),
		rejectUnauthorized: false,
		agent: false
	};
	
	return new Promise(function(resolve, reject) {
	
		var apireq = https.request(settings, function (apires) {
			
			apires.on('data', function (d) {
				
				resolve(JSON.parse(d.toString()));
				
			});
			
		});

		apireq.write(JSON.stringify(params));
		apireq.end();

		apireq.on('error', function (e) {
			reject(e);
		});
		
	});
	
};

if (typeof module !== 'undefined') {
	module.exports = {
		request: request
	}
}

