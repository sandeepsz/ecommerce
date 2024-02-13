import { Col, Row } from 'antd';

import SizedBox from '@/ui/sized-box';
import Text, { ButtonText } from '@/ui/text';

import useBreakpoints from '@/utils/useBreakpoints';
import { ProductCell, ProductCellProps } from '../product-cell';
import { useTheme } from 'styled-components';

type CartItems = {
  items: ProductCellProps[];
};

export const CartItems = ({ items }: CartItems) => {
  const { md } = useBreakpoints();
  const theme = useTheme();

  return (
    <>
      <Row gutter={32}>
        <Col span={12}>
          <Text size='16'>Product</Text>
        </Col>
        {md && (
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ButtonText size='small'>Quantity</ButtonText>
            <ButtonText size='small'>Price</ButtonText>
            <ButtonText size='small'>Subtotal</ButtonText>
          </Col>
        )}
      </Row>
      <SizedBox
        height={md ? 24 : 12}
        style={{ borderBottom: `1px solid ${theme.token.black3}` }}
      />
      {items.map((item) => (
        <ProductCell
          switchMobile={md ? undefined : 'large'}
          key={item.id}
          {...item}
        />
      ))}
    </>
  );
};
