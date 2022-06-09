import React from 'react';
import { BoxProps } from './Box.d';
import { BoxWrapper } from './Box.styles';

const Box: React.FC<BoxProps> = ({
  hoverEffect,
  children,
  ...rest
}) => (
  <BoxWrapper
    hoverEffect={hoverEffect}
    {...rest}
  >
    {children}
  </BoxWrapper>
);

export default Box;
