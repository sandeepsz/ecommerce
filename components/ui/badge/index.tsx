import { type ReactNode } from 'react';

import { StyledBadge } from './styles';
import type { BadgeProps as StyledBadgeProps } from './types';

type BadgeProps = StyledBadgeProps & {
  leftIcon?: ReactNode;
};

export const Badge = ({ text, style, leftIcon, ...rest }: BadgeProps) => {
  if (!text) {
    return null;
  }

  return (
    <StyledBadge
      style={style}
      {...rest}
    >
      {leftIcon}
      {text}
    </StyledBadge>
  );
};
