import React from 'react';

import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';

// components

const AcceptedReservationModal = () => {
  const onClose = useCloseModal();
  return (
    <Modal
      title="Podaj powód odrzucenia:"
      onClose={onClose}
    >
      content
    </Modal>

  );
};

export default AcceptedReservationModal;
