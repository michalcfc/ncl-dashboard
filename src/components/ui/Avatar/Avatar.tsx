import React from 'react';
import { SpaceProps } from 'styled-system';
import { AvatarProps } from './Avatar.d';

import {
  AvatarWrapper,
  AvatarImg, AvatarDefault,
} from './Avatar.styles';

type Props = AvatarProps & SpaceProps;

const Avatar: React.FC<Props> = ({
  alt,
  uri,
  size,
  ...rest
}) => (
  <AvatarWrapper size={size} {...rest}>
    {uri ? (
      <AvatarImg
        src={uri}
        alt={alt}
      />
    ) : (
      <AvatarDefault>
        {alt}
      </AvatarDefault>
    )}
  </AvatarWrapper>

);

export default Avatar;
