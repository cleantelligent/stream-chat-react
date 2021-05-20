import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('v3jyzcqf5jp2');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2FsbS1iYXNlLTMifQ.S3oK1Zjcvfs_iY9WKvz4V8c3RvupJzmPzs5NRo9rmGc';

chatClient.connectUser(
  {
    id: 'calm-base-3',
    name: 'calm-base-3',
    image: 'https://getstream.io/random_png/?id=calm-base-3&name=calm-base-3',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'calm-base-3', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['calm-base-3'],
});

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;

