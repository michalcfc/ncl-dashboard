import React from 'react';
import { BoxProps } from './Box.d';
import { BoxWrapper } from './Box.styles';

const Box: React.FC<BoxProps> = ({
  noOfLines,
  hoverEffect,
  children,
  ...rest
}) => (
  <BoxWrapper
    noOfLines={noOfLines}
    hoverEffect={hoverEffect}
    {...rest}
  >
    {children}
  </BoxWrapper>
);

export default Box;
