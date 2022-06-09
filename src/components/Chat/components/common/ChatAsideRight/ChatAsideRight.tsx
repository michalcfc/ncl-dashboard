import React from 'react';

// utils
import { COLORS } from '@utils/styles/colors';

// components
import { Heading } from '@components/ui/Heading';
import {
  ConversationsActions,
  ConversationsDetails,
} from '@components/Chat/components/Conversations';
import { ChatAsideRightD } from './ChatAsideRight.d';
import {
  ChatAsideRightContent,
  ChatAsideRightWrapper,
} from './ChatAsideRight.styles';

const ChatAsideRight = ({
  conversationDetails,
}: ChatAsideRightD) => (
  <ChatAsideRightWrapper>
    <ChatAsideRightContent>
      <Heading
        p={3}
        type="h6"
        color={COLORS.gray}
        title="Reservation details"
        textTransform="uppercase"
      />
      <ConversationsActions />
      <ConversationsDetails
        conversationDetails={conversationDetails}
      />
    </ChatAsideRightContent>
  </ChatAsideRightWrapper>
);

export default ChatAsideRight;
