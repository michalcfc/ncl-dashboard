import React from 'react';

// component
import { Box } from '@components/ui/Box';
import { Grid } from '@components/ui/Grid';
import { Text } from '@components/ui/Text';
import { Switch } from '@components/ui/Switch';
import { Heading } from '@components/ui/Heading';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';

const Settings: React.FC = () => (
  <>
    <Heading
      type="h2"
      title="Settings"
    />
    <Grid
      mt={3}
      gridGap={4}
      gridTemplateColumns="1fr 3fr"
    >
      <Box
        p={3}
        background={COLORS.white}
      >
        menu
      </Box>
      <Box
        p={SPACING.lg}
        background={COLORS.white}
      >
        <Heading
          type="h4"
          mb={3}
          title="Alerts & Notifications"
        />
        <Box
          py={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom={`1px solid ${COLORS.lightGray}`}
        >
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text
              text="Company News"
              fontWeight={FONT_WEIGHTS.bold}
            />
            <Text
              muted
              fontSize={FONT_SIZES.sm}
              text="Get Rocket news, announcements, and product updates"
            />
          </Box>
          <Switch />
        </Box>
        {' '}
        <Box
          py={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom={`1px solid ${COLORS.lightGray}`}
        >
          <Box
            display="flex"
            flexDirection="column"
          >
            <Text
              text="Account Activity"
              fontWeight={FONT_WEIGHTS.bold}
            />
            <Text
              muted
              fontSize={FONT_SIZES.sm}
              text="Get Rocket news, announcements, and product updates"
            />
          </Box>
          <Switch />
        </Box>
      </Box>
    </Grid>
  </>
);

export default Settings;
