import React from 'react';
import { Heading } from '@components/Heading';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@components/Button';
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
  isOpen,
  onClose,
  children,
}) => (

  <ModalWrapper
    order={order}
    isOpen={isOpen}
  >
    <ModalContent>
      <ModalHeader>
        <Heading
          type="h5"
          text={title}
          textAlign="left"
        />
        <Button
          variant="ghost"
          icon={faTimes}
          onClick={() => onClose(false)}
        />
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        footer
      </ModalFooter>
    </ModalContent>
  </ModalWrapper>

);

export default Modal;
