import React, { useState } from 'react';

// utils
import { SIZES } from '@utils/styles/sizes';
import { SPACING } from '@utils/styles/spacing';

// components
import { Button } from '@components/ui/Button';
import { ReasonsList } from './ReasonsList';
import { OtherReasonForm } from './OtherReasonForm';

// helpers
import { RejectionReasonType } from './RejectionReasonsForm.d';
import {
  getSelectedReasonModal,
  isOtherReasonSelected,
  getHostRejectionReasons,
  getGuestRejectionReasons,
} from './helpers';
import {
  useOpenModal,
} from '../../Conversations/ConversationsModals/ConversationsModalContext/hooks';

const RejectionReasonsForm = () => {
  const [reason, setReason] = useState<RejectionReasonType>(null);

  const openModal = useOpenModal();

  const isHostInbox = true;

  const reasons = isHostInbox
    ? getHostRejectionReasons()
    : getGuestRejectionReasons();

  const selectedReasonModal = getSelectedReasonModal(reason);

  return (
    <>
      <ReasonsList
        reasons={reasons}
        setReason={setReason}
      />
      <OtherReasonForm
        isOtherReasonSelected={isOtherReasonSelected(reason)}
      />
      <Button
        mt={SPACING.md}
        variant="danger"
        width={SIZES.full}
        name="Odrzuć rezerwację"
        onClick={() => openModal({ modal: selectedReasonModal })}
      />
    </>
  );
};

export default RejectionReasonsForm;
