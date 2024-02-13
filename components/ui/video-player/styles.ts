import { styled } from 'styled-components';

type StyledVideoPlayerProps = {
  height?: number;
  width?: number;
};

export const StyledVideoPlayer = styled.div<StyledVideoPlayerProps>`
  position: relative;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;
