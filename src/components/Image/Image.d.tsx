import {
  ImgHTMLAttributes,
} from 'react';

import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

type CustomProps = {
  objectFit?: 'cover'
  hoverEffect?: boolean,
};

export type ImageProps =
    SpaceProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    BoxShadowProps &
    PositionProps &
    CustomProps &
    ImgHTMLAttributes<HTMLImageElement>;
