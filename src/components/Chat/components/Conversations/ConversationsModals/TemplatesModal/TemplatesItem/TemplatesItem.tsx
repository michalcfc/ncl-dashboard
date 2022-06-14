import React from 'react';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Box } from '@components/ui/Box';
import { Text } from '@components/ui/Text';
import { Button } from '@components/ui/Button';
import { FlexBox } from '@components/ui/FlexBox';
import { Heading } from '@components/ui/Heading';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { BORDER_RADIUS } from '@utils/styles/borderRadius';
import { Tooltip } from '@components/ui/Tooltip';
import {
  useOpenModal,
} from '@components/Chat/components/Conversations/ConversationsModals/ConversationsModalContext/hooks';
import { ModalTypes } from '@components/Chat/components/Conversations/ConversationsModals/types';
import { TemplatesItemD } from './TemplatesItem.d';

const TemplatesItem = ({
  id,
  desc,
  title,
}: TemplatesItemD) => {
  const openEditModal = useOpenModal();

  return (
    <Box
      hoverEffect
      p={SPACING.md}
      alignItems="center"
      mt={id !== 1 && SPACING.md}
      borderRadius={BORDER_RADIUS.base}
      border={`1px solid ${COLORS.lightGray}`}
    >
      <FlexBox alignItems="center">
        <div>

          <FlexBox alignItems="center">
            <Heading type="h5" title={title} />
          </FlexBox>

          <Box
            noOfLines={2}
          >
            <Text muted text={desc} />
          </Box>
        </div>
        <Tooltip label="Edytuj">
          <Button
            ml={SPACING.xs}
            variant="icon"
            settings={{
              icon: {
                size: '1x',
                name: faPencilAlt,
                position: 'center',
              },
            }}
            onClick={() => openEditModal({ modal: ModalTypes.EditTemplate })}
          />
        </Tooltip>
        <Tooltip label="Usuń">
          <Button
            ml={SPACING.md}
            variant="icon"
            settings={{
              icon: {
                size: '1x',
                name: faTrashAlt,
                position: 'center',
              },
            }}
            onClick={() => openEditModal({ modal: ModalTypes.DeleteTemplateModal })}
          />
        </Tooltip>
      </FlexBox>
    </Box>

  );
};

export default TemplatesItem;
