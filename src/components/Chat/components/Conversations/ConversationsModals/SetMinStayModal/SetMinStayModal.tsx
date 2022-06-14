import React from 'react';
import { Modal } from '@components/ui/Modal';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';

const SetMinStayModal = () => {
  const onClose = useCloseModal();

  return (
    <Modal title="Czy chcesz zaktualizować warunki pobytu" onClose={onClose}>
      Zaktualizuj warunki pobytu
    </Modal>
  );
};

export default SetMinStayModal;
