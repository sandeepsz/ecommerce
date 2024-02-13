import { styled } from 'styled-components';
import { media } from '@/theme/breakpoints';

export const StyledNotFound = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.md`
     width: 880px;
  `}
`;
