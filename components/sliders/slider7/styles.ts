import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledSliderCard = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: white;

  padding: 16px;
  max-width: 343px;

  ${media.md`
    bottom: 52px;
    left: 52px;
    padding: 40px;

    max-width: 546px;
  `}
`;
