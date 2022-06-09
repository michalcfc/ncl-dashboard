import React, { useState } from 'react';

// components
import { NewProposalModal } from '@components/Reservations/NewProposalModal';
import { ConversationsDetailsHeaderProps } from './ConversationsDetailsHeader.d';

const ConversationsDetailsHeader: React.FC<ConversationsDetailsHeaderProps> = () => {
  const [isNewProposalModalOpen, setNewProposalModalOpen] = useState<boolean>(false);

  return (
    <NewProposalModal
      setNewProposalModalOpen={setNewProposalModalOpen}
      isNewProposalModalOpen={isNewProposalModalOpen}
    />
  );
};

export default ConversationsDetailsHeader;
