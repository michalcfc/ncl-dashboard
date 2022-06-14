import { ModalTypes } from '../types';

export type NewReservationProposalModalArugments = undefined;
export type NewReservationProposal = {
  args?: NewReservationProposalModalArugments,
  modal: ModalTypes
};

export type ClosedModalState = {
  args: undefined,
  modal: null,
};

export type OpenedModalState =
    | NewReservationProposal;

export type ModalState = ClosedModalState | OpenedModalState;

export type ModalsStore = ModalState & {
  closeModal: () => void;
  openModal: (state: OpenedModalState) => void;
};
