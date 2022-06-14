import React from 'react';

import { SPACING } from '@utils/styles/spacing';
import { Button } from '@components/ui/Button';
import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';
import { TemplatesListD } from './TemplatesList.d';
import { TemplatesItem } from '../TemplatesItem';

// components

const TemplatesList = ({ templates }: TemplatesListD) => {
  const openCreateTemplateModal = useOpenModal();

  return (
    <div>
      {templates?.map((template) => (
        <TemplatesItem
          id={template.id}
          key={template.id}
          desc={template.desc}
          title={template.title}
        />
      ))}
      <Button
        mt={SPACING.md}
        name="Dodaj szablon"
        variant="outline"
        onClick={() => openCreateTemplateModal({ modal: ModalTypes.CreateTemplate })}
      />
    </div>

  );
};

export default TemplatesList;
