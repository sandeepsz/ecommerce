import Image from 'next/image';

import Box from '@/ui/box';
import Heading from '@/ui/headings';
import Button from '@/ui/button';
import useBreakpoints from '@/utils/useBreakpoints';

import { StyledBannerCard } from './styles';
import { ButtonText } from '@/ui/text';
import AspectRatio from '@/ui/aspect-ratio';

type BannerCardProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  buttonText: string;
};

export const BannerCard2 = ({ image, title, buttonText }: BannerCardProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledBannerCard>
      <AspectRatio ratio={md ? 652 / 524 : 343 / 262}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </AspectRatio>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap={md ? 12 : 4}
      >
        {md ? (
          <Heading as='h5'>{title}</Heading>
        ) : (
          <ButtonText size='large'>{title}</ButtonText>
        )}

        <Button
          type='underline'
          rightIcon='arrow'
          size={md ? 'medium' : 'xSmall'}
        >
          {buttonText}
        </Button>
      </Box>
    </StyledBannerCard>
  );
};
