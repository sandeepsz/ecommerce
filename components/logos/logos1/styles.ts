import { media } from '@/theme/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.token.black50};
  padding: 40px 16px;

  ${media.md`
    padding: 70px 50px; 
  `}
`;

export const Content = styled.div``;

export const Logo = styled.figure`
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
