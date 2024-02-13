import { IconProps } from '.';

export default function PhoneIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.25285 5.69474H12.5862L15.2528 12.3614L11.9195 14.3614C13.3475 17.2568 15.6908 19.6001 18.5862 21.0281L20.5862 17.6947L27.2528 20.3614V25.6947C27.2528 26.402 26.9719 27.0803 26.4718 27.5804C25.9717 28.0805 25.2934 28.3614 24.5862 28.3614C19.3852 28.0453 14.4797 25.8367 10.7953 22.1523C7.11085 18.4679 4.90225 13.5624 4.58618 8.36141C4.58618 7.65416 4.86713 6.97589 5.36723 6.47579C5.86733 5.97569 6.5456 5.69474 7.25285 5.69474'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
