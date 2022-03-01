import styled from 'styled-components';
import {
  space, SpaceProps, typography, TypographyProps,
} from 'styled-system';
import { mapToTheme as theme } from 'styled-map';

type DataProps = LinkProps & SpaceProps & TypographyProps;

type LinkProps = {
  type?: string
  noSpacing?: boolean
  textDecoration?: 'none' | 'underline'
  variant?: 'success' | 'warning' | 'danger' | 'dark'
};

export const LinkStyle = styled.a<DataProps>`
  ${space};
  ${typography};
  cursor: pointer;
  line-height: 1.25rem;
  display: ${({ type }) => (type === 'button'
      && 'inline-block')};
  border-radius:  ${({ type }) => (type === 'button'
      && theme('borderRadius', 'variant'))};
  color:  ${({ type }) => (type === 'button'
    ? theme('button.text', 'variant')
    : theme('colors', 'variant'))};
  background:  ${({ type }) => (type === 'button'
      && theme('button.background', 'variant'))};
  padding:  ${({ type }) => (type === 'button'
      && theme('button.size', 'variant'))};
  text-decoration: none;
  &:hover {
    background:  ${({ type }) => (type === 'button'
        && theme('button.backgroundHover', 'variant'))};
    text-decoration: ${({ textDecoration }) => (textDecoration === 'underline' ? 'underline' : 'none')};
  }
`;
