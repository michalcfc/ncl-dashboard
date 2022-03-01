import { Conversations } from '../../types/reservations';

export type ChatView =
  | 'fullWidth'
  | 'withAsides'
  | 'withLeftAside'
  | 'withRightAside';

export interface ChatProps {
  view?: ChatView
  conversations: Conversations[]
}
