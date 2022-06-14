import React from 'react';
import { Box } from '@components/ui/Box';
import { SPACING } from '@utils/styles/spacing';
import { RadioGroup } from '@components/ui/RadioGroup';
import { Radio } from '@components/ui/RadioGroup/Radio';
import { useAppDispatch } from '@store/hooks';
import { changeInboxView } from '@store/Reservations/reservetionsSlice';
import { DevSettingsD } from './DevSettings.d';

const DevSettings = ({ inboxOwner }: DevSettingsD) => {
  const dispatch = useAppDispatch();

  return (
    <Box p={SPACING.md}>
      <RadioGroup defaultValue={inboxOwner} onChange={(value) => dispatch(changeInboxView(value))}>
        <Radio label="host" value="host" />
        <Radio label="guest" value="guest" />
      </RadioGroup>
    </Box>
  );
};

export default DevSettings;
