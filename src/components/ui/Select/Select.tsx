import React, { SelectHTMLAttributes } from 'react';

import { SelectProps } from '@components/ui/Select/Select.d';
import {
  SelectStyle,
  SelectLabel,
  SelectWrapper,
} from './Select.styles';

import { OPTIONS_NUMBER_VALUE } from './selectConstants';

  type Props = SelectProps & SelectHTMLAttributes<any>;

const Select: React.FC<Props> = ({
  label,
  defaultOptions,
  numberOptionsValue,
  ...rest
}) => {
  const options = (numberOptionsValue
    ? OPTIONS_NUMBER_VALUE
    : defaultOptions).map((option) => (
      <option
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
  ));
  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyle
        {...rest}
      >
        {options}
      </SelectStyle>
    </SelectWrapper>
  );
};

export default Select;
