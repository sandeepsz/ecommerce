import { css, styled } from 'styled-components';

import { UnstyledButton } from '@/ui/button/styles';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export type Size = 'small' | 'large';

export type Variant = 'circle' | 'square';

type StyledColorSwatchProps = {
  size: Size;
  variant: Variant;
  color: string;
  isActive?: boolean;
};

//
//
// TODO: add square variant
//
//
const getVariants = ({
  variant,
  size,
  isActive,
  color,
}: StyledColorSwatchProps) =>
  ({
    small: css`
      height: 14px;
      width: 14px;
      border-radius: 14px;

      ${variant === 'circle' &&
      css`
        ${({ theme }) =>
          isActive
            ? css`
                border: ${isActive
                  ? `1px solid ${theme.token.black5}`
                  : 'none'};
                &::after {
                  position: absolute;
                  content: '';
                  height: 10px;
                  width: 10px;
                  border-radius: 10px;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: ${color};
                }
              `
            : css`
                background: ${color};
              `}
      `}

      ${variant === 'square' && css``}
    `,

    large: css`
      ${variant === 'circle' &&
      css`
        height: 38px;
        width: 38px;
        border-radius: 38px;
        ${({ theme }) =>
          isActive
            ? css`
                border: ${isActive
                  ? `1px solid ${theme.token.black5}`
                  : 'none'};
                &::after {
                  position: absolute;
                  content: '';
                  height: 30px;
                  width: 30px;
                  border-radius: 30px;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background: ${color};
                }
              `
            : css`
                background: ${color};
              `}
      `}

      ${variant === 'square' && css``}
    `,
  })[size];

export const StyledColorSwatch = styled(UnstyledButton).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledColorSwatchProps>([
    'size',
    'variant',
    'color',
    'isActive',
  ]),
})<StyledColorSwatchProps>`
  position: relative;

  ${({ variant, size, color, isActive }) =>
    getVariants({ variant, size, color, isActive })}
`;
