import { IconProps } from '.';

export default function HelpIcon({ size, color }: Omit<IconProps, 'type'>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.21973 2.21973C4.59637 2.21973 2.46973 4.34637 2.46973 6.96973C2.46973 9.59308 4.59637 11.7197 7.21973 11.7197C9.84308 11.7197 11.9697 9.59308 11.9697 6.96973C11.9697 4.34637 9.84308 2.21973 7.21973 2.21973ZM1.46973 6.96973C1.46973 3.79409 4.04409 1.21973 7.21973 1.21973C10.3954 1.21973 12.9697 3.79409 12.9697 6.96973C12.9697 10.1454 10.3954 12.7197 7.21973 12.7197C4.04409 12.7197 1.46973 10.1454 1.46973 6.96973ZM7.21973 9.38641C7.49587 9.38641 7.71973 9.61027 7.71973 9.88641V9.89224C7.71973 10.1684 7.49587 10.3922 7.21973 10.3922C6.94358 10.3922 6.71973 10.1684 6.71973 9.89224V9.88641C6.71973 9.61027 6.94358 9.38641 7.21973 9.38641ZM7.26692 3.53648C6.95479 3.53561 6.64672 3.60721 6.36696 3.74564C6.0872 3.88406 5.84339 4.08554 5.65473 4.3342C5.48782 4.5542 5.53085 4.86784 5.75085 5.03475C5.97084 5.20166 6.28448 5.15862 6.45139 4.93863C6.5465 4.81327 6.66941 4.7117 6.81045 4.64192C6.95148 4.57213 7.10679 4.53604 7.26415 4.53647C7.4215 4.53691 7.57661 4.57387 7.71725 4.64443C7.8579 4.715 7.98025 4.81725 8.07466 4.94314C8.16907 5.06902 8.23298 5.2151 8.26134 5.36988C8.2897 5.52466 8.28175 5.68391 8.23811 5.83509C8.19447 5.98628 8.11633 6.12527 8.00985 6.24112C7.90458 6.35566 7.77444 6.44449 7.62947 6.50081C7.3516 6.60038 7.11307 6.78677 6.94925 7.03249C6.78392 7.28049 6.70365 7.57549 6.72053 7.87306C6.73617 8.14876 6.97234 8.35959 7.24804 8.34395C7.52374 8.32831 7.73456 8.09214 7.71892 7.81644C7.71432 7.73528 7.73621 7.65483 7.7813 7.58719C7.82639 7.51956 7.89224 7.4684 7.96892 7.44144L7.96899 7.44161L7.98165 7.43677C8.2732 7.32528 8.53488 7.14764 8.7461 6.91783C8.95732 6.68802 9.11232 6.41232 9.19888 6.11243C9.28545 5.81254 9.30122 5.49665 9.24496 5.18963C9.1887 4.88261 9.06194 4.59284 8.87466 4.34314C8.68738 4.09343 8.44469 3.8906 8.16571 3.75063C7.88672 3.61065 7.57905 3.53734 7.26692 3.53648Z'
        fill='#121212'
      />
    </svg>
  );
}
