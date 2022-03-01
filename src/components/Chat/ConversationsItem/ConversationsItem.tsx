import React from 'react';

import { Box } from '@components/Box';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { Avatar } from '@components/Avatar';
import { UserStatusDot } from '@components/UserStatusDot';
import { Text } from '@components/Text';
import { COLORS } from '@utils/styles/colors';
import { NotificationAlertDot } from '@components/NotificationAlertDot';
import { Button } from '@components/Button';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { ConversationsItemProps } from './ConversationsItem.d';
import { ConversationsItemWrapper } from './ConversationsItem.styles';

const ConversationsItem: React.FC<ConversationsItemProps> = ({
  userName,
  userAvatar,
  conversationId,
  lastMessage,
  setCurrentConversation,
}) => {
  const fullName = userName.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);

  return (

    <ConversationsItemWrapper>
      <Button
        size="xs"
        width="100%"
        variant="ghost"
        onClick={() => setCurrentConversation(conversationId)}
      >
        <Box
          hoverEffect
          p={2}
          display="flex"
          borderRadius={BORDER_RADIUS.default}
          alignItems="center"
        >
          <Box
            mr={3}
            position="relative"
          >
            <Avatar
              size="sm"
              alt={initials.toUpperCase()}
              uri={userAvatar}
            />
            <UserStatusDot />
          </Box>
          <Box
            display="flex"
            width="calc(100% - 3.75rem)"
            flexDirection="column"
            whiteSpace="nowrap"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                color={COLORS.black}
              >
                {userName}
              </Text>
              <Text
                muted
                fontSize={FONT_SIZES.sm}
              >
                5h ago
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                mr={3}
                fontSize={FONT_SIZES.sm}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                color={COLORS.gray}
              >
                {lastMessage}
              </Text>
              <NotificationAlertDot
                variant="info"
              />
            </Box>
          </Box>
        </Box>
      </Button>
    </ConversationsItemWrapper>
  );
};

export default ConversationsItem;
