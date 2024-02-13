import Image from 'next/image';
import { type ReactNode } from 'react';

import { Col, Row } from 'antd';
import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';

import type { ImagePropT, CommonFeaturePropsT } from './types';

export type FeatureVariant3Props = CommonFeaturePropsT & {
  images: [ImagePropT, ImagePropT];
  CTA?: ReactNode;
};

export const FeatureVariant3 = ({
  tagline,
  title,
  subtitle,
  images,
  CTA,
}: FeatureVariant3Props) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Container>
      <Row gutter={md ? 0 : [0, 24]}>
        <Col
          span={24}
          md={10}
        >
          <Box
            maxWidth={md ? '456px' : '100%'}
            height='100%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
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
            <SizedBox height={{ base: 24, md: 28 }} />
            {CTA ? (
              CTA
            ) : (
              <Button
                color='light'
                type='text'
                size={md ? 'medium' : 'xSmall'}
                rightIcon='arrow'
              >
                See Collection
              </Button>
            )}
          </Box>
        </Col>
        <Col
          span={24}
          md={14}
        >
          <Box height={md ? '627px' : '280px'}>
            <Box
              position='absolute'
              top={0}
              right={0}
              height='90%'
              width='75%'
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box
              position='absolute'
              bottom={0}
              left={0}
              height='65%'
              width='45%'
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
