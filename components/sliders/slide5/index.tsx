import HeroCarousel from '@/components/carousel/hero';
import Box from '@/ui/box';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import Padding from '@/ui/padding';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { useTheme } from 'styled-components';
import { HeaderSliderProps } from '../type';

export default function Slider5({
  images,
  tagline,
  title,
  subtitle,
}: HeaderSliderProps) {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Box
      marginLeft='auto'
      marginRight='auto'
      marginTop={md ? -68 : 0}
      position='relative'
      background={md ? theme.token.black1 : undefined}
    >
      <HeroCarousel
        images={images}
        baseHeight='350px'
      />
      <Container py={0}>
        <Box
          position={md ? 'absolute' : 'static'}
          top={md ? 68 : 0}
        >
          <Padding
            top={md ? 80 : 24}
            bottom={md ? 0 : 16}
          >
            <Box maxWidth={538}>
              {tagline && (
                <>
                  <Text
                    size={md ? '16' : '14'}
                    color={theme.token.black9}
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
              >
                {title}
              </Heading>
              <SizedBox height={8} />
              <Text size={md ? '18' : '14'}>{subtitle}</Text>
              <SizedBox height={{ base: 24, md: 28 }} />
              <Button
                type={'default'}
                color='light'
                size={md ? 'medium' : 'xSmall'}
                roundness={'sharp'}
              >
                See Collection
              </Button>
            </Box>
          </Padding>
        </Box>
      </Container>
    </Box>
  );
}
