import { Col, Row } from 'antd';
import type { CommonFeaturePropsT, ImagePropT } from './types';
import useBreakpoints from '@/utils/useBreakpoints';
import Container from '@/ui/container';
import Image from 'next/image';
import Box from '@/ui/box';
import SizedBox from '@/ui/sized-box';
import Button from '@/ui/button';
import Heading from '@/ui/headings';
import { useTheme } from 'styled-components';
import Text from '@/ui/text';

export type FeatureVariant6Props = CommonFeaturePropsT & {
  image: ImagePropT;
  variant?: 6 | 7;
};

export const Variant6 = ({
  tagline,
  title,
  subtitle,
  image,
  variant,
}: FeatureVariant6Props) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <Container>
      <Row gutter={md ? 32 : [0, 24]}>
        <Col
          span={24}
          md={10}
          offset={variant === 7 ? (md ? 2 : 0) : 0}
          order={variant === 7 ? 2 : 1}
          style={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text
            size='16'
            color={theme.token.black9}
            semibold
          >
            {tagline}
          </Text>
          <SizedBox height={{ base: 4, md: 8 }} />
          <Heading
            as={md ? 'h4' : 'h5'}
            medium
          >
            {title}
          </Heading>
          <SizedBox height={8} />
          <Text size='18'>{subtitle}</Text>

          <SizedBox height={{ base: 24, md: 28 }} />
          <Button
            color='light'
            type='text'
            size='medium'
            rightIcon='arrow'
          >
            See Collection
          </Button>
        </Col>
        <Col
          span={24}
          md={12}
          offset={variant === 7 ? 0 : md ? 2 : 0}
          order={variant === 7 ? 1 : 2}
        >
          <Box
            position='relative'
            height={md ? 400 : 300}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
