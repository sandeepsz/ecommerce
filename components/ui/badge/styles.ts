import { styled, css, type DefaultTheme } from 'styled-components';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

import type {
  StyledBadgeProps,
  BadgeSize,
  BadgeFill,
  BadgeColor,
  BadgeRoundness,
} from './types';

//
//
// TODO: add outline circle badge variants
//
//

const getSizes = (size: BadgeSize) =>
  ({
    small: css`
      padding-top: 2px;
      padding-bottom: 2px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 12px;
      line-height: 20px;

      --badge-circle-size: 45px;
    `,
    medium: css`
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 14px;
      padding-right: 14px;
      font-size: 14px;
      line-height: 22px;

      --badge-circle-size: 60px;
    `,
    large: css`
      padding: 4px 16px;
      font-size: 16px;
      line-height: 26px;

      --badge-circle-size: 65px;
    `,
  })[size];

const getColors = (color: BadgeColor, fill: BadgeFill, theme: DefaultTheme) =>
  ({
    light: css`
      ${fill === 'solid' &&
      css`
        color: ${theme.token.black9};
        background-color: white;
      `}
      ${fill === 'outline' &&
      css`
        color: white;
        background-color: none;
        border: 1px solid white;
      `}
    `,
    dark: css`
      ${fill === 'solid' &&
      css`
        color: white;
        background-color: ${theme.token.black9};
      `}
      ${fill === 'outline' &&
      css`
        color: ${theme.token.black9};
        background-color: none;
        border: 1px solid ${theme.token.black9};
      `}
    `,
  })[color];

const getRoundness = (roundness: BadgeRoundness) =>
  ({
    pill: css`
      border-radius: 100px;
    `,
    rounded: css`
      border-radius: 4px;
    `,
    sharp: css``,
    circle: css`
      height: var(--badge-circle-size);
      width: var(--badge-circle-size);
      border-radius: 100px;
    `,
  })[roundness];

export const StyledBadge = styled.span.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledBadgeProps>([
    'color',
    'size',
    'fill',
    'roundness',
  ]),
})<StyledBadgeProps>`
  font-family: var(--font-space-grotesk);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;

  ${({ size = 'medium' }) => getSizes(size)}
  ${({ color = 'light', fill = 'solid', theme }) =>
    getColors(color, fill, theme)}
  ${({ roundness = 'pill' }) => getRoundness(roundness)}
`;
