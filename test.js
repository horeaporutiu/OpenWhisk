var request = require('request');

function main(params) {
  var username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
  var password = "AnnGIdp6kCU7";

  var postURL = "https://" + username + ":" + password +
  "@gateway.watsonplatform.net/language-translator/api/v2/translate"

   return new Promise(function(resolve, reject) {
     request.post({
       headers: {'content-type' : 'application/json'},
       url:     postURL,
       json:    {
         source: 'en',
         target: 'es',
         text: 'something'
      }
     },
     function(error, response, body){
       resolve({msg: body});
     });
   });
}
