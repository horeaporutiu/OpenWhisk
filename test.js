var request = require('request');

function main(params) {
  var username = "username";
  var password = "password";

  var postURL = "https://" + username + ":" + password +
  "@gateway.watsonplatform.net/language-translator/api/v2/translate";

  var promise = new Promise(function(resolve, reject) {
    request.post({
      url:     postURL,
      json: {
        'source' : params.source,
        'target' : params.target,
        'text' : params.text
      }
    },
    function(error, response, body){
      resolve ({
        headers: {
          'content-type': 'application/json'
        },
        body: new Buffer (body.translations[0].translation).toString('base64')
      });
    });
  });
  return promise;
}
