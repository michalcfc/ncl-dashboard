import React from 'react';

// utils
import { SPACING } from '@utils/styles/spacing';

// components
import { Box } from '@components/ui/Box';
import { Heading } from '@components/ui/Heading';
import { ConversationsActionsWrapper } from './ConversationsActions.styles';
import { ConversationsActionsD } from './ConversationsActions.d';
import {
  ConversationActionsButtons,
} from './ConversationActionsButtons';
import {
  ConversationActionsInfo,
} from './ConversationActionsInfo';

// components

const ConversationsActions: React.FC<ConversationsActionsD> = () => (
  <ConversationsActionsWrapper>
    <Box
      px={SPACING.md}
      mb={SPACING.md}
    >
      <Heading
        type="h6"
        mb={SPACING.sm}
        title="Czy akceptujesz tę rezerwację?"
      />
      <ConversationActionsButtons />
      <ConversationActionsInfo />
    </Box>
  </ConversationsActionsWrapper>
);

export default ConversationsActions;
