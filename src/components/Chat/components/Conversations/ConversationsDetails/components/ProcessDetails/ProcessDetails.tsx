import React from 'react';
import { Text } from '@components/ui/Text';
import { FONT_WEIGHTS } from '@utils/styles/fontWeights';
import { COLORS } from '@utils/styles/colors';
import {
  ProcessDetailsWrapper, ProcessStep,
} from './ProcessDetails.styles';

const ProcessDetails = () => {
  const steps = [
    {
      id: 1, name: 'accepted', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'completed', isCompleted: true,
    },
    {
      id: 2, name: 'waiting for payment', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'in progress', isCompleted: false,
    },
    {
      id: 3, name: 'done', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'waiting', isCompleted: false,
    },
  ];

  return (
    <ProcessDetailsWrapper>
      {steps.map((step) => (
        <ProcessStep isCompleted={step.isCompleted}>
          <Text color={step.status === 'waiting' && COLORS.gray300} fontWeight={FONT_WEIGHTS.bold} text={step.name} />
          <Text as="p" color={step.status === 'waiting' ? COLORS.gray300 : COLORS.gray} text={step.desc} />
        </ProcessStep>
      ))}
    </ProcessDetailsWrapper>

  );
};

export default ProcessDetails;
