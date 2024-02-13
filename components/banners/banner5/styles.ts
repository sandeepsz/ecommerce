import { media } from '@/theme/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.token.black50};
  overflow: hidden;
  ${media.md`
    height: 484px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f6f6f6;
  `}
`;

export const Content = styled.div`
  max-width: 452px;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;

  ${media.md`
    padding: 0;
    margin-left: 54px;
  `}
`;

export const ImageWrapper = styled.figure`
  margin: 0;
  height: 100%;
`;
