import React from 'react';
import { Button } from '@components/Button';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { MessageInputProps } from './MessageInput.d';

import {
  MessageInputStyle,
  MessageInputContainer,
} from './MessageInput.styles';

const MessageInput: React.FC<MessageInputProps> = ({
  writeText,
  addMessage,
}) => (
  <MessageInputContainer>
    <MessageInputStyle
      placeholder="Napisz wiadomość"
      onChange={writeText}
    />
    <Button
      mx={2}
      name="Wyślij"
      borderRadius={BORDER_RADIUS.md}
      icon={faPaperPlane}
      variant="primary"
      onClick={addMessage}
    />
  </MessageInputContainer>

);

export default MessageInput;