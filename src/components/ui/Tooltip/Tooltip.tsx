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
  children,
}) => (
  <TooltipWrapper>
    <TooltipText
      isUnderline={text}
    >
      {text}
    </TooltipText>
    <TooltipContent>
      {<span>{label}</span> || children}
    </TooltipContent>
  </TooltipWrapper>

);

export default Tooltip;
