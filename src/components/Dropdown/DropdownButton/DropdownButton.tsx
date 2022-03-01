import React from 'react';

import { Button } from '@components/Button';

import { DropdownButtonProps } from './DropdownButton.d';

const DropdownButton: React.FC<DropdownButtonProps> = () => (
  <Button variant="ghost" onClick={() => console.log('click')} />
);

export default DropdownButton;
