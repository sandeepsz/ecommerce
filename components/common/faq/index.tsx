import { Row, Col, type CollapseProps } from 'antd';

import { Collapse } from '@/ui/collapse';
import Container from '@/ui/container';
import Heading from '@/ui/headings';

import useBreakpoints from '@/utils/useBreakpoints';

export type FAQProps = {
  title?: string;
  defaultActiveKey?: CollapseProps['defaultActiveKey'];
  items?: CollapseProps['items'];
};

export const FAQ = ({ title, ...rest }: FAQProps) => {
  const { md } = useBreakpoints();

  return (
    <Container py={{ base: 32, md: 64 }}>
      <Row>
        <Col
          span={24}
          md={16}
          offset={md ? 4 : 0}
        >
          <Heading as={md ? 'h5' : 'h6'}>{title}</Heading>
          <Collapse {...rest} />
        </Col>
      </Row>
    </Container>
  );
};
