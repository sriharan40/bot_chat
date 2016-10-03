var apiai = require('apiai');
 
var app = apiai("c743619629b2490fab9751dac552094a");
 
var request = app.textRequest('<Your text query>');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()
