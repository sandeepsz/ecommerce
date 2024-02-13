import styled from 'styled-components';

import { shouldNotForwardPropsWithKeys } from '@/utils/styled';

type StyledAvatarProps = {
  size: number;
};

export const StyledAvatar = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<StyledAvatarProps>(['size']),
})<StyledAvatarProps>`
  position: relative;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  border-radius: 82px;
  overflow: hidden;
`;
