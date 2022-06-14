import React from 'react';
import { Textarea } from '@components/ui/Textarea';
import { OtherReasonFormD } from './OtherReasonForm.d';

// components

const OtherReasonForm = ({
  isOtherReasonSelected,
}: OtherReasonFormD) => (
  <div>
    {isOtherReasonSelected && (
    <Textarea
      label="Napisz jaki to powód:"
      placeholder="Wpisz powód..."
      onChange={() => {}}
    />
    )}
  </div>
);

export default OtherReasonForm;
