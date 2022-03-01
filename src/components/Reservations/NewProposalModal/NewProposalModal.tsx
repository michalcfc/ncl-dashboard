import React from 'react';

import { Modal } from '@components/Modal';
import {
  NewProposalModalProps,
} from './NewProposalModal.d';

const NewProposalModal: React.FC<NewProposalModalProps> = ({
  setNewProposalModalOpen,
  isNewProposalModalOpen,
}) => (
  <Modal
    title="Propozycja nowych warunków"
    isOpen={isNewProposalModalOpen}
    onClose={setNewProposalModalOpen}
  >
    Sunt ad dolore quis aute consequat.
    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
    dolor adipisicing.
    Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
    Lorem aliqua enim laboris do dolor eiusmod.
    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
  </Modal>
);

export default NewProposalModal;
