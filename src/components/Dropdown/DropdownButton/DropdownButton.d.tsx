import {
  BorderProps,
} from 'styled-system';

type CustomProps = {
  hoverEffect?: boolean,
};

export type DropdownButtonProps =
    BorderProps &
    CustomProps;
