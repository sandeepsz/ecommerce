import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledBannerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.md`
    gap: 24px;
  `};
`;
