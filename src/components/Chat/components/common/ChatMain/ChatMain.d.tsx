import { Messages, Guest } from '../../../../../types/reservations';

export interface ChatMainProps {
  messages: Messages[]
  users: Guest
  currentConversation: number
  addMessage: () => void
  writeText?: () => void
}
