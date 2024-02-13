import Link, { type LinkProps } from 'next/link';
import styled from 'styled-components';
import { media } from '@/theme/breakpoints';

export const StyledCategoryCard = styled(Link)<LinkProps>`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledCategoryTag = styled.div`
  position: absolute;
  width: 204px;
  padding: 12px;
  text-align: center;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  bottom: 24px;

  ${media.md`
    bottom: 40px;
  `}
`;
