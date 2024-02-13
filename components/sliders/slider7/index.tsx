import { useTheme } from 'styled-components';

import HeroCarousel from '@/components/carousel/hero';
import Box from '@/ui/box';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import Padding from '@/ui/padding';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';

import { StyledSliderCard } from './styles';
import { HeaderSliderProps } from '../type';

export const Slider7 = ({
  images,
  tagline,
  title,
  subtitle,
}: HeaderSliderProps) => {
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
        baseHeight={md ? '700px' : '600px'}
      />
      <Container
        py={0}
        style={{ position: 'relative' }}
      >
        <StyledSliderCard>
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
            as={md ? 'h3' : 'h4'}
            medium
          >
            {title}
          </Heading>
          <SizedBox height={8} />
          <Text size={md ? '18' : '14'}>{subtitle}</Text>
          <SizedBox height={{ base: 16, md: 24 }} />
          <Button
            type={'underline'}
            color='light'
            rightIcon='arrow'
            size={md ? 'small' : 'xSmall'}
            roundness={'underline'}
          >
            See Collection
          </Button>
        </StyledSliderCard>
      </Container>
    </Box>
  );
};
