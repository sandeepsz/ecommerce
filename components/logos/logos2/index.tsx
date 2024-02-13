import { logos } from '@/data/logos';
import AspectRatio from '@/ui/aspect-ratio';
import Container from '@/ui/container';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Divider, Row } from 'antd';
import { Logo } from '../logos1/styles';

export default function Logos2() {
  const { md, xl } = useBreakpoints();

  return (
    <Container>
      <Divider
        style={{
          marginTop: 0,
          marginBottom: 56,
        }}
      />
      <Row
        gutter={md ? [xl ? 80 : 24, 24] : [20, 16]}
        justify='space-between'
      >
        {logos.map((logo, index) => (
          <Col
            span={12}
            md={8}
            xl={4}
            key={index}
          >
            <Logo>
              <AspectRatio ratio={md ? 160 / 80 : 140 / 70}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt='logo'
                />
              </AspectRatio>
            </Logo>
          </Col>
        ))}
      </Row>
      <Divider
        style={{
          marginTop: 56,
          marginBottom: 0,
        }}
      />
    </Container>
  );
}
