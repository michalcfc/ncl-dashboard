import styled from 'styled-components';

type DataProps = {
  isGuest?: boolean
};

export const MessageContainer = styled.div<DataProps>`
    display: flex;
    flex-direction: ${({ isGuest }) => isGuest && 'row-reverse'} ;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const MessageContent = styled.div<DataProps>`
    max-width: 49%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme, isGuest }) => (isGuest ? theme.colors.lightGray : theme.colors.brandLight)};
    border-radius: ${({ theme }) => theme.borderRadius.default};
`;
