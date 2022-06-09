import React, { useState } from 'react';

// hooks
import { useWindowSize } from '@hooks/useWindowSize';

// utils
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';

// components
import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { Avatar } from '@components/ui/Avatar';
import { Button } from '@components/ui/Button';
import { ConversationDetailsDropdownMenu }
  from '@components/Chat/components/Conversations';
import { ChatTopWrapper } from './ChatTop.styles';
import { ChatTopProps } from './ChatTop.d';

const ChatTop: React.FC<ChatTopProps> = ({
  users,
}) => {
  const isMobile = useWindowSize();

  const [isDetailsDropdownMenuOpen, setDetailsDropdownMenuOpen] = useState<boolean>(false);

  return (
    <>
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
        {isMobile && (
        <div>
          <Button
            name={isDetailsDropdownMenuOpen
              ? 'Ukryj szczegóły'
              : 'Pokaż szczegóły'}
            variant="link"
            onClick={() => setDetailsDropdownMenuOpen(!isDetailsDropdownMenuOpen)}
          />
        </div>
        )}
      </ChatTopWrapper>
      <ConversationDetailsDropdownMenu isOpen={isDetailsDropdownMenuOpen} />
    </>
  );
};

export default ChatTop;
