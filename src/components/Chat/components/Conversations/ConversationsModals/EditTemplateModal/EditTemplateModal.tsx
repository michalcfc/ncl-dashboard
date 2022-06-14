import React from 'react';
import {
  useCloseModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { Modal } from '@components/ui/Modal';
import { EditTemplateForm } from '@components/Chat/components/Forms';

const EditTemplateModal = () => {
  const onCloseCreateTemplateModal = useCloseModal();

  return (
    <Modal title="Edytuj szablon" onClose={onCloseCreateTemplateModal}>
      <EditTemplateForm />
    </Modal>
  );
};

export default EditTemplateModal;
