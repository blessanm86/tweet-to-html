var tweetToHTML = require('../../');
var tweetWithVideo = require('../../test/tweets/tweet-with-video');
var tweetWithEmoji = require('../../test/tweets/tweet-with-emoji');

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

var html1 = tweetToHTML.parse(tweetWithVideo).html;
var html2 = tweetToHTML.parse(tweetWithEmoji).html;

document.getElementById('output-1').innerHTML = encodeHTML(style_html(html1));
document.getElementById('output-2').innerHTML = encodeHTML(style_html(html2));
