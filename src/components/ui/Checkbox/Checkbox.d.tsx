import React from 'react';

export interface CheckboxProps {
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
