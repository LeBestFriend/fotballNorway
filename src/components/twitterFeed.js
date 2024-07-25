import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import 'react-tweet';
import { Tweet, TweetActions } from 'react-tweet';

export default function TwitterFeed() {
  return (
    <div id = "twitterFeed">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="NorwayFooty"
        options={{ dataTweetLimit: 5}}
      
      />
      <Tweet tweetId="1720803669178716161" />
    </div>
  );
}