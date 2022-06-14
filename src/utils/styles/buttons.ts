import { lighten } from 'polished';
import { SPACING } from '@utils/styles/spacing';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { COLORS } from './colors';

export const BUTTONS = {

  size: {
    default: {
      height: '2.5rem',
      fontSize: FONT_SIZES.sm,
      padding: `0 ${SPACING.lg}`,
    },
    xs: {
      height: '2.5rem',
      fontSize: FONT_SIZES.xs,
      padding: `0 ${SPACING.md}`,
    },
    sm: {
      height: '2.5rem',
      fontSize: FONT_SIZES.xs,
      padding: `0 ${SPACING.md}`,
    },
    md: {
      height: '2.5rem',
      fontSize: FONT_SIZES.sm,
      padding: `0 ${SPACING.md}`,

    },
    lg: {
      height: '3rem',
      fontSize: FONT_SIZES.lg,
      padding: `0 ${SPACING.lg}`,
    },
  },

  primary: {
    color: COLORS.white,
    background: COLORS.brand,
  },

  secondary: {
    color: COLORS.white,
    background: COLORS.black,
  },

  success: {
    color: COLORS.white,
    background: COLORS.brand,
  },

  danger: {
    color: COLORS.white,
    background: COLORS.red,
  },

  outline: {
    color: COLORS.black,
    background: 'transparent',
    border: `1px solid ${COLORS.black}`,
  },

  ghost: {
    color: COLORS.black,
    background: COLORS.lightGray,
  },

  text: {
    padding: 0,
    background: 'transparent',
  },

  link: {
    padding: 0,
    color: COLORS.brand,
    background: 'transparent',
  },

  border: {
    success: 'transparent',
    danger: 'transparent',
    warning: 'transparent',
    text: 'transparent',
    link: 'transparent',
    outline: '1px solid',
    default: 'transparent',
  },

  colorHover: {
    link: 'inherit',
    text: 'current',
    icon: 'current',
    ghost: 'current',
    outline: COLORS.white,
  },

  borderHover: {
    success: 'transparent',
    danger: 'transparent',
    warning: 'transparent',
    text: 'transparent',
    ghost: 'transparent',
    link: 'transparent',
    outline: `1px solid ${COLORS.brand}`,
    default: 'transparent',
  },

  background: {
    text: 'none',
    link: 'none',
    ghost: 'none',
    default: COLORS.brand,
    success: COLORS.brand,
    primary: COLORS.brand,
    secondary: COLORS.black,
    danger: COLORS.red,
    warning: COLORS.orange,
    outline: COLORS.lightBlue,
  },

  backgroundHover: {
    text: lighten(0.1, COLORS.lightGray),
    link: lighten(0.1, COLORS.lightGray),
    icon: lighten(0.1, COLORS.lightBlue),
    danger: lighten(0.1, COLORS.red),
    success: lighten(0.1, COLORS.brand),
    primary: lighten(0.1, COLORS.brand),
    secondary: lighten(0.1, COLORS.black),
    ghost: COLORS.lightBlue,
    outline: lighten(0.1, COLORS.brand),
  },
};
