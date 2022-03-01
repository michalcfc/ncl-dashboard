import { Keyframes } from 'styled-components';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AnimationName =
    | 'fadeIn'
    | 'fadeOut'
    | 'partialFadeIn'
    | 'partialFadeOut'
    | 'slideIn'
    | 'slideOut';
export type ThemeAnimations = Record<AnimationName, Keyframes>;
