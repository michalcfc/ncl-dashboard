import React from 'react';

import { Avatar } from '@components/Avatar';
import { Box } from '@components/Box';
import { Text } from '@components/Text';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { Icon } from '@components/Icon';
import { COLORS } from '@utils/styles/colors';
import { faInfoCircle, faPhoneAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { ChatTopWrapper } from './ChatTop.styles';
import { ChatTopProps } from './ChatTop.d';

const ChatTop: React.FC<ChatTopProps> = ({
  users,
}) => (

  <ChatTopWrapper>
    <Box
      display="flex"
      alignItems="center"
    >
      <Avatar
        size="sm"
        alt="user_name"
        uri="/img/users/user2.jpg"
      />
      <Box
        ml={2}
        display="flex"
        flexDirection="column"
      >
        <Text
          fontSize={FONT_SIZES.sm}
          fontWeight={FONT_WEIGHTS.bold}
        >
          {users?.name}
        </Text>
        <Text
          muted
          fontSize={FONT_SIZES.sm}
        >
          Last seen:
          {' '}
          {users?.firstName}
        </Text>
      </Box>
    </Box>
    <Box
      display="flex"
      alignItems="center"
    >
      <Icon mx={2} name={faPhoneAlt} color={COLORS.gray} />
      <Icon mx={2} name={faVideo} color={COLORS.gray} />
      <Icon mx={2} name={faInfoCircle} color={COLORS.gray} />
    </Box>
  </ChatTopWrapper>

);

export default ChatTop;
