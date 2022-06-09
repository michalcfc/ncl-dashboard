import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AccordionButtonProps } from './AccordionButton.d';

import {
  AccordionButtonStyles,
} from './AccordionButton.styles';

const AccordionButton: React.FC<AccordionButtonProps> = ({
  title,
  setOpen,
  isOpen,
}) => (
  <AccordionButtonStyles
    onClick={() => setOpen(!isOpen)}
  >
    {title}
    <FontAwesomeIcon
      size="sm"
      icon={faChevronDown}
    />
  </AccordionButtonStyles>
);

export default AccordionButton;
