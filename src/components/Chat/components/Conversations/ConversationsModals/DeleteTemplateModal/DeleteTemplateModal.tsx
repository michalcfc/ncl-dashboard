import React from 'react';
import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';

const DeleteTemplateModal = () => {
  const onCloseCreateTemplateModal = useCloseModal();

  return (
    <Modal
      title="Usuń szablon"
      subtitle="Czy jesteś pewny, że chcesz usunąć ten szablon?"
      onClose={onCloseCreateTemplateModal}
    />
  );
};

export default DeleteTemplateModal;
