import React, { useRef } from 'react';

import { Button } from '@components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDetectOutsideClick } from '@hooks/useDetectOutsideClick';
import {
  DropdownContainer,
  DropdownWrapper,
} from './Dropdown.styles';

import { DropdownProps } from './Dropdown.d';

const Dropdown: React.FC<DropdownProps> = ({
  icon,
  placeholder = '',
  customDropdownButton,
  children,
}) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <DropdownWrapper>
      <Button variant="ghost" onClick={() => onClick()}>
        {customDropdownButton || (
        <>
          <FontAwesomeIcon
            size="lg"
            icon={icon}
          />
          {placeholder}
        </>
        )}
      </Button>

      {isActive && (
      <DropdownContainer ref={dropdownRef}>
          {children}
      </DropdownContainer>
      )}
    </DropdownWrapper>

  );
};

export default Dropdown;
