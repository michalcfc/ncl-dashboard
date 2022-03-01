import React from 'react';
import { TextareaProps } from './Textarea.d';
import {
  TextareaStyle,
} from './Textarea.styles';

const Textarea: React.FC<TextareaProps> = ({
  icon,
  label,
  onChange,
  ...rest
}) => (
  <TextareaStyle
    {...rest}
    onChange={onChange}
  />
);

export default Textarea;
