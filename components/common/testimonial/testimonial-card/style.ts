import { styled, css } from 'styled-components';
import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

type Variant = {
  variant: 1 | 2 | 3;
};

type StyledTestimonalCardProps = Variant & {
  height?: number;
  width?: number;
};

const getCardVariantStyles = (variant: Variant['variant']) =>
  ({
    1: css`
      border-radius: 8px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.04);
    `,
    2: css`
      text-align: center;
      border-radius: 8px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.04);
    `,
    3: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      --offset: 8px;
      width: calc(100vw - var(--offset) * 2);
      ${media.md`
        --offset: 100px;
      `}
    `,
  })[variant];

export const StyledTestimonalCard = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledTestimonalCardProps>([
    'height',
    'width',
    'variant',
  ]),
})<StyledTestimonalCardProps>`
  padding: 24px;

  ${({ height }) => (height ? `height: ${height}px;` : 'height: 100%;')}
  ${({ width }) => (width ? `width: ${width}px;` : 'width: 100%;')}

  ${({ variant }) => getCardVariantStyles(variant)}

  ${media.md`
    padding: 40px;
  `}
`;

const getCustomerVariantStyles = (variant: Variant['variant']) =>
  ({
    1: css`
      gap: 16px;
    `,
    2: css`
      gap: 4px;
      flex-direction: column;
    `,
    3: css`
      gap: 16px;
    `,
  })[variant];

export const StyledCustomer = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledTestimonalCardProps>([
    'height',
    'width',
    'variant',
  ]),
})<StyledTestimonalCardProps>`
  display: flex;
  align-items: center;

  ${({ variant }) => getCustomerVariantStyles(variant)}
`;
