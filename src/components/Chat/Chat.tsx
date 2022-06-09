import React, { useState } from 'react';

import { getCurrentConversationId } from '@components/Chat/helpers';
import { ChatProps } from './Chat.d';

import { ChatAsideLeft } from './components/common/ChatAsideLeft';
import { ChatAsideRight } from './components/common/ChatAsideRight';
import { ChatMain } from './components/common/ChatMain';
import { ChatWindow } from './components/common/ChatWindow';

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
        conversations={conversations}
        currentConversation={currentConversation}
        setCurrentConversation={setCurrentConversation}
      />
      <ChatMain
        writeText={null}
        addMessage={null}
        users={conversation?.guest}
        messages={conversation?.messages}
        currentConversation={currentConversation}
      />
      <ChatAsideRight
        conversationDetails={conversation?.context}
      />
    </ChatWindow>
  );
};

export default Chat;
