import { IconProps } from '.';

export default function TwoColsHorizontal({
  size,
  color,
}: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.75 10.5C20.1642 10.5 20.5 10.1642 20.5 9.75C20.5 9.33579 20.1642 9 19.75 9H3.75C3.33579 9 3 9.33579 3 9.75C3 10.1642 3.33579 10.5 3.75 10.5L19.75 10.5ZM19.75 14.5C20.1642 14.5 20.5 14.1642 20.5 13.75C20.5 13.3358 20.1642 13 19.75 13L3.75 13C3.33579 13 3 13.3358 3 13.75C3 14.1642 3.33579 14.5 3.75 14.5L19.75 14.5Z'
        fill='var(--fill)'
      />
    </svg>
  );
}
