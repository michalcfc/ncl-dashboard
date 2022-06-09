import styled from 'styled-components';

type DataProps = {

};

export const AccordionButtonStyles = styled.button<DataProps>`
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  background: transparent;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;
