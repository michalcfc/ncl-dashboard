import styled from 'styled-components';
import breakpoint from '@utils/styles/breakpoints';
import { Button } from '@components/Button';

type DataProps = {
  isVisible?: boolean
  isMobile?: boolean
};

export const AsideWrapper = styled.aside<DataProps>`
  position: fixed;
  z-index: 1030;
  width: 15rem;
  grid-area: asideLeft; 
  transition: transform .3s;
  transform: ${({ isVisible, isMobile }) => ((isVisible || !isMobile)
    ? 'translateX(0rem)'
    : 'translateX(-16rem)')
};
`;

export const AsideContainer = styled.div<DataProps>`
  z-index: 999;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  transition: all .2s ease-in-out;
  color: ${({ theme }) => theme.textColor};
  @media ${breakpoint.device.lg} {
    left: 0;
    display: block;
    transform: translateX(0);
  }
`;

export const AsideCloseButton = styled(Button)<DataProps>`
  top: 0;
  left: 100%;
  width: 3rem;
  height: 3rem;
  margin: 1.6rem;
  position: absolute;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  box-shadow: ${({ theme }) => theme.boxShadows.default};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const AsideOverlay = styled.div<DataProps>`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 170;
  position: fixed;
  background: rgba(28,29,31,.8);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
