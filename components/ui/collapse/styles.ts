import { Collapse } from 'antd';
import styled from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledCollapse = styled(Collapse)`
  .ant-collapse-header {
    padding-top: 24px !important;
    padding-bottom: 12px !important;
  }

  ${media.md`
    .ant-collapse-header {
        padding-top: 32px !important;
    }
  `}

  .ant-collapse-item {
    border-bottom: 1px solid ${({ theme }) => theme.token.black3} !important;
  }

  .ant-collapse-header-text {
    flex: 1 !important;
  }

  .ant-collapse-content-box {
    padding-top: 0 !important;
    padding-bottom: 12px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
