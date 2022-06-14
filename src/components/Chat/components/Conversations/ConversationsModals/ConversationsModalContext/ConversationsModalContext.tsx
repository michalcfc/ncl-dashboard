import { createContext } from 'react';

import {
  ModalState, ModalsStore,
} from './ConversationsModalContext.d';

export const closedModalState = {
  args: undefined,
  modal: null,
};

export const modalsInitialState: ModalState = closedModalState;

const modalsInitialStore: ModalsStore = {
  ...modalsInitialState,
  closeModal: () => null,
  openModal: () => null,
};

export const ModalsContext = createContext<ModalsStore>(modalsInitialStore);
