import React from 'react';
import {
  TooltipContent,
  TooltipText,
  TooltipWrapper,
} from '@components/ui/Tooltip/Tooltip.styles';
import { TooltipProps } from './Tooltip.d';

const Tooltip: React.FC<TooltipProps> = ({
  label,
  text,
  isOpen,
  customTrigger,
  children,
}) => (
  <TooltipWrapper>
    <TooltipText
      isOpen={isOpen}
      isUnderline={text}
      customTrigger={customTrigger}
    >
      {text || children}
    </TooltipText>
    <TooltipContent>
      <span>{label}</span>
    </TooltipContent>
  </TooltipWrapper>

);

export default Tooltip;
