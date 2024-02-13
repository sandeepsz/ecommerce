import { styled } from 'styled-components';

import Container from '@/ui/container';

import { media } from '@/theme/breakpoints';

export const StyledAccountPageHeder = styled(Container)`
  padding-top: 32px;
  padding-top: 32px;

  ${media.md`
    padding-top: 52px;
    padding-bottom: 52px;
  `}
`;

export const StyledAccountPageContent = styled(Container)`
  padding-top: 0px;
  padding-bottom: 80px;

  ${media.md`
    padding-top: 52px;
    padding-bottom: 250px;
  `}
`;
