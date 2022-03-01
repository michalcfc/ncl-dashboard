import { StyledComponentPropsWithRef } from 'styled-components';
import React from 'react';
import { Text } from '@components/Text';
import { FONT_SIZES } from '@utils/styles/fontSizes';
import { TextProps } from '../Text/Text.d';

const Label: React.FC<
TextProps & StyledComponentPropsWithRef<'span'>
> = (props) => {
  const isMobile = false;

  return (
    <Text
      fontSize={isMobile ? `${FONT_SIZES.sm}` : `${FONT_SIZES.md}`}
      {...props}
    />
  );
};

export default Label;
