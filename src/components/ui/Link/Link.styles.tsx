import styled, { css, CSSProperties } from 'styled-components';
import { mapToTheme as theme } from 'styled-map';
import {
  space,
  system,
  variant,
  compose,
  fontSize,
  fontWeight,
  background,
  borderRadius,
  buttonStyle,
  BorderProps,
  BoxShadowProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  BackgroundProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import { ButtonSizes, ButtonVariants } from '@components/ui/Button/types';

const buttonSize = variant({
  prop: 'size',
  key: 'buttons.size',
});

type CustomProps = {
  type?: 'button'
  size?: ButtonSizes
  isAbsolute?: boolean
  textDecoration?: 'none' | 'underline'
  variant?: ButtonVariants
};

export type LinkProps =
    BorderProps &
    BoxShadowProps &
    BackgroundProps &
    FlexboxProps &
    GridProps &
    LayoutProps &
    PositionProps &
    SpaceProps &
    CustomProps &
    Pick<CSSProperties,
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'textOverflow'
    | 'overflow'
    >;

const linkStyledSystem = compose(
  space,
  fontSize,
  background,
  fontWeight,
  borderRadius,
  system({
    overflow: true,
    textOverflow: true,
    textDecoration: true,
    whiteSpace: true,
    textAlign: true,
    transform: true,
    transition: true,
  }),
);

const buttonStyledSystem = compose(
  buttonSize,
  buttonStyle,
);

export const LinkStyle = styled.a<LinkProps>`
  ${linkStyledSystem};
  cursor: pointer;
  line-height: 1.25rem;
  text-decoration: none;

  ${({ type }) => type === 'button' && css`
    display: grid;
    place-items: center;
    border-radius: .42rem;
    ${buttonStyledSystem};
  `}

  ${({ isAbsolute }) => isAbsolute && css`
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
  `}

  &:hover {
    background:  ${({ type }) => (type === 'button'
    && theme('buttons.backgroundHover', 'variant'))};
    text-decoration: ${({ textDecoration }) => (textDecoration === 'underline' ? 'underline' : 'none')};
  }
`;

LinkStyle.defaultProps = {
  size: 'sm',
  variant: 'text',
};
