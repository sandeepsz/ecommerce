import { media } from '@/theme/breakpoints';
import { styled } from 'styled-components';

export const StyledWishlistItem = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.token.black3};

  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.md`
    gap: 0;
    flex-direction: row;
  `}
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  ${media.md`
    width: 376px;
  `}
`;
