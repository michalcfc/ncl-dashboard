import React from 'react';

import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import { Dropdown } from '@components/Dropdown';
import { DropdownMenu } from '@components/Dropdown/DropdownMenu';
import { ConversationsItem } from '@components/Chat/ConversationsItem';
import { Heading } from '@components/Heading';
import { Text } from '@components/Text';
import { Box } from '@components/Box';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { Button } from '@components/Button';
import { Link } from '@components/Link';
import { COLORS } from '@utils/styles/colors';
import { InboxDropdownProps } from './InboxDropdown.d';

const InboxDropdown: React.FC<InboxDropdownProps> = ({
  messages,
}) => (
  <Dropdown
    icon={faEnvelope}
  >
    <DropdownMenu
      width="18rem"
    >
      <Box
        px={3}
        py={2}
        borderBottom={`1px solid ${COLORS.lightGray}`}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading type="h5">
            Messages
          </Heading>
          <Button
            variant="link"
            name="Mark all as read"
            onClick={() => console.log('click')}
          />
        </Box>
        <Text
          muted
          fontSize={FONT_SIZES.xs}
        >
          You have
          {' '}
          {messages.length}
          {' '}
          unread message(s).
        </Text>
      </Box>
      <ul>
        {messages
          .slice(0, 5)
          .map((message) => (
            <ConversationsItem
              key={message.id}
              userName={message.sender}
              userAvatar={message.sender}
              lastMessage={message.text}
              conversationId={message.id}
            />
          ))}
      </ul>
      <Box
        py={2}
        textAlign="center"
        borderTop={`1px solid ${COLORS.lightGray}`}
      >
        <Link
          href="/chat"
          fontSize={FONT_SIZES.sm}
          variant="success"
          name="View all messages"
          textDecoration="underline"
        />
      </Box>
    </DropdownMenu>
  </Dropdown>
);

export default InboxDropdown;
