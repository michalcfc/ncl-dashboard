import React from 'react';

// utils
import { COLORS } from '@utils/styles/colors';

// components
import { Heading } from '@components/ui/Heading';
import {
  ConversationsActions,
  ConversationsDetails,
} from '@components/Chat/components/Conversations';
import { useSelector } from 'react-redux';
import { DevSettings } from './DevSettings';
import {
  ChatAsideRightContent,
  ChatAsideRightWrapper,
} from './ChatAsideRight.styles';
import { ChatAsideRightD } from './ChatAsideRight.d';

const ChatAsideRight = ({
  conversationDetails,
}: ChatAsideRightD) => {
  const inboxOwner = useSelector((state: any) => state.reservations.conversations.inboxOwner);

  return (
    <ChatAsideRightWrapper>
      <ChatAsideRightContent>
        <Heading
          p={3}
          type="h6"
          color={COLORS.gray}
          title="Reservation details"
          textTransform="uppercase"
        />
        <ConversationsActions inboxOwner={inboxOwner} />
        <ConversationsDetails
          conversationDetails={conversationDetails}
        />
        <DevSettings inboxOwner={inboxOwner} />
      </ChatAsideRightContent>
    </ChatAsideRightWrapper>
  );
};

export default ChatAsideRight;
