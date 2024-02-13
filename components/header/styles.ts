import { media } from "@/theme/breakpoints";
import { IconButton } from "@/ui/button/icon";
import { IconWrapperRight } from "@/ui/button/styles";
import { shouldNotForwardPropsWithKeys } from "@/utils/styled";
import { List } from "antd";
import styled, { css } from "styled-components";

interface WrapperProps {
  hideOnMobile?: boolean;
}

export const Wrapper = styled.header.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<WrapperProps>([
    "hideOnMobile",
  ]),
})<WrapperProps>`
  z-index: 1000;
  position: relative;

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    css`
      display: none;
      ${media.md`
        display: block;
      `}
    `}
`;

const getAlign = (align: "left" | "center") =>
  ({
    left: css`
      gap: 35px;
    `,
    center: css`
      justify-content: space-between;
    `,
  })[align];

type NavigationBarProps = {
  align: "left" | "center";
};

// export const NavigationBar = styled.div<{ align: 'left' | 'center' }>`
export const NavigationBar = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<NavigationBarProps>([
    "align",
  ]),
})<NavigationBarProps>`
  display: flex;
  ${({ align }) => getAlign(align)}
  align-items: center;
`;

export const Branding = styled.div`
  height: 30px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  ${IconWrapperRight} {
    transition: all 0.2s ease-in;
  }

  .ant-popover-open {
    ${IconWrapperRight} {
      transform: rotate(360deg);
    }
  }
`;

export const NavigationList = styled(List)`
  .ant-list-item {
    min-width: 150px;
    &:hover {
      background-color: ${({ theme }) => theme.token.black1};
    }
    padding: 0 5px;

    .ant-btn,
    .ant-btn-default {
      padding: 8px 0;
      justify-content: start;
    }
  }
`;

export const Icons = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const CartButton = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 100% !important;

  svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }

  .ant-badge {
    margin-left: 2px;
    .ant-scroll-number {
      box-shadow: none;
    }

    .ant-badge-count {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border-color: ${({ theme }) => theme.token.black9} !important;
      background-color: ${({ theme }) => theme.token.black9};

      .ant-scroll-number-only {
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
