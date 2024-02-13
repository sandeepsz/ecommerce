import Banner1 from '@/components/banners/banner1';
import Banner3 from '@/components/banners/banner3';
import { BannerProps } from '@/components/banners/type';
import Container from '@/ui/container';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Row } from 'antd';

export default function BannerGrid({
  items,
}: {
  items: [BannerProps, BannerProps, BannerProps];
}) {
  const { md } = useBreakpoints();

  return (
    <Container>
      <Row gutter={md ? 32 : [0, 16]}>
        <Col
          span={24}
          md={12}
        >
          <Banner3 {...items[0]} />
        </Col>
        <Col
          span={24}
          md={12}
        >
          <Row
            gutter={md ? [0, 32] : [0, 16]}
            justify='space-between'
          >
            <Col span={24}>
              <Banner1 {...items[1]} />
            </Col>
            <Col span={24}>
              <Banner1 {...items[2]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
