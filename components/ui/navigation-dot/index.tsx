import { UnstyledButton } from '@/ui/button/styles';
import { HTMLAttributes } from 'react';

export default function NavigationDot({
  active = false,
  color = 'light',
  mobile = false,
  ...rest
}: {
  active?: boolean;
  color?: 'light' | 'dark';
  mobile?: boolean;
} & HTMLAttributes<HTMLButtonElement>) {
  return (
    <UnstyledButton {...rest}>
      {active ? (
        mobile ? (
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='9'
              cy='9'
              rx='3'
              ry='3'
              fill={color === 'light' ? '#121212' : '#fff'}
            />
            <rect
              x='1'
              y='1'
              width='16'
              height='16'
              rx='8'
              stroke={color === 'light' ? '#121212' : '#fff'}
              strokeMiterlimit='0'
              strokeLinejoin='bevel'
            />
          </svg>
        ) : (
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='11'
              cy='11'
              r='4'
              fill={color === 'light' ? '#121212' : '#fff'}
            />
            <rect
              x='0.611111'
              y='0.611111'
              width='20.7778'
              height='20.7778'
              rx='10.3889'
              stroke={color === 'light' ? '#121212' : '#fff'}
              strokeWidth='1.22222'
            />
          </svg>
        )
      ) : mobile ? (
        <svg
          width='6'
          height='6'
          viewBox='0 0 6 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='3'
            cy='3'
            r='3'
            fill={color === 'light' ? '#121212' : '#fff'}
          />
        </svg>
      ) : (
        <svg
          width='8'
          height='8'
          viewBox='0 0 8 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='4'
            cy='4'
            r='4'
            fill={color === 'light' ? '#121212' : '#fff'}
          />
        </svg>
      )}
    </UnstyledButton>
  );
}
