import React from 'react';

import { ConversationsItem } from '../ConversationsItem';
import { ConversationsListProps } from './ConversationsList.d';
import { ConversationsListWrapper } from './ConversationsList.styles';

const ConversationsList: React.FC<ConversationsListProps> = ({
  setCurrentConversation,
  currentConversation,
  conversations,
}) => (
  <ConversationsListWrapper>
    <ul>
      {conversations.map((conversation) => (
        <ConversationsItem
          userAvatar=""
          key={conversation.id}
          userName={conversation.guest.name}
          conversationId={(Number(conversation.id))}
          setCurrentConversation={setCurrentConversation}
          isSelected={+conversation.id === currentConversation}
          lastMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
      ))}
    </ul>
  </ConversationsListWrapper>
);

export default ConversationsList;
