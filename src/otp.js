var accountSid = '{{ ACe0b6cfbf60f11584099ee062db873252 }}'; // Your Account SID from www.twilio.com/console
var authToken = '{{ 7468f40b17004327190847d04b4222ba }}';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+639178294450',  // Text this number
    from: '+18312165009 ' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});
