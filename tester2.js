function main () {

  return {body: `<html>
    <head>
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <div id = "background">
        <center><h1>Watson Translates</h1></center>
        <div id="left">
          <center><label id="leftLabel" for="country">Input</label></center>
            <select id="source" name="inputLang">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Arabic">Arabic</option>
              <option value="Portuguese">Portuguese</option>
              <option value="French">French</option>
            </select>
        </div>
        <div id="right">
          <center><label id="rightLabel" for="country">Output</label></center>
            <select id="target" name="outputLang">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Arabic">Arabic</option>
              <option value="Portuguese">Portuguese</option>
              <option value="French">French</option>
            </select>
        </div>
        <br style="clear:both;"/>
        <center>
            <label for="text"></label>
            <input type = "text" placeholder="Translate Something..." id= "text" name="text" required>
            <form name ="login-form" action=javascript:translate()>
              <input type="submit" value="Translate">
            </form>
          <div id ="transText"></div>
        </center>
      </div>

        <script>
          var data = {};
          var user = "64a3ecc4-182b-47e9-a659-c580a7b5ca02";
          var pass = "AnnGIdp6kCU7";
          var outputText = document.getElementById("transText");
          var btn = document.getElementById("btn");

          var json = JSON.stringify(data);
            function translate() {
              data.source = document.getElementById("source").value;
              data.target = document.getElementById("target").value;
              data.text = document.getElementById("text").value;
              var json = JSON.stringify(data);

              var url = "https://gateway.watsonplatform.net/language-translator/api/v2/translate"
              var ourRequest = new XMLHttpRequest();

              ourRequest.open("POST", url, true);
              ourRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
              ourRequest.setRequestHeader("Authorization", "Basic " + btoa(user + ":" + pass));
              ourRequest.onload = function() {
                outputText.innerHTML = ourRequest.responseText;
              }
              ourRequest.send(json);
            }
        </script>
    </body>
  </html>`}

}
