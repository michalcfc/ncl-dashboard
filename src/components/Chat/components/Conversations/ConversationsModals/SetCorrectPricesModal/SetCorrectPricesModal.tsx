import React from 'react';
import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';

const SetCorrectPricesModal = () => {
  const onClose = useCloseModal();

  return (
    <Modal title="Czy chcesz ustalić poprawne ceny" onClose={onClose}>
      Utwórz poprawne ceny
    </Modal>
  );
};

export default SetCorrectPricesModal;
