import React from 'react';

import {
  DropdownMenuWrapper,
} from './DropdownMenu.styles';

import { DropdownMenuProps } from './DropdownMenu.d';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  ...rest
}) => (
  <DropdownMenuWrapper
    {...rest}
  >
    {children}
  </DropdownMenuWrapper>

);

export default DropdownMenu;
