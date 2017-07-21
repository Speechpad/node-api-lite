var speechpad_api = require("./../index");
var speechpad_sign = require("./../sign.js");

var args = require('minimist')(process.argv.slice(2));
var config = require("./../config");

var fs = require('fs');
var gmdate = require('phpdate-js').gmdate;
var querystring = require('querystring');
var request = require('request');

var params  = {
    'service_name' : 'account',
    'service_version' : '1.0.0',
    'format' : 'json',
    'method' : 'post',
    'operation' : 'add_audio',
    'last' : 'true', // 'true' means this is the last chunk. Use 'false' if you want to upload sequential chunks of larger files.
    'transcribe' : 'false',  // 'false' means upload the file but don't have it transcribed.  In this case you could subsequently call the 'transcribe' operation, passing the ID of the file in 'audio_id' param.
    'visible_filename' : 'my_file.mp3',
};

var now = new Date();
params['access_key'] = config.access_key;
params['timestamp'] = gmdate("Y-m-d\TH:i:s\\Z", now);

params = speechpad_sign(params);

// Add the file param after signing the other request params
params['file'] = fs.createReadStream(__dirname + '/data/5min.mp3')
var url = config.url;

request.post({url:url, formData: params}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
