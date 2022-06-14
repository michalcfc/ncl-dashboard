import React from 'react';
import { Text } from '@components/ui/Text';
import { SPACING } from '@utils/styles/spacing';
import { TextareaProps } from './Textarea.d';
import {
  TextareaWrapper,
  InputStyle,
} from './Textarea.styles';

const Textarea: React.FC<TextareaProps> = ({
  icon,
  label,
  ...rest
}) => (
  <TextareaWrapper>
    {label && <Text mb={SPACING.xs} as="label" text={`${label}:`} />}
    <InputStyle
      {...rest}
    />
  </TextareaWrapper>
);

export default Textarea;
