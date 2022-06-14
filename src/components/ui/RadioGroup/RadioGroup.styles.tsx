import styled from 'styled-components';

export type RadioGroupD = {};

export const RadioGroupWrapper = styled.div<RadioGroupD>`
    display: flex;
    flex-direction: column;
`;

export const RadioGroupLabel = styled.label<RadioGroupD>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
