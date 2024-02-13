import { type CSSProperties } from 'react';

import Icon from '@/components/icons';

import { StyledMapPin } from './styles';
import useBreakpoints from '@/utils/useBreakpoints';

export const MapPin = ({ style }: { style?: CSSProperties }) => {
  const { md } = useBreakpoints();

  return (
    <StyledMapPin style={style}>
      <Icon
        type='branding'
        size={md ? 31 : 24}
      />
    </StyledMapPin>
  );
};
