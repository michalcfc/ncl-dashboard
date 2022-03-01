import {
  CSSProperties,
  StyledComponentPropsWithRef,
} from 'styled-components';
import {
  ColorProps, SpaceProps,
  TextShadowProps,
  TypographyProps,
} from 'styled-system';

type CustomProps = {
  as?: any,
  muted?: boolean
  text?: string
};

export type TextProps = ColorProps &
TextShadowProps &
TypographyProps &
CustomProps &
SpaceProps &
Pick<
CSSProperties,
| 'textDecoration'
| 'textDecorationStyle'
| 'textTransform'
| 'whiteSpace'
| 'textOverflow'
| 'overflow'
> &
StyledComponentPropsWithRef<'span'>;
