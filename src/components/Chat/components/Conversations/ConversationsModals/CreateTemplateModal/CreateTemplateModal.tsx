import React from 'react';
import { Modal } from '@components/ui/Modal';
import { CreateTemplateForm } from '@components/Chat/components/Forms';
import {
  useCloseModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';

const CreateTemplateModal = () => {
  const onCloseCreateTemplateModal = useCloseModal();

  return (
    <Modal title="Utwórz szablon" onClose={onCloseCreateTemplateModal}>
      <CreateTemplateForm />
    </Modal>
  );
};

export default CreateTemplateModal;
