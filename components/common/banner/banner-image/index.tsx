import AspectRatio from '@/ui/aspect-ratio';
import Container from '@/ui/container';
import useBreakpoints from '@/utils/useBreakpoints';
import Image from 'next/image';
import { StyledContent } from './styles';
import Heading from '@/ui/headings';
import Text from '@/ui/text';
import SizedBox from '@/ui/sized-box';
import Button from '@/ui/button';

type BannerImageProps = {
  variant: 2;
  title: string;
  subtitle: string;
  img: {
    src: string;
    alt: string;
  };
};

export const BannerImage = ({
  variant,
  title,
  subtitle,
  img,
}: BannerImageProps) => {
  const { md } = useBreakpoints();

  return (
    <Container>
      <AspectRatio ratio={md ? 1336 / 494 : 343 / 375}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <StyledContent>
          <Heading
            as={md ? 'h4' : 'h5'}
            color='white'
          >
            {title}
          </Heading>
          <SizedBox height={md ? 13 : 12} />
          <Text
            size={md ? '18' : '14'}
            color='white'
            style={{
              maxWidth: 452,
            }}
          >
            {subtitle}
          </Text>
          <SizedBox height={md ? 24 : 16} />
          <Button
            type='underline'
            color='dark'
            rightIcon='arrow'
            size={md ? 'medium' : 'small'}
          >
            Learn more
          </Button>
        </StyledContent>
      </AspectRatio>
    </Container>
  );
};
