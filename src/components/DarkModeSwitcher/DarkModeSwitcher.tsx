import React from 'react';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@components/Button';
import {
  DarkModeSwitcherWrapper,
} from './DarkModeSwitcher.styles';

import { DarkModeSwitcherProps } from './DarkModeSwitcher.d';

const DarkModeSwitcher: React.FC<DarkModeSwitcherProps> = ({
  theme,
  toggleTheme,
}) => (
  <DarkModeSwitcherWrapper>
    <Button
      variant="ghost"
      onClick={() => toggleTheme()}
    >
      <FontAwesomeIcon
        size="lg"
        icon={theme === 'light' ? faMoon : faSun}
      />
    </Button>
  </DarkModeSwitcherWrapper>
);

export default DarkModeSwitcher;
