import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { LayoutProps } from 'styled-system';

type CustomProps = {
  icon?: IconDefinition
  placeholder?: string
  customDropdownButton?: JSX.Element
};

export type DropdownProps = CustomProps & LayoutProps;
