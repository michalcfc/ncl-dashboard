import React from 'react';

import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import {
  NewProposalModalProps,
} from './NewProposalModal.d';

const NewProposalModal: React.FC<NewProposalModalProps> = () => {
  const onClose = useCloseModal();

  return (
    <Modal
      title="Propozycja nowych warunków"
      onClose={onClose}
    >
      <button type="button" onClick={() => onClose()}>close</button>
      Sunt ad dolore quis aute consequat.
      Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
      dolor adipisicing.
      Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
      Lorem aliqua enim laboris do dolor eiusmod.
      Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
      proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
    </Modal>

  );
};

export default NewProposalModal;
