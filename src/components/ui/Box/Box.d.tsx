import {
  CSSProperties,
} from 'styled-components';

import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

type CustomProps = {
  noOfLines?: number
  hoverEffect?: boolean,
};

export type BoxProps =
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    BoxShadowProps &
    GridProps &
    PositionProps &
    CustomProps &
    Pick<
    CSSProperties,
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'textOverflow'
    | 'overflow'
    >;
