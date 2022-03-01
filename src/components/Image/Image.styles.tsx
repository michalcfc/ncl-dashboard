import styled, { CSSProperties } from 'styled-components';
import {
  space,
  layout,
  LayoutProps,
  compose,
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  PositionProps,
  SpaceProps,
  background,
  border,
  boxShadow,
  color,
  position,
  system,
} from 'styled-system';

export type ImageProps = BackgroundProps &
BorderProps &
BoxShadowProps &
LayoutProps &
PositionProps &
SpaceProps &
Pick<CSSProperties, 'transform' | 'transition' | 'textAlign'> &
{
  hoverEffect?: boolean
  objectFit?: 'cover'
};

const imageStyledSystem = compose(
  background,
  border,
  boxShadow,
  color,
  layout,
  position,
  space,
  system({
    textAlign: true,
    transform: true,
    transition: true,
    overflow: true,
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
  }),
);

export const Img = styled.img<ImageProps>`
  ${imageStyledSystem};
`;
