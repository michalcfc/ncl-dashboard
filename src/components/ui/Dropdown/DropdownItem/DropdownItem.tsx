import React from 'react';

import {
  DropdownItemWrapper,
} from './DropdownItem.styles';

import { DropdownItemProps } from './DropdownItem.d';

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  ...rest
}) => (
  <DropdownItemWrapper
    {...rest}
  >
    {children}
  </DropdownItemWrapper>

);

export default DropdownItem;
