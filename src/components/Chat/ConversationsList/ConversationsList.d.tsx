import { Conversations } from '../../../types/reservations';

export interface ConversationsListProps {
  currentConversation: number
  conversations: Conversations[]
  setCurrentConversation: (arg: number) => void
}
