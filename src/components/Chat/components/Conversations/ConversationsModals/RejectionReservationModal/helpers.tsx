import React from 'react';
import {
  RejectionReasonsForm,
  NewReservationProposalForm,
} from '@components/Chat/components/Forms';
import { ContentType } from '../types';
import {
  MODAL_TITLE,
  MODAL_SUBTITLE,
  MODAL_SUCCESS_BUTTON_NAME,
  MODAL_DANGER_BUTTON_NAME,
} from '../helpers';

export const rejectionReservationActionButtons = (setCurrentContentMode) => [
  {
    id: 1,
    variant: 'primary',
    name: MODAL_SUCCESS_BUTTON_NAME.rejectionReasons,
    onClick: () => setCurrentContentMode(ContentType.NewReservationProposal),
  },
  {
    id: 2,
    variant: 'danger',
    name: MODAL_DANGER_BUTTON_NAME.rejectionReasons,
    onClick: () => setCurrentContentMode(ContentType.RejectionReasonsForm),
  },
];

export const getCurrentContentMode = (contentType: ContentType, setCurrentContentMode) => {
  switch (contentType) {
    case ContentType.ConfirmRejectionReservation:
      return {
        title: MODAL_TITLE.confirmRejectionReservation,
        subtitle: MODAL_SUBTITLE.confirmRejectionReservation,
        actionButtons: rejectionReservationActionButtons(setCurrentContentMode),
        content: null,
      };
    case ContentType.NewReservationProposal:
      return {
        title: MODAL_TITLE.newProposalReservation,
        actionButtons: [],
        content: <NewReservationProposalForm />,
      };
    case ContentType.RejectionReasonsForm:
      return {
        title: MODAL_TITLE.rejectionReasons,
        actionButtons: [],
        content: <RejectionReasonsForm />,
      };
    default:
      return {
        title: MODAL_TITLE.confirmRejectionReservation,
        actionButtons: [],
        content: null,
      };
  }
};
