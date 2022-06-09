import React from 'react';

import { Dropdown } from '@components/ui/Dropdown';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { DropdownMenu } from '@components/ui/Dropdown/DropdownMenu';
import { DropdownItem } from '@components/ui/Dropdown/DropdownItem';
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
