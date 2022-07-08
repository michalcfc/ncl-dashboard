import React from 'react';

// components
import { Box } from '@components/ui/Box';
import { Heading } from '@components/ui/Heading';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

const CardRates = () => (
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
      title="Your rates"
    />
  </Box>
);

export default CardRates;
