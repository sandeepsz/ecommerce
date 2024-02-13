import { media } from '@/theme/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  max-width: max-content;
`;

export const CategoryTag = styled.div`
  position: absolute;
  bottom: 24px;
  width: 150px;
  text-align: center;
  background-color: #fff;
  padding: 4px;
  border-radius: 100px;

  left: 50%;
  transform: translateX(-50%);

  ${media.md`
    padding: 12px;
    bottom: 50px;
  `}
`;

export const ImageWrapper = styled.div``;
