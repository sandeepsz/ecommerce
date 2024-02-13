import AspectRatio from '@/ui/aspect-ratio';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';
import useBreakpoints from '@/utils/useBreakpoints';
import { Col, Row } from 'antd';
import { Content, Logo, Wrapper } from './styles';

interface Logos1Props {
  title: string;
  subtitle: string;
  buttonText?: string;
  logos: string[];
}

export default function Logos1({
  title,
  subtitle,
  buttonText,
  logos,
}: Logos1Props) {
  const { md, xl } = useBreakpoints();

  return (
    <Container pb={md ? { base: 0, md: 0 } : undefined}>
      <Wrapper>
        <Row
          gutter={md ? 55 : [0, 32]}
          align='middle'
        >
          <Col
            span={24}
            md={12}
          >
            <Content>
              <Heading
                as={md ? 'h4' : 'h5'}
                medium
              >
                {title}
              </Heading>
              <SizedBox height={{ base: 12, md: 16 }} />
              <Text size={md ? '18' : '16'}>{subtitle}</Text>
              <SizedBox height={{ base: 16, md: 24 }} />
              <Button
                type='underline'
                rightIcon='arrow'
                size={md ? 'medium' : 'small'}
              >
                {buttonText ?? 'See all brands'}
              </Button>
            </Content>
          </Col>
          <Col
            span={24}
            md={12}
          >
            <Row
              gutter={md ? [xl ? 80 : 24, 24] : [20, 16]}
              justify='space-between'
            >
              {logos.map((logo, index) => (
                <Col
                  span={12}
                  md={8}
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
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
}
