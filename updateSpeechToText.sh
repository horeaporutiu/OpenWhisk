source local.env

wsk action update demo1/speechToText speechToText.js \
  --web true \
  --param speechToTextUsername "$speechToTextUsername" \
  --param speechToTextPassword "$speechToTextPassword"
