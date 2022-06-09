import React from 'react';

import { Avatar } from '@components/ui/Avatar';
import { Box } from '@components/ui/Box';
import { MessageBoxProps } from './MessageBox.d';
import {
  MessageContainer,
  MessageContent,
} from './MessageBox.styles';

const MessageBox: React.FC<MessageBoxProps> = ({
  message,
  userName,
  userAvatar,
}) => (

  <MessageContainer
    isGuest={userName === 'guest'}
  >
    <Box
      display="flex"
      flexDirection="column"
      alignContent="flex-end"
    >
      <Avatar
        size="xs"
        mr={2}
        alt={userName}
        uri={userAvatar}
      />
    </Box>
    <MessageContent
      isGuest={userName === 'guest'}
    >
      {message}
    </MessageContent>
  </MessageContainer>

);

export default MessageBox;
