import {
  BorderProps,
} from 'styled-system';

type CustomProps = {
  hoverEffect?: boolean,
};

export type DropdownItemProps =
    BorderProps &
    CustomProps;
