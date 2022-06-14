import React from 'react';

// utils
import { SIZES } from '@utils/styles/sizes';
import { SPACING } from '@utils/styles/spacing';

// components
import { Button } from '@components/ui/Button';
import { SetTermAsOccupiedFordD } from '@components/Chat/components/Forms/SetTermAsOccupiedForm/SetTermAsOccupiedFord.d';
import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';

const SetTermAsOccupiedForm = ({ closeModal }: SetTermAsOccupiedFordD) => {
  const openModal = useOpenModal();

  return (
    <>
      <Button
        mb={SPACING.md}
        width={SIZES.full}
        name="Ustaw termin jako zajęty"
        onClick={() => openModal({ modal: ModalTypes.TermOccupiedConfirmed })}
      />
      <Button
        name="Nie teraz"
        variant="outline"
        width={SIZES.full}
        onClick={closeModal}
      />
    </>
  );
};

export default SetTermAsOccupiedForm;
