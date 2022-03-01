import React, { InputHTMLAttributes } from 'react';
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxWrapper,
} from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.d';

type Props = CheckboxProps & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<Props> = ({
  label,
  onChange,
  ...rest
}) => (

  <CheckboxWrapper>
    <CheckboxInput
      id={label}
      type="checkbox"
      onChange={onChange}
      {...rest}
    />
    <CheckboxLabel htmlFor={label}>
      {label}
    </CheckboxLabel>
  </CheckboxWrapper>
);

export default Checkbox;
