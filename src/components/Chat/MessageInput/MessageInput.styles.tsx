import styled from 'styled-components';
import { Textarea } from '@components/Textarea';

type DataProps = {
};

export const MessageInputContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing.sm};
    justify-content: space-between
`;

export const MessageInputStyle = styled(Textarea)<DataProps>`
    flex: 1 0 0;
  padding: ${({ theme }) => theme.spacing.xs};
`;
