import React, { useState } from 'react';

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
        users={conversations[currentConversation].guest}
        messages={conversations[currentConversation].messages}
        writeText={null}
        addMessage={null}
        currentConversation={currentConversation}
      />
      <ChatAsideRight
        conversationDetails={conversations[currentConversation].context}
      />
    </ChatWindow>
  );
};

export default Chat;
