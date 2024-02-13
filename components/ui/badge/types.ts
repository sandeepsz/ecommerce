import type { CSSProperties } from 'react';

export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeFill = 'solid' | 'outline';

export type BadgeColor = 'light' | 'dark';

export type BadgeRoundness = 'pill' | 'rounded' | 'sharp' | 'circle';

export type BadgeProps = {
  size?: BadgeSize;
  fill?: BadgeFill;
  color?: BadgeColor;
  roundness?: BadgeRoundness;
  text?: string;
  style?: CSSProperties;
};

export type StyledBadgeProps = NonNullable<Omit<BadgeProps, 'text'>>;
