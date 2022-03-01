import React from 'react';

import {
  ChatMainWrapper,
  ChatMainContent,
} from './ChatMain.styles';
import { ChatMainProps } from './ChatMain.d';

import { ChatTop } from '../ChatTop';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';

const ChatMain: React.FC<ChatMainProps> = ({
  users,
  messages,
  addMessage,
  writeText,
  currentConversation,
}) => (
  <ChatMainWrapper>
    <ChatMainContent>
      <ChatTop
        users={users}
      />
      <MessageList
        messages={messages}
        currentConversation={currentConversation}
      />
      <MessageInput
        writeText={writeText}
        addMessage={addMessage}
      />
    </ChatMainContent>
  </ChatMainWrapper>
);

export default ChatMain;
