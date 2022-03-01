import React, { Fragment } from 'react';

import {
  useLocation,
} from 'react-router-dom';

import { SpaceProps } from 'styled-system';
import { routes } from '@routes';
import { NavItem, NavItemIcon, NavLink } from '@layout/Nav/Nav.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// components
import { Link } from '@components/Link';
import { Image } from '@components/Image';
import { Nav } from '@layout/Nav';
import { Box } from '@components/Box';

import { useWindowSize } from '@hooks/useWindowSize';
import {
  AsideCloseButton,
  AsideContainer,
  AsideOverlay,
  AsideWrapper,
} from './AsideLeft.styles';
import { AsideLeftProps } from './AsideLeft.d';

type Props = AsideLeftProps & SpaceProps;

const AsideLeft: React.FC<Props> = ({
  isSidebarOpen,
  setSidebarOpen,
}) => {
  const isMobile = useWindowSize();

  const { pathname } = useLocation();

  const hasChildren = (linkChildren) => {
    const children = Object.values(routes)
      .filter((route) => linkChildren
        .includes(route.name));

    return children;
  };

  return (

    <>
      <AsideOverlay
        isVisible={isSidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />

      <AsideWrapper
        isMobile={isMobile}
        isVisible={isSidebarOpen}
      >

        <AsideCloseButton
          variant="ghost"
          isVisible={isSidebarOpen}
          onClick={() => setSidebarOpen(false)}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faTimes}
          />
        </AsideCloseButton>

        <AsideContainer
          isVisible={isSidebarOpen}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="/">
              <Image
                m={3}
                height="40px"
                width="134px"
                alt="noclegowo"
                src="/img/logo.svg"
              />
            </Link>
          </Box>
          <Nav>
            {Object.values(routes)
              .filter((link) => link.type === 'sidebar')
              .map((link) => (
                <Fragment key={link.name}>
                  <NavItem
                    key={link.name}
                  >
                    <NavLink
                      href={link.path}
                      variant="dark"
                      textDecoration="none"
                      currentPage={link.path === pathname}
                    >
                      <div>
                        <NavItemIcon
                          mx={3}
                          size="lg"
                          icon={link.icon}
                        />
                        <span>
                          {link.name}
                        </span>
                      </div>
                      {hasChildren(link.children).length ? (
                        <NavItemIcon
                          mr={2}
                          size="xs"
                          icon={faChevronDown}
                        />
                      ) : ''}
                    </NavLink>
                  </NavItem>
                  {hasChildren(link.children) && ''}
                </Fragment>
              ))}
          </Nav>
        </AsideContainer>
      </AsideWrapper>
    </>
  );
};

export default AsideLeft;
