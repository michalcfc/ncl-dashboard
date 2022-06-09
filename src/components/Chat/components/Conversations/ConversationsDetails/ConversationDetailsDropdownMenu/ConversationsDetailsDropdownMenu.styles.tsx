import styled from 'styled-components';

type DataProps = {
};

export const ChatTopWrapper = styled.div<DataProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
`;
