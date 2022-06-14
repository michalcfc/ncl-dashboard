import React, { useEffect, useState } from 'react';

import { getCurrentConversationId } from '@components/Chat/helpers';
import { useParams } from 'react-router';
import { ChatProps } from './Chat.d';

import { ChatAsideLeft } from './components/common/ChatAsideLeft';
import { ChatAsideRight } from './components/common/ChatAsideRight';
import { ChatMain } from './components/common/ChatMain';
import { ChatWindow } from './components/common/ChatWindow';

const Chat: React.FC<ChatProps> = ({
  view = 'withAsides',
  conversations,
}) => {
  const [currentConversation, setCurrentConversation] = useState<number>(null);
  const [conversationData, setConversationData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setCurrentConversation(+id);
    setConversationData(getCurrentConversationId(conversations, currentConversation));
  }, [currentConversation]);

  console.log(conversations);
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
        users={conversationData?.guest}
        messages={conversationData?.messages}
        currentConversation={currentConversation}
      />
      <ChatAsideRight
        conversationDetails={conversationData?.context}
      />
    </ChatWindow>
  );
};

export default Chat;
