import styled from 'styled-components';

export type ModalProps = {
  order?: number
  isOpen?: boolean
};

export const ModalWrapper = styled.div<ModalProps>`
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  position: fixed;
  padding-top: 3.5rem; 
  background-color: rgba(0,0,0,0.4);
  animation-duration: 0.4s;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation-name: ${({ theme }) => theme.animations.fadeIn};
  z-index: ${({ order }) => (order === 1 ? '1050' : '1040')};
`;

export const ModalOverlay = styled.div<ModalProps>`
  inset: 0px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div<ModalProps>`
  margin: auto;
  z-index: 1400;
  max-width: 34rem;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background: ${({ theme }) => theme.colors.white};
`;

export const ModalHeader = styled.div<ModalProps>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
`;

export const ModalBody = styled.div<ModalProps>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
`;

export const ModalFooter = styled.div<ModalProps>`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
`;
