import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

type CustomProps = {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'success' | 'warning' | 'danger' | 'glass' | 'info'
};

export type BadgeProps =
    SpaceProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    BoxShadowProps &
    PositionProps &
    CustomProps;
