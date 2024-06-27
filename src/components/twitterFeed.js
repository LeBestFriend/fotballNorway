import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import 'react-tweet';
import { Tweet } from 'react-tweet';

export default function TwitterFeed() {
  return (
    <div id = "twitterFeed">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NorwayFooty"
        options={{ tweetLimit: 5, height: 400}}
      />
    </div>
  );
}