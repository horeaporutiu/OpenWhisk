var request = require('request');

function main(params) {
  var username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
  var password = "AnnGIdp6kCU7";

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
