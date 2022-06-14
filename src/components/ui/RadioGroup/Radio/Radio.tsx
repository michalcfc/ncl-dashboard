import React, { useContext } from 'react';
import { RadioContext } from '@components/ui/RadioGroup/RadioGroup';
import { RadioD } from './Radio.d';

import {
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from './Radio.styles';

const Radio = ({
  label,
  value,
  ...rest
}: RadioD) => {
  const [state, onChange] = useContext(RadioContext);
  const checked = value === state.value;
  return (
    <RadioWrapper {...rest}>
      <RadioLabel
        htmlFor={label}
        isChecked={checked}
        isBorder={state.isBorder}
      >
        <RadioInput
          id={label}
          type="radio"
          value={value}
          checked={checked}
          onChange={({ target }) => onChange(target.value)}
        />
        {label}
      </RadioLabel>
    </RadioWrapper>
  );
};

export default Radio;
