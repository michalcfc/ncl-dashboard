export interface ConversationsItemProps {
  userName: string
  userAvatar: string
  lastMessage: string
  conversationId: number
  setCurrentConversation?: (arg: number) => void
}
