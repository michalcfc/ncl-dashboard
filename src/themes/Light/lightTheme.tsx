import { DefaultTheme } from 'styled-components';
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { BUTTONS } from '@utils/styles/buttons';
import { AVATAR_SIZES } from '@utils/styles/avatarSizes';
import { BOX_SHADOWS } from '@utils/styles/boxShadows';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';
import { ALERTS } from '@utils/styles/alerts';
import { BADGES } from '@utils/styles/badges';
import { ANIMATIONS } from '@utils/styles/animations';

export const lightTheme: DefaultTheme = {
  textColor: '#222',
  // background: '#f2f4f6',
  // background: '#f1f5f9',
  background: '#f2f5fa',
  borderRadius: {
    ...BORDER_RADIUS,
  },
  colors: {
    ...COLORS,
  },
  boxShadows: {
    ...BOX_SHADOWS,
  },
  spacing: {
    ...SPACING,
  },
  fontWeights: {
    ...FONT_WEIGHTS,
  },
  fontSizes: {
    ...FONT_SIZES,
  },
  buttons: {
    ...BUTTONS,
  },
  alerts: {
    ...ALERTS,
  },
  badges: {
    ...BADGES,
  },
  avatarSize: {
    ...AVATAR_SIZES,
  },
  animations: {
    ...ANIMATIONS,
  },
};
