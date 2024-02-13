import { media } from '@/theme/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 652px; */
  max-height: 790px;
  position: relative;
`;

export const ImageWrapper = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 32px;
  left: 24px;
  right: 24px;

  ${media.md`
    top: 48px;
    left: 48px;
    right: 48px;
  `}
`;
