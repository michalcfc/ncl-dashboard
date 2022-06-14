import { useContext } from 'react';
import { ModalsContext } from './ConversationsModalContext';
import {
  ModalsStore,
} from './ConversationsModalContext.d';

export const useModalsContext = (): ModalsStore => {
  const context = useContext(ModalsContext);

  return context;
};

export const useCloseModal = () => {
  const { closeModal } = useModalsContext();

  return closeModal;
};

export const useOpenModal = () => {
  const { openModal } = useModalsContext();

  return openModal;
};
