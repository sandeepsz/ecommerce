import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledOrderRow = styled.div`
  padding-top: 16px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  gap: 8px;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.token.black3};

  ${media.md`
    padding-bottom: 16px;
    padding-left: 0;
    padding-right: 0;

    gap: 0;
    flex-direction: row;
  `}
`;

export const StyledOrderRowItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
