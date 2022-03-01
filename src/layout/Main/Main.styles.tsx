import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: grid;
  grid-area: main;
`;

export const MainContainer = styled.div`
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.lg} 0`};
`;
