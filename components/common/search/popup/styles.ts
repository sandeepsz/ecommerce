import { media } from '@/theme/breakpoints';
import { Drawer } from 'antd';
import { styled } from 'styled-components';

export const StyledPopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;

  ${media.md`
    padding-top: 18px;
    padding-bottom: 18px;
  `}
`;

export const StyledSearchInput = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  ${media.md`
    align-items: center;
  `}
`;

export const StyledSearchResults = styled.div``;
