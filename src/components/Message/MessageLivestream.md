```js
import { Message } from './Message';
import { MessageLivestream } from './MessageLivestream';
import { Channel } from '../../components/Channel/Channel'
import { Chat } from '../../components/Chat/Chat'

const data = require('../../docs/data');

const readBy = [
  {
    created_at: '2019-01-22T16:35:18.417456Z',
    id: 'thierry',
    online: true,
    role: 'user',
    updated_at: '2019-01-25T18:07:04.20131Z',
  },
];
<Chat client={data.client}>
  <Channel channel={data.channel} Message={MessageLivestream}>
    <Message
      message={data.message}
      readBy={readBy}
      groupStyles={['bottom']}
      editing={false}
      mutes={[]}
      {...data.channelContext}
      {...data.translationContext}
    />
  </Channel>
</Chat>  
```
