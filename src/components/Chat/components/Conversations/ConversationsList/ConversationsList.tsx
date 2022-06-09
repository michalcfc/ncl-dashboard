import React from 'react';

import { ConversationsItem } from '../ConversationsItem';
import { ConversationsListProps } from './ConversationsList.d';
import { ConversationsListWrapper } from './ConversationsList.styles';

import { getLastConversationMessage } from '../../../helpers';

const ConversationsList: React.FC<ConversationsListProps> = ({
  setCurrentConversation,
  conversations,
}) => (
  <ConversationsListWrapper>
    <ul>
      {conversations.map((conversation) => (
        <ConversationsItem
          key={conversation.id}
          userAvatar=""
          userName={conversation.guest.name}
          conversationId={(Number(conversation.id))}
          setCurrentConversation={setCurrentConversation}
          lastMessage={getLastConversationMessage(conversation.messages)}
        />
      ))}
    </ul>
  </ConversationsListWrapper>
);

export default ConversationsList;
