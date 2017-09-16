source local.env

wsk action update demo1/toneAnalyzer toneAnalyzer.js \
  --web true \
  --param toneUsername "$toneUsername" \
  --param tonePassword "$tonePassword"
