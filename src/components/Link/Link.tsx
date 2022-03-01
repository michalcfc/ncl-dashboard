import React, { AnchorHTMLAttributes } from 'react';
import { SpaceProps } from 'styled-system';
import { LinkStyle } from './Link.styles';

import { LinkData } from './Link.d';

type Props = LinkData & AnchorHTMLAttributes<HTMLAnchorElement> & SpaceProps;

const Link: React.FC<Props> = ({
  children,
  name,
  type,
  textDecoration,
  variant,
  ...rest
}) => (
  <LinkStyle
    type={type}
    variant={variant}
    textDecoration={textDecoration}
    {...rest}
  >
    {name}
    {children}
  </LinkStyle>
);

export default Link;
