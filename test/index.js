var tweetToHTML = require('../');
var assert = require('chai').assert;
var tweetWithVideo = require('./tweets/tweet-with-video');
var tweetWithVideoExpected = require('./tweets/tweet-with-video-expected');
var tweetWithEmoji = require('./tweets/tweet-with-emoji');
var tweetWithEmojiExpected = require('./tweets/tweet-with-emoji-expected');
var tweetWithHashtag = require('./tweets/tweet-with-hashtag');
var tweetWithHashtagExpected = require('./tweets/tweet-with-hashtag-expected');
var tweetWithLinksPicMention = require('./tweets/tweet-with-links-pic-mention');
var tweetWithLinksPicMentionExpected = require('./tweets/tweet-with-links-pic-mention-expected');

var parse = tweetToHTML.parse;
var multipleTweets = [tweetWithVideo, tweetWithEmoji, tweetWithHashtag, tweetWithLinksPicMention];
var multipleTweetsExpected = [tweetWithVideoExpected, tweetWithEmojiExpected, tweetWithHashtagExpected, tweetWithLinksPicMentionExpected];



describe("Synchronous and Single Tweet Test Suite", function() {
  it('Synchonous parsing of video in tweet is successful', function() {
    assert.strictEqual(parse(tweetWithVideo).html, tweetWithVideoExpected);
  });

  it('Synchonous parsing of emoji in tweet is successful', function() {
    assert.strictEqual(parse(tweetWithEmoji).html, tweetWithEmojiExpected);
  });

  it('Synchonous parsing of hashtag in tweet is successful', function() {
    assert.strictEqual(parse(tweetWithHashtag).html, tweetWithHashtagExpected);
  });

  it('Synchonous parsing of links, pic, and mention in tweet is successful', function() {
    assert.strictEqual(parse(tweetWithLinksPicMention).html, tweetWithLinksPicMentionExpected);
  });
});



describe("Synchronous and Multiple Tweets Test Suite", function() {
  it('Synchonous parsing of videos, emojis, hashtags, links, pics, and mentions in multiple tweets is successful', function() {
    parse(multipleTweets, (tweets) => {
      tweets.forEach((tweet, index) => {
        assert.strictEqual(
          tweet.html,
          multipleTweetsExpected[index]
        );
      });
    })
  });
});
