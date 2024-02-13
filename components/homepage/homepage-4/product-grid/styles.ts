import { styled } from 'styled-components';
import { media } from '@/theme/breakpoints';

export const StyledProductGridNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.4px;

  ${media.md`
    gap: 12px;
    font-size: 26px;
    line-height: 38px;
    letter-spacing: 0;
  `};
`;
