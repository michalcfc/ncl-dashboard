import React from 'react';

import { Dropdown } from '@components/ui/Dropdown';
import { Avatar } from '@components/ui/Avatar';
import { Text } from '@components/ui/Text';
import { Box } from '@components/ui/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faCog,
  faLifeRing,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { DropdownMenu } from '@components/ui/Dropdown/DropdownMenu';
import { DropdownItem } from '@components/ui/Dropdown/DropdownItem';
import { Link } from '@components/ui/Link';
import { COLORS } from '@utils/styles/colors';
import { AccountMenuProps } from './AccountMenu.d';

const AccountMenu: React.FC<AccountMenuProps> = () => {
  const menuItems = [{
    id: 1,
    uri: '/profile',
    name: 'My profile',
    icon: faUserCircle,
    iconColor: COLORS.gray,
  },
  {
    id: 2,
    uri: '/settings',
    name: 'Settings',
    icon: faCog,
    iconColor: COLORS.gray,
  },
  {
    id: 3,
    uri: '/support',
    name: 'Support',
    icon: faLifeRing,
    iconColor: COLORS.gray,
  },
  {
    id: 4,
    uri: '/signin',
    name: 'Logout',
    icon: faSignOutAlt,
    iconColor: COLORS.red,
    borderTop: `1px solid ${COLORS.lightGray}`,
  },
  ];

  const renderCustomButton = () => (
    <Box
      display="flex"
      alignItems="center"
    >
      <Avatar
        size="xs"
        alt="Michal"
        uri="/img/users/user.jpg"
      />
      <Text mx={2}>
        Monic
      </Text>
      <FontAwesomeIcon
        size="lg"
        icon={faAngleDown}
      />
    </Box>
  );

  const customButton = renderCustomButton();

  return (
    <Dropdown
      customDropdownButton={customButton}
    >
      <DropdownMenu>
        {menuItems.map((menuItem) => (
          <DropdownItem
            key={menuItem.id}
            borderTop={menuItem?.borderTop}
          >
            <FontAwesomeIcon
              color={menuItem?.iconColor}
              icon={menuItem.icon}
            />
            <Link
              variant={menuItem.name.toLowerCase() === 'logout' ? 'danger' : 'text'}
              textDecoration="none"
              href={menuItem.uri}
            >
              <Text fontSize="sm">
                {menuItem.name}
              </Text>
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default AccountMenu;
