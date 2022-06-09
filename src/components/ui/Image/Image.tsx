import React from 'react';

import { SpaceProps } from 'styled-system';

import { Img } from './Image.styles';
import { ImageProps } from './Image.d';

type Props = SpaceProps & ImageProps;

const Image: React.FC<Props> = ({
  hoverEffect,
  objectFit,
  ...rest
}) => (
  <Img
    objectFit={objectFit}
    hoverEffect={hoverEffect}
    {...rest}
  />
);

export default Image;
