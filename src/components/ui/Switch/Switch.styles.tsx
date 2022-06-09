import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type DataProps = {
  toggle?: boolean
};

type SwitchProps = DataProps & SpaceProps;

export const SwitchSlider = styled.span<SwitchProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
  background-color: ${({ theme, toggle }) => (toggle ? theme.colors.green : theme.colors.lightGray)};
  border-radius: 15px;
  transition: 0.4s;
  &:before {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${({ toggle, theme }) => (toggle ? theme.colors.white : theme.colors.gray)};
    transition: 0.4s;
  }
`;

export const SwitchInput = styled.input<SwitchProps>`
  &:checked + ${SwitchSlider} {
    background-color: ${({ theme }) => theme.colors.green};
  }
  &:checked + ${SwitchSlider}:before {
    transform: translateX(23.4px);
  } 
`;

export const SwitchWrapper = styled.label<SwitchProps>`
 ${space};
 position: relative;
 display: inline-block;
 width: 48px;
 height: 24px;

 & ${SwitchInput} {
  opacity: 0;
  width: 0;
  height: 0;
 }
`;
