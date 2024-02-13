import { Col, Row, Space } from 'antd';
import { useTheme } from 'styled-components';

import Box from '@/ui/box';
import Button from '@/ui/button';
import Container from '@/ui/container';
import Heading from '@/ui/headings';
import SizedBox from '@/ui/sized-box';
import Text from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';

import { AddressListItem } from './address-list-item';

export type AddressType = {
  country: string;
  address: {
    street1: string;
    street2: string;
  };
};

export type ContactLocationsProps = {
  tagline: string;
  title: string;
  subtitle: string;
  addressList: [
    AddressType,
    AddressType,
    AddressType,
    AddressType,
    AddressType,
    AddressType,
  ];
};

export const ContactLocations = ({
  tagline,
  title,
  subtitle,
  addressList,
}: ContactLocationsProps) => {
  const theme = useTheme();
  const { md } = useBreakpoints();

  return (
    <Box background={theme.token.black50}>
      <Container py={{ base: 80, md: 120 }}>
        <Row gutter={32}>
          <Col
            span={24}
            md={10}
            offset={md ? 2 : 0}
          >
            <Box
              maxWidth={md ? '408px' : '100%'}
              height='100%'
              display='flex'
              flexDirection='column'
              justifyContent='center'
            >
              <Space
                direction='vertical'
                style={{ width: '100%' }}
              >
                <Heading as='h7'>{tagline}</Heading>
                <Heading as={md ? 'h4' : 'h5'}>{title}</Heading>
                <Text size={md ? '16' : '14'}>{subtitle}</Text>
              </Space>
              <SizedBox height={24} />
              <Button
                color='light'
                type='text'
                size='xSmall'
                rightIcon='arrow'
              >
                Learn more
              </Button>
            </Box>
          </Col>
          <Col
            span={24}
            md={10}
            style={{ marginTop: md ? 0 : 32 }}
          >
            <Row gutter={[80, 24]}>
              {addressList.map((address, index) => (
                <Col
                  span={24}
                  md={12}
                  key={index}
                >
                  <AddressListItem {...address} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
