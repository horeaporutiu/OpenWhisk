var request = require('request');

function main(params) {
  var username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
  var password = "AnnGIdp6kCU7";

  var postURL = "https://" + username + ":" + password +
  "@gateway.watsonplatform.net/language-translator/api/v2/translate";

function translate(postURL) {
  return new Promise(function(resolve, reject) {

   var req = request.post({
      headers: {'content-type' : 'application/json'},
      url:     postURL,
      json: {
        'source' : params.source,
        'target' : params.target,
        'text' : params.text
      }
    },
    function(error, response, body){
      var poop = JSON.stringify(response.statusCode)
      console.log("response: " + poop)
      if (poop == 200) {
        console.log('inside ppoop')
        var translatedText = body.translations[0].translation;
        console.log(translatedText);
        resolve({body:translatedText});
      }
    });
  });
}
  var promise = translate(postURL);
  promise.then(function(postURL){
    console.log('returning postURl')
    return postURL;
  }).catch(function(error){
    console.log("error: " + error);
  });
  console.log('returning promise')
  return promise;

}
