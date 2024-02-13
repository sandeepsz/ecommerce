import Image from 'next/image';
import { type ComponentProps } from 'react';

import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
// import Padding from '@/ui/padding';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';

// import HeroCarousel from '@/components/carousel/hero';
import HeroCarousel from '@/components/carousel/hero';
import useBreakpoints from '@/utils/useBreakpoints';

import { HeaderSliderProps } from '../type';

type Slider3Props = HeaderSliderProps & {
  color?: string;
  background?: ComponentProps<typeof Box>['background'];
  buttonProps?: ComponentProps<typeof Button>;
};

export default function Slider3({
  images,
  tagline,
  title,
  subtitle,
  color = 'white',
  background,
  buttonProps,
}: Slider3Props) {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Box
      display={md ? 'grid' : 'block'}
      gridTemplateColumns={md ? '1fr 1fr' : '1fr'}
      background={background || theme.token.red5}
      marginLeft='auto'
      marginRight='auto'
      position='relative'
    >
      {md ? (
        <Box
          position='relative'
          height={md ? '750px' : '350px'}
        >
          <Image
            src={images[0]}
            fill
            style={{
              objectFit: 'cover',
            }}
            alt='test'
          />
        </Box>
      ) : (
        <HeroCarousel
          images={images}
          baseHeight='350px'
        />
      )}
      <Box margin='auto 0 auto 0'>
        {!md && <SizedBox height={17} />}
        <Container py={md ? undefined : 24}>
          <Box>
            <Box maxWidth={538}>
              {tagline && (
                <>
                  <Text
                    size={md ? '16' : '14'}
                    color={color}
                    semibold
                  >
                    {tagline}
                  </Text>
                  <SizedBox height={{ base: 4, md: 8 }} />
                </>
              )}
              <Heading
                as={md ? 'h3' : 'h5'}
                medium
                color={color}
              >
                {title}
              </Heading>
              <SizedBox height={8} />
              <Text
                size={md ? '18' : '14'}
                color={color}
              >
                {subtitle}
              </Text>
              <SizedBox height={{ base: 24, md: 28 }} />
              <Button
                type={'default'}
                color='dark'
                rightIcon='arrow'
                size={md ? 'medium' : 'xSmall'}
                roundness='sharp'
                {...buttonProps}
              >
                See Collection
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
