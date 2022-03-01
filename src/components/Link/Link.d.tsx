import { TypographyProps } from 'styled-system';

export interface CustomProps {
  name?: string
  href?: string
  type?: 'button'
  textDecoration?: 'none' | 'underline'
  variant?: 'success' | 'warning' | 'danger' | 'dark'
}

export type LinkData = TypographyProps & CustomProps;
