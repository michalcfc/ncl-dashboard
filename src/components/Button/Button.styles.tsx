import styled from 'styled-components';
import {
  space,
  layout,
  system,
  compose,
  border,
  background,
} from 'styled-system';

import { mapToTheme as theme } from 'styled-map';

import { ButtonProps } from '@components/Button/Button.d';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type DataProps = {
  isName?: string
};

const buttonStyledSystem = compose(
  system({
    overflow: true,
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
    textAlign: true,
  }),
  space,
  layout,
  border,
  background,
);

export const ButtonWrapper = styled.button<ButtonProps>`
  ${buttonStyledSystem};
  cursor: pointer;
  letter-spacing: 0.05em;
  border: ${theme('button.border', 'variant')};
  border-radius: ${theme('borderRadius', 'variant')};
  color: ${theme('button.text', 'variant')};
  padding: ${theme('button.size', 'size')};
  font-size: ${theme('button.fontSize', 'size')};
  background: ${theme('button.background', 'variant')};
  &:hover {
    text-decoration: ${({ variant }) => variant === 'link' && 'underline'};
    background:  ${theme('button.backgroundHover', 'variant')};
  }
`;

export const ButtonIcon = styled(FontAwesomeIcon)<DataProps>`
  margin-left: ${({ isName }) => isName && '.475rem'};
`;
