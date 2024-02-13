import { IconProps } from '.';

type ArrowIconProps = Omit<IconProps, 'type'> & {
  direction?: 'left' | 'right';
};

export default function ArrowIcon({
  size,
  color,
  direction = 'right',
}: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : '' }}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.66666 16H25.3333'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.3333 24L25.3333 16'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.3333 8L25.3333 16'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
