import { IconProps } from '.';

export default function Filter({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.91666 6.45963C9.91666 5.6082 10.6069 4.91797 11.4583 4.91797C12.3098 4.91797 13 5.6082 13 6.45963C13 7.31107 12.3098 8.0013 11.4583 8.0013C10.6069 8.0013 9.91666 7.31107 9.91666 6.45963ZM8.50983 7.20963C8.84385 8.52681 10.0373 9.5013 11.4583 9.5013C12.8794 9.5013 14.0728 8.52681 14.4068 7.20963H17.5C17.9142 7.20963 18.25 6.87385 18.25 6.45963C18.25 6.04542 17.9142 5.70963 17.5 5.70963H14.4068C14.0728 4.39246 12.8794 3.41797 11.4583 3.41797C10.0373 3.41797 8.84385 4.39246 8.50983 5.70963H2.5C2.08579 5.70963 1.75 6.04542 1.75 6.45963C1.75 6.87385 2.08579 7.20963 2.5 7.20963H8.50983ZM4.91667 13.1263C4.91667 12.2749 5.60689 11.5846 6.45833 11.5846C7.30977 11.5846 8 12.2749 8 13.1263C8 13.9777 7.30977 14.668 6.45833 14.668C5.60689 14.668 4.91667 13.9777 4.91667 13.1263ZM6.45833 16.168C5.03729 16.168 3.84385 15.1935 3.50983 13.8763H2.5C2.08579 13.8763 1.75 13.5405 1.75 13.1263C1.75 12.7121 2.08579 12.3763 2.5 12.3763H3.50983C3.84385 11.0591 5.03729 10.0846 6.45833 10.0846C7.87937 10.0846 9.07281 11.0591 9.40683 12.3763H17.5C17.9142 12.3763 18.25 12.7121 18.25 13.1263C18.25 13.5405 17.9142 13.8763 17.5 13.8763H9.40683C9.07281 15.1935 7.87937 16.168 6.45833 16.168Z'
        fill='#121212'
      />
    </svg>
  );
}
