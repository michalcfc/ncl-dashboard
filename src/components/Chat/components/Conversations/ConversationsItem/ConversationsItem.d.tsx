export interface ConversationsItemProps {
  userName: string
  userAvatar: string
  lastMessage: string
  isSelected?: boolean
  conversationId: number
  setCurrentConversation?: (arg: number) => void
}
