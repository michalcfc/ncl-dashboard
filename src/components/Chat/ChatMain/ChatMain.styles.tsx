import styled from 'styled-components';

type DataProps = {
};

export const ChatMainWrapper = styled.div<DataProps>`
    grid-area: ChatMain;
`;

export const ChatMainContent = styled.div<DataProps>`
    display: flex;
    height: 100%;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows.sm};
`;
