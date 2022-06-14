import React from 'react';

import { Modal } from '@components/ui/Modal';
import { RejectionReasonsForm } from '@components/Chat/components/Forms';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';

const RejectionReasonsModal = () => {
  const onClose = useCloseModal();

  return (
    <Modal title="Podaj powód odrzucenia:" onClose={onClose}>
      <RejectionReasonsForm />
    </Modal>
  );
};

export default RejectionReasonsModal;
