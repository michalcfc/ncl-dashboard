import React from 'react';
import {
  AccordionWrapper,
} from './Accordion.styles';
import { AccordionProps } from './Accordion.d';

const Accordion: React.FC<AccordionProps> = ({
  children,
}) => (
  <AccordionWrapper>
    {children}
  </AccordionWrapper>
);

export default Accordion;
