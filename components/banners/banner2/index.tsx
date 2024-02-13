import { Col, Row } from 'antd';

import Container from '@/ui/container';
import { BannerCard2 } from '@/components/cards/banner/card2';
import { type BannerDataT } from '@/data/banner';
import useBreakpoints from '@/utils/useBreakpoints';

export const Banner2 = ({
  banners,
}: {
  banners: [BannerDataT, BannerDataT];
}) => {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Row gutter={[32, 32]}>
        {banners.map(({ image, title, buttonText }, index) => (
          <Col
            key={index}
            span={24}
            md={12}
          >
            <BannerCard2
              image={image}
              title={title}
              buttonText={buttonText}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
