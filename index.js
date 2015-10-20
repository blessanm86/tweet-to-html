var twemoji = require('twemoji' );
var vasync = require('vasync' );
var util = require('util');

var tweetArr = require('./tweets.json' );

var entityProcessors = {
  hashtags: processHashTags,
  symbols: processSymbols,
  user_mentions: processUserMentions,
  urls: processUrls,
  media: processMedia
}

function processHashTags(tags, tweetObj) {
  tags.forEach((tagObj) => {
    var anchor = ('#' + tagObj.text).link('http://twitter.com/hashtag/' + tagObj.text);
    tweetObj.text = tweetObj.text.replace('#' + tagObj.text, anchor);
  });
}

function processSymbols(symbols, tweetObj) {}

function processUserMentions(users, tweetObj) {
  users.forEach((userObj) => {
    var anchor = ('@' + userObj.screen_name).link('http://twitter.com/' + userObj.screen_name);
    tweetObj.text = tweetObj.text.replace('@' + userObj.screen_name.toLowerCase(), anchor);
  });
}

function processUrls(urls, tweetObj) {
  urls.forEach((urlObj) => {
    var anchor = urlObj.display_url.link(urlObj.expanded_url);
    tweetObj.text = tweetObj.text.replace(urlObj.url, anchor);
  });
}

function processMedia(media, tweetObj) {
  media.forEach((mediaObj) => {
    if(mediaObj.type === 'photo') {
      var image = '<img src="' + mediaObj.media_url + '"/>';
      tweetObj.text = tweetObj.text.replace(mediaObj.url, image);
    } else if(mediaObj.type === 'video') {
      var source = '';
      mediaObj.video_info.variants.forEach((info) => {
        source += '<source src="'+ info.url +'" type="'+ info.content_type +'">';
      });
      var video = '<video controls poster="' + mediaObj.media_url +'">' + source + '</video>';
      tweetObj.text = tweetObj.text.replace(mediaObj.url, video);
    }
  });
}

function processEmoji(tweetObj) {
  tweetObj.text = twemoji.parse(tweetObj.text);
}

function parseTweet(tweetObj, callback) {
  var entities = tweetObj.entities;
  var processorObj;

  //Process entities
  if(Object.getOwnPropertyNames(entities).length) {
    Object.keys(entities).forEach((entity) => {
      if(entities[entity].length) {
        processorObj = entities[entity];

        //Need to check if entity is media. If so, extended_entities should be used
        processorObj = entity === 'media' ? tweetObj.extended_entities.media : processorObj;

        entityProcessors[entity](processorObj, tweetObj);
      }
    });
  }

  //Process Emoji's
  processEmoji(tweetObj);

  if(util.isFunction(callback)) {
    callback(null, tweetObj);
  } else {
    return tweetObj;
  }
}

function parseTweets(tweets, callback) {
  tweets = JSON.parse(JSON.stringify(tweets));

  var isMultiple = false;

  isMultiple = Array.isArray(tweets);

  if(callback) {
    tweets = Array.isArray(tweets) ? tweets : [tweets];

    vasync.forEachParallel({
      func: parseTweet,
      inputs: tweets
    }, (err, results) => {
        results = results.successes;
        results = isMultiple ? results : results[0];
        callback(results);
    });
  } else {
    return isMultiple ? tweets.map(parseTweet) : parseTweet(tweets);
  }
}


module.exports.parse = parseTweets;

//async multiple
parseTweets(tweetArr, function(tweets){
  console.log('async multiple', '\r\n', tweets[0].text, '\r\n');
});

//async single
parseTweets(tweetArr[0], function(tweets){
  console.log('async single', '\r\n', tweets.text, '\r\n');
});

//sync multiple
var tweets = parseTweets(tweetArr);
console.log('sync multiple', '\r\n', tweets[0].text, '\r\n');

//sync single
var tweet = parseTweets(tweetArr[0]);
console.log('sync single', '\r\n', tweet.text, '\r\n');
