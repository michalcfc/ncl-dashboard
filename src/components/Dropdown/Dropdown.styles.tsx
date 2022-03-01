import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type DataProps = {
  tabIndex?: any
  isDanger?: boolean
};

type DropdownProps = DataProps & LayoutProps;

export const DropdownWrapper = styled.div<DropdownProps>`
  ${layout};
  position: relative;
`;

export const DropdownContainer = styled.div<DataProps>`

`;
