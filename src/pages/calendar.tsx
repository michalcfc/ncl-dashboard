import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// components
import { Box } from '@components/ui/Box';
import { Grid } from '@components/ui/Grid';
import { Heading } from '@components/ui/Heading';
import { CalendarSettings } from '@components/ui/Calendar';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

const Calendar: React.FC = () => (
  <>
    <Heading
      muted
      type="h4"
      mb={SPACING.md}
      text="Calendar"
    />
    <Grid
      gridGap={3}
      gridTemplateColumns={[
        '1fr',
        '1fr',
        '1fr',
        'repeat(12, minmax(0,1fr))',
      ]}
    >
      <Box
        p={SPACING.md}
        gridColumn="span 8"
        background={COLORS.white}
        boxShadow={BOX_SHADOWS.base}
        borderRadius={BORDER_RADIUS.base}
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </Box>
      <Box
        p={SPACING.md}
        gridColumn="span 4"
        background={COLORS.white}
        boxShadow={BOX_SHADOWS.base}
        borderRadius={BORDER_RADIUS.base}
      >
        <CalendarSettings />
      </Box>
    </Grid>
  </>
);

export default Calendar;
