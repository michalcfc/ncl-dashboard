import styled from 'styled-components';
import { Textarea } from '@components/ui/Textarea';

type DataProps = {};

export const MessageInputWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    padding: ${({ theme }) => `0 ${theme.spacing.xs}`};
    margin: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const MessageInputStyle = styled(Textarea)<DataProps>`
     display: flex;
    flex-grow: 1;
    border-color: transparent;
    padding: ${({ theme }) => theme.spacing.xs};
      &:hover,  
      &:focus {
          border-color: transparent;
        }
`;
