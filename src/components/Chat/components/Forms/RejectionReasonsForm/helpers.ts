import { ModalTypes } from '../../Conversations/ConversationsModals/types';
import { RejectionReasonType } from './RejectionReasonsForm.d';

export const HOST_REJECTION_REASON = {
  incorrectPrices: 'Rezerwacja nie zawiera poprawnych cen',
  termIsOccupied: 'Termin jest zajęty',
  toShortStay: 'Wymagamy dłuższych pobytów',
  offerNotSuitableForGuest: 'Oferta nie jest odpowiednia dla gościa',
  guestNotRespond: 'Brak odpowiedzi gościa',
  otherReason: 'Inny powód',
};

export const GUEST_REJECTION_REASON = {
  travelTermHasChanged: 'Zmienił się termin mojej podróży',
  offerNotSuitable: 'Nie odpowiada mi propozycja gospodarza',
  toExpensive: 'Zaproponowana cena jest za wysoka',
  hostNotRespond: 'Brak odpowiedzi od gospodarza',
  wantOtherProperty: 'Chcę zarezerwować inny nocleg',
  accidentalBooking: 'Przypadkowa rezerwacja',
  paymentProblem: 'Wystąpiły problemy z płatnością',
  randomIncidentOccurred: 'Wystąpiło zdarzenie losowe',
  otherReason: 'Inny powód',
};

export const getHostRejectionReasons = () => {
  const {
    otherReason,
    toShortStay,
    termIsOccupied,
    incorrectPrices,
    guestNotRespond,
    offerNotSuitableForGuest,
  } = HOST_REJECTION_REASON;

  const reasons = [
    { id: 1, name: incorrectPrices, value: RejectionReasonType.IncorrectPrices },
    { id: 2, name: termIsOccupied, value: RejectionReasonType.TermIsOccupied },
    { id: 3, name: toShortStay, value: RejectionReasonType.ToShortStay },
    { id: 4, name: offerNotSuitableForGuest, value: RejectionReasonType.OfferNotSuitable },
    { id: 5, name: guestNotRespond, value: RejectionReasonType.GuestNotRespond },
    { id: 6, name: otherReason, value: RejectionReasonType.OtherReason },
  ];
  return reasons;
};

export const getGuestRejectionReasons = () => {
  const {
    otherReason,
    toExpensive,
    paymentProblem,
    hostNotRespond,
    offerNotSuitable,
    wantOtherProperty,
    accidentalBooking,
    travelTermHasChanged,
    randomIncidentOccurred,
  } = GUEST_REJECTION_REASON;

  const reasons = [
    { id: 1, name: travelTermHasChanged, value: RejectionReasonType.TravelTermHasChanged },
    { id: 2, name: offerNotSuitable, value: RejectionReasonType.OfferNotSuitable },
    { id: 3, name: toExpensive, value: RejectionReasonType.ToExpensive },
    { id: 4, name: hostNotRespond, value: RejectionReasonType.HostNotRespond },
    { id: 5, name: wantOtherProperty, value: RejectionReasonType.WantOtherProperty },
    { id: 6, name: accidentalBooking, value: RejectionReasonType.AccidentalBooking },
    { id: 7, name: paymentProblem, value: RejectionReasonType.PaymentProblem },
    { id: 8, name: randomIncidentOccurred, value: RejectionReasonType.randomIncidentOccurred },
    { id: 9, name: otherReason, value: RejectionReasonType.OtherReason },
  ];
  return reasons;
};

export const isOtherReasonSelected = (reason) => {
  const isOtherReasonSelected = [
    RejectionReasonType.OtherReason,
  ].includes(reason);
  return isOtherReasonSelected;
};
export const getSelectedReasonModal = (reason: RejectionReasonType) => {
  switch (reason) {
    case RejectionReasonType.IncorrectPrices:
      return ModalTypes.SetCorrectPrices;
    case RejectionReasonType.TermIsOccupied:
      return ModalTypes.SetTermAsOccupied;
    case RejectionReasonType.ToShortStay:
      return ModalTypes.SetMinStay;
    default:
      return null;
  }
};
