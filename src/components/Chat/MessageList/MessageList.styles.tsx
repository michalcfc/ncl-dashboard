import styled from 'styled-components';

type DataProps = {
};

export const MessageListStyle = styled.div<DataProps>`
    flex-grow: 1;
    padding: ${({ theme }) => theme.spacing.md};
`;
