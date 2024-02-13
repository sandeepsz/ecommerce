import { Space } from 'antd';

import { AccountLayout } from '@/components/account/layout';
import { OrderRow } from '@/components/account/orders';

import useBreakpoints from '@/utils/useBreakpoints';

import { accountOrders } from '@/data/account';

const Orders = () => {
  const { md } = useBreakpoints();

  return (
    <AccountLayout pageHeader='My Account'>
      <Space
        direction='vertical'
        size={md ? 10 : 0}
        style={{ width: '100%' }}
      >
        {accountOrders.map((order) => (
          <OrderRow
            key={order.id}
            {...order}
          />
        ))}
      </Space>
    </AccountLayout>
  );
};

export default Orders;
