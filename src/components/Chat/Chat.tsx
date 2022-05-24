import React, { useState } from 'react';

import { getCurrentConversationId } from '@components/Chat/helpers';
import { ChatProps } from './Chat.d';

import { ChatAsideLeft } from './ChatAsideLeft';
import { ChatAsideRight } from './ChatAsideRight';
import { ChatMain } from './ChatMain';
import { ChatWindow } from './ChatWindow';

const Chat: React.FC<ChatProps> = ({
  view = 'withAsides',
  conversations,
}) => {
  const [currentConversation, setCurrentConversation] = useState<number>(0);
  const conversation = getCurrentConversationId(conversations, currentConversation);

  return (
    <ChatWindow
      view={view}
    >
      <ChatAsideLeft
        currentConversation={currentConversation}
        conversations={conversations}
        setCurrentConversation={setCurrentConversation}
      />
      <ChatMain
        users={conversation?.guest}
        messages={conversation?.messages}
        writeText={null}
        addMessage={null}
        currentConversation={currentConversation}
      />
      <ChatAsideRight
        conversationDetails={conversation?.context}
      />
    </ChatWindow>
  );
};

export default Chat;
