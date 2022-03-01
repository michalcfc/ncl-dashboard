import { COLORS } from './colors';

export const ALERTS = {
  size: {
    default: '.75rem 1rem',
    link: '0',
    xs: '0.475rem 0.725rem',
    sm: '.75rem 1rem',
    md: '.75rem 1rem',
    lg: '.75rem 1rem',
    xl: '.75rem 1rem',
  },
  fontSize: {
    default: '.875rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '.875rem',
    lg: '1.125rem',
    xl: '1.375rem',
  },
  text: {
    default: `${COLORS.white}`,
    ghost: `${COLORS.black}`,
    outline: `${COLORS.black}`,
    link: `${COLORS.brand}`,
  },
  border: {
    success: 'transparent',
    danger: 'transparent',
    warning: 'transparent',
    outline: `${COLORS.black}`,
    default: 'transparent',
  },
  background: {
    success: `${COLORS.brand}`,
    primary: `${COLORS.brand}`,
    secondary: `${COLORS.black}`,
    ghost: 'none',
    danger: `${COLORS.red}`,
    warning: `${COLORS.orange}`,
    outline: 'none',
    link: 'none',
    default: '',
  },
};
