import { IconProps } from '.';

export default function FacebookIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.93817 7.46094V10.4609H7.18817V15.7109H10.1882V10.4609H12.4382L13.1882 7.46094H10.1882V5.96094C10.1882 5.76203 10.2672 5.57126 10.4078 5.43061C10.5485 5.28996 10.7393 5.21094 10.9382 5.21094H13.1882V2.21094H10.9382C9.94361 2.21094 8.98978 2.60603 8.28652 3.30929C7.58326 4.01255 7.18817 4.96638 7.18817 5.96094V7.46094H4.93817Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
