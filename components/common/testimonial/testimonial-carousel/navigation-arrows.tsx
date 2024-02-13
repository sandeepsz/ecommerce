import { type CSSProperties } from 'react';

import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';

import useBreakpoint from '@/utils/useBreakpoints';

type NavigationArrowsProps = {
  onPrev(): void;
  onNext(): void;
  style?: CSSProperties;
};

export const NavigationArrows = ({
  onPrev,
  onNext,
  style,
}: NavigationArrowsProps) => {
  const { md } = useBreakpoint();
  const theme = useTheme();

  return (
    <Box
      display='flex'
      gap={12}
      {...style}
    >
      <Button
        fill='solid'
        color='dark'
        roundness='pill'
        type='square'
        size='xSmall'
        onClick={onPrev}
        style={{
          padding: '10px',
          ...(md && {
            backgroundColor: theme.token.black1,
          }),
          rotate: '180deg',
        }}
      >
        arrow
      </Button>
      <Button
        fill='solid'
        color='dark'
        roundness='pill'
        type='square'
        size='xSmall'
        onClick={onNext}
        style={{
          padding: '10px',
          ...(md && {
            backgroundColor: theme.token.black1,
          }),
        }}
      >
        arrow
      </Button>
    </Box>
  );
};
