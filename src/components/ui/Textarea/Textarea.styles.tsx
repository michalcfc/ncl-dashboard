import styled from 'styled-components';
import {
  space,
  layout,
  compose,
  border,
} from 'styled-system';

type DataProps = {
};

const textareaStyledSystem = compose(
  space,
  layout,
  border,
);

export const TextareaWrapper = styled.div<DataProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  ${textareaStyledSystem};
`;

export const InputStyle = styled.textarea<DataProps>`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: ${({ theme }) => `1px solid ${theme.colors.gray300}`};
  
  &:hover,
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }

  &:focus {
    outline: 0;
  }

`;
