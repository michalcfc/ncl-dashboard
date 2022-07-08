import React from 'react';

// components
import { Box } from '@components/ui/Box';
import { Link } from '@components/ui/Link';
import { Text } from '@components/ui/Text';
import { FlexBox } from '@components/ui/FlexBox';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';
import { CardNewsWrapper } from './CardThumb.styles';

const CardThumb = () => (
  <CardNewsWrapper
    gridColumn="span 8"
    height="320px"
    p={SPACING.md}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundImage={'url("img/hero.jpg")'}
    boxShadow={BOX_SHADOWS.base}
    borderRadius={BORDER_RADIUS.base}
  >
    <FlexBox
      height="100%"
      position="relative"
      flexDirection="column"
    >
      <Text
        color={COLORS.white}
        fontSize={FONT_SIZES.xl}
        fontWeight={FONT_WEIGHTS.medium}
        text="Business Management Fundamentals"
      />
      <Text
        color={COLORS.white}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Box
        mt="auto"
      >
        <Link
          href="/calendar"
          name="Update calendar →"
        />
      </Box>
    </FlexBox>
  </CardNewsWrapper>
);

export default CardThumb;
