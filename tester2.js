var request = require('request');

function main(params) {
  var username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
  var password = "AnnGIdp6kCU7";
  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  // var url = "https://" + username + ":" + password +
  // "@gateway.watsonplatform.net/language-translator/api/v2/translate?source="
  // + params.source + "&target=" + params.target + "&text="+params.text;

  var options = {
  url: 'http://localhost:1234/api/res/xyz',
  auth: {
    user: username,
    password: password
  }
}

   return new Promise(function(resolve, reject) {
       request.get(options, function(error, response, body) {
           if (error) {
               reject(error);
           }
           else {

               resolve({msg: body});
           }
       });
   });
}
