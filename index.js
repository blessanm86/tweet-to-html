var twemoji = require('twemoji' );

module.exports.parse = parseTweets;


function parseTweets(tweets) {
  return Array.isArray(tweets) ? tweets.map(parseTweet) : parseTweet(tweets);
}

function parseTweet(tweetObj) {
  var entityProcessors = {
    hashtags: processHashTags,
    symbols: processSymbols,
    user_mentions: processUserMentions,
    urls: processUrls,
    media: processMedia
  };

  var entities = tweetObj.entities;
  var processorObj;

  //Copying text value to a new property html. The final output will be set to this property
  tweetObj.html = tweetObj.text;

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

  return tweetObj;
}

function processHashTags(tags, tweetObj) {
  tags.forEach((tagObj) => {
    var anchor = ('#' + tagObj.text).link('http://twitter.com/hashtag/' + tagObj.text);
    tweetObj.html = tweetObj.html.replace('#' + tagObj.text, anchor);
  });
}

function processSymbols(symbols, tweetObj) {}

function processUserMentions(users, tweetObj) {
  users.forEach((userObj) => {
    var anchor = ('@' + userObj.screen_name).link('http://twitter.com/' + userObj.screen_name);
    var regex = new RegExp('@' + userObj.screen_name, 'gi' );
    tweetObj.html = tweetObj.html.replace(regex, anchor);
  });
}

function processUrls(urls, tweetObj) {
  urls.forEach((urlObj) => {
    var indices = urlObj.indices;
    var urlToReplace = tweetObj.text.substring(indices[0],indices[1]);

    var anchor = urlObj.display_url.link(urlObj.expanded_url);
    tweetObj.html = tweetObj.html.replace(urlToReplace, anchor);
  });
}

function processMedia(media, tweetObj) {
  media.forEach((mediaObj) => {
    if(mediaObj.type === 'photo') {
      var image = '<img src="' + mediaObj.media_url + '"/>';
      tweetObj.html = tweetObj.html.replace(mediaObj.url, image);
    } else if(mediaObj.type === 'video') {
      var source = '';
      mediaObj.video_info.variants.forEach((info) => {
        source += '<source src="'+ info.url +'" type="'+ info.content_type +'">';
      });
      var video = '<video controls poster="' + mediaObj.media_url +'">' + source + '</video>';
      tweetObj.html = tweetObj.html.replace(mediaObj.url, video);
    }
  });
}

function processEmoji(tweetObj) {
  tweetObj.html = twemoji.parse(tweetObj.html);
}
