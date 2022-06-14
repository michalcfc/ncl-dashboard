import React, { useCallback, useMemo, useState } from 'react';

import { MODAL_COMPONENTS } from './helpers';
import { ConversationsModalTypes } from './types';
import { ModalsContext, modalsInitialState } from './ConversationsModalContext';
import { OpenedModalState } from './ConversationsModalContext/ConversationsModalContext.d';

const ConversationsModals: React.FC<ConversationsModalTypes> = ({
  children,
}) => {
  const [modalState, setModalState] = useState(modalsInitialState);

  const closeModal = useCallback(() => setModalState({
    args: undefined,
    modal: null,
  }), []);

  const openModal = useCallback((state: OpenedModalState) => setModalState(state), []);

  const renderCurrentModalType = () => {
    const ModalComponent = MODAL_COMPONENTS[modalState.modal];
    if (!modalState.modal || !ModalComponent) {
      return null;
    }
    return <ModalComponent />;
  };

  const renderModal = renderCurrentModalType();

  const providerValue = useMemo(
    () => ({ ...modalState, closeModal, openModal }),
    [modalState],
  );

  return (
    <ModalsContext.Provider value={providerValue}>
      <>
        {children}
        {renderModal}
      </>
    </ModalsContext.Provider>
  );
};

export default ConversationsModals;
