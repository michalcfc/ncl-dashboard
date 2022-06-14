import styled from 'styled-components';

type DataProps = {
  isCompleted?: boolean
};

export const ProcessDetailsWrapper = styled.div<DataProps>`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ProcessStep = styled.div<DataProps>`
  position: relative;
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
  padding-left: ${({ theme }) => theme.spacing.lg};
  &::after {
    content: "";
    width: 1px;
    background: ${({ theme }) => theme.colors.lightGray};
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
  &::before {
    border: ${({ theme }) => `1px solid ${theme.colors.gray300}`};
    background: ${({ theme, isCompleted }) => isCompleted && theme.colors.brand};
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
`;
