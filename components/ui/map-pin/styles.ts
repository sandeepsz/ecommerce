import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledMapPin = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 47px;
  width: 47px;
  background: ${({ theme }) => theme.token.black9};
  border-radius: 50%;

  --pin-border-size: 8px;

  &:after {
    content: '';
    position: absolute;
    top: calc(100% - var(--pin-border-size) / 4);
    left: 50%;
    transform: translateX(-50%);
    border-top: var(--pin-border-size) solid
      ${({ theme }) => theme.token.black9};
    border-left: var(--pin-border-size) solid transparent;
    border-right: var(--pin-border-size) solid transparent;
  }

  ${media.md`
    height: 63px;
    width: 63px;

    --pin-border-size: 12px;
  `}
`;
