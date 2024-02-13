import Image from 'next/image';
import { useTheme } from 'styled-components';

import Heading from '@/ui/headings';
import AspectRatio from '@/ui/aspect-ratio';
import Box from '@/ui/box';
import Text from '@/ui/text';
import SizedBox from '@/ui/sized-box';

import useBreakpoints from '@/utils/useBreakpoints';

export type BannerCard4Props = {
  title: string;
  tagline: string;
  image: {
    src: string;
    alt: string;
  };
};

export const BannerCard4 = ({ title, tagline, image }: BannerCard4Props) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Box textAlign='center'>
      <AspectRatio ratio={md ? 424 / 524 : 343 / 463}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
        />
      </AspectRatio>
      <SizedBox height={16} />
      <Text
        size='16'
        color={theme.token.black5}
      >
        {tagline}
      </Text>
      <Heading as='h7'>{title}</Heading>
      {md && <SizedBox height={32} />}
    </Box>
  );
};
