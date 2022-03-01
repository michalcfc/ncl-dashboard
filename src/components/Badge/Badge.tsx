import React from 'react';

import { BadgeWrapper } from './Badge.styles';
import { BadgeProps } from './Badge.d';

const Badge: React.FC<BadgeProps> = ({
  size = 'sm',
  name,
  ...rest
}) => (
  <BadgeWrapper
    size={size}
    {...rest}
  >
    {name}
  </BadgeWrapper>
);

export default Badge;
