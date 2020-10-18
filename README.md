# tweet-to-html

[![Build Status](https://travis-ci.org/blessenm/tweet-to-html.svg?branch=master)](https://travis-ci.org/blessenm/tweet-to-html)
[![npm version](https://badge.fury.io/js/tweet-to-html.svg)](https://badge.fury.io/js/tweet-to-html)

Browser friendly package that converts twitter's API tweet objects text property to HTML. Takes care of all the entities and its links. Handles emoji's.

## Demo

http://blessanmathew.com/tweet-to-html

## Installation

```
npm install tweet-to-html -S
yarn add tweet-to-html
```

## Usage

There is only one method named `parse`. You can pass in a tweet object or an array of objects, and an optional config object. The response will be object/array tweet object with a new property named `html` with the parsed output.

```
var tweetToHTML = require('tweet-to-html');

var result  = tweetToHTML.parse(tweetObj); //Single tweet object
var results = tweetToHTML.parse(tweetArr); //Multiple tweets in an array

var photoConfig = {
  photoSize: 'large' // Any size supported by the `media` entity (thumb, small, medium...)
};

var result  = tweetToHTML.parse(tweetObj, photoConfig); //Single tweet object with specified image size

//output
console.log(result.html);
console.log(results[0].html);
```

## Issues Or Contributions

- Post issues/enhancements in the github issue tracker.
- My email is blessanm86@gmail.com
- Pull requests are welcome.
- [**Follow Me On Twitter**](https://twitter.com/blessanm86 "Follow Me On Twitter")
- [**LinkedIn Pofile**](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
- [**Stack Overflow Pofile**](http://stackoverflow.com/users/548568/blessenm "Stack Overflow Pofile")
