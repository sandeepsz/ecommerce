import styled from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledMapPlaceholder = styled.div`
  position: relative;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  ${media.md`
    position: static;
  `}
`;
