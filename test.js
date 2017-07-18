var request = require('request');

function main(params) {
  var username = "username";
  var password = "password";

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
