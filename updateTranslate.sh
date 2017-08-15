source local.env

wsk action update demo1/translate translate.js \
  --web true \
  --param translationUsername "$translationUsername" \
  --param translationPassword "$translationPassword"
