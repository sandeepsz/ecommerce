import Image from 'next/image';

import Heading from '@/ui/headings';
import Text from '@/ui/text';
import SizedBox from '@/ui/sized-box';
import Button from '@/ui/button';

import {
  StyledContainer,
  StyledContent,
  StyledHero,
  StyledImage,
} from './styles';

import useBreakpoints from '@/utils/useBreakpoints';

type HeroProps = {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
};

export const Hero = ({ title, subtitle, image }: HeroProps) => {
  const { md } = useBreakpoints();

  return (
    <StyledContainer>
      <StyledHero>
        <StyledContent>
          <Heading as={md ? 'h3' : 'h5'}>{title}</Heading>
          <SizedBox height={8} />
          <Text size={md ? '18' : '16'}>{subtitle}</Text>
          <SizedBox height={md ? 28 : 16} />
          <Button
            size={md ? 'medium' : 'small'}
            roundness='pill'
          >
            See Collection
          </Button>
        </StyledContent>

        <StyledImage>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </StyledImage>
      </StyledHero>
    </StyledContainer>
  );
};
