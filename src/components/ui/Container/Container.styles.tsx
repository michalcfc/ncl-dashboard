import styled from 'styled-components';
import { space, compose } from 'styled-system';

const widgetProps = compose(
  space,
);

type DataProps = {};

export const ContainerStyles = styled.div<DataProps>`
    ${widgetProps};
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
`;
