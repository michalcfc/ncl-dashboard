import React from 'react';

import { Box } from '@components/Box';
import { UserStatusDotProps } from './UserStatusDot.d';

const UserStatusDot: React.FC<UserStatusDotProps> = () => (

  <Box
    background="#1ee0ac"
    bottom="0"
    border="2px solid #fff"
    right="0"
    width=".75rem"
    height=".75rem"
    borderRadius="50%"
    position="absolute"
  />

);

export default UserStatusDot;
