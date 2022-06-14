import React from 'react';

// utils
import { SPACING } from '@utils/styles/spacing';

// components
import { Box } from '@components/ui/Box';
import { isHostInbox } from '@components/Chat/helpers';
import { ConversationsActionsWrapper } from './ConversationsActions.styles';
import {
  HostActionsButtons,
  GuestActionsButtons,
} from './ConversationActionsButtons';

import { ConversationsActionsD } from './ConversationsActions.d';

const ConversationsActions = ({
  inboxOwner,
}: ConversationsActionsD) => (
  <ConversationsActionsWrapper>
    <Box
      px={SPACING.md}
      mb={SPACING.md}
    >
      {isHostInbox(inboxOwner)
        ? <HostActionsButtons />
        : <GuestActionsButtons />}
    </Box>
  </ConversationsActionsWrapper>
);

export default ConversationsActions;
