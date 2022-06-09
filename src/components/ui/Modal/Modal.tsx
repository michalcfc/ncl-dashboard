import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
            type="h5"
            text={title}
            textAlign="left"
          />
          <Button
            variant="ghost"
            settings={{
              icon: {
                size: 'lg',
                name: faTimes,
                position: 'center',
              },
            }}
            onClick={() => onClose(false)}
          />
        </FlexBox>
        <Text muted text={subtitle} />
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        {actionButtons?.map((btn) => (
          <Button
            key={btn.id}
            name={btn.name}
            variant={btn.variant}
            onClick={btn.onClick}
            disabled={btn.disabled}
          />
        ))}
      </ModalFooter>
    </ModalContent>
  </ModalWrapper>

);

export default Modal;
