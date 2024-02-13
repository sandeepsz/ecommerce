import { Col, Row } from 'antd';
import { css, styled } from 'styled-components';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { media } from '@/theme/breakpoints';

import type { Variant, Position } from '.';

type VariantProps = {
  variant: Variant;
};

const getVariantStyles = ({ variant }: { variant: Variant }) =>
  ({
    1: css``,
    2: css`
      max-width: 100%;
      padding: 0;

      ${media.md`
        margin-top: -68px;
        padding-bottom: 8px;
      `}
    `,
  })[variant];

export const StyledContainer = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>(['variant']),
})<VariantProps>`
  height: 100%;
  ${({ variant }) => getVariantStyles({ variant })}
`;

const getContainerVariantStyles = ({ variant }: { variant: Variant }) =>
  ({
    1: css`
      height: 550px;
    `,
    2: css`
      ${media.md`
        height: 600px;
      `}
    `,
  })[variant];

export const StyledPageHeader = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>(['variant']),
})<VariantProps>`
  position: relative;
  height: 450px;

  ${({ variant }) => getContainerVariantStyles({ variant })}
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
    1: css`
      justify-content: center;
    `,
    2: css`
      max-width: 1440px;
      margin: 0 auto;
      ${media.md`
        padding-top: 68px;
      `}
    `,
  })[variant];

export const StyledContentWrapper = styled(Row).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<VariantProps>(['variant']),
})<VariantProps>`
  display: flex;
  height: 100%;
  align-items: center;
  ${({ variant }) => getVariantStylesWrapper({ variant })}
`;

type StyledContentProps = {
  position: Position;
};

const getPositionStyles = ({ position }: { position: Position }) =>
  ({
    center: css`
      text-align: center;
    `,
    left: css``,
  })[position];

export const StyledContent = styled(Col).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledContentProps>([
    'position',
  ]),
})<StyledContentProps>`
  ${({ position }) => getPositionStyles({ position })}
`;
