//Tweet url -> https://twitter.com/NathanZed/status/656335774133133314

module.exports = {
  data: {
    author_id: '421830010',
    text: 'I got an exam to study for and I spent 25 minutes making this https://t.co/FC52aN2NgP',
    public_metrics: {
      retweet_count: 2020,
      reply_count: 44,
      like_count: 3335,
      quote_count: 0,
    },
    source: 'Twitter for iPhone',
    id: '656335774133133314',
    possibly_sensitive: false,
    reply_settings: 'everyone',
    conversation_id: '656335774133133314',
    created_at: '2015-10-20T05:06:57.000Z',
    attachments: { media_keys: ['7_656335677525651456'] },
    entities: {
      urls: [
        {
          start: 62,
          end: 85,
          url: 'https://t.co/FC52aN2NgP',
          expanded_url:
            'https://twitter.com/NathanZed/status/656335774133133314/video/1',
          display_url: 'pic.twitter.com/FC52aN2NgP',
          media_key: '7_656335677525651456',
        },
      ],
    },
    lang: 'en',
  },
  includes: {
    media: [
      {
        preview_image_url:
          'https://pbs.twimg.com/ext_tw_video_thumb/656335677525651456/pu/img/Pm94feTx9_w7bQk6.jpg',
        height: 540,
        media_key: '7_656335677525651456',
        public_metrics: { view_count: 162094 },
        duration_ms: 28891,
        width: 960,
        type: 'video',
        variants: [
          {
            bit_rate: 320000,
            content_type: 'video/mp4',
            url: 'https://video.twimg.com/ext_tw_video/656335677525651456/pu/vid/320x180/1g-YkqReXgaudXnx.mp4',
          },
          {
            content_type: 'application/x-mpegURL',
            url: 'https://video.twimg.com/ext_tw_video/656335677525651456/pu/pl/V36AJPuJVf-P0kI_.m3u8',
          },
          {
            bit_rate: 832000,
            content_type: 'video/mp4',
            url: 'https://video.twimg.com/ext_tw_video/656335677525651456/pu/vid/640x360/wYEXcMFxwvjbD-9X.mp4',
          },
        ],
      },
    ],
    users: [
      {
        url: 'https://t.co/4Buer0Iach',
        pinned_tweet_id: '891077153785348097',
        created_at: '2011-11-26T12:46:26.000Z',
        verified: true,
        name: 'nate zed',
        description: 'im on twitter but im not on twitter',
        profile_image_url:
          'https://pbs.twimg.com/profile_images/1502061734697353216/nleqw3fo_normal.jpg',
        id: '421830010',
        public_metrics: {
          followers_count: 487474,
          following_count: 1213,
          tweet_count: 33482,
          listed_count: 642,
        },
        protected: false,
        username: 'NathanZed',
        entities: {
          url: {
            urls: [
              {
                start: 0,
                end: 23,
                url: 'https://t.co/4Buer0Iach',
                expanded_url: 'https://www.youtube.com/user/TheThirdPew',
                display_url: 'youtube.com/user/TheThirdP…',
              },
            ],
          },
        },
      },
    ],
  },
};
