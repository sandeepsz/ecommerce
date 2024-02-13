import { IconProps } from '.';

export default function TwitterIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.2272 2.92963C15.4772 3.29713 14.7422 3.44638 13.9772 3.67213C13.1364 2.72338 11.8899 2.67088 10.6922 3.11938C9.49442 3.56788 8.70992 4.66438 8.72717 5.92213V6.67213C6.29342 6.73438 4.12592 5.62588 2.72717 3.67213C2.72717 3.67213 -0.409328 9.24688 5.72717 11.9221C4.32317 12.8574 2.92292 13.4881 1.22717 13.4221C3.70817 14.7744 6.41192 15.2394 8.75267 14.5599C11.4377 13.7799 13.6442 11.7676 14.4909 8.75338C14.7435 7.83663 14.8689 6.88952 14.8637 5.93863C14.8622 5.75188 15.9962 3.85963 16.2272 2.92888V2.92963Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}