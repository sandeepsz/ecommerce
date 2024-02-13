import Image from 'next/image';

import Heading from '@/ui/headings';
import Button from '@/ui/button';
import SizedBox from '@/ui/sized-box';
import Box from '@/ui/box';
import Text from '@/ui/text';
import AspectRatio from '@/ui/aspect-ratio';
import useBreakpoints from '@/utils/useBreakpoints';

import { HeaderSliderProps } from '../type';

import { Slider4Container, Slider4Header } from './styles';

export const Slider4 = ({
  images,
  title,
  subtitle,
}: Omit<HeaderSliderProps, 'tagline'>) => {
  const { md } = useBreakpoints();

  return (
    <Slider4Container>
      <Slider4Header>
        <Heading
          as={md ? 'h2' : 'h5'}
          style={{
            maxWidth: md ? 766 : '100%',
          }}
        >
          {title}
        </Heading>
        <Box maxWidth={md ? 424 : '100%'}>
          <Text size={md ? '18' : '16'}>{subtitle}</Text>
          <SizedBox height={md ? 16 : 24} />
          <Button
            size={md ? 'small' : 'xSmall'}
            rightIcon='arrow'
          >
            See Collection
          </Button>
        </Box>
      </Slider4Header>
      <AspectRatio ratio={md ? 1336 / 640 : 343 / 350}>
        <Image
          src={images[0]}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </AspectRatio>
    </Slider4Container>
  );
};
