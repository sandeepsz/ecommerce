import { css, styled } from 'styled-components';
import { Row } from 'antd';

import { media } from '@/theme/breakpoints';

import { VariantProps } from '.';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

const getPadding = ({
  switchMobile = 'small',
}: {
  switchMobile: VariantProps['switchMobile'];
}) =>
  ({
    small: css`
      padding-top: 16px;
    `,
    large: css`
      padding-top: 16px;
    `,
  })[switchMobile];

export const StyledCartGroup = styled(Row).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>([
    'switchMobile',
  ]),
})<VariantProps>`
  ${({ switchMobile }) =>
    switchMobile
      ? getPadding({ switchMobile })
      : css`
          padding-top: 16px;
          ${media.md`
            padding-top: 24px;
          `}
        `};
`;

const getWidth = ({
  switchMobile = 'small',
}: {
  switchMobile: VariantProps['switchMobile'];
}) =>
  ({
    small: css``,
    large: css`
      ${media.md`
        width: 376px;
      `}
    `,
  })[switchMobile];

export const StyledProductInfo = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>([
    'switchMobile',
  ]),
})<VariantProps>`
  width: 100%;
  display: flex;
  gap: 16px;

  ${({ switchMobile }) => getWidth({ switchMobile })}
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
