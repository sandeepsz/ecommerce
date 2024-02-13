import Image from 'next/image';

import { Col, Form, Row, Space } from 'antd';

import { MapPin } from '@/ui/map-pin';
import Container from '@/ui/container';
import Box from '@/ui/box';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Input from '@/ui/input';
import Button from '@/ui/button';

import useBreakpoints from '@/utils/useBreakpoints';

import { StyledForm, StyledImagePlaceholder } from './styles';

export const ContactForm2 = () => {
  const { md } = useBreakpoints();

  return (
    <Box>
      <StyledImagePlaceholder>
        <Image
          src='/images/contact/map-2.png'
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
      </StyledImagePlaceholder>
      <Container
        pt={{ base: 0, md: 0 }}
        pb={{ base: 24, md: 32 }}
        style={{
          marginTop: md ? -88 : -62,
          zIndex: 1,
        }}
      >
        <Row gutter={32}>
          <Col
            span={24}
            md={20}
            offset={md ? 2 : 0}
          >
            <StyledForm>
              <Heading as={md ? 'h4' : 'h6'}>Get in touch</Heading>
              <SizedBox height={md ? 56 : 24} />
              <Form layout='vertical'>
                <Space
                  size={md ? 24 : 16}
                  direction='vertical'
                  style={{ width: '100%' }}
                >
                  <Box
                    display='flex'
                    flexDirection={md ? 'row' : 'column'}
                    gap={md ? 24 : 16}
                  >
                    <Form.Item
                      name='firstname'
                      style={{ width: '100%' }}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your First name!',
                        },
                      ]}
                    >
                      <Input
                        fullWidth
                        labelText='First name'
                        placeholder='First name'
                      />
                    </Form.Item>
                    <Form.Item
                      name='lastname'
                      style={{ width: '100%' }}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Last name!',
                        },
                      ]}
                    >
                      <Input
                        fullWidth
                        labelText='Last name'
                        placeholder='Last name'
                      />
                    </Form.Item>
                  </Box>
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
                      size='medium'
                      fullWidth
                    >
                      Send message
                    </Button>
                  </Form.Item>
                </Space>
              </Form>
            </StyledForm>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
