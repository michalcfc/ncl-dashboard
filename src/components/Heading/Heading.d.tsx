import { StyledComponentPropsWithRef } from 'styled-components';
import { TextProps } from '@components/Text/Text.d';
import React from 'react';
import { SpaceProps } from 'styled-system';

type CustomProps = {
  title?: string
};

export type HeadingProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    C extends React.ComponentType<any> | keyof JSX.IntrinsicElements,
    > = TextProps & SpaceProps & CustomProps & StyledComponentPropsWithRef<C>;
