import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface Items {
  id: number
  name: string
  isIcon?: boolean
  icon: IconDefinition
}

export interface ListProps {
  items: Items[]
  listStyle?: string
  noPadding?: boolean
  children?: React.ReactNode
}
