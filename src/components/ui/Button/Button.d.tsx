import { ButtonHTMLAttributes } from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  SpaceProps,
  BackgroundProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
} from 'styled-system';
import { IconPosition, ButtonSizes, ButtonVariants } from './types';

type IconSettings = {
  size?: SizeProp
  name: IconDefinition,
  position: IconPosition
};

type Settings = {
  icon: IconSettings
};

type CustomProps = {
  color?: string
  variant?: ButtonVariants
  settings?: Settings
  buttonBackground?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  size?: ButtonSizes
};

export type ButtonProps =
    SpaceProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    CustomProps &
    ColorProps &
    TypographyProps &
    ButtonHTMLAttributes<HTMLButtonElement>;
