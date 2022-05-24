import styled, { css } from 'styled-components';
import breakpoint from '@utils/styles/breakpoints';

type DataProps = {
  view: 'fullWidth'
  | 'withAsides'
  | 'withLeftAside'
  | 'withRightAside'

};

const switchTheme = ({ view }) => {
  switch (view) {
    case 'fullWidth':
      return css`
      grid-template-areas:
        "ChatMain ChatMain ChatMain"
    `;
    case 'withAsides':
      return css`grid-template-columns: 22rem 1fr;
      grid-template-areas:
          "ChatAsideLeft ChatMain";
        @media ${breakpoint.device.xxl} {
          grid-template-columns: 22rem 1fr 22rem;
            grid-template-areas:
          "ChatAsideLeft ChatMain ChatAsideRight";
      }
    `;
    case 'withLeftAside':
      return css`
      grid-template-columns: 22rem 1fr;
        grid-template-areas:
          "ChatAsideLeft ChatMain ChatMain"
      `;
    case 'withRightAside':
      return css`
        grid-template-columns: 1fr 22rem;
        grid-template-areas:
          "ChatAsideLeft ChatMain ChatAsideRight"
      `;
    default:
      return css`
      grid-template-areas:
        "ChatAsideLeft ChatMain ChatAsideRight"
    `;
  }
};

export const ChatWindowWrapper = styled.div<DataProps>`
  display: grid;
  grid-gap: 1rem;
  height: 100%;
  overflow: hidden;
  grid-template-areas:
    "ChatMain";
  @media ${breakpoint.device.xl} {
    ${switchTheme};
  }
`;
