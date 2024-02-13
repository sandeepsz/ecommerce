import { Col, Row } from 'antd';

import Container from '@/ui/container';
import useBreakpoints from '@/utils/useBreakpoints';

import { BannerCard } from '../../banner-card';

export type Banner3DataT = {
  title: string;
  tagline: string;
  image: {
    src: string;
    alt: string;
  };
};

export type BannerVariant3Props = {
  banners: [Banner3DataT, Banner3DataT, Banner3DataT];
};

export const BannerVariant3 = ({ banners }: BannerVariant3Props) => {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Row gutter={md ? 32 : [0, 32]}>
        {banners.map(({ title, ...rest }) => (
          <Col
            key={title}
            span={md ? 8 : 24}
          >
            <BannerCard
              variant={4}
              title={title}
              {...rest}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
