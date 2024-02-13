import { Modal } from 'antd';
import { styled } from 'styled-components';

import { media } from '@/theme/breakpoints';

export const StyledPopup = styled(Modal)`
  .ant-modal-content {
    border-radius: 0;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }

  ${media.md`
    .ant-modal-content {
      padding-top: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
      padding-right: 32px;
    }
  `}
`;
