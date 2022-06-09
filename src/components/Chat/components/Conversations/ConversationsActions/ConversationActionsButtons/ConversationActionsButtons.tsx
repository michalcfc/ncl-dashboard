import React, { useState } from 'react';

// components
import { Box } from '@components/ui/Box';
import { Button } from '@components/ui/Button';
import { FlexBox } from '@components/ui/FlexBox';
import { RejectionReservationModal } from '@components/Chat/components/Conversations';
import { ConversationActionsButtonsD } from './ConversationActionsButtons.d';

// components

const ConversationActionsButtons: React.FC<ConversationActionsButtonsD> = () => {
  const [
    isAcceptedReservationModalOpen,
    setAcceptedReservationModalOpen,
  ] = useState<boolean>(false);

  return (
    <>
      <FlexBox>
        <Button
          name="Zaakceptuj"
          onClick={() => console.log('click')}
        />
        <Button
          ml={3}
          name="Odrzuć"
          variant="danger"
          onClick={() => setAcceptedReservationModalOpen(true)}
        />
      </FlexBox>
      <Box
        mt={2}
      >
        <Button
          variant="text"
          onClick={() => {}}
          name="Zaproponuj inne warunki"
        />
      </Box>
      <RejectionReservationModal
        isAcceptedReservationModalOpen={isAcceptedReservationModalOpen}
        setAcceptedReservationModalOpen={setAcceptedReservationModalOpen}
      />
    </>
  );
};

export default ConversationActionsButtons;
