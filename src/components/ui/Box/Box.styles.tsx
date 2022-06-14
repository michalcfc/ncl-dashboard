import styled, { css, CSSProperties } from 'styled-components';
import {
  BackgroundProps,
  background,
  BorderProps,
  border,
  BoxShadowProps,
  boxShadow,
  color,
  compose,
  LayoutProps,
  layout,
  FlexboxProps,
  flexbox,
  GridProps,
  grid,
  PositionProps,
  position,
  SpaceProps,
  space,
  system,
} from 'styled-system';

export type BoxProps = BackgroundProps &
BorderProps &
BoxShadowProps &
FlexboxProps &
GridProps &
LayoutProps &
PositionProps &
SpaceProps &
Pick<CSSProperties, 'transform' | 'transition' | 'textAlign'> &
{
  hoverEffect?: boolean
  noOfLines?: number
};

const boxStyledSystem = compose(
  background,
  border,
  boxShadow,
  color,
  layout,
  flexbox,
  grid,
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

export const BoxWrapper = styled.div<BoxProps>`
  ${boxStyledSystem}
  &:hover {
    cursor:  ${({ hoverEffect }) => hoverEffect && 'pointer'};
    background: ${({ theme, hoverEffect }) => hoverEffect && theme.colors.lightGray};
  }
  
  ${({ noOfLines }) => noOfLines && css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${noOfLines};
    -webkit-box-orient: vertical;
  `}
`;
