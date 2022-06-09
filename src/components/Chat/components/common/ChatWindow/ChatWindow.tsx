import React from 'react';

import {
  ChatWindowWrapper,
} from './ChatWindow.styles';
import { ChatWindowProps } from './ChatWindow.d';

const ChatWindow: React.FC<ChatWindowProps> = ({
  view,
  children,
}) => (

  <ChatWindowWrapper
    view={view}
  >
    {children}
  </ChatWindowWrapper>

);

export default ChatWindow;
