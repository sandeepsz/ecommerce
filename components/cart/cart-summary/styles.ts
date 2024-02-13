import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledCartSummary = styled.div`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.token.black3};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  ${media.md`
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

export const InfoField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 13px;
  padding-bottom: 13px;

  border-bottom: 1px solid ${({ theme }) => theme.token.black2};

  &:last-child {
    border-bottom: none;
  }
`;
