import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';
import Container from '@/ui/container';

export const StyledContainer = styled.div`
  background: ${({ theme }) => theme.token.red1};
`;

export const StyledHero = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;

  padding-top: 0;
  padding-bottom: 0;
  padding-right: 0;
  padding-left: 0;

  ${media.md`
    padding-left: 52px;
    margin-top: -68px;
    grid-template-columns: 1fr 1fr;
 `}
`;

export const StyledContent = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 24px 16px 16px 16px;

  ${media.md`
    order: 1;
    // margin-left: 52px;
    // padding: 0 0 52px 0;
    padding: 0;
    max-width: 538px;
  `}
`;

export const StyledImage = styled.div`
  order: 1;
  position: relative;
  height: 350px;

  ${media.md`
    height: 800px;
 `}

  @media (min-width: 1440px) {
    margin-right: -48px;
  }
`;
