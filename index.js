var twemoji = require('twemoji' );

module.exports.parse = parseTweets;

var options = {};

function parseTweets(tweets, opts) {
  options = opts;
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

  var entities = tweetObj.entities || {};
  var processorObj;

  //When extended_mode is enabled, the text property will be empty and the value of the html property will be set to the full_text value
  //Replace the text property because the property is used in other functions (i.e. processUrls)
  if (tweetObj.full_text) {
    tweetObj.text = tweetObj.full_text;
  }

  //Copying text value to a new property html. The final output will be set to this property
  tweetObj.html = tweetObj.text;

  //Process entities
  if(Object.getOwnPropertyNames(entities).length) {
    Object.keys(entities).forEach((entity) => {
      if(entities[entity].length) {
        processorObj = entities[entity];

        //Need to check if entity is media. If so, extended_entities should be used
        processorObj = entity === 'media' ? tweetObj.extended_entities.media : processorObj;

        var entityProcessorsFn = entityProcessors[entity];
        if (entityProcessorsFn) {
          entityProcessorsFn(processorObj, tweetObj);
        } else {
          console.debug('No processor found for', entity);
        }
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
  urls.forEach((urlObj, index) => {
    var quotedTweetHtml = '';
    var start = urlObj.start;
    var end = urlObj.end;
    var urlToReplace = tweetObj.text.substring(start,end);

    if(index === urls.length-1 && tweetObj.quoted_status) {
      quotedTweetHtml = parseTweets(tweetObj.quoted_status).html;
      quotedTweetHtml = `<div class="quoted-tweet">${quotedTweetHtml}</div>`
    }

    var finalText = quotedTweetHtml || urlObj.display_url.link(urlObj.expanded_url);
    tweetObj.html = tweetObj.html.replace(urlToReplace, finalText);
  });
}

function processMedia(media, tweetObj) {
  media.forEach((mediaObj) => {
    if(mediaObj.type === 'photo') {
      // Use HTTPS if available
      var src = mediaObj.media_url_https ? mediaObj.media_url_https : mediaObj.media_url;

      if(options &&
        options.photoSize &&
        mediaObj.sizes &&
        mediaObj.sizes[options.photoSize]) {
        // If specified size is available, patch image src to use it
        src = src + ':' + options.photoSize;
      }

      var image = '<img src="' + src + '"/>';
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
