import styled from 'styled-components';
import breakpoint from '@utils/styles/breakpoints';

type DataProps = {
  isScrolled?: boolean
  isHomePage?: boolean
};

export const HeaderWrapper = styled.header<DataProps>`
  width: 100%;
  z-index: 99;
  height: 76px;
  grid-area: header;
  transition: all 0.5s ease-in;
`;

export const HeaderContent = styled.div<DataProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  @media ${breakpoint.device.lg} {
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  }
`;
