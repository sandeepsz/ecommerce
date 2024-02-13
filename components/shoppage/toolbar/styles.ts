import { css, styled } from 'styled-components';

import { media } from '@/theme/breakpoints';
import { CSSProperties } from 'react';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import { UnstyledButton } from '@/ui/button/styles';

export const StyledToolbar = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

type FlexProps = {
  gap?: CSSProperties['gap'];
};

export const Flex = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<FlexProps>(['gap']),
})<FlexProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: ${({ gap }) => `${gap}px` || 0};
`;

export const StyledLayoutButtonGroup = styled.div`
  dsplay: flex;
`;

type LayoutButtonProps = {
  isActive?: boolean;
};

export const StyledLayoutButton = styled.button.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<LayoutButtonProps>([
    'isActive',
  ]),
})<LayoutButtonProps>`
  background: none;
  padding: 7px 8.6px 6px 8.4px;
  border: 1px solid ${({ theme }) => theme.token.black2};
  cursor: pointer;

  --fill: #a7a7a7;

  &:hover {
    --fill: #121212;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          --fill: #121212;
          background: ${({ theme }) => theme.token.black1};
        `
      : css`
          background: none;
        `}

  ${media.md`
    padding: 8px 11px;
  `}
`;

export const StyledDivider = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  height: 1px;
  background: ${({ theme }) => theme.token.black2};
`;

export const StyledClearButton = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
