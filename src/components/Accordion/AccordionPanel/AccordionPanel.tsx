import React from 'react';

import { Box } from '@components/Box';
import { AccordionPanelProps } from './AccordionPanel.d';

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  children,
  isOpen,
}) => (
  <Box
    py={isOpen && 2}
    px={3}
  >
    {isOpen && children}
  </Box>

);

export default AccordionPanel;
