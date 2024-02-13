import { IconProps } from '.';

export default function MinusIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.22949 8H12.5628'
        stroke='#121212'
        strokeWidth='0.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
