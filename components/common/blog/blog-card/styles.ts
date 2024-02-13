import { css, styled } from 'styled-components';

import type { BlogCardProps } from '@/types';
import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

type StyledBlogCardProps = Required<Pick<BlogCardProps, 'variant'>>;

const getStyles = ({ variant }: StyledBlogCardProps) =>
  ({
    1: css``,
    2: css`
      padding: 16px;
      background-color: ${({ theme }) => theme.token.black50};
    `,
  })[variant];

export const StyledBlogCard = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledBlogCardProps>([
    'variant',
  ]),
})<StyledBlogCardProps>`
  ${({ variant }) => getStyles({ variant })}
`;

type StyledImagePlaceholderProps = {
  height?: number;
  width?: number;
};

export const StyledImagePlaceholder = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledImagePlaceholderProps>(
    ['height', 'width']
  ),
})<StyledImagePlaceholderProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
`;

type StyledBlogCardContentProps = Required<Pick<BlogCardProps, 'position'>>;

export const StyledBlogCardContent = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledBlogCardContentProps>([
    'position',
  ]),
})<StyledBlogCardContentProps>`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: ${({ position }) => position};
`;
