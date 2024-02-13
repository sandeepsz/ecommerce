import Image from 'next/image';
import { Col, Row } from 'antd';

import AspectRatio from '@/ui/aspect-ratio';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';

import { Content } from '../styles';

import { StyledInstagramGallery } from './styles';

export type InstagramGallery3Props = {
  tagline?: string;
  title?: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export const InstagramGallery3 = ({
  tagline,
  title,
  images,
}: InstagramGallery3Props) => {
  const { md } = useBreakpoints();

  return (
    <StyledInstagramGallery>
      <Content>
        <Text
          size={md ? '16' : '12'}
          semibold
          style={{ textTransform: 'uppercase' }}
        >
          {tagline ?? 'Check us out'}
        </Text>
        <SizedBox height={{ base: 4, md: 8 }} />
        <Heading
          as={md ? 'h4' : 'h7'}
          medium
        >
          {title ?? 'On Instagram'}
        </Heading>
      </Content>
      <SizedBox height={{ base: 16, md: 32 }} />
      <Row>
        {images.map((image) => (
          <Col
            key={image.alt}
            span={12}
            md={4}
          >
            <AspectRatio
              ratio={1}
              style={{
                height: md ? 300 : 171,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </AspectRatio>
          </Col>
        ))}
      </Row>
    </StyledInstagramGallery>
  );
};
