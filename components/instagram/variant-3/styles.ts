import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledInstagramGallery = styled.div`
  padding: 16px;
  ${media.md`
    padding: 0;
    padding-top: 52px;
  `}
`;
