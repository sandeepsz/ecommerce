import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledOrderSummary = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.token.black3};

  ${media.md`
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

export const StyledCard = styled.div`
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.token.black3};

  ${media.md`
    padding-left: 24px;
    padding-right: 24px;
  `}
`;

export const StyledDividerText = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.token.black2};
  }
`;

export const StyledCardTitle = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;

  background: white;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
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
