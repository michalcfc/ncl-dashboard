import React, { useState } from 'react';

import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

// components
import { Button } from '@components/ui/Button';
import { FlexBox } from '@components/ui/FlexBox';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';
import { Tooltip } from '@components/ui/Tooltip';
import { isPhoneOrEmailDetected } from '@components/Chat/components/Messages/MessageInput/helpers';
import { MessageInputProps } from './MessageInput.d';
import {
  MessageInputStyle,
  MessageInputWrapper,
} from './MessageInput.styles';

const MessageInput: React.FC<MessageInputProps> = ({
  addMessage,
}) => {
  const [message, setMessage] = useState<string>('');

  const openTemplatesModal = useOpenModal();

  return (
    <Tooltip
      customTrigger
      label="Pamiętaj! Nie podawaj takich danych jak e-mail, telefon, odnośniki do stron czy numer konta bankowego do czasu opłacenia rezerwacji."
      isOpen={isPhoneOrEmailDetected(message)}
    >
      <FlexBox alignItems="center">
        <MessageInputWrapper>
          <MessageInputStyle
            placeholder="Napisz wiadomość"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            color={COLORS.brand}
            variant="text"
            name="Szablony"
            onClick={() => openTemplatesModal({ modal: ModalTypes.SelectTemplate })}
          />
        </MessageInputWrapper>
        <Button
          mx={SPACING.md}
          name="Wyślij"
          borderRadius={BORDER_RADIUS.md}
          settings={{
            icon: {
              size: 'lg',
              name: faPaperPlane,
              position: 'right',
            },
          }}
          onClick={addMessage}
        />
      </FlexBox>
    </Tooltip>
  );
};

export default MessageInput;
