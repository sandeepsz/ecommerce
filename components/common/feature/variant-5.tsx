import Image from 'next/image';

import { Col, Row } from 'antd';

import Box from '@/ui/box';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { useTheme } from 'styled-components';

import type { ImagePropT, CommonFeaturePropsT } from './types';

export type FeatureVariant5Props = CommonFeaturePropsT & {
  images: [ImagePropT, ImagePropT];
  buttonText?: string;
};

export const FeatureVariant5 = ({
  tagline,
  title,
  subtitle,
  images,
  buttonText,
}: FeatureVariant5Props) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Container>
      <Box
        display='grid'
        gridTemplateColumns={md ? '1fr auto' : '1fr'}
        gap={md ? 0 : 24}
        alignItems='center'
      >
        <Box
          maxWidth={md ? '456px' : '100%'}
          order={md ? 2 : 1}
          marginLeft={md ? 82 : 0}
        >
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
          {buttonText && (
            <>
              <SizedBox height={{ base: 24, md: 28 }} />
              <Button
                color='light'
                type='text'
                size={md ? 'medium' : 'xSmall'}
                rightIcon='arrow'
              >
                See Collection
              </Button>
            </>
          )}
        </Box>
        <Row gutter={md ? 32 : 8}>
          <Col
            span={12}
            style={{
              height: md ? 500 : 218,
            }}
          >
            <Box
              position='relative'
              height='100%'
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Col>
          <Col
            span={12}
            style={{
              height: md ? 500 : 218,
            }}
          >
            <Box
              position='relative'
              height='100%'
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Col>
        </Row>
      </Box>
    </Container>
  );
};
