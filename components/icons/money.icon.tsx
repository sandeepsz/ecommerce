import { IconProps } from '.';

export default function MoneyIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25.8333 12.3614H12.4999C11.0272 12.3614 9.83325 13.5553 9.83325 15.0281V23.0281C9.83325 24.5008 11.0272 25.6947 12.4999 25.6947H25.8333C27.306 25.6947 28.4999 24.5008 28.4999 23.0281V15.0281C28.4999 13.5553 27.306 12.3614 25.8333 12.3614Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.1667 21.6947C20.6394 21.6947 21.8333 20.5008 21.8333 19.0281C21.8333 17.5553 20.6394 16.3614 19.1667 16.3614C17.6939 16.3614 16.5 17.5553 16.5 19.0281C16.5 20.5008 17.6939 21.6947 19.1667 21.6947Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23.1667 12.3614V9.69474C23.1667 8.9875 22.8857 8.30922 22.3856 7.80912C21.8855 7.30903 21.2072 7.02808 20.5 7.02808H7.16667C6.45942 7.02808 5.78115 7.30903 5.28105 7.80912C4.78095 8.30922 4.5 8.9875 4.5 9.69474V17.6947C4.5 18.402 4.78095 19.0803 5.28105 19.5804C5.78115 20.0805 6.45942 20.3614 7.16667 20.3614H9.83333'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
