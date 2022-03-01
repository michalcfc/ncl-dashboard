import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceProps } from 'styled-system';
import { Box } from '@components/Box';
import { ListItemsWrapper, ListItem, ListText } from './List.styles';

import { ListProps } from './List.d';

type Props = SpaceProps & ListProps;

const List: React.FC<Props> = ({
  items,
  listStyle,
  noPadding,
  children,
  ...rest
}) => (

  <ListItemsWrapper
    listStyle={listStyle}
    {...rest}
  >
    {children}
    {items.map((item) => (
      <ListItem
        isMuted={item.icon && true}
        isIcon={item.icon && true}
        noPadding={noPadding}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          {item.icon
                && (
                <FontAwesomeIcon
                  icon={item.icon}
                  color="#94a3b8"
                />
                )}
          <ListText
            {...rest}
          >
            {item.name}
          </ListText>
        </Box>
      </ListItem>
    ))}
  </ListItemsWrapper>
);

export default List;
