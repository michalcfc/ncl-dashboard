import React from 'react';

import { COLORS } from '@utils/styles/colors';
import { Heading } from '@components/Heading';
import { ConversationsDetails } from '@components/Chat/ConversationsDetails';
import {
  ChatAsideRightContent,
  ChatAsideRightWrapper,
} from './ChatAsideRight.styles';
import { ChatAsideProps } from './ChatAsideRight.d';

const ChatAsideRight: React.FC<ChatAsideProps> = ({
  conversationDetails,
}) => (
  <ChatAsideRightWrapper>
    <ChatAsideRightContent>
      <Heading
        p={3}
        type="h6"
        title="Reservation details"
        color={COLORS.gray}
        textTransform="uppercase"
      />
      <ConversationsDetails
        conversationDetails={conversationDetails}
      />
    </ChatAsideRightContent>
  </ChatAsideRightWrapper>
);

export default ChatAsideRight;
