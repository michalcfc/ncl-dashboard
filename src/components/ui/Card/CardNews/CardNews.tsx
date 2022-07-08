import React from 'react';

// components
import { Box } from '@components/ui/Box';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { Heading } from '@components/ui/Heading';
import { CardNewsItem } from '@components/ui/Card/CardNews/CardNewsItem';

const CardNews = () => {
  const conversations = [
    {
      id: 1, img: '/img/news/post.jpg', title: 'How to talk with clients', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', createdAt: '5 months ago',
    },
    {
      id: 2, img: '/img/news/post.jpg', title: 'How to talk with clients', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', createdAt: '5 months ago',
    },
    {
      id: 3, img: '/img/news/post.jpg', title: 'How to talk with clients', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', createdAt: '5 months ago',
    },
    {
      id: 4, img: '/img/news/post.jpg', title: 'How to talk with clients', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', createdAt: '5 months ago',
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
        title="Latest news"
      />
      {conversations.map(({
        img,
        text,
        title,
        createdAt,
      }) => (
        <CardNewsItem
          img={img}
          text={text}
          title={title}
          createdAt={createdAt}
        />
      ))}
    </Box>
  );
};

export default CardNews;
