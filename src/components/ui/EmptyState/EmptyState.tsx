import React from 'react';

// component
import { Text } from '@components/ui/Text';
import { Icon } from '@components/ui/Icon';
import { Grid } from '@components/ui/Grid';
import { Button } from '@components/ui/Button';
import { Heading } from '@components/ui/Heading';
import { FlexBox } from '@components/ui//FlexBox';

// utils
import { COLORS } from '@utils/styles/colors';
import { SPACING } from '@utils/styles/spacing';
import { EmptyStateD } from './EmptyState.d';

const EmptyState: React.FC<EmptyStateD> = ({
  title,
  desc,
  icon,
  actionButtons,
}) => (
  <Grid
    height="100%"
    py={SPACING['3xl']}
    alignItems="center"
    justifyItems="center"
  >
    <FlexBox
      textAlign="center"
      flexDirection="column"
    >
      {icon && (
      <Icon
        name={icon}
        size="4x"
        mb={SPACING.md}
        color={COLORS.lightGray}
      />
      )}
      <Heading type="h4" title={title} />
      <Text muted text={desc} />
      {actionButtons?.map((btn) => (
        <Button
          key={btn.id}
          mt={SPACING.md}
          name={btn.name}
          variant={btn.variant}
          onClick={btn.onClick}
        />
      ))}
    </FlexBox>
  </Grid>
);

export default EmptyState;
