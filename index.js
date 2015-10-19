//Tweet with multiple links
//var tweetObj = require('./tweet.json' );

//Tweet with link, pic and mention
var tweetObj = require('./tweet2.json' );

var entityProcessors = {
  hashtags: processHashTags,
  symbols: processSymbols,
  user_mentions: processUserMentions,
  urls: processUrls,
  media: processMedia
}

function processHashTags(tags, tweetObj) {
}

function processSymbols(symbols, tweetObj) {
}

function processUserMentions(users, tweetObj) {
  users.forEach(function(userObj) {
    var anchor = ('@' + userObj.screen_name).link('http://twitter.com/' + userObj.screen_name);
    tweetObj.text = tweetObj.text.replace('@' + userObj.screen_name.toLowerCase(), anchor);
  });
}

function processUrls(urls, tweetObj) {
  urls.forEach(function(urlObj) {
    var anchor = urlObj.display_url.link(urlObj.expanded_url);
    tweetObj.text = tweetObj.text.replace(urlObj.url, anchor);
  });
}

function processMedia(media, tweetObj) {
  media.forEach(function(mediaObj) {
    if(mediaObj.type === 'photo') {
      var image = '<img src="' + mediaObj.media_url + '"/>';
      tweetObj.text = tweetObj.text.replace(mediaObj.url, image);
    }
  });
}

function parseTweet(tweetObj) {
  var entities = tweetObj.entities;

  if(Object.getOwnPropertyNames(entities).length) {
    Object.keys(entities).forEach(function(entity) {
      if(entities[entity].length) {
        entityProcessors[entity](entities[entity], tweetObj);
      }
    });
  }

  return tweetObj;
}




var parsedObj = parseTweet(tweetObj[0]);
console.log(parsedObj.text);
