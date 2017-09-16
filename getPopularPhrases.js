//An action that uses credentials to obtain a token
var request = require('request');

function main(params) {
  var CloudantUrl = params.getPopularPhrasesUrl
  var cloudant_username = params.getPopularPhrasesUsername
  var cloudant_password = params.getPopularPhrasesPassword
  var auth = "Basic " + new Buffer(cloudant_username + ":" + cloudant_password).toString("base64");


  var promise = new Promise(function(resolve, reject) {
    request({
      url:     CloudantUrl,
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
