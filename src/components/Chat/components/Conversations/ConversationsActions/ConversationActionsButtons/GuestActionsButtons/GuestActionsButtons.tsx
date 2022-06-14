import React from 'react';
import { SPACING } from '@utils/styles/spacing';

// components
import { Button } from '@components/ui/Button';
import { FlexBox } from '@components/ui/FlexBox';
import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';
import { GuestActionsButtonsD } from './GuestActionsButtons.d';

// components

const GuestActionsButtons: React.FC<GuestActionsButtonsD> = () => {
  const openModal = useOpenModal();

  return (
    <FlexBox>
      <Button
        name="Opłać rezerwację"
        onClick={() => {}}
      />
      <Button
        ml={SPACING.md}
        name="Anuluj rezerwację"
        variant="danger"
        onClick={() => openModal({ modal: ModalTypes.ConfirmRejectionReservation })}
      />
    </FlexBox>
  );
};

export default GuestActionsButtons;
