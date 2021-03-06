import React from 'react';
import { LinkStyle } from './Link.styles';

import { LinkD } from './Link.d';

const Link: React.FC<LinkD> = ({
  size,
  name,
  type,
  variant,
  textDecoration,
  children,
  isAbsolute,
  ...rest
}) => (
  <LinkStyle
    type={type}
    size={size}
    variant={variant}
    isAbsolute={isAbsolute}
    textDecoration={textDecoration}
    {...rest}
  >
    {name || children}
  </LinkStyle>
);

export default Link;
