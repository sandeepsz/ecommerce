import { Carousel } from 'antd';
import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export const StyledCarousel = styled(Carousel).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ clearMargin?: boolean }>([
    'clearMargin',
  ]),
})<{ clearMargin?: boolean }>`
  .slick-list {
    margin: -16px -16px;
    padding: 16px 16px;
    margin-bottom: ${({ clearMargin }) => (clearMargin ? '-48px' : '24px')};
  }

  ${media.md`
    .slick-slide {
      margin: 0 16px 24px 16px;
    }
  
    .slick-dots {
      bottom: -24px;

       button {
        background: black !important;
        border-radius: 6px !important;
       }

      .slick-active {
        width: 30px;
        height: 8px;
        margin-right: 16px;
        button {
          width: 30px;
          height: 8px;
        }
      }
  
      li {
        width: 8px;
        height: 8px;
        button {
          width: 8px;
          height: 8px;
        }
      }
    }
  `}
`;
