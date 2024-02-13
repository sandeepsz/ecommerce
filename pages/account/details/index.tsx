import { Col, Row } from 'antd';

import { AccountLayout } from '@/components/account/layout';

import useBreakpoints from '@/utils/useBreakpoints';
import { AccountDetails } from '@/components/account/details';

const Details = () => {
  const { md } = useBreakpoints();

  return (
    <AccountLayout pageHeader='My Account'>
      <Row gutter={32}>
        <Col
          span={24}
          md={18}
          style={{ display: 'flex', gap: 32, flexDirection: 'column' }}
        >
          <AccountDetails />
        </Col>
      </Row>
    </AccountLayout>
  );
};

export default Details;
