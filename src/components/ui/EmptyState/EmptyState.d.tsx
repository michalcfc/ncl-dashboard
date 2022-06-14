import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ButtonProps } from '@components/ui/Button/Button.d';

export interface EmptyStateD {
  desc: string
  img?: string
  title: string
  icon?: IconDefinition
  actionButtons?: ButtonProps[]
}
