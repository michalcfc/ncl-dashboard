import { Conversations } from '../../types/reservations';

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
