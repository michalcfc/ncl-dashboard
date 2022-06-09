import React from 'react';
import { SpaceProps } from 'styled-system';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '@components/ui/Icon/Icon.styles';
import { IconProps } from './Icon.d';

type Props = IconProps & SpaceProps;

const Icon: React.FC<Props> = ({
  name,
  color,
  size,
  ...rest
}) => (
  <IconWrapper {...rest}>
    <FontAwesomeIcon
      size={size}
      icon={name}
      color={color}
    />
  </IconWrapper>
);

export default Icon;
