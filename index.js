var tweetArr = require('./tweets.json' );

var entityProcessors = {
  hashtags: processHashTags,
  symbols: processSymbols,
  user_mentions: processUserMentions,
  urls: processUrls,
  media: processMedia
}

function processHashTags(tags, tweetObj) {
  tags.forEach(function(tagObj) {
    var anchor = ('#' + tagObj.text).link('http://twitter.com/hashtag/' + tagObj.text);
    tweetObj.text = tweetObj.text.replace('#' + tagObj.text, anchor);
  });
}

function processSymbols(symbols, tweetObj) {}

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
    } else if(mediaObj.type === 'video') {
      var source = '';
      mediaObj.video_info.variants.forEach(function(info) {
        source += '<source src="'+ info.url +'" type="'+ info.content_type +'">';
      });
      var video = '<video controls poster="' + mediaObj.media_url +'">' + source + '</video>';
      tweetObj.text = tweetObj.text.replace(mediaObj.url, video);
    }
  });
}

function parseTweet(tweetObj) {
  var entities = tweetObj.entities;
  var processorObj;

  if(Object.getOwnPropertyNames(entities).length) {
    Object.keys(entities).forEach(function(entity) {
      if(entities[entity].length) {
        processorObj = entities[entity];

        //Need to check if entity is media. If so, extended_entities should be used
        processorObj = entity === 'media' ? tweetObj.extended_entities.media : processorObj;

        entityProcessors[entity](processorObj, tweetObj);
      }
    });
  }

  return tweetObj;
}




var parsedObj = parseTweet(tweetArr[2]);
console.log(parsedObj.text);
