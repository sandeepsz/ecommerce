import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  height: 100%;
  padding: 16px 0;

  ${media.md`
    gap: 32px;
    padding: 0;
  `}
`;

export const StyledImagePlaceholder = styled.div`
  position: relative;
  height: 430px;
  margin-left: -16px;
  margin-right: -16px;

  ${media.md`
    height: 100vh;
    margin-left: -52px;
    margin-right: 0;
  `}
`;
