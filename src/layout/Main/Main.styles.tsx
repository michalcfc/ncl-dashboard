import styled from 'styled-components';
import breakpoint from '@utils/styles/breakpoints';

export const MainWrapper = styled.main`
  display: grid;
  grid-area: main;
`;

export const MainContainer = styled.div`
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  @media ${breakpoint.device.lg} {
    padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  }
`;
