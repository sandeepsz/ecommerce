import { media } from '@/theme/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 652px; */
  max-height: 379px;
  position: relative;
`;

export const ImageWrapper = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;

  ${media.md`
    bottom: 32px;
    left: 32px;
    right: 32px;
  `}
`;
