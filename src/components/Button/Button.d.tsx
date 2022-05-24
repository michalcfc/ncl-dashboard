import React, { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { CSSProperties } from 'styled-components';

type CustomProps = {
  name?: string
  color?: string
  variant?: 'success' | 'primary' | 'secondary' | 'danger' | 'ghost' | 'link'
  icon?: IconDefinition
  buttonBackground?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  size?: 'link' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  onClick: React.MouseEventHandler<HTMLElement>
};

export type ButtonProps =
    SpaceProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    CustomProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<
    CSSProperties,
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'textOverflow'
    | 'overflow'
    >;
