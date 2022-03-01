import React from 'react';
import { SpaceProps } from 'styled-system';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconWrapper } from '@components/Icon/Icon.styles';
import { IconProps } from './Icon.d';

type Props = IconProps & SpaceProps;

const Icon: React.FC<Props> = ({
  name,
  color,
  ...rest
}) => (
  <IconWrapper {...rest}>
    <FontAwesomeIcon
      icon={name}
      color={color}
    />
  </IconWrapper>
);

export default Icon;
