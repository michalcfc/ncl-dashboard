export type InboxOwner =
| 'guest'
| 'host';

export type Host = {
  offerId: string
  name: string
};

export type Guest = {
  firstName: string
  name: string
  fullName: string
  addedAt: string
  unreadLastMessage: boolean
};

export type HostActions = {
  accept: boolean
  reject: boolean
  replace: boolean
  reply: boolean
};

export type Sender =
    | 'guest'
    | 'host';

export type ReservationType =
  | 'inquiry'
  | 'reservationOrder';

export type MessageType =
  | 'HostReservationOrderMessage'
  | 'HostInquiryRejectMessage'
  | 'GuestInquiryRejectMessage'
  | 'GuestReservationOrderMessage'
  | 'HostInquiryAcceptMessage'
  | 'GuestRejectMessage'
  | 'HostRejectMessage'
  | 'GuestPayMessage'
  | 'HostReplyMessage'
  | 'HostAcceptMessage'
  | 'GuestReplyMessage'
  | 'GuestInquiryMessage'
  | 'HostPayoffMessage';

export type Messages = {
  id: number
  type: string
  sender: string
  text: string
};

export type ReservationStatus =
  | 'new_inquiry'
  | 'rejected_by_user'
  | 'rejected_by_user_after_paid'
  | 'reject_by_host'
  | 'wait_for_payment'
  | 'new'
  | 'expired'
  | 'rejected'
  | 'accepted'
  | 'paid';

export type ReservationStatusName =
    | 'Zaakceptowane'
    | 'Opłacona'
    | 'Odwołana'
    | 'Odrzucona'
    | 'Anulowana'
    | 'Nieopłacona';

export type ContextStatusName =
  | 'Rezerwacja'
  | 'Prośba o rezerwację'
  | 'Zapytanie';

export type Context = {
  id: string
  reservationOrderId: boolean
  inquiryId: string
  type: string
  email: string
  phone: string
  orderNumber: string
  dateFrom: string
  dateTo: string
  nbAdults: string
  nbChildren: string
  childrenAges: string[]
  totalPrice: string
  totalPriceDiscounted: string
  totalPriceValue: string
  totalPriceDiscountedValue: string
  status: string
  statusName: string
  paymentStatus: string
  paymentUrl: string
  prepaymentValue: string
  prepaymentValueDiscounted: string
  prepaymentValuePrice: string
  prepaymentValuePriceDiscounted: string
  prepaymentValueCurrency: string
  prepaymentValuePercentage: string
  prepaymentHoursToPay: string
  payoffAmount: string
  hostActions?: HostActions | string[]
  hostActionsTimeout: string
  guestActions: any
  orderItems: string
  guestActionsTimeout: string
  rejectedAt: string
  acceptedAt: string
  paidAt: string
  daysBetweenTermText: string
  isRefundableDeposit: boolean
  isActiveFreeCancellation: boolean
  isPaidoff: boolean
  isUseGovernmentVoucher: boolean
  stayPackage: string[]
};

export type Test = 'Odrzucona';

export type Conversations = {
  inboxOwner: string
  id: string
  host: Host
  guest: Guest
  context: Context
  messages: Messages[]
  statusName: string
  isConfirmedStay: boolean
  lastMessageTime: string
  firstMessageTime: string
  previewUrl: string
  isHostRead: boolean
  isGuestRead: boolean
};

export type Reservations = {
  inboxOwner: string
  conversations: Conversations[]
};
