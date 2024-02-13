import { IconProps } from '.';

export default function AddIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.375 3.33398C8.375 3.12688 8.20711 2.95898 8 2.95898C7.79289 2.95898 7.625 3.12688 7.625 3.33398V7.62567H3.3335C3.12639 7.62567 2.9585 7.79356 2.9585 8.00067C2.9585 8.20778 3.12639 8.37567 3.3335 8.37567H7.625V12.6673C7.625 12.8744 7.79289 13.0423 8 13.0423C8.20711 13.0423 8.375 12.8744 8.375 12.6673V8.37567H12.6668C12.8739 8.37567 13.0418 8.20778 13.0418 8.00067C13.0418 7.79356 12.8739 7.62567 12.6668 7.62567H8.375V3.33398Z'
        fill='#121212'
      />
    </svg>
  );
}
