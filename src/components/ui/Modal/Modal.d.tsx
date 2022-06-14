import { ButtonSizes } from '@components/ui/Button/types';

type Buttons = {
  id: number
  name: string
  disabled?: boolean
  variant?: any
  size?: ButtonSizes
  onClick: () => void
};

export type ModalProps = {
  order?: number
  title: string
  isOpen?: boolean
  subtitle?: string
  actionButtons?: Buttons[]
  onClose: () => void
};
