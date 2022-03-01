import styled from 'styled-components';

type DataProps = {
  id?: string
  htmlFor?: string
};

export const CheckboxWrapper = styled.div<DataProps>`
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const CheckboxInput = styled.input<DataProps>`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label<DataProps>`
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0.2rem 0.5rem;
`;
