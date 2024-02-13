import { useState } from 'react';

import { Col } from 'antd';

import Text from '@/ui/text';
import { ProductQuantityButton } from '@/components/common/product';

import { formatPrice } from '@/utils/formatPrice';

import { StyledCartGroup } from './styles';
import { ProductCellInfo } from './product-cell-info';
import SizedBox from '@/ui/sized-box';
import { useTheme } from 'styled-components';

export type VariantProps = {
  switchMobile?: 'large' | 'small';
};

export type ProductCellProps = VariantProps & {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  subTotal: number;
  variant: {
    size: string;
    color: string;
  };
};

export const ProductCell = ({
  switchMobile,
  quantity,
  price,
  subTotal,
  ...rest
}: ProductCellProps) => {
  const theme = useTheme();

  const [quantityState, setQuantityState] = useState(quantity);

  return (
    <StyledCartGroup
      switchMobile={switchMobile}
      gutter={32}
    >
      <Col
        md={switchMobile === 'small' ? 24 : 12}
        span={24}
      >
        <ProductCellInfo
          switchMobile={switchMobile}
          quantity={quantityState}
          subTotal={subTotal}
          onQuantityIncrease={() => setQuantityState(quantityState + 1)}
          onQuantityDecrease={() => setQuantityState(quantityState - 1)}
          {...rest}
        />
      </Col>
      {!switchMobile && (
        <Col
          span={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ProductQuantityButton
            quantity={quantityState}
            onIncrease={() => setQuantityState(quantityState + 1)}
            onDecrease={() => setQuantityState(quantityState - 1)}
          />
          <Text size='18'>{formatPrice(price)}</Text>
          <Text size='18'>{formatPrice(subTotal)}</Text>
        </Col>
      )}
      <Col span={24}>
        <SizedBox
          height={switchMobile ? 16 : 24}
          style={{
            borderBottom: `1px solid ${theme.token.black3}`,
          }}
        />
      </Col>
    </StyledCartGroup>
  );
};
