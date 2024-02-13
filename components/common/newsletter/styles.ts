import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled, { type DefaultTheme, css } from 'styled-components';

const getFills = (fill: 'outline' | 'solid', theme: DefaultTheme) =>
  ({
    outline: css`
      border: ${({ theme }) => `1px solid ${theme.token.black9}`};
    `,
    solid: css`
      background-color: ${theme.token.black50};
    `,
  })[fill];

type WrapperProps = CommonProps & {
  fill: 'outline' | 'solid';
};

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<WrapperProps>(['variant']),
})<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ fill, theme }) => getFills(fill, theme)}

  ${({ variant }) =>
    variant === 2 &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${media.md`
    padding-left: 52px;

    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  `}
`;

interface CommonProps {
  variant?: 1 | 2;
}

export const Content = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<CommonProps>(['variant']),
})<CommonProps>`
  width: 100%;

  ${({ variant }) =>
    variant === 1
      ? css`
          padding: 16px 16px 32px;
          ${media.md`
            max-width: 456px;
            padding: 0;
          `}
        `
      : css`
          text-align: center;
          margin: 0 auto;
          padding: 16px;
          ${media.md`
            max-width: 488px;
          `}
          position: relative;
        `}
`;

export const ImageWrapper = styled.figure.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<CommonProps>(['variant']),
})<CommonProps>`
  margin: 0;
  position: relative;
  overflow: hidden;
  margin-left: -16px;
  margin-right: -16px;

  ${media.md`
    margin-left: 52px;
    margin-right: 0;
  `}

  ${({ variant }) =>
    variant === 1
      ? css`
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;

          height: 254px;
          width: 100%;
          width: calc(100% + 32px);

          ${media.md`
            border-top-right-radius: 0;
            border-top-left-radius: 0;

            height: 439px;
            width: 632px;
          `}
        `
      : css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        `}
`;
