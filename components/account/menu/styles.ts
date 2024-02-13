import Link from 'next/link';

import { css, styled } from 'styled-components';

import { UnstyledButton } from '@/ui/button/styles';

import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 16px;

  ${media.md`
    padding-top: 0;
    gap: 32px
  `}
`;

export const StyledMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMenuItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;

  ${media.md`
    padding-bottom: 0;
  `}
`;

type StyledMenuButtonProps = {
  isActive?: boolean;
};

export const StyledMenuButton = styled(Link).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledMenuButtonProps>([
    'isActive',
  ]),
})<StyledMenuButtonProps>`
  padding-bottom: 8px;
  font-family: var(--font-space-grotesk);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.token.black6};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.token.black9};
      border-bottom: 1px solid ${theme.token.black9};
    `}

  &:hover {
    color: ${({ theme }) => theme.token.black9};
  }

  ${media.md`
    font-size: 18px;
    line-height: 32px;
  `}
`;

export const IconBox = styled(UnstyledButton)`
  height: 30px;
  width: 30px;
  padding: 7px;

  position: absolute;
  bottom: 0;
  right: 0;

  border-radius: 125px;
  opacity: 0.8;
  background: ${({ theme }) => theme.token.black9};
`;
