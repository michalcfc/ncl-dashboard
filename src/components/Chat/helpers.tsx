export const getLastConversationMessage = (messages) => {
  const lastMsg = messages.slice(-1).pop();
  return lastMsg.text;
};
