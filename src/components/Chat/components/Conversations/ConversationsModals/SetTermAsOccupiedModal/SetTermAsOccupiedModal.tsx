import React from 'react';

import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';
import {
  SetTermAsOccupiedForm,
} from '../../../Forms';

const SetTermAsOccupiedModal = () => {
  const onClose = useCloseModal();

  return (
    <Modal
      title="Ustaw termin jako zajęty:"
      onClose={onClose}
    >
      <SetTermAsOccupiedForm
        closeModal={onClose}
      />
    </Modal>

  );
};

export default SetTermAsOccupiedModal;
