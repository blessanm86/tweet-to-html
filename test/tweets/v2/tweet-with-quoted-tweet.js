//https://twitter.com/w3c/status/664467145217191936

module.exports = {
  data: {
    author_id: '35761106',
    possibly_sensitive: false,
    created_at: '2015-11-11T15:38:07.000Z',
    lang: 'en',
    reply_settings: 'everyone',
    source: 'Twitter for iPhone',
    public_metrics: {
      retweet_count: 6,
      reply_count: 0,
      like_count: 8,
      quote_count: 0,
    },
    id: '664467145217191936',
    entities: {
      hashtags: [{ start: 21, end: 25, tag: 'wot' }],
      urls: [
        {
          start: 26,
          end: 49,
          url: 'https://t.co/9WEhqqzPEr',
          expanded_url: 'http://www.w3.org/WoT/',
          display_url: 'w3.org/WoT/',
        },
        {
          start: 50,
          end: 73,
          url: 'https://t.co/OZyeQiLitx',
          expanded_url:
            'https://twitter.com/rafaelprince/status/664137304739565568',
          display_url: 'twitter.com/rafaelprince/s…',
          status: 429,
          unwound_url:
            'https://twitter.com/rafaelprince?protected_redirect=true',
        },
      ],
    },
    conversation_id: '664467145217191936',
    text: 'Web of Things at W3C #wot https://t.co/9WEhqqzPEr https://t.co/OZyeQiLitx',
    referenced_tweets: [{ type: 'quoted', id: '664137304739565568' }],
  },
  includes: {
    users: [
      {
        created_at: '2009-04-27T14:56:11.000Z',
        verified: true,
        protected: false,
        url: 'https://t.co/xEYSrMZ8Cw',
        public_metrics: {
          followers_count: 196199,
          following_count: 167,
          tweet_count: 12935,
          listed_count: 6244,
        },
        profile_image_url:
          'https://pbs.twimg.com/profile_images/1069553420854591489/stZUQMcC_normal.jpg',
        entities: {
          url: {
            urls: [
              {
                start: 0,
                end: 23,
                url: 'https://t.co/xEYSrMZ8Cw',
                expanded_url: 'https://www.w3.org/',
                display_url: 'w3.org',
              },
            ],
          },
        },
        username: 'w3c',
        location: 'MIT | ERCIM | Keio | Beihang',
        id: '35761106',
        description:
          'The World Wide Web Consortium (W3C) makes the Web work, for everyone. We develop interoperable technologies (specifications, guidelines, software, and tools)',
        pinned_tweet_id: '1433464533323075586',
        name: 'W3C',
      },
      {
        created_at: '2008-04-10T05:21:52.000Z',
        verified: false,
        protected: false,
        url: '',
        public_metrics: {
          followers_count: 1142,
          following_count: 3072,
          tweet_count: 30419,
          listed_count: 89,
        },
        profile_image_url:
          'https://pbs.twimg.com/profile_images/1134693331211096064/PHcW024E_normal.jpg',
        username: 'rafaelprince',
        location: 'Brazil',
        id: '14348732',
        description:
          'Brazilian in Finland, mostly harmless. \n\nInto democracy, human rights, technology and international politics. (personal opinions, RT ≠ endorsement)',
        name: 'Rafael Prince',
      },
    ],
    tweets: [
      {
        author_id: '14348732',
        possibly_sensitive: false,
        created_at: '2015-11-10T17:47:27.000Z',
        lang: 'en',
        reply_settings: 'everyone',
        source: 'Twitter Web Client',
        public_metrics: {
          retweet_count: 11,
          reply_count: 0,
          like_count: 5,
          quote_count: 0,
        },
        id: '664137304739565568',
        entities: {
          hashtags: [{ start: 119, end: 127, tag: 'IGF2015' }],
          annotations: [
            {
              start: 0,
              end: 8,
              probability: 0.5621,
              type: 'Person',
              normalized_text: 'Vint Cerf',
            },
          ],
          mentions: [
            { start: 111, end: 118, username: 'vgcerf', id: '598232506' },
          ],
        },
        conversation_id: '664137304739565568',
        text: 'Vint Cerf foresees "chaotic evolution" of the Internet of Things in the next decade, due to lack of standards. @vgcerf #IGF2015',
      },
    ],
  },
};
