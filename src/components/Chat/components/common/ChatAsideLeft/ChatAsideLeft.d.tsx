import { Conversations } from '../../../../../types/reservations';

export interface ChatAsideProps {
  currentConversation: number
  conversations: Conversations[]
  setCurrentConversation: (arg: number) => void
}
