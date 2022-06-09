import React from 'react';

import { NavLink } from '@layout/Nav/Nav.styles';
import { NavItemWrapper } from './NavItem.styles';
import { NavItemProps } from './NavItem.d';

const NavItem: React.FC<NavItemProps> = ({
  open,
  name,
  component,
  isHorizontal,
  children,
}) => (
  <NavItemWrapper
    isHorizontal={isHorizontal}
  >
    {isHorizontal ? <div>{component}</div>
      : (
        <NavLink
          href="/"
          name={name}
        />
      )}
    {open && children}
  </NavItemWrapper>

);

export default NavItem;
