var request = require('request');

function main(params) {
  var username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
  var password = "AnnGIdp6kCU7";
  var url = "https://" + username + ":" + password + "@gateway.watsonplatform.net/language-translator/api/v2/translate?source=en&target=es&text=hello";

   return new Promise(function(resolve, reject) {
       request.get(url, function(error, response, body) {
           if (error) {
               reject(error);
           }
           else {
               resolve({msg: body});
           }
       });
   });
}
