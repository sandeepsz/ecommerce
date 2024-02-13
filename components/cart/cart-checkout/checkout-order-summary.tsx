import { useTheme } from 'styled-components';
import { Form, Space } from 'antd';

import { ButtonText } from '@/ui/text';
import Text from '@/ui/text';
import Input from '@/ui/input';
import Button from '@/ui/button';
import SizedBox from '@/ui/sized-box';
import Box from '@/ui/box';
import Icon from '@/components/icons';

import useBreakpoints from '@/utils/useBreakpoints';
import { formatPrice } from '@/utils/formatPrice';

import { InfoField, StyledOrderSummary } from './styles';
import { ProductCell, ProductCellProps } from '../product-cell';

type Items = Omit<ProductCellProps, 'switchMobile'>;

export type CheckoutOrderSummaryProps = {
  appliedCoupons?: {
    code: string;
    discount: number;
  }[];
  orderSummary: {
    items: Items[];
    shipping: number;
    subtotal: number;
    total: number;
  };
};

export const CheckoutOrderSummary = ({
  appliedCoupons,
  orderSummary,
}: CheckoutOrderSummaryProps) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <StyledOrderSummary>
      <ButtonText size='large'>Order Summary</ButtonText>
      {orderSummary.items.map((item) => (
        <ProductCell
          key={item.id}
          switchMobile='large'
          {...item}
        />
      ))}
      <SizedBox height={24} />
      <Form>
        <Box
          display='flex'
          gap={12}
        >
          <Form.Item
            name='coupon'
            style={{ flex: 1 }}
            rules={[{ required: true, message: 'Please enter coupon code!' }]}
          >
            <Input
              fullWidth
              style={{ height: '100%' }}
              placeholder='Input'
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType='submit'
              size={md ? 'medium' : 'small'}
            >
              Apply
            </Button>
          </Form.Item>
        </Box>
      </Form>
      <SizedBox height={16} />
      {appliedCoupons?.map(({ code, discount }) => (
        <InfoField key={code}>
          <Space>
            <Icon
              size={20}
              type='coupon'
            />
            <Text
              size={md ? '16' : '14'}
              color={theme.token.black9}
            >
              {code}
            </Text>
          </Space>
          <Text
            size={md ? '16' : '14'}
            color={theme.token.teal6}
            semibold
          >
            {`-${formatPrice(discount)} [Remove]`}
          </Text>
        </InfoField>
      ))}
      <InfoField>
        <Text
          size={md ? '16' : '14'}
          color={theme.token.black9}
        >
          Shipping
        </Text>
        <Text
          size={md ? '16' : '14'}
          color={theme.token.black9}
          semibold
        >
          {orderSummary.shipping === 0
            ? 'Free'
            : formatPrice(orderSummary.shipping)}
        </Text>
      </InfoField>
      <InfoField>
        <Text
          size={md ? '16' : '14'}
          color={theme.token.black9}
        >
          Subtotal
        </Text>
        <Text
          size={md ? '16' : '14'}
          color={theme.token.black9}
          semibold
        >
          {formatPrice(orderSummary.subtotal)}
        </Text>
      </InfoField>
      <InfoField>
        <Text
          size={md ? '18' : '16'}
          color={theme.token.black9}
          semibold
        >
          Total
        </Text>
        <Text
          size={md ? '18' : '16'}
          color={theme.token.black9}
          semibold
        >
          {formatPrice(orderSummary.total)}
        </Text>
      </InfoField>
    </StyledOrderSummary>
  );
};
