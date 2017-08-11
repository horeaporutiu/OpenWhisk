//An action that uses credentials to obtain a token
var request = require('request');

function main(params) {
  var username = params.textToSpeechUsername;
  var password = params.textToSpeechPassword;
  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  var textToSpeechUrl = "https://stream.watsonplatform.net/authorization/api/v1/token?url=https://stream.watsonplatform.net/text-to-speech/api";

  var promise = new Promise(function(resolve, reject) {
    request({
      url:     textToSpeechUrl,
      headers : {
            "Authorization" : auth,
      }
    },
    function(error, response, body){
      resolve ({
        headers : {
          "Content-Type" : "text/plain"
        },
        body: body
      });
    });
  });
  return promise;
}