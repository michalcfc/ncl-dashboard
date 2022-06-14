import { Conversations, InboxOwner, ReservationStatus } from '../../types/reservations';

export const isHostInbox = (inboxOwner: InboxOwner) => {
  const isHostInbox = inboxOwner === 'host';
  return isHostInbox;
};

export const isGuestInbox = (inboxOwner: InboxOwner) => {
  const isHostInbox = inboxOwner === 'guest';
  return isHostInbox;
};

export const isNewReservation = (status: ReservationStatus) => {
  const newReservationStatuses = ['new', 'new_inquiry', 'accepted'];
  return newReservationStatuses.includes(status);
};

export const isReservationToAccept = (status: ReservationStatus) => {
  const newReservationStatuses = ['new', 'new_inquiry'];
  return newReservationStatuses.includes(status);
};

export const getCurrentConversationId = (
  conversations: Conversations[],
  conversationId: number,
) => {
  const currentConversationId = conversations
    .filter((conversation) => +conversation.id === conversationId)
    .pop();
  return currentConversationId;
};

export const getLastConversationMessage = (messages) => {
  const lastMsg = messages.slice(-1).pop();
  return lastMsg?.text;
};

export const isGuestStartPay = (status: ReservationStatus, paymentStatus: string) => {
  if (
    paymentStatus === 'START_PAY'
      && status !== 'paid'
      && status !== 'expired'
      && status !== 'rejected'
      && status !== 'rejected_by_user'
      && status !== 'rejected_by_overbooking'
      && status !== 'rejected_by_dok_after_paid'
      && status !== 'confirmed_stay'
  ) {
    return true;
  }
  return false;
};
