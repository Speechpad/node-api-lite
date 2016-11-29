var speechpad_api = require("./../index");
var args = require('minimist')(process.argv.slice(2));

var params  = {
    'service_name' : 'account',
    'service_version' : '1.0.0',
    'format' : 'json',
    'method' : 'post',
    'operation' : 'add_media_url',
    'url' : args['url']
};
speechpad_api(params).then(function(res){
    return res.text();
}).then(function(text){
    console.log(text);
});
