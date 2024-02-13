import { media } from '@/theme/breakpoints';
import { ThemeConfig } from 'antd';
import { createGlobalStyle } from 'styled-components';

type Props = {
  theme?: ThemeConfig;
};

const GlobalStyles = createGlobalStyle<Props>`
  body {
    margin: 0;
    font-family: var(--font-inter);
  }

  input, textarea {
    font-family: var(--font-inter);
  }

  * {
    box-sizing: border-box;
  }

  .ant-form-item-label{
    label{
      font-family: var(--font-inter);
      color: ${({ theme }) => theme.token.colorText};
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;

      ${media.md`
        font-size: 16px;
        line-height: 26px;
      `}
    }
  }

  .ant-form-item-required::before {
    color: ${({ theme }) => theme.token.colorText}  !important;
  }

  .ant-form-item-explain-error{
    margin-top: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.token.black7}  !important;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .ant-form-item {
    margin: 0;
  }

  .ant-collapse-header{
    padding: 10px 0px !important;
  }

  .ant-collapse-item{
    border-bottom: 1px solid ${({ theme }) => theme.token.black3} !important;
  }

  .ant-collapse>.ant-collapse-item:last-child{
    border-radius: 0px !important;
  }

  .ant-divider{
    background-color: ${({ theme }) => theme.token.black3} !important;
  }
`;

export default GlobalStyles;
