//An action that uses credentials to obtain a token
var request = require('request');

function main(params) {
  var username = "2998293c-d7a3-434f-a47d-d2d3a7fe57d1";
  var password = "n6vVDj5mnA2A";
  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  var speechToTextUrl = "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/speech-to-text/api";

  var promise = new Promise(function(resolve, reject) {
    request({
      url:     speechToTextUrl,
      headers : {
            "Authorization" : auth
        }
    },
    function(error, response, body){
      resolve ({
        headers: {
          'Content-Type': 'text/plain'
        },
        body: body
      });
    });
  });
  return promise;
}
