import styled from 'styled-components';
import breakpoint from '@utils/styles/breakpoints';

type DataProps = {
};

export const ChatAsideRightWrapper = styled.div<DataProps>`
    grid-area: ChatAsideRight;
    overflow-y: auto;
    overflow: hidden;
    display: none;
    @media ${breakpoint.device.xxl} {
      display: block;
    }
`;

export const ChatAsideRightContent = styled.div<DataProps>`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows.sm};
`;
