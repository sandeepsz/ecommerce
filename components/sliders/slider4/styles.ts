import { styled } from 'styled-components';
import { media } from '@/theme/breakpoints';

export const Slider4Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding-top: 40px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.md`
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 52px;
    padding-right: 52px;
    
    gap: 32px;
  `}
`;

export const Slider4Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;
  `}
`;
