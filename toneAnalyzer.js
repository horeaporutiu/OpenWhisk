var request = require('request');

function main(params) {
  //Todo
  var toneUsername = params.toneUsername;
  var tonePassword = params.tonePassword;
  
  //TODO: put version in credentials file
  var postURL = "https://" + toneUsername + ":" + tonePassword +
  "@gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19";

  var promise = new Promise(function(resolve, reject) {
    request.post({
      url:     postURL,
      json: {
        'text' : params.text
      }
    },
    function(error, response, body){
      resolve ({
        headers: {
          'content-type': 'application/json'
        },
        body: body
      });
    });
  });
  return promise;
}
