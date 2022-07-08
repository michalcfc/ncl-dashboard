import React from 'react';

// components
import { Text } from '@components/ui/Text';
import { FlexBox } from '@components/ui/FlexBox';
import { Heading } from '@components/ui/Heading';

// utils
import { SPACING } from '@utils/styles/spacing';

const CalendarSettings = () => (
  <>
    <Heading
      type="h4"
      mb={SPACING.md}
      title="Settings"
    />
    <FlexBox
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        text=""
      />
    </FlexBox>
  </>
);

export default CalendarSettings;
