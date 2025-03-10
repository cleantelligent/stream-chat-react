import type { NimbleEmojiIndex } from 'emoji-mart';

import { EmoticonItem } from '../../EmoticonItem/EmoticonItem';
import type { EmojiTriggerSetting } from '../../ChatAutoComplete';

export const useEmojiTrigger = (emojiIndex?: NimbleEmojiIndex): EmojiTriggerSetting => ({
  component: EmoticonItem,
  dataProvider: (query, _, onReady) => {
    if (query.length === 0 || query.charAt(0).match(/[^a-zA-Z0-9+-]/)) {
      return [];
    }
    const emojis = emojiIndex?.search(query) || [];
    // emojiIndex.search sometimes returns undefined values, so filter those out first
    const result = emojis.filter(Boolean).slice(0, 10);
    if (onReady) onReady(result, query);

    return result;
  },
  output: (entity) => ({
    caretPosition: 'next',
    key: entity.id,
    text: `${'native' in entity ? entity.native : ''}`,
  }),
});
