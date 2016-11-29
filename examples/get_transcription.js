var speechpad_api = require("./../index");
var args = require('minimist')(process.argv.slice(2));

var params  = {
    'service_name' : 'account',
    'service_version' : '1.0.0',
    'format' : 'json',
    'method' : 'get',
    'operation' : 'get_transcription',
    'audio_id' : args['audio_id']
};
speechpad_api(params).then(function(res){
    return res.text();
}).then(function(text){
    console.log(text);
});
