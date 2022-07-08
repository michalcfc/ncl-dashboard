import styled from 'styled-components';
import { Box } from '@components/ui/Box';

export const CardNewsWrapper = styled(Box)`
  position: relative;
  height: 12rem;
  overflow: hidden;
  &:before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .45;
    position: absolute;
    background: linear-gradient(215deg,#fff 0%,#000 60%,#000 100%);
  }
`;
