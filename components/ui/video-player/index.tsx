import Image from 'next/image';
import { useState } from 'react';

import { Modal } from 'antd';

import PlayButton from '@/ui/button/play';
import AspectRatio from '@/ui/aspect-ratio';
import SizedBox from '@/ui/sized-box';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledVideoPlayer } from './styles';

type VideoPlayerProps = {
  src: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  autoplay?: boolean;
  controls?: boolean;
  theme?: 'light' | 'dark';
};

export const VideoPlayer = ({
  src,
  thumbnail,
  autoplay = true,
  controls = false,
  theme,
}: VideoPlayerProps) => {
  const { md } = useBreakpoints();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledVideoPlayer>
        <Image
          src={thumbnail.src}
          alt={thumbnail.alt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <PlayButton
          fill={theme}
          onClick={openModal}
        />
      </StyledVideoPlayer>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          footer={null}
          centered
          onCancel={closeModal}
          width={md ? '60%' : '80%'}
        >
          <SizedBox height={20} />
          <AspectRatio
            ratio={16 / 9}
            style={{
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={`${src}?autoplay=${autoplay ? 1 : 0}&controls=${
                controls ? 1 : 0
              }&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              allowFullScreen
            />
          </AspectRatio>
        </Modal>
      )}
    </>
  );
};
