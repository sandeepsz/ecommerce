import { Drawer } from 'antd';
import styled from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 16px;

    display: flex;
    flex-direction: column;

    ${media.md`
      padding: 24px;
    `};
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  ${media.md`
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 0;
  `}
`;
