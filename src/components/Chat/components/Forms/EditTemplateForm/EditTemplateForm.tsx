import React from 'react';

// components
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import { Textarea } from '@components/ui/Textarea';

// utils
import { SPACING } from '@utils/styles/spacing';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';
import { FlexBox } from '@components/ui/FlexBox';
import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';

const EditTemplateForm = () => {
  const openModal = useOpenModal();

  return (

    <>
      <Input label="Nazwa szablonu" />
      <Textarea
        style={{ height: '150px' }}
        label="Treść"
        placeholder="Wpisz treść..."
        onChange={() => {}}
      />
      <FlexBox alignItems="center">
        <Button
          mt={SPACING.md}
          mr={SPACING.md}
          name="Zapisz szablon"
          onClick={() => {}}
        />
        <Button
          variant="ghost"
          mt={SPACING.md}
          name="Wróć do listy szablonów"
          onClick={() => openModal({ modal: ModalTypes.SelectTemplate })}
        />
      </FlexBox>
    </>
  );
};

export default EditTemplateForm;
