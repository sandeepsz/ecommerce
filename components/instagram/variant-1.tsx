import AspectRatio from '@/ui/aspect-ratio';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { Content, Wrapper } from './styles';

export interface InstagramGalleryProps {
  variantType?: 2;
  tagline?: string;
  title?: string;
  subtitle?: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export default function InstagramGallery({
  variantType = 2,
  tagline,
  title,
  subtitle,
  images,
}: InstagramGalleryProps) {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Wrapper>
        <Content>
          {tagline && (
            <Text
              size={md ? '16' : '12'}
              semibold
              style={{ textTransform: 'uppercase' }}
            >
              {tagline}
            </Text>
          )}

          <SizedBox height={{ base: 4, md: 8 }} />
          <Heading
            as={md ? 'h4' : 'h7'}
            medium
          >
            {title ?? 'On Instagram'}
          </Heading>
          {md && subtitle && (
            <>
              <SizedBox height={16} />
              <Text size='16'>{subtitle}</Text>
            </>
          )}
        </Content>
        <SizedBox height={{ base: 16, md: 32 }} />
        <Row gutter={[32, 32]}>
          {images.map((image, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <AspectRatio ratio={1}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={310}
                  height={310}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </AspectRatio>
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
}
