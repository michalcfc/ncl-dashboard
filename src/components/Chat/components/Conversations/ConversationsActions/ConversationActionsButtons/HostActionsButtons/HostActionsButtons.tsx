import React from 'react';
import { SPACING } from '@utils/styles/spacing';
import { COLORS } from '@utils/styles/colors';

// components
import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { Heading } from '@components/ui/Heading';
import { FlexBox } from '@components/ui/FlexBox';
import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';
import { HostActionsButtonsD } from './HostActionsButtons.d';
import {
  ConversationActionsInfo,
} from '../../ConversationActionsInfo';

// components

const HostActionsButtons: React.FC<HostActionsButtonsD> = () => {
  const openModal = useOpenModal();

  return (
    <>
      <Heading
        type="h6"
        mb={SPACING.sm}
        title="Czy akceptujesz tę rezerwację?"
      />
      <FlexBox>
        <Button
          name="Zaakceptuj"
          onClick={() => {}}
        />
        <Button
          ml={SPACING.md}
          name="Odrzuć"
          variant="danger"
          onClick={() => openModal({ modal: ModalTypes.ConfirmRejectionReservation })}
        />
      </FlexBox>
      <Box
        mt={SPACING.md}
      >
        <Button
          variant="text"
          color={COLORS.brand}
          onClick={() => openModal({ modal: ModalTypes.NewReservationProposal })}
          name="Zaproponuj inne warunki"
        />
      </Box>
      <ConversationActionsInfo />
    </>
  );
};

export default HostActionsButtons;
