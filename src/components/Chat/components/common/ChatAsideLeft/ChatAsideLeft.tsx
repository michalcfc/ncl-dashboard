import React from 'react';

import { COLORS } from '@utils/styles/colors';
import { Heading } from '@components/ui/Heading';
import { ConversationsList } from '../../Conversations';
import {
  ChatAsideLeftContent,
  ChatAsideLeftWrapper,
} from './ChatAsideLeft.styles';
import { ChatAsideProps } from './ChatAsideLeft.d';

const ChatAsideLeft: React.FC<ChatAsideProps> = ({
  currentConversation,
  conversations,
  setCurrentConversation,
}) => (
  <ChatAsideLeftWrapper>
    <ChatAsideLeftContent>
      <Heading
        p={3}
        type="h6"
        color={COLORS.gray}
        title="All messages"
        textTransform="uppercase"
      />
      <ConversationsList
        conversations={conversations}
        currentConversation={currentConversation}
        setCurrentConversation={setCurrentConversation}
      />
    </ChatAsideLeftContent>
  </ChatAsideLeftWrapper>
);

export default ChatAsideLeft;
