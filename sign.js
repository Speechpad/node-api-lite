"use strict"

var config = require("./config");
var hmacsha1 = require('hmacsha1');

function generateSignature(params)
{
    var s = "";
    var keys = Object.keys(params);
    keys.sort();
    var i, len = keys.length;

    for(i = 0; i < len; i++) {
        s += params[keys[i]];
    }
    params['signature'] = hmacsha1(config.secret_key, s);

    return params;
}

module.exports = generateSignature;
