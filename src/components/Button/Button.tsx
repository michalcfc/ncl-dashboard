import React from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';

import {
  ButtonIcon,
  ButtonWrapper,
} from './Button.styles';

import { ButtonProps } from './Button.d';

type Props = ButtonProps & SpaceProps & LayoutProps;

const Button: React.FC<Props> = ({
  icon,
  size,
  name,
  onClick,
  variant,
  onMouseEnter,
  onMouseLeave,
  children,
  ...rest
}) => (
  <ButtonWrapper
    size={variant === 'link'
      ? 'link'
      : size}
    variant={variant}
    onClick={onClick}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
    {...rest}
  >
    {children || name}
    {icon && (
      <ButtonIcon
        size="lg"
        icon={icon}
      />
    )}
  </ButtonWrapper>
);

export default Button;
