import { Table } from 'antd';
import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    border-radius: 0 !important;
    background: white;
    border-bottom: 1px solid ${({ theme }) => theme.token.black3};
    border-left: 1px solid ${({ theme }) => theme.token.black3};
    padding-top: 10px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 22px;

    ${media.md`
      padding-bottom: 20px;
    `}

    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.token.black3};
    }
  }

  .ant-table-content {
    border-top: 1px solid ${({ theme }) => theme.token.black3} !important;
  }
`;
