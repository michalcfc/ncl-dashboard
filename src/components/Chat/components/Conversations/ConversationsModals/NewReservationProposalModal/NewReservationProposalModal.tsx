import React, { useState } from 'react';

import { Modal } from '@components/ui/Modal';

// components

const NewReservationProposalModalD = () => {
  const [
    isAcceptedReservationModalOpen,
    setAcceptedReservationModalOpen,
  ] = useState<boolean>(false);

  return (
    <Modal
      title="Podaj powód odrzucenia:"
      isOpen={isAcceptedReservationModalOpen}
      onClose={setAcceptedReservationModalOpen}
    >
      content
    </Modal>

  );
};

export default NewReservationProposalModalD;
