import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type DataProps = {

};

type DropdownProps = LayoutProps & DataProps;

export const DropdownMenuWrapper = styled.ul<DropdownProps>`
  ${layout};
  min-width: 10rem;
  position: absolute;
  right: 2px;
  left: auto;
  bottom: auto;
  padding: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 15px 1px rgb(69 65 78 / 20%);
  border-radius:  ${({ theme }) => theme.borderRadius.default};
`;
