import Box from '@/ui/box';
import Button from '@/ui/button';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

import type { CommonFeaturePropsT, VideoPropT } from './types';
import { VideoPlayer } from '@/ui/video-player';
import { useTheme } from 'styled-components';

export type FeatureVariant2Props = Omit<CommonFeaturePropsT, 'tagline'> & {
  background: string;
  video: VideoPropT;
  theme?: 'light' | 'dark';
};

export const FeatureVariant2 = ({
  title,
  subtitle,
  video,
  background,
  theme: propTheme = 'light',
}: FeatureVariant2Props) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Box
      {...(md && {
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '54px 24px',
      })}
    >
      <Box
        display='grid'
        gridTemplateColumns={md ? '1fr 1fr' : '1fr'}
        gap='24px'
        alignItems='center'
        background={background}
      >
        <Box
          {...(md
            ? {
                maxWidth: '478px',
                paddingLeft: '54px',
              }
            : {
                order: 2,
                padding: '0 24px 54px 24px',
              })}
        >
          <Heading
            as={md ? 'h3' : 'h5'}
            medium
            style={{
              color: propTheme === 'dark' ? 'white' : theme.token.black9,
            }}
          >
            {title}
          </Heading>
          <SizedBox height={8} />
          <Text
            size={md ? '18' : '14'}
            style={{
              color: propTheme === 'dark' ? 'white' : theme.token.black9,
            }}
          >
            {subtitle}
          </Text>
          <SizedBox height={{ base: 24, md: 28 }} />
          <Button
            color={propTheme}
            type='text'
            size={md ? 'medium' : 'xSmall'}
            rightIcon='arrow'
          >
            See Collection
          </Button>
        </Box>
        <Box
          position='relative'
          width={md ? '766px' : '100%'}
          height={md ? '494px' : '375px'}
        >
          <VideoPlayer
            src={video.src}
            thumbnail={{ ...video.thumbnail }}
            theme={propTheme}
          />
        </Box>
      </Box>
    </Box>
  );
};
