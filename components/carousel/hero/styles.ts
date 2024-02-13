import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled, { css } from 'styled-components';

interface WrapperProps {
  height?: string;
}

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<WrapperProps>(['height']),
})<WrapperProps>`
  width: 100%;
  height: 100%;

  .slick-dots {
    bottom: 16px;
    .slick-active {
      width: 26px;
      height: 6px;
      margin-right: 10px;
      button {
        width: 26px;
        height: 6px;
      }
    }

    li {
      width: 6px;
      height: 6px;
      button {
        width: 6px;
        height: 6px;
        border-radius: 8px;
      }
    }
  }

  ${media.md`
    .slick-dots {
      bottom: 32px;
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

  ${({ height = '456px' }) => css`
    img {
      height: ${height};
      object-fit: cover;
    }
  `}

  img {
    ${media.md`
        height: 600px;
      `}

    ${media.lg`
        height: 100%;
      `}
  }
`;
