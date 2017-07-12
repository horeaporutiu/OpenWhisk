// // var request = require('request');
// //   var username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
// //   var password = "AnnGIdp6kCU7";
// //   var url = "https://" + username + ":" + password + "@gateway.watsonplatform.net/language-translator/api/v2/translate";
//
// var watson = require('watson-developer-cloud');
// var language_translator = watson.language_translator({
//   username: '64a3ecc4-182b-47e9-a659-c580a7b5ca02',
//   password: 'AnnGIdp6kCU7',
//   version: 'v2'
// });
//
// function main() {
//
// //   const options = {
// //     url: url,
// //     method: 'GET',
// //     headers: {
// //         'Content-Type': 'application/x-www-form-urlencoded',
// //     }
// // };
// //
// //     return new Promise(function(resolve, reject) {
// //         request.get(options, function(error, response, body) {
// //             if (error) {
// //                 reject(error);
// //             }
// //             else {
// //                 var condition = JSON.parse(body)
// //                 var output = condition;
// //                 resolve({msg: output});
// //             }
// //         });
// //     });
// language_translator.translate({
//     text: 'hello',
//     source: 'en',
//     target: 'es'
//   }, function(err, translation) {
//     if (err)
//       return err)
//     else
//       return translation;
// });
// }


var https = require('https'); //needed to make our request
var request = require('request'),
username = "64a3ecc4-182b-47e9-a659-c580a7b5ca02",
 password = "AnnGIdp6kCU7",
url = "https://" + username + ":" + password + "@gateway.watsonplatform.net/language-translator/api/v2/translate";
var querystring = require('querystring'); // used for JSON conversion


function main() {

  console.log("poo");

  var postData = querystring.stringify({
      'source' : "en",
      'target': "es",
      'text': "hello"
  });
  var options = {
    url: url,
    method: 'POST',
    json: true,
    body: postData,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        //'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    }
  };
  console.log("fsdfuffin!");
  console.log(postData);
  var req = https.request(options, function(res) {
    console.log("fudge muffin!");

    res.on('data', function (returnVal) {
      console.log("HELLO!");


      //send our response to the client
      var decoded_data = returnVal.toString('utf8');
      //resp.send(decoded_data);
      return ({msg: decoded_data});
    });
  });



}
