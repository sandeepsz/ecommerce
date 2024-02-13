import { IconProps } from '.';

export default function LockIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.4838 6.52309C14.3433 5.66355 15.5091 5.18066 16.7247 5.18066C17.9403 5.18066 19.1061 5.66355 19.9656 6.52309C20.8251 7.38263 21.308 8.54842 21.308 9.764V14.3473H12.1414V9.764C12.1414 8.54842 12.6242 7.38263 13.4838 6.52309ZM10.6414 14.3473V9.764C10.6414 8.1506 11.2823 6.60328 12.4231 5.46243C13.564 4.32158 15.1113 3.68066 16.7247 3.68066C18.3381 3.68066 19.8854 4.32158 21.0263 5.46243C22.1671 6.60328 22.808 8.1506 22.808 9.764V14.3473H23.3914C25.2783 14.3473 26.808 15.877 26.808 17.764V25.764C26.808 27.651 25.2783 29.1807 23.3914 29.1807H10.058C8.17105 29.1807 6.64136 27.651 6.64136 25.764V17.764C6.64136 15.877 8.17105 14.3473 10.058 14.3473H10.6414ZM22.058 15.8473H23.3914C24.4499 15.8473 25.308 16.7055 25.308 17.764V25.764C25.308 26.8225 24.4499 27.6807 23.3914 27.6807H10.058C8.99948 27.6807 8.14136 26.8225 8.14136 25.764V17.764C8.14136 16.7055 8.99948 15.8473 10.058 15.8473H11.3914H22.058ZM16.7247 21.1807C16.4025 21.1807 16.1414 21.4418 16.1414 21.764C16.1414 22.0862 16.4025 22.3473 16.7247 22.3473C17.0469 22.3473 17.308 22.0862 17.308 21.764C17.308 21.4418 17.0469 21.1807 16.7247 21.1807ZM14.6414 21.764C14.6414 20.6134 15.5741 19.6807 16.7247 19.6807C17.8753 19.6807 18.808 20.6134 18.808 21.764C18.808 22.9146 17.8753 23.8473 16.7247 23.8473C15.5741 23.8473 14.6414 22.9146 14.6414 21.764Z'
        fill={color}
      />
    </svg>
  );
}
