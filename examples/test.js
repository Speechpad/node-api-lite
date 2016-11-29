var speechpad_api = require("./../index");

console.log ('<h2>Begin test Call</h2>');
var params  = {
    'service_name' : 'account',
    'service_version' : '1.0.0',
    'format' : 'json',
    'method' : 'get',
    'operation' : 'test',
    'value' : '123'
};
speechpad_api(params).then(function(res){
    return res.json();
}).then(function(obj){
    console.log(obj);
});
