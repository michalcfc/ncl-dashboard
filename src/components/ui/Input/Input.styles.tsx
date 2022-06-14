import styled from 'styled-components';
import {
  space,
  layout,
  compose,
} from 'styled-system';

type DataProps = {
  bg?: string
  borderSize?: number
  isActiveIcon?: boolean
};

const inputStyledSystem = compose(
  space,
  layout,
);

export const InputWrapper = styled.div<DataProps>`
  ${inputStyledSystem};
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const InputStyle = styled.input<DataProps>`
  border-radius: 0;
  text-shadow: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: ${({ theme }) => `1px solid ${theme.colors.gray300}`};
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }
  &:focus {
    outline: 0;
  }
`;
