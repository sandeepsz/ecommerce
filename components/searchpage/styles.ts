import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledSearchHeader = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;

  ${media.md`
    padding-top: 72px;
    padding-bottom: 64px;
    padding-left: 0;
    padding-right: 0;
  `};
`;
