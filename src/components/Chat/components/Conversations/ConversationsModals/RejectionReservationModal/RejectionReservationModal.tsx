import React, { useState } from 'react';
import { Modal } from '@components/ui/Modal';
import {
  getCurrentContentMode,
} from './helpers';
import { RejectionReservationModalD } from './RejectionReservationModal.d';

import { ContentType } from '../types';

const RejectionReservationModal = ({
  isAcceptedReservationModalOpen,
  setAcceptedReservationModalOpen,
}: RejectionReservationModalD) => {
  const [
    currentContentMode,
    setCurrentContentMode,
  ] = useState<ContentType>(ContentType.ConfirmRejectionReservation);

  const {
    title,
    content,
    subtitle,
    actionButtons,
  } = getCurrentContentMode(
    currentContentMode,
    setCurrentContentMode,
  );

  return (
    <Modal
      title={title}
      subtitle={subtitle}
      actionButtons={actionButtons}
      isOpen={isAcceptedReservationModalOpen}
      onClose={setAcceptedReservationModalOpen}
    >
      {content}
    </Modal>

  );
};

export default RejectionReservationModal;
