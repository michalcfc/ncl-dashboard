import React from 'react';

// components
import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { Avatar } from '@components/ui/Avatar';
import { FlexBox } from '@components/ui/FlexBox';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { Heading } from '@components/ui/Heading';

const CardConversations = () => {
  const conversations = [
    {
      id: 1, img: '/img/users/user.jpg', name: 'Alicia', msg: 'I wanna to know', createdAt: '5 months ago',
    },
    {
      id: 2, img: '/img/users/user.jpg', name: 'Alicia', msg: 'I wanna to know', createdAt: '5 months ago',
    },
    {
      id: 3, img: '/img/users/user.jpg', name: 'Alicia', msg: 'I wanna to know', createdAt: '5 months ago',
    },
    {
      id: 4, img: '/img/users/user.jpg', name: 'Alicia', msg: 'I wanna to know', createdAt: '5 months ago',
    },
  ];

  return (
    <Box
      p={SPACING.md}
      gridColumn="span 4"
      background={COLORS.white}
      boxShadow={BOX_SHADOWS.base}
      borderRadius={BORDER_RADIUS.base}
    >
      <Heading
        type="h4"
        mb={SPACING.md}
        title="Conversations"
      />
      {conversations.map(({
        img,
        name,
        msg,
        createdAt,
      }) => (
        <FlexBox
          my={SPACING.md}
          alignItems="center"
          justifyContent="space-between"
        >
          <FlexBox
            alignItems="center"
          >
            <Avatar
              size="sm"
              uri={img}
              alt={name}
              mr={SPACING.md}
            />
            <div>
              <Text text={name} />
              <Text muted text={msg} />
            </div>
          </FlexBox>
          <Text muted text={createdAt} />
        </FlexBox>
      ))}
    </Box>
  );
};

export default CardConversations;
