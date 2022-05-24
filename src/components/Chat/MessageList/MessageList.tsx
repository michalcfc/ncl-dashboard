import React, { Fragment } from 'react';

import { MessageListStyle } from './MessageList.styles';
import { MessageListProps } from './MessageList.d';

import { MessageBox } from '../MessageBox';

const MessageList: React.FC<MessageListProps> = ({
  messages,
}) => (
  <MessageListStyle>
    {messages?.map((message) => (
      <Fragment key={message.id}>
        <MessageBox
          message={message.text}
          userName={message.sender}
          userAvatar={message.sender}
        />
      </Fragment>
    ))}
  </MessageListStyle>
);

export default MessageList;
