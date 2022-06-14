import React from 'react';

// utils
import { COLORS } from '@utils/styles/colors';

// components
import { Box } from '@components/ui/Box';
import { useSelector } from 'react-redux';
import { ConversationsDetails } from '@components/Chat/components/Conversations';
import { ConversationsDetailsDropdownMenuD } from './ConversationsDetailsDropdownMenu.d';

const ConversationsDetailsDropdownMenu: React.FC<ConversationsDetailsDropdownMenuD> = ({
  isOpen,
}) => {
  const reservations = useSelector((state: any) => state.reservations.conversations);

  return (
    <div>
      {isOpen
            && (
            <Box
              background={COLORS.white}
            >
              <ConversationsDetails conversationDetails={reservations.conversations} />
            </Box>
            )}
    </div>
  );
};

export default ConversationsDetailsDropdownMenu;
