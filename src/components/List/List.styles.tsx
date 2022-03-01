import styled from 'styled-components';

import { space } from 'styled-system';

type DataProps = {
  isIcon?: boolean
  isMuted?: boolean
  listStyle?: string
  noPadding?: boolean
};

export const ListItemsWrapper = styled.ul<DataProps>`
  ${space};
  list-style: ${({ listStyle }) => listStyle};
  padding-left: ${({ theme, listStyle }) => (listStyle !== 'none' ? theme.spacing.md : '0px')};
`;

export const ListItem = styled.li<DataProps>`
  color: ${({ theme, isIcon }) => isIcon && theme.colors.darkGray};
  margin-left: ${({ theme, isIcon }) => isIcon && theme.spacing.xs};
  &:not(:first-child) {
    padding: ${({ theme, noPadding }) => !noPadding && `${theme.spacing.xs} 0`};
  }
`;
export const ListText = styled.span<DataProps>`
  ${space};
`;
