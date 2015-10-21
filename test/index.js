var TweetToHTML = require('../');
var assert = require('chai').assert;
var tweetWithVideo = require('./tweets/tweet-with-video');
var tweetWithVideoExpected = require('./tweets/tweet-with-video-expected');
var tweetWithEmoji = require('./tweets/tweet-with-emoji');
var tweetWithEmojiExpected = require('./tweets/tweet-with-emoji-expected');
var tweetWithHashtag = require('./tweets/tweet-with-hashtag');
var tweetWithHashtagExpected = require('./tweets/tweet-with-hashtag-expected');
var tweetWithLinksPicMention = require('./tweets/tweet-with-links-pic-mention');
var tweetWithLinksPicMentionExpected = require('./tweets/tweet-with-links-pic-mention-expected');

var parse = TweetToHTML.parse;

assert.strictEqual(
  parse(tweetWithVideo).text,
  tweetWithVideoExpected,
  'Synchonous parsing of video in tweet is successful'
);
assert.strictEqual(
  parse(tweetWithEmoji).text,
  tweetWithEmojiExpected,
  'Synchonous parsing of emoji in tweet is successful'
);
assert.strictEqual(
  parse(tweetWithHashtag).text,
  tweetWithHashtagExpected,
  'Synchonous parsing of hashtag in tweet is successful'
);
assert.strictEqual(
  parse(tweetWithLinksPicMention).text,
  tweetWithLinksPicMentionExpected,
  'Synchonous parsing of links, pic, and mention in tweet is successful'
);
