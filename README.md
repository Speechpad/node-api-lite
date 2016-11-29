# Speechpad Node API Lite

## Installation

1. Clone the repository
1. Run `npm install`

## Running the examples

1. Copy `config.js.dist` to `config.js` and edit to add your keys and set the environment.
1. Test your leys:

```bash
node examples/test.js 
```

You should see the response body JSON echoed to screen:

```json
{ error_string: 'SUCCESS', response: { value: '123' } }
```

## Including in your application

Here is an example call to upload media from a URL to Speechpad.

```javascript
// Require the main module
var speechpad_api = require("./../index");

// Specify a public URL to a supported media sharing service or directly to a media file
var url = "https://www.youtube.com/watch?v=C0DPdy98e4c";

// Set up the params
var params  = {
    'service_name' : 'account',
    'service_version' : '1.0.0',
    'format' : 'json',
    'method' : 'post',
    'operation' : 'add_media_url',
    'url' : args['url']
};

// Make the request
speechpad_api(params).then(function(response){
    return response.text();
}).then(function(text){
    console.log(text);
});
```

See the files in the `examples` directory for more examples on how to make calls to the Speechpad API.
