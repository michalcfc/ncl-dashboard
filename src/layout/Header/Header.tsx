import React from 'react';

import {
  faEnvelope,
  faBell,
  faMoon,
  faSun,
} from '@fortawesome/free-regular-svg-icons';

import {
  faAngleDown, faBars,
} from '@fortawesome/free-solid-svg-icons';

// components
import { Box } from '@components/Box';
import { NotificationsDropdown } from '@components/NotificationsDropdown';
import { InboxDropdown } from '@components/InboxDropdown';
import { AccountMenu } from '@components/AccountMenu';
import { Button } from '@components/Button';
import { Nav } from '@layout/Nav';
import { DarkModeSwitcher } from '@components/DarkModeSwitcher';
import { NavItem } from '@layout/Nav/NavItem';
import { useWindowSize } from '@hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { reservations } from '../../lib/data/db.json';
import {
  HeaderWrapper,
  HeaderContent,
} from './Header.styles';

import { HeaderProps } from './Header.d';

const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  setSidebarOpen,
}) => {
  const isMobile = useWindowSize();

  const getAllMessages = () => {
    const arr = [];
    reservations.conversations.forEach((c) => {
      c.messages.map((m) => (
        arr.push(m)
      ));
    });
    return arr;
  };

  const NAV_ITEMS = [
    {
      name: 'messages',
      icon: faEnvelope,
      component: <InboxDropdown
        messages={getAllMessages()}
      />,
    },
    {
      name: 'notifications',
      icon: faBell,
      component: <NotificationsDropdown />,
    },
    {
      name: 'darkMode',
      icon: theme === 'light' ? faMoon : faSun,
      component: <DarkModeSwitcher
        theme={theme}
        toggleTheme={toggleTheme}
      />,
    },
    {
      name: 'profile',
      icon: faAngleDown,
      component: <AccountMenu />,
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderContent>
        {isMobile && (
        <Button
          variant="ghost"
          onClick={() => setSidebarOpen(true)}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faBars}
          />
        </Button>
        )}
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Nav
            isHorizontal
          >
            {NAV_ITEMS.map((navItem) => (
              <NavItem
                isHorizontal
                key={navItem.name}
                icon={navItem.icon}
                component={navItem?.component}
              />
            ))}
          </Nav>
        </Box>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
