import { media } from '@/theme/breakpoints';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';
import styled, { css } from 'styled-components';

interface WrapperProps {
  variant: 'contained' | 'line';
  hasButton?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasSelect?: boolean;
  fullWidth?: boolean;
}

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<WrapperProps>([
    'variant',
    'hasButton',
    'hasLeftIcon',
    'hasRightIcon',
    'hasSelect',
    'fullWidth',
  ]),
})<WrapperProps>`
  ${({ fullWidth }) =>
    fullWidth
      ? 'max-width: 100%'
      : css`
          max-width: 343px;

          ${media.md`
            max-width: 450px;
          `}
     `};

  label {
    margin: 0;
    margin-bottom: 8px;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'contained':
        return css`
          .ant-input,
          .ant-input-affix-wrapper {
            border-radius: 6px;
            border: 1px solid ${({ theme }) => theme.token.black3};
            padding: 11px 16px;

            ${media.md`
              padding: 13px 16px;
            `}
          }

          .ant-input-affix-wrapper-disabled,
          .ant-input:disabled {
            background: white;
          }

          .ant-input-wrapper.ant-input-group {
            .ant-input-group-addon {
              background: white;
            }
          }

          // .ant-input {
          //   border-right: none;
          // }
        `;
      case 'line':
        return css`
          .ant-input,
          .ant-input-affix-wrapper {
            border-radius: 0;
            border: none;
            background: transparent;
            border-bottom: 1px solid ${({ theme }) => theme.token.black3};
            padding: 11px 16px 11px 0;

            ${media.md`
              padding: 13px 16px 13px 0;
            `}
          }

          .ant-input-affix-wrapper-disabled,
          .ant-input:disabled {
            background: transparent !important;
            border-top: none;
            border-right: none;
          }

          .ant-input-wrapper.ant-input-group {
            .ant-input-group-addon {
              background: transparent !important;
              border-top: none;
              border-right: none;
              border-radius: 0;
              padding-right: 0;
            }
          }
        `;
    }
  }}

  .ant-input,
  .ant-input-affix-wrapper {
    height: 46px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    ${media.md`
      height: 52px;
    `}

    &:focus , &:active {
      box-shadow: none;
      border-color: ${({ theme }) => theme.token.black9};
    }

    .ant-input {
      height: 100%;
    }
  }

  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-color: ${({ theme }) => theme.token.black9};

    + .ant-input-group-addon {
      border-color: ${({ theme }) => theme.token.black9};
    }
  }

  &:hover {
    .ant-input-group-addon {
      border-color: ${({ theme }) => theme.token.black9};
    }
  }

  .ant-input-affix-wrapper-disabled,
  .ant-input:disabled {
    border-color: ${({ theme }) => theme.token.black4};

    + .ant-input-group-addon {
      border-color: ${({ theme }) => theme.token.black4};
    }
  }

  .ant-input-wrapper.ant-input-group {
    .ant-input-affix-wrapper {
      border-right: none;
    }

    .ant-input-group-addon {
      background: black;

      &:hover {
        border-color: ${({ theme }) => theme.token.black3};
      }
    }
  }

  textarea.ant-input {
    height: auto;
  }
`;
