import React from 'react';

import { NavLinkWrapper } from '@layout/Nav/NavLink/NavLink.styles';
import { NavLinkProps } from './NavLink.d';

const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
}) => (
  <NavLinkWrapper
    href={href}
  >
    {name}
  </NavLinkWrapper>
);

export default NavLink;
