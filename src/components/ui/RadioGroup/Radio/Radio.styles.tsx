import styled, { css } from 'styled-components';
import {
  space,
  border,
  compose,
  SpaceProps,
  BorderProps,
} from 'styled-system';

type CustomProps = {
  isBorder?: boolean
  isChecked?: boolean
};

export type RadioD =
    SpaceProps &
    CustomProps &
    BorderProps;

const radioStyledSystem = compose(
  border,
  space,
);

export const RadioWrapper = styled.div<RadioD>`
  ${radioStyledSystem};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const RadioLabel = styled.label<RadioD>`
  gap: .475rem;
  width: 100%;
  display: grid;
  line-height: 1;
  cursor: pointer;
  grid-template-columns: 1em auto;
  
  ${({ isBorder }) => isBorder && css`
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  `}
  
  ${({ isBorder, isChecked }) => isBorder && isChecked && css`
    border-color: ${({ theme }) => theme.colors.brand};
    background: ${({ theme }) => theme.colors.lightBrand};
  `}
`;

export const RadioInput = styled.input<RadioD>`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};

  font: inherit;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  transform: translateY(-0.075em);
  color: ${({ theme }) => theme.colors.gray};
  border: ${({ theme }) => `0.10em solid ${theme.colors.gray}`};

  display: grid;
  place-content: center;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: ${({ theme }) => `inset 1em 1em ${theme.colors.brand}`};
  }
  &:checked::before {
    transform: scale(1);
  }
`;
