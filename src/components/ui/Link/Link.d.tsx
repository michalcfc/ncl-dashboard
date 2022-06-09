import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { CSSProperties } from 'styled-components';
import { ButtonSizes, ButtonVariants } from '@components/ui/Button/types';

export interface CustomProps {
  size?: ButtonSizes
  name?: string
  href?: string
  type?: 'button'
  isAbsolute?: boolean
  textDecoration?: 'none' | 'underline'
  variant?: ButtonVariants
}

export type LinkD = SpaceProps &
BackgroundProps &
BorderProps &
LayoutProps &
CustomProps &
TypographyProps &
Pick<CSSProperties,
| 'textDecoration'
| 'textTransform'
| 'whiteSpace'
| 'textAlign'
| 'textOverflow'
| 'overflow'
>;
