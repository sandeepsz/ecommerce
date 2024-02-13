import useBreakpoints from '@/utils/useBreakpoints';
import { HTMLAttributes } from 'react';
import { PlayButtonWrap } from './styles';

type PlayButtonProps = HTMLAttributes<HTMLButtonElement> & {
  fill?: 'light' | 'dark';
};

export default function PlayButton({
  fill = 'light',
  ...rest
}: PlayButtonProps) {
  const { md } = useBreakpoints();

  return (
    <PlayButtonWrap
      fill={fill}
      {...rest}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={md ? '96' : '65'}
        height={md ? '96' : '65'}
        viewBox='0 0 96 96'
      >
        <g opacity='0.8'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M43.0527 36.8898C41.7203 36.065 40 37.0233 40 38.5903V57.4097C40 58.9767 41.7203 59.935 43.0527 59.1102L58.253 49.7005C59.516 48.9186 59.516 47.0814 58.253 46.2995L43.0527 36.8898Z'
            fill={fill === 'light' ? '#121212' : '#fff'}
          />
        </g>
      </svg>
    </PlayButtonWrap>
  );
}
