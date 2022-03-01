import styled from 'styled-components';
import { space } from 'styled-system';

type DataProps = {
  isUnderline?: string
};

export const TooltipWrapper = styled.div<DataProps>`
  ${space};
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.span<DataProps>`
  position: fixed;
  transform: translate(-50%, 10%);
  width: 252px;
  z-index: 999;
  white-space: normal;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
  padding: ${({ theme }) => theme.spacing.sm};
  color:  ${({ theme }) => theme.colors.white};
  background:  ${({ theme }) => theme.colors.black};
  border-radius:  ${({ theme }) => theme.borderRadius.default};
  visibility: hidden;
  &:after {
    content: " ";
    position: absolute;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const TooltipText = styled.span<DataProps>`
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  text-decoration-style: ${({ isUnderline }) => (isUnderline ? 'dashed' : 'none')};
  &:hover {
    cursor: ${({ isUnderline }) => (isUnderline ? 'help' : 'none')};
  }
  &:hover + ${TooltipContent} {
    opacity: 1;
    visibility: visible;
  }
`;
