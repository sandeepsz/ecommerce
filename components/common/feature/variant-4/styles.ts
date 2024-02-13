import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledImagePlaceholder = styled.div`
  position: relative;
  margin-left: -16px;
  margin-right: -16px;
  height: 329px;

  ${media.md`
    margin-left: 0;
    margin-right: 0;
    height: 600px;
  `}
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  ${media.md`
    max-width: 456px;
  `}
`;
