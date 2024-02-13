import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledBlocks = styled.div`
  text-align: center;
`;

export const StyledNumberCell = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.md`
    height: 60px;
    width: 60px;
  `}
`;
