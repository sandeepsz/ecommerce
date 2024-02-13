import styled, { css } from "styled-components";
import { media } from "@/theme/breakpoints";

export const Wrapper = styled.div<{ variant: number }>`
  
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: ${({ variant }) => (variant === 1 ? "column" : "row")};
  width: ${({ variant }) => (variant === 1 ? "1108px" : "570px")};
`;

export const SliderContainer = styled.div<{ variant: number }>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 1 ? "column" : "row")};
`;


export const LargeImage = styled.img<{ variant: number }>` 
width: 100%;
`;
export const ThumbnailContainer = styled.div<{ variant: number }>`
  display: flex;
  ${({ variant }) =>
    variant === 1
      ? css`
          width: 570px;
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `}
`;

export const ThumbnailImage = styled.img`
  width: 130px;
  height: 170px;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer;
`;
