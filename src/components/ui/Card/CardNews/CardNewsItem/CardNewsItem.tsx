import React from 'react';

// components
import { Text } from '@components/ui/Text';
import { Image } from '@components/ui/Image';
import { FlexBox } from '@components/ui/FlexBox';

// utils
import { SPACING } from '@utils/styles/spacing';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { Box } from '@components/ui/Box';
import { COLORS } from '@utils/styles/colors';
import { CardNewsItemD } from './CardNewsItem.d';

const CardNewsItem = ({
  img,
  title,
  text,
  createdAt,
}: CardNewsItemD) => (
  <FlexBox
    py={SPACING.md}
    borderBottom={`1px solid ${COLORS.lightGray}`}
    alignItems="center"
    justifyContent="space-between"
  >
    <FlexBox
      overflow="hidden"
      alignItems="center"
    >
      <Image
        src={img}
        alt={title}
        width="120px"
        mr={SPACING.md}
        borderRadius={BORDER_RADIUS.base}
      />
      <Box flexGrow={1}>
        <div>
          <Text text={title} />
          <Text muted text={createdAt} />
        </div>
        <Text
          muted
          text={text}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        />
      </Box>
    </FlexBox>
  </FlexBox>
);

export default CardNewsItem;
