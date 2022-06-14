import React from 'react';
import { Text } from '@components/ui/Text';
import { SPACING } from '@utils/styles/spacing';
import { InputProps } from './Input.d';
import {
  InputWrapper,
  InputStyle,
} from './Input.styles';

const Input: React.FC<InputProps> = ({
  label,
  ...rest
}) => (
  <InputWrapper>
    <Text mb={SPACING.xs} as="label" text={`${label}:`} />
    <InputStyle
      {...rest}
    />
  </InputWrapper>
);

export default Input;
