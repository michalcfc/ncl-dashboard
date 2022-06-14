import React from 'react';
import { Modal } from '@components/ui/Modal';
import {
  useOpenModal,
  useCloseModal,
} from '../ConversationsModalContext/hooks';
import { ModalTypes } from '../types';

const RejectionReservationModal = () => {
  const onClose = useCloseModal();
  const openModal = useOpenModal();

  return (
    <Modal
      title="Czy napewno chcesz odrzucić rezerwację?"
      subtitle="Masz możliwość zaproponowania innych warunków dla tej rezerwacji"
      actionButtons={[{
        id: 1,
        name: 'Nie, chcę zaproponować inne warunki rezerwacji',
        onClick: () => openModal({ modal: ModalTypes.NewReservationProposal }),
      },
      {
        id: 2,
        name: 'Tak, chcę odrzucić tę prośbę',
        variant: 'danger',
        onClick: () => openModal({ modal: ModalTypes.RejectionReasons }),
      }]}
      onClose={onClose}
    />
  );
};

export default RejectionReservationModal;
