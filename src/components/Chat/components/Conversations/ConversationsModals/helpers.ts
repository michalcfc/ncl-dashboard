import { ModalTypes } from './types';
import {
  TemplatesModal,
  SetMinStayModal,
  EditTemplateModal,
  DeleteTemplateModal,
  CreateTemplateModal,
  RejectionReasonsModal,
  SetCorrectPricesModal,
  SetTermAsOccupiedModal,
  RejectionReservationModal,
  TermOccupiedConfirmedModal,
  NewReservationProposalModal,
} from './index';

export const MODAL_COMPONENTS: any = {
  [ModalTypes.SetMinStay]: SetMinStayModal,
  [ModalTypes.SelectTemplate]: TemplatesModal,
  [ModalTypes.EditTemplate]: EditTemplateModal,
  [ModalTypes.CreateTemplate]: CreateTemplateModal,
  [ModalTypes.SetCorrectPrices]: SetCorrectPricesModal,
  [ModalTypes.RejectionReasons]: RejectionReasonsModal,
  [ModalTypes.DeleteTemplateModal]: DeleteTemplateModal,
  [ModalTypes.SetTermAsOccupied]: SetTermAsOccupiedModal,
  [ModalTypes.TermOccupiedConfirmed]: TermOccupiedConfirmedModal,
  [ModalTypes.NewReservationProposal]: NewReservationProposalModal,
  [ModalTypes.ConfirmRejectionReservation]: RejectionReservationModal,
};
