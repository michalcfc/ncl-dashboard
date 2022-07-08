import React from 'react';

// components
import { Text } from '@components/ui/Text';
import { Box } from '@components/ui/Box';
import { FlexBox } from '@components/ui/FlexBox';
import { Heading } from '@components/ui/Heading';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

const CardTotalEarnings = () => (
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
      title="Total Earnings"
    />
    <FlexBox
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        text="$240"
        fontSize={FONT_SIZES.h2}
      />
      <Text
        muted
        text="amount"
      />
    </FlexBox>
  </Box>
);

export default CardTotalEarnings;
