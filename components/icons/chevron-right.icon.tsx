import { IconProps } from '.';

export default function ChevronRightIcon({
  size,
  color,
}: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.58398 3L7.58398 6L4.58398 9'
        stroke='#605F5F'
        strokeWidth='0.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
