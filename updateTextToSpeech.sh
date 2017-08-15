source local.env

wsk action update demo1/textToSpeech textToSpeech.js \
  --web true \
  --param textToSpeechUsername "$textToSpeechUsername" \
  --param textToSpeechPassword "$textToSpeechPassword"
