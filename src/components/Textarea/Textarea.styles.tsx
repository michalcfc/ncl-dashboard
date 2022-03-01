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

export const TextareaStyle = styled.textarea<DataProps>`
  ${textareaStyledSystem};
  display: flex;
  position: relative;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: ${({ theme }) => `1 px solid ${theme.colors.lightGray}`};
`;
