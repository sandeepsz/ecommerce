import Image from 'next/image';

import { StyledAvatar } from './styles';

type AvatarProps = {
  size?: number;
  src: string;
  alt: string;
};

export const Avatar = ({ size = 60, src, alt }: AvatarProps) => (
  <StyledAvatar size={size}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: 'cover'}}
    />
  </StyledAvatar>
);
