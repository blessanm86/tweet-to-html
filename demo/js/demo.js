var tweetToHTML = require('../../');
var tweetWithVideo = require('../../test/tweets/tweet-with-video');
var tweetWithEmoji = require('../../test/tweets/tweet-with-emoji');
var tweetWithQuotedTweet = require('../../test/tweets/tweet-with-quoted-tweet');

function encodeHTML(html) {
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
  }

  return html.replace(/[&<>]/g, replaceTag);
}

document.getElementById('input-1').innerHTML = JSON.stringify(tweetWithVideo, null, 2);
document.getElementById('input-2').innerHTML = JSON.stringify(tweetWithEmoji, null, 2);
document.getElementById('input-3').innerHTML = JSON.stringify(tweetWithQuotedTweet, null, 2);

var html1 = tweetToHTML.parse(tweetWithVideo).html;
var html2 = tweetToHTML.parse(tweetWithEmoji).html;
var html3 = tweetToHTML.parse(tweetWithQuotedTweet).html;

document.getElementById('output-1').innerHTML = encodeHTML(style_html(html1));
document.getElementById('output-2').innerHTML = encodeHTML(style_html(html2));
document.getElementById('output-3').innerHTML = encodeHTML(style_html(html3));

document.getElementById('render-1').innerHTML = html1;
document.getElementById('render-2').innerHTML = html2;
document.getElementById('render-3').innerHTML = html3;
