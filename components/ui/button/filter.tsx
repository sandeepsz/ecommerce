import useBreakpoints from '@/utils/useBreakpoints';
import { HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import Text from '../text';
import { UnstyledButton } from './styles';

export default function FilterButton({
  active = false,
  children,
  ...rest
}: {
  active?: boolean;
  children: string;
} & HTMLAttributes<HTMLButtonElement>) {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <UnstyledButton {...rest}>
      <Text
        color={active ? theme.token.black9 : theme.token.black6}
        size={md ? '22' : '16'}
        semibold={active}
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {children}
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: active
              ? 'translateX(-50%) scaleX(1)'
              : 'translateX(-50%) scaleX(0)',
            transformOrigin: 'center left',
            width: active ? '100%' : 0,
            height: '2px',
            backgroundColor: theme.token.black9,
            transition: 'transform .1s ease, width .1s ease',
          }}
        />
      </Text>
    </UnstyledButton>
  );
}
