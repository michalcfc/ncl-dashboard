import { ChatView } from '@components/Chat/Chat.d';

export type User = {
  name: string
  email: string
  phone: string
  avatar: string
  lastActive: string
};

export type Attachments = {
  id: number
  type: string
  uri: string
};

export type Messages = {
  id: number
  message: string
  createdAt: string
  isRead: boolean
  author: User
  attachments: Attachments[]
};

export type Conversations = {
  id: number
  users: User[]
  messages: Messages[]
};

export interface ChatProps {
  view?: ChatView
  conversations: Conversations[]
}
