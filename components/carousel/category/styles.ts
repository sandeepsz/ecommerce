import styled, { css } from 'styled-components';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

import { media } from '@/theme/breakpoints';

export type Gap = 'small' | 'medium';

type CarouselWrapperProps = {
  gap: Gap;
};

const getGap = (gap: Gap) =>
  ({
    small: css`
      .slick-slide {
        margin: 0 8px; // half of 16px
      }

      .slick-list {
        margin-left: -8px;
        margin-right: -8px;
        padding-left: 8px;
      }

      ${media.md`
      .slick-slide {
        margin: 0 16px; // half of 32px
      }
    
      .slick-list {
        margin-left: -16px;
        margin-right: -16px;
        padding-left: 16px;
      }
   `}
    `,
    medium: css`
      .slick-slide {
        margin: 0 12px; // half of 24px
      }

      .slick-list {
        margin-left: 0 -12px;
        margin-right: -12px;
        padding-left: 12px;
      }

      ${media.md`
        .slick-slide {
          margin: 0 32px; // half of 64px
        }

        .slick-list {
          margin-left: -32px;
          margin-right: -32px;
          padding-left: 32px;
        }
     `}
    `,
  })[gap];

export const CarouselWrapper = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<CarouselWrapperProps>([
    'gap',
  ]),
})<CarouselWrapperProps>`
  ${({ gap }) => getGap(gap)}
`;

export const NavigationArrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
