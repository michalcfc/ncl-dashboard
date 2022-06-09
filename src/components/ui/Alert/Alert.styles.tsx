import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';

type DataProps = {
  variant?: 'success' | 'warning' | 'danger' | 'info'
};

export const AlertWrapper = styled.div<DataProps>`
  color: ${theme('alerts.text', 'variant')};
  padding: ${theme('alerts.size', 'variant')};
  border-radius: ${theme('alerts.background', 'variant')};
  background: ${theme('alerts.background', 'variant')};
`;

export const AlertContent = styled.div<DataProps>`

`;
