import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// utils
import { SIZES } from '@utils/styles/sizes';
import { SPACING } from '@utils/styles/spacing';

// components
import { Text } from '@components/ui/Text';
import { Button } from '@components/ui/Button';
import { FlexBox } from '@components/ui/FlexBox';
import { Heading } from '@components/ui/Heading';
import { ModalProps } from './Modal.d';
import {
  ModalHeader,
  ModalContent,
  ModalWrapper,
  ModalBody,
  ModalFooter,
} from './Modal.styles';

const Modal: React.FC<ModalProps> = ({
  order,
  title,
  subtitle,
  isOpen,
  onClose,
  actionButtons,
  children,
}) => (

  <ModalWrapper
    order={order}
    isOpen={isOpen}
  >
    <ModalContent>
      <ModalHeader>
        <FlexBox
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading
            type="h4"
            text={title}
            textAlign="left"
          />
          <Button
            variant="text"
            settings={{
              icon: {
                size: 'lg',
                color: 'lightGray',
                name: faTimes,
                position: 'center',
              },
            }}
            onClick={onClose}
          />
        </FlexBox>
        <Text muted text={subtitle} />
      </ModalHeader>
      {children && (
      <ModalBody>
        {children}
      </ModalBody>
      )}
      {actionButtons && (
      <ModalFooter>
        {actionButtons?.map((btn) => (
          <Button
            key={btn.id}
            width={SIZES.full}
            mt={btn.id !== 1
                    && SPACING.sm}
            name={btn.name}
            variant={btn.variant}
            onClick={btn.onClick}
            disabled={btn.disabled}
          />
        ))}
      </ModalFooter>
      )}
    </ModalContent>
  </ModalWrapper>

);

export default Modal;
