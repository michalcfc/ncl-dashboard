import styled, { CSSProperties } from 'styled-components';
import { mapToTheme as theme } from 'styled-map';

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
import { BORDER_RADIUS } from '@utils/styles/borderRadius';

export type ImageProps = BackgroundProps &
BorderProps &
BoxShadowProps &
LayoutProps &
PositionProps &
SpaceProps &
Pick<CSSProperties, 'transform' | 'transition' | 'textAlign'> &
{

};

const badgeStyledSystem = compose(
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

export const BadgeWrapper = styled.div<ImageProps>`
  ${badgeStyledSystem};
  border-radius: ${BORDER_RADIUS.default};
  font-size: ${theme('badges.fontSize', 'size')};;
  padding: ${theme('badges.size', 'size')};
  color: ${theme('badges.text', 'variant')};
  background: ${theme('badges.background', 'variant')}
`;
