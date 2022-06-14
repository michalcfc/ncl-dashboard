import React from 'react';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { Modal } from '@components/ui/Modal';
import { EmptyState } from '@components/ui/EmptyState';
import {
  useCloseModal,
} from '../ConversationsModalContext/hooks';
import {
  TemplatesList,
} from './TemplatesList';

const TemplatesModal = () => {
  const closeModal = useCloseModal();

  const templates = [
    { id: 1, title: 'Template one', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    { id: 2, title: 'Template two', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  ];

  const actionButtons = [{
    id: '1',
    name: 'Dodaj szablon',
    onClick: () => {},
  }];

  return (
    <Modal title="Twoje szablony" subtitle="Kliknij na szablon, aby wybrać." onClose={closeModal}>
      {!templates.length
        ? (
          <EmptyState
            icon={faCommentAlt}
            title="Brak szablonów"
            desc="Nie masz jeszcze dodanych szablonów"
            actionButtons={actionButtons}
          />
        )
        : (
          <TemplatesList
            templates={templates}
          />
        )}
    </Modal>
  );
};

export default TemplatesModal;
