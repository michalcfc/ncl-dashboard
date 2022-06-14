import React from 'react';

import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';

const NewReservationProposalModal = () => {
  const onClose = useCloseModal();

  return (
    <Modal
      title="Nowa propozycja"
      onClose={onClose}
    >
      content
    </Modal>

  );
};

export default NewReservationProposalModal;
