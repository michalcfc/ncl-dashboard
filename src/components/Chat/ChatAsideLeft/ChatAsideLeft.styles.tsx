import styled from 'styled-components';
import breakpoint from '@utils/styles/breakpoints';

type DataProps = {
};

export const ChatAsideLeftWrapper = styled.div<DataProps>`
    grid-area: ChatAsideLeft;
    overflow-y: auto;
    overflow: hidden;
    display: none;
    @media ${breakpoint.device.xl} {
      display: block;
    }
`;

export const ChatAsideLeftContent = styled.div<DataProps>`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: ${({ theme }) => theme.colors.white};
    box-shadow:  ${({ theme }) => theme.boxShadows.sm};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows.sm};
`;
