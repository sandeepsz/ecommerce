import Image from 'next/image';

import { Col, Form, Row, Space } from 'antd';

import Container from '@/ui/container';
import Input from '@/ui/input';
import Button from '@/ui/button';
import { MapPin } from '@/ui/map-pin';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledMapPlaceholder } from './styles';

export const ContactForm = () => {
  const { md } = useBreakpoints();

  return (
    <Container py={{ base: 16, md: 52 }}>
      <Row gutter={[32, 32]}>
        <Col
          span={24}
          md={8}
          offset={md ? 2 : 0}
          order={md ? 1 : 2}
          style={{
            paddingLeft: md ? 0 : 16,
            paddingRight: md ? 0 : 16,
          }}
        >
          <Form layout='vertical'>
            <Space
              direction='vertical'
              size={24}
              style={{ width: '100%' }}
            >
              <Form.Item
                name='fullname'
                rules={[
                  { required: true, message: 'Please input your Full name!' },
                ]}
              >
                <Input
                  fullWidth
                  labelText='Full name'
                  placeholder='Full name'
                />
              </Form.Item>

              <Form.Item
                name='emailaddress'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email address!',
                  },
                ]}
              >
                <Input
                  fullWidth
                  labelText='Email address'
                  placeholder='Email address'
                />
              </Form.Item>
              <Form.Item
                name='message'
                rules={[
                  {
                    required: true,
                    message: 'Please input your message!',
                  },
                ]}
              >
                <Input
                  fullWidth
                  labelText='Message'
                  placeholder='Your message'
                  textArea
                  rows={8}
                  style={{
                    resize: 'none',
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType='submit'
                  size='xSmall'
                >
                  Send message
                </Button>
              </Form.Item>
            </Space>
          </Form>
        </Col>
        <Col
          span={24}
          md={10}
          offset={md ? 2 : 0}
          order={md ? 2 : 1}
          style={{
            height: md ? 568 : 320,
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <StyledMapPlaceholder>
            <Image
              src='/images/contact/map-1.png'
              alt='map'
              fill
              style={{ objectFit: 'cover' }}
            />
            <MapPin
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            />
          </StyledMapPlaceholder>
        </Col>
      </Row>
    </Container>
  );
};
