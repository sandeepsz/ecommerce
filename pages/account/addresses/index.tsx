import { Col, Row } from 'antd';

import { AccountLayout } from '@/components/account/layout';
import { AddressCard } from '@/components/account/address';

import { accountAddresses } from '@/data/account';

const Addresses = () => (
  <AccountLayout pageHeader='My Account'>
    <Row gutter={[32, 32]}>
      {accountAddresses.map((address, index) => (
        <Col
          key={index}
          span={24}
          md={12}
        >
          <AddressCard {...address} />
        </Col>
      ))}
    </Row>
  </AccountLayout>
);

export default Addresses;
