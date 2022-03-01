import React from 'react';

import { Dropdown } from '@components/Dropdown';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { DropdownMenu } from '@components/Dropdown/DropdownMenu';
import { DropdownItem } from '@components/Dropdown/DropdownItem';
import { NotificationsDropdownProps } from './NotificationsDropdown.d';

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = () => (
  <Dropdown
    icon={faBell}
  >
    <DropdownMenu>
      <DropdownItem>
        Notify
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export default NotificationsDropdown;
