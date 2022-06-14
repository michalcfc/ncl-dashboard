export interface RejectionReasonsFormD {
}

export enum RejectionReasonType {
  ReasonChoose = 'incorrectPrices',
  IncorrectPrices = 'incorrectPrices',
  ToShortStay = 'toShortStay',
  TermIsOccupied = 'termIsOccupied',
  OfferNotSuitable = 'offerNotSuitable',
  GuestNotRespond = 'guestNotRespond',
  ToExpensive = 'toExpensive',
  HostNotRespond = 'hostNotRespond',
  WantOtherProperty = 'wantOtherProperty',
  AccidentalBooking = 'accidentalBooking',
  PaymentProblem = 'paymentProblem',
  randomIncidentOccurred = 'randomIncidentOccurred',
  TravelTermHasChanged = 'travelTermHasChanged',
  OtherReason = 'otherReason',
}

export type Reason = {
  id: number
  name: string
  value: string
};
