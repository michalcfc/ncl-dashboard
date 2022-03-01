import {
  CSSProperties,
  StyledComponentPropsWithRef,
} from 'styled-components';
import {
  ColorProps,
  TextShadowProps,
  TypographyProps,
} from 'styled-system';

type CustomProps = {
  as?: any,
};

export type TextProps = ColorProps &
TextShadowProps &
TypographyProps &
CustomProps &
Pick<
CSSProperties,
| 'textDecoration'
| 'textTransform'
| 'whiteSpace'
| 'textOverflow'
| 'overflow'
> &
StyledComponentPropsWithRef<'span'>;
