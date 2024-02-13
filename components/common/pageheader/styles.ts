import { Col, Row } from 'antd';
import { css, styled } from 'styled-components';

import Container from '@/ui/container';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { media } from '@/theme/breakpoints';

import type { Variant, Position } from '.';

type VariantProps = {
  variant: Variant;
};

const getVariantStyles = ({ variant }: { variant: Variant }) =>
  ({
    boxed: css``,
    full: css`
      max-width: 100%;
      padding: 0;

      ${media.md`
        margin-top: -68px;
        padding-bottom: 8px;
      `}
    `,
    simple: css`
      padding: 0;
    `,
  })[variant];

export const StyledContainer = styled(Container).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>(['variant']),
})<VariantProps>`
  ${({ variant }) => getVariantStyles({ variant })}
`;

export const StyledPageHeader = styled.div`
  position: relative;
`;

export const StyledImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const getVariantStylesWrapper = ({ variant }: { variant: Variant }) =>
  ({
    boxed: css``,
    full: css`
      max-width: 1440px;
      margin: 0 auto;
      ${media.md`
        padding-top: 68px;
      `}
    `,
    simple: css``,
  })[variant];

export const StyledContentWrapper = styled(Row).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>(['variant']),
})<VariantProps>`
  ${({ variant }) => getVariantStylesWrapper({ variant })}
`;

type StyledContentProps = {
  position: Position;
  variant: Variant;
};

const getPositionStyles = ({ position }: { position: Position }) =>
  ({
    center: css`
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    `,
    left: css`
      padding-left: 16px;
      padding-right: 16px;

      ${media.md`
        padding-left: 56px;
        padding-right: 56px;
      `}
    `,
  })[position];

const getContentVariantStyles = ({ variant }: { variant: Variant }) =>
  ({
    boxed: css``,
    full: css``,
    simple: css`
      padding-top: 32px;
      padding-bottom: 32px;
      padding-left: 16px;
      padding-right: 16px;

      ${media.md`
        padding-top: 52px;
        padding-bottom: 52px;
      `}
    `,
  })[variant];

export const StyledContent = styled(Col).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledContentProps>([
    'position',
  ]),
})<StyledContentProps>`
  padding-top: 52px;
  padding-bottom: 52px;

  ${({ position }) => getPositionStyles({ position })}
  ${({ variant }) => getContentVariantStyles({ variant })}
`;
