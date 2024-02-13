import { IconProps } from '.';

export default function CheckIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.71094 9L7.46094 12.75L14.9609 5.25'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
