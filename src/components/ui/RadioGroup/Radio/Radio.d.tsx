import {
  SpaceProps,
  BorderProps,
} from 'styled-system';

export interface CustomD {
  label: string
  value?: string
  isBorder?: boolean
}

export type RadioD =
    CustomD &
    SpaceProps &
    BorderProps;
