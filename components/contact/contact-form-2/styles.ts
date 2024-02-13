import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledImagePlaceholder = styled.div`
  position: relative;
  height: 366px;
  width: 100%;
  z-index: -1;

  ${media.md`
    height: 500px;
  `}
`;

export const StyledForm = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  background: white;

  ${media.md`
    padding-top: 52px;
    padding-bottom: 52px;
    padding-left: 52px;
    padding-right: 52px;
  `}
`;
