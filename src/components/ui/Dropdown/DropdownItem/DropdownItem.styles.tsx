import styled from 'styled-components';
import { border, BorderProps } from 'styled-system';

type DataProps = {

};

type Props = BorderProps & DataProps;

export const DropdownItemWrapper = styled.li<Props>`
  ${border};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  
  & svg {
    margin-right: ${({ theme }) => theme.fontSizes.xs};
  }
`;
