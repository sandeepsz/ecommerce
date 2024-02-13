import { Col, Row, Space } from 'antd';

import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import Input from '@/ui/input';
import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

export const SearchNotFoundForm = () => {
  const { md } = useBreakpoints();

  return (
    <Container
      pt={{ base: 40, md: 120 }}
      pb={{ base: 120, md: 250 }}
    >
      <Row>
        <Col
          span={24}
          md={16}
          style={{
            textAlign: 'center',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          {md ? (
            <Heading as='h5'>Nothing Found</Heading>
          ) : (
            <ButtonText size='xLarge'>Nothing Found</ButtonText>
          )}
          <SizedBox height={12} />
          <Text size={md ? '18' : '14'}>
            Nothing matched your search terms. Please try again with different
            keywords.
          </Text>
          <SizedBox height={md ? 32 : 24} />
          <Space
            size={md ? 24 : 16}
            style={{ width: md ? 'auto' : '100%' }}
            direction={md ? 'horizontal' : 'vertical'}
          >
            <Input
              fullWidth
              style={{ ...(md && { width: '450px', height: '100%' }) }}
              placeholder='Search...'
              leftIcon='search'
            />
            <Button
              fullWidth={!md}
              size={md ? 'medium' : 'small'}
            >
              Search
            </Button>
          </Space>
        </Col>
      </Row>
    </Container>
  );
};
