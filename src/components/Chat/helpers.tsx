import { Conversations, ReservationStatus } from '../../types/reservations';

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
  return lastMsg.text;
};
