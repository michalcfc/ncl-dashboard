import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type DataProps = {
  src?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
};

type IconProps = DataProps & SpaceProps;

export const IconWrapper = styled.div<IconProps>`
  ${space};
`;
