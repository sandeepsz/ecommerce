import Image from 'next/image';

import AspectRatio from '@/ui/aspect-ratio';
import Box from '@/ui/box';
import useBreakpoints from '@/utils/useBreakpoints';
import { StyledContent } from '../slide3/styles';
import Text from '@/ui/text';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Button from '@/ui/button';

type Slider2Props = {
  tagline: string;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export const Slider2 = ({ tagline, title, images }: Slider2Props) => {
  const { md } = useBreakpoints();

  return (
    <Box
      marginLeft='auto'
      marginRight='auto'
      marginTop={md ? -68 : 0}
      position='relative'
    >
      <AspectRatio ratio={md ? 1440 / 800 : 375 / 600}>
        {/* images */}
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </AspectRatio>
      <StyledContent>
        <Text
          color='white'
          semibold
          size={md ? '18' : '14'}
        >
          {tagline}
        </Text>
        <Heading
          color='white'
          as={md ? 'h1' : 'h4'}
          style={{ width: md ? 851 : '100%' }}
        >
          {title}
        </Heading>
        <SizedBox height={24} />
        <Button
          size={md ? 'medium' : 'small'}
          rightIcon='arrow'
        >
          See Collection
        </Button>
      </StyledContent>
    </Box>
  );
};
