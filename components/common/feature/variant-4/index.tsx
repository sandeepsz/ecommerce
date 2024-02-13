import Image from 'next/image';

import { useTheme } from 'styled-components';
import { Col, Row } from 'antd';

import Container from '@/ui/container';
import Button from '@/ui/button';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import { Countdown } from '@/ui/countdown';

import useBreakpoints from '@/utils/useBreakpoints';

import type { CommonFeaturePropsT } from '../types';

import { StyledContent, StyledImagePlaceholder } from './styles';

export type FeatureVariant4Props = CommonFeaturePropsT & {
  image: {
    src: string;
    alt: string;
  };
  countdown?: string;
};

export const FeatureVariant4 = ({
  tagline,
  title,
  subtitle,
  image,
  countdown,
}: FeatureVariant4Props) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  const NOW_IN_MS = new Date().getTime();
  const TIME_LEFT_IN_MS = NOW_IN_MS + Number(countdown);

  return (
    <Container>
      <Row gutter={md ? 0 : [0, 16]}>
        <Col
          span={24}
          md={12}
        >
          <StyledImagePlaceholder>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </StyledImagePlaceholder>
        </Col>

        {md && <Col span={2} />}

        <Col span={md ? 10 : 24}>
          <StyledContent>
            <Text
              size={md ? '16' : '12'}
              semibold
            >
              {tagline}
            </Text>
            <SizedBox height={md ? 8 : 4} />
            <Heading as={md ? 'h3' : 'h5'}>{title}</Heading>
            <SizedBox height={md ? 16 : 8} />
            <Text
              size={md ? '18' : '14'}
              color={theme.token.colorText}
            >
              {subtitle}
            </Text>
            <SizedBox height={md ? 16 : 24} />
            <Countdown timeleftinms={TIME_LEFT_IN_MS} />
            <SizedBox height={32} />
            <Button
              size={md ? 'medium' : 'small'}
              roundness='sharp'
            >
              Shop Now
            </Button>
          </StyledContent>
        </Col>
      </Row>
    </Container>
  );
};
