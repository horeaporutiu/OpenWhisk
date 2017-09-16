source local.env

wsk action update demo1/getPopularPhrases getPopularPhrases.js \
  --web true \
  --param getPopularPhrasesUsername "$getPopularPhrasesUsername" \
  --param getPopularPhrasesPassword "$getPopularPhrasesPassword" \
  --param getPopularPhrasesUrl "$getPopularPhrasesUrl"
