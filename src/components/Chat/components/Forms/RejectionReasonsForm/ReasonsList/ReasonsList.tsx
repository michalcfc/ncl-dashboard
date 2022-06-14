import React from 'react';

// components
import { Radio } from '@components/ui/RadioGroup/Radio';
import { RadioGroup } from '@components/ui/RadioGroup';
import { ReasonsListD } from './ReasonsList.d';

const ReasonsList = ({
  reasons,
  setReason,
}: ReasonsListD) => (
  <RadioGroup
    isBorder
    onChange={(value) => setReason(value)}
  >
    {reasons.map((reason) => (
      <Radio
        key={reason.id}
        label={reason.name}
        value={`${reason.value}`}
      />
    ))}
  </RadioGroup>
);

export default ReasonsList;
