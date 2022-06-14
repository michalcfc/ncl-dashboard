import React from 'react';
import { Alert } from '@components/ui/Alert';
import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';

const TermOccupiedConfirmedModal = () => {
  const closeModal = useCloseModal();

  return (
    <Modal title="Dziękujemy" onClose={closeModal}>
      <Alert
        variant="success"
        text="Twój kalendarz został zaktualizowany. Jeśli chcesz zablokować inne terminy przejdź do kalendarza."
      />
    </Modal>
  );
};

export default TermOccupiedConfirmedModal;
