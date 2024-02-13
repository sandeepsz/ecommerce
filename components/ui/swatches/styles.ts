import { css, styled } from 'styled-components';

import { UnstyledButton } from '@/components/ui/button/styles';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export type Rounded = 'sharp' | 'rounded' | 'circle';

type StyledButtonSwatchProps = {
  rounded: Rounded;
  isActive?: boolean;
};

const getRoundedStyle = ({ rounded }: { rounded: Rounded }) =>
  ({
    sharp: css``,
    rounded: css`
      border-radius: 4px;
    `,
    circle: css`
      width: 38px;
      border-radius: 100px;
    `,
  })[rounded];

export const StyledButtonSwatch = styled(UnstyledButton).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledButtonSwatchProps>([
    'rounded',
    'isActive',
  ]),
})<StyledButtonSwatchProps>`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 15px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ rounded }) => getRoundedStyle({ rounded })}
  border: 1px solid
    ${({ theme, isActive }) =>
    isActive ? theme.token.black9 : theme.token.black3};
`;

export const StyledClearButton = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
