import { Carousel } from 'antd';
import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledCarousel = styled(Carousel)`
  --gap: 8px;

  .slick-slide {
    margin: 0 var(--gap);
  }

  ${media.md`
    --gap: 16px;
  `}
`;

export const StyledNavigationArrow = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
