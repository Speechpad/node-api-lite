"use strict"

var config = require("./config");
var generateSignature = require("./sign.js");
var fetch = require('node-fetch');
var querystring = require('querystring');
var gmdate = require('phpdate-js').gmdate;

/**
* Create and send request to Speechpad API
* @param  {object}   parameters Parameters used to form request
* @param  {Function} callback   Callback when request finished or error found
* @return {Promise}             Returns Request object or null
*/
function call (parameters) {

    var now = new Date();
    parameters['access_key'] = config.access_key;
    parameters['timestamp'] = gmdate("Y-m-d\TH:i:s\\Z", now);
    parameters = generateSignature(parameters);
    var url = config.url +'?' + querystring.stringify(parameters);
    return fetch(url);
}

module.exports = call;
/*
module.exports = {
  call: call,
  generateSignature: generateSignature
};
*/
