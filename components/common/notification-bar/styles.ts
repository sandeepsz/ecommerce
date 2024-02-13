import { media } from "@/theme/breakpoints";
import { shouldNotForwardPropsWithKeys } from "@/utils/styled";
import styled, { css } from "styled-components";

interface WrapperProps {
  hidden?: boolean;
  bg?: string;
}

export const Wrapper = styled("div").withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<WrapperProps>([
    "hidden",
    "bg",
  ]),
})<WrapperProps>`
  margin: 0 auto;
  background-color: ${({ theme, bg }) => bg ?? theme.token.black9};
  transition: height 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
  text-align: center;
  ${({ hidden }) =>
    hidden
      ? "height: 0;"
      : css`
          height: 36px;
          padding: 6px 8px;
          ${media.md`
          height: 48px;
          padding: 8px 16px;
          `}
        `};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  bottom: 8px;
  right: 16px;
  cursor: pointer;
`;
