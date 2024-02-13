import { styled } from 'styled-components';

/**
 *
 * TODO: fix radio button styles
 *       - Active dot is not of correct size
 *
 */
export const StyledRadioWrapper = styled.div`
  .ant-radio-wrapper {
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 16px;
    padding-right: 16px;

    margin-right: 0;

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.token.black3};

    &:hover {
      border-color: ${({ theme }) => theme.token.black9};
    }
  }

  .ant-radio-wrapper span:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  .ant-radio-wrapper-checked {
    border-color: ${({ theme }) => theme.token.black9};
  }

  .ant-radio-inner {
    height: 18px;
    width: 18px;
    border: 1px solid ${({ theme }) => theme.token.black9};
  }

  .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    background-color: white;
  }

  .ant-radio-inner {
    border: 1px solid ${({ theme }) => theme.token.black9};

    &:after {
      background-color: ${({ theme }) => theme.token.black9};
    }
  }
`;
